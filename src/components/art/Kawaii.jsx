import React from 'react';

// ============================================================================
// KAWAII ART ENGINE - ULTRA CUTE JAPANESE STYLE (Based on Generated Reference)
// Style: Blob shapes, cute faces, hearts, sparkles, pastel soft aesthetic
// ============================================================================

const KAWAII_ICONS = {
    phone: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Phone body - blob shape */}
            <path d="M18,8 Q14,8 14,14 V50 Q14,56 20,56 H44 Q50,56 50,50 V14 Q50,8 44,8 Z" />
            {/* Screen */}
            <rect x="18" y="14" width="28" height="32" rx="4" fill={c} opacity="0.1" />
            {/* Cute face on screen */}
            <circle cx="26" cy="28" r="2" fill={c} />
            <circle cx="38" cy="28" r="2" fill={c} />
            <path d="M28,34 Q32,38 36,34" strokeWidth="2" />
            {/* Blush marks */}
            <ellipse cx="22" cy="32" rx="3" ry="1.5" fill={c} opacity="0.3" />
            <ellipse cx="42" cy="32" rx="3" ry="1.5" fill={c} opacity="0.3" />
            {/* Bunny ears */}
            <path d="M24,8 Q22,0 26,2 Q28,4 26,8" fill={c} opacity="0.3" />
            <path d="M40,8 Q42,0 38,2 Q36,4 38,8" fill={c} opacity="0.3" />
            {/* Heart decoration */}
            <path d="M8,20 Q8,16 12,16 Q16,16 16,20 Q16,26 12,30 Q8,26 8,20 Z" fill={c} />
        </g>
    ),

    messages: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Bubble - cloud-like */}
            <path d="M8,12 Q4,12 4,18 V36 Q4,42 10,42 H12 V52 L24,42 H52 Q58,42 58,36 V18 Q58,12 52,12 Z" />
            {/* Cute face */}
            <circle cx="22" cy="26" r="3" fill={c} />
            <circle cx="40" cy="26" r="3" fill={c} />
            <path d="M26,34 Q32,40 38,34" strokeWidth="2" />
            {/* Blush */}
            <ellipse cx="18" cy="30" rx="3" ry="2" fill={c} opacity="0.25" />
            <ellipse cx="44" cy="30" rx="3" ry="2" fill={c} opacity="0.25" />
            {/* Sparkles */}
            <path d="M56,8 L58,12 L56,16 L54,12 Z" fill={c} />
        </g>
    ),

    contacts: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Head - round blob */}
            <circle cx="32" cy="22" r="14" />
            {/* Cute face */}
            <circle cx="26" cy="20" r="2.5" fill={c} />
            <circle cx="38" cy="20" r="2.5" fill={c} />
            <path d="M28,28 Q32,32 36,28" strokeWidth="2" />
            {/* Blush */}
            <ellipse cx="22" cy="24" rx="3" ry="2" fill={c} opacity="0.3" />
            <ellipse cx="42" cy="24" rx="3" ry="2" fill={c} opacity="0.3" />
            {/* Cat ears */}
            <path d="M20,12 L16,2 L24,10" fill={c} opacity="0.2" />
            <path d="M44,12 L48,2 L40,10" fill={c} opacity="0.2" />
            {/* Body */}
            <path d="M14,58 V52 Q14,40 32,40 Q50,40 50,52 V58" />
            {/* Hearts */}
            <path d="M8,36 Q8,32 12,32 Q16,32 16,36 Q16,42 12,46 Q8,42 8,36 Z" fill={c} />
        </g>
    ),

    email: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Envelope - rounded */}
            <rect x="6" y="14" width="52" height="36" rx="6" />
            {/* Flap with cute face */}
            <path d="M6,18 L32,38 L58,18" />
            {/* Eyes on envelope */}
            <circle cx="24" cy="34" r="2" fill={c} />
            <circle cx="40" cy="34" r="2" fill={c} />
            <path d="M28,40 Q32,44 36,40" strokeWidth="1.5" />
            {/* Blush */}
            <ellipse cx="20" cy="38" rx="2" ry="1" fill={c} opacity="0.3" />
            <ellipse cx="44" cy="38" rx="2" ry="1" fill={c} opacity="0.3" />
            {/* Heart seal */}
            <path d="M50,8 Q50,4 54,4 Q58,4 58,8 Q58,14 54,18 Q50,14 50,8 Z" fill={c} />
        </g>
    ),

    camera: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Camera body - rounded cat shape */}
            <rect x="8" y="18" width="48" height="36" rx="8" />
            {/* Cat ears on camera */}
            <path d="M16,18 L12,6 L24,14" fill={c} opacity="0.3" />
            <path d="M48,18 L52,6 L40,14" fill={c} opacity="0.3" />
            {/* Lens - big eye */}
            <circle cx="32" cy="36" r="12" />
            <circle cx="32" cy="36" r="6" fill={c} opacity="0.15" />
            <circle cx="32" cy="36" r="3" fill={c} />
            {/* Sparkle on lens */}
            <circle cx="28" cy="32" r="2" fill="white" opacity="0.8" />
            {/* Flash */}
            <circle cx="50" cy="26" r="3" fill={c} />
            {/* Blush */}
            <ellipse cx="18" cy="40" rx="4" ry="2" fill={c} opacity="0.25" />
            <ellipse cx="46" cy="40" rx="4" ry="2" fill={c} opacity="0.25" />
        </g>
    ),

    gallery: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Frame */}
            <rect x="6" y="10" width="52" height="44" rx="6" />
            {/* Happy sun */}
            <circle cx="18" cy="24" r="6" fill={c} />
            <circle cx="16" cy="22" r="1" fill="white" />
            <circle cx="20" cy="22" r="1" fill="white" />
            <path d="M16,26 Q18,28 20,26" stroke="white" strokeWidth="1" />
            {/* Happy mountains */}
            <path d="M6,54 L22,34 L34,46 L48,28 L58,42 V54 Z" fill={c} opacity="0.15" />
            {/* Rainbow */}
            <path d="M10,50 Q20,36 30,50" strokeWidth="2" opacity="0.5" />
        </g>
    ),

    video: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Screen - rounded */}
            <rect x="6" y="16" width="36" height="32" rx="6" />
            {/* Cute face on screen */}
            <circle cx="18" cy="28" r="2" fill={c} />
            <circle cx="30" cy="28" r="2" fill={c} />
            <path d="M20,36 Q24,40 28,36" strokeWidth="1.5" />
            {/* Blush */}
            <ellipse cx="14" cy="32" rx="3" ry="1.5" fill={c} opacity="0.25" />
            <ellipse cx="34" cy="32" rx="3" ry="1.5" fill={c} opacity="0.25" />
            {/* Play button */}
            <path d="M42,24 L58,14 V50 L42,40 Z" fill={c} />
        </g>
    ),

    music: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Notes with cute faces */}
            <circle cx="16" cy="48" r="10" fill={c} />
            <circle cx="13" cy="46" r="1.5" fill="white" />
            <circle cx="19" cy="46" r="1.5" fill="white" />
            <path d="M13,52 Q16,54 19,52" stroke="white" strokeWidth="1.5" />

            <circle cx="48" cy="42" r="10" fill={c} />
            <circle cx="45" cy="40" r="1.5" fill="white" />
            <circle cx="51" cy="40" r="1.5" fill="white" />
            <path d="M45,46 Q48,48 51,46" stroke="white" strokeWidth="1.5" />

            {/* Stems */}
            <path d="M26,48 V14" strokeWidth="4" />
            <path d="M58,42 V12" strokeWidth="4" />
            {/* Beam with bow */}
            <path d="M26,14 Q42,6 58,12" strokeWidth="5" />
            {/* Bow decoration */}
            <path d="M40,6 Q42,2 46,4 Q48,6 44,10" fill={c} />
            <path d="M40,6 Q38,2 34,4 Q32,6 36,10" fill={c} />
        </g>
    ),

    spotify: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round">
            {/* Circle with face */}
            <circle cx="32" cy="32" r="26" />
            {/* Eyes */}
            <circle cx="24" cy="24" r="3" fill={c} />
            <circle cx="40" cy="24" r="3" fill={c} />
            {/* Happy mouth - sound waves */}
            <path d="M20,36 Q32,32 44,38" strokeWidth="3" />
            <path d="M22,44 Q32,40 42,46" strokeWidth="3" />
            {/* Blush */}
            <ellipse cx="18" cy="32" rx="3" ry="2" fill={c} opacity="0.25" />
            <ellipse cx="46" cy="32" rx="3" ry="2" fill={c} opacity="0.25" />
        </g>
    ),

    maps: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Pin - rounded blob */}
            <path d="M32,58 Q28,52 20,42 Q8,26 18,14 Q28,4 32,4 Q36,4 46,14 Q56,26 44,42 Q36,52 32,58 Z" />
            {/* Cute face */}
            <circle cx="26" cy="24" r="3" fill={c} />
            <circle cx="38" cy="24" r="3" fill={c} />
            <path d="M28,32 Q32,38 36,32" strokeWidth="2" />
            {/* Blush */}
            <ellipse cx="22" cy="28" rx="3" ry="2" fill={c} opacity="0.3" />
            <ellipse cx="42" cy="28" rx="3" ry="2" fill={c} opacity="0.3" />
        </g>
    ),

    gps: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Circle */}
            <circle cx="32" cy="32" r="24" />
            {/* Cute face */}
            <circle cx="26" cy="28" r="2.5" fill={c} />
            <circle cx="38" cy="28" r="2.5" fill={c} />
            <path d="M28,36 Q32,40 36,36" strokeWidth="2" />
            {/* Blush */}
            <ellipse cx="22" cy="32" rx="3" ry="1.5" fill={c} opacity="0.25" />
            <ellipse cx="42" cy="32" rx="3" ry="1.5" fill={c} opacity="0.25" />
            {/* Crosshairs with hearts at ends */}
            <path d="M32,4 V12 M32,52 V60" strokeWidth="3" />
            <path d="M4,32 H12 M52,32 H60" strokeWidth="3" />
            <path d="M29,4 Q32,0 35,4" fill={c} />
        </g>
    ),

    calendar: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Body */}
            <rect x="8" y="14" width="48" height="44" rx="6" />
            {/* Header */}
            <rect x="8" y="14" width="48" height="14" rx="6" fill={c} opacity="0.2" />
            {/* Rings */}
            <path d="M22,6 V20" strokeWidth="4" />
            <path d="M42,6 V20" strokeWidth="4" />
            {/* Cute date box */}
            <rect x="14" y="32" width="14" height="12" rx="3" fill={c} />
            {/* Face on date */}
            <circle cx="18" cy="36" r="1" fill="white" />
            <circle cx="24" cy="36" r="1" fill="white" />
            <path d="M18,40 Q21,42 24,40" stroke="white" strokeWidth="1" />
            {/* Stars */}
            <path d="M48,36 L50,40 L48,44 L46,40 Z" fill={c} />
        </g>
    ),

    clock: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Face */}
            <circle cx="32" cy="32" r="26" />
            {/* Cute face */}
            <circle cx="24" cy="26" r="2.5" fill={c} />
            <circle cx="40" cy="26" r="2.5" fill={c} />
            <path d="M26,36 Q32,42 38,36" strokeWidth="2" />
            {/* Blush */}
            <ellipse cx="18" cy="32" rx="3" ry="2" fill={c} opacity="0.25" />
            <ellipse cx="46" cy="32" rx="3" ry="2" fill={c} opacity="0.25" />
            {/* Hands as arms waving */}
            <path d="M32,32 V18" strokeWidth="4" />
            <path d="M32,32 L46,32" strokeWidth="3" />
            {/* Center */}
            <circle cx="32" cy="32" r="3" fill={c} />
        </g>
    ),

    calculator: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Body */}
            <rect x="12" y="6" width="40" height="52" rx="6" />
            {/* Screen with face */}
            <rect x="16" y="10" width="32" height="16" rx="4" fill={c} opacity="0.15" />
            <circle cx="26" cy="18" r="2" fill={c} />
            <circle cx="38" cy="18" r="2" fill={c} />
            <path d="M28,22 Q32,26 36,22" strokeWidth="1.5" />
            {/* Cute buttons */}
            <circle cx="22" cy="34" r="4" fill={c} opacity="0.3" />
            <circle cx="32" cy="34" r="4" fill={c} opacity="0.3" />
            <circle cx="42" cy="34" r="4" fill={c} />
            <circle cx="22" cy="46" r="4" fill={c} opacity="0.3" />
            <circle cx="32" cy="46" r="4" fill={c} opacity="0.3" />
            <circle cx="42" cy="46" r="4" fill={c} />
        </g>
    ),

    flashlight: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Light beam with sparkles */}
            <path d="M22,10 L18,26 H46 L42,10 Z" fill={c} opacity="0.2" />
            <path d="M30,4 L32,12 L34,4" fill={c} />
            <path d="M20,8 L24,14" strokeWidth="2" />
            <path d="M44,8 L40,14" strokeWidth="2" />
            {/* Head */}
            <path d="M20,10 L16,28 H48 L44,10 Z" />
            {/* Body with face */}
            <rect x="16" y="28" width="32" height="28" rx="4" fill={c} />
            {/* Face */}
            <circle cx="26" cy="40" r="2" fill="white" />
            <circle cx="38" cy="40" r="2" fill="white" />
            <path d="M28,48 Q32,52 36,48" stroke="white" strokeWidth="1.5" />
        </g>
    ),

    weather: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Sun with face */}
            <circle cx="22" cy="20" r="10" fill={c} />
            <circle cx="18" cy="18" r="1.5" fill="white" />
            <circle cx="26" cy="18" r="1.5" fill="white" />
            <path d="M18,24 Q22,26 26,24" stroke="white" strokeWidth="1.5" />
            {/* Sun rays */}
            <path d="M22,6 V2 M36,20 H40 M32,10 L36,6" strokeWidth="3" />
            {/* Happy cloud */}
            <path d="M22,50 Q14,46 16,38 Q18,28 30,32 Q38,26 48,32 Q58,36 54,46 Q52,54 44,54 H28 Q18,54 22,50 Z" fill={c} />
            <circle cx="32" cy="44" r="2" fill="white" />
            <circle cx="44" cy="44" r="2" fill="white" />
            <path d="M34,50 Q38,52 42,50" stroke="white" strokeWidth="1.5" />
        </g>
    ),

    settings: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Gear with rounded teeth */}
            <path d="M28,6 H36 Q38,12 42,14 L48,10 Q54,14 52,20 L52,26 Q58,28 58,32 V36 Q58,38 52,38 L52,44 Q54,50 48,54 L42,50 Q38,52 36,58 H28 Q26,52 22,50 L16,54 Q10,50 12,44 V38 Q6,36 6,32 V28 Q6,26 12,26 V20 Q10,14 16,10 L22,14 Q26,12 28,6 Z" />
            {/* Center face */}
            <circle cx="32" cy="32" r="10" fill={c} opacity="0.15" />
            <circle cx="28" cy="30" r="2" fill={c} />
            <circle cx="36" cy="30" r="2" fill={c} />
            <path d="M28,36 Q32,40 36,36" strokeWidth="1.5" />
        </g>
    ),

    notifications: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Bell with face */}
            <path d="M16,44 H48 Q52,44 50,38 L46,32 V26 Q46,12 32,10 Q18,12 18,26 V32 L14,38 Q12,44 16,44 Z" />
            {/* Face */}
            <circle cx="26" cy="28" r="2.5" fill={c} />
            <circle cx="38" cy="28" r="2.5" fill={c} />
            <path d="M28,36 Q32,40 36,36" strokeWidth="2" />
            {/* Blush */}
            <ellipse cx="22" cy="32" rx="3" ry="1.5" fill={c} opacity="0.25" />
            <ellipse cx="42" cy="32" rx="3" ry="1.5" fill={c} opacity="0.25" />
            {/* Clapper */}
            <path d="M26,48 Q26,56 32,56 Q38,56 38,48" />
            {/* Top bow */}
            <circle cx="32" cy="6" r="4" fill={c} />
        </g>
    ),

    games: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Controller - blob shape */}
            <path d="M6,28 Q4,18 14,16 H50 Q60,18 58,28 V38 Q60,52 48,52 H42 Q36,52 36,44 V40 H28 V44 Q28,52 22,52 H16 Q4,52 6,38 Z" />
            {/* Face */}
            <circle cx="26" cy="28" r="2" fill={c} />
            <circle cx="38" cy="28" r="2" fill={c} />
            <path d="M28,34 Q32,38 36,34" strokeWidth="1.5" />
            {/* D-pad with stars */}
            <path d="M16,32 V38 M12,34 H20" strokeWidth="3" />
            {/* Buttons */}
            <circle cx="46" cy="28" r="3" fill={c} />
            <circle cx="52" cy="34" r="3" fill={c} opacity="0.5" />
        </g>
    ),

    casino: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Dice 1 with face */}
            <rect x="6" y="6" width="24" height="24" rx="6" />
            <circle cx="14" cy="16" r="2" fill={c} />
            <circle cx="22" cy="16" r="2" fill={c} />
            <path d="M14,24 Q18,28 22,24" strokeWidth="1.5" />
            {/* Dice 2 */}
            <rect x="34" y="34" width="24" height="24" rx="6" />
            <circle cx="42" cy="42" r="2.5" fill={c} />
            <circle cx="50" cy="42" r="2.5" fill={c} />
            <circle cx="42" cy="50" r="2.5" fill={c} />
            <circle cx="50" cy="50" r="2.5" fill={c} />
            {/* Stars */}
            <path d="M48,14 L50,18 L48,22 L46,18 Z" fill={c} />
            <path d="M14,44 L16,48 L14,52 L12,48 Z" fill={c} />
        </g>
    ),

    bank: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Building with face */}
            <path d="M8,26 L32,8 L56,26" strokeWidth="3" />
            <rect x="8" y="26" width="48" height="6" rx="2" fill={c} opacity="0.3" />
            {/* Pillars */}
            <rect x="14" y="32" width="6" height="18" rx="2" fill={c} />
            <rect x="29" y="32" width="6" height="18" rx="2" fill={c} opacity="0.6" />
            <rect x="44" y="32" width="6" height="18" rx="2" fill={c} />
            {/* Base */}
            <rect x="8" y="50" width="48" height="6" rx="2" fill={c} />
            {/* Face on building */}
            <circle cx="24" cy="16" r="1.5" fill={c} />
            <circle cx="40" cy="16" r="1.5" fill={c} />
            <path d="M28,20 Q32,24 36,20" strokeWidth="1.5" />
        </g>
    ),

    taxi: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Car body - rounded */}
            <path d="M12,36 Q16,22 22,22 H42 Q48,22 52,36" />
            <rect x="8" y="36" width="48" height="14" rx="4" />
            {/* Face on car */}
            <circle cx="24" cy="30" r="2" fill={c} />
            <circle cx="40" cy="30" r="2" fill={c} />
            <path d="M28,36 Q32,40 36,36" strokeWidth="1.5" />
            {/* Taxi sign with heart */}
            <rect x="26" y="14" width="12" height="8" rx="3" fill={c} />
            {/* Wheels - cute */}
            <circle cx="18" cy="52" r="5" fill={c} />
            <circle cx="46" cy="52" r="5" fill={c} />
        </g>
    ),

    home: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Roof */}
            <path d="M6,34 L32,10 L58,34" strokeWidth="3" />
            {/* House - rounded */}
            <path d="M14,32 V56 H50 V32" />
            {/* Door with face */}
            <rect x="26" y="40" width="12" height="16" rx="3" fill={c} />
            <circle cx="30" cy="46" r="1.5" fill="white" />
            <circle cx="36" cy="46" r="1.5" fill="white" />
            <path d="M30,50 Q33,52 36,50" stroke="white" strokeWidth="1" />
            {/* Heart window */}
            <path d="M38,40 Q38,36 42,36 Q46,36 46,40 Q46,46 42,50 Q38,46 38,40 Z" fill={c} opacity="0.3" />
            {/* Chimney with heart smoke */}
            <rect x="44" y="18" width="6" height="12" rx="2" fill={c} />
        </g>
    ),

    food: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Fork with cute prongs */}
            <path d="M14,8 V18 M20,8 V18 M26,8 V18" strokeWidth="3" />
            <path d="M14,18 H26 Q26,28 20,30 V58" strokeWidth="3" />
            {/* Knife */}
            <path d="M48,8 Q58,18 58,32 V58" strokeWidth="3" />
            {/* Hearts between */}
            <path d="M34,24 Q34,20 38,20 Q42,20 42,24 Q42,30 38,34 Q34,30 34,24 Z" fill={c} />
            <path d="M34,42 Q34,38 38,38 Q42,38 42,42 Q42,48 38,52 Q34,48 34,42 Z" fill={c} opacity="0.5" />
        </g>
    ),

    electrician: (c) => (
        <g fill={c}>
            {/* Cute lightning bolt */}
            <path d="M36,4 Q40,4 38,10 L34,24 H42 Q46,24 42,32 L32,48 Q28,56 24,52 L28,38 H22 Q18,38 22,28 L32,10 Q34,4 36,4 Z" />
            {/* Sparkles */}
            <circle cx="48" cy="20" r="3" />
            <circle cx="16" cy="44" r="2" />
            <path d="M52,36 L54,40 L52,44 L50,40 Z" />
        </g>
    ),

    mechanic: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Wrench - rounded */}
            <path d="M18,10 L10,18 Q8,20 10,22 L24,36 L10,50 Q8,52 10,54 L18,62 Q20,64 22,62 L36,48 L50,62 Q52,64 54,62 L62,54 Q64,52 62,50 L48,36 L62,22 Q64,20 62,18 L54,10 Q52,8 50,10 L36,24 L22,10 Q20,8 18,10 Z" />
            {/* Center face */}
            <circle cx="36" cy="36" r="8" fill={c} opacity="0.2" />
            <circle cx="33" cy="34" r="1.5" fill={c} />
            <circle cx="39" cy="34" r="1.5" fill={c} />
            <path d="M33,40 Q36,42 39,40" strokeWidth="1.5" />
        </g>
    ),

    market: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Cart handle */}
            <path d="M8,12 H16 L24,44" strokeWidth="3" />
            {/* Cart body - rounded */}
            <path d="M20,22 H56 Q58,22 56,44 H28 Q24,44 24,40" />
            {/* Cute items in cart */}
            <circle cx="34" cy="32" r="6" fill={c} opacity="0.3" />
            <circle cx="46" cy="32" r="6" fill={c} opacity="0.3" />
            {/* Wheels with faces */}
            <circle cx="32" cy="52" r="5" fill={c} />
            <circle cx="50" cy="52" r="5" fill={c} />
            {/* Stars */}
            <path d="M58,16 L60,20 L58,24 L56,20 Z" fill={c} />
        </g>
    ),

    shop247: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Building - rounded */}
            <rect x="8" y="20" width="48" height="38" rx="6" />
            {/* Roof */}
            <path d="M8,20 L20,8 H44 L56,20" />
            {/* Sign with face */}
            <rect x="8" y="20" width="48" height="12" rx="4" fill={c} opacity="0.3" />
            <circle cx="26" cy="26" r="2" fill={c} />
            <circle cx="38" cy="26" r="2" fill={c} />
            <path d="M28,28 Q32,32 36,28" strokeWidth="1.5" />
            {/* Door */}
            <rect x="24" y="38" width="16" height="20" rx="4" fill={c} opacity="0.2" />
            {/* Hearts */}
            <path d="M12,44 Q12,40 16,40 Q20,40 20,44 Q20,50 16,54 Q12,50 12,44 Z" fill={c} />
        </g>
    ),

    business: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Briefcase - rounded */}
            <rect x="8" y="22" width="48" height="34" rx="6" />
            {/* Handle */}
            <path d="M24,22 V14 Q24,8 32,8 Q40,8 40,14 V22" />
            {/* Face on briefcase */}
            <circle cx="26" cy="36" r="2.5" fill={c} />
            <circle cx="38" cy="36" r="2.5" fill={c} />
            <path d="M28,44 Q32,48 36,44" strokeWidth="2" />
            {/* Blush */}
            <ellipse cx="22" cy="40" rx="3" ry="1.5" fill={c} opacity="0.25" />
            <ellipse cx="42" cy="40" rx="3" ry="1.5" fill={c} opacity="0.25" />
        </g>
    ),

    browser: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Globe with face */}
            <circle cx="32" cy="32" r="26" />
            {/* Eyes */}
            <circle cx="24" cy="28" r="3" fill={c} />
            <circle cx="40" cy="28" r="3" fill={c} />
            <path d="M26,38 Q32,44 38,38" strokeWidth="2" />
            {/* Blush */}
            <ellipse cx="18" cy="34" rx="3" ry="2" fill={c} opacity="0.25" />
            <ellipse cx="46" cy="34" rx="3" ry="2" fill={c} opacity="0.25" />
            {/* Latitude line */}
            <path d="M8,32 H56" strokeWidth="2" opacity="0.3" />
            {/* Stars around */}
            <path d="M4,12 L6,16 L4,20 L2,16 Z" fill={c} />
            <path d="M58,44 L60,48 L58,52 L56,48 Z" fill={c} />
        </g>
    ),

    hospital: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Building - rounded */}
            <rect x="10" y="10" width="44" height="44" rx="8" />
            {/* Cross with face */}
            <rect x="26" y="18" width="12" height="28" rx="3" fill={c} />
            <rect x="18" y="26" width="28" height="12" rx="3" fill={c} />
            {/* Face on cross */}
            <circle cx="28" cy="32" r="1.5" fill="white" />
            <circle cx="36" cy="32" r="1.5" fill="white" />
            <path d="M28,36 Q32,38 36,36" stroke="white" strokeWidth="1.5" />
        </g>
    ),

    police: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Shield - rounded */}
            <path d="M32,6 Q52,14 54,20 V38 Q54,56 32,60 Q10,56 10,38 V20 Q12,14 32,6 Z" />
            {/* Face */}
            <circle cx="26" cy="28" r="3" fill={c} />
            <circle cx="38" cy="28" r="3" fill={c} />
            <path d="M28,38 Q32,44 36,38" strokeWidth="2" />
            {/* Blush */}
            <ellipse cx="22" cy="34" rx="3" ry="2" fill={c} opacity="0.25" />
            <ellipse cx="42" cy="34" rx="3" ry="2" fill={c} opacity="0.25" />
            {/* Star on top */}
            <path d="M32,10 L34,16 L40,16 L35,20 L37,26 L32,22 L27,26 L29,20 L24,16 L30,16 Z" fill={c} opacity="0.3" />
        </g>
    ),

    gang: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Skull - cute version */}
            <path d="M16,30 Q14,12 32,10 Q50,12 48,30 V38 Q48,46 40,46 L38,54 H26 L24,46 Q16,46 16,38 Z" />
            {/* Big cute eyes */}
            <circle cx="24" cy="28" r="6" fill={c} />
            <circle cx="40" cy="28" r="6" fill={c} />
            <circle cx="22" cy="26" r="2" fill="white" />
            <circle cx="38" cy="26" r="2" fill="white" />
            {/* Heart nose */}
            <path d="M30,38 Q30,34 32,34 Q34,34 34,38 Q34,42 32,44 Q30,42 30,38 Z" fill={c} opacity="0.5" />
            {/* Teeth */}
            <path d="M26,54 V58 M32,54 V60 M38,54 V58" strokeWidth="2" />
            {/* Bows */}
            <path d="M12,18 Q10,14 14,14 Q18,14 16,18" fill={c} />
            <path d="M52,18 Q54,14 50,14 Q46,14 48,18" fill={c} />
        </g>
    ),

    // === KAWAII EXTRA ICONS ===
    boba: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18,12 H46 L42,56 H22 Z" />
            <path d="M18,12 Q18,4 32,4 Q46,4 46,12" />
            <circle cx="26" cy="24" r="2" fill={c} />
            <circle cx="38" cy="24" r="2" fill={c} />
            <path d="M28,30 Q32,34 36,30" strokeWidth="1.5" />
            <circle cx="26" cy="44" r="4" fill={c} />
            <circle cx="34" cy="48" r="4" fill={c} />
            <circle cx="38" cy="42" r="3" fill={c} />
            <path d="M32,4 V0 M32,0 L42,6" strokeWidth="3" />
        </g>
    ),

    plushie: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="32" cy="28" r="20" />
            <circle cx="12" cy="24" r="8" fill={c} opacity="0.3" />
            <circle cx="52" cy="24" r="8" fill={c} opacity="0.3" />
            <circle cx="26" cy="26" r="3" fill={c} />
            <circle cx="38" cy="26" r="3" fill={c} />
            <path d="M28,36 Q32,40 36,36" strokeWidth="2" />
            <ellipse cx="22" cy="30" rx="3" ry="2" fill={c} opacity="0.3" />
            <ellipse cx="42" cy="30" rx="3" ry="2" fill={c} opacity="0.3" />
            <path d="M20,48 V58 M44,48 V58" strokeWidth="4" />
        </g>
    ),

    rainbow: (c) => (
        <g fill="none" stroke={c} strokeWidth="3" strokeLinecap="round">
            <path d="M8,48 Q8,16 32,16 Q56,16 56,48" />
            <path d="M14,48 Q14,22 32,22 Q50,22 50,48" opacity="0.7" />
            <path d="M20,48 Q20,28 32,28 Q44,28 44,48" opacity="0.4" />
            <circle cx="8" cy="50" r="6" fill={c} />
            <circle cx="56" cy="50" r="6" fill={c} />
            <path d="M28,8 L30,12 L28,16 L26,12 Z" fill={c} />
            <path d="M36,8 L38,12 L36,16 L34,12 Z" fill={c} />
        </g>
    ),

    cupcake: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16,32 H48 L44,58 H20 Z" fill={c} opacity="0.3" />
            <path d="M12,32 Q12,18 32,14 Q52,18 52,32 Z" fill={c} />
            <circle cx="26" cy="24" r="2" fill="white" />
            <circle cx="38" cy="24" r="2" fill="white" />
            <path d="M28,28 Q32,30 36,28" stroke="white" strokeWidth="1.5" />
            <circle cx="32" cy="8" r="4" fill={c} />
            <path d="M20,38 H44 M22,46 H42" strokeWidth="2" opacity="0.5" />
        </g>
    ),

    kitten: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="32" cy="32" r="22" />
            <path d="M14,18 L10,4 L22,14" fill={c} opacity="0.3" />
            <path d="M50,18 L54,4 L42,14" fill={c} opacity="0.3" />
            <circle cx="24" cy="28" r="3" fill={c} />
            <circle cx="40" cy="28" r="3" fill={c} />
            <circle cx="32" cy="38" r="2" fill={c} />
            <path d="M28,42 Q32,46 36,42" strokeWidth="1.5" />
            <path d="M20,36 H12 M44,36 H52" strokeWidth="2" />
            <path d="M18,40 H10 M46,40 H54" strokeWidth="2" />
            <ellipse cx="20" cy="32" rx="3" ry="2" fill={c} opacity="0.3" />
            <ellipse cx="44" cy="32" rx="3" ry="2" fill={c} opacity="0.3" />
        </g>
    ),

    bunny: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="32" cy="38" r="18" />
            <path d="M22,22 Q20,4 26,4 Q32,4 30,20" fill={c} opacity="0.2" />
            <path d="M42,22 Q44,4 38,4 Q32,4 34,20" fill={c} opacity="0.2" />
            <circle cx="26" cy="36" r="3" fill={c} />
            <circle cx="38" cy="36" r="3" fill={c} />
            <circle cx="32" cy="44" r="2" fill={c} />
            <path d="M28,48 Q32,52 36,48" strokeWidth="1.5" />
            <ellipse cx="22" cy="40" rx="3" ry="2" fill={c} opacity="0.3" />
            <ellipse cx="42" cy="40" rx="3" ry="2" fill={c} opacity="0.3" />
        </g>
    ),

    wand: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10,54 L48,16" strokeWidth="4" />
            <path d="M44,8 L48,16 L56,12 L52,20 L60,24 L52,28 L56,36 L48,32 L44,40 L40,32 L32,36 L36,28 L28,24 L36,20 L32,12 L40,16 Z" fill={c} />
            <circle cx="14" cy="50" r="3" fill={c} opacity="0.5" />
            <circle cx="22" cy="42" r="2" fill={c} opacity="0.3" />
            <circle cx="30" cy="34" r="2" fill={c} opacity="0.3" />
        </g>
    ),

    cloud_happy: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16,44 Q6,40 8,30 Q10,18 26,20 Q34,12 48,18 Q62,24 58,38 Q56,48 44,50 H22 Q12,50 16,44 Z" fill={c} opacity="0.2" />
            <path d="M16,44 Q6,40 8,30 Q10,18 26,20 Q34,12 48,18 Q62,24 58,38 Q56,48 44,50 H22 Q12,50 16,44 Z" />
            <circle cx="28" cy="32" r="3" fill={c} />
            <circle cx="44" cy="32" r="3" fill={c} />
            <path d="M32,42 Q38,48 44,42" strokeWidth="2" />
            <ellipse cx="24" cy="36" rx="3" ry="2" fill={c} opacity="0.3" />
            <ellipse cx="48" cy="36" rx="3" ry="2" fill={c} opacity="0.3" />
        </g>
    ),
};

export default function KawaiiArt({ icon, colors, size, uid, showBackground = false }) {
    const iconId = icon.id;
    const IconPath = KAWAII_ICONS[iconId];

    if (!IconPath) {
        return (
            <svg viewBox="0 0 64 64" width={size} height={size}>
                <circle cx="32" cy="32" r="24" fill="none" stroke={colors.primary} strokeWidth="2.5" />
                <circle cx="26" cy="28" r="3" fill={colors.primary} />
                <circle cx="38" cy="28" r="3" fill={colors.primary} />
                <path d="M26,40 Q32,46 38,40" stroke={colors.primary} strokeWidth="2" fill="none" />
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
