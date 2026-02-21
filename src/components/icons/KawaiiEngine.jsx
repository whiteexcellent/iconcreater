// src/components/icons/KawaiiEngine.jsx
import React from 'react';

// Generates the raw SVG string so users can copy it directly to their FiveM UI
export const KAWAI_SVG_DICTIONARY = {
    contacts: `
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Soft, squishy rounded background -->
  <rect width="200" height="200" rx="60" fill="url(#kawaii-bg-contacts)" />
  <!-- Cute bear/person shape -->
  <circle cx="100" cy="85" r="35" fill="white" opacity="0.9" />
  <!-- Ears -->
  <circle cx="70" cy="65" r="15" fill="white" opacity="0.9" />
  <circle cx="130" cy="65" r="15" fill="white" opacity="0.9" />
  <!-- Body -->
  <path d="M40 180C40 150 65 130 100 130C135 130 160 150 160 180" fill="white" opacity="0.9" />
  <!-- Cute blush -->
  <circle cx="80" cy="95" r="8" fill="#FFB6C1" opacity="0.6" />
  <circle cx="120" cy="95" r="8" fill="#FFB6C1" opacity="0.6" />
  <defs>
    <linearGradient id="kawaii-bg-contacts" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFB6C1" />
      <stop offset="1" stop-color="#FFDAB9" />
    </linearGradient>
  </defs>

  <!-- Jelly Aesthetics & Sparkles -->
  <path d="M 40 40 Q 100 20 160 40 Q 180 80 180 100 Q 100 60 20 100 Q 20 80 40 40 Z" fill="#ffffff" opacity="0.3" style="mix-blend-mode: overlay;" />
  <circle cx="30" cy="30" r="4" fill="#fff" opacity="0.6"/>
  <circle cx="160" cy="150" r="3" fill="#fff" opacity="0.5"/>
  <circle cx="150" cy="40" r="5" fill="#fff" opacity="0.4"/>
</svg>`,

    bank: `
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" rx="60" fill="url(#kawaii-bg-bank)" />
  <!-- Cute piggy bank / coin -->
  <circle cx="100" cy="100" r="50" fill="#FFD700" stroke="#FFF" stroke-width="8" />
  <path d="M100 70V130" stroke="white" stroke-width="12" stroke-linecap="round" />
  <!-- Sparkles -->
  <circle cx="150" cy="50" r="10" fill="white" opacity="0.8" />
  <circle cx="45" cy="150" r="15" fill="white" opacity="0.5" />
  <defs>
    <linearGradient id="kawaii-bg-bank" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
      <stop stop-color="#98FB98" />
      <stop offset="1" stop-color="#3CB371" />
    </linearGradient>
  </defs>

  <!-- Jelly Aesthetics & Sparkles -->
  <path d="M 40 40 Q 100 20 160 40 Q 180 80 180 100 Q 100 60 20 100 Q 20 80 40 40 Z" fill="#ffffff" opacity="0.3" style="mix-blend-mode: overlay;" />
  <circle cx="30" cy="30" r="4" fill="#fff" opacity="0.6"/>
  <circle cx="160" cy="150" r="3" fill="#fff" opacity="0.5"/>
  <circle cx="150" cy="40" r="5" fill="#fff" opacity="0.4"/>
</svg>`,

    maps: `
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" rx="60" fill="url(#kawaii-bg-maps)" />
  <!-- Cute folded map -->
  <path d="M40 50 L90 70 L140 50 L180 70 V170 L140 150 L90 170 L40 150 V50Z" fill="white" opacity="0.8" />
  <path d="M90 70 V170 M140 50 V150" stroke="#FFB6C1" stroke-width="6" stroke-linecap="round" />
  <!-- Location Pin -->
  <path d="M115 100C115 120 90 140 90 140C90 140 65 120 65 100C65 85 75 75 90 75C105 75 115 85 115 100Z" fill="#FF69B4" />
  <circle cx="90" cy="95" r="8" fill="white" />
  <defs>
    <linearGradient id="kawaii-bg-maps" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
      <stop stop-color="#E0FFFF" />
      <stop offset="1" stop-color="#87CEFA" />
    </linearGradient>
  </defs>

  <!-- Jelly Aesthetics & Sparkles -->
  <path d="M 40 40 Q 100 20 160 40 Q 180 80 180 100 Q 100 60 20 100 Q 20 80 40 40 Z" fill="#ffffff" opacity="0.3" style="mix-blend-mode: overlay;" />
  <circle cx="30" cy="30" r="4" fill="#fff" opacity="0.6"/>
  <circle cx="160" cy="150" r="3" fill="#fff" opacity="0.5"/>
  <circle cx="150" cy="40" r="5" fill="#fff" opacity="0.4"/>
</svg>`,

    ads: `
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" rx="60" fill="url(#kawaii-bg-ads)" />
  <!-- Megaphone/Loudspeaker -->
  <path d="M140 120L160 140L170 120L140 100V120Z" fill="white" opacity="0.6"/>
  <path d="M60 80C60 68.9543 68.9543 60 80 60H120L150 40V160L120 140H80C68.9543 140 60 131.046 60 120V80Z" fill="white" opacity="0.9"/>
  <!-- Sound waves -->
  <path d="M165 75C175 85 175 115 165 125" stroke="white" stroke-width="8" stroke-linecap="round"/>
  <path d="M185 55C200 75 200 125 185 145" stroke="white" stroke-width="8" stroke-linecap="round" opacity="0.5"/>
  <defs>
    <linearGradient id="kawaii-bg-ads" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFDABD" />
      <stop offset="1" stop-color="#FFA07A" />
    </linearGradient>
  </defs>

  <!-- Jelly Aesthetics & Sparkles -->
  <path d="M 40 40 Q 100 20 160 40 Q 180 80 180 100 Q 100 60 20 100 Q 20 80 40 40 Z" fill="#ffffff" opacity="0.3" style="mix-blend-mode: overlay;" />
  <circle cx="30" cy="30" r="4" fill="#fff" opacity="0.6"/>
  <circle cx="160" cy="150" r="3" fill="#fff" opacity="0.5"/>
  <circle cx="150" cy="40" r="5" fill="#fff" opacity="0.4"/>
</svg>`,

    gallery: `
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" rx="60" fill="url(#kawaii-bg-gallery)" />
  <!-- Polaroids/Photos -->
  <rect x="50" y="50" width="100" height="100" rx="10" transform="rotate(-10 100 100)" fill="white" opacity="0.7" />
  <rect x="50" y="50" width="100" height="100" rx="10" transform="rotate(5 100 100)" fill="white" />
  <!-- Cute sun / flower inside -->
  <circle cx="95" cy="85" r="15" fill="#FFD700" />
  <path d="M65 150 L85 110 L110 130 L135 90 L155 150" fill="#FFB6C1" />
  <defs>
    <linearGradient id="kawaii-bg-gallery" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
      <stop stop-color="#E6E6FA" />
      <stop offset="1" stop-color="#DDA0DD" />
    </linearGradient>
  </defs>

  <!-- Jelly Aesthetics & Sparkles -->
  <path d="M 40 40 Q 100 20 160 40 Q 180 80 180 100 Q 100 60 20 100 Q 20 80 40 40 Z" fill="#ffffff" opacity="0.3" style="mix-blend-mode: overlay;" />
  <circle cx="30" cy="30" r="4" fill="#fff" opacity="0.6"/>
  <circle cx="160" cy="150" r="3" fill="#fff" opacity="0.5"/>
  <circle cx="150" cy="40" r="5" fill="#fff" opacity="0.4"/>
</svg>`,

    store: `
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" rx="60" fill="url(#kawaii-bg-store)" />
  <!-- Shopping bag -->
  <path d="M60 90 H140 V160 C140 165 135 170 130 170 H70 C65 170 60 165 60 160 V90Z" fill="white" opacity="0.9" />
  <!-- Handles -->
  <path d="M80 90 V70 C80 50 120 50 120 70 V90" stroke="white" stroke-width="12" stroke-linecap="round" fill="none" opacity="0.8" />
  <!-- Heart on bag -->
  <path d="M100 135 L90 125 C85 120 85 110 90 105 C95 100 105 100 100 110 C95 100 105 100 110 105 C115 110 115 120 110 125 L100 135Z" fill="#FF69B4" />
  <defs>
    <linearGradient id="kawaii-bg-store" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFF0F5" />
      <stop offset="1" stop-color="#FFB6C1" />
    </linearGradient>
  </defs>

  <!-- Jelly Aesthetics & Sparkles -->
  <path d="M 40 40 Q 100 20 160 40 Q 180 80 180 100 Q 100 60 20 100 Q 20 80 40 40 Z" fill="#ffffff" opacity="0.3" style="mix-blend-mode: overlay;" />
  <circle cx="30" cy="30" r="4" fill="#fff" opacity="0.6"/>
  <circle cx="160" cy="150" r="3" fill="#fff" opacity="0.5"/>
  <circle cx="150" cy="40" r="5" fill="#fff" opacity="0.4"/>
</svg>`,

    notes: `
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" rx="60" fill="url(#kawaii-bg-notes)" />
  <rect x="60" y="40" width="80" height="120" rx="10" fill="white" />
  <!-- Lines -->
  <rect x="75" y="70" width="50" height="6" rx="3" fill="#FFE4B5" />
  <rect x="75" y="100" width="50" height="6" rx="3" fill="#FFE4B5" />
  <rect x="75" y="130" width="30" height="6" rx="3" fill="#FFE4B5" />
  <!-- Top spiral / rings -->
  <circle cx="70" cy="40" r="5" fill="#FFA07A" />
  <circle cx="100" cy="40" r="5" fill="#FFA07A" />
  <circle cx="130" cy="40" r="5" fill="#FFA07A" />
  <defs>
    <linearGradient id="kawaii-bg-notes" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFFFE0" />
      <stop offset="1" stop-color="#FFDAB9" />
    </linearGradient>
  </defs>

  <!-- Jelly Aesthetics & Sparkles -->
  <path d="M 40 40 Q 100 20 160 40 Q 180 80 180 100 Q 100 60 20 100 Q 20 80 40 40 Z" fill="#ffffff" opacity="0.3" style="mix-blend-mode: overlay;" />
  <circle cx="30" cy="30" r="4" fill="#fff" opacity="0.6"/>
  <circle cx="160" cy="150" r="3" fill="#fff" opacity="0.5"/>
  <circle cx="150" cy="40" r="5" fill="#fff" opacity="0.4"/>
</svg>`,

    calendar: `
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" rx="60" fill="url(#kawaii-bg-calendar)" />
  <rect x="50" y="70" width="100" height="90" rx="10" fill="white" />
  <path d="M50 80 C50 74 54 70 60 70 H140 C145 70 150 74 150 80 V100 H50 V80Z" fill="#FFB6C1" />
  <!-- Rings -->
  <rect x="70" y="55" width="12" height="30" rx="6" fill="#FFF" />
  <rect x="118" y="55" width="12" height="30" rx="6" fill="#FFF" />
  <!-- Date text placeholder -->
  <circle cx="100" cy="135" r="15" fill="#FFDAB9" />
  <defs>
    <linearGradient id="kawaii-bg-calendar" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFFAFA" />
      <stop offset="1" stop-color="#FFE4E1" />
    </linearGradient>
  </defs>

  <!-- Jelly Aesthetics & Sparkles -->
  <path d="M 40 40 Q 100 20 160 40 Q 180 80 180 100 Q 100 60 20 100 Q 20 80 40 40 Z" fill="#ffffff" opacity="0.3" style="mix-blend-mode: overlay;" />
  <circle cx="30" cy="30" r="4" fill="#fff" opacity="0.6"/>
  <circle cx="160" cy="150" r="3" fill="#fff" opacity="0.5"/>
  <circle cx="150" cy="40" r="5" fill="#fff" opacity="0.4"/>
</svg>`,

    emergency: `
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" rx="60" fill="url(#kawaii-bg-emergency)" />
  <circle cx="100" cy="100" r="60" fill="white" opacity="0.9" />
  <!-- Soft cross -->
  <path d="M90 60 H110 V90 H140 V110 H110 V140 H90 V110 H60 V90 H90 V60Z" fill="#FF6B6B" />
  <defs>
    <linearGradient id="kawaii-bg-emergency" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FF9999" />
      <stop offset="1" stop-color="#FF4D4D" />
    </linearGradient>
  </defs>

  <!-- Jelly Aesthetics & Sparkles -->
  <path d="M 40 40 Q 100 20 160 40 Q 180 80 180 100 Q 100 60 20 100 Q 20 80 40 40 Z" fill="#ffffff" opacity="0.3" style="mix-blend-mode: overlay;" />
  <circle cx="30" cy="30" r="4" fill="#fff" opacity="0.6"/>
  <circle cx="160" cy="150" r="3" fill="#fff" opacity="0.5"/>
  <circle cx="150" cy="40" r="5" fill="#fff" opacity="0.4"/>
</svg>`,

    calculator: `
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" rx="60" fill="url(#kawaii-bg-calculator)" />
  <rect x="60" y="40" width="80" height="120" rx="16" fill="white" opacity="0.9" />
  <!-- Screen -->
  <rect x="75" y="55" width="50" height="25" rx="5" fill="#E6E6FA" />
  <!-- Keys (soft circles) -->
  <circle cx="85" cy="100" r="8" fill="#FFB6C1" />
  <circle cx="115" cy="100" r="8" fill="#FFB6C1" />
  <circle cx="85" cy="125" r="8" fill="#FFDAB9" />
  <circle cx="115" cy="125" r="8" fill="#FFDAB9" />
  <circle cx="100" cy="145" r="8" fill="#87CEFA" />
  <defs>
    <linearGradient id="kawaii-bg-calculator" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
      <stop stop-color="#E0FFFF" />
      <stop offset="1" stop-color="#98FB98" />
    </linearGradient>
  </defs>

  <!-- Jelly Aesthetics & Sparkles -->
  <path d="M 40 40 Q 100 20 160 40 Q 180 80 180 100 Q 100 60 20 100 Q 20 80 40 40 Z" fill="#ffffff" opacity="0.3" style="mix-blend-mode: overlay;" />
  <circle cx="30" cy="30" r="4" fill="#fff" opacity="0.6"/>
  <circle cx="160" cy="150" r="3" fill="#fff" opacity="0.5"/>
  <circle cx="150" cy="40" r="5" fill="#fff" opacity="0.4"/>
</svg>`,

    settings: `
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" rx="60" fill="url(#kawaii-bg-settings)" />
  <!-- Soft Gear -->
  <path d="M100 45 C108 45 115 50 118 57 L124 59 C132 54 142 56 148 62 C154 68 156 78 151 86 L153 92 C160 95 165 102 165 110 C165 118 160 125 153 128 L151 134 C156 142 154 152 148 158 C142 164 132 166 124 161 L118 163 C115 170 108 175 100 175 C92 175 85 170 82 163 L76 161 C68 166 58 164 52 158 C46 152 44 142 49 134 L47 128 C40 125 35 118 35 110 C35 102 40 95 47 92 L49 86 C44 78 46 68 52 62 C58 56 68 54 76 59 L82 57 C85 50 92 45 100 45Z" fill="white" opacity="0.9" />
  <circle cx="100" cy="110" r="25" fill="url(#kawaii-bg-settings)" />
  <defs>
    <linearGradient id="kawaii-bg-settings" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
      <stop stop-color="#D3D3D3" />
      <stop offset="1" stop-color="#A9A9A9" />
    </linearGradient>
  </defs>

  <!-- Jelly Aesthetics & Sparkles -->
  <path d="M 40 40 Q 100 20 160 40 Q 180 80 180 100 Q 100 60 20 100 Q 20 80 40 40 Z" fill="#ffffff" opacity="0.3" style="mix-blend-mode: overlay;" />
  <circle cx="30" cy="30" r="4" fill="#fff" opacity="0.6"/>
  <circle cx="160" cy="150" r="3" fill="#fff" opacity="0.5"/>
  <circle cx="150" cy="40" r="5" fill="#fff" opacity="0.4"/>
</svg>`,

    home: `
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" rx="60" fill="url(#kawaii-bg-home)" />
  <!-- Base of house -->
  <rect x="65" y="100" width="70" height="60" fill="white" opacity="0.9" />
  <!-- Cute roof -->
  <path d="M40 100 L100 50 L160 100" stroke="white" stroke-width="20" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M100 50 L160 100" stroke="#FFB6C1" stroke-width="20" stroke-linecap="round" stroke-linejoin="round" opacity="0.3" />
  <!-- Door -->
  <path d="M85 160 V130 C85 120 115 120 115 130 V160" fill="#FFB6C1" opacity="0.6"/>
  <defs>
    <linearGradient id="kawaii-bg-home" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFFACD" />
      <stop offset="1" stop-color="#FFD700" />
    </linearGradient>
  </defs>

  <!-- Jelly Aesthetics & Sparkles -->
  <path d="M 40 40 Q 100 20 160 40 Q 180 80 180 100 Q 100 60 20 100 Q 20 80 40 40 Z" fill="#ffffff" opacity="0.3" style="mix-blend-mode: overlay;" />
  <circle cx="30" cy="30" r="4" fill="#fff" opacity="0.6"/>
  <circle cx="160" cy="150" r="3" fill="#fff" opacity="0.5"/>
  <circle cx="150" cy="40" r="5" fill="#fff" opacity="0.4"/>
</svg>`,

    camera: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" rx="60" fill="url(#kawaii-bg-camera)" /><rect x="40" y="70" width="120" height="80" rx="20" fill="white" opacity="0.9" /><path d="M70 70 V55 C70 45 130 45 130 55 V70" fill="white" opacity="0.7"/><circle cx="100" cy="110" r="25" fill="#FFE4B5" /><circle cx="105" cy="105" r="6" fill="white" /><circle cx="150" cy="85" r="6" fill="#FFA07A" /><defs><linearGradient id="kawaii-bg-camera" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse"><stop stop-color="#F5F5DC" /><stop offset="1" stop-color="#FFDAB9" /></linearGradient></defs>
  <!-- Jelly Aesthetics & Sparkles -->
  <path d="M 40 40 Q 100 20 160 40 Q 180 80 180 100 Q 100 60 20 100 Q 20 80 40 40 Z" fill="#ffffff" opacity="0.3" style="mix-blend-mode: overlay;" />
  <circle cx="30" cy="30" r="4" fill="#fff" opacity="0.6"/>
  <circle cx="160" cy="150" r="3" fill="#fff" opacity="0.5"/>
  <circle cx="150" cy="40" r="5" fill="#fff" opacity="0.4"/>
</svg>`,
    weather: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" rx="60" fill="url(#kawaii-bg-weather)" /><circle cx="80" cy="80" r="30" fill="#FFD700" /><path d="M60 130 C40 130 40 100 60 100 C65 80 115 70 130 95 C150 95 150 130 130 130 Z" fill="white" opacity="0.95" /><circle cx="100" cy="115" r="4" fill="#FFB6C1" /><circle cx="120" cy="115" r="4" fill="#FFB6C1" /><defs><linearGradient id="kawaii-bg-weather" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse"><stop stop-color="#87CEEB" /><stop offset="1" stop-color="#1E90FF" /></linearGradient></defs>
  <!-- Jelly Aesthetics & Sparkles -->
  <path d="M 40 40 Q 100 20 160 40 Q 180 80 180 100 Q 100 60 20 100 Q 20 80 40 40 Z" fill="#ffffff" opacity="0.3" style="mix-blend-mode: overlay;" />
  <circle cx="30" cy="30" r="4" fill="#fff" opacity="0.6"/>
  <circle cx="160" cy="150" r="3" fill="#fff" opacity="0.5"/>
  <circle cx="150" cy="40" r="5" fill="#fff" opacity="0.4"/>
</svg>`,
    music: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" rx="60" fill="url(#kawaii-bg-music)" /><circle cx="100" cy="100" r="60" fill="white" opacity="0.9" /><path d="M85 120 C75 120 70 125 70 135 C70 145 80 150 90 150 C100 150 105 140 105 130 V80 L140 70 V110 C130 110 125 115 125 125 C125 135 135 140 145 140 C155 140 160 130 160 120 V50 L85 65 V120 Z" fill="#FF69B4" /><defs><linearGradient id="kawaii-bg-music" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse"><stop stop-color="#FFB6C1" /><stop offset="1" stop-color="#FF1493" /></linearGradient></defs>
  <!-- Jelly Aesthetics & Sparkles -->
  <path d="M 40 40 Q 100 20 160 40 Q 180 80 180 100 Q 100 60 20 100 Q 20 80 40 40 Z" fill="#ffffff" opacity="0.3" style="mix-blend-mode: overlay;" />
  <circle cx="30" cy="30" r="4" fill="#fff" opacity="0.6"/>
  <circle cx="160" cy="150" r="3" fill="#fff" opacity="0.5"/>
  <circle cx="150" cy="40" r="5" fill="#fff" opacity="0.4"/>
</svg>`,
    messages: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" rx="60" fill="url(#kawaii-bg-messages)" /><path d="M40 100 C40 65 65 40 100 40 C135 40 160 65 160 100 C160 135 135 160 100 160 C85 160 65 170 50 170 C55 155 50 145 45 130 C40 120 40 110 40 100Z" fill="white" opacity="0.95" /><circle cx="75" cy="100" r="10" fill="#32CD32" /><circle cx="100" cy="100" r="10" fill="#32CD32" /><circle cx="125" cy="100" r="10" fill="#32CD32" /><defs><linearGradient id="kawaii-bg-messages" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse"><stop stop-color="#98FB98" /><stop offset="1" stop-color="#3CB371" /></linearGradient></defs>
  <!-- Jelly Aesthetics & Sparkles -->
  <path d="M 40 40 Q 100 20 160 40 Q 180 80 180 100 Q 100 60 20 100 Q 20 80 40 40 Z" fill="#ffffff" opacity="0.3" style="mix-blend-mode: overlay;" />
  <circle cx="30" cy="30" r="4" fill="#fff" opacity="0.6"/>
  <circle cx="160" cy="150" r="3" fill="#fff" opacity="0.5"/>
  <circle cx="150" cy="40" r="5" fill="#fff" opacity="0.4"/>
</svg>`,
    twitter: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" rx="60" fill="url(#kawaii-bg-twitter)" /><circle cx="100" cy="100" r="60" fill="white" opacity="0.9" /><path d="M125 80L80 130H70L115 80H125Z M75 80L130 130H140L85 80H75Z" fill="#1DA1F2" /><defs><linearGradient id="kawaii-bg-twitter" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse"><stop stop-color="#87CEFA" /><stop offset="1" stop-color="#00BFFF" /></linearGradient></defs>
  <!-- Jelly Aesthetics & Sparkles -->
  <path d="M 40 40 Q 100 20 160 40 Q 180 80 180 100 Q 100 60 20 100 Q 20 80 40 40 Z" fill="#ffffff" opacity="0.3" style="mix-blend-mode: overlay;" />
  <circle cx="30" cy="30" r="4" fill="#fff" opacity="0.6"/>
  <circle cx="160" cy="150" r="3" fill="#fff" opacity="0.5"/>
  <circle cx="150" cy="40" r="5" fill="#fff" opacity="0.4"/>
</svg>`,
    instagram: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" rx="60" fill="url(#kawaii-bg-instagram)" /><rect x="50" y="50" width="100" height="100" rx="30" fill="white" opacity="0.95" /><circle cx="100" cy="100" r="25" fill="none" stroke="#E1306C" stroke-width="10" /><circle cx="130" cy="70" r="6" fill="#E1306C" /><defs><linearGradient id="kawaii-bg-instagram" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse"><stop stop-color="#FCAF45" /><stop offset="0.5" stop-color="#F56040" /><stop offset="1" stop-color="#833AB4" /></linearGradient></defs>
  <!-- Jelly Aesthetics & Sparkles -->
  <path d="M 40 40 Q 100 20 160 40 Q 180 80 180 100 Q 100 60 20 100 Q 20 80 40 40 Z" fill="#ffffff" opacity="0.3" style="mix-blend-mode: overlay;" />
  <circle cx="30" cy="30" r="4" fill="#fff" opacity="0.6"/>
  <circle cx="160" cy="150" r="3" fill="#fff" opacity="0.5"/>
  <circle cx="150" cy="40" r="5" fill="#fff" opacity="0.4"/>
</svg>`,
    whatsapp: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" rx="60" fill="url(#kawaii-bg-whatsapp)" /><path d="M40 100 C40 65 65 40 100 40 C135 40 160 65 160 100 C160 135 135 160 100 160 C85 160 55 170 45 170 C50 155 45 145 42 135 C40 125 40 115 40 100Z" fill="white" opacity="0.95" /><path d="M80 80 C85 75 90 85 95 90 C100 95 110 90 115 85 C120 80 125 85 125 90 C125 100 115 120 100 120 C80 120 70 100 70 90 C70 85 75 80 80 80Z" fill="#128C7E" /><defs><linearGradient id="kawaii-bg-whatsapp" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse"><stop stop-color="#25D366" /><stop offset="1" stop-color="#128C7E" /></linearGradient></defs>
  <!-- Jelly Aesthetics & Sparkles -->
  <path d="M 40 40 Q 100 20 160 40 Q 180 80 180 100 Q 100 60 20 100 Q 20 80 40 40 Z" fill="#ffffff" opacity="0.3" style="mix-blend-mode: overlay;" />
  <circle cx="30" cy="30" r="4" fill="#fff" opacity="0.6"/>
  <circle cx="160" cy="150" r="3" fill="#fff" opacity="0.5"/>
  <circle cx="150" cy="40" r="5" fill="#fff" opacity="0.4"/>
</svg>`,
    discord: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" rx="60" fill="url(#kawaii-bg-discord)" /><path d="M140 60 C140 60 120 50 100 50 C80 50 60 60 60 60 C50 80 40 110 40 130 C50 150 70 150 70 150 L80 135 C65 130 65 130 65 130 C90 145 110 145 135 130 C135 130 135 130 120 135 L130 150 C130 150 150 150 160 130 C160 110 150 80 140 60Z" fill="white" opacity="0.95" /><circle cx="85" cy="100" r="10" fill="#5865F2" /><circle cx="115" cy="100" r="10" fill="#5865F2" /><defs><linearGradient id="kawaii-bg-discord" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse"><stop stop-color="#7289DA" /><stop offset="1" stop-color="#5865F2" /></linearGradient></defs>
  <!-- Jelly Aesthetics & Sparkles -->
  <path d="M 40 40 Q 100 20 160 40 Q 180 80 180 100 Q 100 60 20 100 Q 20 80 40 40 Z" fill="#ffffff" opacity="0.3" style="mix-blend-mode: overlay;" />
  <circle cx="30" cy="30" r="4" fill="#fff" opacity="0.6"/>
  <circle cx="160" cy="150" r="3" fill="#fff" opacity="0.5"/>
  <circle cx="150" cy="40" r="5" fill="#fff" opacity="0.4"/>
</svg>`,
    youtube: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" rx="60" fill="url(#kawaii-bg-youtube)" /><rect x="40" y="60" width="120" height="80" rx="30" fill="white" opacity="0.95" /><path d="M90 85 V115 L120 100 Z" fill="#FF0000" /><defs><linearGradient id="kawaii-bg-youtube" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse"><stop stop-color="#FF6B6B" /><stop offset="1" stop-color="#FF0000" /></linearGradient></defs>
  <!-- Jelly Aesthetics & Sparkles -->
  <path d="M 40 40 Q 100 20 160 40 Q 180 80 180 100 Q 100 60 20 100 Q 20 80 40 40 Z" fill="#ffffff" opacity="0.3" style="mix-blend-mode: overlay;" />
  <circle cx="30" cy="30" r="4" fill="#fff" opacity="0.6"/>
  <circle cx="160" cy="150" r="3" fill="#fff" opacity="0.5"/>
  <circle cx="150" cy="40" r="5" fill="#fff" opacity="0.4"/>
</svg>`,
    tiktok: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" rx="60" fill="#000" /><path d="M120 40V120C120 140 100 150 85 145C70 135 70 115 80 105C90 95 100 100 100 100 V70C90 70 70 75 60 90 M120 70C130 80 145 80 150 80V50C135 50 125 45 120 40Z" fill="white" filter="drop-shadow(3px 3px 0 #FF0050) drop-shadow(-3px -3px 0 #00F2FE)" /><defs></defs>
  <!-- Jelly Aesthetics & Sparkles -->
  <path d="M 40 40 Q 100 20 160 40 Q 180 80 180 100 Q 100 60 20 100 Q 20 80 40 40 Z" fill="#ffffff" opacity="0.3" style="mix-blend-mode: overlay;" />
  <circle cx="30" cy="30" r="4" fill="#fff" opacity="0.6"/>
  <circle cx="160" cy="150" r="3" fill="#fff" opacity="0.5"/>
  <circle cx="150" cy="40" r="5" fill="#fff" opacity="0.4"/>
</svg>`,
    tinder: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" rx="60" fill="url(#kawaii-bg-tinder)" /><path d="M95 50 C80 80 50 100 60 130 C70 160 110 160 130 140 C150 120 140 80 125 70 C125 70 135 90 120 110 C105 130 85 120 90 100 C95 80 95 50 95 50Z" fill="white" opacity="0.95" /><defs><linearGradient id="kawaii-bg-tinder" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse"><stop stop-color="#FD297B" /><stop offset="1" stop-color="#FF655B" /></linearGradient></defs>
  <!-- Jelly Aesthetics & Sparkles -->
  <path d="M 40 40 Q 100 20 160 40 Q 180 80 180 100 Q 100 60 20 100 Q 20 80 40 40 Z" fill="#ffffff" opacity="0.3" style="mix-blend-mode: overlay;" />
  <circle cx="30" cy="30" r="4" fill="#fff" opacity="0.6"/>
  <circle cx="160" cy="150" r="3" fill="#fff" opacity="0.5"/>
  <circle cx="150" cy="40" r="5" fill="#fff" opacity="0.4"/>
</svg>`,
    uber: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" rx="60" fill="#E6E6FA" /><circle cx="100" cy="100" r="50" fill="black" /><rect x="110" y="85" width="40" height="30" rx="5" fill="#E6E6FA" /><circle cx="100" cy="100" r="20" fill="#E6E6FA" /><path d="M100 95 L115 95 V105 L100 105 Z" fill="#E6E6FA" />
  <!-- Jelly Aesthetics & Sparkles -->
  <path d="M 40 40 Q 100 20 160 40 Q 180 80 180 100 Q 100 60 20 100 Q 20 80 40 40 Z" fill="#ffffff" opacity="0.3" style="mix-blend-mode: overlay;" />
  <circle cx="30" cy="30" r="4" fill="#fff" opacity="0.6"/>
  <circle cx="160" cy="150" r="3" fill="#fff" opacity="0.5"/>
  <circle cx="150" cy="40" r="5" fill="#fff" opacity="0.4"/>
</svg>`,
    phone: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" rx="60" fill="url(#kawaii-bg-phone)" /><path d="M125 60 C135 70 145 80 145 90 C145 105 130 115 110 135 C90 155 80 170 65 170 C55 170 45 160 35 150 C25 140 25 130 35 120 L50 105 C60 95 70 95 80 105 L85 110 C95 105 105 95 110 85 L105 80 C95 70 95 60 105 50 L120 35 C130 25 140 25 150 35 Z" fill="white" transform="translate(15, -10)" /><circle cx="160" cy="50" r="15" fill="#FFB6C1" opacity="0.8" /><circle cx="170" cy="40" r="5" fill="white" /><defs><linearGradient id="kawaii-bg-phone" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse"><stop stop-color="#98FB98" /><stop offset="1" stop-color="#3CB371" /></linearGradient></defs>
  <!-- Jelly Aesthetics & Sparkles -->
  <path d="M 40 40 Q 100 20 160 40 Q 180 80 180 100 Q 100 60 20 100 Q 20 80 40 40 Z" fill="#ffffff" opacity="0.3" style="mix-blend-mode: overlay;" />
  <circle cx="30" cy="30" r="4" fill="#fff" opacity="0.6"/>
  <circle cx="160" cy="150" r="3" fill="#fff" opacity="0.5"/>
  <circle cx="150" cy="40" r="5" fill="#fff" opacity="0.4"/>
</svg>`,
    mail: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" rx="60" fill="url(#kawaii-bg-mail)" /><rect x="40" y="60" width="120" height="80" rx="15" fill="white" opacity="0.95" /><path d="M40 75 L100 115 L160 75" stroke="#87CEFA" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none" /><path d="M100 115 L100 120 C100 130 90 130 90 120 L90 115 Z" fill="#FFB6C1" /><defs><linearGradient id="kawaii-bg-mail" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse"><stop stop-color="#E0FFFF" /><stop offset="1" stop-color="#87CEEB" /></linearGradient></defs>
  <!-- Jelly Aesthetics & Sparkles -->
  <path d="M 40 40 Q 100 20 160 40 Q 180 80 180 100 Q 100 60 20 100 Q 20 80 40 40 Z" fill="#ffffff" opacity="0.3" style="mix-blend-mode: overlay;" />
  <circle cx="30" cy="30" r="4" fill="#fff" opacity="0.6"/>
  <circle cx="160" cy="150" r="3" fill="#fff" opacity="0.5"/>
  <circle cx="150" cy="40" r="5" fill="#fff" opacity="0.4"/>
</svg>`,
    garage: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" rx="60" fill="url(#kawaii-bg-garage)" /><path d="M40 100 L100 60 L160 100 V150 H40 Z" fill="white" opacity="0.9" /><rect x="65" y="110" width="70" height="40" fill="#FFDAB9" /><path d="M65 110 H135 M65 120 H135 M65 130 H135 M65 140 H135" stroke="white" stroke-width="4" /><circle cx="100" cy="40" r="12" fill="#FFB6C1" /><defs><linearGradient id="kawaii-bg-garage" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse"><stop stop-color="#FFDAB9" /><stop offset="1" stop-color="#FFA07A" /></linearGradient></defs>
  <!-- Jelly Aesthetics & Sparkles -->
  <path d="M 40 40 Q 100 20 160 40 Q 180 80 180 100 Q 100 60 20 100 Q 20 80 40 40 Z" fill="#ffffff" opacity="0.3" style="mix-blend-mode: overlay;" />
  <circle cx="30" cy="30" r="4" fill="#fff" opacity="0.6"/>
  <circle cx="160" cy="150" r="3" fill="#fff" opacity="0.5"/>
  <circle cx="150" cy="40" r="5" fill="#fff" opacity="0.4"/>
</svg>`,
    darkchat: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" rx="60" fill="url(#kawaii-bg-darkchat)" /><path d="M50 100 C50 70 70 50 100 50 C130 50 150 70 150 100 C150 130 130 150 100 150 C90 150 70 160 60 160 C65 145 60 135 55 125 C50 115 50 110 50 100Z" fill="#1A1A2E" /><circle cx="80" cy="100" r="8" fill="#FFB6C1" /><circle cx="120" cy="100" r="8" fill="#FFB6C1" /><path d="M90 115 Q100 125 110 115" stroke="#FFB6C1" stroke-width="4" stroke-linecap="round" fill="none" /><defs><linearGradient id="kawaii-bg-darkchat" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse"><stop stop-color="#4B0082" /><stop offset="1" stop-color="#000000" /></linearGradient></defs>
  <!-- Jelly Aesthetics & Sparkles -->
  <path d="M 40 40 Q 100 20 160 40 Q 180 80 180 100 Q 100 60 20 100 Q 20 80 40 40 Z" fill="#ffffff" opacity="0.3" style="mix-blend-mode: overlay;" />
  <circle cx="30" cy="30" r="4" fill="#fff" opacity="0.6"/>
  <circle cx="160" cy="150" r="3" fill="#fff" opacity="0.5"/>
  <circle cx="150" cy="40" r="5" fill="#fff" opacity="0.4"/>
</svg>`
};

// Fallback logic
const PLACEHOLDER = `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" rx="60" fill="#fbcfe8"/><circle cx="100" cy="100" r="40" fill="white"/></svg>`;

export function KawaiiEngine({ icon }) {
    const svgString = KAWAI_SVG_DICTIONARY[icon] || PLACEHOLDER;
    return (
        <div
            className="w-full h-full"
            dangerouslySetInnerHTML={{ __html: svgString }}
        />
    );
}

KawaiiEngine.getRawSVG = (icon) => {
    return KAWAI_SVG_DICTIONARY[icon] || PLACEHOLDER;
};
