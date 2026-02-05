import React from 'react';

// ============================================================================
// CYBERPUNK ART ENGINE - NEON GLITCH AESTHETIC (Based on Generated Reference)
// Style: Circuit patterns, glitch effects, neon glow, angular shapes, scanlines
// ============================================================================

const CYBER_ICONS = {
    phone: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="square">
            {/* Main body - angular */}
            <path d="M18,4 H46 V60 H18 Z" />
            {/* Glitch offset */}
            <path d="M20,6 H44 V12" strokeWidth="1" opacity="0.4" />
            {/* Screen with scanlines */}
            <rect x="22" y="10" width="20" height="38" fill={c} opacity="0.05" />
            <path d="M22,16 H42 M22,24 H42 M22,32 H42 M22,40 H42" strokeWidth="0.5" opacity="0.2" />
            {/* Circuit details */}
            <path d="M46,20 H50 V28 H54" strokeWidth="1.5" />
            <path d="M46,36 H52" strokeWidth="1.5" />
            <circle cx="54" cy="28" r="2" fill={c} />
            {/* Data port */}
            <rect x="28" y="52" width="8" height="4" fill={c} />
            {/* Signal waves */}
            <path d="M8,12 Q12,8 16,12" strokeWidth="1.5" />
            <path d="M6,18 Q12,12 18,18" strokeWidth="1" opacity="0.5" />
        </g>
    ),

    messages: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="square">
            {/* Main bubble - angular */}
            <path d="M6,8 H58 V42 H28 L16,54 V42 H6 Z" />
            {/* Glitch layers */}
            <path d="M10,12 H54" strokeWidth="1" opacity="0.3" />
            <path d="M8,10 H56 V44" strokeWidth="1" opacity="0.2" transform="translate(2,2)" />
            {/* Data streams */}
            <path d="M14,20 H50" strokeWidth="3" />
            <path d="M14,28 H42" strokeWidth="3" />
            <path d="M14,36 H36" strokeWidth="2" opacity="0.5" />
            {/* Cursor blink */}
            <rect x="40" y="34" width="4" height="6" fill={c}>
                <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
            </rect>
            {/* Circuit node */}
            <circle cx="54" cy="20" r="3" fill={c} />
        </g>
    ),

    contacts: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="square">
            {/* Head - hexagonal */}
            <path d="M22,8 L42,8 L50,20 L42,32 H22 L14,20 Z" />
            {/* Face scan */}
            <path d="M26,16 H30 M34,16 H38" strokeWidth="3" />
            <path d="M26,24 H38" strokeWidth="1" />
            {/* Body - angular */}
            <path d="M10,58 V46 L20,36 H44 L54,46 V58" />
            {/* Circuit connections */}
            <path d="M4,22 H14 M50,22 H60" strokeWidth="1.5" />
            <circle cx="4" cy="22" r="2" fill={c} />
            <circle cx="60" cy="22" r="2" fill={c} />
            {/* Data stream on body */}
            <path d="M26,42 H38" strokeWidth="1" opacity="0.5" />
            <path d="M28,48 H36" strokeWidth="1" opacity="0.3" />
        </g>
    ),

    email: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="square">
            {/* Envelope - angular */}
            <rect x="4" y="12" width="56" height="40" />
            {/* Flap with glitch */}
            <path d="M4,14 L32,36 L60,14" />
            <path d="M6,16 L32,38 L58,16" strokeWidth="1" opacity="0.3" />
            {/* Data corruption effect */}
            <path d="M4,52 L18,38" strokeWidth="1" opacity="0.4" />
            <path d="M60,52 L46,38" strokeWidth="1" opacity="0.4" />
            {/* @ symbol circuit */}
            <circle cx="52" cy="8" r="4" />
            <path d="M52,4 V0 M56,8 H60" strokeWidth="1.5" />
            {/* Encryption indicator */}
            <rect x="8" y="44" width="8" height="4" fill={c} opacity="0.5" />
        </g>
    ),

    camera: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="square">
            {/* Body */}
            <rect x="4" y="16" width="56" height="40" />
            {/* Viewfinder */}
            <path d="M20,16 V6 H44 V16" />
            <path d="M24,10 H40" strokeWidth="1" opacity="0.5" />
            {/* Lens - aperture style */}
            <circle cx="32" cy="38" r="14" />
            <circle cx="32" cy="38" r="8" />
            <circle cx="32" cy="38" r="4" fill={c} />
            {/* Aperture blades */}
            <path d="M32,24 L36,30 M44,32 L38,36 M40,48 L34,42 M24,44 L30,38 M18,36 L26,34 M28,26 L32,32" strokeWidth="1" opacity="0.4" />
            {/* REC indicator */}
            <circle cx="52" cy="24" r="4" fill={c} />
            <text x="52" y="26" textAnchor="middle" fill="white" fontSize="4" fontFamily="monospace">R</text>
            {/* Circuit */}
            <path d="M60,32 H64 M60,40 H64" strokeWidth="1.5" />
        </g>
    ),

    gallery: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="square">
            {/* Frame */}
            <rect x="4" y="8" width="56" height="48" />
            {/* Holographic grid */}
            <path d="M4,20 H60 M4,32 H60 M4,44 H60" strokeWidth="0.5" opacity="0.2" />
            <path d="M16,8 V56 M28,8 V56 M40,8 V56 M52,8 V56" strokeWidth="0.5" opacity="0.2" />
            {/* Digital sun */}
            <polygon points="18,22 24,16 30,22 24,28" fill={c} opacity="0.8" />
            {/* Mountains - low poly */}
            <path d="M4,56 L20,32 L32,44 L48,24 L60,40 V56" fill={c} opacity="0.15" />
            <path d="M4,56 L20,32 L32,44 L48,24 L60,40" />
            {/* Glitch */}
            <rect x="36" y="36" width="8" height="2" fill={c} opacity="0.6" />
        </g>
    ),

    video: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="square">
            {/* Screen */}
            <rect x="4" y="14" width="40" height="36" />
            {/* Scanlines */}
            <path d="M4,22 H44 M4,30 H44 M4,38 H44" strokeWidth="0.5" opacity="0.2" />
            {/* Play triangle */}
            <path d="M44,24 L60,14 V50 L44,40" fill={c} />
            {/* Recording indicator */}
            <circle cx="56" cy="10" r="3" fill={c} />
            <text x="56" y="11.5" textAnchor="middle" fill="white" fontSize="3" fontFamily="monospace">●</text>
            {/* Drone/cam indicator */}
            <path d="M8,8 H16 L14,14 M36,8 H28 L30,14" strokeWidth="1.5" />
            {/* Timecode */}
            <path d="M8,46 H24" strokeWidth="1" opacity="0.5" />
        </g>
    ),

    music: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="square">
            {/* Waveform circle */}
            <circle cx="32" cy="32" r="24" />
            {/* Waveform bars */}
            <path d="M18,28 V36 M24,24 V40 M30,20 V44 M36,22 V42 M42,26 V38 M48,30 V34" strokeWidth="3" />
            {/* Note */}
            <circle cx="14" cy="50" r="6" fill={c} />
            <path d="M20,50 V20 H24" strokeWidth="3" />
            {/* Circuit connectors */}
            <path d="M32,4 V0 M56,32 H62 M32,60 V64" strokeWidth="1.5" />
            <circle cx="32" cy="0" r="2" fill={c} />
        </g>
    ),

    spotify: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="round">
            {/* Circle */}
            <circle cx="32" cy="32" r="26" />
            {/* Glitch effect */}
            <path d="M8,32 H12 M52,32 H56" strokeWidth="1" opacity="0.4" />
            {/* Sound waves - angular */}
            <path d="M14,22 L24,18 L34,22 L44,18 L50,24" strokeWidth="4" />
            <path d="M16,32 L26,28 L36,32 L46,28" strokeWidth="4" />
            <path d="M18,42 L28,38 L38,42 L46,38" strokeWidth="4" />
            {/* Data nodes */}
            <circle cx="50" cy="24" r="2" fill={c} />
        </g>
    ),

    maps: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="square">
            {/* Grid base */}
            <rect x="4" y="38" width="56" height="20" fill={c} opacity="0.1" />
            <path d="M4,38 H60 M4,48 H60 M4,58 H60" strokeWidth="0.5" opacity="0.3" />
            <path d="M16,38 V58 M28,38 V58 M40,38 V58 M52,38 V58" strokeWidth="0.5" opacity="0.3" />
            {/* Pin - angular */}
            <path d="M32,50 L22,36 L22,20 L32,8 L42,20 V36 Z" fill={c} opacity="0.3" />
            <path d="M32,50 L22,36 L22,20 L32,8 L42,20 V36 Z" />
            {/* Target center */}
            <circle cx="32" cy="24" r="6" fill={c} />
            {/* City silhouette */}
            <path d="M4,38 V34 H12 V30 H20 V38" fill={c} opacity="0.3" />
            <path d="M44,38 V32 H52 V28 H60 V38" fill={c} opacity="0.3" />
        </g>
    ),

    gps: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="square">
            {/* Targeting circle */}
            <circle cx="32" cy="32" r="24" />
            <circle cx="32" cy="32" r="16" strokeWidth="1" opacity="0.5" />
            <circle cx="32" cy="32" r="8" strokeWidth="1" opacity="0.3" />
            {/* Crosshairs */}
            <path d="M32,4 V14 M32,50 V60" strokeWidth="3" />
            <path d="M4,32 H14 M50,32 H60" strokeWidth="3" />
            {/* Center target */}
            <rect x="28" y="28" width="8" height="8" fill={c} />
            {/* Coordinates */}
            <path d="M8,8 H20 V12 M52,8 H44 V12 M8,56 H20 V52 M52,56 H44 V52" strokeWidth="1" />
        </g>
    ),

    calendar: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="square">
            {/* Body */}
            <rect x="6" y="12" width="52" height="48" />
            {/* Header */}
            <path d="M6,26 H58" />
            {/* Rings */}
            <path d="M18,4 V18" strokeWidth="4" />
            <path d="M46,4 V18" strokeWidth="4" />
            {/* Grid pattern */}
            <path d="M22,26 V60 M38,26 V60" strokeWidth="0.5" opacity="0.3" />
            <path d="M6,40 H58 M6,54 H58" strokeWidth="0.5" opacity="0.3" />
            {/* Selected date - glowing */}
            <rect x="10" y="30" width="10" height="8" fill={c} />
            <rect x="9" y="29" width="12" height="10" strokeWidth="0.5" opacity="0.5" />
            {/* Other dates */}
            <rect x="24" y="30" width="8" height="6" strokeWidth="1" />
            <rect x="40" y="30" width="8" height="6" strokeWidth="1" />
            {/* Circuit */}
            <path d="M58,40 H62 V48 H58" strokeWidth="1" />
        </g>
    ),

    clock: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="square">
            {/* Outer ring */}
            <circle cx="32" cy="32" r="26" />
            {/* Inner ring */}
            <circle cx="32" cy="32" r="20" strokeWidth="1" opacity="0.4" />
            {/* Digital segments around */}
            <path d="M32,8 V14 M56,32 H50 M32,56 V50 M8,32 H14" strokeWidth="3" />
            {/* Hour hand */}
            <path d="M32,32 V18" strokeWidth="4" />
            {/* Minute hand */}
            <path d="M32,32 L48,32" strokeWidth="3" />
            {/* Center */}
            <rect x="28" y="28" width="8" height="8" fill={c} />
            {/* Tick marks */}
            <path d="M32,10 V12 M54,32 H52 M32,54 V52 M10,32 H12" strokeWidth="1" opacity="0.5" />
        </g>
    ),

    calculator: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="square">
            {/* Body */}
            <rect x="10" y="4" width="44" height="56" />
            {/* Screen */}
            <rect x="14" y="8" width="36" height="16" fill={c} opacity="0.1" />
            {/* Digital display */}
            <path d="M18,14 H28 M34,14 H44" strokeWidth="3" opacity="0.8" />
            {/* Button grid */}
            <rect x="14" y="28" width="8" height="6" fill={c} opacity="0.2" />
            <rect x="26" y="28" width="8" height="6" fill={c} opacity="0.2" />
            <rect x="38" y="28" width="8" height="6" fill={c} />
            <rect x="14" y="38" width="8" height="6" fill={c} opacity="0.2" />
            <rect x="26" y="38" width="8" height="6" fill={c} opacity="0.2" />
            <rect x="38" y="38" width="8" height="6" fill={c} />
            <rect x="14" y="48" width="20" height="6" fill={c} opacity="0.2" />
            <rect x="38" y="48" width="8" height="6" fill={c} />
            {/* Symbols */}
            <path d="M40,30 H44 M42,30 V34" strokeWidth="1" />
            <path d="M40,40 H44" strokeWidth="1" />
        </g>
    ),

    flashlight: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="square">
            {/* Light beam */}
            <path d="M24,8 L20,24 H44 L40,8 Z" fill={c} opacity="0.15" />
            <path d="M16,4 L8,24 M48,4 L56,24" strokeWidth="1" opacity="0.3" />
            {/* Head */}
            <path d="M18,8 L14,26 H50 L46,8 Z" />
            {/* Lens */}
            <ellipse cx="32" cy="12" rx="10" ry="4" />
            {/* Body */}
            <rect x="14" y="26" width="36" height="32" fill={c} />
            {/* Switch */}
            <rect x="28" y="34" width="8" height="4" fill="white" opacity="0.5" />
            {/* Power indicator */}
            <circle cx="32" cy="46" r="3" fill="white" opacity="0.3" />
            {/* Circuit */}
            <path d="M14,42 H8 V50 H14" strokeWidth="1" />
        </g>
    ),

    weather: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="square">
            {/* Sun - angular */}
            <polygon points="24,20 30,14 36,20 30,26" fill={c} />
            {/* Sun rays */}
            <path d="M24,8 L30,14 M40,14 L34,20 M40,26 L34,20 M36,8 V14" strokeWidth="2" />
            {/* Cloud - angular */}
            <path d="M22,48 L18,40 L22,32 L32,30 L42,32 L48,36 L52,44 L48,52 H28 L22,48 Z" />
            {/* Cloud fill */}
            <path d="M24,46 L20,40 L24,34 L32,32 L40,34 L46,38 L48,44 L46,50 H28 Z" fill={c} opacity="0.2" />
            {/* Rain data */}
            <path d="M28,56 V60 M36,54 V62 M44,56 V60" strokeWidth="2" />
        </g>
    ),

    settings: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="square">
            {/* Gear - angular/hexagonal */}
            <polygon points="32,4 40,8 46,16 46,24 52,28 52,36 46,40 46,48 40,56 32,60 24,56 18,48 18,40 12,36 12,28 18,24 18,16 24,8" />
            {/* Inner circle */}
            <circle cx="32" cy="32" r="10" />
            {/* Center target */}
            <circle cx="32" cy="32" r="4" fill={c} />
            {/* Glitch offset */}
            <path d="M30,6 H34 L42,10" strokeWidth="1" opacity="0.4" />
            {/* Circuit connectors */}
            <path d="M52,32 H58 M12,32 H6" strokeWidth="1.5" />
            <circle cx="58" cy="32" r="2" fill={c} />
            <circle cx="6" cy="32" r="2" fill={c} />
        </g>
    ),

    notifications: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="square">
            {/* Bell - angular */}
            <path d="M16,44 H48 L44,34 V26 L40,16 H24 L20,26 V34 Z" />
            {/* Top cap */}
            <path d="M24,16 L28,8 H36 L40,16" />
            {/* Clapper */}
            <path d="M26,48 L28,56 H36 L38,48" />
            {/* Signal waves */}
            <path d="M8,28 L14,24 L14,32 L8,28" fill={c} opacity="0.5" />
            <path d="M4,28 H8" strokeWidth="1" />
            <path d="M56,28 L50,24 L50,32 L56,28" fill={c} opacity="0.5" />
            <path d="M56,28 H60" strokeWidth="1" />
            {/* Alert badge */}
            <circle cx="48" cy="16" r="6" fill={c} />
        </g>
    ),

    games: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="square">
            {/* Controller body */}
            <path d="M4,28 L8,18 H56 L60,28 V40 L56,52 H40 L36,44 H28 L24,52 H8 L4,40 Z" />
            {/* D-pad */}
            <path d="M18,30 V40 M14,35 H22" strokeWidth="3" />
            {/* Buttons - square arrangement */}
            <rect x="42" y="26" width="6" height="6" fill={c} />
            <rect x="50" y="32" width="6" height="6" fill={c} opacity="0.6" />
            <rect x="42" y="38" width="6" height="6" strokeWidth="1" />
            <rect x="34" y="32" width="6" height="6" strokeWidth="1" />
            {/* Center buttons */}
            <rect x="28" y="22" width="4" height="2" fill={c} />
            <rect x="34" y="22" width="4" height="2" fill={c} />
            {/* Circuit */}
            <path d="M4,34 H0 M60,34 H64" strokeWidth="1.5" />
        </g>
    ),

    casino: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="square">
            {/* Dice 1 */}
            <rect x="4" y="4" width="26" height="26" />
            <rect x="14" y="14" width="6" height="6" fill={c} />
            {/* Dice 2 */}
            <rect x="34" y="34" width="26" height="26" />
            <rect x="40" y="40" width="4" height="4" fill={c} />
            <rect x="52" y="40" width="4" height="4" fill={c} />
            <rect x="40" y="52" width="4" height="4" fill={c} />
            <rect x="52" y="52" width="4" height="4" fill={c} />
            {/* Glitch connection */}
            <path d="M30,30 L34,34" strokeWidth="2" opacity="0.5" />
            {/* Circuit */}
            <path d="M0,17 H4 M30,17 H34 L34,34" strokeWidth="1" opacity="0.4" />
        </g>
    ),

    bank: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="square">
            {/* Pediment - angular */}
            <path d="M32,4 L58,24 H6 Z" fill={c} opacity="0.15" />
            <path d="M32,4 L58,24 H6 Z" />
            {/* Columns */}
            <rect x="12" y="28" width="6" height="24" fill={c} />
            <rect x="26" y="28" width="6" height="24" strokeWidth="1" />
            <rect x="40" y="28" width="6" height="24" strokeWidth="1" />
            <rect x="54" y="28" width="6" height="24" fill={c} />
            {/* Base */}
            <rect x="6" y="52" width="52" height="6" fill={c} opacity="0.3" />
            <path d="M6,52 H58 V58 H6 Z" />
            {/* Door */}
            <rect x="28" y="38" width="12" height="14" fill={c} opacity="0.2" />
            {/* Circuit */}
            <path d="M32,4 V0 M6,24 H2 M58,24 H62" strokeWidth="1.5" />
        </g>
    ),

    taxi: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="square">
            {/* Body - angular */}
            <path d="M8,36 L16,22 H48 L56,36" />
            <rect x="4" y="36" width="56" height="14" />
            {/* Window */}
            <path d="M14,36 L20,24 H44 L50,36" fill={c} opacity="0.1" />
            {/* Taxi sign */}
            <rect x="24" y="14" width="16" height="8" fill={c} />
            {/* Wheels - angular */}
            <polygon points="16,52 12,58 20,58" fill={c} />
            <polygon points="48,52 44,58 52,58" fill={c} />
            {/* Headlights */}
            <rect x="6" y="40" width="6" height="4" fill={c} opacity="0.6" />
            <rect x="52" y="40" width="6" height="4" fill={c} opacity="0.6" />
            {/* Circuit */}
            <path d="M0,44 H4 M60,44 H64" strokeWidth="1" />
        </g>
    ),

    home: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="square">
            {/* Roof - angular */}
            <path d="M32,6 L58,32 H52 V58 H12 V32 H6 Z" />
            {/* Roof fill */}
            <path d="M32,6 L52,26 V32 H12 V26 Z" fill={c} opacity="0.15" />
            {/* Door */}
            <rect x="26" y="40" width="12" height="18" fill={c} />
            {/* Window */}
            <rect x="38" y="40" width="10" height="10" fill={c} opacity="0.2" />
            <path d="M38,45 H48 M43,40 V50" strokeWidth="1" />
            {/* Antenna */}
            <path d="M48,6 V16 L52,14" strokeWidth="1.5" />
            <circle cx="48" cy="6" r="2" fill={c} />
        </g>
    ),

    food: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="square">
            {/* Fork - angular */}
            <path d="M10,8 V22 M16,8 V22 M22,8 V22" strokeWidth="3" />
            <path d="M10,22 H22 L18,30 V58" strokeWidth="2" />
            {/* Knife - angular */}
            <path d="M44,8 L52,8 L56,32 L50,38 V58" strokeWidth="2" />
            <path d="M44,8 V24 L50,32" strokeWidth="1.5" />
            {/* Circuit between */}
            <path d="M30,20 H36 V28 H30 V36 H36" strokeWidth="1" opacity="0.4" />
            <circle cx="36" cy="20" r="2" fill={c} />
        </g>
    ),

    electrician: (c) => (
        <g fill={c}>
            {/* Lightning - angular/glitch */}
            <path d="M38,0 L18,28 H30 L26,40 H34 L20,64 L28,42 H20 L38,12 H26 L42,0 Z" />
            {/* Glitch fragments */}
            <rect x="10" y="20" width="6" height="2" opacity="0.5" />
            <rect x="48" y="36" width="8" height="2" opacity="0.5" />
            <rect x="44" y="44" width="4" height="2" opacity="0.3" />
        </g>
    ),

    mechanic: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="square">
            {/* Wrench - X shape angular */}
            <path d="M16,6 L6,16 L24,34 L6,52 L16,62 L34,44 L52,62 L62,52 L44,34 L62,16 L52,6 L34,24 Z" />
            {/* Center bolt - hexagonal */}
            <polygon points="34,28 40,32 40,40 34,44 28,40 28,32" fill={c} />
            {/* Circuit */}
            <path d="M16,6 L8,0 M52,6 L60,0 M16,62 L8,68 M52,62 L60,68" strokeWidth="1" opacity="0.4" />
        </g>
    ),

    market: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="square">
            {/* Handle */}
            <path d="M6,10 H16 L24,42" strokeWidth="3" />
            {/* Cart body - angular */}
            <path d="M20,20 H58 L54,44 H26 Z" />
            {/* Grid inside */}
            <path d="M24,28 H58 M24,36 H56 M36,20 V44 M48,20 V44" strokeWidth="0.5" opacity="0.3" />
            {/* Items - angular */}
            <rect x="28" y="24" width="6" height="16" fill={c} opacity="0.3" />
            <rect x="40" y="28" width="6" height="12" fill={c} opacity="0.3" />
            {/* Wheels */}
            <polygon points="30,50 26,58 34,58" fill={c} />
            <polygon points="50,50 46,58 54,58" fill={c} />
        </g>
    ),

    shop247: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="square">
            {/* Building */}
            <rect x="6" y="18" width="52" height="42" />
            {/* Roof */}
            <path d="M6,18 L18,6 H46 L58,18" />
            {/* Sign */}
            <rect x="6" y="18" width="52" height="12" fill={c} opacity="0.3" />
            {/* Neon text area */}
            <path d="M14,22 H50" strokeWidth="4" />
            {/* Door */}
            <rect x="22" y="38" width="20" height="22" fill={c} opacity="0.15" />
            <path d="M32,38 V60" strokeWidth="1" />
            {/* 24/7 indicator */}
            <rect x="46" y="6" width="8" height="8" fill={c} />
            {/* Circuit */}
            <path d="M0,40 H6 M58,40 H64" strokeWidth="1.5" />
        </g>
    ),

    business: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="square">
            {/* Briefcase body */}
            <rect x="6" y="22" width="52" height="36" />
            {/* Handle */}
            <path d="M22,22 V14 L28,8 H36 L42,14 V22" />
            {/* Center lock - hexagonal */}
            <polygon points="32,36 38,40 38,48 32,52 26,48 26,40" fill={c} />
            {/* Divider lines */}
            <path d="M6,40 H26 M38,40 H58" strokeWidth="1" opacity="0.4" />
            {/* Circuit */}
            <path d="M32,8 V0 M0,40 H6 M58,40 H64" strokeWidth="1.5" />
        </g>
    ),

    browser: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="square">
            {/* Globe */}
            <circle cx="32" cy="32" r="26" />
            {/* Grid lines */}
            <ellipse cx="32" cy="32" rx="10" ry="26" />
            <path d="M6,32 H58" />
            <path d="M10,18 H54" strokeWidth="1" opacity="0.5" />
            <path d="M10,46 H54" strokeWidth="1" opacity="0.5" />
            {/* Data nodes */}
            <circle cx="32" cy="6" r="3" fill={c} />
            <circle cx="58" cy="32" r="3" fill={c} />
            <circle cx="32" cy="58" r="3" fill={c} />
            <circle cx="6" cy="32" r="3" fill={c} />
            {/* Glitch */}
            <rect x="20" y="28" width="8" height="2" fill={c} opacity="0.4" />
        </g>
    ),

    hospital: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="square">
            {/* Building */}
            <rect x="8" y="8" width="48" height="48" />
            {/* Cross */}
            <path d="M32,16 V48 M16,32 H48" strokeWidth="6" />
            {/* Cross glow */}
            <path d="M32,14 V50 M14,32 H50" strokeWidth="2" opacity="0.3" />
            {/* Corner circuits */}
            <path d="M8,8 L0,0 M56,8 L64,0 M8,56 L0,64 M56,56 L64,64" strokeWidth="1" />
            <circle cx="0" cy="0" r="2" fill={c} />
            <circle cx="64" cy="0" r="2" fill={c} />
        </g>
    ),

    police: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="square">
            {/* Shield - angular */}
            <path d="M32,4 L56,16 V38 L44,52 L32,60 L20,52 L8,38 V16 Z" />
            {/* Inner shield */}
            <path d="M32,12 L48,22 V36 L40,46 L32,52 L24,46 L16,36 V22 Z" fill={c} opacity="0.15" />
            {/* Star */}
            <path d="M32,20 L34,28 H42 L36,32 L38,40 L32,36 L26,40 L28,32 L22,28 H30 Z" fill={c} />
            {/* Circuit */}
            <path d="M32,4 V0 M8,16 H4 M56,16 H60" strokeWidth="1.5" />
        </g>
    ),

    gang: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="square">
            {/* Skull - angular */}
            <path d="M16,30 L14,16 L22,8 H42 L50,16 L48,30 V38 Q48,46 40,46 L38,54 H26 L24,46 Q16,46 16,38 Z" />
            {/* Eyes - X marks */}
            <path d="M20,24 L28,32 M28,24 L20,32" strokeWidth="2.5" />
            <path d="M36,24 L44,32 M44,24 L36,32" strokeWidth="2.5" />
            {/* Nose */}
            <path d="M30,38 L32,42 L34,38" />
            {/* Teeth */}
            <path d="M26,54 V60 M32,54 V62 M38,54 V60" strokeWidth="3" />
            {/* Glitch */}
            <rect x="10" y="26" width="4" height="2" fill={c} opacity="0.4" />
            <rect x="50" y="34" width="6" height="2" fill={c} opacity="0.4" />
        </g>
    ),

    // === CYBER EXTRA ICONS ===
    hacker: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="square">
            <rect x="4" y="8" width="56" height="40" />
            <path d="M4,16 H60" strokeWidth="1" />
            <rect x="8" y="10" width="4" height="4" fill={c} />
            <rect x="14" y="10" width="4" height="4" fill={c} opacity="0.5" />
            <path d="M12,24 H20 L24,28 H32 M36,28 H44 L48,32 H52" strokeWidth="1.5" />
            <path d="M12,34 H28 M34,38 H48" strokeWidth="1.5" opacity="0.6" />
            <path d="M16,52 L24,48 H40 L48,52" strokeWidth="3" />
            <circle cx="20" cy="52" r="3" fill={c} />
            <circle cx="44" cy="52" r="3" fill={c} />
        </g>
    ),

    drone: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="square">
            <rect x="22" y="24" width="20" height="16" />
            <circle cx="12" cy="20" r="8" />
            <circle cx="52" cy="20" r="8" />
            <circle cx="12" cy="44" r="8" />
            <circle cx="52" cy="44" r="8" />
            <path d="M22,28 H12 M42,28 H52 M22,36 H12 M42,36 H52" strokeWidth="2" />
            <circle cx="32" cy="32" r="4" fill={c} />
            <path d="M8,20 H16 M48,20 H56 M8,44 H16 M48,44 H56" strokeWidth="3" />
        </g>
    ),

    neural: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="square">
            <circle cx="32" cy="16" r="8" />
            <circle cx="16" cy="32" r="6" />
            <circle cx="48" cy="32" r="6" />
            <circle cx="20" cy="52" r="6" />
            <circle cx="44" cy="52" r="6" />
            <path d="M32,24 L16,26 M32,24 L48,26" />
            <path d="M16,38 L20,46 M48,38 L44,46" />
            <path d="M26,52 H38" />
            <circle cx="32" cy="16" r="3" fill={c} />
            <circle cx="16" cy="32" r="2" fill={c} />
            <circle cx="48" cy="32" r="2" fill={c} />
        </g>
    ),

    chip: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="square">
            <rect x="16" y="16" width="32" height="32" />
            <rect x="24" y="24" width="16" height="16" fill={c} opacity="0.3" />
            <path d="M24,16 V8 M32,16 V8 M40,16 V8" strokeWidth="2" />
            <path d="M24,48 V56 M32,48 V56 M40,48 V56" strokeWidth="2" />
            <path d="M16,24 H8 M16,32 H8 M16,40 H8" strokeWidth="2" />
            <path d="M48,24 H56 M48,32 H56 M48,40 H56" strokeWidth="2" />
            <circle cx="32" cy="32" r="4" fill={c} />
        </g>
    ),

    hologram: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="square">
            <path d="M32,8 L16,20 V44 L32,56 L48,44 V20 Z" />
            <path d="M32,14 L20,24 V40 L32,50 L44,40 V24 Z" strokeWidth="1" opacity="0.5" />
            <path d="M16,20 L32,32 L48,20 M32,32 V56" strokeWidth="1" opacity="0.3" />
            <path d="M8,32 H16 M48,32 H56" strokeWidth="1.5" />
            <circle cx="8" cy="32" r="2" fill={c} />
            <circle cx="56" cy="32" r="2" fill={c} />
        </g>
    ),

    visor: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="square">
            <path d="M4,24 H60 V40 Q60,48 52,48 H12 Q4,48 4,40 Z" />
            <path d="M8,28 H56 V36 Q56,44 48,44 H16 Q8,44 8,36 Z" fill={c} opacity="0.2" />
            <path d="M12,32 H52" strokeWidth="4" />
            <path d="M12,38 H28 M36,38 H52" strokeWidth="2" opacity="0.5" />
            <path d="M4,32 H0 M60,32 H64" strokeWidth="1.5" />
        </g>
    ),

    datastream: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="square">
            <path d="M8,8 V56" strokeWidth="3" />
            <path d="M24,8 V56" strokeWidth="3" />
            <path d="M40,8 V56" strokeWidth="3" />
            <path d="M56,8 V56" strokeWidth="3" />
            <rect x="6" y="16" width="4" height="8" fill={c} />
            <rect x="22" y="28" width="4" height="12" fill={c} />
            <rect x="38" y="12" width="4" height="16" fill={c} />
            <rect x="54" y="36" width="4" height="10" fill={c} />
            <rect x="6" y="40" width="4" height="6" fill={c} opacity="0.5" />
            <rect x="38" y="44" width="4" height="8" fill={c} opacity="0.5" />
        </g>
    ),

    terminal: (c) => (
        <g fill="none" stroke={c} strokeWidth="2" strokeLinecap="square">
            <rect x="4" y="8" width="56" height="48" />
            <path d="M4,18 H60" />
            <circle cx="10" cy="13" r="2" fill={c} />
            <circle cx="18" cy="13" r="2" fill={c} opacity="0.5" />
            <path d="M12,28 L20,34 L12,40" strokeWidth="2.5" />
            <path d="M24,40 H44" strokeWidth="2.5" />
            <path d="M12,48 H40" strokeWidth="1.5" opacity="0.5" />
            <rect x="44" y="46" width="4" height="6" fill={c}>
                <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
            </rect>
        </g>
    ),
};

