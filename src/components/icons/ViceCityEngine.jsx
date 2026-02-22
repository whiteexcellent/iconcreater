import React from 'react';
import { GEOMETRY_BANK } from '../../utils/geometryBank';

// Vice City Engine provides an 80s Synthwave / Outrun aesthetic
// Deep purples, hot pinks, cyan glowing borders, and horizontal scanlines
export const VICECITY_SVG_DICTIONARY = {
  phone: `
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="vice-bg" x1="0" y1="0" x2="0" y2="200" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#120428" />
      <stop offset="100%" stop-color="#2a0b59" />
    </linearGradient>
    <linearGradient id="vice-sunset" x1="0" y1="40" x2="0" y2="160" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#ff007f" />
      <stop offset="50%" stop-color="#ff007f" />
      <stop offset="50.1%" stop-color="#ff7f00" />
      <stop offset="100%" stop-color="#ff7f00" />
    </linearGradient>
    <pattern id="vice-scanlines" width="4" height="4" patternUnits="userSpaceOnUse">
      <line x1="0" y1="0" x2="4" y2="0" stroke="#ffffff" stroke-width="0.5" opacity="0.08" />
    </pattern>
    <filter id="vice-glow-cyan" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>

  <!-- Deep Purple Base -->
  <rect width="200" height="200" rx="40" fill="url(#vice-bg)" />
  
  <!-- CRT Scanlines -->
  <rect width="200" height="200" rx="40" fill="url(#vice-scanlines)" />

  <!-- Neon Glowing Outer Borders -->
  <rect x="8" y="8" width="184" height="184" rx="32" fill="none" stroke="#f0148b" stroke-width="2" opacity="0.6" />
  <rect x="4" y="4" width="192" height="192" rx="36" fill="none" stroke="#06b6d4" stroke-width="3" filter="url(#vice-glow-cyan)" />

  <!-- Outrun Sunset Graphic -->
  <circle cx="100" cy="100" r="60" fill="url(#vice-sunset)" />
  
  <!-- Horizontal Horizon Cuts -->
  <line x1="40" y1="110" x2="160" y2="110" stroke="#120428" stroke-width="4" />
  <line x1="45" y1="125" x2="155" y2="125" stroke="#120428" stroke-width="6" />
  <line x1="55" y1="140" x2="145" y2="140" stroke="#120428" stroke-width="8" />

  <!-- Phone Receiver Silhouette -->
  <path d="M 75 75 C 60 90 60 110 75 125 C 90 140 110 140 125 125 C 135 115 135 105 125 95 L 115 105 C 110 110 100 110 95 105 C 90 100 90 90 95 85 C 100 80 100 70 95 65 L 85 55 C 75 45 65 45 55 55 Z" fill="#ffffff" filter="url(#vice-glow-cyan)" />
</svg>`,
  messages: `
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="vice-bg" x1="0" y1="0" x2="0" y2="200" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#120428" />
      <stop offset="100%" stop-color="#2a0b59" />
    </linearGradient>
    <linearGradient id="vice-sunset" x1="0" y1="40" x2="0" y2="160" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#ff007f" />
      <stop offset="50%" stop-color="#ff007f" />
      <stop offset="50.1%" stop-color="#ff7f00" />
      <stop offset="100%" stop-color="#ff7f00" />
    </linearGradient>
    <pattern id="vice-scanlines" width="4" height="4" patternUnits="userSpaceOnUse">
      <line x1="0" y1="0" x2="4" y2="0" stroke="#ffffff" stroke-width="0.5" opacity="0.08" />
    </pattern>
    <filter id="vice-glow-cyan" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>

  <rect width="200" height="200" rx="40" fill="url(#vice-bg)" />
  <rect width="200" height="200" rx="40" fill="url(#vice-scanlines)" />

  <rect x="8" y="8" width="184" height="184" rx="32" fill="none" stroke="#f0148b" stroke-width="2" opacity="0.6" />
  <rect x="4" y="4" width="192" height="192" rx="36" fill="none" stroke="#06b6d4" stroke-width="3" filter="url(#vice-glow-cyan)" />

  <circle cx="100" cy="100" r="60" fill="url(#vice-sunset)" />
  <line x1="40" y1="110" x2="160" y2="110" stroke="#120428" stroke-width="4" />
  <line x1="45" y1="125" x2="155" y2="125" stroke="#120428" stroke-width="6" />
  <line x1="55" y1="140" x2="145" y2="140" stroke="#120428" stroke-width="8" />

  <path d="M 60 70 L 140 70 C 145.523 70 150 74.4772 150 80 L 150 110 C 150 115.523 145.523 120 140 120 L 95 120 L 60 145 L 60 120 C 54.4772 120 50 115.523 50 110 L 50 80 C 50 74.4772 54.4772 70 60 70 Z" fill="#ffffff" filter="url(#vice-glow-cyan)" />
</svg>`,
  contacts: `
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="vice-bg" x1="0" y1="0" x2="0" y2="200" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#120428" />
      <stop offset="100%" stop-color="#2a0b59" />
    </linearGradient>
    <linearGradient id="vice-sunset" x1="0" y1="40" x2="0" y2="160" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#ff007f" />
      <stop offset="50%" stop-color="#ff007f" />
      <stop offset="50.1%" stop-color="#ff7f00" />
      <stop offset="100%" stop-color="#ff7f00" />
    </linearGradient>
    <pattern id="vice-scanlines" width="4" height="4" patternUnits="userSpaceOnUse">
      <line x1="0" y1="0" x2="4" y2="0" stroke="#ffffff" stroke-width="0.5" opacity="0.08" />
    </pattern>
    <filter id="vice-glow-cyan" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>

  <rect width="200" height="200" rx="40" fill="url(#vice-bg)" />
  <rect width="200" height="200" rx="40" fill="url(#vice-scanlines)" />

  <rect x="8" y="8" width="184" height="184" rx="32" fill="none" stroke="#f0148b" stroke-width="2" opacity="0.6" />
  <rect x="4" y="4" width="192" height="192" rx="36" fill="none" stroke="#06b6d4" stroke-width="3" filter="url(#vice-glow-cyan)" />

  <circle cx="100" cy="100" r="60" fill="url(#vice-sunset)" />
  <line x1="40" y1="110" x2="160" y2="110" stroke="#120428" stroke-width="4" />
  <line x1="45" y1="125" x2="155" y2="125" stroke="#120428" stroke-width="6" />
  <line x1="55" y1="140" x2="145" y2="140" stroke="#120428" stroke-width="8" />

  <circle cx="100" cy="80" r="20" fill="#ffffff" filter="url(#vice-glow-cyan)" />
  <path d="M 60 145 C 60 120 80 115 100 115 C 120 115 140 120 140 145" fill="none" stroke="#ffffff" stroke-width="12" stroke-linecap="round" filter="url(#vice-glow-cyan)" />
</svg>`,
  camera: `
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="vice-bg" x1="0" y1="0" x2="0" y2="200" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#120428" />
      <stop offset="100%" stop-color="#2a0b59" />
    </linearGradient>
    <linearGradient id="vice-sunset" x1="0" y1="40" x2="0" y2="160" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#ff007f" />
      <stop offset="50%" stop-color="#ff007f" />
      <stop offset="50.1%" stop-color="#ff7f00" />
      <stop offset="100%" stop-color="#ff7f00" />
    </linearGradient>
    <pattern id="vice-scanlines" width="4" height="4" patternUnits="userSpaceOnUse">
      <line x1="0" y1="0" x2="4" y2="0" stroke="#ffffff" stroke-width="0.5" opacity="0.08" />
    </pattern>
    <filter id="vice-glow-cyan" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>

  <rect width="200" height="200" rx="40" fill="url(#vice-bg)" />
  <rect width="200" height="200" rx="40" fill="url(#vice-scanlines)" />

  <rect x="8" y="8" width="184" height="184" rx="32" fill="none" stroke="#f0148b" stroke-width="2" opacity="0.6" />
  <rect x="4" y="4" width="192" height="192" rx="36" fill="none" stroke="#06b6d4" stroke-width="3" filter="url(#vice-glow-cyan)" />

  <circle cx="100" cy="100" r="60" fill="url(#vice-sunset)" />
  <line x1="40" y1="110" x2="160" y2="110" stroke="#120428" stroke-width="4" />
  <line x1="45" y1="125" x2="155" y2="125" stroke="#120428" stroke-width="6" />
  <line x1="55" y1="140" x2="145" y2="140" stroke="#120428" stroke-width="8" />

  <rect x="50" y="70" width="100" height="60" rx="10" fill="none" stroke="#ffffff" stroke-width="8" filter="url(#vice-glow-cyan)" />
  <circle cx="100" cy="100" r="15" fill="#ffffff" filter="url(#vice-glow-cyan)" />
  <rect x="70" y="55" width="30" height="15" fill="#ffffff" filter="url(#vice-glow-cyan)" />
</svg>`,
  maps: `
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="vice-bg" x1="0" y1="0" x2="0" y2="200" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#120428" />
      <stop offset="100%" stop-color="#2a0b59" />
    </linearGradient>
    <linearGradient id="vice-sunset" x1="0" y1="40" x2="0" y2="160" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#ff007f" />
      <stop offset="50%" stop-color="#ff007f" />
      <stop offset="50.1%" stop-color="#ff7f00" />
      <stop offset="100%" stop-color="#ff7f00" />
    </linearGradient>
    <pattern id="vice-scanlines" width="4" height="4" patternUnits="userSpaceOnUse">
      <line x1="0" y1="0" x2="4" y2="0" stroke="#ffffff" stroke-width="0.5" opacity="0.08" />
    </pattern>
    <filter id="vice-glow-cyan" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>

  <rect width="200" height="200" rx="40" fill="url(#vice-bg)" />
  <rect width="200" height="200" rx="40" fill="url(#vice-scanlines)" />

  <rect x="8" y="8" width="184" height="184" rx="32" fill="none" stroke="#f0148b" stroke-width="2" opacity="0.6" />
  <rect x="4" y="4" width="192" height="192" rx="36" fill="none" stroke="#06b6d4" stroke-width="3" filter="url(#vice-glow-cyan)" />

  <circle cx="100" cy="100" r="60" fill="url(#vice-sunset)" />
  <line x1="40" y1="110" x2="160" y2="110" stroke="#120428" stroke-width="4" />
  <line x1="45" y1="125" x2="155" y2="125" stroke="#120428" stroke-width="6" />
  <line x1="55" y1="140" x2="145" y2="140" stroke="#120428" stroke-width="8" />

  <path d="M 100 135 C 100 135 60 95 60 70 C 60 45 100 45 100 70 C 100 45 140 45 140 70 C 140 95 100 135 100 135 Z" fill="#ffffff" filter="url(#vice-glow-cyan)" />
</svg>`
};

