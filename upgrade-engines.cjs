const fs = require('fs');

const apps = ['contacts', 'bank', 'maps', 'ads', 'gallery', 'store', 'notes', 'calendar', 'emergency', 'calculator', 'settings', 'home', 'camera', 'weather', 'music', 'messages', 'twitter', 'instagram', 'whatsapp', 'discord', 'youtube', 'tiktok', 'tinder', 'uber', 'phone', 'mail', 'garage', 'darkchat'];

// 1. Refactor Kawaii Paste (Classic)
let kawaiiContent = fs.readFileSync('./src/components/icons/KawaiiEngine.jsx', 'utf8');

// We add a 'Jelly Highlight' to Kawaii Paste: a curved white semi-transparent shape over the icon.
// We also add faint scattered sparkles ✨ 
const jellyHighlight = `
  <!-- Jelly Aesthetics & Sparkles -->
  <path d="M 40 40 Q 100 20 160 40 Q 180 80 180 100 Q 100 60 20 100 Q 20 80 40 40 Z" fill="#ffffff" opacity="0.3" style="mix-blend-mode: overlay;" />
  <circle cx="30" cy="30" r="4" fill="#fff" opacity="0.6"/>
  <circle cx="160" cy="150" r="3" fill="#fff" opacity="0.5"/>
  <circle cx="150" cy="40" r="5" fill="#fff" opacity="0.4"/>
</svg>`;

for (let app of apps) {
    let start = kawaiiContent.indexOf(app + ': `');
    if (start === -1) continue;
    let end = kawaiiContent.indexOf('</svg>`', start);
    if (end > start) {
        let block = kawaiiContent.substring(start, end + 7);
        let updated = block.replace('</svg>`', jellyHighlight + '`');
        kawaiiContent = kawaiiContent.replace(block, updated);
    }
}
fs.writeFileSync('./src/components/icons/KawaiiEngine.jsx', kawaiiContent);


// 2. Refactor Cyberpunk Neon
let cyberContent = fs.readFileSync('./src/components/icons/CyberEngine.jsx', 'utf8');

// We add a Hex Grid Background and Scanlines to Cyberpunk Neon.
const cyberAdditions = `
  <pattern id="hexPattern" x="0" y="0" width="20" height="34.64" patternUnits="userSpaceOnUse">
    <path d="M20 11.54L10 17.32L0 11.54V0L10 -5.77L20 0V11.54Z" fill="none" stroke="#0ff" stroke-width="0.5" opacity="0.15"/>
  </pattern>
  <pattern id="scanlines" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect width="4" height="1" fill="#fff" opacity="0.1" />
  </pattern>
  <rect width="200" height="200" rx="40" fill="url(#hexPattern)" />
  <rect width="200" height="200" rx="40" fill="url(#scanlines)" />
  <!-- Cyberpunk Upgrades -->`;

for (let app of apps) {
    let start = cyberContent.indexOf(app + ': `');
    if (start === -1) continue;
    let end = cyberContent.indexOf('</svg>`', start);

    if (end > start) {
        let block = cyberContent.substring(start, end + 7);
        // We want to insert the additions right after the black base rectangle
        let bgRectMatch = block.match(/<rect width="200" height="200" rx="40" fill="#000"[^>]*\/>/);
        if (bgRectMatch) {
            let updated = block.replace(bgRectMatch[0], bgRectMatch[0] + cyberAdditions);
            cyberContent = cyberContent.replace(block, updated);
        }
    }
}
fs.writeFileSync('./src/components/icons/CyberEngine.jsx', cyberContent);
console.log('Automated Engine Fixes Complete.');
