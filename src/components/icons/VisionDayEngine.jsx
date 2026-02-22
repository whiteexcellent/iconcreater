import React from 'react';

// Vision OS Engine provides an Apple Vision Pro bright mode aesthetic
// Extreme glassmorphism, pristine whites, drop shadows, microscopic borders
export const VISIONDAY_SVG_DICTIONARY = {
    phone: `
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="vision-bg" x1="0" y1="0" x2="0" y2="200" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.9" />
      <stop offset="100%" stop-color="#f5f5f7" stop-opacity="0.75" />
    </linearGradient>
    <filter id="vision-shadow" x="-10%" y="-10%" width="120%" height="130%">
      <feDropShadow dx="0" dy="15" stdDeviation="10" flood-opacity="0.12" flood-color="#000000" />
      <feDropShadow dx="0" dy="5" stdDeviation="4" flood-opacity="0.05" flood-color="#000000" />
    </filter>
    <linearGradient id="vision-green" x1="0" y1="0" x2="0" y2="200" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#34C759" />
      <stop offset="100%" stop-color="#28a745" />
    </linearGradient>
  </defs>

  <rect x="10" y="10" width="180" height="180" rx="90" fill="url(#vision-bg)" filter="url(#vision-shadow)" />
  <rect x="10" y="10" width="180" height="180" rx="90" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-opacity="0.8" />
  <rect x="15" y="15" width="170" height="170" rx="85" fill="none" stroke="#e0e0e0" stroke-width="0.5" stroke-opacity="0.5" />

  <circle cx="100" cy="100" r="60" fill="url(#vision-green)" opacity="0.15" />

  <path d="M 75 75 C 60 90 60 110 75 125 C 90 140 110 140 125 125 C 135 115 135 105 125 95 L 115 105 C 110 110 100 110 95 105 C 90 100 90 90 95 85 C 100 80 100 70 95 65 L 85 55 C 75 45 65 45 55 55 Z" fill="url(#vision-green)" />
</svg>`,
    messages: `
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="vision-bg" x1="0" y1="0" x2="0" y2="200" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.9" />
      <stop offset="100%" stop-color="#f5f5f7" stop-opacity="0.75" />
    </linearGradient>
    <filter id="vision-shadow" x="-10%" y="-10%" width="120%" height="130%">
      <feDropShadow dx="0" dy="15" stdDeviation="10" flood-opacity="0.12" flood-color="#000000" />
      <feDropShadow dx="0" dy="5" stdDeviation="4" flood-opacity="0.05" flood-color="#000000" />
    </filter>
    <linearGradient id="vision-blue" x1="0" y1="0" x2="0" y2="200" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#007AFF" />
      <stop offset="100%" stop-color="#0056b3" />
    </linearGradient>
  </defs>

  <rect x="10" y="10" width="180" height="180" rx="90" fill="url(#vision-bg)" filter="url(#vision-shadow)" />
  <rect x="10" y="10" width="180" height="180" rx="90" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-opacity="0.8" />
  
  <path d="M 60 70 L 140 70 C 145.523 70 150 74.4772 150 80 L 150 110 C 150 115.523 145.523 120 140 120 L 95 120 L 60 145 L 60 120 C 54.4772 120 50 115.523 50 110 L 50 80 C 50 74.4772 54.4772 70 60 70 Z" fill="url(#vision-blue)" />
</svg>`,
    contacts: `
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="vision-bg" x1="0" y1="0" x2="0" y2="200" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.9" />
      <stop offset="100%" stop-color="#f5f5f7" stop-opacity="0.75" />
    </linearGradient>
    <filter id="vision-shadow" x="-10%" y="-10%" width="120%" height="130%">
      <feDropShadow dx="0" dy="15" stdDeviation="10" flood-opacity="0.12" flood-color="#000000" />
      <feDropShadow dx="0" dy="5" stdDeviation="4" flood-opacity="0.05" flood-color="#000000" />
    </filter>
    <linearGradient id="vision-gray" x1="0" y1="0" x2="0" y2="200" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#8E8E93" />
      <stop offset="100%" stop-color="#5c5c60" />
    </linearGradient>
  </defs>

  <rect x="10" y="10" width="180" height="180" rx="90" fill="url(#vision-bg)" filter="url(#vision-shadow)" />
  <rect x="10" y="10" width="180" height="180" rx="90" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-opacity="0.8" />

  <circle cx="100" cy="80" r="24" fill="url(#vision-gray)" />
  <path d="M 60 145 C 60 120 80 115 100 115 C 120 115 140 120 140 145" fill="none" stroke="url(#vision-gray)" stroke-width="16" stroke-linecap="round" />
</svg>`,
    camera: `
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="vision-bg" x1="0" y1="0" x2="0" y2="200" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.9" />
      <stop offset="100%" stop-color="#f5f5f7" stop-opacity="0.75" />
    </linearGradient>
    <filter id="vision-shadow" x="-10%" y="-10%" width="120%" height="130%">
      <feDropShadow dx="0" dy="15" stdDeviation="10" flood-opacity="0.12" flood-color="#000000" />
    </filter>
  </defs>

  <rect x="10" y="10" width="180" height="180" rx="90" fill="url(#vision-bg)" filter="url(#vision-shadow)" />
  <rect x="10" y="10" width="180" height="180" rx="90" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-opacity="0.8" />

  <rect x="50" y="70" width="100" height="65" rx="14" fill="#333333" />
  <circle cx="100" cy="102" r="18" fill="#1c1c1e" />
  <circle cx="100" cy="102" r="14" fill="none" stroke="#ffffff" stroke-width="2" />
  <rect x="70" y="55" width="30" height="15" rx="4" fill="#333333" />
  <circle cx="135" cy="85" r="4" fill="#f5f5f7" />
</svg>`,
    maps: `
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="vision-bg" x1="0" y1="0" x2="0" y2="200" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.9" />
      <stop offset="100%" stop-color="#f5f5f7" stop-opacity="0.75" />
    </linearGradient>
    <filter id="vision-shadow" x="-10%" y="-10%" width="120%" height="130%">
      <feDropShadow dx="0" dy="15" stdDeviation="10" flood-opacity="0.12" flood-color="#000000" />
    </filter>
  </defs>

  <rect x="10" y="10" width="180" height="180" rx="45" fill="url(#vision-bg)" filter="url(#vision-shadow)" />
  <rect x="10" y="10" width="180" height="180" rx="45" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-opacity="0.8" />

  <path d="M 60 40 L 100 50 L 140 40 L 140 160 L 100 150 L 60 160 Z" fill="#e5e5ea" />
  <path d="M 100 50 L 140 40 L 140 160 L 100 150 Z" fill="#d1d1d6" />
  <path d="M 100 135 C 100 135 60 95 60 70 C 60 45 100 45 100 70 C 100 45 140 45 140 70 C 140 95 100 135 100 135 Z" fill="#FF3B30" />
  <circle cx="100" cy="70" r="10" fill="#ffffff" />
</svg>`
};