Object.keys(GEOMETRY_BANK).forEach(id => {
  if (!VICECITY_SVG_DICTIONARY[id]) {
    VICECITY_SVG_DICTIONARY[id] = `
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="vice-bg" x1="0" y1="0" x2="0" y2="200" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#120428" />
      <stop offset="100%" stop-color="#2a0b59" />
    </linearGradient>
    <linearGradient id="vice-sunset" x1="0" y1="40" x2="0" y2="160" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#ff007f" />
      <stop offset="50%" stop-color="#ff007f" />
      <stop offset="50.1%" stop-color="#ff7f00" />
      <stop offset="100%" stop-color="#ff7f00" />
    </linearGradient>
    <pattern id="vice-scanlines" width="4" height="4" patternUnits="userSpaceOnUse">
      <line x1="0" y1="0" x2="4" y2="0" stroke="#ffffff" stroke-width="0.5" opacity="0.08" />
    </pattern>
    <filter id="vice-glow-cyan" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>

  <rect width="200" height="200" rx="40" fill="url(#vice-bg)" />
  <rect width="200" height="200" rx="40" fill="url(#vice-scanlines)" />

  <rect x="8" y="8" width="184" height="184" rx="32" fill="none" stroke="#f0148b" stroke-width="2" opacity="0.6" />
  <rect x="4" y="4" width="192" height="192" rx="36" fill="none" stroke="#06b6d4" stroke-width="3" filter="url(#vice-glow-cyan)" />

  <circle cx="100" cy="100" r="60" fill="url(#vice-sunset)" />
  <line x1="40" y1="110" x2="160" y2="110" stroke="#120428" stroke-width="4" />
  <line x1="45" y1="125" x2="155" y2="125" stroke="#120428" stroke-width="6" />
  <line x1="55" y1="140" x2="145" y2="140" stroke="#120428" stroke-width="8" />

  <g fill="none" stroke="#ffffff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" filter="url(#vice-glow-cyan)">
    ${GEOMETRY_BANK[id]}
  </g>
</svg>`;
  }
});

