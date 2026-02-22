# FiveM Icon Studio

![FiveM Studio](https://img.shields.io/badge/FiveM-Icon_Studio-6366F1?style=for-the-badge)

FiveM Icon Studio is an advanced, production-grade web application tailored for FiveM server developers to visually engineer, preview, and batch-export premium SVG UI assets for in-game smartphones (like qs-smartphone, qb-phone, etc.).

## Features

- **Advanced Art Engines**: Generate highly complex, CSS-driven SVG icons across 11 distinct aesthetic languages (Kawaii, Neo Brutalism, iOS Glass, Liquid Chrome, Carbon Tactical, Vice City, Vision OS, E-Commerce Minimal, etc.).
- **Spotlight Search (`Cmd/Ctrl + K`)**: Instantly fuzzy-search across dozens of application mappings and active themes with a native Command Palette.
- **Custom Engine Builder**: Dynamically override primary, secondary, and accent colors, as well as corner radius and glassmorphism blur intensities globally in real-time.
- **Framer Motion 3D Physics**: Hardware-accelerated `useMouseTilt` parallax grid effects tracking precise `clientX/Y` physics.
- **Web Audio Haptics**: Procedurally generated synthetic oscillators to emit deep navigational thuds and high-pitch hover ticks without heavy `.mp3` dependencies.
- **Batch Export Pipeline**: Instantly compile, zip, and download all 33 variations of an active theme to local storage.

## Usage

1. Select a theme from the left **Sidebar**.
2. Customize the theme limits using the **Engine Builder** controls.
3. Click any application icon to preview the raw SVG output in the **Modal**.
4. Press **Search Icons...** or `Cmd/Ctrl + K` to rapidly filter through the grid.
5. Click **Copy SVG Document** to extract the heavily styled geometry, or **Batch Export ZIP** to download the whole pack.

## Technology Stack

- React 18
- Vite
- Framer Motion
- TailwindCSS v3
- Lucide React
- Web Audio API

## Installation

```bash
npm install
npm run dev
```
