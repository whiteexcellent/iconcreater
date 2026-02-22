import React from 'react';

// Carbon Tactical engine provides military/diagnostic HUD aesthetics
// Uses dark olive/blacks, dashed borders, technical crosshairs, and monospaced text diagnostics
export const CARBON_SVG_DICTIONARY = {
    phone: `
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Tactical Dark Plating -->
  <rect x="5" y="5" width="190" height="190" fill="#0A0E0B" />
  <rect x="10" y="10" width="180" height="180" fill="none" stroke="#4ade80" stroke-width="1.5" stroke-dasharray="8 4" opacity="0.4" />
  
  <!-- Diagnostic Crosshairs -->
  <path d="M 5 20 L 20 5 M 195 20 L 180 5 M 5 180 L 20 195 M 195 180 L 180 195" stroke="#f97316" stroke-width="2" opacity="0.8" />
  
  <!-- System Texts -->
  <text x="15" y="25" fill="#4ade80" font-family="monospace" font-size="8" opacity="0.5">SYS: COM-LINK</text>
  <text x="145" y="25" fill="#f97316" font-family="monospace" font-size="8" opacity="0.7">REC: ACTIVE</text>
  
  <!-- Phone Receiver Vector -->
  <path d="M 65 65 C 50 80 50 120 65 135 C 80 150 120 150 135 135 C 145 125 145 110 135 100 L 120 115 C 115 120 105 120 100 115 C 90 105 90 95 95 90 C 100 85 100 75 95 70 L 80 55 C 70 45 55 45 45 55 Z" fill="none" stroke="#4ade80" stroke-width="6" stroke-linecap="square" />
  
  <!-- Data rings -->
  <circle cx="100" cy="100" r="55" fill="none" stroke="#4ade80" stroke-width="1" stroke-dasharray="2 6" opacity="0.3" />
  <circle cx="100" cy="100" r="50" fill="none" stroke="#4ade80" stroke-width="0.5" opacity="0.2" />
</svg>`,
    messages: `
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="5" y="5" width="190" height="190" fill="#0A0E0B" />
  <rect x="10" y="10" width="180" height="180" fill="none" stroke="#4ade80" stroke-width="1.5" stroke-dasharray="8 4" opacity="0.4" />
  
  <path d="M 5 20 L 20 5 M 195 20 L 180 5 M 5 180 L 20 195 M 195 180 L 180 195" stroke="#f97316" stroke-width="2" opacity="0.8" />
  <text x="15" y="25" fill="#4ade80" font-family="monospace" font-size="8" opacity="0.5">SYS: TXT-NET</text>
  
  <!-- Chat Bubble Vectors -->
  <path d="M 50 60 L 150 60 L 150 120 L 100 120 L 70 150 L 70 120 L 50 120 Z" fill="none" stroke="#4ade80" stroke-width="5" stroke-linejoin="miter" />
  <path d="M 70 80 L 130 80 M 70 100 L 110 100" stroke="#f97316" stroke-width="4" stroke-linecap="square" />
</svg>`,
    contacts: `
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="5" y="5" width="190" height="190" fill="#0A0E0B" />
  <rect x="10" y="10" width="180" height="180" fill="none" stroke="#4ade80" stroke-width="1.5" stroke-dasharray="8 4" opacity="0.4" />
  
  <path d="M 5 20 L 20 5 M 195 20 L 180 5 M 5 180 L 20 195 M 195 180 L 180 195" stroke="#f97316" stroke-width="2" opacity="0.8" />
  <text x="15" y="25" fill="#4ade80" font-family="monospace" font-size="8" opacity="0.5">SYS: IDENTITY</text>
  
  <!-- Profile Vector -->
  <circle cx="100" cy="80" r="25" fill="none" stroke="#4ade80" stroke-width="5" />
  <path d="M 50 160 L 50 140 C 50 120 70 115 100 115 C 130 115 150 120 150 140 L 150 160" fill="none" stroke="#4ade80" stroke-width="5" stroke-linejoin="miter" />
  
  <!-- Target Lock Info -->
  <line x1="100" y1="40" x2="100" y2="45" stroke="#f97316" stroke-width="2" />
  <line x1="160" y1="80" x2="155" y2="80" stroke="#f97316" stroke-width="2" />
</svg>`,
    camera: `
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="5" y="5" width="190" height="190" fill="#0A0E0B" />
  <rect x="10" y="10" width="180" height="180" fill="none" stroke="#4ade80" stroke-width="1.5" stroke-dasharray="8 4" opacity="0.4" />
  
  <path d="M 5 20 L 20 5 M 195 20 L 180 5 M 5 180 L 20 195 M 195 180 L 180 195" stroke="#f97316" stroke-width="2" opacity="0.8" />
  <text x="15" y="25" fill="#4ade80" font-family="monospace" font-size="8" opacity="0.5">SYS: OPTICS</text>
  <text x="145" y="185" fill="#f97316" font-family="monospace" font-size="8" opacity="0.7">REC: 00:00:00</text>
  
  <!-- Camera Tech Vector -->
  <rect x="40" y="60" width="120" height="80" stroke="#4ade80" stroke-width="5" fill="none" />
  <path d="M 70 60 L 80 45 L 120 45 L 130 60" fill="none" stroke="#4ade80" stroke-width="5" stroke-linejoin="miter" />
  <circle cx="100" cy="100" r="20" stroke="#4ade80" stroke-width="5" fill="none" />
  
  <!-- Lens flares / HUD tracking brackets -->
  <path d="M 80 80 L 70 80 L 70 90 M 120 80 L 130 80 L 130 90 M 80 120 L 70 120 L 70 110 M 120 120 L 130 120 L 130 110" stroke="#f97316" stroke-width="2" fill="none" />
</svg>`,
    maps: `
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="5" y="5" width="190" height="190" fill="#0A0E0B" />
  <rect x="10" y="10" width="180" height="180" fill="none" stroke="#4ade80" stroke-width="1.5" stroke-dasharray="8 4" opacity="0.4" />
  
  <path d="M 5 20 L 20 5 M 195 20 L 180 5 M 5 180 L 20 195 M 195 180 L 180 195" stroke="#f97316" stroke-width="2" opacity="0.8" />
  <text x="15" y="25" fill="#4ade80" font-family="monospace" font-size="8" opacity="0.5">SYS: RADAR-NAV</text>
  
  <!-- Map Grids / Topographic overlays -->
  <path d="M 50 150 L 80 130 L 120 160 L 150 120 L 150 50 L 120 90 L 80 60 L 50 80 Z" stroke="#4ade80" stroke-width="5" fill="none" stroke-linejoin="miter" />
  <path d="M 80 130 L 80 60 M 120 160 L 120 90" stroke="#4ade80" stroke-width="3" stroke-dasharray="5 5" opacity="0.6" />
  
  <!-- Objective Marker -->
  <circle cx="120" cy="90" r="6" fill="#f97316" />
  <circle cx="120" cy="90" r="14" fill="none" stroke="#f97316" stroke-width="1.5" stroke-dasharray="4 2" />
</svg>`
};

