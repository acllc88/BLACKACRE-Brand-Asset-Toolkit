import jsPDF from 'jspdf';

/**
 * Convert an SVG string to an Image (as PNG via canvas).
 */
function svgToImage(svgString: string, scale: number = 2): Promise<{ img: HTMLImageElement; width: number; height: number }> {
  return new Promise((resolve, reject) => {
    // Parse SVG to get dimensions
    const parser = new DOMParser();
    const svgDoc = parser.parseFromString(svgString, 'image/svg+xml');
    const svgEl = svgDoc.documentElement;

    let width = 800;
    let height = 600;

    // Try viewBox first
    const viewBox = svgEl.getAttribute('viewBox');
    if (viewBox) {
      const parts = viewBox.split(/[\s,]+/).map(Number);
      if (parts.length === 4) {
        width = parts[2];
        height = parts[3];
      }
    }

    // Try explicit width/height attributes
    const wAttr = svgEl.getAttribute('width');
    const hAttr = svgEl.getAttribute('height');
    if (wAttr && hAttr) {
      width = parseFloat(wAttr);
      height = parseFloat(hAttr);
    }

    const canvas = document.createElement('canvas');
    canvas.width = width * scale;
    canvas.height = height * scale;
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      reject(new Error('Could not get canvas context'));
      return;
    }

    ctx.scale(scale, scale);

    const img = new Image();
    img.crossOrigin = 'anonymous';

    const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);

    img.onload = () => {
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, width, height);
      ctx.drawImage(img, 0, 0, width, height);
      URL.revokeObjectURL(url);

      const pngDataUrl = canvas.toDataURL('image/png', 1.0);
      const resultImg = new Image();
      resultImg.onload = () => {
        resolve({ img: resultImg, width, height });
      };
      resultImg.onerror = reject;
      resultImg.src = pngDataUrl;
    };

    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error('Failed to load SVG as image'));
    };

    img.src = url;
  });
}

/**
 * Download a single SVG asset as a PDF.
 */
export async function downloadSinglePDF(
  svgString: string,
  fileName: string,
  assetName: string,
  category: string
): Promise<void> {
  const { img, width, height } = await svgToImage(svgString, 3);

  // Determine page orientation
  const isLandscape = width > height * 1.3;
  const orientation = isLandscape ? 'landscape' : 'portrait';

  const pdf = new jsPDF({
    orientation,
    unit: 'pt',
    format: 'a4',
  });

  const pageW = pdf.internal.pageSize.getWidth();
  const pageH = pdf.internal.pageSize.getHeight();

  // Header
  pdf.setFillColor(26, 26, 26);
  pdf.rect(0, 0, pageW, 52, 'F');
  pdf.setFillColor(184, 149, 106);
  pdf.rect(0, 52, pageW, 2, 'F');

  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(14);
  pdf.setTextColor(255, 255, 255);
  pdf.text('BLACKACRE', 30, 32);

  pdf.setFont('helvetica', 'normal');
  pdf.setFontSize(8);
  pdf.setTextColor(184, 149, 106);
  pdf.text('BRAND ASSET TOOLKIT', pageW - 30, 32, { align: 'right' });

  // Asset info
  pdf.setFontSize(8);
  pdf.setTextColor(184, 149, 106);
  pdf.text(category.toUpperCase(), 30, 80);

  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(18);
  pdf.setTextColor(26, 26, 26);
  pdf.text(assetName, 30, 100);

  // Draw gold divider
  pdf.setDrawColor(184, 149, 106);
  pdf.setLineWidth(0.5);
  pdf.line(30, 112, 180, 112);

  // Calculate image dimensions to fit the page
  const maxImgW = pageW - 80;
  const maxImgH = pageH - 200;
  const imgAspect = width / height;
  let drawW = maxImgW;
  let drawH = drawW / imgAspect;

  if (drawH > maxImgH) {
    drawH = maxImgH;
    drawW = drawH * imgAspect;
  }

  const imgX = (pageW - drawW) / 2;
  const imgY = 130;

  // Light background for image area
  pdf.setFillColor(250, 250, 248);
  pdf.setDrawColor(232, 224, 212);
  pdf.setLineWidth(0.5);
  pdf.roundedRect(imgX - 10, imgY - 5, drawW + 20, drawH + 15, 2, 2, 'FD');

  // Add the image
  const canvas = document.createElement('canvas');
  canvas.width = img.width;
  canvas.height = img.height;
  const ctx = canvas.getContext('2d')!;
  ctx.drawImage(img, 0, 0);
  const imgData = canvas.toDataURL('image/png', 1.0);

  pdf.addImage(imgData, 'PNG', imgX, imgY, drawW, drawH);

  // Footer
  const footerY = pageH - 30;
  pdf.setDrawColor(232, 224, 212);
  pdf.setLineWidth(0.5);
  pdf.line(30, footerY - 10, pageW - 30, footerY - 10);

  pdf.setFont('helvetica', 'normal');
  pdf.setFontSize(7);
  pdf.setTextColor(170, 170, 170);
  pdf.text('BLACKACRE DEVELOPMENT & MANAGEMENT', 30, footerY);
  pdf.text('www.blackacremgt.com', pageW - 30, footerY, { align: 'right' });

  pdf.save(`${fileName}.pdf`);
}