const ViceCityPlaceholder = ({ id }) => (
  <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="vice-bg" x1="0" y1="0" x2="0" y2="200" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#120428" />
        <stop offset="100%" stop-color="#2a0b59" />
      </linearGradient>
      <linearGradient id="vice-sunset" x1="0" y1="40" x2="0" y2="160" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#ff007f" />
        <stop offset="50%" stop-color="#ff007f" />
        <stop offset="50.1%" stop-color="#ff7f00" />
        <stop offset="100%" stop-color="#ff7f00" />
      </linearGradient>
      <pattern id="vice-scanlines" width="4" height="4" patternUnits="userSpaceOnUse">
        <line x1="0" y1="0" x2="4" y2="0" stroke="#ffffff" stroke-width="0.5" opacity="0.08" />
      </pattern>
      <filter id="vice-glow-cyan" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="6" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    <rect width="200" height="200" rx="40" fill="url(#vice-bg)" />
    <rect width="200" height="200" rx="40" fill="url(#vice-scanlines)" />

    <rect x="8" y="8" width="184" height="184" rx="32" fill="none" stroke="#f0148b" stroke-width="2" opacity="0.6" />
    <rect x="4" y="4" width="192" height="192" rx="36" fill="none" stroke="#06b6d4" stroke-width="3" filter="url(#vice-glow-cyan)" />

    <circle cx="100" cy="100" r="60" fill="url(#vice-sunset)" />
    <line x1="40" y1="110" x2="160" y2="110" stroke="#120428" stroke-width="4" />
    <line x1="45" y1="125" x2="155" y2="125" stroke="#120428" stroke-width="6" />
    <line x1="55" y1="140" x2="145" y2="140" stroke="#120428" stroke-width="8" />

    <text x="100" y="110" fill="#ffffff" font-family="'Trebuchet MS', sans-serif" font-size="32" text-anchor="middle" font-weight="900" font-style="italic" filter="url(#vice-glow-cyan)">{id.substring(0, 3).toUpperCase()}</text>
  </svg>
);

