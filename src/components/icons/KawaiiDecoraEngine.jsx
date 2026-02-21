import React from 'react';

// Decora Subculture / Harajuku Y2K Sticker Theme
// Thick outlines, vibrant pinks/cyans, and lots of random stars/hearts/bows surrounding the core icon.
// The core concept is "Sticker Punk"

export const KAWAII_DECORA_SVG_DICTIONARY = {
    contacts: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Sticker Background -->
  <rect width="200" height="200" rx="60" fill="#fff" />
  <rect x="8" y="8" width="184" height="184" rx="52" fill="#fdf2f8" stroke="#f472b6" stroke-width="12" />
  
  <!-- Base Icon -->
  <circle cx="100" cy="85" r="30" fill="#fbcfe8" stroke="#ec4899" stroke-width="8" />
  <path d="M45 180 C 45 130 70 125 100 125 C 130 125 155 130 155 180" fill="#fbcfe8" stroke="#ec4899" stroke-width="8" />

  <!-- Decora Stickers -->
  <path d="M 150 50 L 160 30 L 170 50 L 190 60 L 170 70 L 160 90 L 150 70 L 130 60 Z" fill="#fef08a" stroke="#eab308" stroke-width="4" transform="rotate(15 160 60)" />
  <circle cx="40" cy="50" r="10" fill="#a7f3d0" stroke="#10b981" stroke-width="4" />
  <path d="M 30 130 Q 40 120 50 130 Q 60 140 50 150 Q 40 160 30 150 Q 20 140 30 130 Z" fill="#fda4af" stroke="#e11d48" stroke-width="4" />
</svg>`,

    bank: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" rx="60" fill="#fff" />
  <rect x="8" y="8" width="184" height="184" rx="52" fill="#ecfdf5" stroke="#34d399" stroke-width="12" />
  
  <path d="M100 40 L40 80 H160 L100 40Z" fill="#a7f3d0" stroke="#059669" stroke-width="8" stroke-linejoin="round" />
  <rect x="55" y="90" width="15" height="60" fill="#a7f3d0" stroke="#059669" stroke-width="6" rx="4" />
  <rect x="92.5" y="90" width="15" height="60" fill="#a7f3d0" stroke="#059669" stroke-width="6" rx="4" />
  <rect x="130" y="90" width="15" height="60" fill="#a7f3d0" stroke="#059669" stroke-width="6" rx="4" />
  <rect x="40" y="160" width="120" height="15" fill="#a7f3d0" stroke="#059669" stroke-width="6" rx="4" />
  
  <path d="M 30 30 L 40 10 L 50 30 L 70 40 L 50 50 L 40 70 L 30 50 L 10 40 Z" fill="#fef08a" stroke="#eab308" stroke-width="4" transform="scale(0.8) translate(30, 20)" />
  <path d="M 160 140 Q 170 130 180 140 Q 190 150 180 160 Q 170 170 160 160 Q 150 150 160 140 Z" fill="#fda4af" stroke="#e11d48" stroke-width="4" />
</svg>`,

    maps: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" rx="60" fill="#fff" />
  <rect x="8" y="8" width="184" height="184" rx="52" fill="#eff6ff" stroke="#60a5fa" stroke-width="12" />
  
  <rect x="30" y="30" width="140" height="140" rx="10" fill="#bfdbfe" stroke="#3b82f6" stroke-width="8" />
  <path d="M70 30 L70 170 M130 30 L130 170" stroke="#eff6ff" stroke-width="8" />
  <path d="M30 70 L170 70 M30 130 L170 130" stroke="#eff6ff" stroke-width="8" />
  
  <path d="M100 50 C120 50 130 70 130 90 C130 110 100 140 100 140 C100 140 70 110 70 90 C70 70 80 50 100 50 Z" fill="#fbcfe8" stroke="#ec4899" stroke-width="8" stroke-linejoin="round" />
  <circle cx="100" cy="85" r="10" fill="#fff" />
  
  <circle cx="160" cy="40" r="12" fill="#fef08a" stroke="#eab308" stroke-width="4" />
  <circle cx="40" cy="160" r="8" fill="#a7f3d0" stroke="#10b981" stroke-width="4" />
</svg>`,

    ads: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" rx="60" fill="#fff" />
  <rect x="8" y="8" width="184" height="184" rx="52" fill="#fefce8" stroke="#facc15" stroke-width="12" />
  
  <path d="M100 30 L170 80 V170 H30 V80 L100 30 Z" fill="#fef08a" stroke="#ca8a04" stroke-width="8" stroke-linejoin="round" />
  <rect x="60" y="100" width="80" height="60" rx="8" fill="#fff" />
  <path d="M70 120 H130 M70 140 H110" stroke="#1d4ed8" stroke-width="6" stroke-linecap="round" />
  
  <!-- Ribbon Sticker -->
  <path d="M140 30 L160 10 L180 30 L170 60 L150 60 Z" fill="#fda4af" stroke="#e11d48" stroke-width="4" stroke-linejoin="round" />
  <circle cx="160" cy="30" r="4" fill="#fff" />
</svg>`,

    gallery: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" rx="60" fill="#fff" />
  <rect x="8" y="8" width="184" height="184" rx="52" fill="#faf5ff" stroke="#c084fc" stroke-width="12" />
  
  <rect x="40" y="40" width="120" height="120" rx="16" fill="#e9d5ff" stroke="#9333ea" stroke-width="8" />
  <circle cx="80" cy="80" r="15" fill="#fef08a" stroke="#ca8a04" stroke-width="6" />
  <path d="M40 160 L90 100 L120 130 L140 110 L160 130 V160 H40 Z" fill="#fbcfe8" stroke="#db2777" stroke-width="6" stroke-linejoin="round"/>
  
  <!-- Flower Sticker -->
  <path d="M30 30 C30 10 50 10 50 30 C70 30 70 50 50 50 C50 70 30 70 30 50 C10 50 10 30 30 30 Z" fill="#a7f3d0" stroke="#059669" stroke-width="4" />
  <circle cx="40" cy="40" r="6" fill="#fef08a" />
</svg>`,

    store: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" rx="60" fill="#fff" />
  <rect x="8" y="8" width="184" height="184" rx="52" fill="#eff6ff" stroke="#60a5fa" stroke-width="12" />
  
  <path d="M50 40 L100 150 L150 40" stroke="#bfdbfe" stroke-width="24" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M50 40 L100 150 L150 40" stroke="#2563eb" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M75 40 L100 95 L125 40" stroke="#60a5fa" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
  
  <path d="M 30 150 L 40 130 L 50 150 L 70 160 L 50 170 L 40 190 L 30 170 L 10 160 Z" fill="#fef08a" stroke="#eab308" stroke-width="4" transform="scale(0.7) translate(180, -20)" />
</svg>`,

    settings: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" rx="60" fill="#fff" />
  <rect x="8" y="8" width="184" height="184" rx="52" fill="#f3f4f6" stroke="#9ca3af" stroke-width="12" />
  
  <path d="M100 30 L120 50 L150 50 L150 80 L170 100 L150 120 L150 150 L120 150 L100 170 L80 150 L50 150 L50 120 L30 100 L50 80 L50 50 L80 50 Z" fill="#e5e7eb" stroke="#4b5563" stroke-width="10" stroke-linejoin="round"/>
  <circle cx="100" cy="100" r="30" fill="#fff" stroke="#4b5563" stroke-width="8" />
  
  <circle cx="45" cy="45" r="10" fill="#fbcfe8" stroke="#ec4899" stroke-width="4" />
  <circle cx="155" cy="155" r="10" fill="#bfdbfe" stroke="#3b82f6" stroke-width="4" />
</svg>`,

    emergency: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" rx="60" fill="#fff" />
  <rect x="8" y="8" width="184" height="184" rx="52" fill="#fef2f2" stroke="#f87171" stroke-width="12" />
  
  <rect x="80" y="40" width="40" height="120" rx="10" fill="#fecaca" stroke="#ef4444" stroke-width="8" />
  <rect x="40" y="80" width="120" height="40" rx="10" fill="#fecaca" stroke="#ef4444" stroke-width="8" />
  <path d="M42 82 H158 V118 H42 Z" fill="#fecaca" />
  
  <!-- Bandaid sticker -->
  <rect x="130" y="30" width="40" height="15" rx="5" fill="#fef3c7" stroke="#d97706" stroke-width="4" transform="rotate(45 150 40)" />
</svg>`,

    calculator: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" rx="60" fill="#fff" />
  <rect x="8" y="8" width="184" height="184" rx="52" fill="#fafafa" stroke="#a3a3a3" stroke-width="12" />
  
  <rect x="40" y="30" width="120" height="40" rx="8" fill="#e5e7eb" stroke="#525252" stroke-width="6" />
  <circle cx="60" cy="100" r="12" fill="#bfdbfe" />
  <circle cx="100" cy="100" r="12" fill="#bfdbfe" />
  <circle cx="140" cy="100" r="12" fill="#fbcfe8" />
  <circle cx="60" cy="140" r="12" fill="#bfdbfe" />
  <circle cx="100" cy="140" r="12" fill="#bfdbfe" />
  <circle cx="140" cy="140" r="12" fill="#fef08a" />
</svg>`,

    home: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" rx="60" fill="#fff" />
  <rect x="8" y="8" width="184" height="184" rx="52" fill="#fff7ed" stroke="#fb923c" stroke-width="12" />
  
  <path d="M30 100 L100 40 L170 100" fill="none" stroke="#fdba74" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M50 90 V160 H90 V120 H110 V160 H150 V90" fill="#ffedd5" stroke="#f97316" stroke-width="8" stroke-linejoin="round" />
  
  <path d="M 130 30 Q 140 20 150 30 Q 160 40 150 50 Q 140 60 130 50 Q 120 40 130 30 Z" fill="#fda4af" stroke="#e11d48" stroke-width="4" />
</svg>`,

    notes: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" rx="60" fill="#fff" />
  <rect x="8" y="8" width="184" height="184" rx="52" fill="#fefce8" stroke="#eab308" stroke-width="12" />
  
  <rect x="40" y="40" width="120" height="140" rx="10" fill="#fef08a" stroke="#ca8a04" stroke-width="8" />
  <circle cx="60" cy="30" r="8" fill="#eab308" />
  <circle cx="100" cy="30" r="8" fill="#eab308" />
  <circle cx="140" cy="30" r="8" fill="#eab308" />
  <path d="M60 80 H140 M60 110 H140 M60 140 H100" stroke="#a16207" stroke-width="8" stroke-linecap="round" />
  
  <path d="M 150 140 L 160 120 L 170 140 L 190 150 L 170 160 L 160 180 L 150 160 L 130 150 Z" fill="#bfdbfe" stroke="#3b82f6" stroke-width="3" transform="scale(0.8) translate(30, 20)" />
</svg>`,

    calendar: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" rx="60" fill="#fff" />
  <rect x="8" y="8" width="184" height="184" rx="52" fill="#ecfdf5" stroke="#10b981" stroke-width="12" />
  
  <rect x="40" y="50" width="120" height="110" rx="12" fill="#d1fae5" stroke="#059669" stroke-width="8" />
  <path d="M40 90 H160" stroke="#059669" stroke-width="8" />
  <path d="M60 30 V60 M140 30 V60" stroke="#ef4444" stroke-width="12" stroke-linecap="round" />
  <circle cx="70" cy="120" r="10" fill="#fbcfe8" />
  <circle cx="100" cy="120" r="10" fill="#bfdbfe" />
  
  <path d="M 150 100 Q 160 90 170 100 Q 180 110 170 120 Q 160 130 150 120 Q 140 110 150 100 Z" fill="#fef08a" stroke="#ca8a04" stroke-width="4" />
</svg>`,

    camera: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" rx="60" fill="#fff" />
  <rect x="8" y="8" width="184" height="184" rx="52" fill="#e0e7ff" stroke="#6366f1" stroke-width="12" />
  
  <path d="M30 80 H60 L75 50 H125 L140 80 H170 V150 H30 V80 Z" fill="#c7d2fe" stroke="#4f46e5" stroke-width="8" stroke-linejoin="round" />
  <circle cx="100" cy="110" r="25" fill="#fff" stroke="#4f46e5" stroke-width="8" />
  <circle cx="140" cy="100" r="6" fill="#fbcfe8" />
  
  <circle cx="30" cy="40" r="12" fill="#fef08a" stroke="#ca8a04" stroke-width="4" />
</svg>`,

    weather: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" rx="60" fill="#fff" />
  <rect x="8" y="8" width="184" height="184" rx="52" fill="#f0f9ff" stroke="#0ea5e9" stroke-width="12" />
  
  <circle cx="70" cy="80" r="30" fill="#fef08a" stroke="#eab308" stroke-width="8" />
  <path d="M40 130 C30 130 30 100 50 100 C55 80 115 70 130 95 C150 95 150 130 130 130 Z" fill="#fff" stroke="#0284c7" stroke-width="8" stroke-linejoin="round" />
  
  <path d="M 160 40 L 170 20 L 180 40 L 200 50 L 180 60 L 170 80 L 160 60 L 140 50 Z" fill="#fbcfe8" stroke="#db2777" stroke-width="3" transform="scale(0.7) translate(-10, 20)" />
</svg>`,

    music: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" rx="60" fill="#fff" />
  <rect x="8" y="8" width="184" height="184" rx="52" fill="#ffe4e6" stroke="#f43f5e" stroke-width="12" />
  
  <path d="M85 130 C70 130 60 140 60 155 C60 170 70 180 85 180 C100 180 110 170 110 155 V80 L140 70 V120 C125 120 115 130 115 145 C115 160 125 170 140 170 C155 170 165 160 165 145 V40 L85 65 V130 Z" fill="#fca5a5" stroke="#e11d48" stroke-width="8" stroke-linejoin="round" />
  
  <circle cx="40" cy="50" r="10" fill="#a7f3d0" stroke="#059669" stroke-width="4" />
  <circle cx="160" cy="100" r="8" fill="#fef08a" stroke="#ca8a04" stroke-width="4" />
</svg>`,

    messages: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" rx="60" fill="#fff" />
  <rect x="8" y="8" width="184" height="184" rx="52" fill="#dcfce7" stroke="#22c55e" stroke-width="12" />
  
  <path d="M30 100 C30 60 60 30 100 30 C140 30 170 60 170 100 C170 140 140 170 100 170 C85 170 65 180 40 185 C45 165 40 155 35 145 C32 135 30 120 30 100Z" fill="#bbf7d0" stroke="#16a34a" stroke-width="8" stroke-linejoin="round" />
  <circle cx="70" cy="100" r="10" fill="#16a34a" />
  <circle cx="100" cy="100" r="10" fill="#16a34a" />
  <circle cx="130" cy="100" r="10" fill="#16a34a" />
  
  <path d="M 150 30 Q 160 20 170 30 Q 180 40 170 50 Q 160 60 150 50 Q 140 40 150 30 Z" fill="#fda4af" stroke="#e11d48" stroke-width="4" />
</svg>`,

    twitter: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" rx="60" fill="#fff" />
  <rect x="8" y="8" width="184" height="184" rx="52" fill="#fdf2f8" stroke="#1d4ed8" stroke-width="12" />
  <path d="M140 50 L100 105 V150 M60 50 L140 150" stroke="#3b82f6" stroke-width="16" stroke-linecap="round" />
  <path d="M140 50 L100 105 V150" stroke="#bfdbfe" stroke-width="8" stroke-linecap="round" />
  <circle cx="40" cy="40" r="8" fill="#fda4af" stroke="#e11d48" stroke-width="3" />
  <circle cx="160" cy="160" r="8" fill="#fef08a" stroke="#ca8a04" stroke-width="3" />
</svg>`,

    instagram: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" rx="60" fill="#fff" />
  <rect x="8" y="8" width="184" height="184" rx="52" fill="#fdf2f8" stroke="#db2777" stroke-width="12" />
  <rect x="40" y="40" width="120" height="120" rx="30" fill="none" stroke="#f472b6" stroke-width="12" />
  <circle cx="100" cy="100" r="25" fill="none" stroke="#f472b6" stroke-width="12" />
  <circle cx="135" cy="65" r="8" fill="#f472b6" />
  <path d="M 150 140 L 160 120 L 170 140 L 190 150 L 170 160 L 160 180 L 150 160 L 130 150 Z" fill="#fef08a" stroke="#ca8a04" stroke-width="3" transform="scale(0.8) translate(20, 20)" />
</svg>`,

    whatsapp: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" rx="60" fill="#fff" />
  <rect x="8" y="8" width="184" height="184" rx="52" fill="#fdf2f8" stroke="#22c55e" stroke-width="12" />
  <path d="M40 100 C40 65 65 40 100 40 C135 40 160 65 160 100 C160 135 135 160 100 160 C80 160 60 150 50 140 L35 165 L40 135 C38 125 40 115 40 100Z" fill="none" stroke="#4ade80" stroke-width="12" stroke-linejoin="round"/>
  <path d="M75 80 Q90 90 95 105 Q110 95 125 105 Q120 120 100 125 Q75 110 75 80 Z" fill="#86efac" />
  <circle cx="30" cy="40" r="10" fill="#fbcfe8" stroke="#db2777" stroke-width="3" />
</svg>`,

    discord: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" rx="60" fill="#fff" />
  <rect x="8" y="8" width="184" height="184" rx="52" fill="#fdf2f8" stroke="#4f46e5" stroke-width="12" />
  <path d="M140 60 C140 60 120 50 100 50 C80 50 60 60 60 60 C50 80 40 110 40 130 C50 150 70 150 70 150 L80 135 C65 130 65 130 65 130 C90 145 110 145 135 130 C135 130 135 130 120 135 L130 150 C130 150 150 150 160 130 C160 110 150 80 140 60Z" fill="#a5b4fc" stroke="#6366f1" stroke-width="8" stroke-linejoin="round" />
  <circle cx="85" cy="100" r="12" fill="#4f46e5" />
  <circle cx="115" cy="100" r="12" fill="#4f46e5" />
  <path d="M 30 30 C30 10 50 10 50 30 C70 30 70 50 50 50 C50 70 30 70 30 50 C10 50 10 30 30 30 Z" fill="#fef08a" stroke="#ca8a04" stroke-width="3" transform="scale(0.8) translate(-10, -10)" />
</svg>`,

    tiktok: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" rx="60" fill="#fff" />
  <rect x="8" y="8" width="184" height="184" rx="52" fill="#fdf2f8" stroke="#18181b" stroke-width="12" />
  <path d="M110 40V120C110 140 90 150 75 145C60 135 60 115 70 105C80 95 90 100 90 100 V70C80 70 60 75 50 90 M110 70C120 80 135 80 140 80V50C125 50 115 45 110 40Z" fill="none" stroke="#2dd4bf" stroke-width="12" transform="translate(-4,-4)" stroke-linejoin="round" />
  <path d="M110 40V120C110 140 90 150 75 145C60 135 60 115 70 105C80 95 90 100 90 100 V70C80 70 60 75 50 90 M110 70C120 80 135 80 140 80V50C125 50 115 45 110 40Z" fill="none" stroke="#f472b6" stroke-width="12" transform="translate(4,4)" stroke-linejoin="round" />
  <path d="M110 40V120C110 140 90 150 75 145C60 135 60 115 70 105C80 95 90 100 90 100 V70C80 70 60 75 50 90 M110 70C120 80 135 80 140 80V50C125 50 115 45 110 40Z" fill="none" stroke="#18181b" stroke-width="12" stroke-linejoin="round" />
  <circle cx="160" cy="150" r="10" fill="#a7f3d0" stroke="#059669" stroke-width="3" />
</svg>`,

    youtube: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" rx="60" fill="#fff" />
  <rect x="8" y="8" width="184" height="184" rx="52" fill="#fdf2f8" stroke="#ef4444" stroke-width="12" />
  <rect x="30" y="60" width="140" height="80" rx="20" fill="#fecaca" stroke="#dc2626" stroke-width="10" />
  <path d="M85 80 V120 L125 100 Z" fill="#fff" stroke="#dc2626" stroke-width="6" stroke-linejoin="round" />
  <path d="M 150 30 L 160 10 L 170 30 L 190 40 L 170 50 L 160 70 L 150 50 L 130 40 Z" fill="#fef08a" stroke="#ca8a04" stroke-width="3" transform="scale(0.8) translate(-10, 20)" />
</svg>`,

    tinder: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" rx="60" fill="#fff" />
  <rect x="8" y="8" width="184" height="184" rx="52" fill="#fdf2f8" stroke="#f43f5e" stroke-width="12" />
  <path d="M100 45 C80 80 40 100 50 140 C60 175 110 175 140 150 C165 130 150 80 135 70 C135 70 150 95 125 120 C105 140 80 130 85 110 C90 90 100 45 100 45Z" fill="#fda4af" stroke="#ef4444" stroke-width="8" stroke-linejoin="round" />
  <circle cx="40" cy="150" r="8" fill="#fbcfe8" stroke="#db2777" stroke-width="3" />
  <circle cx="160" cy="40" r="10" fill="#fef08a" stroke="#ca8a04" stroke-width="3" />
</svg>`,

    uber: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" rx="60" fill="#fff" />
  <rect x="8" y="8" width="184" height="184" rx="52" fill="#fdf2f8" stroke="#18181b" stroke-width="12" />
  <circle cx="100" cy="100" r="50" fill="#e4e4e7" stroke="#3f3f46" stroke-width="12" />
  <rect x="115" y="85" width="40" height="30" rx="5" fill="#3f3f46" />
  <path d="M 30 150 Q 40 140 50 150 Q 60 160 50 170 Q 40 180 30 170 Q 20 160 30 150 Z" fill="#fda4af" stroke="#e11d48" stroke-width="4" transform="scale(0.8)" />
</svg>`,

    phone: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" rx="60" fill="#fff" />
  <rect x="8" y="8" width="184" height="184" rx="52" fill="#dcfce7" stroke="#22c55e" stroke-width="12" />
  <path d="M125 60 C135 70 145 80 145 90 C145 105 130 115 110 135 C90 155 80 170 65 170 C55 170 45 160 35 150 C25 140 25 130 35 120 L50 105 C60 95 70 95 80 105 L85 110 C95 105 105 95 110 85 L105 80 C95 70 95 60 105 50 L120 35 C130 25 140 25 150 35 Z" fill="#bbf7d0" stroke="#16a34a" stroke-width="8" stroke-linejoin="round" transform="translate(15, -10)" />
  <circle cx="30" cy="40" r="8" fill="#fef08a" stroke="#ca8a04" stroke-width="3" />
  <circle cx="160" cy="160" r="10" fill="#fbcfe8" stroke="#db2777" stroke-width="3" />
</svg>`,

    mail: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" rx="60" fill="#fff" />
  <rect x="8" y="8" width="184" height="184" rx="52" fill="#e0e7ff" stroke="#4f46e5" stroke-width="12" />
  <rect x="30" y="60" width="140" height="80" rx="10" fill="#c7d2fe" stroke="#4338ca" stroke-width="8" />
  <path d="M30 60 L100 110 L170 60" fill="none" stroke="#4338ca" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M 140 140 L 150 120 L 160 140 L 180 150 L 160 160 L 150 180 L 140 160 L 120 150 Z" fill="#fef08a" stroke="#ca8a04" stroke-width="3" transform="scale(0.8) translate(20, 10)" />
</svg>`,

    garage: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" rx="60" fill="#fff" />
  <rect x="8" y="8" width="184" height="184" rx="52" fill="#fae8ff" stroke="#c026d3" stroke-width="12" />
  <path d="M30 100 L100 50 L170 100 V160 H30 Z" fill="#f5d0fe" stroke="#a21caf" stroke-width="8" stroke-linejoin="round" />
  <rect x="60" y="110" width="80" height="50" fill="#e879f9" stroke="#86198f" stroke-width="6" />
  <path d="M60 125 H140 M60 140 H140" stroke="#86198f" stroke-width="6" />
  <circle cx="160" cy="40" r="8" fill="#a7f3d0" stroke="#059669" stroke-width="3" />
</svg>`,

    darkchat: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" rx="60" fill="#fff" />
  <rect x="8" y="8" width="184" height="184" rx="52" fill="#fee2e2" stroke="#dc2626" stroke-width="12" />
  <path d="M40 100 C40 65 65 40 100 40 C135 40 160 65 160 100 C160 135 135 160 100 160 C85 160 65 170 45 175 C50 160 45 150 42 140 C40 130 40 115 40 100Z" fill="#fca5a5" stroke="#b91c1c" stroke-width="8" stroke-linejoin="round" />
  <circle cx="70" cy="100" r="10" fill="#b91c1c" />
  <circle cx="100" cy="100" r="10" fill="#b91c1c" />
  <circle cx="130" cy="100" r="10" fill="#b91c1c" />
  <path d="M 30 30 C30 10 50 10 50 30 C70 30 70 50 50 50 C50 70 30 70 30 50 C10 50 10 30 30 30 Z" fill="#fda4af" stroke="#be123c" stroke-width="3" transform="scale(0.8) translate(-10, -10)" />
</svg>`
};

const PLACEHOLDER = `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" rx="60" fill="#fff" /><rect x="8" y="8" width="184" height="184" rx="52" fill="#fdf2f8" stroke="#f472b6" stroke-width="12" /><circle cx="100" cy="100" r="40" fill="#fbcfe8" stroke="#ec4899" stroke-width="8"/></svg>`;

export function KawaiiDecoraEngine({ icon }) {
    const svgString = KAWAII_DECORA_SVG_DICTIONARY[icon] || PLACEHOLDER;
    return (
        <div
            className="w-full h-full"
            dangerouslySetInnerHTML={{ __html: svgString }}
        />
    );
}

KawaiiDecoraEngine.getRawSVG = (icon) => {
    return KAWAII_DECORA_SVG_DICTIONARY[icon] || PLACEHOLDER;
};
