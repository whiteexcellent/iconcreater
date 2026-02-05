import React from 'react';

// ============================================================================
// iOS ART ENGINE - 100% CUSTOM SVG PATHS (NO ICON LIBRARIES)
// Apple stilinde yuvarlak, minimalist, temiz ikonlar
// ============================================================================

const IOS_ICONS = {
    phone: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="20" y="8" width="24" height="48" rx="4" />
            <circle cx="32" cy="50" r="2" fill={c} />
            <path d="M28,12 H36" />
        </g>
    ),

    messages: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8,14 H56 V42 Q56,46 52,46 H20 L12,54 V46 H12 Q8,46 8,42 V18 Q8,14 12,14 Z" />
        </g>
    ),

    contacts: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="32" cy="22" r="10" />
            <path d="M12,54 Q12,38 32,38 Q52,38 52,54" />
        </g>
    ),

    email: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="8" y="14" width="48" height="36" rx="4" />
            <path d="M8,18 L32,34 L56,18" />
        </g>
    ),

    camera: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="6" y="18" width="52" height="36" rx="6" />
            <circle cx="32" cy="36" r="10" />
            <circle cx="32" cy="36" r="4" fill={c} />
            <path d="M22,12 L26,18 H38 L42,12" />
        </g>
    ),

    gallery: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="8" y="12" width="48" height="40" rx="4" />
            <circle cx="22" cy="26" r="5" fill={c} />
            <path d="M8,44 L22,32 L34,42 L46,30 L56,38" />
        </g>
    ),

    video: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="6" y="18" width="36" height="28" rx="4" />
            <path d="M42,28 L56,20 V44 L42,36" />
        </g>
    ),

    music: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="20" cy="46" r="8" />
            <circle cx="44" cy="42" r="8" />
            <path d="M28,46 V16 L52,12 V42" />
        </g>
    ),

    spotify: (c) => (
        <g fill="none" stroke={c} strokeWidth="3" strokeLinecap="round">
            <circle cx="32" cy="32" r="24" />
            <path d="M18,26 Q32,22 46,28" />
            <path d="M20,36 Q32,32 44,38" />
            <path d="M22,46 Q32,42 42,48" />
        </g>
    ),

    maps: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M32,56 C32,56 12,38 12,24 A20,20 0 1,1 52,24 C52,38 32,56 32,56 Z" />
            <circle cx="32" cy="24" r="6" fill={c} />
        </g>
    ),

    gps: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round">
            <circle cx="32" cy="32" r="22" />
            <circle cx="32" cy="32" r="6" fill={c} />
            <path d="M32,6 V14 M32,50 V58 M6,32 H14 M50,32 H58" />
        </g>
    ),

    calendar: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="10" y="14" width="44" height="42" rx="4" />
            <path d="M10,26 H54" />
            <path d="M20,8 V20 M44,8 V20" />
            <rect x="18" y="34" width="8" height="8" rx="2" fill={c} />
        </g>
    ),

    clock: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="32" cy="32" r="24" />
            <path d="M32,16 V32 L42,40" />
            <circle cx="32" cy="32" r="2" fill={c} />
        </g>
    ),

    calculator: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="12" y="8" width="40" height="48" rx="4" />
            <rect x="18" y="14" width="28" height="12" rx="2" fill={c} />
            <circle cx="22" cy="36" r="3" fill={c} />
            <circle cx="32" cy="36" r="3" fill={c} />
            <circle cx="42" cy="36" r="3" fill={c} />
            <circle cx="22" cy="48" r="3" fill={c} />
            <circle cx="32" cy="48" r="3" fill={c} />
            <circle cx="42" cy="48" r="3" fill={c} />
        </g>
    ),

    flashlight: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M24,8 H40 L44,24 V38 H20 V24 Z" />
            <rect x="20" y="38" width="24" height="18" rx="2" fill={c} />
            <circle cx="32" cy="26" r="6" fill={c} />
        </g>
    ),

    weather: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round">
            <circle cx="26" cy="26" r="10" />
            <path d="M26,12 V8 M26,44 V40 M12,26 H8 M44,26 H40" />
            <path d="M38,42 Q48,38 52,44 Q58,48 54,54 H24 Q20,48 28,44 Q34,40 38,42 Z" fill={c} />
        </g>
    ),

    settings: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="32" cy="32" r="8" />
            <path d="M32,8 V16 M32,48 V56 M8,32 H16 M48,32 H56" />
            <path d="M15,15 L21,21 M43,43 L49,49 M15,49 L21,43 M43,21 L49,15" />
        </g>
    ),

    notifications: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M24,52 Q24,58 32,58 Q40,58 40,52" />
            <path d="M14,46 H50 L46,38 V26 Q46,14 32,12 Q18,14 18,26 V38 Z" />
            <circle cx="32" cy="8" r="2" fill={c} />
        </g>
    ),

    games: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="6" y="18" width="52" height="32" rx="8" />
            <path d="M18,28 V40 M14,34 H22" />
            <circle cx="42" cy="30" r="3" fill={c} />
            <circle cx="50" cy="38" r="3" fill={c} />
        </g>
    ),

    casino: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="10" y="10" width="20" height="20" rx="3" />
            <rect x="34" y="34" width="20" height="20" rx="3" />
            <circle cx="20" cy="20" r="2" fill={c} />
            <circle cx="40" cy="40" r="2" fill={c} />
            <circle cx="48" cy="48" r="2" fill={c} />
        </g>
    ),

    bank: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8,24 L32,8 L56,24" />
            <path d="M12,24 V48 H52 V24" />
            <path d="M8,48 H56 V54 H8 Z" fill={c} />
            <path d="M20,28 V44 M32,28 V44 M44,28 V44" />
        </g>
    ),

    taxi: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10,38 L18,24 H46 L54,38" />
            <rect x="8" y="38" width="48" height="12" rx="2" />
            <circle cx="18" cy="54" r="4" fill={c} />
            <circle cx="46" cy="54" r="4" fill={c} />
            <rect x="26" y="18" width="12" height="6" rx="1" fill={c} />
        </g>
    ),

    home: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8,32 L32,12 L56,32" />
            <path d="M14,28 V54 H50 V28" />
            <rect x="26" y="38" width="12" height="16" fill={c} />
        </g>
    ),

    food: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18,8 V30 Q18,38 26,38 V56" />
            <path d="M18,18 H26" />
            <path d="M42,8 Q52,16 52,30 V56" />
            <path d="M42,30 H52" />
        </g>
    ),

    electrician: (c) => (
        <g fill={c}>
            <path d="M36,6 L18,30 H28 L22,58 L48,28 H36 Z" />
        </g>
    ),

    mechanic: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20,12 L12,20 L26,34 L12,48 L20,56 L34,42 L48,56 L56,48 L42,34 L56,20 L48,12 L34,26 Z" />
            <circle cx="34" cy="34" r="4" fill={c} />
        </g>
    ),

    market: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8,14 H16 L24,46 H54" />
            <circle cx="28" cy="54" r="4" fill={c} />
            <circle cx="48" cy="54" r="4" fill={c} />
            <path d="M20,22 H56 L52,42 H24" />
        </g>
    ),

    shop247: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="10" y="20" width="44" height="36" rx="4" />
            <path d="M10,28 H54" />
            <path d="M10,20 L20,8 H44 L54,20" />
            <rect x="26" y="36" width="12" height="20" fill={c} />
        </g>
    ),

    business: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="10" y="22" width="44" height="34" rx="4" />
            <path d="M24,22 V14 Q24,10 32,10 Q40,10 40,14 V22" />
            <rect x="28" y="34" width="8" height="6" rx="1" fill={c} />
        </g>
    ),

    browser: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round">
            <circle cx="32" cy="32" r="24" />
            <ellipse cx="32" cy="32" rx="10" ry="24" />
            <path d="M8,32 H56" />
            <path d="M12,20 H52 M12,44 H52" />
        </g>
    ),

    hospital: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="12" y="12" width="40" height="40" rx="8" />
            <path d="M32,22 V42 M22,32 H42" strokeWidth="4" />
        </g>
    ),

    police: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M32,8 L54,22 V42 L32,56 L10,42 V22 Z" />
            <path d="M32,20 L40,28 L38,38 L32,42 L26,38 L24,28 Z" fill={c} />
        </g>
    ),

    gang: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round">
            <circle cx="32" cy="24" r="16" />
            <circle cx="26" cy="22" r="3" fill={c} />
            <circle cx="38" cy="22" r="3" fill={c} />
            <path d="M24,32 Q32,38 40,32" />
            <path d="M18,44 L26,36 M46,44 L38,36" />
        </g>
    ),
};

export default function IOSArt({ icon, colors, size, uid, showBackground = false }) {
    const iconId = icon.id;
    const IconPath = IOS_ICONS[iconId];

    if (!IconPath) {
        return (
            <svg viewBox="0 0 64 64" width={size} height={size}>
                <circle cx="32" cy="32" r="24" fill="none" stroke={colors.primary} strokeWidth="2" />
            </svg>
        );
    }

    return (
        <svg viewBox="0 0 64 64" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
            {showBackground && (
                <rect width="64" height="64" rx="14" fill={colors.bg} />
            )}
            {IconPath(colors.primary)}
        </svg>
    );
}
