// Comprehensive Social Media SVG Templates for BLACKACRE
// Organized by platform: Instagram, LinkedIn, Facebook

export const socialTemplates: Record<string, { name: string; category: string; svg: string; description: string }> = {

  // ═══════════════════════════════════════════════════════════
  // INSTAGRAM TEMPLATES
  // ═══════════════════════════════════════════════════════════

  'ig-post-property': {
    name: 'IG Post — Property Showcase',
    category: 'Instagram',
    description: '1080×1080 property highlight with image area & info overlay',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 540" width="540" height="540">
  <style>@import url('https://fonts.googleapis.com/css2?family=Arimo:wght@700&amp;family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300&amp;family=Inter:wght@300;400;500');</style>
  <rect width="540" height="540" fill="#1A1A1A"/>
  <!-- Image area -->
  <rect x="0" y="0" width="540" height="380" fill="#2D2D2D"/>
  <line x1="200" y1="180" x2="340" y2="180" stroke="#555" stroke-width="0.5"/>
  <text x="270" y="175" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="11" fill="#555" letter-spacing="3">PROPERTY IMAGE</text>
  <text x="270" y="195" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="9" fill="#444">1080 × 1080px</text>
  <!-- Gradient overlay at bottom of image -->
  <defs>
    <linearGradient id="igFade1" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1A1A1A" stop-opacity="0"/>
      <stop offset="100%" stop-color="#1A1A1A" stop-opacity="1"/>
    </linearGradient>
  </defs>
  <rect x="0" y="300" width="540" height="80" fill="url(#igFade1)"/>
  <!-- Content overlay -->
  <text x="30" y="410" font-family="'Cormorant Garamond', serif" font-weight="600" font-size="34" fill="#FFFFFF">28N Loft Residences</text>
  <text x="30" y="440" font-family="'Cormorant Garamond', serif" font-weight="300" font-style="italic" font-size="18" fill="#B8956A">Now Leasing — Downtown Detroit</text>
  <!-- Divider -->
  <line x1="30" y1="458" x2="150" y2="458" stroke="#B8956A" stroke-width="0.75"/>
  <!-- Details row -->
  <text x="30" y="485" font-family="Inter, sans-serif" font-weight="400" font-size="11" fill="#AAAAAA">Studio, 1 &amp; 2 Bedroom Lofts</text>
  <text x="30" y="502" font-family="Inter, sans-serif" font-weight="300" font-size="10" fill="#666">Starting from $1,200/month</text>
  <!-- Logo -->
  <text x="510" y="520" text-anchor="end" font-family="Arimo, sans-serif" font-weight="700" font-size="10" fill="#FFFFFF" letter-spacing="3">BLACKACRE</text>
</svg>`
  },

  'ig-post-quote': {
    name: 'IG Post — Quote / Testimonial',
    category: 'Instagram',
    description: '1080×1080 elegant quote card for resident testimonials',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 540" width="540" height="540">
  <style>@import url('https://fonts.googleapis.com/css2?family=Arimo:wght@700&amp;family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&amp;family=Inter:wght@300;400');</style>
  <rect width="540" height="540" fill="#FAFAF8"/>
  <!-- Double border -->
  <rect x="20" y="20" width="500" height="500" fill="none" stroke="#1A1A1A" stroke-width="1"/>
  <rect x="28" y="28" width="484" height="484" fill="none" stroke="#B8956A" stroke-width="0.4"/>
  <!-- Large quotation mark -->
  <text x="70" y="140" font-family="'Cormorant Garamond', serif" font-weight="600" font-size="120" fill="#B8956A" opacity="0.25">"</text>
  <!-- Quote text -->
  <text x="270" y="210" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="400" font-style="italic" font-size="26" fill="#1A1A1A">
    <tspan x="270" dy="0">The attention to detail in</tspan>
    <tspan x="270" dy="38">every corner of this building</tspan>
    <tspan x="270" dy="38">is truly remarkable.</tspan>
  </text>
  <!-- Attribution -->
  <line x1="240" y1="340" x2="300" y2="340" stroke="#B8956A" stroke-width="0.75"/>
  <text x="270" y="370" text-anchor="middle" font-family="Inter, sans-serif" font-weight="400" font-size="12" fill="#1A1A1A">Sarah M.</text>
  <text x="270" y="390" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="10" fill="#888" letter-spacing="2">28N RESIDENT</text>
  <!-- Bottom logo -->
  <line x1="200" y1="450" x2="340" y2="450" stroke="#E8E0D4" stroke-width="0.5"/>
  <text x="270" y="480" text-anchor="middle" font-family="Arimo, sans-serif" font-weight="700" font-size="11" fill="#1A1A1A" letter-spacing="4">BLACKACRE</text>
  <text x="270" y="496" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="8" fill="#AAAAAA" letter-spacing="2">DEVELOPMENT &amp; MANAGEMENT</text>
</svg>`
  },

  'ig-post-stats': {
    name: 'IG Post — Stats / By the Numbers',
    category: 'Instagram',
    description: '1080×1080 data-driven post highlighting project metrics',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 540" width="540" height="540">
  <style>@import url('https://fonts.googleapis.com/css2?family=Arimo:wght@700&amp;family=Cormorant+Garamond:wght@300;600&amp;family=Inter:wght@300;400;500');</style>
  <rect width="540" height="540" fill="#1A1A1A"/>
  <rect x="16" y="16" width="508" height="508" fill="none" stroke="#B8956A" stroke-width="0.4"/>
  <!-- Header -->
  <text x="270" y="70" text-anchor="middle" font-family="Arimo, sans-serif" font-weight="700" font-size="12" fill="#FFFFFF" letter-spacing="5">BLACKACRE</text>
  <text x="270" y="100" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="300" font-size="16" fill="#B8956A" letter-spacing="6">BY THE NUMBERS</text>
  <line x1="200" y1="118" x2="340" y2="118" stroke="#B8956A" stroke-width="0.5"/>
  <!-- Grid of stats -->
  <!-- Stat 1 -->
  <text x="160" y="200" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="600" font-size="56" fill="#FFFFFF">48</text>
  <text x="160" y="225" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="10" fill="#B8956A" letter-spacing="3">RESIDENCES</text>
  <!-- Stat 2 -->
  <text x="380" y="200" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="600" font-size="56" fill="#FFFFFF">1928</text>
  <text x="380" y="225" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="10" fill="#B8956A" letter-spacing="3">YEAR BUILT</text>
  <!-- Divider -->
  <line x1="60" y1="260" x2="480" y2="260" stroke="#333" stroke-width="0.5"/>
  <!-- Stat 3 -->
  <text x="160" y="330" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="600" font-size="56" fill="#FFFFFF">6</text>
  <text x="160" y="355" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="10" fill="#B8956A" letter-spacing="3">STORIES</text>
  <!-- Stat 4 -->
  <text x="380" y="330" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="600" font-size="56" fill="#FFFFFF">12'</text>
  <text x="380" y="355" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="10" fill="#B8956A" letter-spacing="3">CEILINGS</text>
  <!-- Divider -->
  <line x1="60" y1="390" x2="480" y2="390" stroke="#333" stroke-width="0.5"/>
  <!-- Bottom -->
  <text x="270" y="440" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="600" font-size="28" fill="#FFFFFF">28N</text>
  <text x="270" y="465" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="300" font-size="13" fill="#888" letter-spacing="5">LOFT RESIDENCES</text>
  <text x="270" y="505" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="9" fill="#555">www.blackacremgt.com</text>
</svg>`
  },

  'ig-post-carousel': {
    name: 'IG Post — Carousel Cover',
    category: 'Instagram',
    description: '1080×1080 first slide for multi-image carousel posts',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 540" width="540" height="540">
  <style>@import url('https://fonts.googleapis.com/css2?family=Arimo:wght@700&amp;family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300&amp;family=Inter:wght@300;400;500');</style>
  <rect width="540" height="540" fill="#1A1A1A"/>
  <!-- Geometric lines -->
  <line x1="0" y1="0" x2="540" y2="540" stroke="#2D2D2D" stroke-width="0.5"/>
  <line x1="540" y1="0" x2="0" y2="540" stroke="#2D2D2D" stroke-width="0.5"/>
  <!-- Center frame -->
  <rect x="100" y="120" width="340" height="300" fill="none" stroke="#B8956A" stroke-width="0.75"/>
  <rect x="108" y="128" width="324" height="284" fill="#1A1A1A" stroke="#333" stroke-width="0.3"/>
  <!-- Content -->
  <text x="270" y="60" text-anchor="middle" font-family="Arimo, sans-serif" font-weight="700" font-size="11" fill="#FFFFFF" letter-spacing="5">BLACKACRE</text>
  <text x="270" y="80" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="8" fill="#B8956A" letter-spacing="3">PRESENTS</text>
  <!-- Main title -->
  <text x="270" y="240" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="600" font-size="52" fill="#FFFFFF">28N</text>
  <line x1="200" y1="258" x2="340" y2="258" stroke="#B8956A" stroke-width="0.75"/>
  <text x="270" y="290" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="300" font-size="16" fill="#999" letter-spacing="6">LOFT RESIDENCES</text>
  <text x="270" y="320" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="300" font-style="italic" font-size="14" fill="#B8956A">A Property Tour</text>
  <!-- Swipe indicator -->
  <text x="270" y="380" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="9" fill="#555" letter-spacing="2">SWIPE TO EXPLORE →</text>
  <!-- Carousel dots -->
  <circle cx="245" cy="490" r="4" fill="#B8956A"/>
  <circle cx="262" cy="490" r="3" fill="none" stroke="#555" stroke-width="0.5"/>
  <circle cx="279" cy="490" r="3" fill="none" stroke="#555" stroke-width="0.5"/>
  <circle cx="296" cy="490" r="3" fill="none" stroke="#555" stroke-width="0.5"/>
  <text x="270" y="515" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="8" fill="#444">1 / 4</text>
</svg>`
  },

  'ig-post-beforeafter': {
    name: 'IG Post — Before & After',
    category: 'Instagram',
    description: '1080×1080 side-by-side transformation showcase',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 540" width="540" height="540">
  <style>@import url('https://fonts.googleapis.com/css2?family=Arimo:wght@700&amp;family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300&amp;family=Inter:wght@300;400;500');</style>
  <rect width="540" height="540" fill="#FAFAF8"/>
  <!-- Header -->
  <rect width="540" height="60" fill="#1A1A1A"/>
  <text x="270" y="30" text-anchor="middle" font-family="Arimo, sans-serif" font-weight="700" font-size="11" fill="#FFFFFF" letter-spacing="5">BLACKACRE</text>
  <text x="270" y="48" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="8" fill="#B8956A" letter-spacing="3">TRANSFORMATION</text>
  <!-- Before panel -->
  <rect x="20" y="80" width="242" height="300" fill="#E8E0D4"/>
  <text x="141" y="230" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="12" fill="#999">Before Image</text>
  <rect x="20" y="80" width="242" height="32" fill="#2D2D2D"/>
  <text x="141" y="101" text-anchor="middle" font-family="Inter, sans-serif" font-weight="500" font-size="10" fill="#FFFFFF" letter-spacing="3">BEFORE</text>
  <!-- After panel -->
  <rect x="278" y="80" width="242" height="300" fill="#E8E0D4"/>
  <text x="399" y="230" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="12" fill="#999">After Image</text>
  <rect x="278" y="80" width="242" height="32" fill="#B8956A"/>
  <text x="399" y="101" text-anchor="middle" font-family="Inter, sans-serif" font-weight="500" font-size="10" fill="#FFFFFF" letter-spacing="3">AFTER</text>
  <!-- Center divider arrow -->
  <circle cx="270" cy="230" r="18" fill="#1A1A1A" stroke="#B8956A" stroke-width="1"/>
  <text x="270" y="235" text-anchor="middle" font-family="Inter, sans-serif" font-weight="400" font-size="14" fill="#FFFFFF">→</text>
  <!-- Bottom info -->
  <text x="270" y="420" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="600" font-size="26" fill="#1A1A1A">Historic to Modern</text>
  <text x="270" y="448" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="300" font-style="italic" font-size="15" fill="#B8956A">Adaptive Reuse at 28N</text>
  <line x1="220" y1="465" x2="320" y2="465" stroke="#B8956A" stroke-width="0.5"/>
  <text x="270" y="490" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="10" fill="#888">Office building → Loft residences</text>
  <text x="270" y="520" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="8" fill="#AAAAAA">www.blackacremgt.com</text>
</svg>`
  },

  'ig-post-amenity': {
    name: 'IG Post — Amenity Feature',
    category: 'Instagram',
    description: '1080×1080 lifestyle amenity spotlight',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 540" width="540" height="540">
  <style>@import url('https://fonts.googleapis.com/css2?family=Arimo:wght@700&amp;family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300&amp;family=Inter:wght@300;400;500');</style>
  <rect width="540" height="540" fill="#1A1A1A"/>
  <!-- Top accent -->
  <rect width="540" height="3" fill="#B8956A"/>
  <!-- Image area -->
  <rect x="30" y="30" width="480" height="300" fill="#2D2D2D"/>
  <text x="270" y="180" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="11" fill="#555">Amenity Photography</text>
  <!-- Icon circle -->
  <circle cx="270" cy="330" r="28" fill="#1A1A1A" stroke="#B8956A" stroke-width="1"/>
  <text x="270" y="337" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="18" fill="#B8956A">☕</text>
  <!-- Content -->
  <text x="270" y="395" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="600" font-size="28" fill="#FFFFFF">In-House Coffee Bar</text>
  <text x="270" y="420" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="300" font-style="italic" font-size="15" fill="#B8956A">Crafted for Residents</text>
  <line x1="220" y1="438" x2="320" y2="438" stroke="#B8956A" stroke-width="0.5"/>
  <text x="270" y="462" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="10" fill="#888">Artisan coffee, pastries &amp; community</text>
  <text x="270" y="480" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="10" fill="#888">Open daily 7am–7pm</text>
  <!-- Bottom logo -->
  <text x="270" y="518" text-anchor="middle" font-family="Arimo, sans-serif" font-weight="700" font-size="9" fill="#555" letter-spacing="3">BLACKACRE</text>
</svg>`
  },

  'ig-story-leasing': {
    name: 'IG Story — Now Leasing',
    category: 'Instagram',
    description: '1080×1920 story template for leasing announcements',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 640" width="360" height="640">
  <style>@import url('https://fonts.googleapis.com/css2?family=Arimo:wght@700&amp;family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300&amp;family=Inter:wght@300;400;500');</style>
  <rect width="360" height="640" fill="#1A1A1A"/>
  <rect x="10" y="10" width="340" height="620" fill="none" stroke="#B8956A" stroke-width="0.4"/>
  <!-- Top logo -->
  <text x="180" y="52" text-anchor="middle" font-family="Arimo, sans-serif" font-weight="700" font-size="14" fill="#FFFFFF" letter-spacing="5">BLACKACRE</text>
  <!-- Image area -->
  <rect x="25" y="75" width="310" height="280" fill="#2D2D2D"/>
  <text x="180" y="220" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="11" fill="#555">Property Image</text>
  <!-- Badge overlay -->
  <rect x="25" y="310" width="120" height="30" fill="#B8956A"/>
  <text x="85" y="329" text-anchor="middle" font-family="Inter, sans-serif" font-weight="500" font-size="9" fill="#FFFFFF" letter-spacing="3">NOW LEASING</text>
  <!-- Content -->
  <text x="180" y="400" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="600" font-size="36" fill="#FFFFFF">28N</text>
  <text x="180" y="425" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="300" font-size="15" fill="#999" letter-spacing="5">LOFT RESIDENCES</text>
  <line x1="120" y1="442" x2="240" y2="442" stroke="#B8956A" stroke-width="0.5"/>
  <text x="180" y="470" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="300" font-style="italic" font-size="15" fill="#B8956A">Historic elegance,</text>
  <text x="180" y="492" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="300" font-style="italic" font-size="15" fill="#B8956A">modern refinement.</text>
  <!-- Features -->
  <text x="180" y="530" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="10" fill="#888">Studio, 1 &amp; 2 BR · From $1,200/mo</text>
  <!-- CTA -->
  <rect x="105" y="560" width="150" height="38" fill="none" stroke="#B8956A" stroke-width="0.75"/>
  <text x="180" y="584" text-anchor="middle" font-family="Inter, sans-serif" font-weight="500" font-size="9" fill="#B8956A" letter-spacing="3">SCHEDULE A TOUR</text>
  <!-- Swipe up -->
  <text x="180" y="625" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="8" fill="#555">↑ SWIPE UP</text>
</svg>`
  },

  'ig-story-event': {
    name: 'IG Story — Event Announcement',
    category: 'Instagram',
    description: '1080×1920 story for open houses & events',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 640" width="360" height="640">
  <style>@import url('https://fonts.googleapis.com/css2?family=Arimo:wght@700&amp;family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300&amp;family=Inter:wght@300;400;500');</style>
  <rect width="360" height="640" fill="#FAFAF8"/>
  <!-- Top gold bar -->
  <rect width="360" height="4" fill="#B8956A"/>
  <!-- Logo -->
  <text x="180" y="45" text-anchor="middle" font-family="Arimo, sans-serif" font-weight="700" font-size="13" fill="#1A1A1A" letter-spacing="5">BLACKACRE</text>
  <text x="180" y="62" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="8" fill="#B8956A" letter-spacing="3">YOU'RE INVITED</text>
  <!-- Decorative frame -->
  <rect x="30" y="85" width="300" height="420" fill="none" stroke="#1A1A1A" stroke-width="1"/>
  <rect x="38" y="93" width="284" height="404" fill="none" stroke="#B8956A" stroke-width="0.4"/>
  <!-- Event type -->
  <rect x="120" y="120" width="120" height="26" fill="#1A1A1A"/>
  <text x="180" y="137" text-anchor="middle" font-family="Inter, sans-serif" font-weight="500" font-size="8" fill="#FFFFFF" letter-spacing="3">OPEN HOUSE</text>
  <!-- Date block -->
  <text x="180" y="200" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="600" font-size="64" fill="#1A1A1A">15</text>
  <text x="180" y="230" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="300" font-size="20" fill="#B8956A" letter-spacing="6">MARCH</text>
  <text x="180" y="255" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="12" fill="#888">Saturday · 11am–3pm</text>
  <line x1="130" y1="275" x2="230" y2="275" stroke="#B8956A" stroke-width="0.5"/>
  <!-- Event details -->
  <text x="180" y="310" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="600" font-size="24" fill="#1A1A1A">28N Loft Residences</text>
  <text x="180" y="340" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="300" font-style="italic" font-size="14" fill="#888">Tour our model units</text>
  <text x="180" y="360" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="300" font-style="italic" font-size="14" fill="#888">&amp; meet the team</text>
  <!-- Location -->
  <text x="180" y="410" text-anchor="middle" font-family="Inter, sans-serif" font-weight="400" font-size="10" fill="#1A1A1A">28 N. Main Street</text>
  <text x="180" y="428" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="10" fill="#888">Downtown Detroit, MI</text>
  <!-- Refreshments -->
  <text x="180" y="465" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="9" fill="#B8956A" letter-spacing="1">Light refreshments · Complimentary coffee</text>
  <!-- CTA -->
  <rect x="90" y="540" width="180" height="40" fill="#1A1A1A"/>
  <text x="180" y="565" text-anchor="middle" font-family="Inter, sans-serif" font-weight="500" font-size="9" fill="#FFFFFF" letter-spacing="3">RSVP NOW</text>
  <!-- Bottom -->
  <text x="180" y="620" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="8" fill="#AAAAAA">www.blackacremgt.com</text>
</svg>`
  },

  'ig-story-bts': {
    name: 'IG Story — Behind the Scenes',
    category: 'Instagram',
    description: '1080×1920 behind-the-scenes construction/progress story',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 640" width="360" height="640">
  <style>@import url('https://fonts.googleapis.com/css2?family=Arimo:wght@700&amp;family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300&amp;family=Inter:wght@300;400;500');</style>
  <rect width="360" height="640" fill="#1A1A1A"/>
  <!-- Full bleed image area -->
  <rect x="0" y="0" width="360" height="440" fill="#2D2D2D"/>
  <text x="180" y="220" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="11" fill="#555">Construction / Progress Photo</text>
  <!-- Gradient overlay -->
  <defs>
    <linearGradient id="btsFade" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1A1A1A" stop-opacity="0"/>
      <stop offset="100%" stop-color="#1A1A1A" stop-opacity="1"/>
    </linearGradient>
  </defs>
  <rect x="0" y="350" width="360" height="90" fill="url(#btsFade)"/>
  <!-- Top badge -->
  <rect x="15" y="15" width="130" height="28" fill="#B8956A" opacity="0.9"/>
  <text x="80" y="33" text-anchor="middle" font-family="Inter, sans-serif" font-weight="500" font-size="8" fill="#FFFFFF" letter-spacing="3">BEHIND THE SCENES</text>
  <!-- Content -->
  <text x="25" y="480" font-family="'Cormorant Garamond', serif" font-weight="600" font-size="28" fill="#FFFFFF">Building Progress</text>
  <text x="25" y="508" font-family="'Cormorant Garamond', serif" font-weight="300" font-style="italic" font-size="16" fill="#B8956A">Week 24 Update</text>
  <line x1="25" y1="525" x2="120" y2="525" stroke="#B8956A" stroke-width="0.5"/>
  <!-- Progress info -->
  <text x="25" y="552" font-family="Inter, sans-serif" font-weight="300" font-size="11" fill="#AAAAAA">Framing complete on floors 3–6</text>
  <text x="25" y="570" font-family="Inter, sans-serif" font-weight="300" font-size="11" fill="#AAAAAA">MEP rough-in underway</text>
  <!-- Progress bar -->
  <text x="25" y="600" font-family="Inter, sans-serif" font-weight="500" font-size="9" fill="#B8956A" letter-spacing="1">COMPLETION: 68%</text>
  <rect x="25" y="608" width="310" height="4" fill="#333"/>
  <rect x="25" y="608" width="210" height="4" fill="#B8956A"/>
  <!-- Logo -->
  <text x="335" y="630" text-anchor="end" font-family="Arimo, sans-serif" font-weight="700" font-size="8" fill="#555" letter-spacing="2">BLACKACRE</text>
</svg>`
  },

  'ig-story-poll': {
    name: 'IG Story — Interactive Poll',
    category: 'Instagram',
    description: '1080×1920 engagement story with poll/question layout',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 640" width="360" height="640">
  <style>@import url('https://fonts.googleapis.com/css2?family=Arimo:wght@700&amp;family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300&amp;family=Inter:wght@300;400;500');</style>
  <rect width="360" height="640" fill="#1A1A1A"/>
  <rect x="10" y="10" width="340" height="620" fill="none" stroke="#333" stroke-width="0.3"/>
  <!-- Logo -->
  <text x="180" y="50" text-anchor="middle" font-family="Arimo, sans-serif" font-weight="700" font-size="12" fill="#FFFFFF" letter-spacing="5">BLACKACRE</text>
  <!-- Question -->
  <text x="180" y="120" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="300" font-size="14" fill="#B8956A" letter-spacing="3">WE WANT TO KNOW</text>
  <text x="180" y="170" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="600" font-size="28" fill="#FFFFFF">Which finish do</text>
  <text x="180" y="205" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="600" font-size="28" fill="#FFFFFF">you prefer?</text>
  <line x1="140" y1="225" x2="220" y2="225" stroke="#B8956A" stroke-width="0.5"/>
  <!-- Option A -->
  <rect x="30" y="260" width="300" height="130" fill="#2D2D2D"/>
  <text x="180" y="330" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="11" fill="#555">Option A Image</text>
  <rect x="30" y="390" width="300" height="36" fill="#2D2D2D" stroke="#B8956A" stroke-width="0.75"/>
  <text x="180" y="413" text-anchor="middle" font-family="Inter, sans-serif" font-weight="500" font-size="10" fill="#B8956A" letter-spacing="2">WARM OAK FLOORS</text>
  <!-- Option B -->
  <rect x="30" y="445" width="300" height="130" fill="#2D2D2D"/>
  <text x="180" y="515" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="11" fill="#555">Option B Image</text>
  <rect x="30" y="575" width="300" height="36" fill="#2D2D2D" stroke="#B8956A" stroke-width="0.75"/>
  <text x="180" y="598" text-anchor="middle" font-family="Inter, sans-serif" font-weight="500" font-size="10" fill="#B8956A" letter-spacing="2">POLISHED CONCRETE</text>
</svg>`
  },

  'ig-highlight-cover': {
    name: 'IG Highlight Cover',
    category: 'Instagram',
    description: '1080×1080 circular story highlight icon template',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 320" width="320" height="320">
  <style>@import url('https://fonts.googleapis.com/css2?family=Arimo:wght@700&amp;family=Inter:wght@300;500');</style>
  <rect width="320" height="320" fill="#1A1A1A"/>
  <!-- Outer circle -->
  <circle cx="160" cy="160" r="130" fill="none" stroke="#B8956A" stroke-width="1"/>
  <circle cx="160" cy="160" r="122" fill="#1A1A1A" stroke="#333" stroke-width="0.5"/>
  <!-- Icon placeholder -->
  <rect x="120" y="110" width="80" height="60" fill="none" stroke="#B8956A" stroke-width="0.75"/>
  <line x1="120" y1="110" x2="200" y2="170" stroke="#B8956A" stroke-width="0.3"/>
  <line x1="200" y1="110" x2="120" y2="170" stroke="#B8956A" stroke-width="0.3"/>
  <!-- Label -->
  <text x="160" y="205" text-anchor="middle" font-family="Inter, sans-serif" font-weight="500" font-size="11" fill="#FFFFFF" letter-spacing="3">TOURS</text>
  <text x="160" y="225" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="8" fill="#888">Replace icon &amp; text</text>
</svg>`
  },

  'ig-reel-cover': {
    name: 'IG Reel Cover',
    category: 'Instagram',
    description: '1080×1920 branded reel thumbnail / cover',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 640" width="360" height="640">
  <style>@import url('https://fonts.googleapis.com/css2?family=Arimo:wght@700&amp;family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300&amp;family=Inter:wght@300;400;500');</style>
  <rect width="360" height="640" fill="#2D2D2D"/>
  <!-- Full bleed video still placeholder -->
  <text x="180" y="310" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="11" fill="#555">Video Still / Frame</text>
  <!-- Gradient overlay bottom -->
  <defs>
    <linearGradient id="reelFade" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1A1A1A" stop-opacity="0"/>
      <stop offset="60%" stop-color="#1A1A1A" stop-opacity="0.85"/>
      <stop offset="100%" stop-color="#1A1A1A" stop-opacity="1"/>
    </linearGradient>
  </defs>
  <rect x="0" y="400" width="360" height="240" fill="url(#reelFade)"/>
  <!-- Top left logo -->
  <rect x="15" y="15" width="100" height="28" fill="#1A1A1A" opacity="0.7"/>
  <text x="65" y="33" text-anchor="middle" font-family="Arimo, sans-serif" font-weight="700" font-size="9" fill="#FFFFFF" letter-spacing="3">BLACKACRE</text>
  <!-- Play button center -->
  <circle cx="180" cy="280" r="30" fill="#1A1A1A" opacity="0.6"/>
  <polygon points="172,265 172,295 198,280" fill="#FFFFFF" opacity="0.9"/>
  <!-- Content bottom -->
  <text x="25" y="530" font-family="'Cormorant Garamond', serif" font-weight="600" font-size="28" fill="#FFFFFF">Unit Walkthrough</text>
  <text x="25" y="555" font-family="'Cormorant Garamond', serif" font-weight="300" font-style="italic" font-size="15" fill="#B8956A">28N · Suite 301</text>
  <line x1="25" y1="572" x2="100" y2="572" stroke="#B8956A" stroke-width="0.5"/>
  <text x="25" y="595" font-family="Inter, sans-serif" font-weight="300" font-size="10" fill="#AAAAAA">2BR · 1,100 sq ft · 12' ceilings</text>
  <text x="25" y="620" font-family="Inter, sans-serif" font-weight="300" font-size="9" fill="#666">#blackacre #28N #detroitlofts</text>
</svg>`
  },

  // ═══════════════════════════════════════════════════════════
  // LINKEDIN TEMPLATES
  // ═══════════════════════════════════════════════════════════

  'li-banner-company': {
    name: 'LinkedIn Banner — Company',
    category: 'LinkedIn',
    description: '1584×396 company page cover with brand identity',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 792 198" width="792" height="198">
  <style>@import url('https://fonts.googleapis.com/css2?family=Arimo:wght@700&amp;family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300&amp;family=Inter:wght@300;400');</style>
  <rect width="792" height="198" fill="#1A1A1A"/>
  <!-- Subtle geometric pattern -->
  <defs>
    <pattern id="liBg" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
      <line x1="0" y1="0" x2="60" y2="60" stroke="#222" stroke-width="0.3"/>
      <line x1="60" y1="0" x2="0" y2="60" stroke="#222" stroke-width="0.3"/>
    </pattern>
  </defs>
  <rect width="792" height="198" fill="url(#liBg)"/>
  <!-- Gold border -->
  <rect x="8" y="8" width="776" height="182" fill="none" stroke="#B8956A" stroke-width="0.5"/>
  <!-- Logo -->
  <text x="396" y="82" text-anchor="middle" font-family="Arimo, sans-serif" font-weight="700" font-size="42" fill="#FFFFFF" letter-spacing="14">BLACKACRE</text>
  <line x1="260" y1="100" x2="532" y2="100" stroke="#B8956A" stroke-width="0.75"/>
  <text x="396" y="125" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="300" font-size="14" fill="#888" letter-spacing="6">DEVELOPMENT &amp; MANAGEMENT</text>
  <!-- Location -->
  <text x="396" y="160" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="10" fill="#555" letter-spacing="2">DETROIT, MICHIGAN</text>
</svg>`
  },

  'li-banner-project': {
    name: 'LinkedIn Banner — 28N Project',
    category: 'LinkedIn',
    description: '1584×396 project-specific cover banner',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 792 198" width="792" height="198">
  <style>@import url('https://fonts.googleapis.com/css2?family=Arimo:wght@700&amp;family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300&amp;family=Inter:wght@300;400');</style>
  <rect width="792" height="198" fill="#1A1A1A"/>
  <rect x="6" y="6" width="780" height="186" fill="none" stroke="#B8956A" stroke-width="0.4"/>
  <!-- Left: Image area -->
  <rect x="20" y="20" width="350" height="158" fill="#2D2D2D"/>
  <text x="195" y="100" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="10" fill="#555">Property Image</text>
  <!-- Right: Content -->
  <text x="580" y="60" text-anchor="middle" font-family="Arimo, sans-serif" font-weight="700" font-size="10" fill="#B8956A" letter-spacing="4">BLACKACRE PRESENTS</text>
  <text x="580" y="100" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="600" font-size="48" fill="#FFFFFF" letter-spacing="4">28N</text>
  <line x1="520" y1="115" x2="640" y2="115" stroke="#B8956A" stroke-width="0.5"/>
  <text x="580" y="140" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="300" font-size="13" fill="#999" letter-spacing="5">LOFT RESIDENCES</text>
  <text x="580" y="165" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="10" fill="#555">Downtown Detroit · Now Leasing</text>
</svg>`
  },

  'li-post-property': {
    name: 'LinkedIn Post — Property Announcement',
    category: 'LinkedIn',
    description: '1200×627 professional property announcement',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 314" width="600" height="314">
  <style>@import url('https://fonts.googleapis.com/css2?family=Arimo:wght@700&amp;family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300&amp;family=Inter:wght@300;400;500');</style>
  <rect width="600" height="314" fill="#FAFAF8"/>
  <!-- Left panel -->
  <rect width="260" height="314" fill="#1A1A1A"/>
  <rect x="12" y="12" width="236" height="290" fill="none" stroke="#B8956A" stroke-width="0.4"/>
  <!-- Logo on left -->
  <text x="130" y="50" text-anchor="middle" font-family="Arimo, sans-serif" font-weight="700" font-size="12" fill="#FFFFFF" letter-spacing="4">BLACKACRE</text>
  <line x1="50" y1="62" x2="210" y2="62" stroke="#B8956A" stroke-width="0.5"/>
  <!-- Project name -->
  <text x="130" y="130" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="600" font-size="56" fill="#FFFFFF">28N</text>
  <text x="130" y="160" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="300" font-size="13" fill="#B8956A" letter-spacing="5">LOFT RESIDENCES</text>
  <!-- Details -->
  <text x="130" y="210" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="10" fill="#888">48 Modern Loft Residences</text>
  <text x="130" y="228" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="10" fill="#888">Historic Office Conversion</text>
  <text x="130" y="246" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="10" fill="#888">Downtown Detroit, MI</text>
  <text x="130" y="285" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="8" fill="#555">www.blackacremgt.com</text>
  <!-- Right image area -->
  <rect x="260" y="0" width="340" height="314" fill="#E8E0D4"/>
  <text x="430" y="157" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="12" fill="#999">Property Photography</text>
</svg>`
  },

  'li-post-milestone': {
    name: 'LinkedIn Post — Milestone / Achievement',
    category: 'LinkedIn',
    description: '1200×627 company milestone celebration post',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 314" width="600" height="314">
  <style>@import url('https://fonts.googleapis.com/css2?family=Arimo:wght@700&amp;family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300&amp;family=Inter:wght@300;400;500');</style>
  <rect width="600" height="314" fill="#1A1A1A"/>
  <rect x="10" y="10" width="580" height="294" fill="none" stroke="#B8956A" stroke-width="0.4"/>
  <!-- Top: logo & label -->
  <text x="300" y="45" text-anchor="middle" font-family="Arimo, sans-serif" font-weight="700" font-size="11" fill="#FFFFFF" letter-spacing="5">BLACKACRE</text>
  <text x="300" y="65" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="8" fill="#B8956A" letter-spacing="3">MILESTONE</text>
  <!-- Big number -->
  <text x="300" y="165" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="600" font-size="80" fill="#FFFFFF">100%</text>
  <line x1="220" y1="180" x2="380" y2="180" stroke="#B8956A" stroke-width="0.75"/>
  <!-- Description -->
  <text x="300" y="215" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="600" font-size="22" fill="#FFFFFF">Fully Leased</text>
  <text x="300" y="240" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="300" font-style="italic" font-size="15" fill="#B8956A">28N Loft Residences</text>
  <!-- Sub text -->
  <text x="300" y="275" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="10" fill="#888">48 units · Downtown Detroit · Record lease-up velocity</text>
  <text x="300" y="295" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="8" fill="#555">Thank you to our incredible team and residents.</text>
</svg>`
  },

  'li-post-article': {
    name: 'LinkedIn Post — Article / Thought Leadership',
    category: 'LinkedIn',
    description: '1200×644 article header with professional editorial style',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 322" width="600" height="322">
  <style>@import url('https://fonts.googleapis.com/css2?family=Arimo:wght@700&amp;family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&amp;family=Inter:wght@300;400;500');</style>
  <rect width="600" height="322" fill="#FAFAF8"/>
  <!-- Top bar -->
  <rect width="600" height="48" fill="#1A1A1A"/>
  <text x="25" y="30" font-family="Arimo, sans-serif" font-weight="700" font-size="11" fill="#FFFFFF" letter-spacing="4">BLACKACRE</text>
  <text x="575" y="30" text-anchor="end" font-family="Inter, sans-serif" font-weight="300" font-size="8" fill="#B8956A" letter-spacing="2">INSIGHTS</text>
  <rect width="600" height="2" y="48" fill="#B8956A"/>
  <!-- Image area left -->
  <rect x="25" y="70" width="230" height="220" fill="#E8E0D4"/>
  <text x="140" y="185" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="10" fill="#999">Featured Image</text>
  <!-- Content right -->
  <text x="280" y="95" font-family="Inter, sans-serif" font-weight="500" font-size="8" fill="#B8956A" letter-spacing="3">ADAPTIVE REUSE</text>
  <text x="280" y="125" font-family="'Cormorant Garamond', serif" font-weight="600" font-size="24" fill="#1A1A1A">
    <tspan x="280" dy="0">The Future of Urban</tspan>
    <tspan x="280" dy="30">Development in Detroit</tspan>
  </text>
  <line x1="280" y1="172" x2="380" y2="172" stroke="#B8956A" stroke-width="0.5"/>
  <!-- Excerpt -->
  <rect x="280" y="185" width="280" height="6" rx="2" fill="#E8E0D4"/>
  <rect x="280" y="198" width="280" height="6" rx="2" fill="#E8E0D4"/>
  <rect x="280" y="211" width="200" height="6" rx="2" fill="#E8E0D4"/>
  <rect x="280" y="230" width="280" height="6" rx="2" fill="#E8E0D4"/>
  <rect x="280" y="243" width="240" height="6" rx="2" fill="#E8E0D4"/>
  <!-- Read more -->
  <text x="280" y="278" font-family="Inter, sans-serif" font-weight="500" font-size="9" fill="#B8956A" letter-spacing="2">READ FULL ARTICLE →</text>
</svg>`
  },

  'li-post-team': {
    name: 'LinkedIn Post — Team Spotlight',
    category: 'LinkedIn',
    description: '1200×627 team member or hiring spotlight',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 314" width="600" height="314">
  <style>@import url('https://fonts.googleapis.com/css2?family=Arimo:wght@700&amp;family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300&amp;family=Inter:wght@300;400;500');</style>
  <rect width="600" height="314" fill="#1A1A1A"/>
  <rect x="8" y="8" width="584" height="298" fill="none" stroke="#B8956A" stroke-width="0.4"/>
  <!-- Top -->
  <text x="300" y="40" text-anchor="middle" font-family="Arimo, sans-serif" font-weight="700" font-size="10" fill="#FFFFFF" letter-spacing="4">BLACKACRE</text>
  <text x="300" y="58" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="8" fill="#B8956A" letter-spacing="3">MEET THE TEAM</text>
  <!-- Photo placeholder -->
  <circle cx="300" cy="135" r="50" fill="#2D2D2D" stroke="#B8956A" stroke-width="0.75"/>
  <text x="300" y="138" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="9" fill="#555">Photo</text>
  <!-- Name -->
  <text x="300" y="215" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="600" font-size="26" fill="#FFFFFF">John Doe</text>
  <text x="300" y="240" text-anchor="middle" font-family="Inter, sans-serif" font-weight="400" font-size="11" fill="#B8956A" letter-spacing="2">Managing Partner</text>
  <line x1="240" y1="255" x2="360" y2="255" stroke="#B8956A" stroke-width="0.5"/>
  <text x="300" y="280" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="300" font-style="italic" font-size="13" fill="#999">"Building Detroit's next chapter,</text>
  <text x="300" y="298" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="300" font-style="italic" font-size="13" fill="#999">one landmark at a time."</text>
</svg>`
  },

  'li-post-hiring': {
    name: 'LinkedIn Post — Hiring',
    category: 'LinkedIn',
    description: '1200×627 branded job posting graphic',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 314" width="600" height="314">
  <style>@import url('https://fonts.googleapis.com/css2?family=Arimo:wght@700&amp;family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300&amp;family=Inter:wght@300;400;500');</style>
  <rect width="600" height="314" fill="#FAFAF8"/>
  <!-- Left accent bar -->
  <rect width="6" height="314" fill="#B8956A"/>
  <!-- Logo -->
  <text x="40" y="40" font-family="Arimo, sans-serif" font-weight="700" font-size="11" fill="#1A1A1A" letter-spacing="4">BLACKACRE</text>
  <!-- Hiring badge -->
  <rect x="40" y="60" width="120" height="26" fill="#1A1A1A"/>
  <text x="100" y="77" text-anchor="middle" font-family="Inter, sans-serif" font-weight="500" font-size="8" fill="#B8956A" letter-spacing="3">NOW HIRING</text>
  <!-- Position -->
  <text x="40" y="130" font-family="'Cormorant Garamond', serif" font-weight="600" font-size="32" fill="#1A1A1A">Project Manager</text>
  <text x="40" y="158" font-family="'Cormorant Garamond', serif" font-weight="300" font-style="italic" font-size="16" fill="#B8956A">Real Estate Development</text>
  <line x1="40" y1="175" x2="180" y2="175" stroke="#B8956A" stroke-width="0.5"/>
  <!-- Details -->
  <text x="40" y="205" font-family="Inter, sans-serif" font-weight="400" font-size="11" fill="#1A1A1A">📍 Detroit, Michigan</text>
  <text x="40" y="225" font-family="Inter, sans-serif" font-weight="400" font-size="11" fill="#1A1A1A">💼 Full-Time</text>
  <text x="40" y="245" font-family="Inter, sans-serif" font-weight="400" font-size="11" fill="#1A1A1A">🏗️ Adaptive Reuse &amp; Mixed-Use</text>
  <!-- CTA -->
  <rect x="40" y="270" width="140" height="32" fill="#1A1A1A"/>
  <text x="110" y="290" text-anchor="middle" font-family="Inter, sans-serif" font-weight="500" font-size="9" fill="#FFFFFF" letter-spacing="2">APPLY NOW →</text>
  <!-- Right side image area -->
  <rect x="370" y="30" width="200" height="254" fill="#E8E0D4"/>
  <text x="470" y="160" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="10" fill="#999">Office / Team Photo</text>
</svg>`
  },

  'li-post-update': {
    name: 'LinkedIn Post — Company Update',
    category: 'LinkedIn',
    description: '1200×627 general company news and project update',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 314" width="600" height="314">
  <style>@import url('https://fonts.googleapis.com/css2?family=Arimo:wght@700&amp;family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300&amp;family=Inter:wght@300;400;500');</style>
  <rect width="600" height="314" fill="#1A1A1A"/>
  <!-- Top header bar -->
  <rect width="600" height="45" fill="#1A1A1A"/>
  <text x="25" y="28" font-family="Arimo, sans-serif" font-weight="700" font-size="11" fill="#FFFFFF" letter-spacing="4">BLACKACRE</text>
  <text x="575" y="28" text-anchor="end" font-family="Inter, sans-serif" font-weight="300" font-size="8" fill="#B8956A" letter-spacing="2">PROJECT UPDATE</text>
  <line x1="0" y1="45" x2="600" y2="45" stroke="#B8956A" stroke-width="1"/>
  <!-- Image area -->
  <rect x="25" y="60" width="260" height="165" fill="#2D2D2D"/>
  <text x="155" y="145" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="10" fill="#555">Project Image</text>
  <!-- Content right -->
  <text x="310" y="80" font-family="Inter, sans-serif" font-weight="500" font-size="8" fill="#B8956A" letter-spacing="3">Q1 2025</text>
  <text x="310" y="108" font-family="'Cormorant Garamond', serif" font-weight="600" font-size="22" fill="#FFFFFF">Construction Update:</text>
  <text x="310" y="135" font-family="'Cormorant Garamond', serif" font-weight="600" font-size="22" fill="#FFFFFF">28N Lofts</text>
  <line x1="310" y1="152" x2="400" y2="152" stroke="#B8956A" stroke-width="0.5"/>
  <rect x="310" y="165" width="260" height="5" rx="2" fill="#333"/>
  <rect x="310" y="175" width="260" height="5" rx="2" fill="#333"/>
  <rect x="310" y="185" width="180" height="5" rx="2" fill="#333"/>
  <!-- Bottom stats -->
  <line x1="25" y1="245" x2="575" y2="245" stroke="#333" stroke-width="0.5"/>
  <text x="120" y="275" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="600" font-size="28" fill="#FFFFFF">68%</text>
  <text x="120" y="295" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="8" fill="#B8956A" letter-spacing="2">COMPLETE</text>
  <text x="300" y="275" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="600" font-size="28" fill="#FFFFFF">Q3</text>
  <text x="300" y="295" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="8" fill="#B8956A" letter-spacing="2">DELIVERY</text>
  <text x="480" y="275" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="600" font-size="28" fill="#FFFFFF">40%</text>
  <text x="480" y="295" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="8" fill="#B8956A" letter-spacing="2">PRE-LEASED</text>
</svg>`
  },

  // ═══════════════════════════════════════════════════════════
  // FACEBOOK TEMPLATES
  // ═══════════════════════════════════════════════════════════

  'fb-cover': {
    name: 'FB Cover Photo — Company',
    category: 'Facebook',
    description: '820×312 Facebook page cover photo',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 820 312" width="820" height="312">
  <style>@import url('https://fonts.googleapis.com/css2?family=Arimo:wght@700&amp;family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300&amp;family=Inter:wght@300;400');</style>
  <rect width="820" height="312" fill="#1A1A1A"/>
  <!-- Subtle diagonal pattern -->
  <defs>
    <pattern id="fbBg" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
      <line x1="0" y1="0" x2="80" y2="80" stroke="#222" stroke-width="0.3"/>
    </pattern>
  </defs>
  <rect width="820" height="312" fill="url(#fbBg)"/>
  <!-- Frame -->
  <rect x="12" y="12" width="796" height="288" fill="none" stroke="#B8956A" stroke-width="0.5"/>
  <!-- Left image area -->
  <rect x="30" y="30" width="320" height="252" fill="#2D2D2D"/>
  <text x="190" y="160" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="11" fill="#555">Cover Image</text>
  <!-- Right content -->
  <text x="570" y="90" text-anchor="middle" font-family="Arimo, sans-serif" font-weight="700" font-size="36" fill="#FFFFFF" letter-spacing="10">BLACKACRE</text>
  <line x1="430" y1="108" x2="710" y2="108" stroke="#B8956A" stroke-width="0.75"/>
  <text x="570" y="138" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="300" font-size="15" fill="#888" letter-spacing="6">DEVELOPMENT &amp; MANAGEMENT</text>
  <!-- Tagline -->
  <text x="570" y="190" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="300" font-style="italic" font-size="18" fill="#B8956A">Transforming Detroit's Landmarks</text>
  <text x="570" y="215" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="300" font-style="italic" font-size="18" fill="#B8956A">into Living Destinations</text>
  <!-- Bottom -->
  <text x="570" y="265" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="10" fill="#555" letter-spacing="2">www.blackacremgt.com</text>
</svg>`
  },

  'fb-cover-project': {
    name: 'FB Cover Photo — 28N Project',
    category: 'Facebook',
    description: '820×312 project-specific Facebook cover',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 820 312" width="820" height="312">
  <style>@import url('https://fonts.googleapis.com/css2?family=Arimo:wght@700&amp;family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300&amp;family=Inter:wght@300;400;500');</style>
  <rect width="820" height="312" fill="#1A1A1A"/>
  <!-- Full width image area -->
  <rect x="0" y="0" width="820" height="312" fill="#2D2D2D"/>
  <text x="410" y="156" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="12" fill="#555">Property Hero Image — 820×312px</text>
  <!-- Overlay gradient from right -->
  <defs>
    <linearGradient id="fbOverlay" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#1A1A1A" stop-opacity="0"/>
      <stop offset="50%" stop-color="#1A1A1A" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="#1A1A1A" stop-opacity="0.95"/>
    </linearGradient>
  </defs>
  <rect width="820" height="312" fill="url(#fbOverlay)"/>
  <!-- Content right -->
  <text x="680" y="90" text-anchor="middle" font-family="Arimo, sans-serif" font-weight="700" font-size="10" fill="#B8956A" letter-spacing="4">BLACKACRE PRESENTS</text>
  <text x="680" y="145" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="600" font-size="64" fill="#FFFFFF" letter-spacing="4">28N</text>
  <line x1="610" y1="162" x2="750" y2="162" stroke="#B8956A" stroke-width="0.75"/>
  <text x="680" y="190" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="300" font-size="15" fill="#CCCCCC" letter-spacing="5">LOFT RESIDENCES</text>
  <text x="680" y="225" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="300" font-style="italic" font-size="14" fill="#B8956A">Downtown Detroit</text>
  <text x="680" y="260" text-anchor="middle" font-family="Inter, sans-serif" font-weight="400" font-size="10" fill="#FFFFFF" letter-spacing="2">NOW LEASING</text>
</svg>`
  },

  'fb-post-property': {
    name: 'FB Post — Property Feature',
    category: 'Facebook',
    description: '1200×630 property showcase for Facebook feed',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 315" width="600" height="315">
  <style>@import url('https://fonts.googleapis.com/css2?family=Arimo:wght@700&amp;family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300&amp;family=Inter:wght@300;400;500');</style>
  <rect width="600" height="315" fill="#FAFAF8"/>
  <!-- Top image area -->
  <rect x="0" y="0" width="600" height="180" fill="#2D2D2D"/>
  <text x="300" y="90" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="11" fill="#555">Property Photography — 1200×630px</text>
  <!-- Gradient overlay bottom of image -->
  <defs>
    <linearGradient id="fbFade" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FAFAF8" stop-opacity="0"/>
      <stop offset="100%" stop-color="#FAFAF8" stop-opacity="1"/>
    </linearGradient>
  </defs>
  <rect x="0" y="140" width="600" height="40" fill="url(#fbFade)"/>
  <!-- Content -->
  <text x="30" y="210" font-family="'Cormorant Garamond', serif" font-weight="600" font-size="28" fill="#1A1A1A">28N Loft Residences</text>
  <text x="30" y="235" font-family="'Cormorant Garamond', serif" font-weight="300" font-style="italic" font-size="15" fill="#B8956A">Historic Office Conversion · Downtown Detroit</text>
  <line x1="30" y1="250" x2="150" y2="250" stroke="#B8956A" stroke-width="0.5"/>
  <!-- Feature pills -->
  <rect x="30" y="265" width="80" height="22" rx="2" fill="#1A1A1A"/>
  <text x="70" y="280" text-anchor="middle" font-family="Inter, sans-serif" font-weight="400" font-size="8" fill="#FFFFFF" letter-spacing="1">48 UNITS</text>
  <rect x="118" y="265" width="90" height="22" rx="2" fill="#1A1A1A"/>
  <text x="163" y="280" text-anchor="middle" font-family="Inter, sans-serif" font-weight="400" font-size="8" fill="#FFFFFF" letter-spacing="1">12' CEILINGS</text>
  <rect x="216" y="265" width="100" height="22" rx="2" fill="#1A1A1A"/>
  <text x="266" y="280" text-anchor="middle" font-family="Inter, sans-serif" font-weight="400" font-size="8" fill="#FFFFFF" letter-spacing="1">EXPOSED BRICK</text>
  <rect x="324" y="265" width="90" height="22" rx="2" fill="#1A1A1A"/>
  <text x="369" y="280" text-anchor="middle" font-family="Inter, sans-serif" font-weight="400" font-size="8" fill="#FFFFFF" letter-spacing="1">CITY VIEWS</text>
  <!-- Logo bottom right -->
  <text x="570" y="300" text-anchor="end" font-family="Arimo, sans-serif" font-weight="700" font-size="10" fill="#1A1A1A" letter-spacing="3">BLACKACRE</text>
</svg>`
  },

  'fb-event-cover': {
    name: 'FB Event Cover',
    category: 'Facebook',
    description: '1920×1005 event cover for Facebook events',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 335" width="640" height="335">
  <style>@import url('https://fonts.googleapis.com/css2?family=Arimo:wght@700&amp;family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300&amp;family=Inter:wght@300;400;500');</style>
  <rect width="640" height="335" fill="#1A1A1A"/>
  <rect x="10" y="10" width="620" height="315" fill="none" stroke="#B8956A" stroke-width="0.5"/>
  <!-- Background image area -->
  <rect x="0" y="0" width="640" height="335" fill="#2D2D2D" opacity="0.4"/>
  <!-- Center content -->
  <text x="320" y="55" text-anchor="middle" font-family="Arimo, sans-serif" font-weight="700" font-size="11" fill="#FFFFFF" letter-spacing="5">BLACKACRE</text>
  <text x="320" y="75" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="8" fill="#B8956A" letter-spacing="3">INVITES YOU TO</text>
  <!-- Event title -->
  <text x="320" y="130" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="600" font-size="38" fill="#FFFFFF">Grand Opening</text>
  <line x1="220" y1="148" x2="420" y2="148" stroke="#B8956A" stroke-width="0.75"/>
  <text x="320" y="178" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="300" font-style="italic" font-size="20" fill="#B8956A">28N Loft Residences</text>
  <!-- Date and time -->
  <rect x="210" y="200" width="220" height="50" fill="#1A1A1A" stroke="#B8956A" stroke-width="0.5"/>
  <text x="320" y="220" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="600" font-size="18" fill="#FFFFFF">March 15, 2025</text>
  <text x="320" y="240" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="10" fill="#B8956A">6:00 PM – 9:00 PM EST</text>
  <!-- Location -->
  <text x="320" y="280" text-anchor="middle" font-family="Inter, sans-serif" font-weight="400" font-size="11" fill="#FFFFFF">28 N. Main Street, Downtown Detroit</text>
  <text x="320" y="300" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="10" fill="#888">Live music · Cocktails · Tours · Hors d'oeuvres</text>
  <text x="320" y="320" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="8" fill="#555">RSVP: events@blackacremgt.com</text>
</svg>`
  },

  'fb-post-community': {
    name: 'FB Post — Community / Neighborhood',
    category: 'Facebook',
    description: '1200×630 neighborhood spotlight for community engagement',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 315" width="600" height="315">
  <style>@import url('https://fonts.googleapis.com/css2?family=Arimo:wght@700&amp;family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300&amp;family=Inter:wght@300;400;500');</style>
  <rect width="600" height="315" fill="#FAFAF8"/>
  <!-- Map / neighborhood image area -->
  <rect x="0" y="0" width="600" height="160" fill="#E8E0D4"/>
  <text x="300" y="85" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="11" fill="#999">Neighborhood / Map Image</text>
  <!-- Pin marker -->
  <circle cx="300" cy="130" r="10" fill="#B8956A"/>
  <circle cx="300" cy="130" r="4" fill="#FFFFFF"/>
  <!-- Content -->
  <text x="300" y="195" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="600" font-size="26" fill="#1A1A1A">Discover Downtown Detroit</text>
  <text x="300" y="220" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="300" font-style="italic" font-size="14" fill="#B8956A">Your New Neighborhood at 28N</text>
  <line x1="250" y1="235" x2="350" y2="235" stroke="#B8956A" stroke-width="0.5"/>
  <!-- Nearby spots -->
  <text x="110" y="265" text-anchor="middle" font-family="Inter, sans-serif" font-weight="500" font-size="9" fill="#1A1A1A">🍽️ Dining</text>
  <text x="110" y="280" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="8" fill="#888">50+ Restaurants</text>
  <text x="250" y="265" text-anchor="middle" font-family="Inter, sans-serif" font-weight="500" font-size="9" fill="#1A1A1A">🚇 Transit</text>
  <text x="250" y="280" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="8" fill="#888">2 min walk</text>
  <text x="390" y="265" text-anchor="middle" font-family="Inter, sans-serif" font-weight="500" font-size="9" fill="#1A1A1A">🎭 Culture</text>
  <text x="390" y="280" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="8" fill="#888">Theater District</text>
  <text x="510" y="265" text-anchor="middle" font-family="Inter, sans-serif" font-weight="500" font-size="9" fill="#1A1A1A">🌳 Parks</text>
  <text x="510" y="280" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="8" fill="#888">Campus Martius</text>
  <!-- Footer -->
  <text x="300" y="305" text-anchor="middle" font-family="Arimo, sans-serif" font-weight="700" font-size="9" fill="#1A1A1A" letter-spacing="3">BLACKACRE</text>
</svg>`
  },

  'fb-ad-template': {
    name: 'FB Ad — Leasing Promotion',
    category: 'Facebook',
    description: '1200×628 paid ad template for leasing campaigns',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 314" width="600" height="314">
  <style>@import url('https://fonts.googleapis.com/css2?family=Arimo:wght@700&amp;family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300&amp;family=Inter:wght@300;400;500');</style>
  <rect width="600" height="314" fill="#1A1A1A"/>
  <!-- Image left half -->
  <rect x="0" y="0" width="300" height="314" fill="#2D2D2D"/>
  <text x="150" y="157" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="11" fill="#555">Ad Image</text>
  <!-- Right content panel -->
  <rect x="300" y="0" width="300" height="314" fill="#1A1A1A"/>
  <rect x="310" y="10" width="280" height="294" fill="none" stroke="#B8956A" stroke-width="0.4"/>
  <!-- Badge -->
  <rect x="330" y="30" width="100" height="24" fill="#B8956A"/>
  <text x="380" y="46" text-anchor="middle" font-family="Inter, sans-serif" font-weight="500" font-size="8" fill="#FFFFFF" letter-spacing="2">SPECIAL OFFER</text>
  <!-- Content -->
  <text x="450" y="95" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="600" font-size="32" fill="#FFFFFF">28N</text>
  <text x="450" y="118" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="300" font-size="12" fill="#999" letter-spacing="4">LOFT RESIDENCES</text>
  <line x1="380" y1="132" x2="520" y2="132" stroke="#B8956A" stroke-width="0.5"/>
  <!-- Offer details -->
  <text x="450" y="165" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="600" font-size="22" fill="#B8956A">First Month Free</text>
  <text x="450" y="190" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="11" fill="#AAAAAA">on select floor plans</text>
  <!-- Features -->
  <text x="450" y="220" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="9" fill="#888">✓ 12' Ceilings  ✓ Exposed Brick</text>
  <text x="450" y="238" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="9" fill="#888">✓ Modern Finishes  ✓ City Views</text>
  <!-- CTA button -->
  <rect x="370" y="258" width="160" height="36" fill="#B8956A"/>
  <text x="450" y="281" text-anchor="middle" font-family="Inter, sans-serif" font-weight="500" font-size="10" fill="#FFFFFF" letter-spacing="2">BOOK A TOUR</text>
</svg>`
  },

  'fb-post-video-thumb': {
    name: 'FB Post — Video Thumbnail',
    category: 'Facebook',
    description: '1280×720 branded thumbnail for Facebook videos',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360" width="640" height="360">
  <style>@import url('https://fonts.googleapis.com/css2?family=Arimo:wght@700&amp;family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300&amp;family=Inter:wght@300;400;500');</style>
  <rect width="640" height="360" fill="#2D2D2D"/>
  <text x="320" y="175" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="11" fill="#555">Video Frame / Thumbnail Image</text>
  <!-- Overlay -->
  <rect width="640" height="360" fill="#1A1A1A" opacity="0.4"/>
  <!-- Play button -->
  <circle cx="320" cy="160" r="36" fill="#1A1A1A" opacity="0.7" stroke="#B8956A" stroke-width="1"/>
  <polygon points="310,142 310,178 342,160" fill="#FFFFFF"/>
  <!-- Bottom overlay bar -->
  <rect x="0" y="270" width="640" height="90" fill="#1A1A1A" opacity="0.85"/>
  <!-- Content -->
  <text x="25" y="300" font-family="'Cormorant Garamond', serif" font-weight="600" font-size="22" fill="#FFFFFF">Full Property Tour — 28N</text>
  <text x="25" y="322" font-family="'Cormorant Garamond', serif" font-weight="300" font-style="italic" font-size="13" fill="#B8956A">Modern Loft Residences · Detroit</text>
  <!-- Logo & duration -->
  <text x="615" y="300" text-anchor="end" font-family="Arimo, sans-serif" font-weight="700" font-size="9" fill="#FFFFFF" letter-spacing="3">BLACKACRE</text>
  <rect x="575" y="310" width="40" height="18" rx="2" fill="#B8956A"/>
  <text x="595" y="323" text-anchor="middle" font-family="Inter, sans-serif" font-weight="500" font-size="9" fill="#FFFFFF">3:45</text>
  <!-- Top tag -->
  <rect x="15" y="15" width="120" height="26" fill="#B8956A"/>
  <text x="75" y="32" text-anchor="middle" font-family="Inter, sans-serif" font-weight="500" font-size="8" fill="#FFFFFF" letter-spacing="3">VIRTUAL TOUR</text>
</svg>`
  },

  // ═══════════════════════════════════════════════════════════
  // CROSS-PLATFORM / EMAIL
  // ═══════════════════════════════════════════════════════════

  'email-header-branded': {
    name: 'Email Header — Branded',
    category: 'Email & Cross-Platform',
    description: '600×150 branded email header for newsletters',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 150" width="600" height="150">
  <style>@import url('https://fonts.googleapis.com/css2?family=Arimo:wght@700&amp;family=Inter:wght@300;400');</style>
  <rect width="600" height="150" fill="#1A1A1A"/>
  <line x1="0" y1="148" x2="600" y2="148" stroke="#B8956A" stroke-width="2"/>
  <text x="300" y="65" text-anchor="middle" font-family="Arimo, sans-serif" font-weight="700" font-size="32" fill="#FFFFFF" letter-spacing="10">BLACKACRE</text>
  <line x1="180" y1="82" x2="420" y2="82" stroke="#B8956A" stroke-width="0.5"/>
  <text x="300" y="108" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="11" fill="#888" letter-spacing="3">DEVELOPMENT &amp; MANAGEMENT</text>
  <text x="300" y="132" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="9" fill="#555">Detroit, Michigan · www.blackacremgt.com</text>
</svg>`
  },

  'email-header-28n': {
    name: 'Email Header — 28N',
    category: 'Email & Cross-Platform',
    description: '600×200 project-specific email header',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 200" width="600" height="200">
  <style>@import url('https://fonts.googleapis.com/css2?family=Arimo:wght@700&amp;family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300&amp;family=Inter:wght@300;400');</style>
  <rect width="600" height="200" fill="#1A1A1A"/>
  <rect x="8" y="8" width="584" height="184" fill="none" stroke="#B8956A" stroke-width="0.4"/>
  <!-- Top logo -->
  <text x="300" y="42" text-anchor="middle" font-family="Arimo, sans-serif" font-weight="700" font-size="10" fill="#888" letter-spacing="4">BLACKACRE</text>
  <!-- Project name -->
  <text x="300" y="105" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="600" font-size="52" fill="#FFFFFF" letter-spacing="4">28N</text>
  <line x1="220" y1="120" x2="380" y2="120" stroke="#B8956A" stroke-width="0.75"/>
  <text x="300" y="148" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-weight="300" font-size="14" fill="#999" letter-spacing="5">LOFT RESIDENCES</text>
  <text x="300" y="178" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="9" fill="#555">Downtown Detroit · Now Leasing</text>
</svg>`
  },

  'email-footer': {
    name: 'Email Footer',
    category: 'Email & Cross-Platform',
    description: '600×100 branded email footer with contact info',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 100" width="600" height="100">
  <style>@import url('https://fonts.googleapis.com/css2?family=Arimo:wght@700&amp;family=Inter:wght@300;400');</style>
  <rect width="600" height="100" fill="#FAFAF8"/>
  <line x1="50" y1="0" x2="550" y2="0" stroke="#E8E0D4" stroke-width="1"/>
  <line x1="50" y1="2" x2="550" y2="2" stroke="#B8956A" stroke-width="0.5"/>
  <!-- Logo -->
  <text x="300" y="32" text-anchor="middle" font-family="Arimo, sans-serif" font-weight="700" font-size="12" fill="#1A1A1A" letter-spacing="4">BLACKACRE</text>
  <!-- Contact row -->
  <text x="300" y="55" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="9" fill="#888">Detroit, MI  ·  (313) 555-0100  ·  info@blackacremgt.com</text>
  <!-- Social links placeholder -->
  <text x="300" y="78" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="8" fill="#AAAAAA">LinkedIn  ·  Instagram  ·  Facebook</text>
  <!-- Unsubscribe -->
  <text x="300" y="95" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="7" fill="#CCCCCC">Unsubscribe  ·  Privacy Policy  ·  © 2025 Blackacre Development</text>
</svg>`
  },

  'social-profile-pic': {
    name: 'Social Profile Picture',
    category: 'Email & Cross-Platform',
    description: 'Unified brand avatar for all social platforms',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="400" height="400">
  <style>@import url('https://fonts.googleapis.com/css2?family=Arimo:wght@700');</style>
  <rect width="400" height="400" fill="#1A1A1A"/>
  <rect x="12" y="12" width="376" height="376" fill="none" stroke="#B8956A" stroke-width="1"/>
  <text x="200" y="225" text-anchor="middle" font-family="Arimo, sans-serif" font-weight="700" font-size="180" fill="#FFFFFF">B</text>
</svg>`
  },
};
