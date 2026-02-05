import React from 'react';

// ============================================================================
// CLOUD ART ENGINE - 100% CUSTOM SVG PATHS
// Yumuşak, bulutsu, neumorphism hissi veren ikonlar
// ============================================================================

const CLOUD_ICONS = {
    phone: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="20" y="8" width="24" height="48" rx="5" />
            <circle cx="32" cy="50" r="2" fill={c} />
            <path d="M28,12 H36" />
        </g>
    ),

    messages: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10,14 Q10,10 14,10 H50 Q54,10 54,14 V38 Q54,42 50,42 H26 L16,52 V42 H14 Q10,42 10,38 Z" />
        </g>
    ),

    contacts: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="32" cy="22" r="10" />
            <path d="M14,54 Q14,40 32,40 Q50,40 50,54" />
        </g>
    ),

    email: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="8" y="16" width="48" height="32" rx="4" />
            <path d="M8,20 L32,36 L56,20" />
        </g>
    ),

    camera: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="8" y="20" width="48" height="32" rx="6" />
            <circle cx="32" cy="36" r="8" />
            <circle cx="32" cy="36" r="3" fill={c} />
            <path d="M24,14 H40 L44,20" />
        </g>
    ),

    gallery: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="8" y="14" width="48" height="36" rx="4" />
            <circle cx="20" cy="26" r="4" fill={c} />
            <path d="M8,44 L20,32 L32,42 L44,30 L56,38" />
        </g>
    ),

    video: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="8" y="20" width="32" height="24" rx="4" />
            <path d="M40,28 L54,20 V44 L40,36" fill={c} />
        </g>
    ),

    music: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="20" cy="46" r="8" />
            <circle cx="44" cy="42" r="8" />
            <path d="M28,46 V18 L52,14 V42" />
        </g>
    ),

    spotify: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round">
            <circle cx="32" cy="32" r="22" />
            <path d="M18,26 Q32,22 46,28" />
            <path d="M20,34 Q32,30 44,36" />
            <path d="M22,42 Q32,38 42,44" />
        </g>
    ),

    maps: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M32,54 C32,54 14,38 14,26 A18,18 0 1,1 50,26 C50,38 32,54 32,54 Z" />
            <circle cx="32" cy="26" r="6" fill={c} />
        </g>
    ),

    gps: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="round">
            <circle cx="32" cy="32" r="20" />
            <circle cx="32" cy="32" r="6" fill={c} />
            <path d="M32,8 V14 M32,50 V56 M8,32 H14 M50,32 H56" />
        </g>
    ),

    calendar: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="12" y="16" width="40" height="38" rx="4" />
            <path d="M12,28 H52" />
            <path d="M22,10 V20 M42,10 V20" />
            <rect x="20" y="36" width="8" height="8" rx="2" fill={c} />
        </g>
    ),

    clock: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="32" cy="32" r="22" />
            <path d="M32,18 V32 L40,40" />
            <circle cx="32" cy="32" r="2" fill={c} />
        </g>
    ),

    calculator: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="14" y="10" width="36" height="44" rx="4" />
            <rect x="20" y="16" width="24" height="10" rx="2" fill={c} />
            <circle cx="24" cy="36" r="3" />
            <circle cx="32" cy="36" r="3" fill={c} />
            <circle cx="40" cy="36" r="3" />
            <circle cx="24" cy="46" r="3" />
            <circle cx="32" cy="46" r="3" />
            <circle cx="40" cy="46" r="3" />
        </g>
    ),

    flashlight: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M24,10 H40 L44,24 V34 H20 V24 Z" />
            <rect x="20" y="34" width="24" height="20" rx="3" fill={c} />
            <circle cx="32" cy="24" r="5" fill={c} />
        </g>
    ),

    weather: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="round">
            <circle cx="26" cy="26" r="10" />
            <path d="M26,12 V8 M26,44 V40 M12,26 H8 M44,26 H40" />
            <path d="M36,42 Q48,38 52,44 Q58,50 52,54 H24 Q18,48 28,44 Z" fill={c} />
        </g>
    ),

    settings: (c) => (
        <g fill="none" stroke={c} strokeWidth="2">
            <circle cx="32" cy="32" r="8" />
            <path d="M32,10 V16 M32,48 V54 M10,32 H16 M48,32 H54" />
            <path d="M16,16 L21,21 M43,43 L48,48 M16,48 L21,43 M43,21 L48,16" />
        </g>
    ),

    notifications: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M26,52 Q26,58 32,58 Q38,58 38,52" />
            <path d="M16,48 H48 L44,38 V28 Q44,16 32,14 Q20,16 20,28 V38 Z" />
            <circle cx="32" cy="10" r="2" fill={c} />
        </g>
    ),

    games: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="8" y="20" width="48" height="28" rx="6" />
            <path d="M18,28 V40 M14,34 H22" />
            <circle cx="42" cy="30" r="3" fill={c} />
            <circle cx="48" cy="36" r="3" fill={c} />
        </g>
    ),

    casino: (c) => (
        <g fill="none" stroke={c} strokeWidth="2">
            <rect x="12" y="12" width="18" height="18" rx="3" transform="rotate(8 21 21)" />
            <rect x="34" y="34" width="18" height="18" rx="3" transform="rotate(-8 43 43)" />
            <circle cx="21" cy="21" r="2" fill={c} />
            <circle cx="40" cy="40" r="2" fill={c} />
            <circle cx="46" cy="46" r="2" fill={c} />
        </g>
    ),

    bank: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10,26 L32,12 L54,26" />
            <rect x="10" y="26" width="44" height="4" rx="1" fill={c} />
            <rect x="10" y="48" width="44" height="6" rx="1" fill={c} />
            <path d="M18,30 V48 M28,30 V48 M36,30 V48 M46,30 V48" />
        </g>
    ),

    taxi: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12,38 L20,26 H44 L52,38" />
            <rect x="10" y="38" width="44" height="10" rx="3" />
            <circle cx="18" cy="52" r="5" fill={c} />
            <circle cx="46" cy="52" r="5" fill={c} />
            <rect x="26" y="20" width="12" height="6" rx="1" fill={c} />
        </g>
    ),

    home: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10,34 L32,14 L54,34" />
            <path d="M16,30 V52 H48 V30" />
            <rect x="28" y="40" width="8" height="12" rx="1" fill={c} />
        </g>
    ),

    food: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20,10 V30 Q20,38 28,38 V54" />
            <path d="M20,20 H28" />
            <path d="M44,10 Q52,18 52,30 V54" />
            <path d="M44,30 H52" />
        </g>
    ),

    electrician: (c) => (
        <g fill={c}>
            <path d="M36,6 L20,30 H28 L24,58 L48,28 H38 Z" />
        </g>
    ),

    mechanic: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20,14 L14,20 L28,34 L14,48 L20,54 L34,40 L48,54 L54,48 L40,34 L54,20 L48,14 L34,28 Z" />
            <circle cx="34" cy="34" r="5" fill={c} />
        </g>
    ),

    market: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10,16 H18 L26,46 H54" />
            <circle cx="30" cy="54" r="4" fill={c} />
            <circle cx="48" cy="54" r="4" fill={c} />
            <path d="M22,24 H54 L50,42 H26" />
        </g>
    ),

    shop247: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="12" y="22" width="40" height="32" rx="4" />
            <path d="M12,30 H52" />
            <path d="M12,22 L22,10 H42 L52,22" />
            <rect x="28" y="38" width="8" height="16" rx="1" fill={c} />
        </g>
    ),

    business: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="12" y="24" width="40" height="30" rx="4" />
            <path d="M26,24 V18 Q26,14 32,14 Q38,14 38,18 V24" />
            <rect x="28" y="36" width="8" height="5" rx="1" fill={c} />
        </g>
    ),

    browser: (c) => (
        <g fill="none" stroke={c} strokeWidth="2">
            <circle cx="32" cy="32" r="22" />
            <ellipse cx="32" cy="32" rx="9" ry="22" />
            <path d="M10,32 H54" />
            <path d="M14,22 H50 M14,42 H50" />
        </g>
    ),

    hospital: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="14" y="14" width="36" height="36" rx="6" />
            <path d="M32,24 V40 M24,32 H40" strokeWidth="4" />
        </g>
    ),

    police: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M32,10 L52,22 V42 L32,54 L12,42 V22 Z" />
            <path d="M32,22 L38,28 L36,36 L32,40 L28,36 L26,28 Z" fill={c} />
        </g>
    ),

    gang: (c) => (
        <g fill="none" stroke={c} strokeWidth="2">
            <circle cx="32" cy="24" r="14" />
            <circle cx="26" cy="22" r="3" fill={c} />
            <circle cx="38" cy="22" r="3" fill={c} />
            <path d="M26,32 Q32,38 38,32" />
            <path d="M20,46 L28,38 M44,46 L36,38" />
        </g>
    ),
};

export default function CloudArt({ icon, colors, size, uid, showBackground = false }) {
    const iconId = icon.id;
    const IconPath = CLOUD_ICONS[iconId];

    if (!IconPath) {
        return (
            <svg viewBox="0 0 64 64" width={size} height={size}>
                <circle cx="32" cy="32" r="22" fill="none" stroke={colors.primary} strokeWidth="2" />
            </svg>
        );
    }

    return (
        <svg viewBox="0 0 64 64" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
            {showBackground && (
                <rect width="64" height="64" rx="12" fill={colors.bg} />
            )}
            {IconPath(colors.primary)}
        </svg>
    );
}
