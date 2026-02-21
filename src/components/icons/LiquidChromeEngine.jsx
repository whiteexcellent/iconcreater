import React from 'react';

// Liquid Chrome Reality Theme
// Molten reflective liquid metal UI. Extreme depth and luxury.

// Helper to generate the heavy SVG definitions string uniquely per app
const generateChromeDefs = (id) => `
  <defs>
    <linearGradient id="chrome-grad-${id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="15%" stop-color="#E0E0E0"/>
      <stop offset="35%" stop-color="#8A8A8A"/>
      <stop offset="42%" stop-color="#222222"/>
      <stop offset="50%" stop-color="#D0D0D0"/>
      <stop offset="65%" stop-color="#F5F5F5"/>
      <stop offset="85%" stop-color="#7A7A7A"/>
      <stop offset="100%" stop-color="#FFFFFF"/>
    </linearGradient>
    <filter id="liquid-${id}" x="-20%" y="-20%" width="140%" height="140%">
      <feTurbulence type="fractalNoise" baseFrequency="0.008 0.01" numOctaves="3" result="noise" />
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" xChannelSelector="R" yChannelSelector="G" />
      <feDropShadow dx="0" dy="12" stdDeviation="15" flood-color="#000" flood-opacity="0.9"/>
    </filter>
  </defs>
  <rect width="200" height="200" rx="48" fill="#111111" />
  <rect x="15" y="15" width="170" height="170" rx="35" fill="url(#chrome-grad-${id})" filter="url(#liquid-${id})" />
  <rect x="15" y="15" width="170" height="170" rx="35" fill="none" stroke="#FFFFFF" stroke-width="4" opacity="0.6" />
  <rect x="15" y="15" width="170" height="170" rx="35" fill="none" stroke="#00E5FF" stroke-width="4" opacity="0.4" />
  <path d="M 15 80 Q 100 120 185 80 L 185 50 Q 185 15 150 15 L 50 15 Q 15 15 15 50 Z" fill="#ffffff" opacity="0.15" style="mix-blend-mode: overlay;" />
`;

