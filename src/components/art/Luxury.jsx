import React from 'react';

// ============================================================================
// LUXURY ART ENGINE - ART DECO GATSBY STYLE
// Style: Elegant thin lines, gold accents, 1920s geometric patterns, symmetry
// ============================================================================

const LUXURY_ICONS = {
    phone: (c) => (
        <g fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Elegant frame */}
            <rect x="18" y="4" width="28" height="56" rx="3" />
            <rect x="20" y="6" width="24" height="52" rx="2" strokeWidth="0.5" opacity="0.5" />
            {/* Art deco pattern top */}
            <path d="M24,8 L32,14 L40,8" strokeWidth="1" />
            <path d="M28,6 V10 M36,6 V10" strokeWidth="0.5" />
            {/* Screen */}
            <rect x="22" y="16" width="20" height="32" fill={c} opacity="0.05" />
            {/* Decorative lines */}
            <path d="M22,18 H42 M22,46 H42" strokeWidth="0.5" opacity="0.3" />
            {/* Home button - gem shape */}
            <path d="M28,54 L32,50 L36,54 L32,58 Z" fill={c} opacity="0.3" />
            {/* Corner accents */}
            <path d="M18,8 L16,4 M46,8 L48,4" strokeWidth="1" opacity="0.5" />
        </g>
    ),

    messages: (c) => (
        <g fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Elegant speech bubble */}
            <path d="M8,10 H56 V42 H28 L16,54 V42 H8 Z" />
            <path d="M10,12 H54 V40 H28 L18,50 V40 H10 Z" strokeWidth="0.5" opacity="0.4" />
            {/* Art deco sunburst */}
            <path d="M32,20 L28,28 H36 Z" fill={c} opacity="0.2" />
            <path d="M32,16 V20 M28,18 L30,22 M36,18 L34,22" strokeWidth="0.5" />
            {/* Decorative lines */}
            <path d="M16,26 H48" strokeWidth="1" />
            <path d="M20,32 H44" strokeWidth="0.5" opacity="0.5" />
            <path d="M24,36 H40" strokeWidth="0.5" opacity="0.3" />
        </g>
    ),

    contacts: (c) => (
        <g fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Head - cameo style */}
            <circle cx="32" cy="22" r="14" />
            <circle cx="32" cy="22" r="12" strokeWidth="0.5" opacity="0.4" />
            {/* Elegant face */}
            <ellipse cx="27" cy="20" rx="2" ry="2.5" fill={c} opacity="0.3" />
            <ellipse cx="37" cy="20" rx="2" ry="2.5" fill={c} opacity="0.3" />
            <path d="M28,28 Q32,32 36,28" strokeWidth="1" />
            {/* Crown/tiara */}
            <path d="M24,10 L28,6 L32,10 L36,6 L40,10" strokeWidth="1" />
            {/* Body - elegant */}
            <path d="M14,58 V48 Q14,38 32,38 Q50,38 50,48 V58" />
            {/* Necklace detail */}
            <path d="M24,40 Q32,44 40,40" strokeWidth="1" />
            <circle cx="32" cy="43" r="2" fill={c} />
        </g>
    ),

    email: (c) => (
        <g fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Envelope with ornate edges */}
            <rect x="6" y="14" width="52" height="36" rx="2" />
            <rect x="8" y="16" width="48" height="32" rx="1" strokeWidth="0.5" opacity="0.4" />
            {/* Flap */}
            <path d="M6,16 L32,38 L58,16" />
            {/* Wax seal - art deco */}
            <circle cx="32" cy="42" r="6" fill={c} opacity="0.2" />
            <circle cx="32" cy="42" r="4" />
            <path d="M32,38 L30,42 L32,40 L34,42 Z" fill={c} stroke="none" />
            {/* Corner filigree */}
            <path d="M8,14 L4,10 M56,14 L60,10" strokeWidth="1" opacity="0.5" />
            <path d="M8,50 L4,54 M56,50 L60,54" strokeWidth="1" opacity="0.5" />
        </g>
    ),

    camera: (c) => (
        <g fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Body - vintage style */}
            <rect x="8" y="18" width="48" height="36" rx="3" />
            <rect x="10" y="20" width="44" height="32" rx="2" strokeWidth="0.5" opacity="0.4" />
            {/* Viewfinder - art deco */}
            <path d="M24,18 V8 L32,4 L40,8 V18" />
            <path d="M32,4 L32,8" strokeWidth="0.5" />
            {/* Lens - multi ring */}
            <circle cx="32" cy="36" r="12" />
            <circle cx="32" cy="36" r="9" strokeWidth="0.5" />
            <circle cx="32" cy="36" r="6" strokeWidth="0.5" opacity="0.5" />
            <circle cx="32" cy="36" r="3" fill={c} />
            {/* Flash - gem shape */}
            <path d="M48,24 L52,22 L54,26 L52,30 L48,28 Z" fill={c} opacity="0.3" />
        </g>
    ),

    gallery: (c) => (
        <g fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Ornate frame */}
            <rect x="6" y="10" width="52" height="44" rx="2" />
            <rect x="8" y="12" width="48" height="40" rx="1" strokeWidth="0.5" opacity="0.5" />
            <rect x="10" y="14" width="44" height="36" strokeWidth="0.5" opacity="0.3" />
            {/* Sun - diamond shape */}
            <path d="M18,24 L22,20 L26,24 L22,28 Z" fill={c} />
            {/* Mountains - geometric */}
            <path d="M6,54 L24,30 L36,42 L52,24 L58,36 V54 Z" fill={c} opacity="0.1" />
            <path d="M24,30 L36,42 L52,24" strokeWidth="1" />
            {/* Corner accents */}
            <path d="M6,10 L2,6 M58,10 L62,6 M6,54 L2,58 M58,54 L62,58" strokeWidth="1" opacity="0.5" />
        </g>
    ),

    video: (c) => (
        <g fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Elegant screen */}
            <rect x="6" y="16" width="38" height="32" rx="2" />
            <rect x="8" y="18" width="34" height="28" strokeWidth="0.5" opacity="0.4" />
            {/* Film reel detail */}
            <circle cx="14" cy="24" r="3" strokeWidth="0.5" opacity="0.5" />
            <circle cx="14" cy="40" r="3" strokeWidth="0.5" opacity="0.5" />
            {/* Lens/projector */}
            <path d="M44,24 L58,14 V50 L44,40" fill={c} opacity="0.15" />
            <path d="M44,24 L58,14 V50 L44,40" />
            {/* Decorative lines */}
            <path d="M48,20 L56,16 M48,44 L56,48" strokeWidth="0.5" />
        </g>
    ),

    music: (c) => (
        <g fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Elegant notes */}
            <ellipse cx="16" cy="48" rx="10" ry="8" fill={c} opacity="0.2" />
            <ellipse cx="16" cy="48" rx="10" ry="8" />
            <ellipse cx="48" cy="44" rx="10" ry="8" fill={c} opacity="0.2" />
            <ellipse cx="48" cy="44" rx="10" ry="8" />
            {/* Stems - ornate */}
            <path d="M26,48 V12" strokeWidth="2" />
            <path d="M58,44 V10" strokeWidth="2" />
            {/* Beam with decoration */}
            <path d="M26,12 Q42,6 58,10" strokeWidth="3" />
            <path d="M26,18 Q42,12 58,16" strokeWidth="2" opacity="0.5" />
            {/* Treble accent */}
            <path d="M38,4 Q42,8 38,12" strokeWidth="1" opacity="0.5" />
        </g>
    ),

    spotify: (c) => (
        <g fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round">
            {/* Circle */}
            <circle cx="32" cy="32" r="26" />
            <circle cx="32" cy="32" r="24" strokeWidth="0.5" opacity="0.4" />
            {/* Elegant waves */}
            <path d="M14,22 Q32,14 50,24" strokeWidth="2" />
            <path d="M16,34 Q32,26 48,36" strokeWidth="2" />
            <path d="M18,46 Q32,38 46,48" strokeWidth="2" />
            {/* Art deco accent */}
            <path d="M32,6 L30,2 L32,0 L34,2 Z" fill={c} strokeWidth="0.5" />
        </g>
    ),

    maps: (c) => (
        <g fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Elegant pin */}
            <path d="M32,58 L16,38 Q8,26 16,14 Q24,4 32,4 Q40,4 48,14 Q56,26 48,38 Z" />
            <path d="M32,54 L18,36 Q12,26 18,16 Q26,8 32,8 Q38,8 46,16 Q52,26 46,36 Z" strokeWidth="0.5" opacity="0.4" />
            {/* Gem center */}
            <path d="M24,24 L32,16 L40,24 L32,32 Z" fill={c} opacity="0.2" />
            <circle cx="32" cy="24" r="4" fill={c} />
            {/* Compass points */}
            <path d="M32,12 V8" strokeWidth="0.5" />
            <path d="M24,24 H20 M44,24 H40" strokeWidth="0.5" opacity="0.5" />
        </g>
    ),

    gps: (c) => (
        <g fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Ornate circle */}
            <circle cx="32" cy="32" r="24" />
            <circle cx="32" cy="32" r="22" strokeWidth="0.5" opacity="0.4" />
            {/* Crosshairs - elegant */}
            <path d="M32,4 V14" strokeWidth="2" />
            <path d="M32,50 V60" strokeWidth="2" />
            <path d="M4,32 H14" strokeWidth="2" />
            <path d="M50,32 H60" strokeWidth="2" />
            {/* Center gem */}
            <path d="M28,32 L32,28 L36,32 L32,36 Z" fill={c} />
            {/* Corner accents */}
            <path d="M12,12 L8,8 M52,12 L56,8 M12,52 L8,56 M52,52 L56,56" strokeWidth="0.5" opacity="0.5" />
        </g>
    ),

    calendar: (c) => (
        <g fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Ornate body */}
            <rect x="8" y="14" width="48" height="44" rx="3" />
            <rect x="10" y="16" width="44" height="40" rx="2" strokeWidth="0.5" opacity="0.4" />
            {/* Header with art deco */}
            <path d="M8,28 H56" />
            <path d="M24,20 L32,24 L40,20" strokeWidth="1" opacity="0.5" />
            {/* Rings - ornate */}
            <rect x="18" y="8" width="4" height="10" rx="1" fill={c} />
            <rect x="42" y="8" width="4" height="10" rx="1" fill={c} />
            {/* Date gem */}
            <path d="M14,38 L20,32 L26,38 L20,44 Z" fill={c} opacity="0.3" />
            <path d="M17,38 L20,35 L23,38 L20,41 Z" fill={c} />
            {/* Other dates */}
            <rect x="32" y="34" width="8" height="8" strokeWidth="0.5" />
            <rect x="44" y="34" width="8" height="8" strokeWidth="0.5" />
        </g>
    ),

    clock: (c) => (
        <g fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Ornate face */}
            <circle cx="32" cy="32" r="26" />
            <circle cx="32" cy="32" r="24" strokeWidth="0.5" opacity="0.4" />
            <circle cx="32" cy="32" r="22" strokeWidth="0.5" opacity="0.2" />
            {/* Hour hand - decorative */}
            <path d="M32,32 V18" strokeWidth="2" />
            <path d="M32,18 L30,22 L32,20 L34,22 Z" fill={c} stroke="none" />
            {/* Minute hand */}
            <path d="M32,32 L46,32" strokeWidth="1.5" />
            {/* Center gem */}
            <path d="M28,32 L32,28 L36,32 L32,36 Z" fill={c} />
            {/* Hour markers - ornate */}
            <path d="M32,8 V12 M56,32 H52 M32,56 V52 M8,32 H12" strokeWidth="1" />
            <path d="M48,16 L46,18 M48,48 L46,46 M16,48 L18,46 M16,16 L18,18" strokeWidth="0.5" opacity="0.5" />
        </g>
    ),

    calculator: (c) => (
        <g fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Elegant body */}
            <rect x="12" y="6" width="40" height="52" rx="3" />
            <rect x="14" y="8" width="36" height="48" rx="2" strokeWidth="0.5" opacity="0.4" />
            {/* Screen - art deco */}
            <rect x="16" y="10" width="32" height="14" rx="2" fill={c} opacity="0.15" />
            <path d="M20,14 H44" strokeWidth="0.5" opacity="0.5" />
            <path d="M20,20 H36" strokeWidth="0.5" opacity="0.3" />
            {/* Buttons - gem shapes */}
            <path d="M20,30 L24,28 L28,30 L24,32 Z" fill={c} opacity="0.2" />
            <path d="M32,30 L36,28 L40,30 L36,32 Z" fill={c} opacity="0.2" />
            <path d="M44,30 L48,28 L52,30 L48,32 Z" fill={c} />
            <path d="M20,40 L24,38 L28,40 L24,42 Z" fill={c} opacity="0.2" />
            <path d="M32,40 L36,38 L40,40 L36,42 Z" fill={c} opacity="0.2" />
            <path d="M44,40 L48,38 L52,40 L48,42 Z" fill={c} />
            <rect x="16" y="48" width="20" height="6" rx="1" fill={c} opacity="0.2" />
            <path d="M44,50 L48,48 L52,50 L48,52 Z" fill={c} />
        </g>
    ),

    flashlight: (c) => (
        <g fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Elegant head */}
            <path d="M22,10 L18,26 H46 L42,10 Z" />
            <path d="M24,12 L20,24 H44 L40,12 Z" strokeWidth="0.5" opacity="0.4" />
            {/* Lens - decorative */}
            <ellipse cx="32" cy="14" rx="8" ry="4" fill={c} opacity="0.2" />
            <ellipse cx="32" cy="12" rx="6" ry="3" strokeWidth="0.5" />
            {/* Body - fluted */}
            <rect x="18" y="26" width="28" height="30" rx="2" fill={c} />
            {/* Decorative bands */}
            <path d="M18,34 H46 M18,42 H46 M18,50 H46" stroke="white" strokeWidth="0.5" opacity="0.3" />
        </g>
    ),

    weather: (c) => (
        <g fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Elegant sun - starburst */}
            <circle cx="22" cy="20" r="8" fill={c} opacity="0.2" />
            <circle cx="22" cy="20" r="6" />
            <path d="M22,8 V4 M34,20 H38 M30,12 L34,8" strokeWidth="1" />
            <path d="M22,10 V6 M32,20 H36" strokeWidth="0.5" opacity="0.5" />
            {/* Cloud - art deco */}
            <path d="M24,48 Q16,44 18,36 Q20,26 32,30 Q42,24 50,32 Q58,38 54,46 Q52,52 44,52 H28 Q20,52 24,48 Z" />
            <path d="M26,46 Q18,42 20,36 Q22,28 32,32 Q40,26 48,32 Q54,38 52,44 Q50,50 44,50 H28 Q22,50 26,46 Z" fill={c} opacity="0.1" />
        </g>
    ),

    settings: (c) => (
        <g fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Elegant gear */}
            <path d="M28,6 H36 L38,12 L44,14 L50,10 L54,14 L50,20 L52,26 L58,28 V36 L52,38 L50,44 L54,50 L50,54 L44,50 L38,52 L36,58 H28 L26,52 L20,50 L14,54 L10,50 L14,44 L12,38 L6,36 V28 L12,26 L14,20 L10,14 L14,10 L20,14 L26,12 Z" />
            {/* Inner circle - art deco */}
            <circle cx="32" cy="32" r="10" />
            <circle cx="32" cy="32" r="6" fill={c} opacity="0.15" />
            {/* Center gem */}
            <path d="M28,32 L32,28 L36,32 L32,36 Z" fill={c} />
        </g>
    ),

    notifications: (c) => (
        <g fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Elegant bell */}
            <path d="M16,44 H48 L44,34 V26 Q44,12 32,10 Q20,12 20,26 V34 Z" />
            <path d="M18,42 H46 L42,34 V26 Q42,14 32,12 Q22,14 22,26 V34 Z" strokeWidth="0.5" opacity="0.4" />
            {/* Clapper */}
            <path d="M26,48 Q26,56 32,56 Q38,56 38,48" />
            {/* Top gem */}
            <path d="M28,6 L32,2 L36,6 L32,10 Z" fill={c} />
            {/* Decorative lines */}
            <path d="M24,20 L32,16 L40,20" strokeWidth="0.5" opacity="0.5" />
        </g>
    ),

    games: (c) => (
        <g fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Elegant controller */}
            <path d="M8,28 Q4,18 14,16 H50 Q60,18 56,28 V40 Q60,52 48,52 H40 Q36,52 36,44 V40 H28 V44 Q28,52 24,52 H16 Q4,52 8,40 Z" />
            <path d="M10,28 Q6,20 14,18 H50 Q58,20 54,28 V38 Q58,50 48,50 H40 Q38,50 38,44 V42 H26 V44 Q26,50 22,50 H16 Q6,50 10,38 Z" strokeWidth="0.5" opacity="0.4" />
            {/* D-pad - gem style */}
            <path d="M18,28 L18,38 M14,33 H22" strokeWidth="2" />
            {/* Buttons - gem shapes */}
            <path d="M44,28 L48,24 L52,28 L48,32 Z" fill={c} />
            <path d="M48,36 L52,32 L56,36 L52,40 Z" fill={c} opacity="0.5" />
        </g>
    ),

    casino: (c) => (
        <g fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Elegant dice 1 */}
            <rect x="6" y="6" width="24" height="24" rx="3" />
            <rect x="8" y="8" width="20" height="20" rx="2" strokeWidth="0.5" opacity="0.4" />
            <path d="M14,18 L18,14 L22,18 L18,22 Z" fill={c} />
            {/* Dice 2 */}
            <rect x="34" y="34" width="24" height="24" rx="3" />
            <rect x="36" y="36" width="20" height="20" rx="2" strokeWidth="0.5" opacity="0.4" />
            <path d="M40,44 L42,42 L44,44 L42,46 Z" fill={c} />
            <path d="M48,44 L50,42 L52,44 L50,46 Z" fill={c} />
            <path d="M40,52 L42,50 L44,52 L42,54 Z" fill={c} />
            <path d="M48,52 L50,50 L52,52 L50,54 Z" fill={c} />
            {/* Connecting flourish */}
            <path d="M30,30 Q38,26 34,34" strokeWidth="0.5" opacity="0.5" />
        </g>
    ),

    bank: (c) => (
        <g fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Classical pediment */}
            <path d="M6,26 L32,6 L58,26" strokeWidth="2" />
            <path d="M10,24 L32,8 L54,24" strokeWidth="0.5" opacity="0.4" />
            {/* Frieze */}
            <rect x="6" y="26" width="52" height="4" fill={c} opacity="0.2" />
            {/* Fluted columns */}
            <rect x="12" y="30" width="6" height="22" fill={c} />
            <rect x="28" y="30" width="8" height="22" fill={c} opacity="0.6" />
            <rect x="46" y="30" width="6" height="22" fill={c} />
            {/* Column details */}
            <path d="M15,30 V52 M51,30 V52" stroke="white" strokeWidth="0.5" opacity="0.2" />
            {/* Base */}
            <rect x="6" y="52" width="52" height="6" rx="1" fill={c} />
            {/* Crown accent */}
            <path d="M28,6 L32,2 L36,6" strokeWidth="1" opacity="0.5" />
        </g>
    ),

    taxi: (c) => (
        <g fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Elegant car body */}
            <path d="M12,36 Q16,22 24,22 H40 Q48,22 52,36" />
            <rect x="8" y="36" width="48" height="12" rx="3" />
            {/* Windows - art deco */}
            <path d="M16,36 L22,24 H42 L48,36" fill={c} opacity="0.08" />
            <path d="M20,36 L24,26 H40 L44,36" strokeWidth="0.5" opacity="0.5" />
            {/* Taxi sign - ornate */}
            <path d="M26,14 L32,10 L38,14 L38,22 H26 Z" fill={c} opacity="0.3" />
            <path d="M28,16 L32,12 L36,16" strokeWidth="0.5" />
            {/* Wheels - spoked */}
            <circle cx="18" cy="50" r="5" fill={c} />
            <circle cx="46" cy="50" r="5" fill={c} />
            <circle cx="18" cy="50" r="2" stroke="white" strokeWidth="0.5" opacity="0.3" />
            <circle cx="46" cy="50" r="2" stroke="white" strokeWidth="0.5" opacity="0.3" />
        </g>
    ),

    home: (c) => (
        <g fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Elegant roof */}
            <path d="M6,34 L32,10 L58,34" strokeWidth="2" />
            <path d="M10,32 L32,12 L54,32" strokeWidth="0.5" opacity="0.4" />
            {/* House body */}
            <path d="M14,32 V58 H50 V32" />
            {/* Door - art deco arch */}
            <path d="M26,58 V44 Q26,38 32,38 Q38,38 38,44 V58" fill={c} opacity="0.2" />
            <path d="M28,58 V44 Q28,40 32,40 Q36,40 36,44 V58" />
            <circle cx="35" cy="50" r="1.5" fill={c} />
            {/* Window - arched */}
            <path d="M42,48 V42 Q42,38 46,38 Q50,38 50,42 V48 H42 Z" />
            {/* Chimney */}
            <rect x="44" y="18" width="6" height="12" rx="1" fill={c} />
        </g>
    ),

    food: (c) => (
        <g fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Elegant fork */}
            <path d="M10,8 V24 M16,8 V24 M22,8 V24" strokeWidth="1" />
            <path d="M10,24 H22 L18,32 V58" strokeWidth="1.5" />
            <path d="M16,32 V36" strokeWidth="0.5" opacity="0.5" />
            {/* Elegant knife */}
            <path d="M44,8 Q56,16 56,32 V58" strokeWidth="1.5" />
            <path d="M44,8 V24 Q44,28 48,32" strokeWidth="0.5" opacity="0.5" />
            {/* Decorative flourish */}
            <path d="M30,24 Q34,28 30,32 Q34,36 30,40" strokeWidth="0.5" opacity="0.5" />
        </g>
    ),

    electrician: (c) => (
        <g>
            {/* Elegant lightning */}
            <path d="M38,2 L16,32 H30 L24,62 L52,28 H36 Z" fill={c} />
            {/* Art deco inner detail */}
            <path d="M36,8 L20,32 H28 L24,54 L46,30 H38 Z" fill="white" opacity="0.15" />
            {/* Accent lines */}
            <path d="M36,20 L42,22" stroke="white" strokeWidth="0.5" opacity="0.3" />
            <path d="M26,42 L32,40" stroke="white" strokeWidth="0.5" opacity="0.3" />
        </g>
    ),

    mechanic: (c) => (
        <g fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Elegant wrench */}
            <path d="M18,10 L10,18 L26,34 L10,50 L18,58 L34,42 L50,58 L58,50 L42,34 L58,18 L50,10 L34,26 Z" />
            <path d="M20,12 L12,20 L26,34 L12,48 L20,56 L34,42 L48,56 L56,48 L42,34 L56,20 L48,12 L34,26 Z" strokeWidth="0.5" opacity="0.4" />
            {/* Center gem */}
            <path d="M30,34 L34,30 L38,34 L34,38 Z" fill={c} />
        </g>
    ),

    market: (c) => (
        <g fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Elegant handle */}
            <path d="M8,12 H18 L26,44" strokeWidth="2" />
            {/* Cart body */}
            <path d="M22,22 H58 L54,46 H28 Z" />
            <path d="M24,24 H56 L52,44 H30 Z" strokeWidth="0.5" opacity="0.4" />
            {/* Decorative pattern */}
            <path d="M32,28 L40,28 M36,32 L44,32" strokeWidth="0.5" opacity="0.5" />
            {/* Wheels - ornate */}
            <circle cx="32" cy="54" r="5" fill={c} />
            <circle cx="50" cy="54" r="5" fill={c} />
            <circle cx="32" cy="54" r="2" stroke="white" strokeWidth="0.5" opacity="0.3" />
            <circle cx="50" cy="54" r="2" stroke="white" strokeWidth="0.5" opacity="0.3" />
        </g>
    ),

    shop247: (c) => (
        <g fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Elegant storefront */}
            <rect x="8" y="22" width="48" height="36" rx="2" />
            <rect x="10" y="24" width="44" height="32" rx="1" strokeWidth="0.5" opacity="0.4" />
            {/* Roof - art deco */}
            <path d="M8,22 L20,8 H44 L56,22" />
            <path d="M12,22 L22,10 H42 L52,22" strokeWidth="0.5" opacity="0.5" />
            {/* Sign */}
            <rect x="8" y="22" width="48" height="10" fill={c} opacity="0.15" />
            <path d="M32,22 V8" strokeWidth="0.5" opacity="0.3" />
            {/* Door - arched */}
            <path d="M24,58 V42 Q24,36 32,36 Q40,36 40,42 V58" fill={c} opacity="0.1" />
            <path d="M26,58 V42 Q26,38 32,38 Q38,38 38,42 V58" />
        </g>
    ),

    business: (c) => (
        <g fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Elegant briefcase */}
            <rect x="6" y="22" width="52" height="34" rx="3" />
            <rect x="8" y="24" width="48" height="30" rx="2" strokeWidth="0.5" opacity="0.4" />
            {/* Handle - ornate */}
            <path d="M22,22 V14 Q22,8 32,8 Q42,8 42,14 V22" />
            <path d="M26,22 V16 Q26,12 32,12 Q38,12 38,16 V22" strokeWidth="0.5" opacity="0.5" />
            {/* Center clasp - gem */}
            <path d="M28,38 L32,32 L36,38 L32,44 Z" fill={c} />
            <circle cx="32" cy="38" r="2" fill="white" opacity="0.3" />
            {/* Decorative lines */}
            <path d="M6,40 H28 M36,40 H58" strokeWidth="0.5" opacity="0.3" />
        </g>
    ),

    browser: (c) => (
        <g fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Ornate globe */}
            <circle cx="32" cy="32" r="26" />
            <circle cx="32" cy="32" r="24" strokeWidth="0.5" opacity="0.4" />
            {/* Meridian */}
            <ellipse cx="32" cy="32" rx="10" ry="26" />
            {/* Parallels */}
            <path d="M6,32 H58" />
            <path d="M10,18 H54" strokeWidth="0.5" opacity="0.4" />
            <path d="M10,46 H54" strokeWidth="0.5" opacity="0.4" />
            {/* Cardinal gems */}
            <path d="M30,6 L32,2 L34,6 L32,10 Z" fill={c} />
            <path d="M54,30 L58,32 L54,34 L50,32 Z" fill={c} opacity="0.5" />
        </g>
    ),

    hospital: (c) => (
        <g fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Elegant building */}
            <rect x="10" y="10" width="44" height="44" rx="4" />
            <rect x="12" y="12" width="40" height="40" rx="3" strokeWidth="0.5" opacity="0.4" />
            {/* Cross - art deco */}
            <path d="M32,18 V46" strokeWidth="4" />
            <path d="M18,32 H46" strokeWidth="4" />
            {/* Inner cross detail */}
            <path d="M32,22 V42" stroke="white" strokeWidth="1" opacity="0.2" />
            <path d="M22,32 H42" stroke="white" strokeWidth="1" opacity="0.2" />
        </g>
    ),

    police: (c) => (
        <g fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Elegant shield */}
            <path d="M32,6 L56,18 V38 Q56,56 32,60 Q8,56 8,38 V18 Z" />
            <path d="M32,10 L52,20 V36 Q52,52 32,56 Q12,52 12,36 V20 Z" strokeWidth="0.5" opacity="0.4" />
            {/* Star - ornate */}
            <path d="M32,20 L34,28 H42 L36,32 L38,40 L32,36 L26,40 L28,32 L22,28 H30 Z" fill={c} opacity="0.3" />
            <path d="M32,24 L33,28 H37 L34,30 L35,34 L32,32 L29,34 L30,30 L27,28 H31 Z" fill={c} />
        </g>
    ),

    gang: (c) => (
        <g fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Elegant skull */}
            <path d="M16,30 Q14,12 32,10 Q50,12 48,30 V38 Q48,46 40,46 L38,54 H26 L24,46 Q16,46 16,38 Z" />
            <path d="M18,30 Q16,14 32,12 Q48,14 46,30 V36 Q46,44 40,44 L38,52 H26 L24,44 Q18,44 18,36 Z" strokeWidth="0.5" opacity="0.4" />
            {/* Eyes - gem shapes */}
            <path d="M22,26 L26,22 L30,26 L26,30 Z" fill={c} />
            <path d="M34,26 L38,22 L42,26 L38,30 Z" fill={c} />
            {/* Nose */}
            <path d="M30,38 L32,42 L34,38" />
            {/* Teeth */}
            <path d="M26,54 V58 M32,54 V60 M38,54 V58" strokeWidth="1.5" />
        </g>
    ),

    // === LUXURY EXTRA ICONS ===
    champagne: (c) => (
        <g fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M24,24 L20,4 H44 L40,24" />
            <path d="M24,24 Q18,32 24,42 L28,58 H36 L40,42 Q46,32 40,24 Z" fill={c} opacity="0.15" />
            <path d="M24,24 Q18,32 24,42 L28,58 H36 L40,42 Q46,32 40,24 Z" />
            <path d="M26,30 H38" strokeWidth="0.5" opacity="0.5" />
            <circle cx="30" cy="14" r="2" fill={c} opacity="0.3" />
            <circle cx="38" cy="10" r="1.5" fill={c} opacity="0.3" />
        </g>
    ),

    yacht: (c) => (
        <g fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4,40 Q20,32 60,40 L56,52 H8 Z" fill={c} opacity="0.15" />
            <path d="M4,40 Q20,32 60,40 L56,52 H8 Z" />
            <path d="M32,40 V12" strokeWidth="2" />
            <path d="M32,14 L52,32 L32,34 Z" fill={c} opacity="0.2" />
            <path d="M32,14 L52,32 L32,34" />
            <path d="M12,46 H52" strokeWidth="0.5" opacity="0.5" />
        </g>
    ),

    diamond: (c) => (
        <g fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12,20 L32,4 L52,20 L32,60 Z" fill={c} opacity="0.15" />
            <path d="M12,20 L32,4 L52,20 L32,60 Z" />
            <path d="M12,20 H52" />
            <path d="M22,20 L32,4 L42,20 L32,60 Z" strokeWidth="0.5" opacity="0.5" />
            <path d="M32,20 V60" strokeWidth="0.5" opacity="0.3" />
        </g>
    ),

    valet: (c) => (
        <g fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="32" cy="16" r="10" />
            <path d="M16,58 V44 Q16,32 32,32 Q48,32 48,44 V58" />
            <path d="M32,32 V42" strokeWidth="0.5" />
            <path d="M28,42 L32,50 L36,42" fill={c} />
            <path d="M26,6 L32,10 L38,6" strokeWidth="1" opacity="0.5" />
        </g>
    ),

    penthouse: (c) => (
        <g fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="12" y="20" width="40" height="38" rx="2" />
            <path d="M12,20 L32,6 L52,20" strokeWidth="2" />
            <path d="M16,24 L32,12 L48,24" strokeWidth="0.5" opacity="0.4" />
            <rect x="26" y="36" width="12" height="22" fill={c} opacity="0.2" />
            <path d="M32,36 V58" strokeWidth="0.5" />
            <rect x="16" y="28" width="8" height="8" strokeWidth="0.5" />
            <rect x="40" y="28" width="8" height="8" strokeWidth="0.5" />
        </g>
    ),

    limousine: (c) => (
        <g fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8,36 L14,24 H50 L56,36" />
            <rect x="4" y="36" width="56" height="12" rx="2" />
            <path d="M12,36 L18,28 H46 L52,36" fill={c} opacity="0.08" />
            <circle cx="14" cy="50" r="4" fill={c} />
            <circle cx="50" cy="50" r="4" fill={c} />
            <path d="M22,32 V36 M32,32 V36 M42,32 V36" strokeWidth="0.5" opacity="0.5" />
        </g>
    ),

    cigar: (c) => (
        <g fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="8" y="28" width="48" height="8" rx="4" fill={c} />
            <path d="M8,32 Q4,28 8,24 Q4,20 8,16" strokeWidth="1" opacity="0.4" />
            <rect x="52" y="30" width="8" height="4" rx="2" fill={c} opacity="0.5" />
            <path d="M16,30 H48" stroke="white" strokeWidth="0.5" opacity="0.2" />
            <path d="M12,32 V28 M20,32 V28" strokeWidth="0.5" opacity="0.3" />
        </g>
    ),

    watch: (c) => (
        <g fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="32" cy="32" r="20" />
            <circle cx="32" cy="32" r="18" strokeWidth="0.5" opacity="0.4" />
            <path d="M32,32 V20" strokeWidth="2" />
            <path d="M32,32 L42,32" strokeWidth="1.5" />
            <path d="M28,32 L32,28 L36,32 L32,36 Z" fill={c} />
            <rect x="28" y="8" width="8" height="6" rx="1" fill={c} />
            <rect x="28" y="50" width="8" height="6" rx="1" fill={c} />
        </g>
    ),
};

export default function LuxuryArt({ icon, colors, size, uid, showBackground = false }) {
    const iconId = icon.id;
    const IconPath = LUXURY_ICONS[iconId];

    if (!IconPath) {
        return (
            <svg viewBox="0 0 64 64" width={size} height={size}>
                <path d="M28,32 L32,24 L36,32 L32,40 Z" fill={colors.primary} opacity="0.5" />
                <circle cx="32" cy="32" r="20" fill="none" stroke={colors.primary} strokeWidth="1.5" />
            </svg>
        );
    }

    return (
        <svg viewBox="0 0 64 64" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
            {showBackground && (
                <rect width="64" height="64" fill={colors.bg} rx="8" />
            )}
            {IconPath(colors.primary)}
        </svg>
    );
}
