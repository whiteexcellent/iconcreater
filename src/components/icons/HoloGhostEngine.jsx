import React from 'react';

// Holographic Ghost UI Theme
// Ethereal floating projections. Transparent sci-fi holograms.

export const HOLO_GHOST_SVG_DICTIONARY = {
    contacts: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow-contacts" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="blur" />
      <feMerge><feMergeNode in="blur" /><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
    </filter>
    <pattern id="scan-contacts" width="4" height="4" patternUnits="userSpaceOnUse">
      <rect width="4" height="1" fill="#00FFFF" opacity="0.1" />
    </pattern>
  </defs>
  <rect width="200" height="200" rx="40" fill="#020813" opacity="0.95" />
  <rect x="10" y="10" width="180" height="180" rx="30" fill="url(#scan-contacts)" stroke="#00FFFF" stroke-width="1" opacity="0.3" /><rect x="10" y="10" width="180" height="180" rx="30" fill="none" stroke="#00FFFF" stroke-width="4" opacity="0.1" filter="blur(2px)" />
  
  <g filter="url(#glow-contacts)">
    <circle cx="100" cy="70" r="25" fill="none" stroke="#00FFFF" stroke-width="4" stroke-dasharray="4 4" />
    <path d="M50 160 C 50 120 75 110 100 110 C 125 110 150 120 150 160" fill="none" stroke="#66CCFF" stroke-width="4" />
    <rect x="90" y="20" width="20" height="4" fill="#00FFFF" opacity="0.5" />
    <rect x="90" y="176" width="20" height="4" fill="#00FFFF" opacity="0.5" />
  </g>
</svg>`,

    bank: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow-bank" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="blur" />
      <feMerge><feMergeNode in="blur" /><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
    </filter>
    <pattern id="scan-bank" width="4" height="4" patternUnits="userSpaceOnUse">
      <rect width="4" height="1" fill="#00FFFF" opacity="0.1" />
    </pattern>
  </defs>
  <rect width="200" height="200" rx="40" fill="#020813" opacity="0.95" />
  <rect x="10" y="10" width="180" height="180" rx="30" fill="url(#scan-bank)" stroke="#00FFFF" stroke-width="1" opacity="0.3" /><rect x="10" y="10" width="180" height="180" rx="30" fill="none" stroke="#00FFFF" stroke-width="4" opacity="0.1" filter="blur(2px)" />
  
  <g filter="url(#glow-bank)">
    <path d="M100 40 L40 80 H160 Z" fill="none" stroke="#66CCFF" stroke-width="4" />
    <rect x="55" y="90" width="15" height="50" fill="none" stroke="#00FFFF" stroke-width="2" stroke-dasharray="2 4" />
    <rect x="92.5" y="90" width="15" height="50" fill="none" stroke="#00FFFF" stroke-width="2" stroke-dasharray="2 4" />
    <rect x="130" y="90" width="15" height="50" fill="none" stroke="#00FFFF" stroke-width="2" stroke-dasharray="2 4" />
    <rect x="40" y="150" width="120" height="10" fill="none" stroke="#66CCFF" stroke-width="4" />
  </g>
</svg>`,

    maps: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow-maps" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="blur" />
      <feMerge><feMergeNode in="blur" /><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
    </filter>
    <pattern id="scan-maps" width="4" height="4" patternUnits="userSpaceOnUse">
      <rect width="4" height="1" fill="#00FFFF" opacity="0.1" />
    </pattern>
  </defs>
  <rect width="200" height="200" rx="40" fill="#020813" opacity="0.95" />
  <rect x="10" y="10" width="180" height="180" rx="30" fill="url(#scan-maps)" stroke="#00FFFF" stroke-width="1" opacity="0.3" /><rect x="10" y="10" width="180" height="180" rx="30" fill="none" stroke="#00FFFF" stroke-width="4" opacity="0.1" filter="blur(2px)" />
  
  <g filter="url(#glow-maps)">
    <circle cx="100" cy="80" r="20" fill="none" stroke="#00FFFF" stroke-width="6" />
    <path d="M100 100 L100 150" stroke="#00FFFF" stroke-width="6" stroke-linecap="round" />
    <ellipse cx="100" cy="150" rx="20" ry="5" fill="none" stroke="#66CCFF" stroke-width="2" />
    <ellipse cx="100" cy="150" rx="40" ry="10" fill="none" stroke="#66CCFF" stroke-width="1" stroke-dasharray="4 4"/>
  </g>
</svg>`,

    ads: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow-ads" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
    </filter>
    <pattern id="scan-ads" width="4" height="4" patternUnits="userSpaceOnUse">
      <rect width="4" height="1" fill="#00FFFF" opacity="0.1" />
    </pattern>
  </defs>
  <rect width="200" height="200" rx="40" fill="#020813" opacity="0.95" />
  <rect x="10" y="10" width="180" height="180" rx="30" fill="url(#scan-ads)" stroke="#00FFFF" stroke-width="1" opacity="0.3" /><rect x="10" y="10" width="180" height="180" rx="30" fill="none" stroke="#00FFFF" stroke-width="4" opacity="0.1" filter="blur(2px)" />
  
  <g filter="url(#glow-ads)">
    <path d="M100 40 L160 80 V160 H40 V80 Z" fill="none" stroke="#00FFFF" stroke-width="4" stroke-dasharray="8 4" />
    <path d="M70 110 H130 M70 130 H100" stroke="#66CCFF" stroke-width="4" stroke-linecap="round" />
    <circle cx="100" cy="20" r="4" fill="#66CCFF" />
  </g>
</svg>`,

    gallery: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow-gallery" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
    </filter>
    <pattern id="scan-gallery" width="4" height="6" patternUnits="userSpaceOnUse">
      <rect width="4" height="1" fill="#00FFFF" opacity="0.3" />
      <rect width="4" height="1" y="3" fill="#00FFFF" opacity="0.1" />
    </pattern>
  </defs>
  <rect width="200" height="200" rx="40" fill="#020813" opacity="0.95" />
  <rect x="10" y="10" width="180" height="180" rx="30" fill="url(#scan-gallery)" stroke="#00FFFF" stroke-width="1" opacity="0.3" /><rect x="10" y="10" width="180" height="180" rx="30" fill="none" stroke="#00FFFF" stroke-width="4" opacity="0.1" filter="blur(2px)" />
  
  <g filter="url(#glow-gallery)">
    <rect x="40" y="40" width="120" height="120" fill="none" stroke="#66CCFF" stroke-width="4" />
    <circle cx="70" cy="70" r="15" fill="none" stroke="#00FFFF" stroke-width="4" />
    <path d="M40 160 L80 120 L110 150 L130 130 L160 160" fill="none" stroke="#00FFFF" stroke-width="4" stroke-linejoin="round" />
  </g>
</svg>`,

    store: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow-store" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
    </filter>
    <pattern id="scan-store" width="4" height="6" patternUnits="userSpaceOnUse">
      <rect width="4" height="1" fill="#00FFFF" opacity="0.3" />
      <rect width="4" height="1" y="3" fill="#00FFFF" opacity="0.1" />
    </pattern>
  </defs>
  <rect width="200" height="200" rx="40" fill="#020813" opacity="0.95" />
  <rect x="10" y="10" width="180" height="180" rx="30" fill="url(#scan-store)" stroke="#00FFFF" stroke-width="1" opacity="0.3" /><rect x="10" y="10" width="180" height="180" rx="30" fill="none" stroke="#00FFFF" stroke-width="4" opacity="0.1" filter="blur(2px)" />
  
  <g filter="url(#glow-store)">
    <path d="M50 40 L100 150 L150 40" fill="none" stroke="#00FFFF" stroke-width="12" stroke-linejoin="round" />
    <path d="M75 40 L100 95 L125 40" fill="none" stroke="#66CCFF" stroke-width="4" stroke-linejoin="round" />
  </g>
</svg>`,

    settings: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow-settings" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
    </filter>
    <pattern id="scan-settings" width="4" height="6" patternUnits="userSpaceOnUse">
      <rect width="4" height="1" fill="#00FFFF" opacity="0.3" />
      <rect width="4" height="1" y="3" fill="#00FFFF" opacity="0.1" />
    </pattern>
  </defs>
  <rect width="200" height="200" rx="40" fill="#020813" opacity="0.95" />
  <rect x="10" y="10" width="180" height="180" rx="30" fill="url(#scan-settings)" stroke="#00FFFF" stroke-width="1" opacity="0.3" /><rect x="10" y="10" width="180" height="180" rx="30" fill="none" stroke="#00FFFF" stroke-width="4" opacity="0.1" filter="blur(2px)" />
  
  <g filter="url(#glow-settings)">
    <circle cx="100" cy="100" r="30" fill="none" stroke="#66CCFF" stroke-width="6" stroke-dasharray="10 6" />
    <circle cx="100" cy="100" r="50" fill="none" stroke="#00FFFF" stroke-width="2" />
    <path d="M100 20 V40 M100 160 V180 M20 100 H40 M160 100 H180 M43 43 L57 57 M143 143 L157 157 M43 157 L57 143 M143 43 L157 57" stroke="#00FFFF" stroke-width="6" stroke-linecap="round" />
  </g>
</svg>`,

    emergency: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow-emergency" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
    </filter>
    <pattern id="scan-emergency" width="4" height="6" patternUnits="userSpaceOnUse">
      <rect width="4" height="1" fill="#FF0055" opacity="0.3" />
      <rect width="4" height="1" y="3" fill="#FF0055" opacity="0.1" />
    </pattern>
  </defs>
  <rect width="200" height="200" rx="40" fill="#020813" opacity="0.95" />
  <rect x="10" y="10" width="180" height="180" rx="30" fill="url(#scan-emergency)" stroke="#FF0055" stroke-width="1" opacity="0.3" /><rect x="10" y="10" width="180" height="180" rx="30" fill="none" stroke="#FF0055" stroke-width="4" opacity="0.1" filter="blur(2px)" />
  
  <g filter="url(#glow-emergency)">
    <rect x="80" y="40" width="40" height="120" rx="10" fill="none" stroke="#FF0055" stroke-width="6" />
    <rect x="40" y="80" width="120" height="40" rx="10" fill="none" stroke="#FF0055" stroke-width="6" />
    <path d="M40 80 H160 M40 120 H160 M80 40 V160 M120 40 V160" stroke="#FF0055" stroke-width="2" stroke-dasharray="2 4" opacity="0.5" />
  </g>
</svg>`,

    calculator: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow-calc" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="5" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
    </filter>
    <pattern id="scan-calc" width="4" height="6" patternUnits="userSpaceOnUse">
      <rect width="4" height="1" fill="#00FFFF" opacity="0.3" />
      <rect width="4" height="1" y="3" fill="#00FFFF" opacity="0.1" />
    </pattern>
  </defs>
  <rect width="200" height="200" rx="40" fill="#020813" opacity="0.95" />
  <rect x="10" y="10" width="180" height="180" rx="30" fill="url(#scan-calc)" stroke="#00FFFF" stroke-width="1" opacity="0.3" /><rect x="10" y="10" width="180" height="180" rx="30" fill="none" stroke="#00FFFF" stroke-width="4" opacity="0.1" filter="blur(2px)" />
  
  <g filter="url(#glow-calc)">
    <rect x="40" y="30" width="120" height="40" fill="none" stroke="#66CCFF" stroke-width="4" />
    <circle cx="60" cy="100" r="10" fill="none" stroke="#00FFFF" stroke-width="3" />
    <circle cx="100" cy="100" r="10" fill="none" stroke="#00FFFF" stroke-width="3" />
    <circle cx="140" cy="100" r="10" fill="none" stroke="#00FFFF" stroke-width="3" />
    <circle cx="60" cy="140" r="10" fill="none" stroke="#00FFFF" stroke-width="3" />
    <circle cx="100" cy="140" r="10" fill="none" stroke="#00FFFF" stroke-width="3" />
    <circle cx="140" cy="140" r="10" fill="none" stroke="#66CCFF" stroke-width="3" />
  </g>
</svg>`,

    home: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow-home" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
    </filter>
    <pattern id="scan-home" width="4" height="6" patternUnits="userSpaceOnUse">
      <rect width="4" height="1" fill="#00FFFF" opacity="0.3" />
      <rect width="4" height="1" y="3" fill="#00FFFF" opacity="0.1" />
    </pattern>
  </defs>
  <rect width="200" height="200" rx="40" fill="#020813" opacity="0.95" />
  <rect x="10" y="10" width="180" height="180" rx="30" fill="url(#scan-home)" stroke="#00FFFF" stroke-width="1" opacity="0.3" /><rect x="10" y="10" width="180" height="180" rx="30" fill="none" stroke="#00FFFF" stroke-width="4" opacity="0.1" filter="blur(2px)" />
  
  <g filter="url(#glow-home)">
    <path d="M30 100 L100 40 L170 100" fill="none" stroke="#66CCFF" stroke-width="6" stroke-linejoin="round" />
    <path d="M50 90 V160 H90 V120 H110 V160 H150 V90" fill="none" stroke="#00FFFF" stroke-width="4" stroke-linejoin="round" />
  </g>
</svg>`,

    notes: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow-notes" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
    </filter>
    <pattern id="scan-notes" width="4" height="6" patternUnits="userSpaceOnUse">
      <rect width="4" height="1" fill="#00FFFF" opacity="0.3" />
      <rect width="4" height="1" y="3" fill="#00FFFF" opacity="0.1" />
    </pattern>
  </defs>
  <rect width="200" height="200" rx="40" fill="#020813" opacity="0.95" />
  <rect x="10" y="10" width="180" height="180" rx="30" fill="url(#scan-notes)" stroke="#00FFFF" stroke-width="1" opacity="0.3" /><rect x="10" y="10" width="180" height="180" rx="30" fill="none" stroke="#00FFFF" stroke-width="4" opacity="0.1" filter="blur(2px)" />
  
  <g filter="url(#glow-notes)">
    <rect x="40" y="40" width="120" height="140" fill="none" stroke="#00FFFF" stroke-width="4" />
    <line x1="40" y1="60" x2="160" y2="60" stroke="#00FFFF" stroke-width="2" />
    <path d="M60 90 H140 M60 120 H140 M60 150 H100" stroke="#66CCFF" stroke-width="4" stroke-linecap="round" />
  </g>
</svg>`,

    calendar: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow-calendar" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
    </filter>
    <pattern id="scan-calendar" width="4" height="6" patternUnits="userSpaceOnUse">
      <rect width="4" height="1" fill="#00FFFF" opacity="0.3" />
      <rect width="4" height="1" y="3" fill="#00FFFF" opacity="0.1" />
    </pattern>
  </defs>
  <rect width="200" height="200" rx="40" fill="#020813" opacity="0.95" />
  <rect x="10" y="10" width="180" height="180" rx="30" fill="url(#scan-calendar)" stroke="#00FFFF" stroke-width="1" opacity="0.3" /><rect x="10" y="10" width="180" height="180" rx="30" fill="none" stroke="#00FFFF" stroke-width="4" opacity="0.1" filter="blur(2px)" />
  
  <g filter="url(#glow-calendar)">
    <rect x="40" y="50" width="120" height="110" rx="12" fill="none" stroke="#00FFFF" stroke-width="4" />
    <path d="M40 90 H160" stroke="#00FFFF" stroke-width="4" />
    <path d="M60 30 V60 M140 30 V60" stroke="#66CCFF" stroke-width="6" stroke-linecap="round" />
    <circle cx="70" cy="120" r="4" fill="#66CCFF" />
    <circle cx="100" cy="120" r="4" fill="#00FFFF" />
  </g>
</svg>`,

    camera: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow-camera" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
    </filter>
    <pattern id="scan-camera" width="4" height="6" patternUnits="userSpaceOnUse">
      <rect width="4" height="1" fill="#00FFFF" opacity="0.3" />
      <rect width="4" height="1" y="3" fill="#00FFFF" opacity="0.1" />
    </pattern>
  </defs>
  <rect width="200" height="200" rx="40" fill="#020813" opacity="0.95" />
  <rect x="10" y="10" width="180" height="180" rx="30" fill="url(#scan-camera)" stroke="#00FFFF" stroke-width="1" opacity="0.3" /><rect x="10" y="10" width="180" height="180" rx="30" fill="none" stroke="#00FFFF" stroke-width="4" opacity="0.1" filter="blur(2px)" />
  
  <g filter="url(#glow-camera)">
    <path d="M30 80 H60 L75 50 H125 L140 80 H170 V150 H30 V80 Z" fill="none" stroke="#00FFFF" stroke-width="4" stroke-linejoin="round" />
    <circle cx="100" cy="110" r="25" fill="none" stroke="#66CCFF" stroke-width="6" />
    <circle cx="100" cy="110" r="10" fill="none" stroke="#00FFFF" stroke-width="2" />
  </g>
</svg>`,

    weather: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow-weather" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
    </filter>
    <pattern id="scan-weather" width="4" height="6" patternUnits="userSpaceOnUse">
      <rect width="4" height="1" fill="#00FFFF" opacity="0.3" />
      <rect width="4" height="1" y="3" fill="#00FFFF" opacity="0.1" />
    </pattern>
  </defs>
  <rect width="200" height="200" rx="40" fill="#020813" opacity="0.95" />
  <rect x="10" y="10" width="180" height="180" rx="30" fill="url(#scan-weather)" stroke="#00FFFF" stroke-width="1" opacity="0.3" /><rect x="10" y="10" width="180" height="180" rx="30" fill="none" stroke="#00FFFF" stroke-width="4" opacity="0.1" filter="blur(2px)" />
  
  <g filter="url(#glow-weather)">
    <circle cx="80" cy="80" r="25" fill="none" stroke="#66CCFF" stroke-width="4" stroke-dasharray="8 4" />
    <path d="M40 130 C30 130 30 100 50 100 C55 80 115 70 130 95 C150 95 150 130 130 130 Z" fill="none" stroke="#00FFFF" stroke-width="6" stroke-linejoin="round" />
  </g>
</svg>`,

    music: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow-music" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
    </filter>
    <pattern id="scan-music" width="4" height="6" patternUnits="userSpaceOnUse">
      <rect width="4" height="1" fill="#00FFFF" opacity="0.3" />
      <rect width="4" height="1" y="3" fill="#00FFFF" opacity="0.1" />
    </pattern>
  </defs>
  <rect width="200" height="200" rx="40" fill="#020813" opacity="0.95" />
  <rect x="10" y="10" width="180" height="180" rx="30" fill="url(#scan-music)" stroke="#00FFFF" stroke-width="1" opacity="0.3" /><rect x="10" y="10" width="180" height="180" rx="30" fill="none" stroke="#00FFFF" stroke-width="4" opacity="0.1" filter="blur(2px)" />
  
  <g filter="url(#glow-music)">
    <path d="M85 130 C70 130 60 140 60 155 C60 170 70 180 85 180 C100 180 110 170 110 155 V80 L140 70 V120 C125 120 115 130 115 145 C115 160 125 170 140 170 C155 170 165 160 165 145 V40 L85 65 V130 Z" fill="none" stroke="#00FFFF" stroke-width="6" stroke-linejoin="round" />
    <circle cx="85" cy="155" r="5" fill="#66CCFF" />
    <circle cx="140" cy="145" r="5" fill="#66CCFF" />
  </g>
</svg>`,

    messages: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow-messages" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
    </filter>
    <pattern id="scan-messages" width="4" height="6" patternUnits="userSpaceOnUse">
      <rect width="4" height="1" fill="#00FFFF" opacity="0.3" />
      <rect width="4" height="1" y="3" fill="#00FFFF" opacity="0.1" />
    </pattern>
  </defs>
  <rect width="200" height="200" rx="40" fill="#020813" opacity="0.95" />
  <rect x="10" y="10" width="180" height="180" rx="30" fill="url(#scan-messages)" stroke="#00FFFF" stroke-width="1" opacity="0.3" /><rect x="10" y="10" width="180" height="180" rx="30" fill="none" stroke="#00FFFF" stroke-width="4" opacity="0.1" filter="blur(2px)" />
  
  <g filter="url(#glow-messages)">
    <path d="M30 100 C30 60 60 30 100 30 C140 30 170 60 170 100 C170 140 140 170 100 170 C85 170 65 180 40 185 C45 165 40 155 35 145 C32 135 30 120 30 100Z" fill="none" stroke="#00FFFF" stroke-width="6" stroke-linejoin="round" />
    <circle cx="70" cy="100" r="5" fill="#66CCFF" />
    <circle cx="100" cy="100" r="5" fill="#66CCFF" />
    <circle cx="130" cy="100" r="5" fill="#66CCFF" />
  </g>
</svg>`,

    twitter: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow-twitter" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
    </filter>
    <pattern id="scan-twitter" width="4" height="6" patternUnits="userSpaceOnUse">
      <rect width="4" height="1" fill="#00FFFF" opacity="0.3" />
      <rect width="4" height="1" y="3" fill="#00FFFF" opacity="0.1" />
    </pattern>
  </defs>
  <rect width="200" height="200" rx="40" fill="#020813" opacity="0.95" />
  <rect x="10" y="10" width="180" height="180" rx="30" fill="url(#scan-twitter)" stroke="#00FFFF" stroke-width="1" opacity="0.3" /><rect x="10" y="10" width="180" height="180" rx="30" fill="none" stroke="#00FFFF" stroke-width="4" opacity="0.1" filter="blur(2px)" />
  
  <g filter="url(#glow-twitter)">
    <path d="M140 50 L100 105 V150" stroke="#00FFFF" stroke-width="8" stroke-linecap="round" />
    <path d="M60 50 L140 150" stroke="#66CCFF" stroke-width="8" stroke-linecap="round" />
  </g>
</svg>`,

    instagram: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow-instagram" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
    </filter>
    <pattern id="scan-instagram" width="4" height="6" patternUnits="userSpaceOnUse">
      <rect width="4" height="1" fill="#00FFFF" opacity="0.3" />
      <rect width="4" height="1" y="3" fill="#00FFFF" opacity="0.1" />
    </pattern>
  </defs>
  <rect width="200" height="200" rx="40" fill="#020813" opacity="0.95" />
  <rect x="10" y="10" width="180" height="180" rx="30" fill="url(#scan-instagram)" stroke="#00FFFF" stroke-width="1" opacity="0.3" /><rect x="10" y="10" width="180" height="180" rx="30" fill="none" stroke="#00FFFF" stroke-width="4" opacity="0.1" filter="blur(2px)" />
  
  <g filter="url(#glow-instagram)">
    <rect x="40" y="40" width="120" height="120" rx="30" fill="none" stroke="#00FFFF" stroke-width="6" />
    <circle cx="100" cy="100" r="25" fill="none" stroke="#66CCFF" stroke-width="6" />
    <circle cx="135" cy="65" r="5" fill="#00FFFF" />
  </g>
</svg>`,

    whatsapp: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow-whatsapp" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
    </filter>
    <pattern id="scan-whatsapp" width="4" height="6" patternUnits="userSpaceOnUse">
      <rect width="4" height="1" fill="#00FFFF" opacity="0.3" />
      <rect width="4" height="1" y="3" fill="#00FFFF" opacity="0.1" />
    </pattern>
  </defs>
  <rect width="200" height="200" rx="40" fill="#020813" opacity="0.95" />
  <rect x="10" y="10" width="180" height="180" rx="30" fill="url(#scan-whatsapp)" stroke="#00FFFF" stroke-width="1" opacity="0.3" /><rect x="10" y="10" width="180" height="180" rx="30" fill="none" stroke="#00FFFF" stroke-width="4" opacity="0.1" filter="blur(2px)" />
  
  <g filter="url(#glow-whatsapp)">
    <path d="M40 100 C40 65 65 40 100 40 C135 40 160 65 160 100 C160 135 135 160 100 160 C80 160 60 150 50 140 L35 165 L40 135 C38 125 40 115 40 100Z" fill="none" stroke="#00FFFF" stroke-width="6" stroke-linejoin="round"/>
    <path d="M75 80 Q90 90 95 105 Q110 95 125 105 Q120 120 100 125 Q75 110 75 80 Z" fill="none" stroke="#66CCFF" stroke-width="4" stroke-linecap="round" />
  </g>
</svg>`,

    discord: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow-discord" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
    </filter>
    <pattern id="scan-discord" width="4" height="6" patternUnits="userSpaceOnUse">
      <rect width="4" height="1" fill="#00FFFF" opacity="0.3" />
      <rect width="4" height="1" y="3" fill="#00FFFF" opacity="0.1" />
    </pattern>
  </defs>
  <rect width="200" height="200" rx="40" fill="#020813" opacity="0.95" />
  <rect x="10" y="10" width="180" height="180" rx="30" fill="url(#scan-discord)" stroke="#00FFFF" stroke-width="1" opacity="0.3" /><rect x="10" y="10" width="180" height="180" rx="30" fill="none" stroke="#00FFFF" stroke-width="4" opacity="0.1" filter="blur(2px)" />
  
  <g filter="url(#glow-discord)">
    <path d="M140 60 C140 60 120 50 100 50 C80 50 60 60 60 60 C50 80 40 110 40 130 C50 150 70 150 70 150 L80 135 C65 130 65 130 65 130 C90 145 110 145 135 130 C135 130 135 130 120 135 L130 150 C130 150 150 150 160 130 C160 110 150 80 140 60Z" fill="none" stroke="#00FFFF" stroke-width="4" stroke-linejoin="round" stroke-dasharray="10 4"/>
    <circle cx="85" cy="100" r="5" fill="#66CCFF" />
    <circle cx="115" cy="100" r="5" fill="#66CCFF" />
  </g>
</svg>`,

    youtube: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow-youtube" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
    </filter>
    <pattern id="scan-youtube" width="4" height="6" patternUnits="userSpaceOnUse">
      <rect width="4" height="1" fill="#00FFFF" opacity="0.3" />
      <rect width="4" height="1" y="3" fill="#00FFFF" opacity="0.1" />
    </pattern>
  </defs>
  <rect width="200" height="200" rx="40" fill="#020813" opacity="0.95" />
  <rect x="10" y="10" width="180" height="180" rx="30" fill="url(#scan-youtube)" stroke="#00FFFF" stroke-width="1" opacity="0.3" /><rect x="10" y="10" width="180" height="180" rx="30" fill="none" stroke="#00FFFF" stroke-width="4" opacity="0.1" filter="blur(2px)" />
  
  <g filter="url(#glow-youtube)">
    <rect x="30" y="60" width="140" height="80" rx="20" fill="none" stroke="#00FFFF" stroke-width="6" />
    <path d="M85 80 V120 L125 100 Z" fill="none" stroke="#66CCFF" stroke-width="4" stroke-linejoin="round" />
  </g>
</svg>`,

    tiktok: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow-tiktok" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
    </filter>
    <pattern id="scan-tiktok" width="4" height="6" patternUnits="userSpaceOnUse">
      <rect width="4" height="1" fill="#00FFFF" opacity="0.3" />
      <rect width="4" height="1" y="3" fill="#00FFFF" opacity="0.1" />
    </pattern>
  </defs>
  <rect width="200" height="200" rx="40" fill="#020813" opacity="0.95" />
  <rect x="10" y="10" width="180" height="180" rx="30" fill="url(#scan-tiktok)" stroke="#00FFFF" stroke-width="1" opacity="0.3" /><rect x="10" y="10" width="180" height="180" rx="30" fill="none" stroke="#00FFFF" stroke-width="4" opacity="0.1" filter="blur(2px)" />
  
  <g filter="url(#glow-tiktok)">
    <path d="M110 40V120C110 140 90 150 75 145C60 135 60 115 70 105C80 95 90 100 90 100 V70C80 70 60 75 50 90 M110 70C120 80 135 80 140 80V50C125 50 115 45 110 40Z" fill="none" stroke="#00FFFF" stroke-width="6" stroke-linejoin="round" transform="translate(4,4)" />
    <path d="M110 40V120C110 140 90 150 75 145C60 135 60 115 70 105C80 95 90 100 90 100 V70C80 70 60 75 50 90 M110 70C120 80 135 80 140 80V50C125 50 115 45 110 40Z" fill="none" stroke="#00BFFF" stroke-width="2" stroke-linejoin="round" transform="translate(-4,-4)" />
  </g>
</svg>`,

    tinder: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow-tinder" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
    </filter>
    <pattern id="scan-tinder" width="4" height="6" patternUnits="userSpaceOnUse">
      <rect width="4" height="1" fill="#00FFFF" opacity="0.3" />
      <rect width="4" height="1" y="3" fill="#00FFFF" opacity="0.1" />
    </pattern>
  </defs>
  <rect width="200" height="200" rx="40" fill="#020813" opacity="0.95" />
  <rect x="10" y="10" width="180" height="180" rx="30" fill="url(#scan-tinder)" stroke="#00FFFF" stroke-width="1" opacity="0.3" /><rect x="10" y="10" width="180" height="180" rx="30" fill="none" stroke="#00FFFF" stroke-width="4" opacity="0.1" filter="blur(2px)" />
  
  <g filter="url(#glow-tinder)">
    <path d="M100 45 C80 80 40 100 50 140 C60 175 110 175 140 150 C165 130 150 80 135 70 C135 70 150 95 125 120 C105 140 80 130 85 110 C90 90 100 45 100 45Z" fill="none" stroke="#00FFFF" stroke-width="4" stroke-linejoin="round" stroke-dasharray="10 6" />
  </g>
</svg>`,

    uber: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow-uber" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
    </filter>
    <pattern id="scan-uber" width="4" height="6" patternUnits="userSpaceOnUse">
      <rect width="4" height="1" fill="#00FFFF" opacity="0.3" />
      <rect width="4" height="1" y="3" fill="#00FFFF" opacity="0.1" />
    </pattern>
  </defs>
  <rect width="200" height="200" rx="40" fill="#020813" opacity="0.95" />
  <rect x="10" y="10" width="180" height="180" rx="30" fill="url(#scan-uber)" stroke="#00FFFF" stroke-width="1" opacity="0.3" /><rect x="10" y="10" width="180" height="180" rx="30" fill="none" stroke="#00FFFF" stroke-width="4" opacity="0.1" filter="blur(2px)" />
  
  <g filter="url(#glow-uber)">
    <circle cx="100" cy="100" r="40" fill="none" stroke="#00FFFF" stroke-width="6" />
    <rect x="115" y="85" width="40" height="30" fill="none" stroke="#66CCFF" stroke-width="4" />
  </g>
</svg>`,

    phone: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow-phone" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
    </filter>
    <pattern id="scan-phone" width="4" height="6" patternUnits="userSpaceOnUse">
      <rect width="4" height="1" fill="#00FFFF" opacity="0.3" />
      <rect width="4" height="1" y="3" fill="#00FFFF" opacity="0.1" />
    </pattern>
  </defs>
  <rect width="200" height="200" rx="40" fill="#020813" opacity="0.95" />
  <rect x="10" y="10" width="180" height="180" rx="30" fill="url(#scan-phone)" stroke="#00FFFF" stroke-width="1" opacity="0.3" /><rect x="10" y="10" width="180" height="180" rx="30" fill="none" stroke="#00FFFF" stroke-width="4" opacity="0.1" filter="blur(2px)" />
  
  <g filter="url(#glow-phone)">
    <path d="M125 60 C135 70 145 80 145 90 C145 105 130 115 110 135 C90 155 80 170 65 170 C55 170 45 160 35 150 C25 140 25 130 35 120 L50 105 C60 95 70 95 80 105 L85 110 C95 105 105 95 110 85 L105 80 C95 70 95 60 105 50 L120 35 C130 25 140 25 150 35 Z" fill="none" stroke="#00FFFF" stroke-width="6" stroke-linejoin="round" transform="translate(15, -10)" />
  </g>
</svg>`,

    mail: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow-mail" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
    </filter>
    <pattern id="scan-mail" width="4" height="6" patternUnits="userSpaceOnUse">
      <rect width="4" height="1" fill="#00FFFF" opacity="0.3" />
      <rect width="4" height="1" y="3" fill="#00FFFF" opacity="0.1" />
    </pattern>
  </defs>
  <rect width="200" height="200" rx="40" fill="#020813" opacity="0.95" />
  <rect x="10" y="10" width="180" height="180" rx="30" fill="url(#scan-mail)" stroke="#00FFFF" stroke-width="1" opacity="0.3" /><rect x="10" y="10" width="180" height="180" rx="30" fill="none" stroke="#00FFFF" stroke-width="4" opacity="0.1" filter="blur(2px)" />
  
  <g filter="url(#glow-mail)">
    <rect x="30" y="60" width="140" height="80" rx="10" fill="none" stroke="#00FFFF" stroke-width="6" />
    <path d="M30 60 L100 110 L170 60" fill="none" stroke="#66CCFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
  </g>
</svg>`,

    garage: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow-garage" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
    </filter>
    <pattern id="scan-garage" width="4" height="6" patternUnits="userSpaceOnUse">
      <rect width="4" height="1" fill="#00FFFF" opacity="0.3" />
      <rect width="4" height="1" y="3" fill="#00FFFF" opacity="0.1" />
    </pattern>
  </defs>
  <rect width="200" height="200" rx="40" fill="#020813" opacity="0.95" />
  <rect x="10" y="10" width="180" height="180" rx="30" fill="url(#scan-garage)" stroke="#00FFFF" stroke-width="1" opacity="0.3" /><rect x="10" y="10" width="180" height="180" rx="30" fill="none" stroke="#00FFFF" stroke-width="4" opacity="0.1" filter="blur(2px)" />
  
  <g filter="url(#glow-garage)">
    <path d="M30 100 L100 50 L170 100 V160 H30 Z" fill="none" stroke="#00FFFF" stroke-width="4" stroke-linejoin="round" stroke-dasharray="12 6" />
    <rect x="60" y="110" width="80" height="50" fill="none" stroke="#66CCFF" stroke-width="4" />
    <path d="M60 125 H140 M60 140 H140" stroke="#66CCFF" stroke-width="2" />
  </g>
</svg>`,

    darkchat: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow-darkchat" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
    </filter>
    <pattern id="scan-darkchat" width="4" height="6" patternUnits="userSpaceOnUse">
      <rect width="4" height="1" fill="#FF0000" opacity="0.3" />
      <rect width="4" height="1" y="3" fill="#FF0000" opacity="0.1" />
    </pattern>
  </defs>
  <rect width="200" height="200" rx="40" fill="#020813" opacity="0.95" />
  <rect x="10" y="10" width="180" height="180" rx="30" fill="url(#scan-darkchat)" stroke="#FF0000" stroke-width="1" opacity="0.3" /><rect x="10" y="10" width="180" height="180" rx="30" fill="none" stroke="#FF0000" stroke-width="4" opacity="0.1" filter="blur(2px)" />
  
  <g filter="url(#glow-darkchat)">
    <path d="M40 100 C40 65 65 40 100 40 C135 40 160 65 160 100 C160 135 135 160 100 160 C85 160 65 170 45 175 C50 160 45 150 42 140 C40 130 40 115 40 100Z" fill="none" stroke="#FF0000" stroke-width="4" stroke-linejoin="round" />
    <path d="M60 100 H140 M80 70 V130 M120 70 V130" stroke="#FF0000" stroke-width="2" opacity="0.5" />
    <circle cx="70" cy="100" r="4" fill="#FF0000" />
    <circle cx="100" cy="100" r="4" fill="#FF0000" />
    <circle cx="130" cy="100" r="4" fill="#FF0000" />
  </g>
</svg>`
};

const PLACEHOLDER = `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" rx="40" fill="#040b16" opacity="0.8" /><rect x="10" y="10" width="180" height="180" rx="35" fill="none" stroke="#00ffff" stroke-width="2" opacity="0.5" /><circle cx="100" cy="100" r="40" fill="none" stroke="#00ffff" stroke-width="4" filter="drop-shadow(0 0 10px #00ffff)" /><text x="100" y="105" font-family="sans-serif" font-size="20" fill="#00ffff" text-anchor="middle" letter-spacing="2">GHOST</text></svg>`;

export function HoloGhostEngine({ icon }) {
    const svgString = HOLO_GHOST_SVG_DICTIONARY[icon] || PLACEHOLDER;
    return (
        <div
            className="w-full h-full relative"
            dangerouslySetInnerHTML={{ __html: svgString }}
        />
    );
}

HoloGhostEngine.getRawSVG = (icon) => {
    return HOLO_GHOST_SVG_DICTIONARY[icon] || PLACEHOLDER;
};