const VisionDayPlaceholder = ({ id }) => (
    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="vision-bg" x1="0" y1="0" x2="0" y2="200" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stop-color="#ffffff" stop-opacity="0.9" />
                <stop offset="100%" stop-color="#f5f5f7" stop-opacity="0.75" />
            </linearGradient>
            <filter id="vision-shadow" x="-10%" y="-10%" width="120%" height="130%">
                <feDropShadow dx="0" dy="15" stdDeviation="10" flood-opacity="0.12" flood-color="#000000" />
            </filter>
        </defs>

        <rect x="10" y="10" width="180" height="180" rx="90" fill="url(#vision-bg)" filter="url(#vision-shadow)" />
        <rect x="10" y="10" width="180" height="180" rx="90" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-opacity="0.8" />

        <text x="100" y="108" fill="#1c1c1e" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="28" text-anchor="middle" font-weight="600" letter-spacing="1">{id.substring(0, 3).toUpperCase()}</text>
    </svg>
);

export const VisionDayEngine = {
    getRawSVG: (appId) => {
        if (VISIONDAY_SVG_DICTIONARY[appId]) {
            return VISIONDAY_SVG_DICTIONARY[appId];
        }
        return `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="vision-bg" x1="0" y1="0" x2="0" y2="200" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stop-color="#ffffff" stop-opacity="0.9" />
                    <stop offset="100%" stop-color="#f5f5f7" stop-opacity="0.75" />
                </linearGradient>
                <filter id="vision-shadow" x="-10%" y="-10%" width="120%" height="130%">
                    <feDropShadow dx="0" dy="15" stdDeviation="10" flood-opacity="0.12" flood-color="#000000" />
                </filter>
            </defs>

            <rect x="10" y="10" width="180" height="180" rx="90" fill="url(#vision-bg)" filter="url(#vision-shadow)" />
            <rect x="10" y="10" width="180" height="180" rx="90" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-opacity="0.8" />
            
            <text x="100" y="108" fill="#1c1c1e" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="28" text-anchor="middle" font-weight="600" letter-spacing="1">${appId.substring(0, 3).toUpperCase()}</text>
        </svg>`;
    }
};

export default function VisionDayEngineComponent({ icon }) {
    if (VISIONDAY_SVG_DICTIONARY[icon]) {
        return <div dangerouslySetInnerHTML={{ __html: VISIONDAY_SVG_DICTIONARY[icon] }} className="w-full h-full" />;
    }
    return <VisionDayPlaceholder id={icon} />;
}