export default function CyberArt({ icon, colors, size, uid, showBackground = false }) {
    const iconId = icon.id;
    const IconPath = CYBER_ICONS[iconId];

    if (!IconPath) {
        return (
            <svg viewBox="0 0 64 64" width={size} height={size}>
                <rect x="8" y="8" width="48" height="48" fill="none" stroke={colors.primary} strokeWidth="2" />
                <path d="M8,8 L56,56 M56,8 L8,56" stroke={colors.primary} strokeWidth="1" opacity="0.5" />
                <text x="32" y="36" textAnchor="middle" fill={colors.primary} fontSize="8" fontFamily="monospace">ERR</text>
            </svg>
        );
    }

    return (
        <svg viewBox="0 0 64 64" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
            {showBackground && (
                <>
                    <rect width="64" height="64" fill={colors.bg} />
                    {/* Scanlines effect */}
                    <pattern id={`scanlines-${uid}`} width="4" height="4" patternUnits="userSpaceOnUse">
                        <line x1="0" y1="0" x2="4" y2="0" stroke={colors.primary} strokeWidth="0.5" opacity="0.1" />
                    </pattern>
                    <rect width="64" height="64" fill={`url(#scanlines-${uid})`} />
                </>
            )}
            {IconPath(colors.primary)}
        </svg>
    );
}
