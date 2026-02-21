// src/components/icons/iOSEngine.jsx
import React from 'react';

// Generates the raw SVG string for iOS glass morphic themes
export const IOS_SVG_DICTIONARY = {
  contacts: `
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" rx="45" fill="url(#ios-bg-contacts)" />
  <rect x="2" y="2" width="196" height="196" rx="43" stroke="url(#ios-glass-border-contacts)" stroke-width="4" opacity="0.3" />
  
  <circle cx="100" cy="85" r="30" fill="url(#ios-fg-contacts)" />
  <path d="M45 180 C 45 140 70 125 100 125 C 130 125 155 140 155 180" fill="url(#ios-fg-contacts)" />
  
  <defs>
    <linearGradient id="ios-bg-contacts" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
      <stop stop-color="#9CA3AF" />
      <stop offset="1" stop-color="#4B5563" />
    </linearGradient>
    <linearGradient id="ios-fg-contacts" x1="100" y1="55" x2="100" y2="180" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F3F4F6" />
      <stop offset="1" stop-color="#D1D5DB" />
    </linearGradient>
    <linearGradient id="ios-glass-border-contacts" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFFFFF" stop-opacity="0.8" />
      <stop offset="1" stop-color="#FFFFFF" stop-opacity="0.1" />
    </linearGradient>
  </defs>
</svg>`,

  bank: `
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" rx="45" fill="url(#ios-bg-bank)" />
  <rect x="2" y="2" width="196" height="196" rx="43" stroke="url(#ios-glass-border-bank)" stroke-width="4" opacity="0.3" />
  
  <path d="M100 40 L40 80 H160 L100 40Z" fill="white" />
  <rect x="55" y="90" width="15" height="60" fill="white" opacity="0.9" />
  <rect x="92.5" y="90" width="15" height="60" fill="white" opacity="0.9" />
  <rect x="130" y="90" width="15" height="60" fill="white" opacity="0.9" />
  <rect x="40" y="160" width="120" height="15" fill="white" />
  
  <defs>
    <linearGradient id="ios-bg-bank" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
      <stop stop-color="#34D399" />
      <stop offset="1" stop-color="#059669" />
    </linearGradient>
    <linearGradient id="ios-glass-border-bank" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFFFFF" stop-opacity="0.8" />
      <stop offset="1" stop-color="#FFFFFF" stop-opacity="0.1" />
    </linearGradient>
  </defs>
</svg>`,

  maps: `
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" rx="45" fill="url(#ios-bg-maps)" />
  <rect x="2" y="2" width="196" height="196" rx="43" stroke="url(#ios-glass-border-maps)" stroke-width="4" opacity="0.3" />
  
  <!-- Map Route -->
  <path d="M40 160 L100 90 L130 120 L180 50" stroke="#3B82F6" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" fill="none" />
  
  <!-- Location Pin -->
  <path d="M100 45 C118 45 130 58 130 75 C130 95 100 125 100 125 C100 125 70 95 70 75 C70 58 82 45 100 45Z" fill="#EF4444" />
  <circle cx="100" cy="75" r="12" fill="white" />
  
  <defs>
    <linearGradient id="ios-bg-maps" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F9FAFB" />
      <stop offset="1" stop-color="#D1D5DB" />
    </linearGradient>
    <linearGradient id="ios-glass-border-maps" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFFFFF" stop-opacity="0.8" />
      <stop offset="1" stop-color="#FFFFFF" stop-opacity="0.1" />
    </linearGradient>
  </defs>
</svg>`,

  ads: `
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" rx="45" fill="url(#ios-bg-ads)" />
  <rect x="2" y="2" width="196" height="196" rx="43" stroke="url(#ios-glass-border-ads)" stroke-width="4" opacity="0.3" />
  
  <path d="M80 60 L140 40 V160 L80 140 H50 V60 H80Z" fill="white" />
  <path d="M80 60 V140" stroke="#FBBF24" stroke-width="8" />
  <path d="M160 80 C170 90 170 110 160 120" stroke="white" stroke-width="12" stroke-linecap="round" />
  
  <defs>
    <linearGradient id="ios-bg-ads" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FCD34D" />
      <stop offset="1" stop-color="#D97706" />
    </linearGradient>
    <linearGradient id="ios-glass-border-ads" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFFFFF" stop-opacity="0.8" />
      <stop offset="1" stop-color="#FFFFFF" stop-opacity="0.1" />
    </linearGradient>
  </defs>
</svg>`,

  gallery: `
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" rx="45" fill="url(#ios-bg-gallery)" />
  <rect x="2" y="2" width="196" height="196" rx="43" stroke="url(#ios-glass-border-gallery)" stroke-width="4" opacity="0.3" />
  
  <!-- Flower Petals (iOS Photos style) -->
  <path d="M100 100 C100 65 130 50 150 70 C170 90 135 100 100 100Z" fill="#FBBF24" opacity="0.9" />
  <path d="M100 100 C135 100 150 130 130 150 C110 170 100 135 100 100Z" fill="#EF4444" opacity="0.9" />
  <path d="M100 100 C100 135 70 150 50 130 C30 110 65 100 100 100Z" fill="#3B82F6" opacity="0.9" />
  <path d="M100 100 C65 100 50 70 70 50 C90 30 100 65 100 100Z" fill="#10B981" opacity="0.9" />
  
  <defs>
    <linearGradient id="ios-bg-gallery" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F9FAFB" />
      <stop offset="1" stop-color="#E5E7EB" />
    </linearGradient>
    <linearGradient id="ios-glass-border-gallery" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFFFFF" stop-opacity="0.8" />
      <stop offset="1" stop-color="#FFFFFF" stop-opacity="0.1" />
    </linearGradient>
  </defs>
</svg>`,

  store: `
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" rx="45" fill="url(#ios-bg-store)" />
  <rect x="2" y="2" width="196" height="196" rx="43" stroke="url(#ios-glass-border-store)" stroke-width="4" opacity="0.3" />
  
  <!-- "A" / "V" Shape -->
  <path d="M100 45 L50 145" stroke="white" stroke-width="18" stroke-linecap="round" />
  <path d="M100 45 L150 145" stroke="white" stroke-width="18" stroke-linecap="round" />
  <path d="M75 120 L160 85" stroke="white" stroke-width="18" stroke-linecap="round" />
  
  <defs>
    <linearGradient id="ios-bg-store" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
      <stop stop-color="#60A5FA" />
      <stop offset="1" stop-color="#2563EB" />
    </linearGradient>
    <linearGradient id="ios-glass-border-store" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFFFFF" stop-opacity="0.8" />
      <stop offset="1" stop-color="#FFFFFF" stop-opacity="0.1" />
    </linearGradient>
  </defs>
</svg>`,

  notes: `
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" rx="45" fill="url(#ios-bg-notes)" />
  <rect x="2" y="2" width="196" height="196" rx="43" stroke="url(#ios-glass-border-notes)" stroke-width="4" opacity="0.3" />
  
  <!-- Note Header -->
  <rect x="40" y="40" width="120" height="30" fill="#FBBF24" />
  <!-- Notepad Paper -->
  <rect x="40" y="70" width="120" height="90" fill="white" />
  
  <!-- Lines -->
  <path d="M55 90 H145 M55 115 H145 M55 140 H105" stroke="#9CA3AF" stroke-width="4" stroke-linecap="round" stroke-dasharray="1 6" />
  
  <defs>
    <linearGradient id="ios-bg-notes" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FCDE70" />
      <stop offset="1" stop-color="#F59E0B" />
    </linearGradient>
    <linearGradient id="ios-glass-border-notes" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFFFFF" stop-opacity="0.8" />
      <stop offset="1" stop-color="#FFFFFF" stop-opacity="0.1" />
    </linearGradient>
  </defs>
</svg>`,

  calendar: `
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" rx="45" fill="url(#ios-bg-calendar)" />
  <rect x="2" y="2" width="196" height="196" rx="43" stroke="url(#ios-glass-border-calendar)" stroke-width="4" opacity="0.3" />
  
  <rect x="40" y="55" width="120" height="105" rx="10" fill="white" />
  <path d="M40 70 C40 62 46 55 55 55 H145 C154 55 160 62 160 70 V85 H40 V70Z" fill="#EF4444" />
  
  <!-- Text 31 placeholder -->
  <path d="M75 140 H95 V105 Z" fill="#1F2937" />
  <path d="M105 105 H125 L115 140 H95 Z" fill="#1F2937" />
  
  <defs>
    <linearGradient id="ios-bg-calendar" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F9FAFB" />
      <stop offset="1" stop-color="#D1D5DB" />
    </linearGradient>
    <linearGradient id="ios-glass-border-calendar" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFFFFF" stop-opacity="0.8" />
      <stop offset="1" stop-color="#FFFFFF" stop-opacity="0.1" />
    </linearGradient>
  </defs>
</svg>`,

  emergency: `
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" rx="45" fill="url(#ios-bg-emergency)" />
  <rect x="2" y="2" width="196" height="196" rx="43" stroke="url(#ios-glass-border-emergency)" stroke-width="4" opacity="0.3" />
  
  <path d="M100 35 L40 160 H160 L100 35Z" fill="white" />
  <path d="M100 80 V120 M100 140 V150" stroke="#EF4444" stroke-width="12" stroke-linecap="round" />
  
  <defs>
    <linearGradient id="ios-bg-emergency" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EF4444" />
      <stop offset="1" stop-color="#991B1B" />
    </linearGradient>
    <linearGradient id="ios-glass-border-emergency" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFFFFF" stop-opacity="0.8" />
      <stop offset="1" stop-color="#FFFFFF" stop-opacity="0.1" />
    </linearGradient>
  </defs>
</svg>`,

  calculator: `
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" rx="45" fill="url(#ios-bg-calc)" />
  <rect x="2" y="2" width="196" height="196" rx="43" stroke="url(#ios-glass-border-calculator)" stroke-width="4" opacity="0.3" />
  
  <!-- Buttons -->
  <circle cx="65" cy="65" r="20" fill="#6B7280" />
  <circle cx="135" cy="65" r="20" fill="#6B7280" />
  <circle cx="65" cy="135" r="20" fill="#6B7280" />
  <circle cx="135" cy="135" r="20" fill="#F59E0B" />
  
  <path d="M55 65 H75" stroke="#FFF" stroke-width="4" stroke-linecap="round" />
  <path d="M125 65 H145 M135 55 V75" stroke="#FFF" stroke-width="4" stroke-linecap="round" />
  <path d="M55 125 L75 145 M55 145 L75 125" stroke="#FFF" stroke-width="4" stroke-linecap="round" />
  <path d="M125 130 H145 M125 140 H145" stroke="#FFF" stroke-width="4" stroke-linecap="round" />
  
  <defs>
    <linearGradient id="ios-bg-calc" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
      <stop stop-color="#374151" />
      <stop offset="1" stop-color="#111827" />
    </linearGradient>
    <linearGradient id="ios-glass-border-calculator" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFFFFF" stop-opacity="0.5" />
      <stop offset="1" stop-color="#FFFFFF" stop-opacity="0.1" />
    </linearGradient>
  </defs>
</svg>`,

  settings: `
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" rx="45" fill="url(#ios-bg-settings)" />
  <rect x="2" y="2" width="196" height="196" rx="43" stroke="url(#ios-glass-border-settings)" stroke-width="4" opacity="0.3" />
  
  <path fill-rule="evenodd" clip-rule="evenodd" d="M100 40C103.5 40 106.5 42.5 107.5 45.5L109.5 54C114 55.5 118 57.5 122 60L129 55C132 53.5 136 54 138 56L144 62C146 64 146.5 68 145 71L140 78C142.5 82 144.5 86 146 90.5L154.5 92.5C157.5 93.5 160 96.5 160 100C160 103.5 157.5 106.5 154.5 107.5L146 109.5C144.5 114 142.5 118 140 122L145 129C146.5 132 146 136 144 138L138 144C136 146 132 146.5 129 145L122 140C118 142.5 114 144.5 109.5 146L107.5 154.5C106.5 157.5 103.5 160 100 160C96.5 160 93.5 157.5 92.5 154.5L90.5 146C86 144.5 82 142.5 78 140L71 145C68 146.5 64 146 62 144L56 138C54 136 53.5 132 55 129L60 122C57.5 118 55.5 114 54 109.5L45.5 107.5C42.5 106.5 40 103.5 40 100C40 96.5 42.5 93.5 45.5 92.5L54 90.5C55.5 86 57.5 82 60 78L55 71C53.5 68 54 64 56 62L62 56C64 54 68 53.5 71 55L78 60C82 57.5 86 55.5 90.5 54L92.5 45.5C93.5 42.5 96.5 40 100 40ZM100 70C83.4315 70 70 83.4315 70 100C70 116.569 83.4315 130 100 130C116.569 130 130 116.569 130 100C130 83.4315 116.569 70 100 70Z" fill="url(#ios-fg-settings)"/>
  
  <defs>
    <linearGradient id="ios-bg-settings" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
      <stop stop-color="#4B5563" />
      <stop offset="1" stop-color="#1F2937" />
    </linearGradient>
    <linearGradient id="ios-fg-settings" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
      <stop stop-color="#D1D5DB" />
      <stop offset="1" stop-color="#9CA3AF" />
    </linearGradient>
    <linearGradient id="ios-glass-border-settings" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFFFFF" stop-opacity="0.8" />
      <stop offset="1" stop-color="#FFFFFF" stop-opacity="0.1" />
    </linearGradient>
  </defs>
</svg>`,

  home: `
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" rx="45" fill="url(#ios-bg-home)" />
  <rect x="2" y="2" width="196" height="196" rx="43" stroke="url(#ios-glass-border-home)" stroke-width="4" opacity="0.3" />
  
  <path d="M100 50 L40 100 H60 V150 H90 V120 H110 V150 H140 V100 H160 L100 50 Z" fill="white" />
  
  <defs>
    <linearGradient id="ios-bg-home" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F59E0B" />
      <stop offset="1" stop-color="#B45309" />
    </linearGradient>
    <linearGradient id="ios-glass-border-home" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFFFFF" stop-opacity="0.8" />
      <stop offset="1" stop-color="#FFFFFF" stop-opacity="0.1" />
    </linearGradient>
  </defs>
</svg>`,

  camera: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" rx="45" fill="url(#ios-bg-camera)" /><rect x="2" y="2" width="196" height="196" rx="43" stroke="url(#ios-glass-border-camera)" stroke-width="4" opacity="0.3" /><path d="M50 75 H150 C160 75 165 80 165 90 V140 C165 150 160 155 150 155 H50 C40 155 35 150 35 140 V90 C35 80 40 75 50 75Z" fill="#374151" /><path d="M70 75 L80 55 H120 L130 75" fill="#374151" /><circle cx="100" cy="115" r="25" fill="#1F2937" stroke="#6B7280" stroke-width="6" /><circle cx="100" cy="115" r="12" fill="#111827" /><circle cx="145" cy="95" r="6" fill="#FBBF24" /><defs><linearGradient id="ios-bg-camera" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse"><stop stop-color="#9CA3AF" /><stop offset="1" stop-color="#4B5563" /></linearGradient><linearGradient id="ios-glass-border-camera" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse"><stop stop-color="#FFFFFF" stop-opacity="0.8" /><stop offset="1" stop-color="#FFFFFF" stop-opacity="0.1" /></linearGradient></defs></svg>`,
  weather: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" rx="45" fill="url(#ios-bg-weather)" /><rect x="2" y="2" width="196" height="196" rx="43" stroke="url(#ios-glass-border-weather)" stroke-width="4" opacity="0.3" /><circle cx="85" cy="85" r="35" fill="url(#ios-weather-sun)" /><path d="M55 140 C40 140 35 125 45 115 C55 105 70 95 95 105 C120 95 150 100 155 120 C160 135 145 140 135 140 Z" fill="url(#ios-weather-cloud)" /><defs><linearGradient id="ios-bg-weather" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse"><stop stop-color="#3B82F6" /><stop offset="1" stop-color="#1E3A8A" /></linearGradient><linearGradient id="ios-weather-sun" x1="50" y1="50" x2="120" y2="120" gradientUnits="userSpaceOnUse"><stop stop-color="#FCD34D" /><stop offset="1" stop-color="#F59E0B" /></linearGradient><linearGradient id="ios-weather-cloud" x1="45" y1="105" x2="155" y2="140" gradientUnits="userSpaceOnUse"><stop stop-color="#FFFFFF" stop-opacity="0.9" /><stop offset="1" stop-color="#E5E7EB" stop-opacity="0.95" /></linearGradient><linearGradient id="ios-glass-border-weather" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse"><stop stop-color="#FFFFFF" stop-opacity="0.8" /><stop offset="1" stop-color="#FFFFFF" stop-opacity="0.1" /></linearGradient></defs></svg>`,
  music: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" rx="45" fill="url(#ios-bg-music)" /><rect x="2" y="2" width="196" height="196" rx="43" stroke="url(#ios-glass-border-music)" stroke-width="4" opacity="0.3" /><path d="M85 130 C75 130 65 140 65 150 C65 160 75 170 85 170 C95 170 105 160 105 150 V90 L135 80 V130 C125 130 115 140 115 150 C115 160 125 170 135 170 C145 170 155 160 155 150 V50 L85 70 V130 Z" fill="url(#ios-music-note)" /><defs><linearGradient id="ios-bg-music" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse"><stop stop-color="#FFFFFF" /><stop offset="1" stop-color="#F3F4F6" /></linearGradient><linearGradient id="ios-music-note" x1="65" y1="50" x2="155" y2="170" gradientUnits="userSpaceOnUse"><stop stop-color="#EC4899" /><stop offset="1" stop-color="#9333EA" /></linearGradient><linearGradient id="ios-glass-border-music" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse"><stop stop-color="#FFFFFF" stop-opacity="0.8" /><stop offset="1" stop-color="#FFFFFF" stop-opacity="0.1" /></linearGradient></defs></svg>`,
  messages: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" rx="45" fill="url(#ios-bg-messages)" /><rect x="2" y="2" width="196" height="196" rx="43" stroke="url(#ios-glass-border-messages)" stroke-width="4" opacity="0.3" /><path d="M40 100 C40 65 65 40 100 40 C135 40 160 65 160 100 C160 135 135 160 100 160 C85 160 65 170 45 175 C50 160 45 150 42 140 C40 130 40 115 40 100Z" fill="#FFFFFF" /><defs><linearGradient id="ios-bg-messages" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse"><stop stop-color="#34D399" /><stop offset="1" stop-color="#059669" /></linearGradient><linearGradient id="ios-glass-border-messages" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse"><stop stop-color="#FFFFFF" stop-opacity="0.8" /><stop offset="1" stop-color="#FFFFFF" stop-opacity="0.1" /></linearGradient></defs></svg>`,
  twitter: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" rx="45" fill="url(#ios-bg-twitter)" /><rect x="2" y="2" width="196" height="196" rx="43" stroke="url(#ios-glass-border-twitter)" stroke-width="4" opacity="0.3" /><path d="M135 60L80 130H65L110 60H135Z M65 60L135 140H150L80 60H65Z" fill="#FFFFFF" /><defs><linearGradient id="ios-bg-twitter" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse"><stop stop-color="#1F2937" /><stop offset="1" stop-color="#000000" /></linearGradient><linearGradient id="ios-glass-border-twitter" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse"><stop stop-color="#FFFFFF" stop-opacity="0.4" /><stop offset="1" stop-color="#FFFFFF" stop-opacity="0.05" /></linearGradient></defs></svg>`,
  instagram: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" rx="45" fill="url(#ios-bg-instagram)" /><rect x="2" y="2" width="196" height="196" rx="43" stroke="url(#ios-glass-border-instagram)" stroke-width="4" opacity="0.3" /><rect x="45" y="45" width="110" height="110" rx="30" fill="none" stroke="#FFFFFF" stroke-width="12" /><circle cx="100" cy="100" r="25" fill="none" stroke="#FFFFFF" stroke-width="12" /><circle cx="130" cy="70" r="6" fill="#FFFFFF" /><defs><linearGradient id="ios-bg-instagram" x1="0" y1="200" x2="200" y2="0" gradientUnits="userSpaceOnUse"><stop stop-color="#FCAF45" /><stop offset="0.3" stop-color="#F56040" /><stop offset="0.7" stop-color="#C13584" /><stop offset="1" stop-color="#405DE6" /></linearGradient><linearGradient id="ios-glass-border-instagram" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse"><stop stop-color="#FFFFFF" stop-opacity="0.8" /><stop offset="1" stop-color="#FFFFFF" stop-opacity="0.1" /></linearGradient></defs></svg>`,
  whatsapp: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" rx="45" fill="url(#ios-bg-whatsapp)" /><rect x="2" y="2" width="196" height="196" rx="43" stroke="url(#ios-glass-border-whatsapp)" stroke-width="4" opacity="0.3" /><path d="M40 100 C40 65 65 40 100 40 C135 40 160 65 160 100 C160 135 135 160 100 160 C80 160 60 150 50 140 C45 150 40 160 30 165 C35 155 40 145 40 135 C35 125 40 115 40 100Z" fill="white" /><path d="M80 80 C85 75 90 85 95 90 C100 95 110 90 115 85 C120 80 125 85 125 90 C125 100 115 120 100 120 C80 120 70 100 70 90 C70 85 75 80 80 80Z" fill="url(#ios-bg-whatsapp)" /><defs><linearGradient id="ios-bg-whatsapp" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse"><stop stop-color="#4ADE80" /><stop offset="1" stop-color="#16A34A" /></linearGradient><linearGradient id="ios-glass-border-whatsapp" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse"><stop stop-color="#FFFFFF" stop-opacity="0.8" /><stop offset="1" stop-color="#FFFFFF" stop-opacity="0.1" /></linearGradient></defs></svg>`,
  discord: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" rx="45" fill="url(#ios-bg-discord)" /><rect x="2" y="2" width="196" height="196" rx="43" stroke="url(#ios-glass-border-discord)" stroke-width="4" opacity="0.3" /><path d="M140 60 C140 60 120 50 100 50 C80 50 60 60 60 60 C50 80 40 110 40 130 C50 150 70 150 70 150 L80 135 C65 130 65 130 65 130 C90 145 110 145 135 130 C135 130 135 130 120 135 L130 150 C130 150 150 150 160 130 C160 110 150 80 140 60Z" fill="white" /><circle cx="85" cy="100" r="10" fill="url(#ios-bg-discord)" /><circle cx="115" cy="100" r="10" fill="url(#ios-bg-discord)" /><defs><linearGradient id="ios-bg-discord" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse"><stop stop-color="#818CF8" /><stop offset="1" stop-color="#4F46E5" /></linearGradient><linearGradient id="ios-glass-border-discord" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse"><stop stop-color="#FFFFFF" stop-opacity="0.8" /><stop offset="1" stop-color="#FFFFFF" stop-opacity="0.1" /></linearGradient></defs></svg>`,
  youtube: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" rx="45" fill="url(#ios-bg-youtube)" /><rect x="2" y="2" width="196" height="196" rx="43" stroke="url(#ios-glass-border-youtube)" stroke-width="4" opacity="0.3" /><rect x="35" y="60" width="130" height="80" rx="20" fill="white" /><path d="M90 85 V115 L120 100 Z" fill="url(#ios-bg-youtube)" /><defs><linearGradient id="ios-bg-youtube" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse"><stop stop-color="#EF4444" /><stop offset="1" stop-color="#B91C1C" /></linearGradient><linearGradient id="ios-glass-border-youtube" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse"><stop stop-color="#FFFFFF" stop-opacity="0.8" /><stop offset="1" stop-color="#FFFFFF" stop-opacity="0.1" /></linearGradient></defs></svg>`,
  tiktok: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" rx="45" fill="#000" /><rect x="2" y="2" width="196" height="196" rx="43" stroke="url(#ios-glass-border-tiktok)" stroke-width="4" opacity="0.3" /><path d="M120 40V120C120 140 100 150 85 145C70 135 70 115 80 105C90 95 100 100 100 100 V70C90 70 70 75 60 90 M120 70C130 80 145 80 150 80V50C135 50 125 45 120 40Z" fill="white" filter="drop-shadow(3px 3px 0 #FF0050) drop-shadow(-3px -3px 0 #00F2FE)" /><defs><linearGradient id="ios-glass-border-tiktok" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse"><stop stop-color="#FFFFFF" stop-opacity="0.4" /><stop offset="1" stop-color="#FFFFFF" stop-opacity="0.05" /></linearGradient></defs></svg>`,
  tinder: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" rx="45" fill="white" /><rect x="2" y="2" width="196" height="196" rx="43" stroke="url(#ios-glass-border-tinder)" stroke-width="4" opacity="0.3" /><path d="M100 45 C80 80 40 100 50 140 C60 175 110 175 140 150 C165 130 150 80 135 70 C135 70 150 95 125 120 C105 140 80 130 85 110 C90 90 100 45 100 45Z" fill="url(#ios-tinder-flame)" /><defs><linearGradient id="ios-tinder-flame" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse"><stop stop-color="#FD297B" /><stop offset="0.5" stop-color="#FF655B" /><stop offset="1" stop-color="#FF5864" /></linearGradient><linearGradient id="ios-glass-border-tinder" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse"><stop stop-color="#FFFFFF" stop-opacity="0.8" /><stop offset="1" stop-color="#FFFFFF" stop-opacity="0.1" /></linearGradient></defs></svg>`,
  uber: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" rx="45" fill="black" /><rect x="2" y="2" width="196" height="196" rx="43" stroke="url(#ios-glass-border-uber)" stroke-width="4" opacity="0.3" /><circle cx="100" cy="100" r="50" fill="white" /><rect x="115" y="85" width="40" height="30" rx="5" fill="black" /><circle cx="100" cy="100" r="20" fill="black" /><path d="M100 95 L115 95 V105 L100 105 Z" fill="black" /><defs><linearGradient id="ios-glass-border-uber" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse"><stop stop-color="#FFFFFF" stop-opacity="0.4" /><stop offset="1" stop-color="#FFFFFF" stop-opacity="0.05" /></linearGradient></defs></svg>`,
  phone: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" rx="45" fill="url(#ios-bg-phone)" /><rect x="2" y="2" width="196" height="196" rx="43" stroke="url(#ios-glass-border-phone)" stroke-width="4" opacity="0.3" /><path d="M125 60 C135 70 145 80 145 90 C145 105 130 115 110 135 C90 155 80 170 65 170 C55 170 45 160 35 150 C25 140 25 130 35 120 L50 105 C60 95 70 95 80 105 L85 110 C95 105 105 95 110 85 L105 80 C95 70 95 60 105 50 L120 35 C130 25 140 25 150 35 Z" fill="#FFFFFF" transform="translate(15, -10)" /><defs><linearGradient id="ios-bg-phone" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse"><stop stop-color="#4ADE80" /><stop offset="1" stop-color="#16A34A" /></linearGradient><linearGradient id="ios-glass-border-phone" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse"><stop stop-color="#FFFFFF" stop-opacity="0.8" /><stop offset="1" stop-color="#FFFFFF" stop-opacity="0.1" /></linearGradient></defs></svg>`,
  mail: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" rx="45" fill="url(#ios-bg-mail)" /><rect x="2" y="2" width="196" height="196" rx="43" stroke="url(#ios-glass-border-mail)" stroke-width="4" opacity="0.3" /><path d="M30 60 H170 V140 C170 150 160 160 150 160 H50 C40 160 30 150 30 140 V60 Z" fill="white" /><path d="M30 60 L100 110 L170 60" stroke="url(#ios-bg-mail)" stroke-width="8" stroke-linecap="round" fill="none" /><defs><linearGradient id="ios-bg-mail" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse"><stop stop-color="#60A5FA" /><stop offset="1" stop-color="#2563EB" /></linearGradient><linearGradient id="ios-glass-border-mail" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse"><stop stop-color="#FFFFFF" stop-opacity="0.8" /><stop offset="1" stop-color="#FFFFFF" stop-opacity="0.1" /></linearGradient></defs></svg>`,
  garage: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" rx="45" fill="url(#ios-bg-garage)" /><rect x="2" y="2" width="196" height="196" rx="43" stroke="url(#ios-glass-border-garage)" stroke-width="4" opacity="0.3" /><path d="M40 100 L100 60 L160 100 V150 H40 Z" fill="white" /><rect x="65" y="110" width="70" height="40" fill="url(#ios-bg-garage)" /><path d="M65 110 H135 M65 120 H135 M65 130 H135 M65 140 H135" stroke="white" stroke-width="4" opacity="0.8" /><defs><linearGradient id="ios-bg-garage" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse"><stop stop-color="#9CA3AF" /><stop offset="1" stop-color="#4B5563" /></linearGradient><linearGradient id="ios-glass-border-garage" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse"><stop stop-color="#FFFFFF" stop-opacity="0.8" /><stop offset="1" stop-color="#FFFFFF" stop-opacity="0.1" /></linearGradient></defs></svg>`,
  darkchat: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" rx="45" fill="black" /><rect x="2" y="2" width="196" height="196" rx="43" stroke="url(#ios-glass-border-darkchat)" stroke-width="4" opacity="0.3" /><path d="M40 100 C40 65 65 40 100 40 C135 40 160 65 160 100 C160 135 135 160 100 160 C85 160 65 170 45 175 C50 160 45 150 42 140 C40 130 40 115 40 100Z" fill="#1F2937" /><circle cx="70" cy="100" r="12" fill="#9CA3AF" /><circle cx="100" cy="100" r="12" fill="#9CA3AF" /><circle cx="130" cy="100" r="12" fill="#9CA3AF" /><defs><linearGradient id="ios-glass-border-darkchat" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse"><stop stop-color="#FFFFFF" stop-opacity="0.4" /><stop offset="1" stop-color="#FFFFFF" stop-opacity="0.05" /></linearGradient></defs></svg>`
};

const PLACEHOLDER = `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" rx="45" fill="#3B82F6"/><circle cx="100" cy="100" r="40" fill="white"/></svg>`;

export function IOSEngine({ icon }) {
  const svgString = IOS_SVG_DICTIONARY[icon] || PLACEHOLDER;
  return (
    <div
      className="w-full h-full"
      dangerouslySetInnerHTML={{ __html: svgString }}
    />
  );
}

IOSEngine.getRawSVG = (icon) => {
  return IOS_SVG_DICTIONARY[icon] || PLACEHOLDER;
};