export const ViceCityEngine = {
  getRawSVG: (appId) => {
    if (VICECITY_SVG_DICTIONARY[appId]) {
      return VICECITY_SVG_DICTIONARY[appId];
    }
    return `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="vice-bg" x1="0" y1="0" x2="0" y2="200" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stop-color="#120428" />
                    <stop offset="100%" stop-color="#2a0b59" />
                </linearGradient>
                <linearGradient id="vice-sunset" x1="0" y1="40" x2="0" y2="160" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stop-color="#ff007f" />
                    <stop offset="50%" stop-color="#ff007f" />
                    <stop offset="50.1%" stop-color="#ff7f00" />
                    <stop offset="100%" stop-color="#ff7f00" />
                </linearGradient>
                <pattern id="vice-scanlines" width="4" height="4" patternUnits="userSpaceOnUse">
                    <line x1="0" y1="0" x2="4" y2="0" stroke="#ffffff" stroke-width="0.5" opacity="0.08" />
                </pattern>
                <filter id="vice-glow-cyan" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            <rect width="200" height="200" rx="40" fill="url(#vice-bg)" />
            <rect width="200" height="200" rx="40" fill="url(#vice-scanlines)" />

            <rect x="8" y="8" width="184" height="184" rx="32" fill="none" stroke="#f0148b" stroke-width="2" opacity="0.6" />
            <rect x="4" y="4" width="192" height="192" rx="36" fill="none" stroke="#06b6d4" stroke-width="3" filter="url(#vice-glow-cyan)" />

            <circle cx="100" cy="100" r="60" fill="url(#vice-sunset)" />
            <line x1="40" y1="110" x2="160" y2="110" stroke="#120428" stroke-width="4" />
            <line x1="45" y1="125" x2="155" y2="125" stroke="#120428" stroke-width="6" />
            <line x1="55" y1="140" x2="145" y2="140" stroke="#120428" stroke-width="8" />

            <text x="100" y="110" fill="#ffffff" font-family="'Trebuchet MS', sans-serif" font-size="32" text-anchor="middle" font-weight="900" font-style="italic" filter="url(#vice-glow-cyan)">${appId.substring(0, 3).toUpperCase()}</text>
        </svg>`;
  }
};

export default function ViceCityEngineComponent({ icon }) {
  if (VICECITY_SVG_DICTIONARY[icon]) {
    return <div dangerouslySetInnerHTML={{ __html: VICECITY_SVG_DICTIONARY[icon] }} className="w-full h-full" />;
  }
  return <ViceCityPlaceholder id={icon} />;
}
