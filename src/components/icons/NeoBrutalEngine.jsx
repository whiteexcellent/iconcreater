import React from 'react';

// Neo Brutal OS Theme
// Anti-design philosophy. High contrast, hard shadows, raw shapes.

const STROKE = 8;
const SHADOW_OFFSET = 12;

export const NEO_BRUTAL_SVG_DICTIONARY = {
    contacts: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="25" y="25" width="160" height="160" rx="12" fill="#000" />

  <defs>
    <pattern id="brutal-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="2" fill="#000" opacity="0.15" />
    </pattern>
  </defs>
  <rect x="25" y="25" width="160" height="160" rx="12" fill="url(#brutal-dots)" />
  <rect x="15" y="15" width="160" height="160" rx="12" fill="#FF5F00" stroke="#000" stroke-width="12" />
  
  <rect x="85" y="65" width="30" height="30" rx="15" fill="#000" />
  <path d="M45 150 L65 110 H135 L155 150 Z" fill="#fff" stroke="#000" stroke-width="8" stroke-linejoin="round" />
  <path d="M55 150 L75 110 H145 L165 150 Z" fill="#000" opacity="0.2" style="mix-blend-mode: multiply;" />
</svg>`,

    bank: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="25" y="25" width="160" height="160" rx="12" fill="#000" />

  <defs>
    <pattern id="brutal-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="2" fill="#000" opacity="0.15" />
    </pattern>
  </defs>
  <rect x="25" y="25" width="160" height="160" rx="12" fill="url(#brutal-dots)" />
  <rect x="15" y="15" width="160" height="160" rx="12" fill="#00FF66" stroke="#000" stroke-width="12" />
  
  <rect x="60" y="55" width="90" height="40" fill="#000" />
  <path d="M95 40 L40 80 H150 Z" fill="#fff" stroke="#000" stroke-width="8" stroke-linejoin="round" />
  <rect x="55" y="90" width="15" height="50" fill="#fff" stroke="#000" stroke-width="8" />
  <rect x="90" y="90" width="15" height="50" fill="#fff" stroke="#000" stroke-width="8" />
  <rect x="125" y="90" width="15" height="50" fill="#fff" stroke="#000" stroke-width="8" />
  <rect x="40" y="150" width="115" height="15" fill="#fff" stroke="#000" stroke-width="8" />
</svg>`,

    maps: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="25" y="25" width="160" height="160" rx="12" fill="#000" />

  <defs>
    <pattern id="brutal-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="2" fill="#000" opacity="0.15" />
    </pattern>
  </defs>
  <rect x="25" y="25" width="160" height="160" rx="12" fill="url(#brutal-dots)" />
  <rect x="15" y="15" width="160" height="160" rx="12" fill="#00FFFF" stroke="#000" stroke-width="12" />
  
  <rect x="45" y="55" width="110" height="90" fill="#000" />
  <path d="M35 80 L80 40 L120 70 L160 40 V130 L120 160 L80 130 L35 150 Z" fill="#FF0088" stroke="#000" stroke-width="8" stroke-linejoin="round" />
  <circle cx="110" cy="70" r="10" fill="#000" />
  <circle cx="100" cy="60" r="10" fill="#FFFF00" stroke="#000" stroke-width="8" />
</svg>`,

    ads: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="25" y="25" width="160" height="160" rx="12" fill="#000" />

  <defs>
    <pattern id="brutal-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="2" fill="#000" opacity="0.15" />
    </pattern>
  </defs>
  <rect x="25" y="25" width="160" height="160" rx="12" fill="url(#brutal-dots)" />
  <rect x="15" y="15" width="160" height="160" rx="12" fill="#FFFF00" stroke="#000" stroke-width="12" />
  
  <rect x="65" y="70" width="80" height="60" fill="#000" />
  <rect x="55" y="60" width="80" height="60" fill="#00FFFF" stroke="#000" stroke-width="8" />
  <path d="M85 30 L115 30 L100 60 Z" fill="#FF0088" stroke="#000" stroke-width="8" stroke-linejoin="round" />
  <path d="M40 130 L150 130 L100 80 Z" fill="#00FF66" stroke="#000" stroke-width="8" stroke-linejoin="round" />
</svg>`,

    gallery: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="25" y="25" width="160" height="160" rx="12" fill="#000" />

  <defs>
    <pattern id="brutal-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="2" fill="#000" opacity="0.15" />
    </pattern>
  </defs>
  <rect x="25" y="25" width="160" height="160" rx="12" fill="url(#brutal-dots)" />
  <rect x="15" y="15" width="160" height="160" rx="12" fill="#9D00FF" stroke="#000" stroke-width="12" />
  
  <rect x="55" y="55" width="90" height="90" fill="#000" />
  <rect x="45" y="45" width="90" height="90" fill="#fff" stroke="#000" stroke-width="8" />
  <circle cx="70" cy="70" r="12" fill="#FFFF00" stroke="#000" stroke-width="6" />
  <path d="M45 110 L75 80 L100 105 L115 90 L135 110" fill="none" stroke="#000" stroke-width="8" stroke-linejoin="round" />
</svg>`,

    store: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="25" y="25" width="160" height="160" rx="12" fill="#000" />

  <defs>
    <pattern id="brutal-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="2" fill="#000" opacity="0.15" />
    </pattern>
  </defs>
  <rect x="25" y="25" width="160" height="160" rx="12" fill="url(#brutal-dots)" />
  <rect x="15" y="15" width="160" height="160" rx="12" fill="#00FFFF" stroke="#000" stroke-width="12" />
  
  <path d="M50 40 L100 160 L150 40 Z" fill="#000" />
  <path d="M40 30 L90 150 L140 30 Z" fill="#FFFF00" stroke="#000" stroke-width="8" stroke-linejoin="round" />
  <path d="M90 150 L140 30 L90 30 Z" fill="#000" opacity="0.1" />
</svg>`,

    settings: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="25" y="25" width="160" height="160" rx="12" fill="#000" />

  <defs>
    <pattern id="brutal-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="2" fill="#000" opacity="0.15" />
    </pattern>
  </defs>
  <rect x="25" y="25" width="160" height="160" rx="12" fill="url(#brutal-dots)" />
  <rect x="15" y="15" width="160" height="160" rx="12" fill="#C0C0C0" stroke="#000" stroke-width="12" />
  
  <path d="M100 35 L125 55 V85 L155 105 L135 135 H105 L80 160 L50 140 V110 L25 85 L45 55 H75 Z" fill="#000" />
  <path d="M90 25 L115 45 V75 L145 95 L125 125 H95 L70 150 L40 130 V100 L15 75 L35 45 H65 Z" fill="#fff" stroke="#000" stroke-width="8" stroke-linejoin="round" />
  <circle cx="80" cy="85" r="25" fill="#000" />
  <circle cx="80" cy="85" r="15" fill="#FF5F00" stroke="#000" stroke-width="8" />
</svg>`,

    emergency: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="25" y="25" width="160" height="160" rx="12" fill="#000" />

  <defs>
    <pattern id="brutal-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="2" fill="#000" opacity="0.15" />
    </pattern>
  </defs>
  <rect x="25" y="25" width="160" height="160" rx="12" fill="url(#brutal-dots)" />
  <rect x="15" y="15" width="160" height="160" rx="12" fill="#FF0033" stroke="#000" stroke-width="12" />
  
  <rect x="85" y="45" width="30" height="110" fill="#000" />
  <rect x="45" y="85" width="110" height="30" fill="#000" />
  
  <rect x="75" y="35" width="30" height="110" fill="#fff" stroke="#000" stroke-width="8" />
  <rect x="35" y="75" width="110" height="30" fill="#fff" stroke="#000" stroke-width="8" />
</svg>`,

    calculator: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="25" y="25" width="160" height="160" rx="12" fill="#000" />

  <defs>
    <pattern id="brutal-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="2" fill="#000" opacity="0.15" />
    </pattern>
  </defs>
  <rect x="25" y="25" width="160" height="160" rx="12" fill="url(#brutal-dots)" />
  <rect x="15" y="15" width="160" height="160" rx="12" fill="#FFFF00" stroke="#000" stroke-width="12" />
  
  <rect x="40" y="30" width="110" height="40" fill="#000" />
  <rect x="30" y="20" width="110" height="40" fill="#00FFFF" stroke="#000" stroke-width="8" />
  
  <rect x="45" y="95" width="25" height="25" fill="#000" />
  <rect x="35" y="85" width="25" height="25" fill="#FF0088" stroke="#000" stroke-width="6" />
  <rect x="85" y="95" width="25" height="25" fill="#000" />
  <rect x="75" y="85" width="25" height="25" fill="#00FF66" stroke="#000" stroke-width="6" />
  <rect x="125" y="95" width="25" height="25" fill="#000" />
  <rect x="115" y="85" width="25" height="25" fill="#fff" stroke="#000" stroke-width="6" />
  
  <rect x="45" y="145" width="25" height="25" fill="#000" />
  <rect x="35" y="135" width="25" height="25" fill="#fff" stroke="#000" stroke-width="6" />
  <rect x="85" y="145" width="25" height="25" fill="#000" />
  <rect x="75" y="135" width="25" height="25" fill="#fff" stroke="#000" stroke-width="6" />
  <rect x="125" y="145" width="25" height="25" fill="#000" />
  <rect x="115" y="135" width="25" height="25" fill="#FF5F00" stroke="#000" stroke-width="6" />
</svg>`,

    home: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="25" y="25" width="160" height="160" rx="12" fill="#000" />

  <defs>
    <pattern id="brutal-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="2" fill="#000" opacity="0.15" />
    </pattern>
  </defs>
  <rect x="25" y="25" width="160" height="160" rx="12" fill="url(#brutal-dots)" />
  <rect x="15" y="15" width="160" height="160" rx="12" fill="#00FF66" stroke="#000" stroke-width="12" />
  
  <path d="M40 90 L105 35 L170 90 V170 H40 Z" fill="#000" />
  <path d="M30 80 L95 25 L160 80 V160 H30 Z" fill="#fff" stroke="#000" stroke-width="8" stroke-linejoin="round" />
  <rect x="75" y="100" width="40" height="60" fill="#000" />
  <rect x="65" y="90" width="40" height="60" fill="#FF0088" stroke="#000" stroke-width="8" />
</svg>`,

    notes: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="25" y="25" width="160" height="160" rx="12" fill="#000" />

  <defs>
    <pattern id="brutal-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="2" fill="#000" opacity="0.15" />
    </pattern>
  </defs>
  <rect x="25" y="25" width="160" height="160" rx="12" fill="url(#brutal-dots)" />
  <rect x="15" y="15" width="160" height="160" rx="12" fill="#FF0088" stroke="#000" stroke-width="12" />
  
  <rect x="60" y="55" width="80" height="100" fill="#000" />
  <rect x="50" y="45" width="80" height="100" fill="#FFFF00" stroke="#000" stroke-width="8" />
  
  <circle cx="65" cy="35" r="8" fill="#000" />
  <circle cx="115" cy="35" r="8" fill="#000" />
  
  <rect x="65" y="70" width="50" height="8" fill="#000" />
  <rect x="65" y="95" width="50" height="8" fill="#000" />
  <rect x="65" y="120" width="30" height="8" fill="#000" />
</svg>`,

    calendar: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="25" y="25" width="160" height="160" rx="12" fill="#000" />

  <defs>
    <pattern id="brutal-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="2" fill="#000" opacity="0.15" />
    </pattern>
  </defs>
  <rect x="25" y="25" width="160" height="160" rx="12" fill="url(#brutal-dots)" />
  <rect x="15" y="15" width="160" height="160" rx="12" fill="#00FFFF" stroke="#000" stroke-width="12" />
  
  <rect x="50" y="60" width="100" height="90" fill="#000" />
  <rect x="40" y="50" width="100" height="90" fill="#fff" stroke="#000" stroke-width="8" />
  
  <path d="M40 85 H140" stroke="#000" stroke-width="8" />
  <rect x="55" y="30" width="15" height="30" fill="#000" />
  <rect x="45" y="20" width="15" height="30" fill="#FF0033" stroke="#000" stroke-width="8" />
  <rect x="115" y="30" width="15" height="30" fill="#000" />
  <rect x="105" y="20" width="15" height="30" fill="#FF0033" stroke="#000" stroke-width="8" />
  
  <rect x="60" y="110" width="20" height="20" fill="#000" />
  <rect x="50" y="100" width="20" height="20" fill="#00FF66" stroke="#000" stroke-width="6" />
</svg>`,

    camera: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="25" y="25" width="160" height="160" rx="12" fill="#000" />

  <defs>
    <pattern id="brutal-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="2" fill="#000" opacity="0.15" />
    </pattern>
  </defs>
  <rect x="25" y="25" width="160" height="160" rx="12" fill="url(#brutal-dots)" />
  <rect x="15" y="15" width="160" height="160" rx="12" fill="#9D00FF" stroke="#000" stroke-width="12" />
  
  <path d="M40 70 L60 50 H140 L160 70 V150 H40 Z" fill="#000" />
  <path d="M30 60 L50 40 H130 L150 60 V140 H30 Z" fill="#00FFFF" stroke="#000" stroke-width="8" stroke-linejoin="round" />
  
  <circle cx="100" cy="110" r="30" fill="#000" />
  <circle cx="90" cy="100" r="30" fill="#fff" stroke="#000" stroke-width="8" />
  <circle cx="90" cy="100" r="10" fill="#FF0088" />
</svg>`,

    weather: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="25" y="25" width="160" height="160" rx="12" fill="#000" />

  <defs>
    <pattern id="brutal-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="2" fill="#000" opacity="0.15" />
    </pattern>
  </defs>
  <rect x="25" y="25" width="160" height="160" rx="12" fill="url(#brutal-dots)" />
  <rect x="15" y="15" width="160" height="160" rx="12" fill="#00FFFF" stroke="#000" stroke-width="12" />
  
  <rect x="85" y="55" width="60" height="60" fill="#000" />
  <rect x="75" y="45" width="60" height="60" fill="#FFFF00" stroke="#000" stroke-width="8" />
  
  <path d="M50 140 H150 V110 H130 V90 H70 V110 H50 Z" fill="#000" />
  <path d="M40 130 H140 V100 H120 V80 H60 V100 H40 Z" fill="#fff" stroke="#000" stroke-width="8" stroke-linejoin="miter" />
</svg>`,

    music: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="25" y="25" width="160" height="160" rx="12" fill="#000" />

  <defs>
    <pattern id="brutal-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="2" fill="#000" opacity="0.15" />
    </pattern>
  </defs>
  <rect x="25" y="25" width="160" height="160" rx="12" fill="url(#brutal-dots)" />
  <rect x="15" y="15" width="160" height="160" rx="12" fill="#FF0033" stroke="#000" stroke-width="12" />
  
  <path d="M70 160 V50 L140 30 V140 H100 V160 Z" fill="#000" />
  <path d="M60 150 V40 L130 20 V130 H90 V150 Z" fill="#00FFFF" stroke="#000" stroke-width="8" stroke-linejoin="round" />
  
  <rect x="40" y="130" width="30" height="30" fill="#000" />
  <rect x="30" y="120" width="30" height="30" fill="#FFFF00" stroke="#000" stroke-width="8" />
  
  <rect x="110" y="110" width="30" height="30" fill="#000" />
  <rect x="100" y="100" width="30" height="30" fill="#FFFF00" stroke="#000" stroke-width="8" />
</svg>`,

    messages: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="25" y="25" width="160" height="160" rx="12" fill="#000" />

  <defs>
    <pattern id="brutal-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="2" fill="#000" opacity="0.15" />
    </pattern>
  </defs>
  <rect x="25" y="25" width="160" height="160" rx="12" fill="url(#brutal-dots)" />
  <rect x="15" y="15" width="160" height="160" rx="12" fill="#00FF66" stroke="#000" stroke-width="12" />
  
  <path d="M50 160 L50 110 H40 V40 H160 V110 H100 Z" fill="#000" />
  <path d="M40 150 L40 100 H30 V30 H150 V100 H90 Z" fill="#fff" stroke="#000" stroke-width="8" stroke-linejoin="round" />
  
  <rect x="50" y="60" width="15" height="15" fill="#000" />
  <rect x="85" y="60" width="15" height="15" fill="#000" />
  <rect x="120" y="60" width="15" height="15" fill="#000" />
</svg>`,

    twitter: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="25" y="25" width="160" height="160" rx="12" fill="#000" />

  <defs>
    <pattern id="brutal-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="2" fill="#000" opacity="0.15" />
    </pattern>
  </defs>
  <rect x="25" y="25" width="160" height="160" rx="12" fill="url(#brutal-dots)" />
  <rect x="15" y="15" width="160" height="160" rx="12" fill="#000" stroke="#000" stroke-width="12" />
  
  <path d="M60 40 L160 160 M140 40 L40 160" stroke="#000" stroke-width="24" stroke-linecap="square" />
  <path d="M50 30 L150 150 M130 30 L30 150" stroke="#fff" stroke-width="16" stroke-linecap="square" />
</svg>`,

    instagram: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="25" y="25" width="160" height="160" rx="12" fill="#000" />

  <defs>
    <pattern id="brutal-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="2" fill="#000" opacity="0.15" />
    </pattern>
  </defs>
  <rect x="25" y="25" width="160" height="160" rx="12" fill="url(#brutal-dots)" />
  <rect x="15" y="15" width="160" height="160" rx="12" fill="#FF0088" stroke="#000" stroke-width="12" />
  
  <rect x="50" y="50" width="100" height="100" rx="0" fill="#000" />
  <rect x="40" y="40" width="100" height="100" rx="0" fill="none" stroke="#fff" stroke-width="12" />
  <circle cx="100" cy="100" r="25" fill="#000" />
  <circle cx="90" cy="90" r="25" fill="none" stroke="#fff" stroke-width="10" />
  <rect x="110" y="55" width="15" height="15" fill="#000" />
  <rect x="100" y="45" width="15" height="15" fill="#fff" />
</svg>`,

    whatsapp: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="25" y="25" width="160" height="160" rx="12" fill="#000" />

  <defs>
    <pattern id="brutal-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="2" fill="#000" opacity="0.15" />
    </pattern>
  </defs>
  <rect x="25" y="25" width="160" height="160" rx="12" fill="url(#brutal-dots)" />
  <rect x="15" y="15" width="160" height="160" rx="12" fill="#00FF66" stroke="#000" stroke-width="12" />
  
  <path d="M45 155 L60 115 C50 100 50 80 60 65 C80 40 120 40 140 65 C160 90 150 120 125 135 C110 145 90 145 75 140 Z" fill="#000" />
  <path d="M35 145 L50 105 C40 90 40 70 50 55 C70 30 110 30 130 55 C150 80 140 110 115 125 C100 135 80 135 65 130 Z" fill="#fff" stroke="#000" stroke-width="8" stroke-linejoin="round" />
  <path d="M70 70 C80 70 80 90 95 105 C110 120 130 120 130 110" fill="none" stroke="#000" stroke-width="12" stroke-linecap="square" />
</svg>`,

    discord: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="25" y="25" width="160" height="160" rx="12" fill="#000" />

  <defs>
    <pattern id="brutal-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="2" fill="#000" opacity="0.15" />
    </pattern>
  </defs>
  <rect x="25" y="25" width="160" height="160" rx="12" fill="url(#brutal-dots)" />
  <rect x="15" y="15" width="160" height="160" rx="12" fill="#5865F2" stroke="#000" stroke-width="12" />
  
  <path d="M50 80 H150 V130 C150 150 130 160 100 160 C70 160 50 150 50 130 Z" fill="#000" />
  <path d="M40 70 H140 V120 C140 140 120 150 90 150 C60 150 40 140 40 120 Z" fill="#fff" stroke="#000" stroke-width="8" stroke-linejoin="round" />
  <rect x="70" y="90" width="15" height="15" fill="#000" />
  <rect x="95" y="90" width="15" height="15" fill="#000" />
</svg>`,

    youtube: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="25" y="25" width="160" height="160" rx="12" fill="#000" />

  <defs>
    <pattern id="brutal-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="2" fill="#000" opacity="0.15" />
    </pattern>
  </defs>
  <rect x="25" y="25" width="160" height="160" rx="12" fill="url(#brutal-dots)" />
  <rect x="15" y="15" width="160" height="160" rx="12" fill="#FF0033" stroke="#000" stroke-width="12" />
  
  <rect x="40" y="60" width="120" height="80" fill="#000" />
  <rect x="30" y="50" width="120" height="80" fill="#fff" stroke="#000" stroke-width="8" />
  <path d="M75 105 V65 L115 85 Z" fill="#000" />
  <path d="M65 95 V55 L105 75 Z" fill="#FF0033" stroke="#000" stroke-width="6" stroke-linejoin="round" />
</svg>`,

    tiktok: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="25" y="25" width="160" height="160" rx="12" fill="#000" />

  <defs>
    <pattern id="brutal-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="2" fill="#000" opacity="0.15" />
    </pattern>
  </defs>
  <rect x="25" y="25" width="160" height="160" rx="12" fill="url(#brutal-dots)" />
  <rect x="15" y="15" width="160" height="160" rx="12" fill="#000" stroke="#000" stroke-width="12" />
  
  <path d="M120 30 V110 H70 V70 M120 70 H150" fill="none" stroke="#00FFFF" stroke-width="16" stroke-linecap="square" stroke-linejoin="miter" transform="translate(-10, -5)" />
  <path d="M120 30 V110 H70 V70 M120 70 H150" fill="none" stroke="#FF0088" stroke-width="16" stroke-linecap="square" stroke-linejoin="miter" transform="translate(10, 5)" />
  <path d="M120 30 V110 H70 V70 M120 70 H150" fill="none" stroke="#fff" stroke-width="16" stroke-linecap="square" stroke-linejoin="miter" />
</svg>`,

    tinder: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="25" y="25" width="160" height="160" rx="12" fill="#000" />

  <defs>
    <pattern id="brutal-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="2" fill="#000" opacity="0.15" />
    </pattern>
  </defs>
  <rect x="25" y="25" width="160" height="160" rx="12" fill="url(#brutal-dots)" />
  <rect x="15" y="15" width="160" height="160" rx="12" fill="#FF5F00" stroke="#000" stroke-width="12" />
  
  <path d="M110 55 C120 85 140 100 130 130 C110 160 55 160 55 120 C55 90 80 90 90 60 Z" fill="#000" />
  <path d="M100 45 C110 75 130 90 120 120 C100 150 45 150 45 110 C45 80 70 80 80 50 Z" fill="#fff" stroke="#000" stroke-width="8" stroke-linejoin="miter" />
</svg>`,

    uber: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="25" y="25" width="160" height="160" rx="12" fill="#000" />

  <defs>
    <pattern id="brutal-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="2" fill="#000" opacity="0.15" />
    </pattern>
  </defs>
  <rect x="25" y="25" width="160" height="160" rx="12" fill="url(#brutal-dots)" />
  <rect x="15" y="15" width="160" height="160" rx="12" fill="#e5e5e5" stroke="#000" stroke-width="12" />
  
  <rect x="70" y="70" width="60" height="60" fill="#000" />
  <rect x="60" y="60" width="60" height="60" fill="#000" stroke="#000" stroke-width="8" />
  <rect x="60" y="80" width="30" height="20" fill="#fff" />
</svg>`,

    phone: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="25" y="25" width="160" height="160" rx="12" fill="#000" />

  <defs>
    <pattern id="brutal-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="2" fill="#000" opacity="0.15" />
    </pattern>
  </defs>
  <rect x="25" y="25" width="160" height="160" rx="12" fill="url(#brutal-dots)" />
  <rect x="15" y="15" width="160" height="160" rx="12" fill="#00FF66" stroke="#000" stroke-width="12" />
  
  <path d="M60 140 L100 100 L140 140 H160 V50 H40 V140 Z" fill="#000" />
  <path d="M50 130 L90 90 L130 130 H150 V40 H30 V130 Z" fill="#fff" stroke="#000" stroke-width="8" stroke-linejoin="miter" />
  <rect x="60" y="100" width="20" height="20" fill="#000" />
</svg>`,

    mail: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="25" y="25" width="160" height="160" rx="12" fill="#000" />

  <defs>
    <pattern id="brutal-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="2" fill="#000" opacity="0.15" />
    </pattern>
  </defs>
  <rect x="25" y="25" width="160" height="160" rx="12" fill="url(#brutal-dots)" />
  <rect x="15" y="15" width="160" height="160" rx="12" fill="#00FFFF" stroke="#000" stroke-width="12" />
  
  <rect x="35" y="65" width="130" height="80" fill="#000" />
  <rect x="25" y="55" width="130" height="80" fill="#fff" stroke="#000" stroke-width="8" />
  <path d="M25 55 L90 100 L155 55" fill="none" stroke="#000" stroke-width="8" stroke-linejoin="round" />
</svg>`,

    garage: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="25" y="25" width="160" height="160" rx="12" fill="#000" />

  <defs>
    <pattern id="brutal-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="2" fill="#000" opacity="0.15" />
    </pattern>
  </defs>
  <rect x="25" y="25" width="160" height="160" rx="12" fill="url(#brutal-dots)" />
  <rect x="15" y="15" width="160" height="160" rx="12" fill="#9D00FF" stroke="#000" stroke-width="12" />
  
  <path d="M40 160 L105 55 L170 160 Z" fill="#000" />
  <path d="M30 150 L95 45 L160 150 Z" fill="#fff" stroke="#000" stroke-width="8" />
  <rect x="70" y="100" width="50" height="50" fill="#000" />
  <rect x="60" y="90" width="50" height="50" fill="#FFFF00" stroke="#000" stroke-width="8" />
</svg>`,

    darkchat: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="25" y="25" width="160" height="160" rx="12" fill="#000" />

  <defs>
    <pattern id="brutal-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="2" fill="#000" opacity="0.15" />
    </pattern>
  </defs>
  <rect x="25" y="25" width="160" height="160" rx="12" fill="url(#brutal-dots)" />
  <rect x="15" y="15" width="160" height="160" rx="12" fill="#000" stroke="#000" stroke-width="12" />
  
  <path d="M50 160 L50 110 H40 V40 H160 V110 H100 Z" fill="#FF0088" opacity="0.5" />
  <path d="M40 150 L40 100 H30 V30 H150 V100 H90 Z" fill="#000" stroke="#00FF66" stroke-width="8" stroke-linejoin="round" />
  
  <rect x="50" y="60" width="15" height="15" fill="#00FF66" />
  <rect x="85" y="60" width="15" height="15" fill="#00FF66" />
  <rect x="120" y="60" width="15" height="15" fill="#00FF66" />
  <rect x="30" y="30" width="120" height="70" fill="#000" opacity="0.3" />
</svg>`
};

const PLACEHOLDER = `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="#e5e5e5" /><rect x="20" y="20" width="160" height="160" fill="#fff" stroke="#000" stroke-width="8" /><rect x="30" y="30" width="160" height="160" fill="#FF0033" stroke="#000" stroke-width="8" style="mix-blend-mode: multiply;" /><text x="100" y="110" font-family="monospace" font-size="24" font-weight="900" fill="#000" text-anchor="middle">BUILDING</text></svg>`;

export function NeoBrutalEngine({ icon }) {
    const svgString = NEO_BRUTAL_SVG_DICTIONARY[icon] || PLACEHOLDER;
    return (
        <div
            className="w-full h-full"
            dangerouslySetInnerHTML={{ __html: svgString }}
        />
    );
}

NeoBrutalEngine.getRawSVG = (icon) => {
    return NEO_BRUTAL_SVG_DICTIONARY[icon] || PLACEHOLDER;
};
