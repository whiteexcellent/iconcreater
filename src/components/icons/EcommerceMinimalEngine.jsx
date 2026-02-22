import React from 'react';

// E-Commerce Minimal Engine provides a Stripe/Vercel inspired pristine aesthetic
// Pure monochrome, extreme sharp precision, 1px sophisticated vector strokes.
export const ECOMMERCE_SVG_DICTIONARY = {
    phone: `
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="8" width="184" height="184" rx="20" fill="#ffffff" stroke="#e5e7eb" stroke-width="1" />
  <rect x="16" y="16" width="168" height="168" rx="16" fill="#f9fafb" />
  
  <path d="M 75 75 C 60 90 60 110 75 125 C 90 140 110 140 125 125 C 135 115 135 105 125 95 L 115 105 C 110 110 100 110 95 105 C 90 100 90 90 95 85 C 100 80 100 70 95 65 L 85 55 C 75 45 65 45 55 55 Z" fill="#111827" />
  <circle cx="55" cy="55" r="4" fill="#6366f1" />
</svg>`,
    messages: `
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="8" width="184" height="184" rx="20" fill="#ffffff" stroke="#e5e7eb" stroke-width="1" />
  <rect x="16" y="16" width="168" height="168" rx="16" fill="#f9fafb" />

  <path d="M 60 70 L 140 70 C 145.523 70 150 74.4772 150 80 L 150 110 C 150 115.523 145.523 120 140 120 L 95 120 L 60 145 L 60 120 C 54.4772 120 50 115.523 50 110 L 50 80 C 50 74.4772 54.4772 70 60 70 Z" fill="#111827" />
  <circle cx="60" cy="70" r="4" fill="#6366f1" />
</svg>`,
    contacts: `
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="8" width="184" height="184" rx="20" fill="#ffffff" stroke="#e5e7eb" stroke-width="1" />
  <rect x="16" y="16" width="168" height="168" rx="16" fill="#f9fafb" />

  <circle cx="100" cy="80" r="20" fill="#111827" />
  <path d="M 60 145 C 60 120 80 115 100 115 C 120 115 140 120 140 145" fill="none" stroke="#111827" stroke-width="12" stroke-linecap="round" />
  <circle cx="100" cy="80" r="4" fill="#ffffff" />
</svg>`,
    camera: `
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="8" width="184" height="184" rx="20" fill="#ffffff" stroke="#e5e7eb" stroke-width="1" />
  <rect x="16" y="16" width="168" height="168" rx="16" fill="#f9fafb" />

  <rect x="50" y="70" width="100" height="60" rx="8" fill="none" stroke="#111827" stroke-width="8" />
  <circle cx="100" cy="100" r="14" fill="#111827" />
  <rect x="70" y="55" width="30" height="15" fill="#111827" />
  <circle cx="125" cy="85" r="4" fill="#6366f1" />
</svg>`,
    maps: `
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="8" width="184" height="184" rx="20" fill="#ffffff" stroke="#e5e7eb" stroke-width="1" />
  <rect x="16" y="16" width="168" height="168" rx="16" fill="#f9fafb" />

  <path d="M 60 40 L 100 50 L 140 40 L 140 160 L 100 150 L 60 160 Z" fill="none" stroke="#e5e7eb" stroke-width="4" />
  <path d="M 100 50 L 100 150" stroke="#e5e7eb" stroke-width="4" />
  <path d="M 100 135 C 100 135 60 95 60 70 C 60 45 100 45 100 70 C 100 45 140 45 140 70 C 140 95 100 135 100 135 Z" fill="#111827" />
  <circle cx="100" cy="70" r="8" fill="#ffffff" />
  <circle cx="100" cy="70" r="3" fill="#6366f1" />
</svg>`
};

const EcommercePlaceholder = ({ id }) => (
    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="184" height="184" rx="20" fill="#ffffff" stroke="#e5e7eb" stroke-width="1" />
        <rect x="16" y="16" width="168" height="168" rx="16" fill="#f9fafb" />

        <text x="100" y="108" fill="#111827" font-family="'Inter', -apple-system, sans-serif" font-size="28" text-anchor="middle" font-weight="700" letter-spacing="-1">{id.substring(0, 3).toUpperCase()}</text>
        <circle cx="140" cy="85" r="4" fill="#6366f1" />
    </svg>
);

export const EcommerceMinimalEngine = {
    getRawSVG: (appId) => {
        if (ECOMMERCE_SVG_DICTIONARY[appId]) {
            return ECOMMERCE_SVG_DICTIONARY[appId];
        }
        return `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="8" y="8" width="184" height="184" rx="20" fill="#ffffff" stroke="#e5e7eb" stroke-width="1" />
            <rect x="16" y="16" width="168" height="168" rx="16" fill="#f9fafb" />
            
            <text x="100" y="108" fill="#111827" font-family="'Inter', -apple-system, sans-serif" font-size="28" text-anchor="middle" font-weight="700" letter-spacing="-1">${appId.substring(0, 3).toUpperCase()}</text>
            <circle cx="140" cy="85" r="4" fill="#6366f1" />
        </svg>`;
    }
};

export default function EcommerceMinimalEngineComponent({ icon }) {
    if (ECOMMERCE_SVG_DICTIONARY[icon]) {
        return <div dangerouslySetInnerHTML={{ __html: ECOMMERCE_SVG_DICTIONARY[icon] }} className="w-full h-full" />;
    }
    return <EcommercePlaceholder id={icon} />;
}
