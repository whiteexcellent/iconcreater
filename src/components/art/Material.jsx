import React from 'react';

// ============================================================================
// MATERIAL ART ENGINE - 100% CUSTOM SVG PATHS
// Google Material Design 3, yuvarlak, organik formlar
// ============================================================================

const MATERIAL_ICONS = {
    phone: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="20" y="8" width="24" height="48" rx="5" />
            <circle cx="32" cy="50" r="2.5" fill={c} />
            <path d="M28,13 H36" />
        </g>
    ),

    messages: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10,14 Q10,10 14,10 H50 Q54,10 54,14 V38 Q54,42 50,42 H26 L16,52 V42 H14 Q10,42 10,38 Z" />
            <circle cx="24" cy="26" r="2" fill={c} />
            <circle cx="32" cy="26" r="2" fill={c} />
            <circle cx="40" cy="26" r="2" fill={c} />
        </g>
    ),

    contacts: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="32" cy="22" r="11" />
            <path d="M12,56 Q12,40 32,40 Q52,40 52,56" />
        </g>
    ),

    email: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="8" y="16" width="48" height="32" rx="4" />
            <path d="M8,20 L32,36 L56,20" />
        </g>
    ),

    camera: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="8" y="20" width="48" height="32" rx="6" />
            <circle cx="32" cy="36" r="10" />
            <circle cx="32" cy="36" r="4" fill={c} />
            <path d="M24,14 Q28,10 32,10 Q36,10 40,14 L44,20" />
        </g>
    ),

    gallery: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="8" y="14" width="48" height="36" rx="4" />
            <circle cx="20" cy="26" r="5" fill={c} />
            <path d="M8,44 Q20,30 32,42 Q44,28 56,38" />
        </g>
    ),

    video: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="8" y="20" width="32" height="24" rx="4" />
            <path d="M40,28 Q54,18 54,32 Q54,46 40,36" fill={c} />
        </g>
    ),

    music: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="20" cy="46" r="9" />
            <circle cx="44" cy="42" r="9" />
            <path d="M29,46 V18 Q42,14 53,14 V42" />
        </g>
    ),

    spotify: (c) => (
        <g fill="none" stroke={c} strokeWidth="3" strokeLinecap="round">
            <circle cx="32" cy="32" r="24" />
            <path d="M18,26 Q32,20 46,28" />
            <path d="M20,36 Q32,30 44,38" />
            <path d="M22,46 Q32,40 42,48" />
        </g>
    ),

    maps: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M32,58 Q30,56 14,38 Q8,28 14,18 Q22,8 32,8 Q42,8 50,18 Q56,28 50,38 Q34,56 32,58 Z" />
            <circle cx="32" cy="26" r="8" fill={c} />
        </g>
    ),

    gps: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round">
            <circle cx="32" cy="32" r="22" />
            <circle cx="32" cy="32" r="8" fill={c} />
            <path d="M32,6 V14 M32,50 V58 M6,32 H14 M50,32 H58" />
        </g>
    ),

    calendar: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="10" y="14" width="44" height="42" rx="4" />
            <path d="M10,28 H54" />
            <path d="M22,8 V18 M42,8 V18" />
            <rect x="18" y="36" width="10" height="10" rx="3" fill={c} />
        </g>
    ),

    clock: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="32" cy="32" r="24" />
            <path d="M32,18 V32 L42,42" />
            <circle cx="32" cy="32" r="3" fill={c} />
        </g>
    ),

    calculator: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="12" y="8" width="40" height="48" rx="4" />
            <rect x="18" y="14" width="28" height="12" rx="2" fill={c} />
            <circle cx="22" cy="36" r="4" />
            <circle cx="32" cy="36" r="4" fill={c} />
            <circle cx="42" cy="36" r="4" />
            <circle cx="22" cy="48" r="4" />
            <circle cx="32" cy="48" r="4" />
            <circle cx="42" cy="48" r="4" />
        </g>
    ),

    flashlight: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M24,8 H40 Q46,18 46,28 V36 H18 V28 Q18,18 24,8 Z" />
            <rect x="18" y="36" width="28" height="20" rx="4" fill={c} />
            <circle cx="32" cy="24" r="6" fill={c} />
        </g>
    ),

    weather: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round">
            <circle cx="26" cy="26" r="12" />
            <path d="M26,10 V6 M26,46 V42 M10,26 H6 M46,26 H42" />
            <path d="M38,44 Q52,38 56,46 Q62,54 54,58 H24 Q16,52 30,46 Q38,42 38,44 Z" fill={c} />
        </g>
    ),

    settings: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5">
            <circle cx="32" cy="32" r="10" />
            <path d="M32,8 V16 M32,48 V56 M8,32 H16 M48,32 H56" />
            <path d="M15,15 L21,21 M43,43 L49,49 M15,49 L21,43 M43,21 L49,15" />
        </g>
    ),

    notifications: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M26,54 Q26,60 32,60 Q38,60 38,54" />
            <path d="M14,48 H50 L46,38 V26 Q46,12 32,10 Q18,12 18,26 V38 Z" />
            <circle cx="32" cy="6" r="3" fill={c} />
        </g>
    ),

    games: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="6" y="18" width="52" height="32" rx="10" />
            <path d="M18,28 V40 M14,34 H22" />
            <circle cx="42" cy="30" r="4" fill={c} />
            <circle cx="50" cy="38" r="4" fill={c} />
        </g>
    ),

    casino: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5">
            <rect x="10" y="10" width="20" height="20" rx="4" transform="rotate(10 20 20)" />
            <rect x="34" y="34" width="20" height="20" rx="4" transform="rotate(-10 44 44)" />
            <circle cx="20" cy="20" r="3" fill={c} />
            <circle cx="40" cy="40" r="3" fill={c} />
            <circle cx="48" cy="48" r="3" fill={c} />
        </g>
    ),

    bank: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8,26 L32,10 L56,26" />
            <rect x="8" y="26" width="48" height="4" rx="1" fill={c} />
            <rect x="8" y="48" width="48" height="8" rx="1" fill={c} />
            <path d="M16,30 V48 M28,30 V48 M36,30 V48 M48,30 V48" />
        </g>
    ),

    taxi: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10,40 Q14,28 20,26 H44 Q50,28 54,40" />
            <rect x="8" y="40" width="48" height="10" rx="4" />
            <circle cx="18" cy="54" r="6" fill={c} />
            <circle cx="46" cy="54" r="6" fill={c} />
            <rect x="26" y="18" width="12" height="8" rx="2" fill={c} />
        </g>
    ),

    home: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8,34 Q20,18 32,12 Q44,18 56,34" />
            <path d="M14,30 V54 H50 V30" />
            <rect x="26" y="40" width="12" height="14" rx="2" fill={c} />
        </g>
    ),

    food: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18,8 V32 Q18,42 28,42 V56" />
            <path d="M18,20 H28" />
            <path d="M44,8 Q56,20 56,34 V56" />
            <path d="M44,34 H56" />
        </g>
    ),

    electrician: (c) => (
        <g fill={c}>
            <path d="M38,4 Q40,4 36,18 H44 Q42,32 24,58 Q22,60 26,46 H18 Q20,32 38,4 Z" />
        </g>
    ),

    mechanic: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20,12 L12,20 L28,36 L12,52 L20,60 L36,44 L52,60 L60,52 L44,36 L60,20 L52,12 L36,28 Z" />
            <circle cx="36" cy="36" r="6" fill={c} />
        </g>
    ),

    market: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8,14 H16 Q22,30 26,48 H56" />
            <circle cx="30" cy="56" r="5" fill={c} />
            <circle cx="50" cy="56" r="5" fill={c} />
            <path d="M20,24 H56 Q54,42 50,42 H26" />
        </g>
    ),

    shop247: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="10" y="20" width="44" height="36" rx="4" />
            <path d="M10,30 H54" />
            <path d="M10,20 Q20,8 32,8 Q44,8 54,20" />
            <rect x="26" y="38" width="12" height="18" rx="2" fill={c} />
        </g>
    ),

    business: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="10" y="24" width="44" height="32" rx="4" />
            <path d="M24,24 V16 Q24,10 32,10 Q40,10 40,16 V24" />
            <rect x="28" y="36" width="8" height="6" rx="2" fill={c} />
        </g>
    ),

    browser: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5">
            <circle cx="32" cy="32" r="24" />
            <ellipse cx="32" cy="32" rx="10" ry="24" />
            <path d="M8,32 H56" />
            <path d="M12,20 H52 M12,44 H52" />
        </g>
    ),

    hospital: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="12" y="12" width="40" height="40" rx="10" />
            <path d="M32,22 V42 M22,32 H42" strokeWidth="4" />
        </g>
    ),

    police: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M32,8 Q56,18 56,24 V44 L32,58 L8,44 V24 Q8,18 32,8 Z" />
            <path d="M32,22 L40,30 L38,40 L32,44 L26,40 L24,30 Z" fill={c} />
        </g>
    ),

    gang: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5">
            <circle cx="32" cy="24" r="16" />
            <ellipse cx="26" cy="22" rx="4" ry="5" fill={c} />
            <ellipse cx="38" cy="22" rx="4" ry="5" fill={c} />
            <path d="M24,34 Q32,42 40,34" />
            <path d="M18,48 Q26,38 32,46 Q38,38 46,48" />
        </g>
    ),
};

export default function MaterialArt({ icon, colors, size, uid, showBackground = false }) {
    const iconId = icon.id;
    const IconPath = MATERIAL_ICONS[iconId];

    if (!IconPath) {
        return (
            <svg viewBox="0 0 64 64" width={size} height={size}>
                <circle cx="32" cy="32" r="24" fill="none" stroke={colors.primary} strokeWidth="2.5" />
            </svg>
        );
    }

    return (
        <svg viewBox="0 0 64 64" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
            {showBackground && (
                <rect width="64" height="64" rx="16" fill={colors.bg} />
            )}
            {IconPath(colors.primary)}
        </svg>
    );
}
