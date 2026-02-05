# High-Fidelity Art Engines

This directory contains the specialized rendering engines for the various High-Fidelity themes.

## 🎨 The Engines

### 1. `Kawaii.jsx` (Blob / UwU)
- **Style**: Cute, thick strokes, pastel colors.
- **Features**: Custom illustrations for Phone, Cloud, Camera. Floating "Globs" background.

### 2. `Cyber.jsx` (Cyberpunk / Dark Web)
- **Style**: Wireframe schematics, matrix grids, glitches.
- **Features**: Procedural circuit patterns, variant corners, specialized "Tech" icons.

### 3. `Street.jsx` (Graffiti)
- **Style**: Spray paint stencils, brick wall texture.
- **Features**: "Spray Noise" SVG filter, drip effects, tag signatures.

### 4. `Luxury.jsx` (Vip)
- **Style**: Art Deco, Gold, Geometric.
- **Features**: Diamond patterns, sunburst rays, thin wireframe icons.

### 5. `Pixel.jsx` (Retro)
- **Style**: 8-bit, CRT monitor.
- **Features**: Manual 16x16 sprite drawings, pixelated rendering mode.

### 6. `Sketch.jsx` (Hand Drawn)
- **Style**: Pencil, paper, doodle.
- **Features**: Turbulence displacement (wiggle line), hatching fill pattern.

### 7. `Jelly.jsx` (Origin)
- **Style**: Glassy, wet, gummy.
- **Features**: High specular lighting, inner glow, semi-transparent gradients.

### 8. `Cloud.jsx` (Soft)
- **Style**: Neumorphism, Aerogel.
- **Features**: Soft outer shadows, white-on-white hierarchy, "Puff" filter.

### 9. `Medical.jsx` (EMS)
- **Style**: Clinical, frosted acrylic.
- **Features**: Cross pattern, emergency stripes, heartbeat overlay.

## 🛠️ Integration
All engines are routed via `src/components/ThemeIcon.jsx`. They accept a `uid` prop to ensuring unique SVG filter IDs for robust exporting.