export const LIQUID_CHROME_SVG_DICTIONARY = {
  contacts: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  ${generateChromeDefs('contacts')}
  <circle cx="100" cy="75" r="25" fill="#111" stroke="#00E5FF" stroke-width="4" />
  <path d="M50 160 C50 120 75 110 100 110 C125 110 150 120 150 160" fill="#111" stroke="#00E5FF" stroke-width="4" />
</svg>`,

  bank: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  ${generateChromeDefs('bank')}
  <path d="M100 45 L45 80 H155 Z" fill="#111" stroke="#00E5FF" stroke-width="4" stroke-linejoin="round" />
  <rect x="60" y="90" width="12" height="50" fill="#111" stroke="#00E5FF" stroke-width="4" />
  <rect x="94" y="90" width="12" height="50" fill="#111" stroke="#00E5FF" stroke-width="4" />
  <rect x="128" y="90" width="12" height="50" fill="#111" stroke="#00E5FF" stroke-width="4" />
  <rect x="45" y="150" width="110" height="10" fill="#111" stroke="#00E5FF" stroke-width="4" />
</svg>`,

  maps: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  ${generateChromeDefs('maps')}
  <path d="M50 150 L100 120 L150 150 V60 L100 30 L50 60 Z" fill="#111" stroke="#00E5FF" stroke-width="4" stroke-linejoin="round" />
  <path d="M100 30 V120 M50 60 L100 90 L150 60" stroke="#00E5FF" stroke-width="4" />
  <circle cx="100" cy="80" r="10" fill="#7C4DFF" stroke="#00E5FF" stroke-width="4" />
</svg>`,

  ads: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  ${generateChromeDefs('ads')}
  <rect x="50" y="80" width="100" height="70" rx="8" fill="#111" stroke="#00E5FF" stroke-width="4" />
  <path d="M70 80 L100 40 L130 80" fill="#111" stroke="#00E5FF" stroke-width="4" stroke-linejoin="round" />
  <circle cx="100" cy="40" r="6" fill="#7C4DFF" stroke="#00E5FF" stroke-width="4" />
  <rect x="70" y="105" width="60" height="4" fill="#00E5FF" rx="2" />
  <rect x="70" y="125" width="40" height="4" fill="#00E5FF" rx="2" opacity="0.5" />
</svg>`,

  gallery: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  ${generateChromeDefs('gallery')}
  <rect x="40" y="50" width="120" height="100" rx="12" fill="#111" stroke="#00E5FF" stroke-width="4" />
  <circle cx="70" cy="80" r="12" fill="#7C4DFF" />
  <path d="M40 150 L80 100 L110 130 L130 110 L160 140" fill="none" stroke="#00E5FF" stroke-width="4" stroke-linejoin="round" />
</svg>`,

  store: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  ${generateChromeDefs('store')}
  <path d="M40 50 L100 150 L160 50 Z" fill="#111" stroke="#00E5FF" stroke-width="6" stroke-linejoin="round" />
  <path d="M70 50 L100 100 L130 50" fill="none" stroke="#7C4DFF" stroke-width="4" stroke-linejoin="round" />
  <circle cx="100" cy="50" r="8" fill="#111" />
</svg>`,

  settings: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  ${generateChromeDefs('settings')}
  <circle cx="100" cy="100" r="45" fill="#111" stroke="#00E5FF" stroke-width="4" stroke-dasharray="15 10" />
  <circle cx="100" cy="100" r="25" fill="#111" stroke="#00E5FF" stroke-width="4" />
  <circle cx="100" cy="100" r="10" fill="#7C4DFF" />
</svg>`,

  emergency: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  ${generateChromeDefs('emergency')}
  <rect x="80" y="40" width="40" height="120" rx="10" fill="#111" stroke="#7C4DFF" stroke-width="4" />
  <rect x="40" y="80" width="120" height="40" rx="10" fill="#111" stroke="#7C4DFF" stroke-width="4" />
  <rect x="84" y="84" width="32" height="32" fill="#111" />
</svg>`,

  calculator: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  ${generateChromeDefs('calc')}
  <rect x="45" y="35" width="110" height="35" rx="8" fill="#111" stroke="#00E5FF" stroke-width="4" />
  <circle cx="65" cy="100" r="12" fill="#111" stroke="#00E5FF" stroke-width="4" />
  <circle cx="100" cy="100" r="12" fill="#111" stroke="#00E5FF" stroke-width="4" />
  <circle cx="135" cy="100" r="12" fill="#111" stroke="#00E5FF" stroke-width="4" />
  <circle cx="65" cy="135" r="12" fill="#111" stroke="#00E5FF" stroke-width="4" />
  <circle cx="100" cy="135" r="12" fill="#111" stroke="#00E5FF" stroke-width="4" />
  <circle cx="135" cy="135" r="12" fill="#7C4DFF" stroke="#00E5FF" stroke-width="4" />
</svg>`,

  home: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  ${generateChromeDefs('home')}
  <path d="M35 100 L100 40 L165 100" fill="none" stroke="#00E5FF" stroke-width="8" stroke-linejoin="round" />
  <path d="M50 90 V160 H90 V120 H110 V160 H150 V90" fill="#111" stroke="#00E5FF" stroke-width="4" stroke-linejoin="round" />
</svg>`,

  notes: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  ${generateChromeDefs('notes')}
  <rect x="45" y="40" width="110" height="130" rx="10" fill="#111" stroke="#00E5FF" stroke-width="4" />
  <path d="M65 80 H135 M65 110 H135 M65 140 H105" stroke="#7C4DFF" stroke-width="4" stroke-linecap="round" />
  <circle cx="70" cy="55" r="4" fill="#00E5FF" />
  <circle cx="100" cy="55" r="4" fill="#00E5FF" />
  <circle cx="130" cy="55" r="4" fill="#00E5FF" />
</svg>`,

  calendar: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  ${generateChromeDefs('calendar')}
  <rect x="45" y="55" width="110" height="100" rx="12" fill="#111" stroke="#00E5FF" stroke-width="4" />
  <path d="M45 90 H155" stroke="#00E5FF" stroke-width="4" />
  <path d="M65 35 V65 M135 35 V65" stroke="#7C4DFF" stroke-width="8" stroke-linecap="round" />
  <rect x="65" y="110" width="15" height="15" rx="4" fill="#7C4DFF" />
  <rect x="95" y="110" width="15" height="15" rx="4" fill="#111" stroke="#00E5FF" stroke-width="4" />
</svg>`,

  camera: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  ${generateChromeDefs('camera')}
  <path d="M35 80 H60 L75 50 H125 L140 80 H165 V150 H35 V80 Z" fill="#111" stroke="#00E5FF" stroke-width="4" stroke-linejoin="round" />
  <circle cx="100" cy="110" r="28" fill="#111" stroke="#7C4DFF" stroke-width="6" />
  <circle cx="100" cy="110" r="10" fill="#00E5FF" />
  <circle cx="145" cy="100" r="5" fill="#7C4DFF" />
</svg>`,

  weather: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  ${generateChromeDefs('weather')}
  <circle cx="80" cy="80" r="30" fill="#111" stroke="#7C4DFF" stroke-width="4" />
  <path d="M45 130 C35 130 35 100 55 100 C60 80 120 70 135 95 C155 95 155 130 135 130 Z" fill="#111" stroke="#00E5FF" stroke-width="4" stroke-linejoin="round" />
</svg>`,

  music: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  ${generateChromeDefs('music')}
  <path d="M85 130 C70 130 60 140 60 155 C60 170 70 180 85 180 C100 180 110 170 110 155 V80 L140 70 V120 C125 120 115 130 115 145 C115 160 125 170 140 170 C155 170 165 160 165 145 V40 L85 65 V130 Z" fill="#111" stroke="#00E5FF" stroke-width="4" stroke-linejoin="round" />
  <circle cx="85" cy="155" r="8" fill="#7C4DFF" />
  <circle cx="140" cy="145" r="8" fill="#7C4DFF" />
</svg>`,

  messages: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  ${generateChromeDefs('messages')}
  <path d="M35 100 C35 60 65 30 100 30 C135 30 165 60 165 100 C165 140 135 170 100 170 C85 170 65 180 40 185 C45 165 40 155 35 145 C32 135 35 120 35 100Z" fill="#111" stroke="#00E5FF" stroke-width="4" stroke-linejoin="round" />
  <circle cx="70" cy="100" r="8" fill="#7C4DFF" />
  <circle cx="100" cy="100" r="8" fill="#7C4DFF" />
  <circle cx="130" cy="100" r="8" fill="#7C4DFF" />
</svg>`,

  twitter: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  ${generateChromeDefs('twitter')}
  <path d="M140 50 L100 105 V150" stroke="#00E5FF" stroke-width="12" stroke-linecap="round" opacity="0.5" />
  <path d="M60 50 L140 150" stroke="#00E5FF" stroke-width="12" stroke-linecap="round" />
</svg>`,

  instagram: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  ${generateChromeDefs('instagram')}
  <rect x="45" y="45" width="110" height="110" rx="28" fill="#111" stroke="#00E5FF" stroke-width="5" />
  <circle cx="100" cy="100" r="22" fill="#111" stroke="#00E5FF" stroke-width="5" />
  <circle cx="132" cy="68" r="6" fill="#7C4DFF" />
</svg>`,

  whatsapp: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  ${generateChromeDefs('whatsapp')}
  <path d="M40 100 C40 65 65 40 100 40 C135 40 160 65 160 100 C160 135 135 160 100 160 C80 160 60 150 50 140 L35 165 L40 135 C38 125 40 115 40 100Z" fill="#111" stroke="#00E5FF" stroke-width="5" stroke-linejoin="round"/>
  <path d="M75 80 Q90 90 95 105 Q110 95 125 105 Q120 120 100 125 Q75 110 75 80 Z" fill="#7C4DFF" />
</svg>`,

  discord: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  ${generateChromeDefs('discord')}
  <path d="M140 60 C140 60 120 50 100 50 C80 50 60 60 60 60 C50 80 40 110 40 130 C50 150 70 150 70 150 L80 135 C65 130 65 130 65 130 C90 145 110 145 135 130 C135 130 135 130 120 135 L130 150 C130 150 150 150 160 130 C160 110 150 80 140 60Z" fill="#111" stroke="#00E5FF" stroke-width="4" stroke-linejoin="round" />
  <circle cx="85" cy="100" r="10" fill="#7C4DFF" />
  <circle cx="115" cy="100" r="10" fill="#7C4DFF" />
</svg>`,

  youtube: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  ${generateChromeDefs('youtube')}
  <rect x="35" y="60" width="130" height="80" rx="18" fill="#111" stroke="#00E5FF" stroke-width="5" />
  <path d="M85 80 V120 L125 100 Z" fill="#7C4DFF" stroke="#00E5FF" stroke-width="4" stroke-linejoin="round" />
</svg>`,

  tiktok: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  ${generateChromeDefs('tiktok')}
  <path d="M110 40V120C110 140 90 150 75 145C60 135 60 115 70 105C80 95 90 100 90 100 V70C80 70 60 75 50 90 M110 70C120 80 135 80 140 80V50C125 50 115 45 110 40Z" fill="none" stroke="#7C4DFF" stroke-width="12" stroke-linejoin="round" transform="translate(3,3)" />
  <path d="M110 40V120C110 140 90 150 75 145C60 135 60 115 70 105C80 95 90 100 90 100 V70C80 70 60 75 50 90 M110 70C120 80 135 80 140 80V50C125 50 115 45 110 40Z" fill="none" stroke="#00E5FF" stroke-width="8" stroke-linejoin="round" />
</svg>`,

  tinder: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  ${generateChromeDefs('tinder')}
  <path d="M100 45 C80 80 40 100 50 140 C60 175 110 175 140 150 C165 130 150 80 135 70 C135 70 150 95 125 120 C105 140 80 130 85 110 C90 90 100 45 100 45Z" fill="#111" stroke="#00E5FF" stroke-width="4" stroke-linejoin="round" />
</svg>`,

  uber: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  ${generateChromeDefs('uber')}
  <circle cx="100" cy="100" r="45" fill="#111" stroke="#00E5FF" stroke-width="5" />
  <rect x="115" y="85" width="40" height="30" fill="#7C4DFF" stroke="#00E5FF" stroke-width="4" />
</svg>`,

  phone: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  ${generateChromeDefs('phone')}
  <path d="M125 60 C135 70 145 80 145 90 C145 105 130 115 110 135 C90 155 80 170 65 170 C55 170 45 160 35 150 C25 140 25 130 35 120 L50 105 C60 95 70 95 80 105 L85 110 C95 105 105 95 110 85 L105 80 C95 70 95 60 105 50 L120 35 C130 25 140 25 150 35 Z" fill="#111" stroke="#00E5FF" stroke-width="4" stroke-linejoin="round" transform="translate(15, -10)" />
</svg>`,

  mail: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  ${generateChromeDefs('mail')}
  <rect x="35" y="60" width="130" height="80" rx="8" fill="#111" stroke="#00E5FF" stroke-width="4" />
  <path d="M35 60 L100 110 L165 60" fill="none" stroke="#7C4DFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
</svg>`,

  garage: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  ${generateChromeDefs('garage')}
  <path d="M35 100 L100 50 L165 100 V160 H35 Z" fill="#111" stroke="#00E5FF" stroke-width="4" stroke-linejoin="round" />
  <rect x="65" y="110" width="70" height="50" fill="#7C4DFF" stroke="#00E5FF" stroke-width="4" />
  <path d="M65 125 H135 M65 140 H135" stroke="#00E5FF" stroke-width="4" />
</svg>`,

  darkchat: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  ${generateChromeDefs('darkchat')}
  <path d="M40 100 C40 65 65 40 100 40 C135 40 160 65 160 100 C160 135 135 160 100 160 C85 160 65 170 45 175 C50 160 45 150 42 140 C40 130 40 115 40 100Z" fill="#111" stroke="#7C4DFF" stroke-width="4" stroke-linejoin="round" />
  <circle cx="70" cy="100" r="6" fill="#00E5FF" />
  <circle cx="100" cy="100" r="6" fill="#00E5FF" />
  <circle cx="130" cy="100" r="6" fill="#00E5FF" />
</svg>`
};

const PLACEHOLDER = `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="#111" /></svg>`;

export function LiquidChromeEngine({ icon }) {
  const svgString = LIQUID_CHROME_SVG_DICTIONARY[icon] || PLACEHOLDER;
  return (
    <div
      className="w-full h-full relative"
      dangerouslySetInnerHTML={{ __html: svgString }}
    />
  );
}

LiquidChromeEngine.getRawSVG = (icon) => {
  return LIQUID_CHROME_SVG_DICTIONARY[icon] || PLACEHOLDER;
};
