// src/components/icons/CyberEngine.jsx
import React from 'react';

// Neon cyberpunk theme icons
export const CYBER_SVG_DICTIONARY = {
  contacts: `
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" rx="40" fill="#000" stroke="#0ff" stroke-width="4" />
  <pattern id="hexPattern" x="0" y="0" width="20" height="34.64" patternUnits="userSpaceOnUse">
    <path d="M20 11.54L10 17.32L0 11.54V0L10 -5.77L20 0V11.54Z" fill="none" stroke="#0ff" stroke-width="0.5" opacity="0.15"/>
  </pattern>
  <pattern id="scanlines" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect width="4" height="1" fill="#fff" opacity="0.1" />
  </pattern>
  <rect width="200" height="200" rx="40" fill="url(#hexPattern)" />
  <rect width="200" height="200" rx="40" fill="url(#scanlines)" />
  <!-- Cyberpunk Upgrades -->
  <!-- Circuit lines -->
  <path d="M0 40H40V0 M160 200V160H200" stroke="#f0f" stroke-width="2" opacity="0.5"/>
  <circle cx="100" cy="80" r="25" fill="none" stroke="#0ff" stroke-width="6" filter="drop-shadow(0 0 8px #0ff)"/>
  <path d="M50 160V150C50 130 80 120 100 120C120 120 150 130 150 150V160" fill="none" stroke="#0ff" stroke-width="6" filter="drop-shadow(0 0 8px #0ff)"/>
  <rect x="95" y="125" width="10" height="10" fill="#f0f" />
</svg>`,

  bank: `
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" rx="40" fill="#000" stroke="#0f0" stroke-width="4" filter="drop-shadow(0 0 5px #0f0)" />
  <pattern id="hexPattern" x="0" y="0" width="20" height="34.64" patternUnits="userSpaceOnUse">
    <path d="M20 11.54L10 17.32L0 11.54V0L10 -5.77L20 0V11.54Z" fill="none" stroke="#0ff" stroke-width="0.5" opacity="0.15"/>
  </pattern>
  <pattern id="scanlines" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect width="4" height="1" fill="#fff" opacity="0.1" />
  </pattern>
  <rect width="200" height="200" rx="40" fill="url(#hexPattern)" />
  <rect width="200" height="200" rx="40" fill="url(#scanlines)" />
  <!-- Cyberpunk Upgrades -->
  <!-- Hexagon / Cube core -->
  <polygon points="100,40 150,70 150,130 100,160 50,130 50,70" fill="none" stroke="#0f0" stroke-width="6" />
  <path d="M100 160V100 M50 70L100 100 M150 70L100 100" stroke="#0f0" stroke-width="4" />
  <circle cx="100" cy="100" r="15" fill="#0f0" />
</svg>`,

  maps: `
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" rx="40" fill="#000" stroke="#ff0" stroke-width="4" />
  <pattern id="hexPattern" x="0" y="0" width="20" height="34.64" patternUnits="userSpaceOnUse">
    <path d="M20 11.54L10 17.32L0 11.54V0L10 -5.77L20 0V11.54Z" fill="none" stroke="#0ff" stroke-width="0.5" opacity="0.15"/>
  </pattern>
  <pattern id="scanlines" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect width="4" height="1" fill="#fff" opacity="0.1" />
  </pattern>
  <rect width="200" height="200" rx="40" fill="url(#hexPattern)" />
  <rect width="200" height="200" rx="40" fill="url(#scanlines)" />
  <!-- Cyberpunk Upgrades -->
  <!-- Grid -->
  <path d="M40 0V200 M80 0V200 M120 0V200 M160 0V200" stroke="#ff0" stroke-width="1" opacity="0.2"/>
  <path d="M0 40H200 M0 80H200 M0 120H200 M0 160H200" stroke="#ff0" stroke-width="1" opacity="0.2"/>
  
  <path d="M100 50L130 100H70L100 50Z" fill="#ff0" filter="drop-shadow(0 0 10px #ff0)"/>
  <path d="M100 100V160" stroke="#ff0" stroke-width="6" stroke-dasharray="10 10" />
</svg>`,

  gallery: `
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" rx="40" fill="#000" stroke="#f0f" stroke-width="4" filter="drop-shadow(0 0 5px #f0f)" />
  <pattern id="hexPattern" x="0" y="0" width="20" height="34.64" patternUnits="userSpaceOnUse">
    <path d="M20 11.54L10 17.32L0 11.54V0L10 -5.77L20 0V11.54Z" fill="none" stroke="#0ff" stroke-width="0.5" opacity="0.15"/>
  </pattern>
  <pattern id="scanlines" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect width="4" height="1" fill="#fff" opacity="0.1" />
  </pattern>
  <rect width="200" height="200" rx="40" fill="url(#hexPattern)" />
  <rect width="200" height="200" rx="40" fill="url(#scanlines)" />
  <!-- Cyberpunk Upgrades -->
  <!-- Wireframe Eye / Camera -->
  <ellipse cx="100" cy="100" rx="60" ry="30" fill="none" stroke="#f0f" stroke-width="4"/>
  <circle cx="100" cy="100" r="20" fill="none" stroke="#0ff" stroke-width="6" filter="drop-shadow(0 0 8px #0ff)"/>
  <circle cx="100" cy="100" r="5" fill="#fff" />
</svg>`,

  store: `
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" rx="40" fill="#000" stroke="#0ff" stroke-width="4" />
  <pattern id="hexPattern" x="0" y="0" width="20" height="34.64" patternUnits="userSpaceOnUse">
    <path d="M20 11.54L10 17.32L0 11.54V0L10 -5.77L20 0V11.54Z" fill="none" stroke="#0ff" stroke-width="0.5" opacity="0.15"/>
  </pattern>
  <pattern id="scanlines" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect width="4" height="1" fill="#fff" opacity="0.1" />
  </pattern>
  <rect width="200" height="200" rx="40" fill="url(#hexPattern)" />
  <rect width="200" height="200" rx="40" fill="url(#scanlines)" />
  <!-- Cyberpunk Upgrades -->
  <!-- "V" Matrix style -->
  <path d="M50 50L100 150L150 50" stroke="#f0f" stroke-width="12" stroke-linecap="square" stroke-linejoin="miter" filter="drop-shadow(0 0 10px #f0f)"/>
  <path d="M70 50L100 110L130 50" stroke="#0ff" stroke-width="4" stroke-linecap="square" stroke-linejoin="miter"/>
</svg>`,

  settings: `
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" rx="40" fill="#000" stroke="#fff" stroke-width="4" />
  <pattern id="hexPattern" x="0" y="0" width="20" height="34.64" patternUnits="userSpaceOnUse">
    <path d="M20 11.54L10 17.32L0 11.54V0L10 -5.77L20 0V11.54Z" fill="none" stroke="#0ff" stroke-width="0.5" opacity="0.15"/>
  </pattern>
  <pattern id="scanlines" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect width="4" height="1" fill="#fff" opacity="0.1" />
  </pattern>
  <rect width="200" height="200" rx="40" fill="url(#hexPattern)" />
  <rect width="200" height="200" rx="40" fill="url(#scanlines)" />
  <!-- Cyberpunk Upgrades -->
  <circle cx="100" cy="100" r="40" fill="none" stroke="#fff" stroke-width="8" filter="drop-shadow(0 0 8px #fff)"/>
  <!-- Gear spokes -->
  <rect x="90" y="30" width="20" height="140" fill="#fff" />
  <rect x="90" y="30" width="20" height="140" fill="#fff" transform="rotate(45 100 100)"/>
  <rect x="90" y="30" width="20" height="140" fill="#fff" transform="rotate(90 100 100)"/>
  <rect x="90" y="30" width="20" height="140" fill="#fff" transform="rotate(135 100 100)"/>
  <circle cx="100" cy="100" r="25" fill="#000" />
</svg>`,

  emergency: `
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" rx="40" fill="#200" stroke="#f00" stroke-width="4" filter="drop-shadow(0 0 10px #f00)" />
  <!-- Neon cross -->
  <rect x="85" y="40" width="30" height="120" fill="#f00" filter="drop-shadow(0 0 15px #f00)"/>
  <rect x="40" y="85" width="120" height="30" fill="#f00" filter="drop-shadow(0 0 15px #f00)"/>
  <rect x="95" y="50" width="10" height="100" fill="#fff"/>
  <rect x="50" y="95" width="100" height="10" fill="#fff"/>
</svg>`,

  calculator: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" rx="40" fill="#000" stroke="#0ff" stroke-width="4" />
  <pattern id="hexPattern" x="0" y="0" width="20" height="34.64" patternUnits="userSpaceOnUse">
    <path d="M20 11.54L10 17.32L0 11.54V0L10 -5.77L20 0V11.54Z" fill="none" stroke="#0ff" stroke-width="0.5" opacity="0.15"/>
  </pattern>
  <pattern id="scanlines" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect width="4" height="1" fill="#fff" opacity="0.1" />
  </pattern>
  <rect width="200" height="200" rx="40" fill="url(#hexPattern)" />
  <rect width="200" height="200" rx="40" fill="url(#scanlines)" />
  <!-- Cyberpunk Upgrades --><rect x="50" y="40" width="100" height="30" fill="none" stroke="#f0f" stroke-width="4" filter="drop-shadow(0 0 5px #f0f)" /><circle cx="70" cy="100" r="10" fill="#0ff" filter="drop-shadow(0 0 5px #0ff)"/><circle cx="100" cy="100" r="10" fill="#0ff" filter="drop-shadow(0 0 5px #0ff)"/><circle cx="130" cy="100" r="10" fill="#0ff" filter="drop-shadow(0 0 5px #0ff)"/><circle cx="70" cy="130" r="10" fill="#0ff" filter="drop-shadow(0 0 5px #0ff)"/><circle cx="100" cy="130" r="10" fill="#0ff" filter="drop-shadow(0 0 5px #0ff)"/><circle cx="130" cy="130" r="10" fill="#f0f" filter="drop-shadow(0 0 5px #f0f)"/></svg>`,
  home: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" rx="40" fill="#000" stroke="#f0f" stroke-width="4" />
  <pattern id="hexPattern" x="0" y="0" width="20" height="34.64" patternUnits="userSpaceOnUse">
    <path d="M20 11.54L10 17.32L0 11.54V0L10 -5.77L20 0V11.54Z" fill="none" stroke="#0ff" stroke-width="0.5" opacity="0.15"/>
  </pattern>
  <pattern id="scanlines" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect width="4" height="1" fill="#fff" opacity="0.1" />
  </pattern>
  <rect width="200" height="200" rx="40" fill="url(#hexPattern)" />
  <rect width="200" height="200" rx="40" fill="url(#scanlines)" />
  <!-- Cyberpunk Upgrades --><path d="M40 100 L100 40 L160 100" fill="none" stroke="#0ff" stroke-width="8" stroke-linejoin="miter" filter="drop-shadow(0 0 8px #0ff)"/><path d="M60 100 V160 H90 V130 H110 V160 H140 V100" fill="none" stroke="#f0f" stroke-width="8" stroke-linejoin="miter" filter="drop-shadow(0 0 8px #f0f)"/></svg>`,
  notes: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" rx="40" fill="#000" stroke="#ff0" stroke-width="4" />
  <pattern id="hexPattern" x="0" y="0" width="20" height="34.64" patternUnits="userSpaceOnUse">
    <path d="M20 11.54L10 17.32L0 11.54V0L10 -5.77L20 0V11.54Z" fill="none" stroke="#0ff" stroke-width="0.5" opacity="0.15"/>
  </pattern>
  <pattern id="scanlines" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect width="4" height="1" fill="#fff" opacity="0.1" />
  </pattern>
  <rect width="200" height="200" rx="40" fill="url(#hexPattern)" />
  <rect width="200" height="200" rx="40" fill="url(#scanlines)" />
  <!-- Cyberpunk Upgrades --><rect x="50" y="40" width="100" height="120" fill="none" stroke="#ff0" stroke-width="6" filter="drop-shadow(0 0 5px #ff0)"/><path d="M70 70 H130 M70 100 H130 M70 130 H100" stroke="#0ff" stroke-width="6" stroke-linecap="square" filter="drop-shadow(0 0 5px #0ff)"/></svg>`,
  calendar: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" rx="40" fill="#000" stroke="#0f0" stroke-width="4" />
  <pattern id="hexPattern" x="0" y="0" width="20" height="34.64" patternUnits="userSpaceOnUse">
    <path d="M20 11.54L10 17.32L0 11.54V0L10 -5.77L20 0V11.54Z" fill="none" stroke="#0ff" stroke-width="0.5" opacity="0.15"/>
  </pattern>
  <pattern id="scanlines" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect width="4" height="1" fill="#fff" opacity="0.1" />
  </pattern>
  <rect width="200" height="200" rx="40" fill="url(#hexPattern)" />
  <rect width="200" height="200" rx="40" fill="url(#scanlines)" />
  <!-- Cyberpunk Upgrades --><rect x="50" y="60" width="100" height="100" fill="none" stroke="#0f0" stroke-width="6" filter="drop-shadow(0 0 5px #0f0)"/><path d="M50 90 H150 M70 40 V80 M130 40 V80" stroke="#f0f" stroke-width="8" stroke-linecap="square" filter="drop-shadow(0 0 5px #f0f)"/><rect x="70" y="110" width="20" height="20" fill="#0ff" filter="drop-shadow(0 0 5px #0ff)"/></svg>`,
  camera: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" rx="40" fill="#000" stroke="#0ff" stroke-width="4" />
  <pattern id="hexPattern" x="0" y="0" width="20" height="34.64" patternUnits="userSpaceOnUse">
    <path d="M20 11.54L10 17.32L0 11.54V0L10 -5.77L20 0V11.54Z" fill="none" stroke="#0ff" stroke-width="0.5" opacity="0.15"/>
  </pattern>
  <pattern id="scanlines" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect width="4" height="1" fill="#fff" opacity="0.1" />
  </pattern>
  <rect width="200" height="200" rx="40" fill="url(#hexPattern)" />
  <rect width="200" height="200" rx="40" fill="url(#scanlines)" />
  <!-- Cyberpunk Upgrades --><path d="M40 80 H60 L75 60 H125 L140 80 H160 V150 H40 V80 Z" fill="none" stroke="#0ff" stroke-width="6" filter="drop-shadow(0 0 8px #0ff)"/><circle cx="100" cy="115" r="25" fill="none" stroke="#f0f" stroke-width="6" filter="drop-shadow(0 0 8px #f0f)"/><circle cx="140" cy="100" r="5" fill="#f0f" /></svg>`,
  weather: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" rx="40" fill="#000" stroke="#f0f" stroke-width="4" />
  <pattern id="hexPattern" x="0" y="0" width="20" height="34.64" patternUnits="userSpaceOnUse">
    <path d="M20 11.54L10 17.32L0 11.54V0L10 -5.77L20 0V11.54Z" fill="none" stroke="#0ff" stroke-width="0.5" opacity="0.15"/>
  </pattern>
  <pattern id="scanlines" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect width="4" height="1" fill="#fff" opacity="0.1" />
  </pattern>
  <rect width="200" height="200" rx="40" fill="url(#hexPattern)" />
  <rect width="200" height="200" rx="40" fill="url(#scanlines)" />
  <!-- Cyberpunk Upgrades --><circle cx="80" cy="80" r="30" fill="none" stroke="#ff0" stroke-width="6" filter="drop-shadow(0 0 8px #ff0)"/><path d="M50 130 C40 130 40 100 60 100 C65 80 115 70 130 95 C150 95 150 130 130 130 Z" fill="none" stroke="#0ff" stroke-width="6" filter="drop-shadow(0 0 8px #0ff)"/></svg>`,
  music: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" rx="40" fill="#000" stroke="#0ff" stroke-width="4" />
  <pattern id="hexPattern" x="0" y="0" width="20" height="34.64" patternUnits="userSpaceOnUse">
    <path d="M20 11.54L10 17.32L0 11.54V0L10 -5.77L20 0V11.54Z" fill="none" stroke="#0ff" stroke-width="0.5" opacity="0.15"/>
  </pattern>
  <pattern id="scanlines" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect width="4" height="1" fill="#fff" opacity="0.1" />
  </pattern>
  <rect width="200" height="200" rx="40" fill="url(#hexPattern)" />
  <rect width="200" height="200" rx="40" fill="url(#scanlines)" />
  <!-- Cyberpunk Upgrades --><path d="M85 130 C75 130 65 140 65 150 C65 160 75 170 85 170 C95 170 105 160 105 150 V90 L135 80 V130 C125 130 115 140 115 150 C115 160 125 170 135 170 C145 170 155 160 155 150 V50 L85 70 V130 Z" fill="none" stroke="#f0f" stroke-width="6" filter="drop-shadow(0 0 8px #f0f)"/></svg>`,
  messages: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" rx="40" fill="#000" stroke="#0f0" stroke-width="4" />
  <pattern id="hexPattern" x="0" y="0" width="20" height="34.64" patternUnits="userSpaceOnUse">
    <path d="M20 11.54L10 17.32L0 11.54V0L10 -5.77L20 0V11.54Z" fill="none" stroke="#0ff" stroke-width="0.5" opacity="0.15"/>
  </pattern>
  <pattern id="scanlines" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect width="4" height="1" fill="#fff" opacity="0.1" />
  </pattern>
  <rect width="200" height="200" rx="40" fill="url(#hexPattern)" />
  <rect width="200" height="200" rx="40" fill="url(#scanlines)" />
  <!-- Cyberpunk Upgrades --><path d="M40 100 C40 65 65 40 100 40 C135 40 160 65 160 100 C160 135 135 160 100 160 C85 160 65 170 45 175 C50 160 45 150 42 140 C40 130 40 115 40 100Z" fill="none" stroke="#0f0" stroke-width="6" filter="drop-shadow(0 0 8px #0f0)"/><path d="M70 100 H130" stroke="#0ff" stroke-width="8" stroke-linecap="square" filter="drop-shadow(0 0 5px #0ff)"/></svg>`,
  twitter: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" rx="40" fill="#000" stroke="#0ff" stroke-width="4" />
  <pattern id="hexPattern" x="0" y="0" width="20" height="34.64" patternUnits="userSpaceOnUse">
    <path d="M20 11.54L10 17.32L0 11.54V0L10 -5.77L20 0V11.54Z" fill="none" stroke="#0ff" stroke-width="0.5" opacity="0.15"/>
  </pattern>
  <pattern id="scanlines" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect width="4" height="1" fill="#fff" opacity="0.1" />
  </pattern>
  <rect width="200" height="200" rx="40" fill="url(#hexPattern)" />
  <rect width="200" height="200" rx="40" fill="url(#scanlines)" />
  <!-- Cyberpunk Upgrades --><path d="M140 60 L100 110 V150" stroke="#0ff" stroke-width="12" stroke-linecap="square" filter="drop-shadow(0 0 8px #0ff)"/><path d="M60 60 L100 110" stroke="#f0f" stroke-width="12" stroke-linecap="square" filter="drop-shadow(0 0 8px #f0f)"/></svg>`,
  instagram: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" rx="40" fill="#000" stroke="#f0f" stroke-width="4" />
  <pattern id="hexPattern" x="0" y="0" width="20" height="34.64" patternUnits="userSpaceOnUse">
    <path d="M20 11.54L10 17.32L0 11.54V0L10 -5.77L20 0V11.54Z" fill="none" stroke="#0ff" stroke-width="0.5" opacity="0.15"/>
  </pattern>
  <pattern id="scanlines" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect width="4" height="1" fill="#fff" opacity="0.1" />
  </pattern>
  <rect width="200" height="200" rx="40" fill="url(#hexPattern)" />
  <rect width="200" height="200" rx="40" fill="url(#scanlines)" />
  <!-- Cyberpunk Upgrades --><rect x="50" y="50" width="100" height="100" rx="20" fill="none" stroke="#f0f" stroke-width="8" filter="drop-shadow(0 0 8px #f0f)"/><circle cx="100" cy="100" r="20" fill="none" stroke="#0ff" stroke-width="8" filter="drop-shadow(0 0 8px #0ff)"/><circle cx="130" cy="70" r="5" fill="#0ff" filter="drop-shadow(0 0 5px #0ff)"/></svg>`,
  whatsapp: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" rx="40" fill="#000" stroke="#0f0" stroke-width="4" />
  <pattern id="hexPattern" x="0" y="0" width="20" height="34.64" patternUnits="userSpaceOnUse">
    <path d="M20 11.54L10 17.32L0 11.54V0L10 -5.77L20 0V11.54Z" fill="none" stroke="#0ff" stroke-width="0.5" opacity="0.15"/>
  </pattern>
  <pattern id="scanlines" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect width="4" height="1" fill="#fff" opacity="0.1" />
  </pattern>
  <rect width="200" height="200" rx="40" fill="url(#hexPattern)" />
  <rect width="200" height="200" rx="40" fill="url(#scanlines)" />
  <!-- Cyberpunk Upgrades --><path d="M40 100 C40 65 65 40 100 40 C135 40 160 65 160 100 C160 135 135 160 100 160 C80 160 60 150 50 140 C45 150 40 160 35 165 C38 155 40 145 40 135 C38 125 40 115 40 100Z" fill="none" stroke="#0f0" stroke-width="6" filter="drop-shadow(0 0 8px #0f0)"/><path d="M80 80 L95 90 L115 85 L125 100 L100 120 L75 90 Z" fill="none" stroke="#0ff" stroke-width="4" filter="drop-shadow(0 0 5px #0ff)"/></svg>`,
  discord: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" rx="40" fill="#000" stroke="#5865F2" stroke-width="4" />
  <pattern id="hexPattern" x="0" y="0" width="20" height="34.64" patternUnits="userSpaceOnUse">
    <path d="M20 11.54L10 17.32L0 11.54V0L10 -5.77L20 0V11.54Z" fill="none" stroke="#0ff" stroke-width="0.5" opacity="0.15"/>
  </pattern>
  <pattern id="scanlines" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect width="4" height="1" fill="#fff" opacity="0.1" />
  </pattern>
  <rect width="200" height="200" rx="40" fill="url(#hexPattern)" />
  <rect width="200" height="200" rx="40" fill="url(#scanlines)" />
  <!-- Cyberpunk Upgrades --><path d="M140 60 C140 60 120 50 100 50 C80 50 60 60 60 60 C50 80 40 110 40 130 C50 150 70 150 70 150 L80 135 C65 130 65 130 65 130 C90 145 110 145 135 130 C135 130 135 130 120 135 L130 150 C130 150 150 150 160 130 C160 110 150 80 140 60Z" fill="none" stroke="#5865F2" stroke-width="6" filter="drop-shadow(0 0 8px #5865F2)"/><circle cx="85" cy="100" r="10" fill="#0ff" filter="drop-shadow(0 0 5px #0ff)"/><circle cx="115" cy="100" r="10" fill="#0ff" filter="drop-shadow(0 0 5px #0ff)"/></svg>`,
  youtube: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" rx="40" fill="#000" stroke="#f00" stroke-width="4" />
  <pattern id="hexPattern" x="0" y="0" width="20" height="34.64" patternUnits="userSpaceOnUse">
    <path d="M20 11.54L10 17.32L0 11.54V0L10 -5.77L20 0V11.54Z" fill="none" stroke="#0ff" stroke-width="0.5" opacity="0.15"/>
  </pattern>
  <pattern id="scanlines" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect width="4" height="1" fill="#fff" opacity="0.1" />
  </pattern>
  <rect width="200" height="200" rx="40" fill="url(#hexPattern)" />
  <rect width="200" height="200" rx="40" fill="url(#scanlines)" />
  <!-- Cyberpunk Upgrades --><rect x="40" y="60" width="120" height="80" rx="20" fill="none" stroke="#f00" stroke-width="8" filter="drop-shadow(0 0 8px #f00)"/><path d="M90 85 V115 L120 100 Z" fill="#fff" filter="drop-shadow(0 0 5px #fff)"/></svg>`,
  tiktok: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" rx="40" fill="#000" stroke="#0ff" stroke-width="4" />
  <pattern id="hexPattern" x="0" y="0" width="20" height="34.64" patternUnits="userSpaceOnUse">
    <path d="M20 11.54L10 17.32L0 11.54V0L10 -5.77L20 0V11.54Z" fill="none" stroke="#0ff" stroke-width="0.5" opacity="0.15"/>
  </pattern>
  <pattern id="scanlines" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect width="4" height="1" fill="#fff" opacity="0.1" />
  </pattern>
  <rect width="200" height="200" rx="40" fill="url(#hexPattern)" />
  <rect width="200" height="200" rx="40" fill="url(#scanlines)" />
  <!-- Cyberpunk Upgrades --><path d="M120 40V120C120 140 100 150 85 145C70 135 70 115 80 105C90 95 100 100 100 100 V70C90 70 70 75 60 90 M120 70C130 80 145 80 150 80V50C135 50 125 45 120 40Z" fill="none" stroke="#ff0050" stroke-width="5" transform="translate(3,3)"/><path d="M120 40V120C120 140 100 150 85 145C70 135 70 115 80 105C90 95 100 100 100 100 V70C90 70 70 75 60 90 M120 70C130 80 145 80 150 80V50C135 50 125 45 120 40Z" fill="none" stroke="#00f2fe" stroke-width="5" transform="translate(-3,-3)"/><path d="M120 40V120C120 140 100 150 85 145C70 135 70 115 80 105C90 95 100 100 100 100 V70C90 70 70 75 60 90 M120 70C130 80 145 80 150 80V50C135 50 125 45 120 40Z" fill="white"/></svg>`,
  tinder: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" rx="40" fill="#000" stroke="#f0f" stroke-width="4" />
  <pattern id="hexPattern" x="0" y="0" width="20" height="34.64" patternUnits="userSpaceOnUse">
    <path d="M20 11.54L10 17.32L0 11.54V0L10 -5.77L20 0V11.54Z" fill="none" stroke="#0ff" stroke-width="0.5" opacity="0.15"/>
  </pattern>
  <pattern id="scanlines" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect width="4" height="1" fill="#fff" opacity="0.1" />
  </pattern>
  <rect width="200" height="200" rx="40" fill="url(#hexPattern)" />
  <rect width="200" height="200" rx="40" fill="url(#scanlines)" />
  <!-- Cyberpunk Upgrades --><path d="M100 45 C80 80 40 100 50 140 C60 175 110 175 140 150 C165 130 150 80 135 70 C135 70 150 95 125 120 C105 140 80 130 85 110 C90 90 100 45 100 45Z" fill="none" stroke="#f0f" stroke-width="6" filter="drop-shadow(0 0 8px #f0f)"/></svg>`,
  uber: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" rx="40" fill="#000" stroke="#fff" stroke-width="4" />
  <pattern id="hexPattern" x="0" y="0" width="20" height="34.64" patternUnits="userSpaceOnUse">
    <path d="M20 11.54L10 17.32L0 11.54V0L10 -5.77L20 0V11.54Z" fill="none" stroke="#0ff" stroke-width="0.5" opacity="0.15"/>
  </pattern>
  <pattern id="scanlines" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect width="4" height="1" fill="#fff" opacity="0.1" />
  </pattern>
  <rect width="200" height="200" rx="40" fill="url(#hexPattern)" />
  <rect width="200" height="200" rx="40" fill="url(#scanlines)" />
  <!-- Cyberpunk Upgrades --><circle cx="100" cy="100" r="50" fill="none" stroke="#fff" stroke-width="8" filter="drop-shadow(0 0 5px #fff)"/><rect x="115" y="85" width="40" height="30" rx="5" fill="#fff" filter="drop-shadow(0 0 5px #fff)"/><path d="M100 95 L115 95 V105 L100 105 Z" fill="#fff" /></svg>`,
  phone: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" rx="40" fill="#000" stroke="#0f0" stroke-width="4" />
  <pattern id="hexPattern" x="0" y="0" width="20" height="34.64" patternUnits="userSpaceOnUse">
    <path d="M20 11.54L10 17.32L0 11.54V0L10 -5.77L20 0V11.54Z" fill="none" stroke="#0ff" stroke-width="0.5" opacity="0.15"/>
  </pattern>
  <pattern id="scanlines" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect width="4" height="1" fill="#fff" opacity="0.1" />
  </pattern>
  <rect width="200" height="200" rx="40" fill="url(#hexPattern)" />
  <rect width="200" height="200" rx="40" fill="url(#scanlines)" />
  <!-- Cyberpunk Upgrades --><path d="M125 60 C135 70 145 80 145 90 C145 105 130 115 110 135 C90 155 80 170 65 170 C55 170 45 160 35 150 C25 140 25 130 35 120 L50 105 C60 95 70 95 80 105 L85 110 C95 105 105 95 110 85 L105 80 C95 70 95 60 105 50 L120 35 C130 25 140 25 150 35 Z" fill="none" stroke="#0f0" stroke-width="8" filter="drop-shadow(0 0 8px #0f0)" transform="translate(15, -10)" /></svg>`,
  mail: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" rx="40" fill="#000" stroke="#0ff" stroke-width="4" />
  <pattern id="hexPattern" x="0" y="0" width="20" height="34.64" patternUnits="userSpaceOnUse">
    <path d="M20 11.54L10 17.32L0 11.54V0L10 -5.77L20 0V11.54Z" fill="none" stroke="#0ff" stroke-width="0.5" opacity="0.15"/>
  </pattern>
  <pattern id="scanlines" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect width="4" height="1" fill="#fff" opacity="0.1" />
  </pattern>
  <rect width="200" height="200" rx="40" fill="url(#hexPattern)" />
  <rect width="200" height="200" rx="40" fill="url(#scanlines)" />
  <!-- Cyberpunk Upgrades --><rect x="30" y="60" width="140" height="80" rx="10" fill="none" stroke="#0ff" stroke-width="6" filter="drop-shadow(0 0 5px #0ff)" /><path d="M30 60 L100 110 L170 60" stroke="#0ff" stroke-width="6" stroke-linecap="round" fill="none" filter="drop-shadow(0 0 5px #0ff)" /></svg>`,
  garage: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" rx="40" fill="#000" stroke="#f0f" stroke-width="4" />
  <pattern id="hexPattern" x="0" y="0" width="20" height="34.64" patternUnits="userSpaceOnUse">
    <path d="M20 11.54L10 17.32L0 11.54V0L10 -5.77L20 0V11.54Z" fill="none" stroke="#0ff" stroke-width="0.5" opacity="0.15"/>
  </pattern>
  <pattern id="scanlines" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect width="4" height="1" fill="#fff" opacity="0.1" />
  </pattern>
  <rect width="200" height="200" rx="40" fill="url(#hexPattern)" />
  <rect width="200" height="200" rx="40" fill="url(#scanlines)" />
  <!-- Cyberpunk Upgrades --><path d="M40 100 L100 60 L160 100 V150 H40 Z" fill="none" stroke="#f0f" stroke-width="6" filter="drop-shadow(0 0 8px #f0f)" /><rect x="65" y="110" width="70" height="40" fill="none" stroke="#0ff" stroke-width="4" filter="drop-shadow(0 0 5px #0ff)" /><path d="M65 120 H135 M65 130 H135 M65 140 H135" stroke="#0ff" stroke-width="4" opacity="0.8" /></svg>`,
  darkchat: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" rx="40" fill="#000" stroke="#f00" stroke-width="4" />
  <pattern id="hexPattern" x="0" y="0" width="20" height="34.64" patternUnits="userSpaceOnUse">
    <path d="M20 11.54L10 17.32L0 11.54V0L10 -5.77L20 0V11.54Z" fill="none" stroke="#0ff" stroke-width="0.5" opacity="0.15"/>
  </pattern>
  <pattern id="scanlines" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect width="4" height="1" fill="#fff" opacity="0.1" />
  </pattern>
  <rect width="200" height="200" rx="40" fill="url(#hexPattern)" />
  <rect width="200" height="200" rx="40" fill="url(#scanlines)" />
  <!-- Cyberpunk Upgrades --><path d="M40 100 C40 65 65 40 100 40 C135 40 160 65 160 100 C160 135 135 160 100 160 C85 160 65 170 45 175 C50 160 45 150 42 140 C40 130 40 115 40 100Z" fill="none" stroke="#f00" stroke-width="6" filter="drop-shadow(0 0 8px #f00)" /><circle cx="70" cy="100" r="12" fill="#fff" filter="drop-shadow(0 0 5px #fff)" /><circle cx="100" cy="100" r="12" fill="#fff" filter="drop-shadow(0 0 5px #fff)" /><circle cx="130" cy="100" r="12" fill="#fff" filter="drop-shadow(0 0 5px #fff)" /></svg>`
};

const PLACEHOLDER = `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" rx="40" fill="#000" stroke="#0ff" stroke-width="4"/><circle cx="100" cy="100" r="40" fill="none" stroke="#f0f" stroke-width="6"/></svg>`;

export function CyberEngine({ icon }) {
  const svgString = CYBER_SVG_DICTIONARY[icon] || PLACEHOLDER;
  return (
    <div
      className="w-full h-full"
      dangerouslySetInnerHTML={{ __html: svgString }}
    />
  );
}

CyberEngine.getRawSVG = (icon) => {
  return CYBER_SVG_DICTIONARY[icon] || PLACEHOLDER;
};
