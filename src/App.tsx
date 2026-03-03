import { useState, useCallback, useRef } from 'react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { svgAssets, categories } from './assets/svgAssets';
import { downloadSinglePDF, downloadAllPDF } from './utils/pdfExport';

function App() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [downloading, setDownloading] = useState(false);
  const [downloadingPDF, setDownloadingPDF] = useState(false);
  const [pdfProgress, setPdfProgress] = useState({ current: 0, total: 0 });
  const [downloadedItems, setDownloadedItems] = useState<Set<string>>(new Set());
  const [showBrandGuide, setShowBrandGuide] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);

  const filteredAssets = Object.entries(svgAssets).filter(
    ([, asset]) => activeCategory === 'All' || asset.category === activeCategory
  );

  const downloadSingleSVG = useCallback((key: string) => {
    const asset = svgAssets[key];
    if (!asset) return;
    const blob = new Blob([asset.svg], { type: 'image/svg+xml' });
    saveAs(blob, `blackacre-${key}.svg`);
    setDownloadedItems(prev => new Set(prev).add(key));
  }, []);

  const downloadAllSVGs = useCallback(async () => {
    setDownloading(true);
    const zip = new JSZip();
    const items = activeCategory === 'All' ? Object.entries(svgAssets) : filteredAssets;

    items.forEach(([key, asset]) => {
      const folder = zip.folder(asset.category.replace(/[^a-zA-Z0-9 ]/g, '').replace(/ /g, '-'));
      folder?.file(`blackacre-${key}.svg`, asset.svg);
    });

    const content = await zip.generateAsync({ type: 'blob' });
    const label = activeCategory === 'All' ? 'complete-toolkit' : activeCategory.toLowerCase().replace(/ /g, '-');
    saveAs(content, `blackacre-${label}.zip`);
    setDownloading(false);
  }, [activeCategory, filteredAssets]);

  const handleSinglePDF = useCallback(async (key: string) => {
    const asset = svgAssets[key];
    if (!asset) return;
    try {
      await downloadSinglePDF(asset.svg, `blackacre-${key}`, asset.name, asset.category);
      setDownloadedItems(prev => new Set(prev).add(`pdf-${key}`));
    } catch (err) {
      console.error('PDF export error:', err);
    }
  }, []);

  const handleAllPDF = useCallback(async () => {
    setDownloadingPDF(true);
    setPdfProgress({ current: 0, total: 0 });

    const items = activeCategory === 'All' ? Object.entries(svgAssets) : filteredAssets;
    const assetList = items.map(([key, asset]) => ({
      key,
      name: asset.name,
      category: asset.category,
      svg: asset.svg,
    }));

    setPdfProgress({ current: 0, total: assetList.length });

    try {
      const label = activeCategory === 'All' ? 'complete-toolkit' : activeCategory.toLowerCase().replace(/ /g, '-');
      await downloadAllPDF(assetList, `blackacre-${label}`, (current, total) => {
        setPdfProgress({ current, total });
      });
    } catch (err) {
      console.error('PDF export error:', err);
    }

    setDownloadingPDF(false);
  }, [activeCategory, filteredAssets]);

  return (
    <div ref={topRef} className="min-h-screen bg-[#FAFAF8]" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* PDF Progress Modal */}
      {downloadingPDF && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] flex items-center justify-center">
          <div className="bg-white p-10 max-w-md w-full mx-6 text-center shadow-2xl" style={{ borderTop: '3px solid #B8956A' }}>
            <div className="w-12 h-12 mx-auto mb-5 border-2 border-[#E8E0D4] border-t-[#B8956A] rounded-full animate-spin" />
            <h3 className="text-xl font-bold text-[#1A1A1A] tracking-wide mb-2" style={{ fontFamily: "'Arimo', sans-serif" }}>
              Generating PDF
            </h3>
            <p className="text-sm text-[#888] mb-6">Rendering assets at high resolution...</p>

            {/* Progress bar */}
            <div className="w-full bg-[#F0EDE8] h-2 mb-3 overflow-hidden">
              <div
                className="h-full bg-[#B8956A] transition-all duration-300 ease-out"
                style={{ width: pdfProgress.total > 0 ? `${(pdfProgress.current / pdfProgress.total) * 100}%` : '0%' }}
              />
            </div>
            <p className="text-xs text-[#999]">
              {pdfProgress.current > 0
                ? `Rendering asset ${pdfProgress.current} of ${pdfProgress.total}...`
                : 'Preparing document...'}
            </p>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <header className="relative bg-[#1A1A1A] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(184,149,106,0.3) 35px, rgba(184,149,106,0.3) 36px)`,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="flex flex-col items-center text-center">
            <div className="border border-[#B8956A]/30 p-6 md:p-10 mb-8">
              <h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-[0.25em] text-white"
                style={{ fontFamily: "'Arimo', sans-serif" }}
              >
                BLACKACRE
              </h1>
              <div className="w-48 h-px bg-[#B8956A] mx-auto mt-4 mb-3" />
              <p
                className="text-sm md:text-base tracking-[0.35em] text-[#888]"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
              >
                DEVELOPMENT & MANAGEMENT
              </p>
            </div>

            <h2
              className="text-2xl md:text-3xl text-white/90 mb-3"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontStyle: 'italic' }}
            >
              Brand Asset Toolkit
            </h2>
            <p className="text-sm text-[#888] max-w-xl tracking-wide leading-relaxed">
              Complete brand assets for logos, typography, color palette, stationery,
              social media templates for Instagram, LinkedIn &amp; Facebook, email graphics,
              signage concepts, and print collateral — including the 28N project.
            </p>

            {/* Download Buttons */}
            <div className="flex flex-wrap gap-3 mt-8 justify-center">
              <button
                onClick={downloadAllSVGs}
                disabled={downloading}
                className="bg-[#B8956A] hover:bg-[#a07d55] text-white px-6 py-3 text-sm tracking-[0.15em] font-medium transition-all duration-300 disabled:opacity-50 flex items-center gap-2"
              >
                {downloading ? (
                  <>
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
                    PACKAGING...
                  </>
                ) : (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
                    ALL SVGs (ZIP)
                  </>
                )}
              </button>
              <button
                onClick={handleAllPDF}
                disabled={downloadingPDF}
                className="bg-[#c0392b] hover:bg-[#a93226] text-white px-6 py-3 text-sm tracking-[0.15em] font-medium transition-all duration-300 disabled:opacity-50 flex items-center gap-2"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M9 15h6M9 11h6"/>
                </svg>
                ALL AS PDF
              </button>
              <button
                onClick={() => setShowBrandGuide(!showBrandGuide)}
                className="border border-white/20 hover:border-[#B8956A] text-white/80 hover:text-[#B8956A] px-6 py-3 text-sm tracking-[0.15em] font-medium transition-all duration-300"
              >
                {showBrandGuide ? 'HIDE' : 'VIEW'} BRAND GUIDE
              </button>
            </div>

            <p className="text-xs text-[#555] mt-4">
              {Object.keys(svgAssets).length} assets · SVG & PDF downloads
            </p>
          </div>
        </div>
      </header>

      {/* Brand Guide Panel */}
      {showBrandGuide && (
        <section className="bg-white border-b border-[#E8E0D4]">
          <div className="max-w-6xl mx-auto px-6 py-16">
            <h3
              className="text-3xl text-center mb-2"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
            >
              Brand Guidelines Summary
            </h3>
            <div className="w-16 h-px bg-[#B8956A] mx-auto mb-12" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Colors */}
              <div>
                <h4 className="text-xs tracking-[0.3em] text-[#B8956A] font-medium mb-6">COLOR PALETTE</h4>
                <div className="space-y-3">
                  {[
                    { name: 'Noir', hex: '#1A1A1A', text: 'white' },
                    { name: 'Charcoal', hex: '#2D2D2D', text: 'white' },
                    { name: 'Brushed Gold', hex: '#B8956A', text: 'white' },
                    { name: 'Warm Sand', hex: '#E8E0D4', text: '#1A1A1A' },
                    { name: 'Ivory', hex: '#FAFAF8', text: '#1A1A1A' },
                  ].map(c => (
                    <div key={c.hex} className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-sm border border-[#E8E0D4]" style={{ backgroundColor: c.hex }} />
                      <div>
                        <p className="text-sm font-medium text-[#1A1A1A]">{c.name}</p>
                        <p className="text-xs text-[#999] font-mono">{c.hex}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Typography */}
              <div>
                <h4 className="text-xs tracking-[0.3em] text-[#B8956A] font-medium mb-6">TYPOGRAPHY</h4>
                <div className="space-y-6">
                  <div>
                    <p className="text-2xl font-bold mb-1" style={{ fontFamily: "'Arimo', sans-serif" }}>Arimo Bold</p>
                    <p className="text-xs text-[#999] tracking-wide">Primary — Logo & Headings</p>
                  </div>
                  <div>
                    <p className="text-2xl mb-1" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>Cormorant Garamond</p>
                    <p className="text-xs text-[#999] tracking-wide">Display — Editorial & Luxury</p>
                  </div>
                  <div>
                    <p className="text-2xl mb-1" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}>Inter Regular</p>
                    <p className="text-xs text-[#999] tracking-wide">Body — UI & Descriptions</p>
                  </div>
                </div>
              </div>

              {/* Principles */}
              <div>
                <h4 className="text-xs tracking-[0.3em] text-[#B8956A] font-medium mb-6">DESIGN PRINCIPLES</h4>
                <div className="space-y-4">
                  {[
                    { title: 'Architectural Precision', desc: 'Clean lines, structured layouts, measured white space' },
                    { title: 'Luxury Restraint', desc: 'Less is more — gold accents used sparingly for impact' },
                    { title: 'Historic + Modern', desc: 'Serif elegance paired with contemporary sans-serif clarity' },
                    { title: 'System Thinking', desc: 'Every asset follows the same grid, palette, and type scale' },
                  ].map(p => (
                    <div key={p.title}>
                      <p className="text-sm font-medium text-[#1A1A1A] mb-0.5">{p.title}</p>
                      <p className="text-xs text-[#888] leading-relaxed">{p.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Category Filters */}
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-[#E8E0D4] shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-hide">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-4 py-2 text-xs tracking-[0.15em] transition-all duration-200 rounded-sm ${
                  activeCategory === cat
                    ? 'bg-[#1A1A1A] text-white'
                    : 'text-[#888] hover:text-[#1A1A1A] hover:bg-[#F0EDE8]'
                }`}
              >
                {cat.toUpperCase()}
                {cat !== 'All' && (
                  <span className="ml-1.5 text-[10px] opacity-50">
                    {Object.values(svgAssets).filter(a => a.category === cat).length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Social Templates Info Banner */}
      {(['Instagram', 'LinkedIn', 'Facebook', 'Email & Cross-Platform'].includes(activeCategory)) && (
        <div className="bg-white border-b border-[#E8E0D4]">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex items-center gap-4">
              <div className={`w-10 h-10 flex items-center justify-center rounded-sm text-white text-sm font-bold ${
                activeCategory === 'Instagram' ? 'bg-gradient-to-br from-purple-600 to-pink-500' :
                activeCategory === 'LinkedIn' ? 'bg-[#0077B5]' :
                activeCategory === 'Facebook' ? 'bg-[#1877F2]' :
                'bg-[#1A1A1A]'
              }`}>
                {activeCategory === 'Instagram' ? 'IG' :
                 activeCategory === 'LinkedIn' ? 'in' :
                 activeCategory === 'Facebook' ? 'f' : '✉'}
              </div>
              <div>
                <h3 className="text-sm font-medium text-[#1A1A1A]">
                  {activeCategory} Templates
                </h3>
                <p className="text-xs text-[#888] mt-0.5">
                  {activeCategory === 'Instagram' ? 'Posts (1080×1080) · Stories (1080×1920) · Reels · Highlight Covers — all editable SVGs' :
                   activeCategory === 'LinkedIn' ? 'Company banners (1584×396) · Posts (1200×627) · Articles · Team spotlights' :
                   activeCategory === 'Facebook' ? 'Cover photos (820×312) · Posts (1200×630) · Event covers · Ads · Video thumbnails' :
                   'Email headers, footers, and cross-platform profile assets'}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Asset Grid */}
      <main className="max-w-7xl mx-auto px-4 md:px-6 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
          <div>
            <h3 className="text-lg font-medium text-[#1A1A1A]">
              {activeCategory === 'All' ? 'All Assets' : activeCategory}
            </h3>
            <p className="text-xs text-[#999] mt-1">{filteredAssets.length} asset{filteredAssets.length !== 1 ? 's' : ''}</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={downloadAllSVGs}
              disabled={downloading}
              className="flex items-center gap-2 text-xs tracking-[0.15em] text-[#B8956A] hover:text-[#8a6d4a] transition-colors font-medium"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
              {downloading ? 'PACKAGING...' : `SVG ZIP`}
            </button>
            <span className="text-[#E8E0D4]">|</span>
            <button
              onClick={handleAllPDF}
              disabled={downloadingPDF}
              className="flex items-center gap-2 text-xs tracking-[0.15em] text-[#c0392b] hover:text-[#a93226] transition-colors font-medium"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/>
              </svg>
              PDF BOOK
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAssets.map(([key, asset]) => (
            <AssetCard
              key={key}
              id={key}
              asset={asset}
              downloaded={downloadedItems.has(key)}
              downloadedPDF={downloadedItems.has(`pdf-${key}`)}
              onDownloadSVG={downloadSingleSVG}
              onDownloadPDF={handleSinglePDF}
            />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white/60">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-xl font-bold tracking-[0.2em] text-white mb-1" style={{ fontFamily: "'Arimo', sans-serif" }}>
                BLACKACRE
              </p>
              <p className="text-xs tracking-[0.2em] text-[#B8956A]">DEVELOPMENT & MANAGEMENT</p>
            </div>
            <div className="text-center text-xs space-y-1">
              <p>Detroit, Michigan</p>
              <p>www.blackacremgt.com</p>
            </div>
            <div className="text-center md:text-right text-xs">
              <p className="text-white/40">Brand Asset Toolkit</p>
              <p className="text-white/30">{Object.keys(svgAssets).length} assets · SVG & PDF · All rights reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ─── Asset Card Component ────────────────────────────────────

interface AssetCardProps {
  id: string;
  asset: { name: string; category: string; svg: string; description: string };
  downloaded: boolean;
  downloadedPDF: boolean;
  onDownloadSVG: (key: string) => void;
  onDownloadPDF: (key: string) => void;
}

function AssetCard({ id, asset, downloaded, downloadedPDF, onDownloadSVG, onDownloadPDF }: AssetCardProps) {
  const [pdfLoading, setPdfLoading] = useState(false);
  const isDark = asset.svg.includes('fill="#1A1A1A"') && !asset.svg.includes('fill="#FFFFFF"');
  const hasDarkBg = asset.svg.includes('fill="#1A1A1A"/>') || asset.category === 'Signage';

  const bgClass = hasDarkBg ? 'bg-[#1A1A1A]' : isDark ? 'bg-white' : 'bg-[#F5F3F0]';

  // Extract dimensions from SVG viewBox
  const viewBoxMatch = asset.svg.match(/viewBox="[^"]*\s(\d+)\s(\d+)"/);
  const dimensions = viewBoxMatch ? `${parseInt(viewBoxMatch[1]) * 2}×${parseInt(viewBoxMatch[2]) * 2}` : null;

  // Platform badge
  const platformColor = asset.category === 'Instagram' ? 'from-purple-600 to-pink-500' :
    asset.category === 'LinkedIn' ? 'from-[#0077B5] to-[#005f8f]' :
    asset.category === 'Facebook' ? 'from-[#1877F2] to-[#1460c8]' :
    asset.category === 'Email & Cross-Platform' ? 'from-[#1A1A1A] to-[#333]' : '';
  const isSocial = ['Instagram', 'LinkedIn', 'Facebook', 'Email & Cross-Platform'].includes(asset.category);

  const handlePDF = async () => {
    setPdfLoading(true);
    try {
      await onDownloadPDF(id);
    } finally {
      setPdfLoading(false);
    }
  };

  return (
    <div className="group bg-white border border-[#E8E0D4] hover:border-[#B8956A]/40 transition-all duration-300 hover:shadow-lg overflow-hidden">
      {/* Preview */}
      <div className={`relative ${bgClass} flex items-center justify-center p-8 min-h-[200px] overflow-hidden`}>
        <div
          className="max-w-full max-h-[180px] w-full flex items-center justify-center [&>svg]:max-w-full [&>svg]:max-h-[180px] [&>svg]:w-auto [&>svg]:h-auto"
          dangerouslySetInnerHTML={{ __html: asset.svg }}
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-300" />
        {/* Platform badge */}
        {isSocial && (
          <div className={`absolute top-3 left-3 bg-gradient-to-r ${platformColor} text-white text-[9px] font-medium px-2 py-1 tracking-wider`}>
            {asset.category === 'Instagram' ? 'IG' : asset.category === 'LinkedIn' ? 'LI' : asset.category === 'Facebook' ? 'FB' : 'EMAIL'}
          </div>
        )}
        {/* Dimension badge */}
        {dimensions && (
          <div className="absolute top-3 right-3 bg-black/60 text-white/80 text-[9px] font-mono px-2 py-1">
            {dimensions}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-4 border-t border-[#E8E0D4]">
        <div className="mb-3">
          <div className="flex items-center gap-2">
            <span className="text-[10px] tracking-[0.2em] text-[#B8956A] font-medium">{asset.category.toUpperCase()}</span>
          </div>
          <h4 className="text-sm font-medium text-[#1A1A1A] mt-0.5 leading-snug">{asset.name}</h4>
          <p className="text-xs text-[#999] mt-1 leading-relaxed">{asset.description}</p>
        </div>

        {/* Download buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => onDownloadSVG(id)}
            className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-[10px] tracking-[0.15em] font-medium transition-all duration-200 ${
              downloaded
                ? 'bg-green-50 text-green-600 border border-green-200'
                : 'bg-[#1A1A1A] text-white hover:bg-[#B8956A]'
            }`}
          >
            {downloaded ? (
              <>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                SVG ✓
              </>
            ) : (
              <>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
                SVG
              </>
            )}
          </button>
          <button
            onClick={handlePDF}
            disabled={pdfLoading}
            className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-[10px] tracking-[0.15em] font-medium transition-all duration-200 ${
              downloadedPDF
                ? 'bg-green-50 text-green-600 border border-green-200'
                : pdfLoading
                ? 'bg-[#e8d5c4] text-[#8a6d4a] cursor-wait'
                : 'bg-[#c0392b] text-white hover:bg-[#a93226]'
            }`}
          >
            {pdfLoading ? (
              <>
                <svg className="animate-spin h-3 w-3" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
                PDF...
              </>
            ) : downloadedPDF ? (
              <>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                PDF ✓
              </>
            ) : (
              <>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/>
                </svg>
                PDF
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
