import React from 'react';

// ============================================================================
// JELLY ART ENGINE - 3D GUMMY CANDY STYLE
// Style: Glossy surfaces, soft edges, translucent layers, candy-like appearance
// ============================================================================

const JELLY_ICONS = {
    phone: (c) => (
        <g>
            {/* Shadow */}
            <rect x="22" y="10" width="26" height="50" rx="6" fill={c} opacity="0.2" />
            {/* Main body */}
            <rect x="18" y="6" width="28" height="52" rx="6" fill={c} />
            {/* Glossy highlight */}
            <rect x="20" y="8" width="12" height="24" rx="4" fill="white" opacity="0.35" />
            {/* Secondary highlight */}
            <rect x="20" y="8" width="6" height="12" rx="3" fill="white" opacity="0.25" />
            {/* Screen area */}
            <rect x="22" y="14" width="20" height="32" rx="3" fill="white" opacity="0.15" />
            {/* Speaker */}
            <rect x="28" y="10" width="8" height="2" rx="1" fill="white" opacity="0.4" />
            {/* Home button */}
            <circle cx="32" cy="52" r="3" fill="white" opacity="0.3" />
        </g>
    ),

    messages: (c) => (
        <g>
            {/* Shadow */}
            <path d="M12,14 H56 Q60,14 60,18 V44 Q60,48 56,48 H30 L18,58 V48 H12 Q8,48 8,44 V18 Q8,14 12,14" fill={c} opacity="0.2" transform="translate(2,2)" />
            {/* Main bubble */}
            <path d="M10,10 H54 Q58,10 58,14 V40 Q58,44 54,44 H28 L16,54 V44 H10 Q6,44 6,40 V14 Q6,10 10,10" fill={c} />
            {/* Glossy highlight */}
            <path d="M12,12 H40 Q42,12 42,14 V26 Q42,28 40,28 H12 Q10,28 10,26 V14 Q10,12 12,12" fill="white" opacity="0.35" />
            {/* Small highlight */}
            <path d="M12,12 H24 Q26,12 26,14 V18 Q26,20 24,20 H12 Q10,20 10,18 V14 Q10,12 12,12" fill="white" opacity="0.25" />
            {/* Text lines */}
            <rect x="14" y="22" width="28" height="4" rx="2" fill="white" opacity="0.3" />
            <rect x="14" y="30" width="20" height="4" rx="2" fill="white" opacity="0.2" />
        </g>
    ),

    contacts: (c) => (
        <g>
            {/* Shadow */}
            <circle cx="34" cy="22" r="14" fill={c} opacity="0.2" />
            <path d="M16,60 V50 Q16,42 34,42 Q52,42 52,50 V60" fill={c} opacity="0.2" />
            {/* Head */}
            <circle cx="32" cy="20" r="14" fill={c} />
            {/* Head highlight */}
            <ellipse cx="27" cy="15" rx="6" ry="5" fill="white" opacity="0.35" />
            <ellipse cx="25" cy="13" rx="3" ry="2" fill="white" opacity="0.25" />
            {/* Eyes */}
            <circle cx="27" cy="18" r="2" fill="white" opacity="0.5" />
            <circle cx="37" cy="18" r="2" fill="white" opacity="0.5" />
            {/* Smile */}
            <path d="M28,26 Q32,30 36,26" fill="none" stroke="white" strokeWidth="2" opacity="0.4" />
            {/* Body */}
            <path d="M14,58 V48 Q14,38 32,38 Q50,38 50,48 V58 H14 Z" fill={c} />
            {/* Body highlight */}
            <path d="M18,42 Q26,40 32,42 V52 H18 V42" fill="white" opacity="0.3" />
        </g>
    ),

    email: (c) => (
        <g>
            {/* Shadow */}
            <rect x="10" y="18" width="52" height="36" rx="6" fill={c} opacity="0.2" />
            {/* Main envelope */}
            <rect x="6" y="14" width="52" height="36" rx="6" fill={c} />
            {/* Flap */}
            <path d="M6,16 Q6,14 8,14 L32,36 L56,14 Q58,14 58,16" fill={c} />
            {/* Glossy highlight on flap */}
            <path d="M10,14 L28,30 Q30,32 28,34 L10,20 Q8,18 10,14" fill="white" opacity="0.35" />
            {/* Small highlight */}
            <path d="M12,14 L20,22 Q22,24 20,26 L12,18 Q10,16 12,14" fill="white" opacity="0.25" />
            {/* Bottom glow */}
            <rect x="10" y="40" width="44" height="6" rx="3" fill="white" opacity="0.15" />
        </g>
    ),

    camera: (c) => (
        <g>
            {/* Shadow */}
            <rect x="10" y="22" width="52" height="38" rx="8" fill={c} opacity="0.2" />
            {/* Main body */}
            <rect x="6" y="18" width="52" height="38" rx="8" fill={c} />
            {/* Viewfinder */}
            <rect x="24" y="8" width="16" height="10" rx="4" fill={c} />
            {/* Viewfinder highlight */}
            <rect x="26" y="10" width="6" height="4" rx="2" fill="white" opacity="0.3" />
            {/* Body highlight */}
            <path d="M10,22 Q10,20 14,20 H36 Q40,20 40,24 V36 Q40,40 36,40 H10 V22" fill="white" opacity="0.3" />
            <rect x="12" y="22" width="12" height="8" rx="4" fill="white" opacity="0.2" />
            {/* Lens */}
            <circle cx="32" cy="38" r="14" fill="white" opacity="0.15" />
            <circle cx="32" cy="38" r="10" fill={c} />
            <circle cx="32" cy="38" r="6" fill="white" opacity="0.2" />
            {/* Lens highlight */}
            <circle cx="28" cy="34" r="3" fill="white" opacity="0.4" />
        </g>
    ),

    gallery: (c) => (
        <g>
            {/* Shadow */}
            <rect x="10" y="14" width="52" height="44" rx="8" fill={c} opacity="0.2" />
            {/* Main frame */}
            <rect x="6" y="10" width="52" height="44" rx="8" fill={c} />
            {/* Glossy highlight */}
            <path d="M10,14 Q10,12 14,12 H38 Q42,12 42,16 V30 Q42,34 38,34 H10 V14" fill="white" opacity="0.3" />
            <rect x="12" y="14" width="14" height="10" rx="4" fill="white" opacity="0.2" />
            {/* Sun */}
            <circle cx="18" cy="22" r="6" fill="white" opacity="0.5" />
            {/* Mountains */}
            <path d="M6,54 L22,34 L34,44 L50,26 L58,38 V50 Q58,54 54,54 H10 Q6,54 6,50 Z" fill="white" opacity="0.2" />
        </g>
    ),

    video: (c) => (
        <g>
            {/* Shadow */}
            <rect x="10" y="20" width="38" height="32" rx="6" fill={c} opacity="0.2" />
            {/* Main screen */}
            <rect x="6" y="16" width="38" height="32" rx="6" fill={c} />
            {/* Screen highlight */}
            <path d="M10,20 Q10,18 14,18 H30 Q34,18 34,22 V34 Q34,38 30,38 H10 V20" fill="white" opacity="0.3" />
            <rect x="12" y="20" width="10" height="8" rx="3" fill="white" opacity="0.2" />
            {/* Lens part */}
            <path d="M44,24 L58,14 Q60,13 60,16 V48 Q60,51 58,50 L44,40 Z" fill={c} />
            {/* Lens highlight */}
            <path d="M46,26 L54,20 V32 L46,28 Z" fill="white" opacity="0.35" />
            {/* REC */}
            <circle cx="54" cy="10" r="4" fill={c} />
            <circle cx="54" cy="10" r="2" fill="white" opacity="0.4" />
        </g>
    ),

    music: (c) => (
        <g>
            {/* Note shadows */}
            <ellipse cx="18" cy="50" rx="12" ry="8" fill={c} opacity="0.2" />
            <ellipse cx="50" cy="46" rx="12" ry="8" fill={c} opacity="0.2" />
            {/* Note 1 */}
            <ellipse cx="16" cy="48" rx="12" ry="8" fill={c} />
            <ellipse cx="12" cy="44" rx="5" ry="3" fill="white" opacity="0.35" />
            {/* Note 2 */}
            <ellipse cx="48" cy="44" rx="12" ry="8" fill={c} />
            <ellipse cx="44" cy="40" rx="5" ry="3" fill="white" opacity="0.35" />
            {/* Stems */}
            <rect x="26" y="12" width="4" height="38" rx="2" fill={c} />
            <rect x="58" y="8" width="4" height="38" rx="2" fill={c} />
            {/* Beam */}
            <path d="M26,12 Q42,6 62,8 V16 Q42,14 26,20 Z" fill={c} />
            {/* Beam highlight */}
            <path d="M28,12 Q38,8 48,10 L48,14 Q38,12 28,16 Z" fill="white" opacity="0.3" />
        </g>
    ),

    spotify: (c) => (
        <g>
            {/* Shadow */}
            <circle cx="34" cy="34" r="26" fill={c} opacity="0.2" />
            {/* Main circle */}
            <circle cx="32" cy="32" r="26" fill={c} />
            {/* Large highlight */}
            <path d="M14,20 Q10,10 32,8 Q40,8 44,14 Q32,18 20,24 Q14,28 14,20" fill="white" opacity="0.35" />
            <ellipse cx="24" cy="16" rx="8" ry="4" fill="white" opacity="0.25" />
            {/* Waves */}
            <path d="M14,24 Q32,16 50,26" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" opacity="0.5" />
            <path d="M16,36 Q32,28 48,38" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" opacity="0.4" />
            <path d="M18,48 Q32,40 46,50" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" opacity="0.3" />
        </g>
    ),

    maps: (c) => (
        <g>
            {/* Shadow */}
            <path d="M34,60 L18,40 Q8,28 16,16 Q24,6 34,6 Q44,6 52,16 Q60,28 50,40 Z" fill={c} opacity="0.2" />
            {/* Main pin */}
            <path d="M32,58 L16,38 Q6,26 14,14 Q22,4 32,4 Q42,4 50,14 Q58,26 48,38 Z" fill={c} />
            {/* Glossy highlight */}
            <path d="M20,22 Q14,14 26,10 Q34,8 40,16 Q32,20 24,26 Q18,30 20,22" fill="white" opacity="0.35" />
            <ellipse cx="26" cy="14" rx="6" ry="4" fill="white" opacity="0.25" />
            {/* Center dot */}
            <circle cx="32" cy="24" r="8" fill="white" opacity="0.3" />
            <circle cx="32" cy="24" r="5" fill={c} />
            <circle cx="30" cy="22" r="2" fill="white" opacity="0.4" />
        </g>
    ),

    gps: (c) => (
        <g>
            {/* Shadow */}
            <circle cx="34" cy="34" r="24" fill={c} opacity="0.2" />
            {/* Main circle */}
            <circle cx="32" cy="32" r="24" fill={c} />
            {/* Large highlight */}
            <path d="M16,24 Q12,14 32,10 Q40,10 44,18 Q32,22 22,28 Q14,34 16,24" fill="white" opacity="0.35" />
            <ellipse cx="28" cy="18" rx="8" ry="4" fill="white" opacity="0.25" />
            {/* Crosshairs */}
            <rect x="28" y="6" width="8" height="14" rx="4" fill="white" opacity="0.4" />
            <rect x="28" y="44" width="8" height="14" rx="4" fill="white" opacity="0.3" />
            <rect x="6" y="28" width="14" height="8" rx="4" fill="white" opacity="0.3" />
            <rect x="44" y="28" width="14" height="8" rx="4" fill="white" opacity="0.3" />
            {/* Center */}
            <circle cx="32" cy="32" r="6" fill="white" opacity="0.5" />
        </g>
    ),

    calendar: (c) => (
        <g>
            {/* Shadow */}
            <rect x="12" y="18" width="48" height="44" rx="8" fill={c} opacity="0.2" />
            {/* Main body */}
            <rect x="8" y="14" width="48" height="44" rx="8" fill={c} />
            {/* Header */}
            <rect x="8" y="14" width="48" height="14" rx="8" fill={c} />
            {/* Header highlight */}
            <rect x="12" y="16" width="20" height="6" rx="3" fill="white" opacity="0.35" />
            {/* Rings */}
            <rect x="18" y="8" width="6" height="12" rx="3" fill={c} />
            <rect x="40" y="8" width="6" height="12" rx="3" fill={c} />
            <rect x="19" y="9" width="2" height="4" rx="1" fill="white" opacity="0.4" />
            <rect x="41" y="9" width="2" height="4" rx="1" fill="white" opacity="0.4" />
            {/* Date highlight */}
            <rect x="14" y="34" width="12" height="10" rx="4" fill="white" opacity="0.4" />
            {/* Other dates */}
            <rect x="30" y="34" width="10" height="8" rx="3" fill="white" opacity="0.2" />
            <rect x="44" y="34" width="10" height="8" rx="3" fill="white" opacity="0.2" />
        </g>
    ),

    clock: (c) => (
        <g>
            {/* Shadow */}
            <circle cx="34" cy="34" r="26" fill={c} opacity="0.2" />
            {/* Main face */}
            <circle cx="32" cy="32" r="26" fill={c} />
            {/* Large highlight */}
            <path d="M14,24 Q10,12 32,8 Q42,8 46,16 Q34,20 22,28 Q14,34 14,24" fill="white" opacity="0.35" />
            <ellipse cx="26" cy="16" rx="8" ry="4" fill="white" opacity="0.25" />
            {/* Hour hand */}
            <rect x="29" y="18" width="6" height="16" rx="3" fill="white" opacity="0.5" />
            {/* Minute hand */}
            <rect x="32" y="29" width="16" height="6" rx="3" fill="white" opacity="0.4" />
            {/* Center */}
            <circle cx="32" cy="32" r="4" fill="white" opacity="0.6" />
            {/* Hour markers */}
            <circle cx="32" cy="10" r="3" fill="white" opacity="0.4" />
            <circle cx="54" cy="32" r="3" fill="white" opacity="0.3" />
            <circle cx="32" cy="54" r="3" fill="white" opacity="0.3" />
            <circle cx="10" cy="32" r="3" fill="white" opacity="0.3" />
        </g>
    ),

    calculator: (c) => (
        <g>
            {/* Shadow */}
            <rect x="16" y="10" width="40" height="52" rx="8" fill={c} opacity="0.2" />
            {/* Main body */}
            <rect x="12" y="6" width="40" height="52" rx="8" fill={c} />
            {/* Highlight */}
            <path d="M16,12 Q16,10 20,10 H36 Q40,10 40,14 V24 Q40,28 36,28 H16 V12" fill="white" opacity="0.3" />
            <rect x="18" y="12" width="10" height="6" rx="3" fill="white" opacity="0.2" />
            {/* Screen */}
            <rect x="16" y="10" width="32" height="14" rx="4" fill="white" opacity="0.2" />
            {/* Buttons - gummy */}
            <rect x="16" y="28" width="8" height="6" rx="3" fill="white" opacity="0.25" />
            <rect x="28" y="28" width="8" height="6" rx="3" fill="white" opacity="0.25" />
            <rect x="40" y="28" width="8" height="6" rx="3" fill="white" opacity="0.4" />
            <rect x="16" y="38" width="8" height="6" rx="3" fill="white" opacity="0.25" />
            <rect x="28" y="38" width="8" height="6" rx="3" fill="white" opacity="0.25" />
            <rect x="40" y="38" width="8" height="6" rx="3" fill="white" opacity="0.4" />
            <rect x="16" y="48" width="20" height="6" rx="3" fill="white" opacity="0.25" />
            <rect x="40" y="48" width="8" height="6" rx="3" fill="white" opacity="0.4" />
        </g>
    ),

    flashlight: (c) => (
        <g>
            {/* Light beam glow */}
            <path d="M26,12 L22,28 H42 L38,12 Z" fill={c} opacity="0.2" />
            {/* Head */}
            <path d="M22,10 L18,28 H46 L42,10 Z" fill={c} />
            {/* Head highlight */}
            <path d="M24,12 L22,24 H32 L34,12 Z" fill="white" opacity="0.35" />
            {/* Lens */}
            <ellipse cx="32" cy="14" rx="8" ry="4" fill="white" opacity="0.5" />
            <ellipse cx="30" cy="13" rx="4" ry="2" fill="white" opacity="0.3" />
            {/* Body */}
            <rect x="18" y="28" width="28" height="28" rx="4" fill={c} />
            {/* Body highlight */}
            <rect x="20" y="30" width="10" height="14" rx="4" fill="white" opacity="0.3" />
        </g>
    ),

    weather: (c) => (
        <g>
            {/* Sun */}
            <circle cx="22" cy="20" r="10" fill={c} />
            <ellipse cx="18" cy="16" rx="4" ry="3" fill="white" opacity="0.4" />
            {/* Cloud shadow */}
            <path d="M26,52 Q18,48 20,40 Q16,32 28,34 Q36,26 46,32 Q56,34 54,46 Q54,54 44,56 H30 Q22,56 26,52" fill={c} opacity="0.2" transform="translate(2,2)" />
            {/* Cloud */}
            <path d="M24,50 Q16,46 18,38 Q14,30 26,32 Q34,24 44,30 Q54,32 52,44 Q52,52 42,54 H28 Q20,54 24,50 Z" fill={c} />
            {/* Cloud highlight */}
            <path d="M30,36 Q24,34 28,30 Q36,26 42,32 Q36,36 30,36 Z" fill="white" opacity="0.35" />
            <ellipse cx="32" cy="32" rx="4" ry="2" fill="white" opacity="0.25" />
        </g>
    ),

    settings: (c) => (
        <g>
            {/* Shadow */}
            <path d="M30,8 H38 L40,14 L46,16 L52,12 L56,16 L52,22 L54,28 L60,30 V38 L54,40 L52,46 L56,52 L52,56 L46,52 L40,54 L38,60 H30 L28,54 L22,52 L16,56 L12,52 L16,46 L14,40 L8,38 V30 L14,28 L16,22 L12,16 L16,12 L22,16 L28,14 Z" fill={c} opacity="0.2" transform="translate(2,2)" />
            {/* Main gear */}
            <path d="M28,6 H36 L38,12 L44,14 L50,10 L54,14 L50,20 L52,26 L58,28 V36 L52,38 L50,44 L54,50 L50,54 L44,50 L38,52 L36,58 H28 L26,52 L20,50 L14,54 L10,50 L14,44 L12,38 L6,36 V28 L12,26 L14,20 L10,14 L14,10 L20,14 L26,12 Z" fill={c} />
            {/* Highlight */}
            <path d="M28,8 L30,14 L22,18 L16,14 L18,18 L14,24 L12,28 L18,30 Q24,20 36,16 L36,10 L28,8" fill="white" opacity="0.3" />
            {/* Center */}
            <circle cx="32" cy="32" r="10" fill="white" opacity="0.2" />
            <circle cx="32" cy="32" r="6" fill={c} />
            <circle cx="30" cy="30" r="2" fill="white" opacity="0.4" />
        </g>
    ),

    notifications: (c) => (
        <g>
            {/* Shadow */}
            <path d="M18,46 H50 L46,36 V28 Q46,14 34,12 Q22,14 22,28 V36 Z" fill={c} opacity="0.2" transform="translate(2,2)" />
            {/* Bell body */}
            <path d="M16,44 H48 L44,34 V26 Q44,12 32,10 Q20,12 20,26 V34 Z" fill={c} />
            {/* Bell highlight */}
            <path d="M24,18 Q22,14 30,12 Q36,12 38,18 Q32,22 26,26 Q22,30 24,18" fill="white" opacity="0.35" />
            <ellipse cx="28" cy="16" rx="4" ry="2" fill="white" opacity="0.25" />
            {/* Clapper */}
            <ellipse cx="32" cy="52" rx="6" ry="4" fill={c} />
            <ellipse cx="30" cy="50" rx="2" ry="1" fill="white" opacity="0.3" />
            {/* Top knob */}
            <circle cx="32" cy="8" r="3" fill={c} />
            <circle cx="31" cy="7" r="1" fill="white" opacity="0.4" />
            {/* Alert badge */}
            <circle cx="48" cy="16" r="6" fill={c} />
            <circle cx="46" cy="14" r="2" fill="white" opacity="0.4" />
        </g>
    ),

    games: (c) => (
        <g>
            {/* Shadow */}
            <path d="M10,30 Q6,20 16,18 H52 Q62,20 58,30 V42 Q62,54 50,54 H42 Q38,54 38,46 V42 H30 V46 Q30,54 26,54 H18 Q6,52 10,42 Z" fill={c} opacity="0.2" transform="translate(2,2)" />
            {/* Controller */}
            <path d="M8,28 Q4,18 14,16 H50 Q60,18 56,28 V40 Q60,52 48,52 H40 Q36,52 36,44 V40 H28 V44 Q28,52 24,52 H16 Q4,50 8,40 Z" fill={c} />
            {/* Highlight */}
            <path d="M12,22 Q8,18 18,16 H36 Q44,18 42,26 V32 Q36,36 28,38 H12 V22" fill="white" opacity="0.3" />
            <ellipse cx="24" cy="22" rx="8" ry="4" fill="white" opacity="0.2" />
            {/* D-pad */}
            <rect x="14" y="28" width="4" height="12" rx="2" fill="white" opacity="0.4" />
            <rect x="12" y="32" width="12" height="4" rx="2" fill="white" opacity="0.4" />
            {/* Buttons */}
            <circle cx="46" cy="28" r="5" fill="white" opacity="0.5" />
            <circle cx="54" cy="36" r="5" fill="white" opacity="0.35" />
        </g>
    ),

    casino: (c) => (
        <g>
            {/* Dice 1 shadow */}
            <rect x="10" y="10" width="24" height="24" rx="6" fill={c} opacity="0.2" />
            {/* Dice 1 */}
            <rect x="6" y="6" width="24" height="24" rx="6" fill={c} />
            <rect x="10" y="10" width="10" height="8" rx="3" fill="white" opacity="0.35" />
            <circle cx="18" cy="18" r="4" fill="white" opacity="0.5" />
            {/* Dice 2 shadow */}
            <rect x="38" y="38" width="24" height="24" rx="6" fill={c} opacity="0.2" />
            {/* Dice 2 */}
            <rect x="34" y="34" width="24" height="24" rx="6" fill={c} />
            <rect x="38" y="38" width="10" height="8" rx="3" fill="white" opacity="0.35" />
            <circle cx="40" cy="40" r="3" fill="white" opacity="0.5" />
            <circle cx="52" cy="40" r="3" fill="white" opacity="0.4" />
            <circle cx="40" cy="52" r="3" fill="white" opacity="0.4" />
            <circle cx="52" cy="52" r="3" fill="white" opacity="0.4" />
        </g>
    ),

    bank: (c) => (
        <g>
            {/* Shadow */}
            <path d="M10,28 L34,10 L58,28 V30 H10 Z" fill={c} opacity="0.2" transform="translate(2,2)" />
            <rect x="12" y="34" width="48" height="24" rx="4" fill={c} opacity="0.2" transform="translate(2,2)" />
            {/* Pediment */}
            <path d="M8,26 L32,8 L56,26 V28 H8 Z" fill={c} />
            <path d="M16,24 L32,12 L40,18" fill="white" opacity="0.35" />
            {/* Columns base */}
            <rect x="8" y="28" width="48" height="24" rx="2" fill={c} />
            {/* Columns */}
            <rect x="14" y="30" width="6" height="20" rx="3" fill="white" opacity="0.4" />
            <rect x="29" y="30" width="6" height="20" rx="3" fill="white" opacity="0.3" />
            <rect x="44" y="30" width="6" height="20" rx="3" fill="white" opacity="0.3" />
            {/* Base */}
            <rect x="8" y="52" width="48" height="6" rx="3" fill={c} />
            <rect x="12" y="53" width="16" height="2" rx="1" fill="white" opacity="0.3" />
        </g>
    ),

    taxi: (c) => (
        <g>
            {/* Shadow */}
            <path d="M14,38 L22,24 H46 L54,38" fill={c} opacity="0.2" transform="translate(2,2)" />
            <rect x="10" y="40" width="50" height="12" rx="4" fill={c} opacity="0.2" transform="translate(2,2)" />
            {/* Cabin */}
            <path d="M12,36 L20,22 H44 L52,36" fill={c} />
            {/* Body */}
            <rect x="6" y="36" width="52" height="14" rx="4" fill={c} />
            {/* Taxi sign */}
            <rect x="26" y="14" width="12" height="8" rx="3" fill={c} />
            <rect x="27" y="15" width="4" height="3" rx="1" fill="white" opacity="0.35" />
            {/* Highlights */}
            <path d="M16,36 L22,24 H34 L28,36" fill="white" opacity="0.3" />
            <rect x="10" y="38" width="20" height="6" rx="3" fill="white" opacity="0.25" />
            {/* Wheels */}
            <circle cx="18" cy="52" r="6" fill={c} />
            <circle cx="16" cy="50" r="2" fill="white" opacity="0.4" />
            <circle cx="46" cy="52" r="6" fill={c} />
            <circle cx="44" cy="50" r="2" fill="white" opacity="0.4" />
        </g>
    ),

    home: (c) => (
        <g>
            {/* Shadow */}
            <path d="M8,36 L34,12 L60,36" fill={c} opacity="0.2" transform="translate(2,2)" />
            <rect x="16" y="36" width="36" height="24" rx="4" fill={c} opacity="0.2" transform="translate(2,2)" />
            {/* Roof */}
            <path d="M6,34 L32,10 L58,34 L52,34 V58 H12 V34 Z" fill={c} />
            {/* Roof highlight */}
            <path d="M16,32 L32,14 L40,22" fill="white" opacity="0.35" />
            {/* Door */}
            <rect x="26" y="40" width="12" height="18" rx="4" fill="white" opacity="0.3" />
            <circle cx="36" cy="50" r="2" fill={c} />
            {/* Window */}
            <rect x="40" y="40" width="10" height="10" rx="3" fill="white" opacity="0.25" />
            {/* Chimney */}
            <rect x="44" y="18" width="6" height="12" rx="2" fill={c} />
            <rect x="45" y="19" width="2" height="4" rx="1" fill="white" opacity="0.3" />
        </g>
    ),

    food: (c) => (
        <g>
            {/* Fork shadow */}
            <rect x="14" y="12" width="16" height="48" rx="4" fill={c} opacity="0.2" transform="translate(2,2)" />
            {/* Fork handle */}
            <rect x="14" y="32" width="6" height="26" rx="3" fill={c} />
            <rect x="15" y="34" width="2" height="10" rx="1" fill="white" opacity="0.3" />
            {/* Fork tines */}
            <rect x="10" y="8" width="4" height="24" rx="2" fill={c} />
            <rect x="16" y="8" width="4" height="24" rx="2" fill={c} />
            <rect x="22" y="8" width="4" height="24" rx="2" fill={c} />
            {/* Tine highlights */}
            <rect x="11" y="10" width="2" height="8" rx="1" fill="white" opacity="0.35" />
            <rect x="17" y="10" width="2" height="8" rx="1" fill="white" opacity="0.35" />
            <rect x="23" y="10" width="2" height="8" rx="1" fill="white" opacity="0.35" />
            {/* Knife shadow */}
            <path d="M46" y="12" fill={c} opacity="0.2" transform="translate(2,2)" />
            {/* Knife */}
            <path d="M44,8 Q56,16 56,32 V58 H50 V32 Q50,20 44,14 Z" fill={c} />
            <path d="M46,12 Q52,18 52,28" fill="white" opacity="0.3" />
        </g>
    ),

    electrician: (c) => (
        <g>
            {/* Shadow */}
            <path d="M40,4 L18,34 H32 L26,64 L54,30 H38 Z" fill={c} opacity="0.2" transform="translate(2,2)" />
            {/* Lightning */}
            <path d="M38,2 L16,32 H30 L24,62 L52,28 H36 Z" fill={c} />
            {/* Highlight */}
            <path d="M36,6 L20,30 H28 L26,40" fill="white" opacity="0.35" />
            <path d="M34,10 L26,22" fill="white" opacity="0.25" />
        </g>
    ),

    mechanic: (c) => (
        <g>
            {/* Shadow */}
            <path d="M20,12 L12,20 L28,36 L12,52 L20,60 L36,44 L52,60 L60,52 L44,36 L60,20 L52,12 L36,28 Z" fill={c} opacity="0.2" transform="translate(2,2)" />
            {/* Wrench */}
            <path d="M18,10 L10,18 L26,34 L10,50 L18,58 L34,42 L50,58 L58,50 L42,34 L58,18 L50,10 L34,26 Z" fill={c} />
            {/* Highlight */}
            <path d="M20,14 L14,20 L24,30 L18,20 Z" fill="white" opacity="0.35" />
            <path d="M22,16 L16,22" fill="white" opacity="0.25" />
            {/* Center */}
            <circle cx="34" cy="34" r="8" fill="white" opacity="0.3" />
            <circle cx="32" cy="32" r="3" fill="white" opacity="0.2" />
        </g>
    ),

    market: (c) => (
        <g>
            {/* Shadow */}
            <path d="M26,26 H60 L56,50 H32 Z" fill={c} opacity="0.2" transform="translate(2,2)" />
            {/* Handle */}
            <path d="M8,14 H18 L26,46" fill="none" stroke={c} strokeWidth="6" strokeLinecap="round" />
            {/* Cart body */}
            <path d="M24,24 H58 L54,48 H30 Z" fill={c} />
            {/* Highlight */}
            <path d="M28,28 H46 L44,40 H32 Z" fill="white" opacity="0.3" />
            {/* Wheels */}
            <circle cx="34" cy="56" r="6" fill={c} />
            <circle cx="32" cy="54" r="2" fill="white" opacity="0.4" />
            <circle cx="52" cy="56" r="6" fill={c} />
            <circle cx="50" cy="54" r="2" fill="white" opacity="0.4" />
        </g>
    ),

    shop247: (c) => (
        <g>
            {/* Shadow */}
            <rect x="12" y="26" width="48" height="36" rx="6" fill={c} opacity="0.2" transform="translate(2,2)" />
            {/* Building */}
            <rect x="8" y="22" width="48" height="36" rx="6" fill={c} />
            {/* Roof */}
            <path d="M8,22 L20,8 H44 L56,22" fill={c} />
            <path d="M16,22 L26,12 H36" fill="white" opacity="0.35" />
            {/* Highlight */}
            <rect x="12" y="26" width="18" height="14" rx="4" fill="white" opacity="0.3" />
            {/* Sign */}
            <rect x="8" y="22" width="48" height="10" rx="4" fill="white" opacity="0.15" />
            {/* Door */}
            <rect x="24" y="38" width="16" height="20" rx="4" fill="white" opacity="0.25" />
        </g>
    ),

    business: (c) => (
        <g>
            {/* Shadow */}
            <rect x="10" y="26" width="52" height="34" rx="6" fill={c} opacity="0.2" transform="translate(2,2)" />
            {/* Briefcase */}
            <rect x="6" y="22" width="52" height="34" rx="6" fill={c} />
            {/* Handle */}
            <path d="M22,22 V14 Q22,8 32,8 Q42,8 42,14 V22" fill="none" stroke={c} strokeWidth="6" />
            <rect x="26" y="10" width="4" height="6" rx="2" fill="white" opacity="0.3" />
            {/* Highlight */}
            <path d="M12,28 Q12,24 18,24 H38 Q44,24 44,30 V40 H12 V28" fill="white" opacity="0.3" />
            <rect x="14" y="26" width="12" height="8" rx="3" fill="white" opacity="0.2" />
            {/* Clasp */}
            <rect x="26" y="36" width="12" height="10" rx="4" fill="white" opacity="0.4" />
        </g>
    ),

    browser: (c) => (
        <g>
            {/* Shadow */}
            <circle cx="34" cy="34" r="26" fill={c} opacity="0.2" />
            {/* Globe */}
            <circle cx="32" cy="32" r="26" fill={c} />
            {/* Large highlight */}
            <path d="M14,24 Q10,12 32,8 Q42,8 46,16 Q34,20 22,28 Q14,34 14,24" fill="white" opacity="0.35" />
            <ellipse cx="26" cy="16" rx="8" ry="4" fill="white" opacity="0.25" />
            {/* Meridian */}
            <ellipse cx="32" cy="32" rx="10" ry="26" fill="none" stroke="white" strokeWidth="2" opacity="0.3" />
            {/* Parallels */}
            <path d="M6,32 H58" stroke="white" strokeWidth="2" opacity="0.3" />
            <path d="M10,20 H54" stroke="white" strokeWidth="1.5" opacity="0.2" />
            <path d="M10,44 H54" stroke="white" strokeWidth="1.5" opacity="0.2" />
        </g>
    ),

    hospital: (c) => (
        <g>
            {/* Shadow */}
            <rect x="14" y="14" width="44" height="44" rx="8" fill={c} opacity="0.2" />
            {/* Building */}
            <rect x="10" y="10" width="44" height="44" rx="8" fill={c} />
            {/* Highlight */}
            <path d="M16,18 Q16,14 22,14 H38 Q44,14 44,20 V34 H16 V18" fill="white" opacity="0.3" />
            <rect x="18" y="16" width="12" height="8" rx="3" fill="white" opacity="0.2" />
            {/* Cross */}
            <rect x="28" y="18" width="8" height="28" rx="3" fill="white" opacity="0.5" />
            <rect x="18" y="28" width="28" height="8" rx="3" fill="white" opacity="0.5" />
        </g>
    ),

    police: (c) => (
        <g>
            {/* Shadow */}
            <path d="M34,8 L58,20 V40 Q58,58 34,62 Q10,58 10,40 V20 Z" fill={c} opacity="0.2" />
            {/* Shield */}
            <path d="M32,6 L56,18 V38 Q56,56 32,60 Q8,56 8,38 V18 Z" fill={c} />
            {/* Highlight */}
            <path d="M18,24 Q14,18 28,14 Q40,12 46,20 Q36,26 24,32 Q16,38 18,24" fill="white" opacity="0.35" />
            <ellipse cx="30" cy="18" rx="8" ry="4" fill="white" opacity="0.25" />
            {/* Star */}
            <path d="M32,22 L34,30 H42 L36,34 L38,42 L32,38 L26,42 L28,34 L22,30 H30 Z" fill="white" opacity="0.5" />
        </g>
    ),

    gang: (c) => (
        <g>
            {/* Shadow */}
            <path d="M18,32 Q16,14 34,12 Q52,14 50,32 V40 Q52,50 42,50 L40,58 H28 L26,50 Q18,50 18,40 Z" fill={c} opacity="0.2" />
            {/* Skull */}
            <path d="M16,30 Q14,12 32,10 Q50,12 48,30 V38 Q50,48 40,48 L38,56 H26 L24,48 Q16,48 16,38 Z" fill={c} />
            {/* Highlight */}
            <path d="M24,22 Q20,14 32,12 Q42,12 44,22 Q34,28 26,32 Q20,38 24,22" fill="white" opacity="0.35" />
            <ellipse cx="30" cy="16" rx="6" ry="3" fill="white" opacity="0.25" />
            {/* Eyes */}
            <ellipse cx="24" cy="28" rx="5" ry="6" fill="white" opacity="0.4" />
            <ellipse cx="40" cy="28" rx="5" ry="6" fill="white" opacity="0.4" />
            {/* Nose */}
            <path d="M30,40 L32,44 L34,40" fill="white" opacity="0.3" />
            {/* Teeth */}
            <rect x="26" y="56" width="4" height="6" rx="1" fill="white" opacity="0.4" />
            <rect x="32" y="56" width="4" height="8" rx="1" fill="white" opacity="0.4" />
            <rect x="38" y="56" width="4" height="6" rx="1" fill="white" opacity="0.4" />
        </g>
    ),

    // === JELLY EXTRA ICONS ===
    gummy: (c) => (
        <g>
            <ellipse cx="34" cy="36" rx="24" ry="20" fill={c} opacity="0.2" />
            <ellipse cx="32" cy="34" rx="24" ry="20" fill={c} />
            <ellipse cx="24" cy="28" rx="10" ry="8" fill="white" opacity="0.35" />
            <ellipse cx="20" cy="24" rx="5" ry="3" fill="white" opacity="0.25" />
            <circle cx="24" cy="34" r="3" fill="white" opacity="0.4" />
            <circle cx="40" cy="34" r="3" fill="white" opacity="0.4" />
            <path d="M28,42 Q32,48 36,42" fill="none" stroke="white" strokeWidth="3" opacity="0.4" />
        </g>
    ),

    candy: (c) => (
        <g>
            <circle cx="34" cy="34" r="16" fill={c} opacity="0.2" />
            <circle cx="32" cy="32" r="16" fill={c} />
            <ellipse cx="26" cy="26" rx="6" ry="5" fill="white" opacity="0.4" />
            <path d="M16,32 L4,26" stroke={c} strokeWidth="6" strokeLinecap="round" />
            <path d="M48,32 L60,38" stroke={c} strokeWidth="6" strokeLinecap="round" />
        </g>
    ),

    blob: (c) => (
        <g>
            <path d="M16,40 Q8,28 16,18 Q26,8 40,12 Q54,16 56,30 Q58,44 48,52 Q36,60 24,54 Q12,48 16,40" fill={c} opacity="0.2" transform="translate(2,2)" />
            <path d="M14,38 Q6,26 14,16 Q24,6 38,10 Q52,14 54,28 Q56,42 46,50 Q34,58 22,52 Q10,46 14,38" fill={c} />
            <path d="M22,22 Q16,16 30,14 Q40,14 42,24 Q32,28 24,32 Q18,36 22,22" fill="white" opacity="0.35" />
        </g>
    ),

    bubble: (c) => (
        <g>
            <circle cx="34" cy="34" r="22" fill={c} opacity="0.15" />
            <circle cx="32" cy="32" r="22" fill={c} opacity="0.3" />
            <circle cx="32" cy="32" r="20" fill="none" stroke={c} strokeWidth="2" />
            <ellipse cx="24" cy="24" rx="8" ry="6" fill="white" opacity="0.5" />
            <ellipse cx="20" cy="20" rx="3" ry="2" fill="white" opacity="0.4" />
        </g>
    ),

    slime: (c) => (
        <g>
            <path d="M10,32 Q8,20 20,16 Q32,12 44,16 Q56,20 54,32 Q56,44 48,50 Q40,56 28,56 Q16,56 12,48 Q8,40 10,32" fill={c} opacity="0.2" transform="translate(2,2)" />
            <path d="M8,30 Q6,18 18,14 Q30,10 42,14 Q54,18 52,30 Q54,42 46,48 Q38,54 26,54 Q14,54 10,46 Q6,38 8,30" fill={c} />
            <path d="M18,24 Q14,18 28,16 Q40,16 44,26 Q32,32 22,36 Q14,40 18,24" fill="white" opacity="0.35" />
            <path d="M48,48 V58" stroke={c} strokeWidth="4" strokeLinecap="round" opacity="0.6" />
            <path d="M22,52 V60" stroke={c} strokeWidth="3" strokeLinecap="round" opacity="0.4" />
        </g>
    ),
};

export default function JellyArt({ icon, colors, size, uid, showBackground = false }) {
    const iconId = icon.id;
    const IconPath = JELLY_ICONS[iconId];

    if (!IconPath) {
        return (
            <svg viewBox="0 0 64 64" width={size} height={size}>
                <circle cx="34" cy="34" r="20" fill={colors.primary} opacity="0.2" />
                <circle cx="32" cy="32" r="20" fill={colors.primary} />
                <ellipse cx="24" cy="24" rx="8" ry="6" fill="white" opacity="0.35" />
            </svg>
        );
    }

    return (
        <svg viewBox="0 0 64 64" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
            {showBackground && (
                <rect width="64" height="64" fill={colors.bg} rx="16" />
            )}
            {IconPath(colors.primary)}
        </svg>
    );
}
