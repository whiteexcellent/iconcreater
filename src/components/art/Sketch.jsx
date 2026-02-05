import React from 'react';

// ============================================================================
// SKETCH ART ENGINE - HAND DRAWN DOODLE STYLE
// Style: Imperfect lines, cross-hatching, pencil texture, notebook feel
// ============================================================================

const SKETCH_ICONS = {
    phone: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {/* Main body - sketchy */}
            <path d="M18,6 C19,5 45,6 46,7 C47,8 46,57 45,58 C44,59 19,58 18,57 C17,56 18,7 18,6" />
            {/* Double line effect */}
            <path d="M19,8 C20,7 44,8 45,9" strokeWidth="0.5" opacity="0.4" />
            {/* Screen - wavy */}
            <path d="M22,14 Q24,13 26,14 H38 Q40,14 42,14 V44 Q42,45 40,46 H24 Q22,46 22,45 Z" fill={c} opacity="0.05" />
            {/* Speaker scratchy */}
            <path d="M28,10 C29,9 35,10 36,10" strokeWidth="1.5" />
            {/* Home button circle */}
            <circle cx="32" cy="52" r="3" />
            <circle cx="32" cy="52" r="2" strokeWidth="0.5" opacity="0.5" />
            {/* Scribble decoration */}
            <path d="M12,20 Q10,22 12,24" strokeWidth="1" opacity="0.3" />
        </g>
    ),

    messages: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {/* Speech bubble - hand drawn */}
            <path d="M8,10 Q7,9 10,8 H54 Q57,9 56,12 V40 Q55,43 52,42 H28 L16,54 V42 H10 Q7,41 8,38 Z" />
            {/* Inner line */}
            <path d="M10,12 Q9,11 12,10 H52 Q55,11 54,14" strokeWidth="0.5" opacity="0.4" />
            {/* Text lines - wavy */}
            <path d="M16,22 C20,21 30,22 46,21" strokeWidth="2" />
            <path d="M16,30 C20,29 28,30 38,29" strokeWidth="1.5" />
            {/* Cross-hatch decoration */}
            <path d="M44,30 L48,34 M46,30 L50,34" strokeWidth="0.5" opacity="0.3" />
        </g>
    ),

    contacts: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {/* Head - imperfect circle */}
            <path d="M18,20 Q16,10 24,8 Q32,6 40,10 Q46,16 44,24 Q42,32 36,34 Q28,36 22,32 Q16,28 18,20" />
            {/* Double line */}
            <path d="M20,20 Q18,12 26,10" strokeWidth="0.5" opacity="0.4" />
            {/* Eyes - dots with scribble */}
            <circle cx="26" cy="20" r="2" fill={c} />
            <circle cx="38" cy="20" r="2" fill={c} />
            {/* Smile - wavy */}
            <path d="M28,28 Q32,32 36,28" />
            {/* Body - sketchy */}
            <path d="M14,58 V48 Q12,40 22,38 H42 Q52,40 50,48 V58" />
            {/* Scribble detail */}
            <path d="M30,44 Q32,46 34,44" strokeWidth="1" />
        </g>
    ),

    email: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {/* Envelope - hand drawn */}
            <path d="M6,14 Q5,13 8,12 H56 Q59,13 58,16 V48 Q57,51 54,50 H10 Q7,49 6,46 Z" />
            {/* Inner line */}
            <path d="M8,16 Q7,15 10,14 H54 Q57,15 56,18" strokeWidth="0.5" opacity="0.4" />
            {/* Flap - wavy */}
            <path d="M6,16 Q8,18 16,26 Q24,34 32,38 Q40,34 48,26 Q56,18 58,16" />
            {/* Cross hatch corner */}
            <path d="M10,44 L16,38 M12,46 L18,40" strokeWidth="0.5" opacity="0.3" />
            {/* @ symbol doodle */}
            <circle cx="52" cy="8" r="4" strokeWidth="1" />
            <path d="M52,6 Q56,10 52,12 Q50,12 50,10" strokeWidth="0.5" />
        </g>
    ),

    camera: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {/* Body - sketchy rectangle */}
            <path d="M8,18 Q7,17 10,16 H54 Q57,17 56,20 V52 Q55,55 52,54 H12 Q9,53 8,50 Z" />
            {/* Double line */}
            <path d="M10,20 Q9,19 12,18 H52 Q55,19 54,22" strokeWidth="0.5" opacity="0.4" />
            {/* Viewfinder - wonky */}
            <path d="M24,16 V8 Q24,6 26,6 H38 Q40,6 40,8 V16" />
            {/* Lens - imperfect circles */}
            <circle cx="32" cy="36" r="12" />
            <circle cx="32" cy="36" r="8" strokeWidth="1" opacity="0.6" />
            <circle cx="32" cy="36" r="4" fill={c} opacity="0.3" />
            {/* Flash - scribble */}
            <path d="M48,24 Q52,22 54,26" fill={c} />
            {/* Light reflection */}
            <path d="M28,32 Q26,30 28,28" strokeWidth="1" opacity="0.5" />
        </g>
    ),

    gallery: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {/* Frame - sketchy */}
            <path d="M6,10 Q5,9 8,8 H56 Q59,9 58,12 V52 Q57,55 54,54 H10 Q7,53 6,50 Z" />
            <path d="M8,12 Q7,11 10,10 H54 Q57,11 56,14 V50" strokeWidth="0.5" opacity="0.4" />
            {/* Sun - scribble */}
            <circle cx="18" cy="22" r="6" fill={c} opacity="0.2" />
            <path d="M18,14 V10 M24,18 L28,14 M24,26 L28,30" strokeWidth="1" />
            {/* Mountains - hand drawn */}
            <path d="M6,54 Q10,50 20,34 Q24,28 30,40 Q34,46 40,32 Q48,22 54,36 Q56,42 58,54" fill={c} opacity="0.1" />
            <path d="M6,54 Q10,50 20,34 Q24,28 30,40 Q34,46 40,32 Q48,22 54,36" />
        </g>
    ),

    video: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {/* Screen - sketchy */}
            <path d="M6,16 Q5,15 8,14 H42 Q45,15 44,18 V46 Q43,49 40,48 H10 Q7,47 6,44 Z" />
            <path d="M8,18 Q7,17 10,16 H40" strokeWidth="0.5" opacity="0.4" />
            {/* Lens part - hand drawn */}
            <path d="M44,24 Q46,22 50,18 Q54,14 58,16 V48 Q54,50 50,46 Q46,42 44,40" fill={c} opacity="0.15" />
            <path d="M44,24 Q46,22 50,18 Q54,14 58,16 V48 Q54,50 50,46 Q46,42 44,40" />
            {/* REC dot */}
            <circle cx="52" cy="10" r="3" fill={c} />
            <path d="M54,8 Q56,10 54,12" strokeWidth="0.5" opacity="0.5" />
        </g>
    ),

    music: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {/* Notes - hand drawn */}
            <ellipse cx="16" cy="48" rx="10" ry="8" />
            <ellipse cx="16" cy="48" rx="8" ry="6" fill={c} opacity="0.15" />
            <ellipse cx="48" cy="44" rx="10" ry="8" />
            <ellipse cx="48" cy="44" rx="8" ry="6" fill={c} opacity="0.15" />
            {/* Stems - wobbly */}
            <path d="M26,48 Q27,40 26,30 Q25,20 26,14" strokeWidth="3" />
            <path d="M58,44 Q59,36 58,26 Q57,16 58,10" strokeWidth="3" />
            {/* Beam - hand drawn */}
            <path d="M26,14 Q36,10 46,8 Q54,8 58,10" strokeWidth="4" />
            {/* Decoration */}
            <path d="M34,6 Q36,10 34,12" strokeWidth="1" opacity="0.5" />
        </g>
    ),

    spotify: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="round">
            {/* Circle - imperfect */}
            <path d="M6,32 Q4,18 16,10 Q28,2 44,8 Q58,16 58,32 Q58,48 44,56 Q28,62 14,54 Q4,46 6,32" />
            <path d="M8,32 Q6,20 18,12" strokeWidth="0.5" opacity="0.4" />
            {/* Waves - wavy */}
            <path d="M14,22 Q24,16 34,20 Q44,18 50,24" strokeWidth="3" />
            <path d="M16,34 Q26,28 36,32 Q44,30 48,36" strokeWidth="3" />
            <path d="M18,46 Q28,40 38,44 Q44,42 46,48" strokeWidth="3" />
        </g>
    ),

    maps: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {/* Pin - hand drawn */}
            <path d="M32,58 Q28,52 22,44 Q12,32 14,22 Q16,10 26,6 Q36,4 44,10 Q54,18 52,30 Q48,42 38,52 Q34,56 32,58" />
            <path d="M32,54 Q28,48 24,42 Q16,32 18,24" strokeWidth="0.5" opacity="0.4" />
            {/* Center dot */}
            <circle cx="32" cy="24" r="8" fill={c} opacity="0.2" />
            <circle cx="32" cy="24" r="6" />
            {/* X marks the spot */}
            <path d="M28,24 L36,24 M32,20 L32,28" strokeWidth="1" />
            {/* Scribble */}
            <path d="M16,40 Q14,42 16,44" strokeWidth="1" opacity="0.5" />
        </g>
    ),

    gps: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {/* Circle - hand drawn */}
            <path d="M8,32 Q6,18 18,10 Q30,4 44,10 Q56,18 56,32 Q56,46 44,54 Q30,60 18,54 Q6,46 8,32" />
            {/* Crosshairs - sketchy */}
            <path d="M32,4 Q31,10 32,16" strokeWidth="3" />
            <path d="M32,48 Q31,54 32,60" strokeWidth="3" />
            <path d="M4,32 Q10,31 16,32" strokeWidth="3" />
            <path d="M48,32 Q54,31 60,32" strokeWidth="3" />
            {/* Center - scribble */}
            <circle cx="32" cy="32" r="6" fill={c} opacity="0.2" />
            <path d="M28,32 Q32,28 36,32 Q32,36 28,32" strokeWidth="1.5" />
        </g>
    ),

    calendar: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {/* Body - sketchy */}
            <path d="M8,14 Q7,13 10,12 H54 Q57,13 56,16 V56 Q55,59 52,58 H12 Q9,57 8,54 Z" />
            <path d="M10,16 Q9,15 12,14 H52" strokeWidth="0.5" opacity="0.4" />
            {/* Header line */}
            <path d="M8,28 Q16,27 32,28 Q48,27 56,28" />
            {/* Rings - wobbly */}
            <path d="M20,6 Q19,10 20,14 Q21,18 20,20" strokeWidth="3" />
            <path d="M44,6 Q43,10 44,14 Q45,18 44,20" strokeWidth="3" />
            {/* Date - circled */}
            <circle cx="20" cy="38" r="6" fill={c} opacity="0.2" />
            <circle cx="20" cy="38" r="6" />
            {/* Other dates - X marks */}
            <path d="M34,34 L42,42 M42,34 L34,42" strokeWidth="1" />
            <path d="M48,38 Q50,36 52,38" strokeWidth="1" opacity="0.5" />
        </g>
    ),

    clock: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {/* Face - imperfect */}
            <path d="M6,32 Q4,18 16,10 Q28,2 44,8 Q58,16 58,32 Q58,48 44,56 Q28,62 14,54 Q4,46 6,32" />
            <path d="M8,32 Q6,20 18,12" strokeWidth="0.5" opacity="0.4" />
            {/* Hour hand - sketchy */}
            <path d="M32,32 Q31,26 32,18" strokeWidth="3" />
            {/* Minute hand */}
            <path d="M32,32 Q38,31 46,32" strokeWidth="2.5" />
            {/* Center dot */}
            <circle cx="32" cy="32" r="3" fill={c} />
            {/* Hour markers - dots */}
            <circle cx="32" cy="10" r="2" fill={c} />
            <circle cx="54" cy="32" r="2" fill={c} />
            <circle cx="32" cy="54" r="2" fill={c} />
            <circle cx="10" cy="32" r="2" fill={c} />
        </g>
    ),

    calculator: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {/* Body - hand drawn */}
            <path d="M12,6 Q11,5 14,4 H50 Q53,5 52,8 V56 Q51,59 48,58 H16 Q13,57 12,54 Z" />
            <path d="M14,8 Q13,7 16,6 H48" strokeWidth="0.5" opacity="0.4" />
            {/* Screen - sketchy */}
            <path d="M16,10 Q15,9 18,8 H46 Q49,9 48,12 V22 Q47,25 44,24 H20 Q17,23 16,20 Z" fill={c} opacity="0.1" />
            <path d="M16,10 Q15,9 18,8 H46 Q49,9 48,12 V22 Q47,25 44,24 H20 Q17,23 16,20 Z" />
            {/* Buttons - scribbled */}
            <circle cx="22" cy="32" r="4" fill={c} opacity="0.2" />
            <circle cx="32" cy="32" r="4" fill={c} opacity="0.2" />
            <circle cx="42" cy="32" r="4" fill={c} />
            <circle cx="22" cy="44" r="4" fill={c} opacity="0.2" />
            <circle cx="32" cy="44" r="4" fill={c} opacity="0.2" />
            <circle cx="42" cy="44" r="4" fill={c} />
            {/* Symbols scribbled */}
            <path d="M40,30 L44,34 M44,30 L40,34" strokeWidth="1" />
            <path d="M40,42 L44,46" strokeWidth="1" />
        </g>
    ),

    flashlight: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {/* Head - hand drawn */}
            <path d="M22,10 Q20,12 18,26 H46 Q44,12 42,10 Z" />
            <path d="M24,12 Q22,14 20,24" strokeWidth="0.5" opacity="0.4" />
            {/* Lens - scribble */}
            <ellipse cx="32" cy="14" rx="8" ry="4" />
            <path d="M26,14 Q32,12 38,14" strokeWidth="0.5" opacity="0.5" />
            {/* Body - sketchy */}
            <path d="M18,26 Q17,28 18,30 V54 Q19,57 22,56 H42 Q45,55 46,52 V30 Q47,28 46,26" fill={c} />
            {/* Switch */}
            <path d="M28,36 Q32,34 36,36 Q32,38 28,36" stroke="white" strokeWidth="1" opacity="0.4" />
        </g>
    ),

    weather: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {/* Sun - scribble */}
            <circle cx="22" cy="20" r="8" fill={c} opacity="0.2" />
            <circle cx="22" cy="20" r="6" />
            {/* Sun rays - wavy */}
            <path d="M22,8 Q21,4 22,2" strokeWidth="1.5" />
            <path d="M34,20 Q38,19 40,20" strokeWidth="1.5" />
            <path d="M30,12 Q34,8 36,6" strokeWidth="1.5" />
            {/* Cloud - fluffy scribble */}
            <path d="M24,48 Q16,46 18,38 Q14,30 26,32 Q32,24 42,28 Q54,28 54,40 Q58,48 50,52 Q42,56 32,54 Q22,54 24,48" />
            <path d="M26,46 Q18,44 20,38 Q16,32 28,34" strokeWidth="0.5" opacity="0.4" />
            {/* Rain - sketchy */}
            <path d="M30,56 Q29,60 30,64" strokeWidth="1.5" />
            <path d="M40,58 Q39,62 40,66" strokeWidth="1.5" />
        </g>
    ),

    settings: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {/* Gear - hand drawn */}
            <path d="M28,6 Q30,5 32,4 Q34,5 36,6 L38,12 Q42,13 44,14 L50,10 Q52,11 54,14 L50,20 Q52,24 52,26 L58,28 Q59,30 58,32 Q59,34 58,36 L52,38 Q52,42 50,44 L54,50 Q53,52 50,54 L44,50 Q42,51 38,52 L36,58 Q34,59 32,60 Q30,59 28,58 L26,52 Q22,51 20,50 L14,54 Q12,53 10,50 L14,44 Q12,42 12,38 L6,36 Q5,34 6,32 Q5,30 6,28 L12,26 Q12,22 14,20 L10,14 Q11,12 14,10 L20,14 Q22,13 26,12 Z" />
            {/* Center - scribbled */}
            <circle cx="32" cy="32" r="8" fill={c} opacity="0.15" />
            <path d="M26,32 Q32,26 38,32 Q32,38 26,32" />
        </g>
    ),

    notifications: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {/* Bell - hand drawn */}
            <path d="M16,44 Q14,42 18,40 L20,34 Q18,24 24,18 Q28,12 32,10 Q36,12 40,18 Q46,24 44,34 L46,40 Q50,42 48,44 Z" />
            <path d="M18,42 Q16,40 20,38" strokeWidth="0.5" opacity="0.4" />
            {/* Clapper - wobbly */}
            <path d="M26,48 Q26,54 30,56 Q34,56 38,52 Q38,48 38,48" />
            {/* Top knob */}
            <circle cx="32" cy="8" r="3" fill={c} />
            {/* Alert - scribble */}
            <circle cx="48" cy="16" r="5" fill={c} />
            <path d="M46,14 Q50,16 48,20" strokeWidth="0.5" opacity="0.5" />
        </g>
    ),

    games: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {/* Controller - hand drawn */}
            <path d="M8,28 Q4,20 12,16 H52 Q60,20 56,28 V40 Q58,50 48,52 H40 Q36,52 36,46 L34,42 H30 L28,46 Q28,52 24,52 H16 Q6,50 8,40 Z" />
            <path d="M10,28 Q6,22 14,18" strokeWidth="0.5" opacity="0.4" />
            {/* D-pad - sketchy */}
            <path d="M18,28 Q17,34 18,40" strokeWidth="3" />
            <path d="M12,34 Q18,33 24,34" strokeWidth="3" />
            {/* Buttons - circles */}
            <circle cx="46" cy="28" r="4" fill={c} opacity="0.2" />
            <circle cx="54" cy="36" r="4" fill={c} />
            <circle cx="46" cy="36" r="3" strokeWidth="1" opacity="0.5" />
        </g>
    ),

    casino: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {/* Dice 1 - hand drawn */}
            <path d="M6,6 Q5,5 8,4 H28 Q31,5 30,8 V28 Q29,31 26,30 H10 Q7,29 6,26 Z" />
            <path d="M8,8 Q7,7 10,6 H26" strokeWidth="0.5" opacity="0.4" />
            <circle cx="18" cy="17" r="3" fill={c} />
            {/* Dice 2 - hand drawn */}
            <path d="M34,34 Q33,33 36,32 H56 Q59,33 58,36 V56 Q57,59 54,58 H38 Q35,57 34,54 Z" />
            <path d="M36,36 Q35,35 38,34 H54" strokeWidth="0.5" opacity="0.4" />
            <circle cx="40" cy="40" r="2" fill={c} />
            <circle cx="52" cy="40" r="2" fill={c} />
            <circle cx="40" cy="52" r="2" fill={c} />
            <circle cx="52" cy="52" r="2" fill={c} />
            {/* Connecting scribble */}
            <path d="M30,30 Q34,28 36,34" strokeWidth="1" opacity="0.5" />
        </g>
    ),

    bank: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {/* Pediment - hand drawn */}
            <path d="M8,26 Q10,24 20,16 Q28,10 32,8 Q36,10 44,16 Q54,24 56,26" strokeWidth="3" />
            <path d="M12,24 Q16,20 24,14" strokeWidth="0.5" opacity="0.4" />
            {/* Columns - wobbly */}
            <path d="M14,30 Q13,40 14,52" strokeWidth="4" />
            <path d="M32,30 Q31,40 32,52" strokeWidth="4" opacity="0.6" />
            <path d="M50,30 Q49,40 50,52" strokeWidth="4" />
            {/* Base - sketchy */}
            <path d="M8,52 Q10,51 32,52 Q54,51 56,52 V58 Q54,59 32,58 Q10,59 8,58 Z" fill={c} opacity="0.2" />
            <path d="M8,52 Q10,51 32,52 Q54,51 56,52 V58 Q54,59 32,58 Q10,59 8,58 Z" />
        </g>
    ),

    taxi: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {/* Cabin - hand drawn */}
            <path d="M14,36 Q16,28 20,24 Q24,22 32,22 Q40,22 44,24 Q48,28 50,36" />
            {/* Body - sketchy */}
            <path d="M8,36 Q6,38 8,40 V48 Q10,51 14,50 H50 Q54,49 56,46 V40 Q58,38 56,36 Z" />
            <path d="M10,38 Q8,40 10,42" strokeWidth="0.5" opacity="0.4" />
            {/* Taxi sign - wobbly */}
            <path d="M26,16 Q28,14 32,14 Q36,14 38,16 Q40,18 38,22 H26 Q24,18 26,16" fill={c} opacity="0.3" />
            <path d="M26,16 Q28,14 32,14 Q36,14 38,16 Q40,18 38,22 H26 Q24,18 26,16" />
            {/* Wheels - circles */}
            <circle cx="18" cy="52" r="5" fill={c} />
            <circle cx="46" cy="52" r="5" fill={c} />
        </g>
    ),

    home: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {/* Roof - hand drawn */}
            <path d="M6,34 Q10,30 20,20 Q28,12 32,10 Q36,12 44,20 Q54,30 58,34" strokeWidth="3" />
            <path d="M10,32 Q14,28 24,18" strokeWidth="0.5" opacity="0.4" />
            {/* House body - sketchy */}
            <path d="M14,32 Q13,40 14,50 Q15,57 16,58 H48 Q49,57 50,50 Q51,40 50,32" />
            {/* Door - wobbly */}
            <path d="M26,58 V44 Q26,40 32,40 Q38,40 38,44 V58" fill={c} opacity="0.2" />
            <path d="M26,58 V44 Q26,40 32,40 Q38,40 38,44 V58" />
            <circle cx="36" cy="50" r="1.5" fill={c} />
            {/* Window - sketchy */}
            <path d="M42,44 Q41,43 44,42 H50 Q53,43 52,46 V52 Q51,55 48,54 H46 Q43,53 42,50 Z" />
            {/* Chimney */}
            <path d="M44,20 Q43,16 44,12 H50 Q51,16 50,20" fill={c} />
        </g>
    ),

    food: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {/* Fork - hand drawn */}
            <path d="M10,8 Q9,14 10,22" strokeWidth="1.5" />
            <path d="M16,8 Q15,14 16,22" strokeWidth="1.5" />
            <path d="M22,8 Q21,14 22,22" strokeWidth="1.5" />
            <path d="M10,22 Q12,24 16,24 Q20,24 22,22" />
            <path d="M16,24 Q17,36 16,58" strokeWidth="2" />
            {/* Knife - sketchy */}
            <path d="M44,8 Q50,10 54,16 Q58,24 56,32" />
            <path d="M56,32 Q54,34 52,32 Q51,30 52,28" strokeWidth="1" opacity="0.5" />
            <path d="M52,32 Q53,44 52,58" strokeWidth="2" />
            {/* Scribble between */}
            <path d="M30,24 Q32,28 30,32 Q32,36 30,40" strokeWidth="0.5" opacity="0.5" />
        </g>
    ),

    electrician: (c) => (
        <g>
            {/* Lightning - hand drawn */}
            <path d="M38,2 Q36,8 32,16 Q28,24 20,30 H28 Q24,40 18,62" fill="none" stroke={c} strokeWidth="3" />
            <path d="M20,30 L36,30 Q32,40 44,28" fill={c} stroke={c} strokeWidth="2" />
            {/* Scribble effect */}
            <path d="M42,12 Q44,16 42,20" stroke={c} strokeWidth="1" opacity="0.4" />
            <path d="M16,46 Q14,50 16,54" stroke={c} strokeWidth="1" opacity="0.4" />
        </g>
    ),

    mechanic: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {/* Wrench - hand drawn */}
            <path d="M18,10 Q14,14 10,18 L26,34 L10,50 Q14,54 18,58 L34,42 L50,58 Q54,54 58,50 L42,34 L58,18 Q54,14 50,10 L34,26 Z" />
            <path d="M20,12 Q16,16 12,20" strokeWidth="0.5" opacity="0.4" />
            {/* Center bolt */}
            <circle cx="34" cy="34" r="6" fill={c} opacity="0.2" />
            <path d="M30,34 Q34,30 38,34 Q34,38 30,34" />
            {/* Scribble */}
            <path d="M8,8 Q6,10 8,12" strokeWidth="1" opacity="0.5" />
        </g>
    ),

    market: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {/* Handle - wobbly */}
            <path d="M8,12 Q10,11 16,12 Q22,20 26,44" strokeWidth="3" />
            {/* Cart body - hand drawn */}
            <path d="M22,22 Q24,20 30,20 H56 Q59,21 58,24 L54,46 Q53,49 50,48 H28 Q25,47 24,44 Z" />
            <path d="M24,24 Q26,22 32,22 H54" strokeWidth="0.5" opacity="0.4" />
            {/* Items - scribbled */}
            <circle cx="34" cy="32" r="6" fill={c} opacity="0.2" />
            <circle cx="46" cy="36" r="5" fill={c} opacity="0.2" />
            {/* Wheels - circles */}
            <circle cx="32" cy="54" r="5" fill={c} />
            <circle cx="50" cy="54" r="5" fill={c} />
        </g>
    ),

    shop247: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {/* Building - hand drawn */}
            <path d="M8,22 Q7,21 10,20 H54 Q57,21 56,24 V56 Q55,59 52,58 H12 Q9,57 8,54 Z" />
            <path d="M10,24 Q9,23 12,22 H52" strokeWidth="0.5" opacity="0.4" />
            {/* Roof - sketchy */}
            <path d="M8,22 Q12,18 20,12 Q28,8 32,6 Q36,8 44,12 Q52,18 56,22" />
            {/* Sign */}
            <path d="M8,22 Q16,22 32,22 Q48,22 56,22 V32 Q48,32 32,32 Q16,32 8,32 Z" fill={c} opacity="0.15" />
            {/* Door - wobbly */}
            <path d="M26,58 V42 Q26,38 32,38 Q38,38 38,42 V58" fill={c} opacity="0.1" />
            <path d="M26,58 V42 Q26,38 32,38 Q38,38 38,42 V58" />
            {/* 24/7 scribble */}
            <path d="M44,10 Q48,8 52,10 Q54,14 52,18 Q48,20 44,18 Q42,14 44,10" fill={c} opacity="0.3" />
        </g>
    ),

    business: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {/* Briefcase - hand drawn */}
            <path d="M6,22 Q5,21 8,20 H56 Q59,21 58,24 V54 Q57,57 54,56 H10 Q7,55 6,52 Z" />
            <path d="M8,24 Q7,23 10,22 H54" strokeWidth="0.5" opacity="0.4" />
            {/* Handle - wobbly */}
            <path d="M22,22 Q21,18 22,14 Q24,10 28,10 H36 Q40,10 42,14 Q43,18 42,22" />
            <path d="M24,22 Q23,18 24,16" strokeWidth="0.5" opacity="0.5" />
            {/* Center clasp - scribble */}
            <circle cx="32" cy="38" r="6" fill={c} opacity="0.2" />
            <path d="M28,38 Q32,34 36,38 Q32,42 28,38" />
            {/* Divider lines */}
            <path d="M6,40 Q16,39 26,40 M38,40 Q48,39 58,40" strokeWidth="0.5" opacity="0.4" />
        </g>
    ),

    browser: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {/* Globe - hand drawn */}
            <path d="M6,32 Q4,18 16,10 Q28,2 44,8 Q58,16 58,32 Q58,48 44,56 Q28,62 14,54 Q4,46 6,32" />
            <path d="M8,32 Q6,20 18,12" strokeWidth="0.5" opacity="0.4" />
            {/* Meridian - wobbly */}
            <ellipse cx="32" cy="32" rx="10" ry="26" />
            {/* Parallels - sketchy */}
            <path d="M6,32 Q16,30 32,32 Q48,30 58,32" />
            <path d="M10,20 Q24,18 32,20 Q40,18 54,20" strokeWidth="1" opacity="0.5" />
            <path d="M10,44 Q24,42 32,44 Q40,42 54,44" strokeWidth="1" opacity="0.5" />
        </g>
    ),

    hospital: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {/* Building - hand drawn */}
            <path d="M10,10 Q9,9 12,8 H52 Q55,9 54,12 V52 Q53,55 50,54 H14 Q11,53 10,50 Z" />
            <path d="M12,12 Q11,11 14,10 H50" strokeWidth="0.5" opacity="0.4" />
            {/* Cross - sketchy */}
            <path d="M32,18 Q31,26 32,34 Q31,42 32,46" strokeWidth="5" />
            <path d="M18,32 Q26,31 32,32 Q38,31 46,32" strokeWidth="5" />
        </g>
    ),

    police: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {/* Shield - hand drawn */}
            <path d="M32,6 Q40,8 48,14 Q56,20 56,30 Q56,42 48,52 Q40,58 32,60 Q24,58 16,52 Q8,42 8,30 Q8,20 16,14 Q24,8 32,6" />
            <path d="M32,10 Q38,12 44,16" strokeWidth="0.5" opacity="0.4" />
            {/* Star - scribbled */}
            <path d="M32,20 Q34,26 36,28 H42 Q38,32 40,38 L32,34 L24,38 Q26,32 22,28 H28 Q30,26 32,20" fill={c} opacity="0.2" />
            <path d="M32,20 Q34,26 36,28 H42 Q38,32 40,38 L32,34 L24,38 Q26,32 22,28 H28 Q30,26 32,20" />
        </g>
    ),

    gang: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {/* Skull - hand drawn */}
            <path d="M16,30 Q14,18 20,12 Q28,6 32,8 Q36,6 44,12 Q50,18 48,30 V38 Q50,46 44,48 L40,54 H24 L20,48 Q14,46 16,38 Z" />
            <path d="M18,30 Q16,20 22,14" strokeWidth="0.5" opacity="0.4" />
            {/* Eyes - X marks */}
            <path d="M22,24 Q26,28 30,24 Q26,20 22,24" />
            <path d="M34,24 Q38,28 42,24 Q38,20 34,24" />
            {/* Nose */}
            <path d="M30,38 Q32,42 34,38" />
            {/* Teeth - wobbly */}
            <path d="M26,54 Q25,58 26,62" strokeWidth="2" />
            <path d="M32,54 Q31,60 32,64" strokeWidth="2" />
            <path d="M38,54 Q37,58 38,62" strokeWidth="2" />
        </g>
    ),

    // === SKETCH EXTRA ICONS ===
    pencil: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12,52 L48,16 Q52,12 56,16 Q60,20 56,24 L20,60 L8,62 Z" />
            <path d="M44,20 L52,28" strokeWidth="1" />
            <path d="M12,52 L8,62 L20,60" fill={c} opacity="0.2" />
            <path d="M18,50 L26,42" strokeWidth="1" opacity="0.5" />
        </g>
    ),

    notebook: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16,4 Q15,3 18,2 H50 Q53,3 52,6 V58 Q51,61 48,60 H20 Q17,59 16,56 Z" />
            <path d="M18,6 Q17,5 20,4 H48" strokeWidth="0.5" opacity="0.4" />
            <path d="M8,12 H16 M8,24 H16 M8,36 H16 M8,48 H16" strokeWidth="3" />
            <path d="M22,16 Q30,15 42,16" strokeWidth="1" opacity="0.5" />
            <path d="M22,26 Q34,25 46,26" strokeWidth="1" opacity="0.5" />
            <path d="M22,36 Q28,35 38,36" strokeWidth="1" opacity="0.5" />
        </g>
    ),

    eraser: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18,46 L38,26 Q42,22 48,28 L56,36 Q60,42 56,46 L42,60 H22 L18,56 Q14,52 18,46 Z" />
            <path d="M38,26 L22,42" strokeWidth="1" />
            <path d="M22,60 Q18,58 18,56 Q14,52 18,46" fill={c} opacity="0.2" />
            <path d="M8,16 Q12,12 16,16" strokeWidth="1" opacity="0.4" />
            <path d="M12,8 Q16,4 20,8" strokeWidth="1" opacity="0.4" />
        </g>
    ),

    doodle: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8,32 Q12,16 24,20 Q36,24 32,40 Q28,52 44,48 Q56,44 52,58" strokeWidth="2.5" />
            <circle cx="16" cy="12" r="4" fill={c} opacity="0.3" />
            <path d="M48,8 L52,12 L48,16 L44,12 Z" fill={c} opacity="0.3" />
            <path d="M56,24 Q58,28 56,32" strokeWidth="1" opacity="0.5" />
        </g>
    ),

    sticky: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10,8 Q9,7 12,6 H52 Q55,7 54,10 V48 L42,60 H12 Q9,59 8,56 V10 Q9,8 10,8 Z" fill={c} opacity="0.15" />
            <path d="M10,8 Q9,7 12,6 H52 Q55,7 54,10 V48 L42,60 H12 Q9,59 8,56 V10 Q9,8 10,8 Z" />
            <path d="M42,48 V60 L54,48 H42" fill={c} opacity="0.3" />
            <path d="M16,20 Q28,19 42,20" strokeWidth="1" />
            <path d="M16,30 Q32,29 48,30" strokeWidth="1" />
            <path d="M16,40 Q26,39 36,40" strokeWidth="1" opacity="0.5" />
        </g>
    ),

    scribble: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8,16 Q16,8 24,16 Q32,24 40,16 Q48,8 56,16" strokeWidth="2.5" />
            <path d="M8,32 Q16,24 24,32 Q32,40 40,32 Q48,24 56,32" strokeWidth="2.5" />
            <path d="M8,48 Q16,40 24,48 Q32,56 40,48 Q48,40 56,48" strokeWidth="2.5" />
        </g>
    ),

    idea: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20,28 Q16,16 26,10 Q38,6 46,16 Q52,26 44,38 Q40,44 40,50 H24 Q24,44 20,38 Q14,32 20,28" />
            <path d="M22,28 Q18,18 28,12" strokeWidth="0.5" opacity="0.4" />
            <path d="M26,50 V56 H38 V50" />
            <path d="M28,56 Q32,60 36,56" strokeWidth="1" />
            <path d="M12,24 L8,20 M52,24 L56,20" strokeWidth="1" opacity="0.5" />
            <path d="M32,4 V0" strokeWidth="1" opacity="0.5" />
        </g>
    ),

    question: (c) => (
        <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20,20 Q16,10 32,8 Q48,10 44,24 Q42,32 32,36 V44" />
            <circle cx="32" cy="54" r="3" fill={c} />
            <path d="M22,18 Q18,12 30,10" strokeWidth="0.5" opacity="0.4" />
        </g>
    ),
};

export default function SketchArt({ icon, colors, size, uid, showBackground = false }) {
    const iconId = icon.id;
    const IconPath = SKETCH_ICONS[iconId];

    if (!IconPath) {
        return (
            <svg viewBox="0 0 64 64" width={size} height={size}>
                <path d="M16,16 Q20,12 24,16 L48,40 Q52,44 48,48 L24,48 Q20,52 16,48 Z" fill="none" stroke={colors.primary} strokeWidth="2" />
                <text x="32" y="36" textAnchor="middle" fill={colors.primary} fontSize="10" fontFamily="Comic Sans MS, cursive">?</text>
            </svg>
        );
    }

    return (
        <svg viewBox="0 0 64 64" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
            {showBackground && (
                <>
                    <rect width="64" height="64" fill={colors.bg} rx="8" />
                    {/* Paper texture lines */}
                    <path d="M0,16 H64 M0,32 H64 M0,48 H64" stroke={colors.primary} strokeWidth="0.3" opacity="0.1" />
                </>
            )}
            {IconPath(colors.primary)}
        </svg>
    );
}
