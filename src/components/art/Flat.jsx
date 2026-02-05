import React from 'react';

// ============================================================================
// NEO BRUTALIST ART ENGINE - PROFESSIONAL SVG ICONS
// Reference: Swiss poster design, bold geometric shapes, thick consistent strokes
// ============================================================================

const FLAT_ICONS = {
    phone: (c) => (
        <g fill="none" stroke={c} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            {/* Phone handset - curved receiver style */}
            <path d="M12,8 Q8,8 8,14 V22 Q8,26 12,28 L18,32 Q22,34 26,32 L32,28 Q38,24 42,28 L48,32 Q52,34 56,32 L58,28 Q62,24 58,18 V14 Q58,8 54,8" />
            <path d="M16,14 Q14,14 14,18 V22 Q14,24 16,26" strokeWidth="2" />
            <path d="M48,14 Q50,14 50,18 V22 Q50,24 48,26" strokeWidth="2" />
            <circle cx="32" cy="40" r="8" />
            <circle cx="32" cy="40" r="3" fill={c} />
        </g>
    ),

    messages: (c) => (
        <g fill="none" stroke={c} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            {/* Speech bubble */}
            <path d="M10,10 H54 Q58,10 58,14 V38 Q58,42 54,42 H26 L14,54 V42 H10 Q6,42 6,38 V14 Q6,10 10,10 Z" />
            {/* Tail detail */}
            <path d="M14,42 L14,50 L22,42" fill={c} opacity="0.2" />
        </g>
    ),

    contacts: (c) => (
        <g fill="none" stroke={c} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            {/* Head circle */}
            <circle cx="32" cy="20" r="12" />
            {/* Body/shoulders */}
            <path d="M10,58 V50 Q10,36 32,36 Q54,36 54,50 V58" />
        </g>
    ),

    email: (c) => (
        <g fill="none" stroke={c} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            {/* Envelope body */}
            <rect x="6" y="14" width="52" height="36" rx="2" />
            {/* Envelope flap - V shape */}
            <path d="M6,16 L32,36 L58,16" />
        </g>
    ),

    camera: (c) => (
        <g fill="none" stroke={c} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            {/* Camera body */}
            <rect x="6" y="18" width="52" height="38" rx="4" />
            {/* Viewfinder bump */}
            <path d="M22,18 V10 H42 V18" />
            {/* Lens outer */}
            <circle cx="32" cy="38" r="12" />
            {/* Lens inner */}
            <circle cx="32" cy="38" r="6" />
            {/* Lens center dot */}
            <circle cx="32" cy="38" r="2" fill={c} />
            {/* Flash */}
            <circle cx="50" cy="26" r="3" fill={c} />
        </g>
    ),

    gallery: (c) => (
        <g fill="none" stroke={c} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            {/* Frame */}
            <rect x="6" y="10" width="52" height="44" rx="2" />
            {/* Sun */}
            <circle cx="20" cy="24" r="6" fill={c} />
            {/* Mountains */}
            <path d="M6,54 L22,34 L34,46 L46,28 L58,42 V54 H6 Z" fill={c} opacity="0.15" />
            <path d="M6,54 L22,34 L34,46 L46,28 L58,42" />
        </g>
    ),

    video: (c) => (
        <g fill="none" stroke={c} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            {/* Video screen */}
            <rect x="6" y="16" width="36" height="32" rx="3" />
            {/* Play/record button triangle */}
            <path d="M42,24 L58,16 V48 L42,40 Z" fill={c} />
        </g>
    ),

    music: (c) => (
        <g fill="none" stroke={c} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            {/* Double music note */}
            <circle cx="16" cy="48" r="8" fill={c} />
            <circle cx="48" cy="44" r="8" fill={c} />
            {/* Stems */}
            <path d="M24,48 V14" strokeWidth="4" />
            <path d="M56,44 V12" strokeWidth="4" />
            {/* Connecting beam */}
            <path d="M24,14 L56,10" strokeWidth="5" />
            <path d="M24,20 L56,16" strokeWidth="4" />
        </g>
    ),

    spotify: (c) => (
        <g fill="none" stroke={c} strokeWidth="3" strokeLinecap="round">
            {/* Circle */}
            <circle cx="32" cy="32" r="26" />
            {/* Sound waves - curved */}
            <path d="M16,24 Q32,18 48,26" strokeWidth="4" />
            <path d="M18,34 Q32,28 46,36" strokeWidth="4" />
            <path d="M20,44 Q32,38 44,46" strokeWidth="4" />
        </g>
    ),

    maps: (c) => (
        <g fill="none" stroke={c} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            {/* Location pin */}
            <path d="M32,58 L16,38 Q6,24 16,14 Q26,4 32,4 Q38,4 48,14 Q58,24 48,38 Z" />
            {/* Inner circle */}
            <circle cx="32" cy="24" r="8" fill={c} />
        </g>
    ),

    gps: (c) => (
        <g fill="none" stroke={c} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            {/* Outer ring */}
            <circle cx="32" cy="32" r="24" />
            {/* Crosshair lines */}
            <path d="M32,4 V16 M32,48 V60 M4,32 H16 M48,32 H60" strokeWidth="4" />
            {/* Center target */}
            <circle cx="32" cy="32" r="6" fill={c} />
        </g>
    ),

    calendar: (c) => (
        <g fill="none" stroke={c} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            {/* Calendar body */}
            <rect x="8" y="14" width="48" height="44" rx="3" />
            {/* Header line */}
            <path d="M8,28 H56" />
            {/* Hanging rings */}
            <path d="M20,6 V20" strokeWidth="4" />
            <path d="M44,6 V20" strokeWidth="4" />
            {/* Date grid - simplified */}
            <rect x="14" y="34" width="8" height="8" fill={c} />
            <rect x="28" y="34" width="8" height="8" strokeWidth="2" />
            <rect x="42" y="34" width="8" height="8" strokeWidth="2" />
            <rect x="14" y="46" width="8" height="8" strokeWidth="2" />
            <rect x="28" y="46" width="8" height="8" strokeWidth="2" />
        </g>
    ),

    clock: (c) => (
        <g fill="none" stroke={c} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            {/* Clock face */}
            <circle cx="32" cy="32" r="26" />
            {/* Hour hand */}
            <path d="M32,32 V18" strokeWidth="4" />
            {/* Minute hand */}
            <path d="M32,32 L46,32" strokeWidth="3" />
            {/* Center dot */}
            <circle cx="32" cy="32" r="3" fill={c} />
        </g>
    ),

    calculator: (c) => (
        <g fill="none" stroke={c} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            {/* Body */}
            <rect x="12" y="6" width="40" height="52" rx="3" />
            {/* Screen */}
            <rect x="16" y="10" width="32" height="14" fill={c} opacity="0.15" />
            {/* Buttons - grid pattern */}
            <rect x="16" y="28" width="8" height="6" fill={c} opacity="0.3" />
            <rect x="28" y="28" width="8" height="6" fill={c} opacity="0.3" />
            <rect x="40" y="28" width="8" height="6" fill={c} />
            <rect x="16" y="38" width="8" height="6" fill={c} opacity="0.3" />
            <rect x="28" y="38" width="8" height="6" fill={c} opacity="0.3" />
            <rect x="40" y="38" width="8" height="6" fill={c} />
            <rect x="16" y="48" width="20" height="6" fill={c} opacity="0.3" />
            <rect x="40" y="48" width="8" height="6" fill={c} />
        </g>
    ),

    flashlight: (c) => (
        <g fill="none" stroke={c} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            {/* Light head */}
            <path d="M20,8 L16,26 H48 L44,8 Z" />
            {/* Lens */}
            <ellipse cx="32" cy="12" rx="8" ry="4" strokeWidth="2" />
            {/* Body */}
            <rect x="16" y="26" width="32" height="30" fill={c} />
            {/* Switch */}
            <rect x="28" y="34" width="8" height="4" fill="white" opacity="0.5" />
        </g>
    ),

    weather: (c) => (
        <g fill="none" stroke={c} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            {/* Sun */}
            <circle cx="24" cy="22" r="10" fill={c} />
            {/* Sun rays */}
            <path d="M24,8 V4 M38,22 H42 M35,11 L38,8" strokeWidth="3" />
            {/* Cloud */}
            <path d="M22,50 Q14,46 16,38 Q18,30 28,32 Q34,26 44,30 Q54,32 54,42 Q56,50 48,52 H26 Q20,52 22,50 Z" fill={c} />
        </g>
    ),

    settings: (c) => (
        <g fill="none" stroke={c} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            {/* Gear with smooth teeth */}
            <path d="M28,6 H36 L38,12 L44,14 L50,10 L54,14 L50,20 L52,26 L58,28 V36 L52,38 L50,44 L54,50 L50,54 L44,50 L38,52 L36,58 H28 L26,52 L20,50 L14,54 L10,50 L14,44 L12,38 L6,36 V28 L12,26 L14,20 L10,14 L14,10 L20,14 L26,12 Z" />
            {/* Center circle */}
            <circle cx="32" cy="32" r="8" />
        </g>
    ),

    notifications: (c) => (
        <g fill="none" stroke={c} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            {/* Bell body */}
            <path d="M16,44 H48 L44,34 V26 Q44,12 32,10 Q20,12 20,26 V34 Z" />
            {/* Bell clapper */}
            <path d="M26,48 Q26,56 32,56 Q38,56 38,48" />
            {/* Top knob */}
            <circle cx="32" cy="8" r="3" fill={c} />
        </g>
    ),

    games: (c) => (
        <g fill="none" stroke={c} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            {/* Controller body */}
            <path d="M6,28 Q6,18 16,18 H48 Q58,18 58,28 V38 Q58,50 48,50 H40 Q36,50 36,44 V42 H28 V44 Q28,50 24,50 H16 Q6,50 6,38 Z" />
            {/* D-pad */}
            <path d="M18,30 V38 M14,34 H22" strokeWidth="4" />
            {/* Buttons */}
            <circle cx="44" cy="28" r="4" fill={c} />
            <circle cx="52" cy="36" r="4" />
        </g>
    ),

    casino: (c) => (
        <g fill="none" stroke={c} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            {/* Dice 1 */}
            <rect x="6" y="6" width="24" height="24" rx="4" />
            <circle cx="18" cy="18" r="3" fill={c} />
            {/* Dice 2 */}
            <rect x="34" y="34" width="24" height="24" rx="4" />
            <circle cx="42" cy="42" r="2.5" fill={c} />
            <circle cx="50" cy="42" r="2.5" fill={c} />
            <circle cx="42" cy="50" r="2.5" fill={c} />
            <circle cx="50" cy="50" r="2.5" fill={c} />
        </g>
    ),

    bank: (c) => (
        <g fill="none" stroke={c} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            {/* Roof triangle */}
            <path d="M8,24 L32,8 L56,24" strokeWidth="4" />
            {/* Top bar */}
            <rect x="8" y="24" width="48" height="4" fill={c} />
            {/* Pillars */}
            <path d="M16,28 V50 M28,28 V50 M36,28 V50 M48,28 V50" strokeWidth="4" />
            {/* Base */}
            <rect x="8" y="50" width="48" height="6" fill={c} />
        </g>
    ),

    taxi: (c) => (
        <g fill="none" stroke={c} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            {/* Car body outline */}
            <path d="M10,36 L18,22 H46 L54,36" />
            <rect x="6" y="36" width="52" height="14" rx="2" />
            {/* Taxi sign */}
            <rect x="26" y="14" width="12" height="8" rx="1" fill={c} />
            {/* Wheels */}
            <circle cx="18" cy="52" r="5" fill={c} />
            <circle cx="46" cy="52" r="5" fill={c} />
            {/* Windows */}
            <path d="M14,36 L20,24 H44 L50,36" fill={c} opacity="0.1" />
        </g>
    ),

    home: (c) => (
        <g fill="none" stroke={c} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            {/* Roof */}
            <path d="M6,32 L32,10 L58,32" strokeWidth="4" />
            {/* House body */}
            <path d="M14,30 V56 H50 V30" />
            {/* Door */}
            <rect x="26" y="40" width="12" height="16" fill={c} />
            {/* Door knob */}
            <circle cx="36" cy="48" r="1.5" fill="white" />
            {/* Window */}
            <rect x="38" y="40" width="8" height="8" />
        </g>
    ),

    food: (c) => (
        <g fill="none" stroke={c} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            {/* Fork */}
            <path d="M12,8 V20 M18,8 V20 M24,8 V20" strokeWidth="3" />
            <path d="M12,20 H24 Q24,30 18,32 V58" strokeWidth="3" />
            {/* Knife */}
            <path d="M46,8 Q56,18 56,32 V58" strokeWidth="4" />
            <path d="M46,8 V28" strokeWidth="2" />
        </g>
    ),

    electrician: (c) => (
        <g fill={c}>
            {/* Lightning bolt */}
            <path d="M36,4 L16,32 H28 L24,60 L50,28 H36 Z" />
        </g>
    ),

    mechanic: (c) => (
        <g fill="none" stroke={c} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            {/* Wrench X shape */}
            <path d="M18,10 L10,18 L26,34 L10,50 L18,58 L34,42 L50,58 L58,50 L42,34 L58,18 L50,10 L34,26 Z" />
            {/* Center bolt */}
            <circle cx="34" cy="34" r="6" fill={c} />
        </g>
    ),

    market: (c) => (
        <g fill="none" stroke={c} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            {/* Cart handle */}
            <path d="M8,12 H16 L24,44" strokeWidth="4" />
            {/* Cart basket */}
            <path d="M20,22 H56 L52,44 H24" />
            {/* Wheels */}
            <circle cx="30" cy="52" r="5" fill={c} />
            <circle cx="48" cy="52" r="5" fill={c} />
        </g>
    ),

    shop247: (c) => (
        <g fill="none" stroke={c} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            {/* Building */}
            <rect x="8" y="20" width="48" height="38" />
            {/* Roof */}
            <path d="M8,20 L20,8 H44 L56,20" />
            {/* Sign */}
            <rect x="8" y="20" width="48" height="10" fill={c} />
            {/* Door */}
            <rect x="24" y="38" width="16" height="20" fill={c} opacity="0.3" />
            {/* Windows */}
            <rect x="12" y="38" width="8" height="8" />
            <rect x="44" y="38" width="8" height="8" />
        </g>
    ),

    business: (c) => (
        <g fill="none" stroke={c} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            {/* Briefcase body */}
            <rect x="8" y="22" width="48" height="34" rx="3" />
            {/* Handle */}
            <path d="M24,22 V14 Q24,8 32,8 Q40,8 40,14 V22" />
            {/* Center lock */}
            <rect x="28" y="36" width="8" height="8" fill={c} />
        </g>
    ),

    browser: (c) => (
        <g fill="none" stroke={c} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            {/* Globe outer */}
            <circle cx="32" cy="32" r="26" />
            {/* Vertical ellipse */}
            <ellipse cx="32" cy="32" rx="10" ry="26" />
            {/* Horizontal line */}
            <path d="M6,32 H58" />
            {/* Latitude lines */}
            <path d="M10,20 H54 M10,44 H54" strokeWidth="2" opacity="0.5" />
        </g>
    ),

    hospital: (c) => (
        <g fill="none" stroke={c} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            {/* Building */}
            <rect x="10" y="10" width="44" height="44" rx="4" />
            {/* Cross - bold */}
            <path d="M32,18 V46 M18,32 H46" strokeWidth="6" />
        </g>
    ),

    police: (c) => (
        <g fill="none" stroke={c} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            {/* Shield */}
            <path d="M32,6 L54,18 V38 Q54,54 32,58 Q10,54 10,38 V18 Z" />
            {/* Star badge */}
            <path d="M32,22 L34,28 H40 L35,32 L37,38 L32,34 L27,38 L29,32 L24,28 H30 Z" fill={c} />
        </g>
    ),

    gang: (c) => (
        <g fill="none" stroke={c} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            {/* Skull outline */}
            <path d="M16,32 Q14,12 32,10 Q50,12 48,32 V40 Q48,48 40,48 L38,56 H26 L24,48 Q16,48 16,40 Z" />
            {/* Eye sockets */}
            <circle cx="24" cy="28" r="5" fill={c} />
            <circle cx="40" cy="28" r="5" fill={c} />
            {/* Nose hole */}
            <path d="M30,38 L32,42 L34,38" />
            {/* Teeth */}
            <path d="M26,56 V60 M32,56 V62 M38,56 V60" strokeWidth="3" />
        </g>
    ),
};

export default function FlatArt({ icon, colors, size, uid, showBackground = false }) {
    const iconId = icon.id;
    const IconPath = FLAT_ICONS[iconId];

    if (!IconPath) {
        return (
            <svg viewBox="0 0 64 64" width={size} height={size}>
                <rect x="10" y="10" width="44" height="44" fill="none" stroke={colors.primary} strokeWidth="3" rx="4" />
                <text x="32" y="36" textAnchor="middle" fill={colors.primary} fontSize="10">?</text>
            </svg>
        );
    }

    return (
        <svg viewBox="0 0 64 64" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
            {showBackground && (
                <rect width="64" height="64" fill={colors.bg} rx="12" />
            )}
            {IconPath(colors.primary)}
        </svg>
    );
}
