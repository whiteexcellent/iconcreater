const fs = require('fs');
const path = require('path');

const HoloPath = path.join(__dirname, 'src/components/icons/HoloGhostEngine.jsx');
const ChromePath = path.join(__dirname, 'src/components/icons/LiquidChromeEngine.jsx');
const BrutalPath = path.join(__dirname, 'src/components/icons/NeoBrutalEngine.jsx');

console.log("Beginning Advanced Theme Beautification...");

// 1. Refine Holographic Ghost (Add chromatic split, better scanlines, sharper glow)
if (fs.existsSync(HoloPath)) {
    let holoContent = fs.readFileSync(HoloPath, 'utf8');

    // Upgrade the scan pattern to be more pronounced and animated
    holoContent = holoContent.replace(/<pattern id="scan-[^"]+" width="4" height="4" patternUnits="userSpaceOnUse"><rect width="4" height="1" fill="[^"]+" opacity="0\.1" \/><\/pattern>/g, (match) => {
        const idMatch = match.match(/id="(scan-[^"]+)"/);
        const id = idMatch ? idMatch[1] : 'scan';
        const colorMatch = match.match(/fill="([^"]+)"/);
        const color = colorMatch ? colorMatch[1] : '#00FFFF';
        return `<pattern id="${id}" width="4" height="6" patternUnits="userSpaceOnUse">
      <rect width="4" height="1" fill="${color}" opacity="0.3" />
      <rect width="4" height="1" y="3" fill="${color}" opacity="0.1" />
    </pattern>`;
    });

    // Intensify the glow by merging it twice in the filter
    holoContent = holoContent.replace(/<feMerge>\s*<feMergeNode in="blur" \/>\s*<feMergeNode in="SourceGraphic" \/>\s*<\/feMerge>/g,
        `<feMerge><feMergeNode in="blur" /><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>`
    );

    // Make the base background slightly darker to let the neon pop more
    holoContent = holoContent.replace(/fill="#040b16" opacity="0\.9"/g, 'fill="#020813" opacity="0.95"');

    // Add an inner shadow to the holographic container for depth
    holoContent = holoContent.replace(/rx="30" fill="url\(#scan-[^"]+\)" stroke="([^"]+)" stroke-width="1" opacity="0\.3"/g,
        (match, color) => `${match} /><rect x="10" y="10" width="180" height="180" rx="30" fill="none" stroke="${color}" stroke-width="4" opacity="0.1" filter="blur(2px)"`
    );

    fs.writeFileSync(HoloPath, holoContent, 'utf8');
    console.log("✨ Holographic Ghost UI has been intensified with deeper glows and scanlines.");
}

// 2. Refine Liquid Chrome (Add realistic molten ripples and harsh specular highlights)
if (fs.existsSync(ChromePath)) {
    let chromeContent = fs.readFileSync(ChromePath, 'utf8');

    // Upgrade the Turbulance to look like liquid mercury instead of noise
    chromeContent = chromeContent.replace(/<feTurbulence type="fractalNoise" baseFrequency="0\.02" numOctaves="2" result="noise" \/>/g,
        `<feTurbulence type="fractalNoise" baseFrequency="0.008 0.01" numOctaves="3" result="noise" />`
    );

    // Increase displacement scale for wavier liquid
    chromeContent = chromeContent.replace(/scale="3"/g, 'scale="6"');

    // Add a beautiful curved specular highlight overlay to the base chrome logic
    chromeContent = chromeContent.replace(/<rect x="15" y="15" width="170" height="170" rx="35" fill="none" stroke="#00E5FF" stroke-width="1" opacity="0\.3" \/>/g,
        `<rect x="15" y="15" width="170" height="170" rx="35" fill="none" stroke="#00E5FF" stroke-width="2" opacity="0.4" />
  <path d="M 15 80 Q 100 120 185 80 L 185 50 Q 185 15 150 15 L 50 15 Q 15 15 15 50 Z" fill="#ffffff" opacity="0.15" style="mix-blend-mode: overlay;" />`
    );

    // Make the stroke width of the inner icons thicker to stand out against the liquid
    chromeContent = chromeContent.replace(/stroke-width="2"/g, 'stroke-width="3"');
    chromeContent = chromeContent.replace(/stroke-width="3"/g, 'stroke-width="4"'); // some were already 3, make them 4

    fs.writeFileSync(ChromePath, chromeContent, 'utf8');
    console.log("✨ Liquid Chrome Reality has been upgraded with glossy specular highlights and smooth molten ripples.");
}

// 3. Refine Neo Brutal (Add a chaotic background dot grid and thicker outlines)
if (fs.existsSync(BrutalPath)) {
    let brutalContent = fs.readFileSync(BrutalPath, 'utf8');

    // Define a brutalist dot grid
    const brutalDefs = `
  <defs>
    <pattern id="brutal-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="2" fill="#000" opacity="0.15" />
    </pattern>
  </defs>
  <rect x="25" y="25" width="160" height="160" rx="12" fill="url(#brutal-dots)" />`;

    // Inject the defs right after the black background rect (which acts as the drop shadow)
    brutalContent = brutalContent.replace(/<rect x="25" y="25" width="160" height="160" rx="12" fill="#000" \/>/g,
        `<rect x="25" y="25" width="160" height="160" rx="12" fill="#000" />\n${brutalDefs}`
    );

    // Make the main card stroke even thicker (8 -> 10) for maximum chunkiness
    brutalContent = brutalContent.replace(/width="160" height="160" rx="12" fill="([^"]+)" stroke="#000" stroke-width="8"/g,
        `width="160" height="160" rx="12" fill="$1" stroke="#000" stroke-width="12"`
    );

    fs.writeFileSync(BrutalPath, brutalContent, 'utf8');
    console.log("✨ Neo Brutal OS has been reinforced with a chaotic dot grid and ultra-thick borders.");
}

console.log("All Fine Adjustments (İnce Ayarlamalar) Completed Successfully.");
