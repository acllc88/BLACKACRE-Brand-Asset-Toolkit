// All SVG assets as string templates for BLACKACRE brand toolkit
import { socialTemplates } from './socialTemplates';

const coreAssets: Record<string, { name: string; category: string; svg: string; description: string }> = {
  // ─── PRIMARY LOGOS ─────────────────────────────────────────
  'logo-primary-dark': {
    name: 'BLACKACRE Logo — Dark',
    category: 'Logos',
    description: 'Primary wordmark on transparent background',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 120" width="800" height="120">
  <style>@import url('https://fonts.googleapis.com/css2?family=Arimo:wght@700');</style>
  <text x="400" y="88" text-anchor="middle" font-family="Arimo, sans-serif" font-weight="700" font-size="96" fill="#1A1A1A" letter-spacing="18">BLACKACRE</text>
</svg>`
  },
  'logo-primary-white': {
    name: 'BLACKACRE Logo — White',
    category: 'Logos',
    description: 'White wordmark for dark backgrounds',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 120" width="800" height="120">
  <style>@import url('https://fonts.googleapis.com/css2?family=Arimo:wght@700');</style>
  <text x="400" y="88" text-anchor="middle" font-family="Arimo, sans-serif" font-weight="700" font-size="96" fill="#FFFFFF" letter-spacing="18">BLACKACRE</text>
</svg>`
  },
  'logo-primary-gold': {
    name: 'BLACKACRE Logo — Gold',
    category: 'Logos',
    description: 'Gold accent wordmark for premium materials',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 120" width="800" height="120">
  <style>@import url('https://fonts.googleapis.com/css2?family=Arimo:wght@700');</style>
  <text x="400" y="88" text-anchor="middle" font-family="Arimo, sans-serif" font-weight="700" font-size="96" fill="#B8956A" letter-spacing="18">BLACKACRE</text>
</svg>`
  },
  'logo-lockup-dark': {
    name: 'BLACKACRE Lockup — Dark',
    category: 'Logos',
    description: 'Wordmark with tagline lockup',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 160" width="800" height="160">
  <style>@import url('https://fonts.googleapis.com/css2?family=Arimo:wght@700&amp;family=Cormorant+Garamond:ital,wght@0,300');</style>
  <text x="400" y="80" text-anchor="middle" font-family="Arimo, sans-serif" font-weight="700" font-size="80" fill="#1A1A1A" letter-spacing="16">BLACKACRE</text>
  <line x1="240" y1="100" x2="560" y2="100" stroke="#B8956A" stroke-width="1"/>
  <text x="400" y="135" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="300" font-style="italic" font-size="22" fill="#555555" letter-spacing="8">DEVELOPMENT &amp; MANAGEMENT</text>
</svg>`
  },
  'logo-monogram': {
    name: 'BLACKACRE Monogram — B',
    category: 'Logos',
    description: 'Single letter monogram mark',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
  <style>@import url('https://fonts.googleapis.com/css2?family=Arimo:wght@700');</style>
  <rect x="10" y="10" width="180" height="180" fill="none" stroke="#1A1A1A" stroke-width="2"/>
  <rect x="18" y="18" width="164" height="164" fill="none" stroke="#B8956A" stroke-width="0.5"/>
  <text x="100" y="130" text-anchor="middle" font-family="Arimo, sans-serif" font-weight="700" font-size="120" fill="#1A1A1A">B</text>
</svg>`
  },
  'logo-monogram-filled': {
    name: 'BLACKACRE Monogram — Filled',
    category: 'Logos',
    description: 'Filled monogram for avatars & favicons',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
  <style>@import url('https://fonts.googleapis.com/css2?family=Arimo:wght@700');</style>
  <rect width="200" height="200" fill="#1A1A1A"/>
  <rect x="8" y="8" width="184" height="184" fill="none" stroke="#B8956A" stroke-width="0.5"/>
  <text x="100" y="132" text-anchor="middle" font-family="Arimo, sans-serif" font-weight="700" font-size="120" fill="#FFFFFF">B</text>
</svg>`
  },

  // ─── 28N PROJECT ───────────────────────────────────────────
  '28n-logo-primary': {
    name: '28N Logo — Primary',
    category: '28N Project',
    description: 'Primary 28N project wordmark',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 200" width="600" height="200">
  <style>@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;600');</style>
  <text x="300" y="110" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="600" font-size="120" fill="#1A1A1A" letter-spacing="8">28N</text>
  <line x1="160" y1="135" x2="440" y2="135" stroke="#B8956A" stroke-width="1"/>
  <text x="300" y="168" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="300" font-size="18" fill="#666666" letter-spacing="10">MODERN LOFT RESIDENCES</text>
</svg>`
  },
  '28n-logo-white': {
    name: '28N Logo — White',
    category: '28N Project',
    description: '28N logo for dark backgrounds',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 200" width="600" height="200">
  <style>@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;600');</style>
  <text x="300" y="110" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="600" font-size="120" fill="#FFFFFF" letter-spacing="8">28N</text>
  <line x1="160" y1="135" x2="440" y2="135" stroke="#B8956A" stroke-width="1"/>
  <text x="300" y="168" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="300" font-size="18" fill="#CCCCCC" letter-spacing="10">MODERN LOFT RESIDENCES</text>
</svg>`
  },
  '28n-badge': {
    name: '28N Badge Mark',
    category: '28N Project',
    description: 'Compact badge for collateral & signage',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" width="240" height="240">
  <style>@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;600');</style>
  <circle cx="120" cy="120" r="110" fill="none" stroke="#1A1A1A" stroke-width="1.5"/>
  <circle cx="120" cy="120" r="102" fill="none" stroke="#B8956A" stroke-width="0.5"/>
  <text x="120" y="125" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="600" font-size="72" fill="#1A1A1A" letter-spacing="4">28N</text>
  <text x="120" y="155" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="300" font-size="11" fill="#888888" letter-spacing="6">DETROIT</text>
</svg>`
  },
  '28n-unit-marker': {
    name: '28N Unit / Floor Marker',
    category: '28N Project',
    description: 'Wayfinding marker for floor plans & signage',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 60" width="160" height="60">
  <style>@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;500');</style>
  <rect width="160" height="60" fill="#1A1A1A"/>
  <text x="80" y="25" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="9" fill="#B8956A" letter-spacing="4">UNIT</text>
  <text x="80" y="48" text-anchor="middle" font-family="Inter, sans-serif" font-weight="500" font-size="22" fill="#FFFFFF" letter-spacing="2">301</text>
</svg>`
  },

  // ─── BRAND PATTERNS & ELEMENTS ─────────────────────────────
  'pattern-geometric': {
    name: 'Geometric Pattern',
    category: 'Patterns & Elements',
    description: 'Architectural geometric pattern tile',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="400" height="400">
  <defs>
    <pattern id="geo" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
      <rect width="100" height="100" fill="#FAFAF8"/>
      <line x1="0" y1="0" x2="100" y2="100" stroke="#E8E0D4" stroke-width="0.5"/>
      <line x1="100" y1="0" x2="0" y2="100" stroke="#E8E0D4" stroke-width="0.5"/>
      <line x1="50" y1="0" x2="50" y2="100" stroke="#E8E0D4" stroke-width="0.3"/>
      <line x1="0" y1="50" x2="100" y2="50" stroke="#E8E0D4" stroke-width="0.3"/>
      <rect x="40" y="40" width="20" height="20" fill="none" stroke="#B8956A" stroke-width="0.5"/>
    </pattern>
  </defs>
  <rect width="400" height="400" fill="url(#geo)"/>
</svg>`
  },
  'pattern-lines': {
    name: 'Pinstripe Pattern',
    category: 'Patterns & Elements',
    description: 'Subtle pinstripe for backgrounds',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="400" height="400">
  <defs>
    <pattern id="pin" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
      <rect width="20" height="20" fill="#FAFAF8"/>
      <line x1="10" y1="0" x2="10" y2="20" stroke="#E8E0D4" stroke-width="0.5"/>
    </pattern>
  </defs>
  <rect width="400" height="400" fill="url(#pin)"/>
</svg>`
  },
  'divider-gold': {
    name: 'Gold Divider Line',
    category: 'Patterns & Elements',
    description: 'Decorative gold separator for layouts',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 20" width="600" height="20">
  <line x1="0" y1="10" x2="260" y2="10" stroke="#B8956A" stroke-width="0.75"/>
  <rect x="270" y="5" width="10" height="10" fill="none" stroke="#B8956A" stroke-width="0.75" transform="rotate(45,275,10)"/>
  <line x1="290" y1="10" x2="600" y2="10" stroke="#B8956A" stroke-width="0.75"/>
</svg>`
  },
  'divider-simple': {
    name: 'Simple Divider',
    category: 'Patterns & Elements',
    description: 'Minimal line divider',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 10" width="600" height="10">
  <line x1="200" y1="5" x2="400" y2="5" stroke="#1A1A1A" stroke-width="0.75"/>
</svg>`
  },
  'corner-ornament': {
    name: 'Corner Ornament',
    category: 'Patterns & Elements',
    description: 'Decorative corner for print materials',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120">
  <line x1="0" y1="0" x2="100" y2="0" stroke="#B8956A" stroke-width="1"/>
  <line x1="0" y1="0" x2="0" y2="100" stroke="#B8956A" stroke-width="1"/>
  <line x1="10" y1="10" x2="60" y2="10" stroke="#B8956A" stroke-width="0.5"/>
  <line x1="10" y1="10" x2="10" y2="60" stroke="#B8956A" stroke-width="0.5"/>
  <rect x="4" y="4" width="6" height="6" fill="#B8956A" opacity="0.3"/>
</svg>`
  },

  // ─── ICONS ─────────────────────────────────────────────────
  'icon-building': {
    name: 'Building Icon',
    category: 'Icons',
    description: 'Architectural building silhouette',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" width="80" height="80">
  <rect x="20" y="15" width="40" height="55" fill="none" stroke="#1A1A1A" stroke-width="1.5"/>
  <rect x="28" y="22" width="8" height="8" fill="none" stroke="#B8956A" stroke-width="0.75"/>
  <rect x="44" y="22" width="8" height="8" fill="none" stroke="#B8956A" stroke-width="0.75"/>
  <rect x="28" y="36" width="8" height="8" fill="none" stroke="#B8956A" stroke-width="0.75"/>
  <rect x="44" y="36" width="8" height="8" fill="none" stroke="#B8956A" stroke-width="0.75"/>
  <rect x="28" y="50" width="8" height="8" fill="none" stroke="#B8956A" stroke-width="0.75"/>
  <rect x="44" y="50" width="8" height="8" fill="none" stroke="#B8956A" stroke-width="0.75"/>
  <rect x="35" y="58" width="10" height="12" fill="none" stroke="#1A1A1A" stroke-width="1"/>
</svg>`
  },
  'icon-key': {
    name: 'Key Icon',
    category: 'Icons',
    description: 'Elegant key for residential branding',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" width="80" height="80">
  <circle cx="28" cy="30" r="12" fill="none" stroke="#1A1A1A" stroke-width="1.5"/>
  <circle cx="28" cy="30" r="5" fill="none" stroke="#B8956A" stroke-width="0.75"/>
  <line x1="40" y1="30" x2="65" y2="30" stroke="#1A1A1A" stroke-width="1.5"/>
  <line x1="55" y1="30" x2="55" y2="38" stroke="#1A1A1A" stroke-width="1.5"/>
  <line x1="62" y1="30" x2="62" y2="38" stroke="#1A1A1A" stroke-width="1.5"/>
</svg>`
  },
  'icon-compass': {
    name: 'Compass Icon',
    category: 'Icons',
    description: 'Directional compass for wayfinding',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" width="80" height="80">
  <circle cx="40" cy="40" r="25" fill="none" stroke="#1A1A1A" stroke-width="1.5"/>
  <circle cx="40" cy="40" r="3" fill="#B8956A"/>
  <polygon points="40,18 43,37 40,34 37,37" fill="#1A1A1A"/>
  <polygon points="40,62 43,43 40,46 37,43" fill="#B8956A" opacity="0.5"/>
  <polygon points="18,40 37,37 34,40 37,43" fill="#B8956A" opacity="0.5"/>
  <polygon points="62,40 43,37 46,40 43,43" fill="#B8956A" opacity="0.5"/>
</svg>`
  },
  'icon-floorplan': {
    name: 'Floor Plan Icon',
    category: 'Icons',
    description: 'Simplified floor plan icon',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" width="80" height="80">
  <rect x="12" y="12" width="56" height="56" fill="none" stroke="#1A1A1A" stroke-width="1.5"/>
  <line x1="40" y1="12" x2="40" y2="45" stroke="#1A1A1A" stroke-width="1"/>
  <line x1="12" y1="42" x2="30" y2="42" stroke="#1A1A1A" stroke-width="1"/>
  <line x1="50" y1="42" x2="68" y2="42" stroke="#1A1A1A" stroke-width="1"/>
  <rect x="20" y="20" width="10" height="10" fill="#B8956A" opacity="0.15" stroke="#B8956A" stroke-width="0.5"/>
  <rect x="50" y="20" width="10" height="10" fill="#B8956A" opacity="0.15" stroke="#B8956A" stroke-width="0.5"/>
</svg>`
  },
  'icon-location': {
    name: 'Location Pin Icon',
    category: 'Icons',
    description: 'Map pin marker',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" width="80" height="80">
  <path d="M40,12 C28,12 20,22 20,32 C20,48 40,68 40,68 C40,68 60,48 60,32 C60,22 52,12 40,12Z" fill="none" stroke="#1A1A1A" stroke-width="1.5"/>
  <circle cx="40" cy="32" r="8" fill="none" stroke="#B8956A" stroke-width="1"/>
  <circle cx="40" cy="32" r="3" fill="#B8956A"/>
</svg>`
  },
  'icon-coffee': {
    name: 'Coffee Icon',
    category: 'Icons',
    description: 'Coffee cup for hospitality branding',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" width="80" height="80">
  <path d="M18,30 L22,62 L52,62 L56,30 Z" fill="none" stroke="#1A1A1A" stroke-width="1.5"/>
  <path d="M56,35 C56,35 68,35 68,45 C68,55 56,55 56,55" fill="none" stroke="#1A1A1A" stroke-width="1.5"/>
  <path d="M30,22 C30,18 34,16 34,12" fill="none" stroke="#B8956A" stroke-width="1" opacity="0.6"/>
  <path d="M37,24 C37,18 41,16 41,10" fill="none" stroke="#B8956A" stroke-width="1" opacity="0.6"/>
  <path d="M44,22 C44,18 48,16 48,12" fill="none" stroke="#B8956A" stroke-width="1" opacity="0.6"/>
  <line x1="15" y1="68" x2="60" y2="68" stroke="#1A1A1A" stroke-width="1.5"/>
</svg>`
  },

  // ─── COLOR PALETTE SWATCHES ────────────────────────────────
  'swatch-palette': {
    name: 'Brand Color Palette',
    category: 'Color Palette',
    description: 'Complete color system with hex values',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 280" width="900" height="280">
  <style>@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;500');</style>
  <!-- Noir -->
  <rect x="0" y="0" width="140" height="200" fill="#1A1A1A"/>
  <text x="70" y="230" text-anchor="middle" font-family="Inter, sans-serif" font-weight="500" font-size="12" fill="#1A1A1A">Noir</text>
  <text x="70" y="250" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="11" fill="#888">#1A1A1A</text>
  <!-- Charcoal -->
  <rect x="155" y="0" width="140" height="200" fill="#2D2D2D"/>
  <text x="225" y="230" text-anchor="middle" font-family="Inter, sans-serif" font-weight="500" font-size="12" fill="#1A1A1A">Charcoal</text>
  <text x="225" y="250" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="11" fill="#888">#2D2D2D</text>
  <!-- Brushed Gold -->
  <rect x="310" y="0" width="140" height="200" fill="#B8956A"/>
  <text x="380" y="230" text-anchor="middle" font-family="Inter, sans-serif" font-weight="500" font-size="12" fill="#1A1A1A">Brushed Gold</text>
  <text x="380" y="250" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="11" fill="#888">#B8956A</text>
  <!-- Warm Sand -->
  <rect x="465" y="0" width="140" height="200" fill="#E8E0D4"/>
  <text x="535" y="230" text-anchor="middle" font-family="Inter, sans-serif" font-weight="500" font-size="12" fill="#1A1A1A">Warm Sand</text>
  <text x="535" y="250" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="11" fill="#888">#E8E0D4</text>
  <!-- Ivory -->
  <rect x="620" y="0" width="140" height="200" fill="#FAFAF8" stroke="#E0E0E0" stroke-width="0.5"/>
  <text x="690" y="230" text-anchor="middle" font-family="Inter, sans-serif" font-weight="500" font-size="12" fill="#1A1A1A">Ivory</text>
  <text x="690" y="250" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="11" fill="#888">#FAFAF8</text>
  <!-- Pure White -->
  <rect x="775" y="0" width="140" height="200" fill="#FFFFFF" stroke="#E0E0E0" stroke-width="0.5"/>
  <text x="845" y="230" text-anchor="middle" font-family="Inter, sans-serif" font-weight="500" font-size="12" fill="#1A1A1A">White</text>
  <text x="845" y="250" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="11" fill="#888">#FFFFFF</text>
</svg>`
  },

  // ─── TYPOGRAPHY SPECIMENS ──────────────────────────────────
  'type-specimen-arimo': {
    name: 'Typography — Arimo',
    category: 'Typography',
    description: 'Primary typeface specimen (headings & logo)',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 350" width="700" height="350">
  <style>@import url('https://fonts.googleapis.com/css2?family=Arimo:wght@400;500;600;700');</style>
  <text x="0" y="40" font-family="Arimo, sans-serif" font-weight="700" font-size="14" fill="#B8956A" letter-spacing="4">PRIMARY TYPEFACE</text>
  <text x="0" y="100" font-family="Arimo, sans-serif" font-weight="700" font-size="64" fill="#1A1A1A">Arimo Bold</text>
  <text x="0" y="140" font-family="Arimo, sans-serif" font-weight="600" font-size="36" fill="#2D2D2D">Arimo SemiBold</text>
  <text x="0" y="175" font-family="Arimo, sans-serif" font-weight="500" font-size="28" fill="#444">Arimo Medium</text>
  <text x="0" y="205" font-family="Arimo, sans-serif" font-weight="400" font-size="22" fill="#666">Arimo Regular</text>
  <line x1="0" y1="225" x2="700" y2="225" stroke="#E8E0D4" stroke-width="0.5"/>
  <text x="0" y="260" font-family="Arimo, sans-serif" font-weight="700" font-size="28" fill="#1A1A1A" letter-spacing="6">ABCDEFGHIJKLMNOPQRSTUVWXYZ</text>
  <text x="0" y="295" font-family="Arimo, sans-serif" font-weight="400" font-size="24" fill="#444">abcdefghijklmnopqrstuvwxyz</text>
  <text x="0" y="330" font-family="Arimo, sans-serif" font-weight="400" font-size="24" fill="#888">0123456789 !@#$%&amp;*</text>
</svg>`
  },
  'type-specimen-cormorant': {
    name: 'Typography — Cormorant Garamond',
    category: 'Typography',
    description: 'Display typeface specimen (editorial & luxury)',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 350" width="700" height="350">
  <style>@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400');</style>
  <text x="0" y="40" font-family="'Cormorant Garamond', serif" font-weight="300" font-size="14" fill="#B8956A" letter-spacing="4">DISPLAY TYPEFACE</text>
  <text x="0" y="105" font-family="'Cormorant Garamond', serif" font-weight="700" font-size="64" fill="#1A1A1A">Cormorant Garamond</text>
  <text x="0" y="145" font-family="'Cormorant Garamond', serif" font-weight="400" font-style="italic" font-size="36" fill="#444">Light Italic for elegance</text>
  <text x="0" y="180" font-family="'Cormorant Garamond', serif" font-weight="300" font-size="28" fill="#666">Light weight for body text</text>
  <line x1="0" y1="205" x2="700" y2="205" stroke="#E8E0D4" stroke-width="0.5"/>
  <text x="0" y="245" font-family="'Cormorant Garamond', serif" font-weight="600" font-size="28" fill="#1A1A1A" letter-spacing="4">ABCDEFGHIJKLMNOPQRSTUVWXYZ</text>
  <text x="0" y="285" font-family="'Cormorant Garamond', serif" font-weight="400" font-style="italic" font-size="28" fill="#444">abcdefghijklmnopqrstuvwxyz</text>
  <text x="0" y="325" font-family="'Cormorant Garamond', serif" font-weight="300" font-size="24" fill="#888">0123456789 !@#$%&amp;*</text>
</svg>`
  },
  'type-specimen-inter': {
    name: 'Typography — Inter',
    category: 'Typography',
    description: 'UI / body typeface specimen',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 300" width="700" height="300">
  <style>@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600');</style>
  <text x="0" y="35" font-family="Inter, sans-serif" font-weight="300" font-size="14" fill="#B8956A" letter-spacing="4">BODY / UI TYPEFACE</text>
  <text x="0" y="90" font-family="Inter, sans-serif" font-weight="600" font-size="48" fill="#1A1A1A">Inter SemiBold</text>
  <text x="0" y="125" font-family="Inter, sans-serif" font-weight="500" font-size="28" fill="#2D2D2D">Inter Medium — Subheadings</text>
  <text x="0" y="155" font-family="Inter, sans-serif" font-weight="400" font-size="20" fill="#555">Inter Regular — Body copy and descriptions</text>
  <text x="0" y="180" font-family="Inter, sans-serif" font-weight="300" font-size="16" fill="#888">Inter Light — Captions, meta text, fine print</text>
  <line x1="0" y1="200" x2="700" y2="200" stroke="#E8E0D4" stroke-width="0.5"/>
  <text x="0" y="235" font-family="Inter, sans-serif" font-weight="500" font-size="22" fill="#1A1A1A" letter-spacing="3">ABCDEFGHIJKLMNOPQRSTUVWXYZ</text>
  <text x="0" y="265" font-family="Inter, sans-serif" font-weight="400" font-size="20" fill="#444">abcdefghijklmnopqrstuvwxyz  0123456789</text>
</svg>`
  },

  // ─── STATIONERY TEMPLATES ──────────────────────────────────
  'template-business-card-front': {
    name: 'Business Card — Front',
    category: 'Stationery',
    description: 'Business card front template (3.5" × 2")',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 630 360" width="630" height="360">
  <style>@import url('https://fonts.googleapis.com/css2?family=Arimo:wght@700&amp;family=Inter:wght@300;400&amp;family=Cormorant+Garamond:wght@300');</style>
  <rect width="630" height="360" fill="#1A1A1A"/>
  <rect x="20" y="20" width="590" height="320" fill="none" stroke="#B8956A" stroke-width="0.5"/>
  <text x="315" y="155" text-anchor="middle" font-family="Arimo, sans-serif" font-weight="700" font-size="42" fill="#FFFFFF" letter-spacing="12">BLACKACRE</text>
  <line x1="220" y1="178" x2="410" y2="178" stroke="#B8956A" stroke-width="0.75"/>
  <text x="315" y="210" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="300" font-size="13" fill="#999" letter-spacing="5">DEVELOPMENT &amp; MANAGEMENT</text>
</svg>`
  },
  'template-business-card-back': {
    name: 'Business Card — Back',
    category: 'Stationery',
    description: 'Business card back template with contact info',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 630 360" width="630" height="360">
  <style>@import url('https://fonts.googleapis.com/css2?family=Arimo:wght@700&amp;family=Inter:wght@300;400');</style>
  <rect width="630" height="360" fill="#FAFAF8"/>
  <rect x="20" y="20" width="590" height="320" fill="none" stroke="#E8E0D4" stroke-width="0.5"/>
  <text x="50" y="75" font-family="Arimo, sans-serif" font-weight="700" font-size="18" fill="#1A1A1A" letter-spacing="2">JOHN DOE</text>
  <text x="50" y="100" font-family="Inter, sans-serif" font-weight="300" font-size="11" fill="#B8956A" letter-spacing="3">MANAGING PARTNER</text>
  <line x1="50" y1="130" x2="200" y2="130" stroke="#E8E0D4" stroke-width="0.5"/>
  <text x="50" y="165" font-family="Inter, sans-serif" font-weight="300" font-size="12" fill="#666">john@blackacremgt.com</text>
  <text x="50" y="190" font-family="Inter, sans-serif" font-weight="300" font-size="12" fill="#666">(313) 555-0100</text>
  <text x="50" y="215" font-family="Inter, sans-serif" font-weight="300" font-size="12" fill="#666">www.blackacremgt.com</text>
  <text x="50" y="300" font-family="Inter, sans-serif" font-weight="300" font-size="10" fill="#AAAAAA" letter-spacing="1">Detroit, Michigan</text>
</svg>`
  },
  'template-letterhead': {
    name: 'Letterhead Template',
    category: 'Stationery',
    description: 'Branded letterhead (8.5" × 11")',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 792" width="612" height="792">
  <style>@import url('https://fonts.googleapis.com/css2?family=Arimo:wght@700&amp;family=Inter:wght@300;400&amp;family=Cormorant+Garamond:wght@300');</style>
  <rect width="612" height="792" fill="#FFFFFF"/>
  <!-- Top bar -->
  <rect x="0" y="0" width="612" height="4" fill="#1A1A1A"/>
  <rect x="0" y="4" width="612" height="1" fill="#B8956A"/>
  <!-- Header -->
  <text x="306" y="65" text-anchor="middle" font-family="Arimo, sans-serif" font-weight="700" font-size="28" fill="#1A1A1A" letter-spacing="10">BLACKACRE</text>
  <line x1="220" y1="80" x2="392" y2="80" stroke="#B8956A" stroke-width="0.5"/>
  <text x="306" y="100" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="300" font-size="10" fill="#999" letter-spacing="4">DEVELOPMENT &amp; MANAGEMENT</text>
  <!-- Content area guides -->
  <rect x="72" y="140" width="468" height="540" fill="none" stroke="#F0F0F0" stroke-width="0.5" stroke-dasharray="4,4"/>
  <text x="306" y="420" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="12" fill="#CCCCCC">Content Area</text>
  <!-- Footer -->
  <line x1="72" y1="720" x2="540" y2="720" stroke="#E8E0D4" stroke-width="0.5"/>
  <text x="72" y="745" font-family="Inter, sans-serif" font-weight="300" font-size="8" fill="#AAAAAA" letter-spacing="1">BLACKACRE DEVELOPMENT &amp; MANAGEMENT</text>
  <text x="540" y="745" text-anchor="end" font-family="Inter, sans-serif" font-weight="300" font-size="8" fill="#AAAAAA">www.blackacremgt.com</text>
  <text x="306" y="770" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="8" fill="#CCCCCC">Detroit, Michigan  ·  (313) 555-0100  ·  info@blackacremgt.com</text>
</svg>`
  },
  'template-folder-cover': {
    name: 'Presentation Folder — Cover',
    category: 'Stationery',
    description: 'Branded presentation folder cover',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 880" width="680" height="880">
  <style>@import url('https://fonts.googleapis.com/css2?family=Arimo:wght@700&amp;family=Cormorant+Garamond:wght@300');</style>
  <rect width="680" height="880" fill="#1A1A1A"/>
  <rect x="24" y="24" width="632" height="832" fill="none" stroke="#B8956A" stroke-width="0.5"/>
  <rect x="30" y="30" width="620" height="820" fill="none" stroke="#333" stroke-width="0.3"/>
  <!-- Center logo -->
  <text x="340" y="420" text-anchor="middle" font-family="Arimo, sans-serif" font-weight="700" font-size="52" fill="#FFFFFF" letter-spacing="14">BLACKACRE</text>
  <line x1="180" y1="448" x2="500" y2="448" stroke="#B8956A" stroke-width="0.75"/>
  <text x="340" y="485" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="300" font-size="15" fill="#777" letter-spacing="8">DEVELOPMENT &amp; MANAGEMENT</text>
  <!-- Bottom -->
  <text x="340" y="830" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="300" font-size="11" fill="#555" letter-spacing="4">DETROIT, MICHIGAN</text>
</svg>`
  },

  // ─── SOCIAL MEDIA TEMPLATES ────────────────────────────────
  'social-instagram-post': {
    name: 'Instagram Post Template',
    category: 'Social Media',
    description: '1080×1080 branded post template',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 540" width="540" height="540">
  <style>@import url('https://fonts.googleapis.com/css2?family=Arimo:wght@700&amp;family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300');</style>
  <rect width="540" height="540" fill="#1A1A1A"/>
  <rect x="20" y="20" width="500" height="500" fill="none" stroke="#B8956A" stroke-width="0.5"/>
  <!-- Image placeholder -->
  <rect x="40" y="40" width="460" height="280" fill="#2D2D2D"/>
  <text x="270" y="190" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="14" fill="#555">Image Area</text>
  <!-- Content -->
  <text x="270" y="370" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="600" font-size="36" fill="#FFFFFF">Modern Living</text>
  <text x="270" y="400" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="300" font-style="italic" font-size="20" fill="#B8956A">Redefined in Detroit</text>
  <line x1="220" y1="420" x2="320" y2="420" stroke="#B8956A" stroke-width="0.5"/>
  <text x="270" y="460" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="10" fill="#888" letter-spacing="3">BLACKACRE</text>
  <text x="270" y="500" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="9" fill="#555">www.blackacremgt.com</text>
</svg>`
  },
  'social-instagram-story': {
    name: 'Instagram Story Template',
    category: 'Social Media',
    description: '1080×1920 story template',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 640" width="360" height="640">
  <style>@import url('https://fonts.googleapis.com/css2?family=Arimo:wght@700&amp;family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300');</style>
  <rect width="360" height="640" fill="#1A1A1A"/>
  <rect x="12" y="12" width="336" height="616" fill="none" stroke="#B8956A" stroke-width="0.4"/>
  <!-- Logo top -->
  <text x="180" y="60" text-anchor="middle" font-family="Arimo, sans-serif" font-weight="700" font-size="18" fill="#FFFFFF" letter-spacing="6">BLACKACRE</text>
  <!-- Image placeholder -->
  <rect x="30" y="90" width="300" height="320" fill="#2D2D2D"/>
  <text x="180" y="255" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="12" fill="#555">Image Area</text>
  <!-- Content -->
  <text x="180" y="460" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="600" font-size="32" fill="#FFFFFF">Now Leasing</text>
  <line x1="130" y1="478" x2="230" y2="478" stroke="#B8956A" stroke-width="0.5"/>
  <text x="180" y="510" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="300" font-style="italic" font-size="16" fill="#B8956A">28N Loft Residences</text>
  <text x="180" y="545" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="11" fill="#888">Modern lofts in Detroit's</text>
  <text x="180" y="563" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="11" fill="#888">historic core</text>
  <!-- CTA -->
  <rect x="110" y="585" width="140" height="36" fill="none" stroke="#B8956A" stroke-width="0.75"/>
  <text x="180" y="608" text-anchor="middle" font-family="Inter, sans-serif" font-weight="500" font-size="10" fill="#B8956A" letter-spacing="3">LEARN MORE</text>
</svg>`
  },
  'social-linkedin-banner': {
    name: 'LinkedIn Banner Template',
    category: 'Social Media',
    description: '1584×396 LinkedIn cover image',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 792 198" width="792" height="198">
  <style>@import url('https://fonts.googleapis.com/css2?family=Arimo:wght@700&amp;family=Cormorant+Garamond:wght@300');</style>
  <rect width="792" height="198" fill="#1A1A1A"/>
  <rect x="8" y="8" width="776" height="182" fill="none" stroke="#B8956A" stroke-width="0.4"/>
  <text x="396" y="90" text-anchor="middle" font-family="Arimo, sans-serif" font-weight="700" font-size="38" fill="#FFFFFF" letter-spacing="14">BLACKACRE</text>
  <line x1="280" y1="108" x2="512" y2="108" stroke="#B8956A" stroke-width="0.5"/>
  <text x="396" y="138" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="300" font-size="13" fill="#888" letter-spacing="6">DEVELOPMENT &amp; MANAGEMENT — DETROIT</text>
</svg>`
  },
  'email-header': {
    name: 'Email Header Template',
    category: 'Social Media',
    description: 'Branded email header / banner',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 150" width="600" height="150">
  <style>@import url('https://fonts.googleapis.com/css2?family=Arimo:wght@700&amp;family=Inter:wght@300');</style>
  <rect width="600" height="150" fill="#1A1A1A"/>
  <line x1="0" y1="148" x2="600" y2="148" stroke="#B8956A" stroke-width="2"/>
  <text x="300" y="72" text-anchor="middle" font-family="Arimo, sans-serif" font-weight="700" font-size="32" fill="#FFFFFF" letter-spacing="10">BLACKACRE</text>
  <text x="300" y="105" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="11" fill="#888" letter-spacing="3">DETROIT  ·  DEVELOPMENT  ·  MANAGEMENT</text>
</svg>`
  },

  // ─── SIGNAGE ──────────────────────────────────────────────
  'sign-entrance': {
    name: 'Entrance Sign — 28N',
    category: 'Signage',
    description: 'Building entrance signage concept',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 300" width="500" height="300">
  <style>@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;600&amp;family=Inter:wght@300');</style>
  <rect width="500" height="300" fill="#1A1A1A"/>
  <rect x="15" y="15" width="470" height="270" fill="none" stroke="#B8956A" stroke-width="0.75"/>
  <text x="250" y="130" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="600" font-size="88" fill="#FFFFFF" letter-spacing="6">28N</text>
  <line x1="140" y1="155" x2="360" y2="155" stroke="#B8956A" stroke-width="0.75"/>
  <text x="250" y="190" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="300" font-size="16" fill="#999" letter-spacing="8">LOFT RESIDENCES</text>
  <text x="250" y="255" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="10" fill="#555" letter-spacing="2">A BLACKACRE PROPERTY</text>
</svg>`
  },
  'sign-directional': {
    name: 'Directional / Wayfinding Sign',
    category: 'Signage',
    description: 'Interior wayfinding signage',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500" width="400" height="500">
  <style>@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500');</style>
  <rect width="400" height="500" fill="#FAFAF8"/>
  <rect x="10" y="10" width="380" height="480" fill="none" stroke="#E8E0D4" stroke-width="1"/>
  <!-- Logo -->
  <text x="200" y="55" text-anchor="middle" font-family="Inter, sans-serif" font-weight="500" font-size="11" fill="#B8956A" letter-spacing="4">28N</text>
  <line x1="40" y1="75" x2="360" y2="75" stroke="#E8E0D4" stroke-width="0.5"/>
  <!-- Entries -->
  <text x="40" y="120" font-family="Inter, sans-serif" font-weight="500" font-size="16" fill="#1A1A1A">Lobby</text>
  <text x="360" y="120" text-anchor="end" font-family="Inter, sans-serif" font-weight="300" font-size="14" fill="#888">←</text>
  <line x1="40" y1="140" x2="360" y2="140" stroke="#F0EDE8" stroke-width="0.5"/>
  <text x="40" y="175" font-family="Inter, sans-serif" font-weight="500" font-size="16" fill="#1A1A1A">Residences 201–210</text>
  <text x="360" y="175" text-anchor="end" font-family="Inter, sans-serif" font-weight="300" font-size="14" fill="#888">↑ 2</text>
  <line x1="40" y1="195" x2="360" y2="195" stroke="#F0EDE8" stroke-width="0.5"/>
  <text x="40" y="230" font-family="Inter, sans-serif" font-weight="500" font-size="16" fill="#1A1A1A">Residences 301–310</text>
  <text x="360" y="230" text-anchor="end" font-family="Inter, sans-serif" font-weight="300" font-size="14" fill="#888">↑ 3</text>
  <line x1="40" y1="250" x2="360" y2="250" stroke="#F0EDE8" stroke-width="0.5"/>
  <text x="40" y="285" font-family="Inter, sans-serif" font-weight="500" font-size="16" fill="#1A1A1A">Amenities</text>
  <text x="360" y="285" text-anchor="end" font-family="Inter, sans-serif" font-weight="300" font-size="14" fill="#888">→</text>
  <line x1="40" y1="305" x2="360" y2="305" stroke="#F0EDE8" stroke-width="0.5"/>
  <text x="40" y="340" font-family="Inter, sans-serif" font-weight="500" font-size="16" fill="#1A1A1A">Parking</text>
  <text x="360" y="340" text-anchor="end" font-family="Inter, sans-serif" font-weight="300" font-size="14" fill="#888">↓ B1</text>
  <line x1="40" y1="420" x2="360" y2="420" stroke="#E8E0D4" stroke-width="0.5"/>
  <text x="200" y="455" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="9" fill="#BBBBBB" letter-spacing="3">A BLACKACRE PROPERTY</text>
</svg>`
  },
  
  // ─── PRINT COLLATERAL TEMPLATES ────────────────────────────
  'template-one-pager': {
    name: 'One-Page Brochure Template',
    category: 'Print Collateral',
    description: 'Single-page property brochure layout',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 792" width="612" height="792">
  <style>@import url('https://fonts.googleapis.com/css2?family=Arimo:wght@700&amp;family=Inter:wght@300;400;500&amp;family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300');</style>
  <rect width="612" height="792" fill="#FFFFFF"/>
  <!-- Top band -->
  <rect width="612" height="280" fill="#1A1A1A"/>
  <rect x="30" y="30" width="552" height="220" fill="#2D2D2D"/>
  <text x="306" y="150" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="14" fill="#555">Hero Image Area</text>
  <!-- Logo bar -->
  <text x="306" y="270" text-anchor="middle" font-family="Arimo, sans-serif" font-weight="700" font-size="14" fill="#FFFFFF" letter-spacing="6">BLACKACRE</text>
  <!-- Title Section -->
  <text x="306" y="330" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="600" font-size="42" fill="#1A1A1A">28N Loft Residences</text>
  <text x="306" y="358" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="300" font-style="italic" font-size="18" fill="#B8956A">Historic Conversion · Downtown Detroit</text>
  <line x1="250" y1="378" x2="362" y2="378" stroke="#B8956A" stroke-width="0.5"/>
  <!-- Body text placeholder -->
  <rect x="50" y="400" width="230" height="8" rx="2" fill="#E8E0D4"/>
  <rect x="50" y="418" width="230" height="8" rx="2" fill="#E8E0D4"/>
  <rect x="50" y="436" width="180" height="8" rx="2" fill="#E8E0D4"/>
  <rect x="50" y="466" width="230" height="8" rx="2" fill="#E8E0D4"/>
  <rect x="50" y="484" width="200" height="8" rx="2" fill="#E8E0D4"/>
  <!-- Feature boxes -->
  <rect x="332" y="400" width="230" height="92" fill="#FAFAF8" stroke="#E8E0D4" stroke-width="0.5"/>
  <text x="447" y="430" text-anchor="middle" font-family="Inter, sans-serif" font-weight="500" font-size="10" fill="#B8956A" letter-spacing="3">FEATURES</text>
  <text x="447" y="455" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="11" fill="#888">Exposed Brick · High Ceilings</text>
  <text x="447" y="475" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="11" fill="#888">Modern Finishes · City Views</text>
  <!-- Stats row -->
  <line x1="50" y1="530" x2="562" y2="530" stroke="#E8E0D4" stroke-width="0.5"/>
  <text x="140" y="575" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="600" font-size="36" fill="#1A1A1A">48</text>
  <text x="140" y="598" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="10" fill="#888" letter-spacing="2">RESIDENCES</text>
  <text x="306" y="575" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="600" font-size="36" fill="#1A1A1A">1928</text>
  <text x="306" y="598" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="10" fill="#888" letter-spacing="2">YEAR BUILT</text>
  <text x="472" y="575" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="600" font-size="36" fill="#1A1A1A">6</text>
  <text x="472" y="598" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="10" fill="#888" letter-spacing="2">STORIES</text>
  <line x1="50" y1="620" x2="562" y2="620" stroke="#E8E0D4" stroke-width="0.5"/>
  <!-- Image placeholders bottom -->
  <rect x="50" y="640" width="160" height="100" fill="#F0EDE8"/>
  <rect x="226" y="640" width="160" height="100" fill="#F0EDE8"/>
  <rect x="402" y="640" width="160" height="100" fill="#F0EDE8"/>
  <!-- Footer -->
  <text x="306" y="770" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="9" fill="#AAAAAA">www.blackacremgt.com  ·  info@blackacremgt.com  ·  Detroit, MI</text>
</svg>`
  },
  'template-28n-cover': {
    name: '28N Catalog Cover',
    category: 'Print Collateral',
    description: 'Elevated catalog cover for 28N property',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 792" width="612" height="792">
  <style>@import url('https://fonts.googleapis.com/css2?family=Arimo:wght@700&amp;family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300&amp;family=Inter:wght@300');</style>
  <rect width="612" height="792" fill="#1A1A1A"/>
  <rect x="24" y="24" width="564" height="744" fill="none" stroke="#B8956A" stroke-width="0.5"/>
  <rect x="30" y="30" width="552" height="732" fill="none" stroke="#2D2D2D" stroke-width="0.3"/>
  <!-- Image area -->
  <rect x="50" y="50" width="512" height="380" fill="#2D2D2D"/>
  <text x="306" y="250" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="14" fill="#555">Hero Photography</text>
  <!-- Title block -->
  <text x="306" y="510" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="600" font-size="96" fill="#FFFFFF" letter-spacing="6">28N</text>
  <line x1="200" y1="535" x2="412" y2="535" stroke="#B8956A" stroke-width="0.75"/>
  <text x="306" y="575" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="300" font-size="20" fill="#999" letter-spacing="10">LOFT RESIDENCES</text>
  <text x="306" y="615" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="300" font-style="italic" font-size="16" fill="#B8956A">A Historic Office Conversion</text>
  <!-- Bottom -->
  <line x1="200" y1="690" x2="412" y2="690" stroke="#333" stroke-width="0.5"/>
  <text x="306" y="720" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="10" fill="#555" letter-spacing="4">BLACKACRE DEVELOPMENT · DETROIT</text>
</svg>`
  },
};

// Merge core assets with social templates
export const svgAssets: Record<string, { name: string; category: string; svg: string; description: string }> = {
  ...coreAssets,
  ...socialTemplates,
};

export const categories = [
  'All',
  'Logos',
  '28N Project',
  'Typography',
  'Color Palette',
  'Patterns & Elements',
  'Icons',
  'Stationery',
  'Instagram',
  'LinkedIn',
  'Facebook',
  'Email & Cross-Platform',
  'Social Media',
  'Signage',
  'Print Collateral',
];
