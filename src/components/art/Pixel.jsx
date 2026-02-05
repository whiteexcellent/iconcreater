import React from 'react';

// ============================================================================
// PIXEL ART ENGINE - RETRO 8-BIT GAMEBOY STYLE (Based on Generated Reference)
// Style: Chunky pixels, blocky shapes, no anti-aliasing, CRT aesthetic
// ============================================================================

const PIXEL_ICONS = {
    phone: (c) => (
        <g fill={c}>
            {/* Rotary phone style from reference */}
            {/* Base */}
            <rect x="12" y="44" width="40" height="8" />
            <rect x="16" y="36" width="32" height="8" />
            {/* Handset left */}
            <rect x="8" y="12" width="12" height="8" />
            <rect x="12" y="20" width="4" height="20" />
            <rect x="8" y="36" width="8" height="8" />
            {/* Handset right */}
            <rect x="44" y="12" width="12" height="8" />
            <rect x="48" y="20" width="4" height="20" />
            <rect x="48" y="36" width="8" height="8" />
            {/* Dial */}
            <rect x="24" y="16" width="16" height="16" fill="none" stroke={c} strokeWidth="4" />
            <rect x="28" y="20" width="8" height="8" />
            {/* Number buttons grid */}
            <rect x="20" y="40" width="4" height="4" opacity="0.6" />
            <rect x="26" y="40" width="4" height="4" opacity="0.6" />
            <rect x="32" y="40" width="4" height="4" opacity="0.6" />
            <rect x="38" y="40" width="4" height="4" opacity="0.6" />
        </g>
    ),

    messages: (c) => (
        <g fill={c}>
            {/* Envelope from reference */}
            <rect x="8" y="16" width="48" height="32" />
            {/* Flap */}
            <rect x="12" y="12" width="40" height="4" />
            <rect x="16" y="8" width="32" height="4" />
            {/* V shape cutout */}
            <rect x="24" y="20" width="16" height="4" fill="none" stroke={c} strokeWidth="4" />
            {/* Arrow indicator */}
            <rect x="52" y="24" width="8" height="4" />
            <rect x="56" y="20" width="4" height="4" />
            <rect x="56" y="28" width="4" height="4" />
            {/* Inner detail */}
            <rect x="16" y="32" width="32" height="4" opacity="0.3" />
            <rect x="16" y="40" width="24" height="4" opacity="0.3" />
        </g>
    ),

    contacts: (c) => (
        <g fill={c}>
            {/* Head */}
            <rect x="24" y="8" width="16" height="16" />
            <rect x="20" y="12" width="4" height="8" />
            <rect x="40" y="12" width="4" height="8" />
            {/* Eyes */}
            <rect x="26" y="14" width="4" height="4" fill="white" opacity="0.8" />
            <rect x="34" y="14" width="4" height="4" fill="white" opacity="0.8" />
            {/* Body */}
            <rect x="16" y="28" width="32" height="28" />
            <rect x="12" y="32" width="4" height="20" />
            <rect x="48" y="32" width="4" height="20" />
            {/* Tie/detail */}
            <rect x="28" y="32" width="8" height="12" opacity="0.5" />
        </g>
    ),

    email: (c) => (
        <g fill={c}>
            {/* Envelope body */}
            <rect x="8" y="20" width="48" height="28" />
            {/* Top flap pixels */}
            <rect x="12" y="16" width="40" height="4" />
            <rect x="16" y="12" width="32" height="4" />
            <rect x="24" y="8" width="16" height="4" />
            {/* V fold */}
            <rect x="28" y="24" width="8" height="4" fill="white" opacity="0.3" />
            <rect x="24" y="28" width="4" height="4" fill="white" opacity="0.3" />
            <rect x="36" y="28" width="4" height="4" fill="white" opacity="0.3" />
            {/* Lines */}
            <rect x="16" y="36" width="24" height="4" opacity="0.4" />
        </g>
    ),

    camera: (c) => (
        <g fill={c}>
            {/* Body */}
            <rect x="8" y="20" width="48" height="32" />
            <rect x="12" y="16" width="8" height="4" />
            {/* Viewfinder */}
            <rect x="24" y="12" width="16" height="8" />
            {/* Lens outer */}
            <rect x="24" y="28" width="16" height="16" fill="none" stroke={c} strokeWidth="4" />
            {/* Lens inner */}
            <rect x="28" y="32" width="8" height="8" />
            {/* Flash */}
            <rect x="44" y="24" width="8" height="8" opacity="0.6" />
            {/* Grip */}
            <rect x="8" y="28" width="4" height="16" opacity="0.4" />
            <rect x="52" y="28" width="4" height="16" opacity="0.4" />
        </g>
    ),

    gallery: (c) => (
        <g fill={c}>
            {/* Frame */}
            <rect x="8" y="12" width="48" height="40" fill="none" stroke={c} strokeWidth="4" />
            {/* Sun */}
            <rect x="16" y="20" width="8" height="8" />
            {/* Mountains */}
            <rect x="8" y="44" width="48" height="4" opacity="0.5" />
            <rect x="12" y="40" width="16" height="4" opacity="0.5" />
            <rect x="16" y="36" width="8" height="4" opacity="0.5" />
            <rect x="32" y="36" width="20" height="8" opacity="0.5" />
            <rect x="36" y="32" width="12" height="4" opacity="0.5" />
            <rect x="40" y="28" width="4" height="4" opacity="0.5" />
        </g>
    ),

    video: (c) => (
        <g fill={c}>
            {/* Camcorder body */}
            <rect x="8" y="20" width="36" height="28" />
            {/* Lens tube */}
            <rect x="44" y="24" width="12" height="20" />
            <rect x="56" y="28" width="4" height="12" opacity="0.6" />
            {/* Viewfinder */}
            <rect x="12" y="12" width="16" height="8" />
            {/* Buttons */}
            <rect x="36" y="16" width="8" height="4" />
            {/* Grip */}
            <rect x="8" y="48" width="12" height="8" />
            {/* REC indicator */}
            <rect x="32" y="24" width="8" height="4" opacity="0.6" />
        </g>
    ),

    music: (c) => (
        <g fill={c}>
            {/* Double note from reference */}
            {/* Note 1 head */}
            <rect x="12" y="44" width="12" height="8" />
            <rect x="8" y="48" width="4" height="4" />
            <rect x="24" y="48" width="4" height="4" />
            {/* Note 2 head */}
            <rect x="40" y="40" width="12" height="8" />
            <rect x="36" y="44" width="4" height="4" />
            <rect x="52" y="44" width="4" height="4" />
            {/* Stems */}
            <rect x="20" y="16" width="4" height="32" />
            <rect x="48" y="12" width="4" height="32" />
            {/* Beams */}
            <rect x="20" y="12" width="32" height="4" />
            <rect x="20" y="20" width="32" height="4" />
        </g>
    ),

    spotify: (c) => (
        <g fill={c}>
            {/* Circle outline */}
            <rect x="20" y="4" width="24" height="4" />
            <rect x="12" y="8" width="8" height="4" />
            <rect x="44" y="8" width="8" height="4" />
            <rect x="8" y="12" width="4" height="8" />
            <rect x="52" y="12" width="4" height="8" />
            <rect x="4" y="20" width="4" height="24" />
            <rect x="56" y="20" width="4" height="24" />
            <rect x="8" y="44" width="4" height="8" />
            <rect x="52" y="44" width="4" height="8" />
            <rect x="12" y="52" width="8" height="4" />
            <rect x="44" y="52" width="8" height="4" />
            <rect x="20" y="56" width="24" height="4" />
            {/* Sound waves */}
            <rect x="16" y="20" width="32" height="4" />
            <rect x="20" y="32" width="28" height="4" />
            <rect x="24" y="44" width="20" height="4" />
        </g>
    ),

    maps: (c) => (
        <g fill={c}>
            {/* Pin shape */}
            <rect x="24" y="4" width="16" height="4" />
            <rect x="20" y="8" width="24" height="4" />
            <rect x="16" y="12" width="32" height="20" />
            <rect x="20" y="32" width="24" height="4" />
            <rect x="24" y="36" width="16" height="4" />
            <rect x="28" y="40" width="8" height="4" />
            <rect x="28" y="44" width="8" height="8" />
            <rect x="28" y="52" width="8" height="4" />
            {/* Center dot */}
            <rect x="28" y="16" width="8" height="8" fill="white" opacity="0.8" />
        </g>
    ),

    gps: (c) => (
        <g fill={c}>
            {/* Outer circle */}
            <rect x="24" y="4" width="16" height="4" />
            <rect x="16" y="8" width="8" height="4" />
            <rect x="40" y="8" width="8" height="4" />
            <rect x="12" y="12" width="4" height="8" />
            <rect x="48" y="12" width="4" height="8" />
            <rect x="8" y="20" width="4" height="24" />
            <rect x="52" y="20" width="4" height="24" />
            <rect x="12" y="44" width="4" height="8" />
            <rect x="48" y="44" width="4" height="8" />
            <rect x="16" y="52" width="8" height="4" />
            <rect x="40" y="52" width="8" height="4" />
            <rect x="24" y="56" width="16" height="4" />
            {/* Crosshairs */}
            <rect x="28" y="4" width="8" height="12" />
            <rect x="28" y="48" width="8" height="12" />
            <rect x="4" y="28" width="12" height="8" />
            <rect x="48" y="28" width="12" height="8" />
            {/* Center */}
            <rect x="28" y="28" width="8" height="8" />
        </g>
    ),

    calendar: (c) => (
        <g fill={c}>
            {/* Body */}
            <rect x="8" y="16" width="48" height="40" fill="none" stroke={c} strokeWidth="4" />
            {/* Header */}
            <rect x="8" y="16" width="48" height="12" />
            {/* Rings */}
            <rect x="16" y="8" width="8" height="12" />
            <rect x="40" y="8" width="8" height="12" />
            {/* Date grid */}
            <rect x="12" y="32" width="8" height="8" opacity="0.6" />
            <rect x="24" y="32" width="8" height="8" opacity="0.3" />
            <rect x="36" y="32" width="8" height="8" opacity="0.3" />
            <rect x="12" y="44" width="8" height="8" opacity="0.3" />
            <rect x="24" y="44" width="8" height="8" opacity="0.3" />
            <rect x="36" y="44" width="8" height="8" opacity="0.3" />
        </g>
    ),

    clock: (c) => (
        <g fill={c}>
            {/* Circle face */}
            <rect x="20" y="4" width="24" height="4" />
            <rect x="12" y="8" width="8" height="4" />
            <rect x="44" y="8" width="8" height="4" />
            <rect x="8" y="12" width="4" height="8" />
            <rect x="52" y="12" width="4" height="8" />
            <rect x="4" y="20" width="4" height="24" />
            <rect x="56" y="20" width="4" height="24" />
            <rect x="8" y="44" width="4" height="8" />
            <rect x="52" y="44" width="4" height="8" />
            <rect x="12" y="52" width="8" height="4" />
            <rect x="44" y="52" width="8" height="4" />
            <rect x="20" y="56" width="24" height="4" />
            {/* Hour hand */}
            <rect x="28" y="20" width="8" height="16" />
            {/* Minute hand */}
            <rect x="36" y="28" width="12" height="8" />
            {/* Center */}
            <rect x="28" y="28" width="8" height="8" />
            {/* 12 marker */}
            <rect x="28" y="12" width="8" height="4" opacity="0.5" />
        </g>
    ),

    calculator: (c) => (
        <g fill={c}>
            {/* Body */}
            <rect x="12" y="8" width="40" height="48" fill="none" stroke={c} strokeWidth="4" />
            {/* Screen */}
            <rect x="16" y="12" width="32" height="12" />
            {/* Buttons grid */}
            <rect x="16" y="28" width="8" height="6" opacity="0.5" />
            <rect x="28" y="28" width="8" height="6" opacity="0.5" />
            <rect x="40" y="28" width="8" height="6" />
            <rect x="16" y="38" width="8" height="6" opacity="0.5" />
            <rect x="28" y="38" width="8" height="6" opacity="0.5" />
            <rect x="40" y="38" width="8" height="6" />
            <rect x="16" y="48" width="20" height="6" opacity="0.5" />
            <rect x="40" y="48" width="8" height="6" />
        </g>
    ),

    flashlight: (c) => (
        <g fill={c}>
            {/* Head */}
            <rect x="20" y="8" width="24" height="4" />
            <rect x="16" y="12" width="32" height="12" />
            {/* Lens */}
            <rect x="24" y="8" width="16" height="4" opacity="0.6" />
            {/* Body */}
            <rect x="20" y="24" width="24" height="32" />
            {/* Grip lines */}
            <rect x="20" y="32" width="24" height="4" opacity="0.3" />
            <rect x="20" y="40" width="24" height="4" opacity="0.3" />
            <rect x="20" y="48" width="24" height="4" opacity="0.3" />
        </g>
    ),

    weather: (c) => (
        <g fill={c}>
            {/* Sun */}
            <rect x="12" y="12" width="16" height="16" />
            {/* Sun rays */}
            <rect x="8" y="8" width="4" height="4" opacity="0.6" />
            <rect x="28" y="8" width="4" height="4" opacity="0.6" />
            <rect x="8" y="28" width="4" height="4" opacity="0.6" />
            {/* Cloud */}
            <rect x="28" y="28" width="20" height="12" />
            <rect x="24" y="32" width="4" height="8" />
            <rect x="48" y="32" width="4" height="8" />
            <rect x="32" y="24" width="12" height="4" />
            {/* Rain */}
            <rect x="32" y="44" width="4" height="8" opacity="0.6" />
            <rect x="40" y="48" width="4" height="8" opacity="0.6" />
        </g>
    ),

    settings: (c) => (
        <g fill={c}>
            {/* Gear pixel art */}
            <rect x="24" y="4" width="16" height="4" />
            <rect x="24" y="56" width="16" height="4" />
            <rect x="4" y="24" width="4" height="16" />
            <rect x="56" y="24" width="4" height="16" />
            {/* Diagonal teeth */}
            <rect x="12" y="8" width="8" height="8" />
            <rect x="44" y="8" width="8" height="8" />
            <rect x="12" y="48" width="8" height="8" />
            <rect x="44" y="48" width="8" height="8" />
            {/* Body */}
            <rect x="16" y="16" width="32" height="32" />
            {/* Center hole */}
            <rect x="24" y="24" width="16" height="16" fill="white" opacity="0.3" />
            <rect x="28" y="28" width="8" height="8" />
        </g>
    ),

    notifications: (c) => (
        <g fill={c}>
            {/* Bell */}
            <rect x="24" y="8" width="16" height="4" />
            <rect x="20" y="12" width="24" height="4" />
            <rect x="16" y="16" width="32" height="24" />
            <rect x="12" y="40" width="40" height="4" />
            {/* Clapper */}
            <rect x="28" y="48" width="8" height="8" />
            {/* Top knob */}
            <rect x="28" y="4" width="8" height="4" />
            {/* Alert */}
            <rect x="44" y="8" width="8" height="8" opacity="0.8" />
        </g>
    ),

    games: (c) => (
        <g fill={c}>
            {/* Controller from reference - joystick style */}
            {/* Base */}
            <rect x="16" y="36" width="32" height="20" />
            <rect x="12" y="40" width="4" height="12" />
            <rect x="48" y="40" width="4" height="12" />
            {/* Stick */}
            <rect x="28" y="16" width="8" height="20" />
            <rect x="24" y="12" width="16" height="8" />
            {/* Ball top */}
            <rect x="26" y="8" width="12" height="8" />
            {/* Button */}
            <rect x="40" y="44" width="8" height="8" opacity="0.6" />
        </g>
    ),

    casino: (c) => (
        <g fill={c}>
            {/* Dice 1 */}
            <rect x="8" y="8" width="20" height="20" fill="none" stroke={c} strokeWidth="4" />
            <rect x="14" y="14" width="8" height="8" />
            {/* Dice 2 */}
            <rect x="36" y="36" width="20" height="20" fill="none" stroke={c} strokeWidth="4" />
            <rect x="40" y="40" width="4" height="4" />
            <rect x="48" y="40" width="4" height="4" />
            <rect x="40" y="48" width="4" height="4" />
            <rect x="48" y="48" width="4" height="4" />
            {/* Coins */}
            <rect x="44" y="12" width="12" height="8" opacity="0.6" />
            <rect x="44" y="8" width="12" height="4" />
        </g>
    ),

    bank: (c) => (
        <g fill={c}>
            {/* Roof triangle */}
            <rect x="28" y="4" width="8" height="4" />
            <rect x="20" y="8" width="24" height="4" />
            <rect x="12" y="12" width="40" height="4" />
            <rect x="8" y="16" width="48" height="4" />
            {/* Pillars */}
            <rect x="12" y="24" width="8" height="24" />
            <rect x="28" y="24" width="8" height="24" />
            <rect x="44" y="24" width="8" height="24" />
            {/* Base */}
            <rect x="8" y="48" width="48" height="8" />
        </g>
    ),

    taxi: (c) => (
        <g fill={c}>
            {/* Car body */}
            <rect x="8" y="32" width="48" height="16" />
            {/* Cabin */}
            <rect x="16" y="20" width="32" height="12" />
            <rect x="20" y="16" width="24" height="4" />
            {/* Taxi sign */}
            <rect x="28" y="8" width="8" height="8" />
            {/* Wheels */}
            <rect x="12" y="48" width="12" height="8" />
            <rect x="40" y="48" width="12" height="8" />
            {/* Windows */}
            <rect x="20" y="24" width="8" height="4" opacity="0.4" />
            <rect x="36" y="24" width="8" height="4" opacity="0.4" />
            {/* Lights */}
            <rect x="8" y="36" width="4" height="4" opacity="0.6" />
            <rect x="52" y="36" width="4" height="4" opacity="0.6" />
        </g>
    ),

    home: (c) => (
        <g fill={c}>
            {/* Roof */}
            <rect x="28" y="4" width="8" height="4" />
            <rect x="20" y="8" width="24" height="4" />
            <rect x="12" y="12" width="40" height="4" />
            <rect x="8" y="16" width="48" height="4" />
            {/* Body */}
            <rect x="12" y="20" width="40" height="36" fill="none" stroke={c} strokeWidth="4" />
            {/* Door */}
            <rect x="28" y="40" width="8" height="16" />
            {/* Windows */}
            <rect x="16" y="28" width="8" height="8" opacity="0.5" />
            <rect x="40" y="28" width="8" height="8" opacity="0.5" />
            {/* Chimney */}
            <rect x="44" y="8" width="8" height="12" />
        </g>
    ),

    food: (c) => (
        <g fill={c}>
            {/* Fork */}
            <rect x="8" y="8" width="4" height="20" />
            <rect x="16" y="8" width="4" height="20" />
            <rect x="24" y="8" width="4" height="20" />
            <rect x="8" y="28" width="20" height="4" />
            <rect x="12" y="32" width="12" height="4" />
            <rect x="16" y="36" width="4" height="20" />
            {/* Knife */}
            <rect x="40" y="8" width="12" height="4" />
            <rect x="44" y="12" width="8" height="12" />
            <rect x="48" y="24" width="4" height="32" />
        </g>
    ),

    electrician: (c) => (
        <g fill={c}>
            {/* Lightning bolt pixel art */}
            <rect x="32" y="4" width="12" height="4" />
            <rect x="28" y="8" width="12" height="4" />
            <rect x="24" y="12" width="12" height="4" />
            <rect x="20" y="16" width="12" height="4" />
            <rect x="16" y="20" width="24" height="4" />
            <rect x="28" y="24" width="16" height="4" />
            <rect x="32" y="28" width="12" height="4" />
            <rect x="36" y="32" width="8" height="4" />
            <rect x="32" y="36" width="8" height="4" />
            <rect x="28" y="40" width="8" height="4" />
            <rect x="24" y="44" width="8" height="4" />
            <rect x="20" y="48" width="8" height="4" />
            <rect x="16" y="52" width="8" height="4" />
        </g>
    ),

    mechanic: (c) => (
        <g fill={c}>
            {/* Wrench pixel art */}
            <rect x="8" y="8" width="12" height="8" />
            <rect x="16" y="16" width="8" height="8" />
            <rect x="24" y="24" width="8" height="8" />
            <rect x="32" y="32" width="8" height="8" />
            <rect x="40" y="40" width="8" height="8" />
            <rect x="44" y="48" width="12" height="8" />
            {/* Wrench heads */}
            <rect x="4" y="12" width="4" height="4" />
            <rect x="20" y="4" width="4" height="4" />
            <rect x="48" y="56" width="4" height="4" />
            <rect x="56" y="44" width="4" height="4" />
        </g>
    ),

    market: (c) => (
        <g fill={c}>
            {/* Cart handle */}
            <rect x="4" y="12" width="8" height="4" />
            <rect x="8" y="16" width="4" height="8" />
            {/* Cart basket */}
            <rect x="12" y="24" width="44" height="4" />
            <rect x="16" y="28" width="36" height="20" fill="none" stroke={c} strokeWidth="4" />
            {/* Wheels */}
            <rect x="20" y="52" width="8" height="8" />
            <rect x="40" y="52" width="8" height="8" />
            {/* Items */}
            <rect x="24" y="32" width="8" height="12" opacity="0.5" />
            <rect x="36" y="36" width="8" height="8" opacity="0.5" />
        </g>
    ),

    shop247: (c) => (
        <g fill={c}>
            {/* Building */}
            <rect x="8" y="24" width="48" height="32" fill="none" stroke={c} strokeWidth="4" />
            {/* Roof */}
            <rect x="12" y="16" width="40" height="8" />
            <rect x="20" y="8" width="24" height="8" />
            {/* Sign */}
            <rect x="8" y="24" width="48" height="8" />
            {/* Door */}
            <rect x="24" y="36" width="16" height="20" opacity="0.5" />
            <rect x="32" y="40" width="4" height="12" />
            {/* 24/7 */}
            <rect x="44" y="8" width="12" height="8" opacity="0.8" />
        </g>
    ),

    business: (c) => (
        <g fill={c}>
            {/* Briefcase */}
            <rect x="8" y="24" width="48" height="28" fill="none" stroke={c} strokeWidth="4" />
            {/* Handle */}
            <rect x="20" y="16" width="4" height="8" />
            <rect x="40" y="16" width="4" height="8" />
            <rect x="20" y="12" width="24" height="4" />
            {/* Clasp */}
            <rect x="28" y="36" width="8" height="8" />
            {/* Detail */}
            <rect x="8" y="40" width="20" height="4" opacity="0.3" />
            <rect x="36" y="40" width="20" height="4" opacity="0.3" />
        </g>
    ),

    browser: (c) => (
        <g fill={c}>
            {/* Globe circle */}
            <rect x="20" y="4" width="24" height="4" />
            <rect x="12" y="8" width="8" height="4" />
            <rect x="44" y="8" width="8" height="4" />
            <rect x="8" y="12" width="4" height="8" />
            <rect x="52" y="12" width="4" height="8" />
            <rect x="4" y="20" width="4" height="24" />
            <rect x="56" y="20" width="4" height="24" />
            <rect x="8" y="44" width="4" height="8" />
            <rect x="52" y="44" width="4" height="8" />
            <rect x="12" y="52" width="8" height="4" />
            <rect x="44" y="52" width="8" height="4" />
            <rect x="20" y="56" width="24" height="4" />
            {/* Meridian */}
            <rect x="28" y="8" width="8" height="48" opacity="0.5" />
            {/* Equator */}
            <rect x="8" y="28" width="48" height="8" opacity="0.5" />
        </g>
    ),

    hospital: (c) => (
        <g fill={c}>
            {/* Building */}
            <rect x="8" y="8" width="48" height="48" fill="none" stroke={c} strokeWidth="4" />
            {/* Cross vertical */}
            <rect x="28" y="16" width="8" height="32" />
            {/* Cross horizontal */}
            <rect x="16" y="28" width="32" height="8" />
        </g>
    ),

    police: (c) => (
        <g fill={c}>
            {/* Shield */}
            <rect x="16" y="4" width="32" height="4" />
            <rect x="12" y="8" width="40" height="36" />
            <rect x="16" y="44" width="32" height="4" />
            <rect x="20" y="48" width="24" height="4" />
            <rect x="24" y="52" width="16" height="4" />
            <rect x="28" y="56" width="8" height="4" />
            {/* Star */}
            <rect x="28" y="16" width="8" height="4" fill="white" opacity="0.8" />
            <rect x="24" y="20" width="16" height="4" fill="white" opacity="0.8" />
            <rect x="20" y="24" width="24" height="4" fill="white" opacity="0.8" />
            <rect x="24" y="28" width="16" height="4" fill="white" opacity="0.8" />
            <rect x="20" y="32" width="8" height="4" fill="white" opacity="0.8" />
            <rect x="36" y="32" width="8" height="4" fill="white" opacity="0.8" />
        </g>
    ),

    gang: (c) => (
        <g fill={c}>
            {/* Skull */}
            <rect x="16" y="8" width="32" height="8" />
            <rect x="12" y="16" width="40" height="20" />
            <rect x="16" y="36" width="32" height="8" />
            <rect x="20" y="44" width="24" height="4" />
            {/* Eyes */}
            <rect x="16" y="20" width="8" height="8" fill="white" opacity="0.8" />
            <rect x="40" y="20" width="8" height="8" fill="white" opacity="0.8" />
            {/* Nose */}
            <rect x="28" y="32" width="8" height="8" fill="white" opacity="0.8" />
            {/* Teeth */}
            <rect x="20" y="48" width="4" height="8" />
            <rect x="28" y="48" width="8" height="8" />
            <rect x="40" y="48" width="4" height="8" />
        </g>
    ),

    // === PIXEL EXTRA ICONS ===
    arcade: (c) => (
        <g fill={c}>
            <rect x="12" y="4" width="40" height="4" />
            <rect x="8" y="8" width="48" height="40" />
            <rect x="12" y="48" width="40" height="12" />
            <rect x="16" y="12" width="32" height="20" fill="none" stroke="white" strokeWidth="2" opacity="0.3" />
            <rect x="20" y="40" width="8" height="8" opacity="0.5" />
            <rect x="36" y="40" width="8" height="8" opacity="0.5" />
        </g>
    ),

    joystick: (c) => (
        <g fill={c}>
            <rect x="20" y="40" width="24" height="16" />
            <rect x="16" y="44" width="4" height="8" />
            <rect x="44" y="44" width="4" height="8" />
            <rect x="28" y="16" width="8" height="28" />
            <rect x="24" y="8" width="16" height="12" />
        </g>
    ),

    cartridge: (c) => (
        <g fill={c}>
            <rect x="12" y="8" width="40" height="44" />
            <rect x="8" y="16" width="4" height="32" />
            <rect x="52" y="16" width="4" height="32" />
            <rect x="20" y="16" width="24" height="16" fill="none" stroke="white" strokeWidth="2" opacity="0.3" />
            <rect x="24" y="40" width="16" height="8" opacity="0.5" />
        </g>
    ),

    highscore: (c) => (
        <g fill={c}>
            <rect x="8" y="8" width="48" height="8" />
            <rect x="16" y="20" width="32" height="8" opacity="0.8" />
            <rect x="16" y="32" width="24" height="8" opacity="0.6" />
            <rect x="16" y="44" width="16" height="8" opacity="0.4" />
            <rect x="44" y="20" width="4" height="4" />
        </g>
    ),

    boss: (c) => (
        <g fill={c}>
            <rect x="16" y="4" width="32" height="8" />
            <rect x="12" y="12" width="40" height="24" />
            <rect x="16" y="16" width="8" height="8" fill="white" opacity="0.8" />
            <rect x="40" y="16" width="8" height="8" fill="white" opacity="0.8" />
            <rect x="24" y="28" width="16" height="4" fill="white" opacity="0.8" />
            <rect x="8" y="36" width="12" height="20" />
            <rect x="44" y="36" width="12" height="20" />
            <rect x="20" y="40" width="24" height="16" />
        </g>
    ),

    powerup: (c) => (
        <g fill={c}>
            <rect x="24" y="4" width="16" height="4" />
            <rect x="20" y="8" width="24" height="4" />
            <rect x="16" y="12" width="32" height="24" />
            <rect x="20" y="36" width="24" height="4" />
            <rect x="24" y="40" width="16" height="4" />
            <rect x="24" y="20" width="4" height="12" fill="white" opacity="0.8" />
            <rect x="36" y="20" width="4" height="12" fill="white" opacity="0.8" />
            <rect x="28" y="48" width="8" height="8" />
        </g>
    ),

    coin: (c) => (
        <g fill={c}>
            <rect x="20" y="4" width="24" height="4" />
            <rect x="12" y="8" width="8" height="4" />
            <rect x="44" y="8" width="8" height="4" />
            <rect x="8" y="12" width="4" height="40" />
            <rect x="52" y="12" width="4" height="40" />
            <rect x="12" y="52" width="8" height="4" />
            <rect x="44" y="52" width="8" height="4" />
            <rect x="20" y="56" width="24" height="4" />
            <rect x="28" y="20" width="8" height="24" opacity="0.5" />
        </g>
    ),

    lives: (c) => (
        <g fill={c}>
            <rect x="12" y="16" width="8" height="8" />
            <rect x="44" y="16" width="8" height="8" />
            <rect x="8" y="24" width="16" height="8" />
            <rect x="40" y="24" width="16" height="8" />
            <rect x="4" y="32" width="56" height="8" />
            <rect x="8" y="40" width="48" height="4" />
            <rect x="16" y="44" width="32" height="4" />
            <rect x="24" y="48" width="16" height="4" />
            <rect x="28" y="52" width="8" height="4" />
        </g>
    ),
};

export default function PixelArt({ icon, colors, size, uid, showBackground = false }) {
    const iconId = icon.id;
    const IconPath = PIXEL_ICONS[iconId];

    if (!IconPath) {
        return (
            <svg viewBox="0 0 64 64" width={size} height={size}>
                <rect x="8" y="8" width="48" height="48" fill="none" stroke={colors.primary} strokeWidth="4" />
                <rect x="28" y="28" width="8" height="8" fill={colors.primary} />
            </svg>
        );
    }

    return (
        <svg viewBox="0 0 64 64" width={size} height={size} xmlns="http://www.w3.org/2000/svg" style={{ imageRendering: 'pixelated' }}>
            {showBackground && (
                <rect width="64" height="64" fill={colors.bg} />
            )}
            {IconPath(colors.primary)}
        </svg>
    );
}
