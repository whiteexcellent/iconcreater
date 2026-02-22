import React from 'react';

const MOCK_THEMES = [
    { name: "Liquid Chrome", color: "#E2E8F0" },
    { name: "Vision OS Day", color: "#FFFFFF" },
    { name: "Carbon Tactical", color: "#F97316" },
    { name: "Vice City", color: "#F472B6" },
    { name: "iOS Glass Minimal", color: "#60A5FA" },
    { name: "Neo Brutalism", color: "#FDE047" },
    { name: "Kawaii Decora", color: "#FDA4AF" },
    { name: "Holographic Ghost", color: "#2DD4BF" },
];

export function ThemeMarquee() {
    return (
        <section className="py-20 relative overflow-hidden bg-white/[0.02]">
            {/* Vignette fade edges */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#020202] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#020202] to-transparent z-10 pointer-events-none" />

            <div className="flex w-fit animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused] group">
                {/* Double the array for seamless infinite looping */}
                {[...MOCK_THEMES, ...MOCK_THEMES, ...MOCK_THEMES].map((theme, idx) => (
                    <div
                        key={idx}
                        className="flex-none mx-4 px-8 py-6 rounded-3xl bg-white/5 border border-white/10 flex items-center gap-4 transition-colors hover:bg-white/10 cursor-pointer"
                    >
                        <div
                            className="w-4 h-4 rounded-full shadow-lg"
                            style={{ backgroundColor: theme.color, boxShadow: `0 0 15px ${theme.color}80` }}
                        />
                        <span className="text-2xl font-bold tracking-tight text-white/80">{theme.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