/**
 * Download multiple SVG assets as a multi-page PDF.
 */
export async function downloadAllPDF(
  assets: Array<{ key: string; name: string; category: string; svg: string }>,
  fileName: string,
  onProgress?: (current: number, total: number) => void
): Promise<void> {
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'pt',
    format: 'a4',
  });

  const pageW = pdf.internal.pageSize.getWidth();
  const pageH = pdf.internal.pageSize.getHeight();

  // ─── COVER PAGE ────────────────────────────────
  pdf.setFillColor(26, 26, 26);
  pdf.rect(0, 0, pageW, pageH, 'F');

  // Gold border
  pdf.setDrawColor(184, 149, 106);
  pdf.setLineWidth(0.5);
  pdf.rect(20, 20, pageW - 40, pageH - 40);

  // Inner border
  pdf.setDrawColor(60, 60, 60);
  pdf.setLineWidth(0.3);
  pdf.rect(26, 26, pageW - 52, pageH - 52);

  // Logo
  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(42);
  pdf.setTextColor(255, 255, 255);
  pdf.text('BLACKACRE', pageW / 2, pageH / 2 - 30, { align: 'center' });

  // Gold line
  pdf.setDrawColor(184, 149, 106);
  pdf.setLineWidth(0.75);
  pdf.line(pageW / 2 - 100, pageH / 2 - 8, pageW / 2 + 100, pageH / 2 - 8);

  // Subtitle
  pdf.setFont('helvetica', 'normal');
  pdf.setFontSize(11);
  pdf.setTextColor(150, 150, 150);
  pdf.text('DEVELOPMENT & MANAGEMENT', pageW / 2, pageH / 2 + 20, { align: 'center' });

  // Toolkit label
  pdf.setFontSize(14);
  pdf.setTextColor(184, 149, 106);
  pdf.text('Brand Asset Toolkit', pageW / 2, pageH / 2 + 60, { align: 'center' });

  // Asset count
  pdf.setFontSize(9);
  pdf.setTextColor(100, 100, 100);
  pdf.text(`${assets.length} Assets · PDF Export`, pageW / 2, pageH / 2 + 85, { align: 'center' });

  // Bottom of cover
  pdf.setFontSize(8);
  pdf.setTextColor(80, 80, 80);
  pdf.text('Detroit, Michigan', pageW / 2, pageH - 55, { align: 'center' });
  pdf.text('www.blackacremgt.com', pageW / 2, pageH - 42, { align: 'center' });

  // ─── TABLE OF CONTENTS ─────────────────────────
  pdf.addPage();
  drawPageHeader(pdf, pageW);

  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(22);
  pdf.setTextColor(26, 26, 26);
  pdf.text('Table of Contents', 40, 90);

  pdf.setDrawColor(184, 149, 106);
  pdf.setLineWidth(0.5);
  pdf.line(40, 102, 160, 102);

  let tocY = 130;
  let currentCat = '';
  let assetNum = 0;

  for (const asset of assets) {
    if (asset.category !== currentCat) {
      currentCat = asset.category;
      tocY += 8;
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(10);
      pdf.setTextColor(184, 149, 106);
      pdf.text(currentCat.toUpperCase(), 40, tocY);
      tocY += 5;
      pdf.setDrawColor(232, 224, 212);
      pdf.setLineWidth(0.3);
      pdf.line(40, tocY, pageW - 40, tocY);
      tocY += 16;
    }

    assetNum++;
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(9);
    pdf.setTextColor(80, 80, 80);
    pdf.text(`${assetNum}.`, 48, tocY);
    pdf.setTextColor(26, 26, 26);
    pdf.text(asset.name, 66, tocY);

    // Dotted line
    pdf.setDrawColor(220, 220, 220);
    pdf.setLineDashPattern([1, 2], 0);
    const nameWidth = pdf.getTextWidth(asset.name);
    pdf.line(70 + nameWidth, tocY - 1, pageW - 70, tocY - 1);
    pdf.setLineDashPattern([], 0);

    pdf.setTextColor(150, 150, 150);
    pdf.text(`pg ${assetNum + 2}`, pageW - 50, tocY, { align: 'right' });

    tocY += 18;

    if (tocY > pageH - 60) {
      pdf.addPage();
      drawPageHeader(pdf, pageW);
      tocY = 80;
    }
  }

  drawPageFooter(pdf, pageW, pageH, 2);

  // ─── ASSET PAGES ───────────────────────────────
  for (let i = 0; i < assets.length; i++) {
    const asset = assets[i];
    if (onProgress) onProgress(i + 1, assets.length);

    pdf.addPage();

    drawPageHeader(pdf, pageW);

    // Category + Name
    pdf.setFontSize(8);
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(184, 149, 106);
    pdf.text(asset.category.toUpperCase(), 40, 80);

    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(20);
    pdf.setTextColor(26, 26, 26);
    pdf.text(asset.name, 40, 102);

    // Gold divider
    pdf.setDrawColor(184, 149, 106);
    pdf.setLineWidth(0.5);
    pdf.line(40, 114, 200, 114);

    // Render SVG to image
    try {
      const { img, width, height } = await svgToImage(asset.svg, 3);

      const maxImgW = pageW - 80;
      const maxImgH = pageH - 260;
      const imgAspect = width / height;
      let drawW = maxImgW;
      let drawH = drawW / imgAspect;

      if (drawH > maxImgH) {
        drawH = maxImgH;
        drawW = drawH * imgAspect;
      }

      const imgX = (pageW - drawW) / 2;
      const imgY = 135;

      // Background for image
      pdf.setFillColor(250, 250, 248);
      pdf.setDrawColor(232, 224, 212);
      pdf.setLineWidth(0.5);
      pdf.roundedRect(imgX - 12, imgY - 8, drawW + 24, drawH + 20, 3, 3, 'FD');

      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d')!;
      ctx.drawImage(img, 0, 0);
      const imgData = canvas.toDataURL('image/png', 1.0);

      pdf.addImage(imgData, 'PNG', imgX, imgY, drawW, drawH);

      // Info box below image
      const infoY = imgY + drawH + 35;
      if (infoY < pageH - 80) {
        pdf.setFillColor(26, 26, 26);
        pdf.roundedRect(40, infoY, pageW - 80, 42, 2, 2, 'F');

        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(8);
        pdf.setTextColor(184, 149, 106);
        pdf.text('ASSET', 55, infoY + 16);
        pdf.setTextColor(255, 255, 255);
        pdf.text(asset.name, 95, infoY + 16);

        pdf.setTextColor(184, 149, 106);
        pdf.text('FORMAT', 55, infoY + 32);
        pdf.setTextColor(255, 255, 255);
        pdf.text(`SVG · ${width}×${height}px`, 100, infoY + 32);

        pdf.setTextColor(184, 149, 106);
        pdf.text('CATEGORY', pageW / 2, infoY + 16);
        pdf.setTextColor(255, 255, 255);
        pdf.text(asset.category, pageW / 2 + 65, infoY + 16);
      }
    } catch {
      // Fallback if SVG rendering fails
      pdf.setFillColor(245, 243, 240);
      pdf.roundedRect(40, 135, pageW - 80, 300, 3, 3, 'F');
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(11);
      pdf.setTextColor(150, 150, 150);
      pdf.text('Asset preview could not be rendered.', pageW / 2, 290, { align: 'center' });
      pdf.text('Please download the SVG file directly.', pageW / 2, 308, { align: 'center' });
    }

    drawPageFooter(pdf, pageW, pageH, i + 3);
  }

  pdf.save(`${fileName}.pdf`);
}

