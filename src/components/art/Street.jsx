import React from 'react';

// ============================================================================
// STREET ART ENGINE - GRAFFITI SPRAY PAINT STYLE (Based on Generated Reference)
// Style: Dripping paint, bold strokes, urban aesthetic, rough edges
// ============================================================================

const STREET_ICONS = {
    phone: (c) => (
        <g fill="none" stroke={c} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            {/* Main body - rough strokes */}
            <path d="M18,6 H46 V58 H18 Z" />
            {/* Screen */}
            <rect x="22" y="14" width="20" height="32" fill={c} opacity="0.15" />
            {/* Speaker */}
            <path d="M28,10 H36" strokeWidth="3" />
            {/* Home button */}
            <circle cx="32" cy="52" r="3" fill={c} />
            {/* Drip effect */}
            <path d="M18,58 V62" strokeWidth="3" opacity="0.6" />
            <path d="M46,58 V66" strokeWidth="2" opacity="0.4" />
            {/* Spray dots */}
            <circle cx="12" cy="20" r="1.5" fill={c} opacity="0.3" />
            <circle cx="52" cy="36" r="2" fill={c} opacity="0.4" />
            <circle cx="10" cy="44" r="1" fill={c} opacity="0.2" />
        </g>
    ),

    messages: (c) => (
        <g fill="none" stroke={c} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            {/* Speech bubble - graffiti style */}
            <path d="M8,10 H54 V40 H26 L14,52 V40 H8 Z" />
            {/* Fill */}
            <path d="M10,12 H52 V38 H24 L14,48 V38 H10 Z" fill={c} opacity="0.1" />
            {/* Text lines */}
            <path d="M16,22 H48" strokeWidth="5" />
            <path d="M16,32 H38" strokeWidth="4" />
            {/* Drips */}
            <path d="M54,40 V48" strokeWidth="3" opacity="0.5" />
            <path d="M8,34 V42 Q8,46 6,48" strokeWidth="2" opacity="0.4" />
            {/* Splatter */}
            <circle cx="56" cy="14" r="2" fill={c} opacity="0.3" />
            <circle cx="4" cy="28" r="1.5" fill={c} opacity="0.4" />
        </g>
    ),

    contacts: (c) => (
        <g fill="none" stroke={c} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            {/* Head */}
            <circle cx="32" cy="20" r="14" />
            <circle cx="32" cy="20" r="10" fill={c} opacity="0.15" />
            {/* Eyes - street style */}
            <path d="M26,18 L28,22" strokeWidth="3" />
            <path d="M36,18 L38,22" strokeWidth="3" />
            {/* Mouth */}
            <path d="M28,26 Q32,30 36,26" strokeWidth="2" />
            {/* Body */}
            <path d="M12,58 V48 Q12,38 32,38 Q52,38 52,48 V58" />
            {/* Drips */}
            <path d="M12,58 V64" strokeWidth="2" opacity="0.5" />
            <path d="M52,58 V62" strokeWidth="3" opacity="0.4" />
            {/* Tag marks */}
            <path d="M8,24 L4,28" strokeWidth="2" opacity="0.3" />
            <path d="M56,24 L60,20" strokeWidth="2" opacity="0.3" />
        </g>
    ),

    email: (c) => (
        <g fill="none" stroke={c} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            {/* Envelope */}
            <rect x="6" y="14" width="52" height="36" rx="2" />
            <rect x="8" y="16" width="48" height="32" fill={c} opacity="0.1" />
            {/* Flap */}
            <path d="M6,16 L32,38 L58,16" />
            {/* Arrow indicator */}
            <path d="M46,32 L58,32 L52,26 M58,32 L52,38" strokeWidth="3" />
            {/* Drips */}
            <path d="M6,50 V58" strokeWidth="2" opacity="0.5" />
            <path d="M58,50 V54" strokeWidth="3" opacity="0.4" />
            {/* Splatter */}
            <circle cx="4" cy="20" r="1.5" fill={c} opacity="0.3" />
            <circle cx="60" cy="44" r="2" fill={c} opacity="0.4" />
        </g>
    ),

    camera: (c) => (
        <g fill="none" stroke={c} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            {/* Body */}
            <rect x="6" y="18" width="52" height="38" rx="4" />
            <rect x="8" y="20" width="48" height="34" fill={c} opacity="0.1" />
            {/* Viewfinder */}
            <path d="M22,18 V8 H42 V18" />
            {/* Lens */}
            <circle cx="32" cy="38" r="14" />
            <circle cx="32" cy="38" r="8" fill={c} opacity="0.2" />
            <circle cx="32" cy="38" r="4" fill={c} />
            {/* Flash */}
            <rect x="48" y="24" width="8" height="6" rx="1" fill={c} />
            {/* Drips */}
            <path d="M6,56 V62" strokeWidth="2" opacity="0.5" />
            <path d="M58,56 V60" strokeWidth="3" opacity="0.4" />
            {/* Splatter */}
            <circle cx="52" cy="10" r="2" fill={c} opacity="0.3" />
        </g>
    ),

    gallery: (c) => (
        <g fill="none" stroke={c} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            {/* Frame */}
            <rect x="6" y="10" width="52" height="44" rx="2" />
            {/* Inner */}
            <rect x="8" y="12" width="48" height="40" fill={c} opacity="0.08" />
            {/* Sun */}
            <circle cx="18" cy="24" r="7" fill={c} />
            {/* Mountains - graffiti style */}
            <path d="M6,54 L22,32 L34,44 L50,24 L58,38 V54 Z" fill={c} opacity="0.25" />
            <path d="M6,54 L22,32 L34,44 L50,24 L58,38" strokeWidth="3" />
            {/* Drips */}
            <path d="M6,54 V60" strokeWidth="2" opacity="0.5" />
            <path d="M58,54 V58" strokeWidth="3" opacity="0.4" />
        </g>
    ),

    video: (c) => (
        <g fill="none" stroke={c} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            {/* Screen */}
            <rect x="6" y="16" width="38" height="32" rx="3" />
            <rect x="8" y="18" width="34" height="28" fill={c} opacity="0.1" />
            {/* Lens part */}
            <path d="M44,24 L58,14 V50 L44,40" fill={c} />
            {/* REC dot */}
            <circle cx="52" cy="10" r="4" fill={c} />
            {/* Drips */}
            <path d="M6,48 V56" strokeWidth="2" opacity="0.5" />
            <path d="M44,48 V52" strokeWidth="3" opacity="0.4" />
        </g>
    ),

    music: (c) => (
        <g fill="none" stroke={c} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            {/* Notes */}
            <circle cx="16" cy="48" r="10" fill={c} />
            <circle cx="48" cy="44" r="10" fill={c} />
            {/* Stems */}
            <path d="M26,48 V14" strokeWidth="5" />
            <path d="M58,44 V10" strokeWidth="5" />
            {/* Beam */}
            <path d="M26,14 L58,8" strokeWidth="6" />
            <path d="M26,22 L58,16" strokeWidth="5" />
            {/* Drips from notes */}
            <path d="M10,54 V60" strokeWidth="2" opacity="0.5" />
            <path d="M22,54 V58" strokeWidth="2" opacity="0.4" />
            <path d="M54,50 V56" strokeWidth="2" opacity="0.5" />
            {/* Splatter */}
            <circle cx="32" cy="6" r="2" fill={c} opacity="0.3" />
        </g>
    ),

    spotify: (c) => (
        <g fill="none" stroke={c} strokeWidth="4" strokeLinecap="round">
            {/* Circle */}
            <circle cx="32" cy="32" r="26" />
            <circle cx="32" cy="32" r="24" fill={c} opacity="0.1" />
            {/* Sound waves - street style */}
            <path d="M14,22 Q32,14 50,24" strokeWidth="5" />
            <path d="M16,34 Q32,26 48,36" strokeWidth="5" />
            <path d="M18,46 Q32,38 46,48" strokeWidth="5" />
            {/* Drips */}
            <path d="M32,58 V64" strokeWidth="2" opacity="0.5" />
            <path d="M6,32 H2" strokeWidth="3" opacity="0.4" />
        </g>
    ),

    maps: (c) => (
        <g fill="none" stroke={c} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            {/* Pin shape */}
            <path d="M32,58 L16,38 Q6,24 16,14 Q26,4 32,4 Q38,4 48,14 Q58,24 48,38 Z" />
            <path d="M32,54 L18,36 Q10,24 18,16 Q28,8 32,8 Q36,8 46,16 Q54,24 46,36 Z" fill={c} opacity="0.15" />
            {/* Center */}
            <circle cx="32" cy="24" r="8" fill={c} />
            {/* Drips */}
            <path d="M32,58 V64" strokeWidth="3" opacity="0.6" />
            <path d="M16,38 V44 Q14,48 12,50" strokeWidth="2" opacity="0.4" />
            {/* Splatter */}
            <circle cx="52" cy="12" r="2" fill={c} opacity="0.3" />
            <circle cx="12" cy="26" r="1.5" fill={c} opacity="0.4" />
        </g>
    ),

    gps: (c) => (
        <g fill="none" stroke={c} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            {/* Circle */}
            <circle cx="32" cy="32" r="24" />
            {/* Crosshairs */}
            <path d="M32,4 V16" strokeWidth="5" />
            <path d="M32,48 V60" strokeWidth="5" />
            <path d="M4,32 H16" strokeWidth="5" />
            <path d="M48,32 H60" strokeWidth="5" />
            {/* Center target */}
            <circle cx="32" cy="32" r="6" fill={c} />
            {/* Drips */}
            <path d="M32,60 V66" strokeWidth="2" opacity="0.5" />
            <path d="M4,32 H0" strokeWidth="3" opacity="0.4" />
        </g>
    ),

    calendar: (c) => (
        <g fill="none" stroke={c} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            {/* Body */}
            <rect x="8" y="14" width="48" height="44" rx="3" />
            <rect x="10" y="16" width="44" height="40" fill={c} opacity="0.1" />
            {/* Header */}
            <path d="M8,28 H56" />
            {/* Rings */}
            <path d="M20,6 V20" strokeWidth="5" />
            <path d="M44,6 V20" strokeWidth="5" />
            {/* Date highlight */}
            <rect x="14" y="34" width="12" height="10" rx="2" fill={c} />
            {/* Other dates */}
            <rect x="30" y="34" width="8" height="8" strokeWidth="2" />
            <rect x="44" y="34" width="8" height="8" strokeWidth="2" />
            {/* Drips */}
            <path d="M8,58 V64" strokeWidth="2" opacity="0.5" />
            <path d="M20,6 V2" strokeWidth="3" opacity="0.4" />
        </g>
    ),

    clock: (c) => (
        <g fill="none" stroke={c} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            {/* Face */}
            <circle cx="32" cy="32" r="26" />
            <circle cx="32" cy="32" r="24" fill={c} opacity="0.1" />
            {/* Hour hand */}
            <path d="M32,32 V16" strokeWidth="5" />
            {/* Minute hand */}
            <path d="M32,32 L48,32" strokeWidth="4" />
            {/* Center */}
            <circle cx="32" cy="32" r="4" fill={c} />
            {/* Markers */}
            <circle cx="32" cy="10" r="2" fill={c} />
            <circle cx="54" cy="32" r="2" fill={c} />
            <circle cx="32" cy="54" r="2" fill={c} />
            <circle cx="10" cy="32" r="2" fill={c} />
            {/* Drips */}
            <path d="M32,58 V64" strokeWidth="2" opacity="0.5" />
            <path d="M6,32 H2" strokeWidth="3" opacity="0.4" />
        </g>
    ),

    calculator: (c) => (
        <g fill="none" stroke={c} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            {/* Body */}
            <rect x="12" y="6" width="40" height="52" rx="4" />
            {/* Screen */}
            <rect x="16" y="10" width="32" height="14" rx="2" fill={c} />
            {/* Buttons */}
            <rect x="16" y="28" width="8" height="6" rx="1" fill={c} opacity="0.3" />
            <rect x="28" y="28" width="8" height="6" rx="1" fill={c} opacity="0.3" />
            <rect x="40" y="28" width="8" height="6" rx="1" fill={c} />
            <rect x="16" y="38" width="8" height="6" rx="1" fill={c} opacity="0.3" />
            <rect x="28" y="38" width="8" height="6" rx="1" fill={c} opacity="0.3" />
            <rect x="40" y="38" width="8" height="6" rx="1" fill={c} />
            <rect x="16" y="48" width="20" height="6" rx="1" fill={c} opacity="0.3" />
            <rect x="40" y="48" width="8" height="6" rx="1" fill={c} />
            {/* Drips */}
            <path d="M12,58 V64" strokeWidth="2" opacity="0.5" />
        </g>
    ),

    flashlight: (c) => (
        <g fill="none" stroke={c} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            {/* Light beam */}
            <path d="M24,10 L20,26 H44 L40,10 Z" fill={c} opacity="0.2" />
            {/* Head */}
            <path d="M20,10 L16,28 H48 L44,10 Z" />
            {/* Lens */}
            <ellipse cx="32" cy="14" rx="8" ry="4" strokeWidth="3" />
            {/* Body */}
            <rect x="16" y="28" width="32" height="28" rx="3" fill={c} />
            {/* Drips */}
            <path d="M16,56 V62" strokeWidth="2" opacity="0.5" />
            <path d="M48,56 V60" strokeWidth="3" opacity="0.4" />
        </g>
    ),

    weather: (c) => (
        <g fill="none" stroke={c} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            {/* Sun */}
            <circle cx="22" cy="20" r="10" fill={c} />
            {/* Sun rays */}
            <path d="M22,6 V2" strokeWidth="3" />
            <path d="M36,20 H40" strokeWidth="3" />
            <path d="M32,10 L36,6" strokeWidth="3" />
            {/* Cloud */}
            <path d="M22,50 Q14,46 16,38 Q18,28 30,32 Q38,24 48,30 Q58,36 54,46 Q52,54 44,54 H28 Q18,54 22,50 Z" />
            <path d="M24,48 Q16,44 18,38 Q20,30 30,34 Q36,28 46,32 Q54,38 52,46 Q50,52 44,52 H28 Q20,52 24,48 Z" fill={c} opacity="0.2" />
            {/* Rain drips */}
            <path d="M30,56 V64" strokeWidth="3" opacity="0.6" />
            <path d="M42,58 V66" strokeWidth="2" opacity="0.5" />
            <path d="M36,54 V60" strokeWidth="2" opacity="0.4" />
        </g>
    ),

    settings: (c) => (
        <g fill="none" stroke={c} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            {/* Gear */}
            <path d="M28,6 H36 L38,12 L44,14 L50,10 L54,14 L50,20 L52,26 L58,28 V36 L52,38 L50,44 L54,50 L50,54 L44,50 L38,52 L36,58 H28 L26,52 L20,50 L14,54 L10,50 L14,44 L12,38 L6,36 V28 L12,26 L14,20 L10,14 L14,10 L20,14 L26,12 Z" />
            {/* Center */}
            <circle cx="32" cy="32" r="8" fill={c} opacity="0.3" />
            {/* Drips */}
            <path d="M36,58 V64" strokeWidth="2" opacity="0.5" />
            <path d="M6,32 H2" strokeWidth="3" opacity="0.4" />
        </g>
    ),

    notifications: (c) => (
        <g fill="none" stroke={c} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            {/* Bell */}
            <path d="M16,44 H48 L44,34 V26 Q44,12 32,10 Q20,12 20,26 V34 Z" />
            <path d="M18,42 H46 L42,34 V26 Q42,14 32,12 Q22,14 22,26 V34 Z" fill={c} opacity="0.15" />
            {/* Clapper */}
            <path d="M26,48 Q26,56 32,56 Q38,56 38,48" />
            {/* Top */}
            <circle cx="32" cy="8" r="3" fill={c} />
            {/* Alert */}
            <circle cx="48" cy="16" r="6" fill={c} />
            {/* Drips */}
            <path d="M16,44 V52" strokeWidth="2" opacity="0.5" />
            <path d="M48,44 V50" strokeWidth="3" opacity="0.4" />
        </g>
    ),

    games: (c) => (
        <g fill="none" stroke={c} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            {/* Controller body */}
            <path d="M6,28 Q4,18 14,16 H50 Q60,18 58,28 V40 Q60,52 48,52 H40 Q36,52 36,44 V40 H28 V44 Q28,52 24,52 H16 Q4,52 6,40 Z" />
            <path d="M8,28 Q6,20 14,18 H50 Q58,20 56,28 V38 Q58,50 48,50 H40 Q38,50 38,44 V42 H26 V44 Q26,50 22,50 H16 Q6,50 8,38 Z" fill={c} opacity="0.15" />
            {/* D-pad */}
            <path d="M18,30 V40" strokeWidth="5" />
            <path d="M13,35 H23" strokeWidth="5" />
            {/* Buttons */}
            <circle cx="46" cy="30" r="5" fill={c} />
            <circle cx="54" cy="38" r="5" fill={c} opacity="0.5" />
            {/* Drips */}
            <path d="M6,52 V58" strokeWidth="2" opacity="0.5" />
            <path d="M58,52 V56" strokeWidth="3" opacity="0.4" />
        </g>
    ),

    casino: (c) => (
        <g fill="none" stroke={c} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            {/* Dice 1 */}
            <rect x="6" y="6" width="24" height="24" rx="4" />
            <circle cx="18" cy="18" r="4" fill={c} />
            {/* Dice 2 */}
            <rect x="34" y="34" width="24" height="24" rx="4" />
            <circle cx="42" cy="42" r="3" fill={c} />
            <circle cx="50" cy="42" r="3" fill={c} />
            <circle cx="42" cy="50" r="3" fill={c} />
            <circle cx="50" cy="50" r="3" fill={c} />
            {/* Drips */}
            <path d="M6,30 V38" strokeWidth="2" opacity="0.5" />
            <path d="M58,58 V64" strokeWidth="3" opacity="0.4" />
            {/* Splatter */}
            <circle cx="48" cy="12" r="2" fill={c} opacity="0.3" />
            <circle cx="16" cy="48" r="1.5" fill={c} opacity="0.4" />
        </g>
    ),

    bank: (c) => (
        <g fill="none" stroke={c} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            {/* Pediment */}
            <path d="M8,26 L32,8 L56,26" strokeWidth="5" />
            {/* Top bar */}
            <rect x="8" y="26" width="48" height="4" fill={c} />
            {/* Pillars */}
            <rect x="14" y="30" width="6" height="22" fill={c} />
            <rect x="29" y="30" width="6" height="22" fill={c} opacity="0.6" />
            <rect x="44" y="30" width="6" height="22" fill={c} />
            {/* Base */}
            <rect x="8" y="52" width="48" height="6" fill={c} />
            {/* Drips */}
            <path d="M8,58 V64" strokeWidth="2" opacity="0.5" />
            <path d="M56,58 V62" strokeWidth="3" opacity="0.4" />
            {/* Splatter */}
            <circle cx="32" cy="4" r="2" fill={c} opacity="0.3" />
        </g>
    ),

    taxi: (c) => (
        <g fill="none" stroke={c} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            {/* Windows */}
            <path d="M14,36 L22,22 H42 L50,36" fill={c} opacity="0.1" />
            {/* Body */}
            <path d="M10,36 L20,22 H44 L54,36" />
            <rect x="6" y="36" width="52" height="14" rx="3" />
            {/* Taxi sign */}
            <rect x="24" y="14" width="16" height="8" rx="2" fill={c} />
            {/* Wheels */}
            <circle cx="18" cy="52" r="6" fill={c} />
            <circle cx="46" cy="52" r="6" fill={c} />
            {/* Lights */}
            <rect x="8" y="40" width="6" height="4" rx="1" fill={c} opacity="0.5" />
            <rect x="50" y="40" width="6" height="4" rx="1" fill={c} opacity="0.5" />
            {/* Drips */}
            <path d="M6,50 V58" strokeWidth="2" opacity="0.5" />
        </g>
    ),

    home: (c) => (
        <g fill="none" stroke={c} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            {/* Roof */}
            <path d="M6,34 L32,10 L58,34" strokeWidth="5" />
            {/* House body */}
            <path d="M14,32 V58 H50 V32" />
            <rect x="16" y="34" width="32" height="22" fill={c} opacity="0.1" />
            {/* Door */}
            <rect x="26" y="42" width="12" height="16" rx="2" fill={c} />
            <circle cx="36" cy="50" r="1.5" fill="white" />
            {/* Window */}
            <rect x="40" y="42" width="8" height="8" />
            {/* Chimney */}
            <rect x="44" y="18" width="6" height="12" fill={c} />
            {/* Drips */}
            <path d="M14,58 V64" strokeWidth="2" opacity="0.5" />
            <path d="M50,58 V62" strokeWidth="3" opacity="0.4" />
        </g>
    ),

    food: (c) => (
        <g fill="none" stroke={c} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            {/* Fork handle */}
            <path d="M18,58 V32" strokeWidth="5" />
            {/* Fork tines */}
            <path d="M10,32 V8" strokeWidth="4" />
            <path d="M18,32 V8" strokeWidth="4" />
            <path d="M26,32 V8" strokeWidth="4" />
            <path d="M10,32 H26" strokeWidth="4" />
            {/* Knife */}
            <path d="M46,8 Q58,18 58,36 V58" strokeWidth="5" />
            <path d="M46,8 V28" strokeWidth="2" fill={c} opacity="0.2" />
            {/* Drips */}
            <path d="M10,8 V4" strokeWidth="2" opacity="0.5" />
            <path d="M58,58 V64" strokeWidth="3" opacity="0.4" />
        </g>
    ),

    electrician: (c) => (
        <g fill={c}>
            {/* Lightning bolt - graffiti style */}
            <path d="M38,2 L14,32 H28 L22,62 L52,28 H36 Z" />
            {/* Drips */}
            <path d="M22,62 L18,68" stroke={c} strokeWidth="3" fill="none" opacity="0.6" />
            <path d="M14,32 L10,40" stroke={c} strokeWidth="2" fill="none" opacity="0.4" />
            {/* Splatter */}
            <circle cx="56" cy="20" r="3" opacity="0.4" />
            <circle cx="10" cy="48" r="2" opacity="0.3" />
            <circle cx="48" cy="8" r="2" opacity="0.3" />
        </g>
    ),

    mechanic: (c) => (
        <g fill="none" stroke={c} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            {/* Wrench */}
            <path d="M18,10 L10,18 L26,34 L10,50 L18,58 L34,42 L50,58 L58,50 L42,34 L58,18 L50,10 L34,26 Z" />
            {/* Center bolt */}
            <circle cx="34" cy="34" r="7" fill={c} />
            {/* Drips */}
            <path d="M10,58 V64" strokeWidth="2" opacity="0.5" />
            <path d="M58,58 V62" strokeWidth="3" opacity="0.4" />
            {/* Splatter */}
            <circle cx="4" cy="10" r="2" fill={c} opacity="0.3" />
            <circle cx="60" cy="10" r="1.5" fill={c} opacity="0.4" />
        </g>
    ),

    market: (c) => (
        <g fill="none" stroke={c} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            {/* Handle */}
            <path d="M8,12 H18 L26,44" strokeWidth="5" />
            {/* Cart body */}
            <path d="M22,22 H58 L54,46 H28 Z" />
            <path d="M24,24 H56 L52,44 H30 Z" fill={c} opacity="0.15" />
            {/* Wheels */}
            <circle cx="32" cy="54" r="6" fill={c} />
            <circle cx="50" cy="54" r="6" fill={c} />
            {/* Drips */}
            <path d="M22,46 V54" strokeWidth="2" opacity="0.5" />
            <path d="M58,46 V52" strokeWidth="3" opacity="0.4" />
        </g>
    ),

    shop247: (c) => (
        <g fill="none" stroke={c} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            {/* Roof */}
            <path d="M8,22 L20,8 H44 L56,22" />
            {/* Building */}
            <rect x="8" y="22" width="48" height="36" rx="2" />
            <rect x="10" y="24" width="44" height="32" fill={c} opacity="0.1" />
            {/* Header sign */}
            <rect x="8" y="22" width="48" height="10" fill={c} opacity="0.3" />
            {/* Door */}
            <rect x="24" y="38" width="16" height="20" rx="2" fill={c} opacity="0.2" />
            <circle cx="38" cy="48" r="2" fill={c} />
            {/* Windows */}
            <rect x="12" y="38" width="8" height="8" />
            <rect x="44" y="38" width="8" height="8" />
            {/* Drips */}
            <path d="M8,58 V64" strokeWidth="2" opacity="0.5" />
            <path d="M56,58 V62" strokeWidth="3" opacity="0.4" />
        </g>
    ),

    business: (c) => (
        <g fill="none" stroke={c} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            {/* Handle */}
            <path d="M22,20 V12 Q22,6 32,6 Q42,6 42,12 V20" />
            {/* Briefcase */}
            <rect x="6" y="20" width="52" height="36" rx="4" />
            <rect x="8" y="22" width="48" height="32" fill={c} opacity="0.1" />
            {/* Center clasp */}
            <rect x="26" y="34" width="12" height="10" rx="2" fill={c} />
            <circle cx="32" cy="40" r="2" fill="white" opacity="0.5" />
            {/* Divider */}
            <path d="M6,40 H26 M38,40 H58" strokeWidth="2" opacity="0.3" />
            {/* Drips */}
            <path d="M6,56 V62" strokeWidth="2" opacity="0.5" />
            <path d="M58,56 V60" strokeWidth="3" opacity="0.4" />
        </g>
    ),

    browser: (c) => (
        <g fill="none" stroke={c} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            {/* Globe */}
            <circle cx="32" cy="32" r="26" />
            {/* Meridian */}
            <ellipse cx="32" cy="32" rx="10" ry="26" />
            {/* Parallels */}
            <path d="M6,32 H58" />
            <path d="M10,20 H54" strokeWidth="2" opacity="0.4" />
            <path d="M10,44 H54" strokeWidth="2" opacity="0.4" />
            {/* Drips */}
            <path d="M32,58 V64" strokeWidth="2" opacity="0.5" />
            <path d="M6,32 H2" strokeWidth="3" opacity="0.4" />
        </g>
    ),

    hospital: (c) => (
        <g fill="none" stroke={c} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            {/* Building */}
            <rect x="10" y="10" width="44" height="44" rx="4" />
            <rect x="12" y="12" width="40" height="40" fill={c} opacity="0.1" />
            {/* Cross */}
            <path d="M32,18 V46" strokeWidth="8" />
            <path d="M18,32 H46" strokeWidth="8" />
            {/* Drips */}
            <path d="M10,54 V62" strokeWidth="2" opacity="0.5" />
            <path d="M54,54 V60" strokeWidth="3" opacity="0.4" />
        </g>
    ),

    police: (c) => (
        <g fill="none" stroke={c} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            {/* Shield */}
            <path d="M32,6 L56,18 V38 Q56,56 32,60 Q8,56 8,38 V18 Z" />
            <path d="M32,10 L52,20 V36 Q52,52 32,56 Q12,52 12,36 V20 Z" fill={c} opacity="0.15" />
            {/* Star */}
            <path d="M32,20 L34,28 H42 L36,32 L38,40 L32,36 L26,40 L28,32 L22,28 H30 Z" fill={c} />
            {/* Drips */}
            <path d="M32,60 V66" strokeWidth="2" opacity="0.6" />
            <path d="M8,38 V46 Q6,50 4,52" strokeWidth="2" opacity="0.4" />
        </g>
    ),

    gang: (c) => (
        <g fill="none" stroke={c} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            {/* Skull */}
            <path d="M16,30 Q14,12 32,10 Q50,12 48,30 V38 Q48,46 40,46 L38,54 H26 L24,46 Q16,46 16,38 Z" />
            <path d="M18,30 Q16,14 32,12 Q48,14 46,30 V36 Q46,44 40,44 L38,52 H26 L24,44 Q18,44 18,36 Z" fill={c} opacity="0.15" />
            {/* Eyes - X style */}
            <path d="M22,24 L28,32 M28,24 L22,32" strokeWidth="3" />
            <path d="M36,24 L42,32 M42,24 L36,32" strokeWidth="3" />
            {/* Nose */}
            <path d="M30,38 L32,42 L34,38" />
            {/* Teeth */}
            <path d="M26,54 V60" strokeWidth="4" />
            <path d="M32,54 V62" strokeWidth="4" />
            <path d="M38,54 V60" strokeWidth="4" />
            {/* Drips */}
            <path d="M26,60 V66" strokeWidth="2" opacity="0.5" />
            <path d="M38,60 V64" strokeWidth="2" opacity="0.4" />
            {/* Splatter */}
            <circle cx="10" cy="22" r="2" fill={c} opacity="0.3" />
            <circle cx="54" cy="38" r="1.5" fill={c} opacity="0.4" />
        </g>
    ),

    // === STREET EXTRA ICONS ===
    spray: (c) => (
        <g fill="none" stroke={c} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            {/* Can body */}
            <rect x="18" y="20" width="28" height="38" rx="4" fill={c} />
            {/* Nozzle */}
            <rect x="28" y="10" width="8" height="10" rx="2" />
            {/* Cap */}
            <path d="M24,10 H40 L38,6 H26 Z" />
            {/* Spray dots */}
            <circle cx="10" cy="14" r="3" fill={c} opacity="0.6" />
            <circle cx="54" cy="18" r="2" fill={c} opacity="0.5" />
            <circle cx="6" cy="28" r="2" fill={c} opacity="0.4" />
            <circle cx="58" cy="10" r="1.5" fill={c} opacity="0.3" />
            <circle cx="52" cy="30" r="2.5" fill={c} opacity="0.4" />
            <circle cx="8" cy="40" r="1.5" fill={c} opacity="0.3" />
        </g>
    ),

    tag: (c) => (
        <g fill="none" stroke={c} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            {/* Tag shape */}
            <path d="M8,30 L30,8 H56 V34 L34,56 Z" />
            <path d="M10,30 L30,10 H54 V32 L32,54 Z" fill={c} opacity="0.15" />
            {/* Hole */}
            <circle cx="44" cy="20" r="4" fill={c} />
            {/* String */}
            <path d="M56,8 L62,4" strokeWidth="2" />
            {/* Drips */}
            <path d="M8,30 V38" strokeWidth="2" opacity="0.5" />
            <path d="M34,56 V62" strokeWidth="3" opacity="0.4" />
        </g>
    ),

    skull: (c) => (
        <g fill="none" stroke={c} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14,28 Q12,8 32,6 Q52,8 50,28 V38 Q50,48 40,48 L38,58 H26 L24,48 Q14,48 14,38 Z" />
            <circle cx="24" cy="26" r="6" fill={c} />
            <circle cx="40" cy="26" r="6" fill={c} />
            <path d="M30,40 L32,44 L34,40" />
            <path d="M24,58 V64 M32,58 V66 M40,58 V64" strokeWidth="3" />
            <path d="M14,38 V46" strokeWidth="2" opacity="0.5" />
        </g>
    ),

    drip: (c) => (
        <g fill={c}>
            <path d="M32,4 Q24,20 24,32 Q24,44 32,44 Q40,44 40,32 Q40,20 32,4 Z" />
            <path d="M32,44 V56 Q32,60 34,62" stroke={c} strokeWidth="3" fill="none" opacity="0.6" />
            <circle cx="28" cy="28" r="3" fill="white" opacity="0.4" />
        </g>
    ),

    cap: (c) => (
        <g fill="none" stroke={c} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            {/* Cap */}
            <path d="M8,32 Q4,24 16,20 H48 Q60,24 56,32" />
            <rect x="8" y="32" width="48" height="12" rx="2" fill={c} />
            {/* Brim */}
            <path d="M4,44 H60" strokeWidth="6" />
            {/* Logo area */}
            <rect x="24" y="20" width="16" height="12" fill={c} opacity="0.3" />
            <path d="M8,44 V50" strokeWidth="2" opacity="0.5" />
        </g>
    ),

    boombox: (c) => (
        <g fill="none" stroke={c} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="16" width="56" height="32" rx="4" />
            <rect x="6" y="18" width="52" height="28" fill={c} opacity="0.1" />
            <circle cx="18" cy="32" r="10" fill={c} opacity="0.3" />
            <circle cx="18" cy="32" r="5" fill={c} />
            <circle cx="46" cy="32" r="10" fill={c} opacity="0.3" />
            <circle cx="46" cy="32" r="5" fill={c} />
            <rect x="28" y="22" width="8" height="4" fill={c} />
            <path d="M16,8 V16 M48,8 V16" strokeWidth="2" />
            <path d="M4,48 V54" strokeWidth="2" opacity="0.5" />
        </g>
    ),

    mic: (c) => (
        <g fill="none" stroke={c} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            {/* Mic head */}
            <path d="M20,24 Q20,8 32,8 Q44,8 44,24 V32 Q44,44 32,44 Q20,44 20,32 Z" />
            <rect x="22" y="12" width="20" height="28" rx="8" fill={c} opacity="0.2" />
            {/* Stand */}
            <path d="M16,36 Q16,52 32,52 Q48,52 48,36" strokeWidth="3" />
            <path d="M32,52 V60" strokeWidth="4" />
            <path d="M24,60 H40" strokeWidth="4" />
            {/* Drips */}
            <path d="M24,60 V66" strokeWidth="2" opacity="0.5" />
        </g>
    ),

    chain: (c) => (
        <g fill="none" stroke={c} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            {/* Links */}
            <rect x="8" y="24" width="20" height="16" rx="8" />
            <rect x="36" y="24" width="20" height="16" rx="8" />
            {/* Connection */}
            <path d="M28,32 H36" strokeWidth="6" />
            {/* Pendant */}
            <circle cx="32" cy="52" r="8" fill={c} />
            <path d="M32,44 V44" strokeWidth="4" />
            <path d="M32,60 V64" strokeWidth="2" opacity="0.5" />
        </g>
    ),
};

export default function StreetArt({ icon, colors, size, uid, showBackground = false }) {
    const iconId = icon.id;
    const IconPath = STREET_ICONS[iconId];

    if (!IconPath) {
        return (
            <svg viewBox="0 0 64 64" width={size} height={size}>
                <rect x="8" y="8" width="48" height="48" fill="none" stroke={colors.primary} strokeWidth="4" rx="4" />
                <text x="32" y="38" textAnchor="middle" fill={colors.primary} fontSize="12" fontFamily="sans-serif" fontWeight="bold">TAG</text>
                <path d="M8,56 V62" stroke={colors.primary} strokeWidth="2" opacity="0.5" />
            </svg>
        );
    }

    return (
        <svg viewBox="0 0 64 64" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
            {showBackground && (
                <>
                    <rect width="64" height="64" fill={colors.bg} rx="8" />
                    {/* Concrete texture hint */}
                    <rect x="0" y="0" width="64" height="64" fill={colors.primary} opacity="0.03" />
                </>
            )}
            {IconPath(colors.primary)}
        </svg>
    );
}