const CarbonTacticalPlaceholder = ({ id }) => (
    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="5" width="190" height="190" fill="#0A0E0B" />
        <rect x="10" y="10" width="180" height="180" fill="none" stroke="#4ade80" stroke-width="1.5" stroke-dasharray="8 4" opacity="0.4" />

        <path d="M 5 20 L 20 5 M 195 20 L 180 5 M 5 180 L 20 195 M 195 180 L 180 195" stroke="#f97316" stroke-width="2" opacity="0.8" />
        <text x="15" y="25" fill="#4ade80" font-family="monospace" font-size="8" opacity="0.5">SYS: UNKNOWN</text>

        <circle cx="100" cy="100" r="40" stroke="#4ade80" stroke-width="4" stroke-dasharray="10 5" fill="none" />
        <rect x="80" y="80" width="40" height="40" stroke="#f97316" stroke-width="2" fill="none" transform="rotate(45 100 100)" />
        <text x="100" y="104" fill="#4ade80" font-family="monospace" font-size="12" text-anchor="middle" font-weight="bold">{id.substring(0, 3).toUpperCase()}</text>
    </svg>
);

export const CarbonTacticalEngine = {
    getRawSVG: (appId) => {
        if (CARBON_SVG_DICTIONARY[appId]) {
            return CARBON_SVG_DICTIONARY[appId];
        }
        // Fallback to placeholder string compilation since this bypasses React rendering natively
        return `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="5" width="190" height="190" fill="#0A0E0B" />
            <rect x="10" y="10" width="180" height="180" fill="none" stroke="#4ade80" stroke-width="1.5" stroke-dasharray="8 4" opacity="0.4" />
            
            <path d="M 5 20 L 20 5 M 195 20 L 180 5 M 5 180 L 20 195 M 195 180 L 180 195" stroke="#f97316" stroke-width="2" opacity="0.8" />
            <text x="15" y="25" fill="#4ade80" font-family="monospace" font-size="8" opacity="0.5">SYS: UNKNOWN</text>
            
            <circle cx="100" cy="100" r="40" stroke="#4ade80" stroke-width="4" stroke-dasharray="10 5" fill="none" />
            <rect x="80" y="80" width="40" height="40" stroke="#f97316" stroke-width="2" fill="none" transform="rotate(45 100 100)" />
            <text x="100" y="104" fill="#4ade80" font-family="monospace" font-size="12" text-anchor="middle" font-weight="bold">${appId.substring(0, 3).toUpperCase()}</text>
        </svg>`;
    }
};

export default function CarbonTacticalEngineComponent({ icon }) {
    if (CARBON_SVG_DICTIONARY[icon]) {
        return <div dangerouslySetInnerHTML={{ __html: CARBON_SVG_DICTIONARY[icon] }} className="w-full h-full" />;
    }
    return <CarbonTacticalPlaceholder id={icon} />;
}