function drawPageHeader(pdf: jsPDF, pageW: number) {
  pdf.setFillColor(26, 26, 26);
  pdf.rect(0, 0, pageW, 50, 'F');
  pdf.setFillColor(184, 149, 106);
  pdf.rect(0, 50, pageW, 1.5, 'F');

  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(12);
  pdf.setTextColor(255, 255, 255);
  pdf.text('BLACKACRE', 30, 30);

  pdf.setFont('helvetica', 'normal');
  pdf.setFontSize(7);
  pdf.setTextColor(184, 149, 106);
  pdf.text('BRAND ASSET TOOLKIT', pageW - 30, 30, { align: 'right' });
}

function drawPageFooter(pdf: jsPDF, pageW: number, pageH: number, pageNum: number) {
  pdf.setDrawColor(232, 224, 212);
  pdf.setLineWidth(0.3);
  pdf.line(30, pageH - 35, pageW - 30, pageH - 35);

  pdf.setFont('helvetica', 'normal');
  pdf.setFontSize(7);
  pdf.setTextColor(170, 170, 170);
  pdf.text('BLACKACRE DEVELOPMENT & MANAGEMENT  ·  DETROIT, MI', 30, pageH - 22);
  pdf.text(`${pageNum}`, pageW - 30, pageH - 22, { align: 'right' });
}
