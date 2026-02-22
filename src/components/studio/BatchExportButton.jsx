import React, { useState } from 'react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { Download, Loader2 } from 'lucide-react';
import { FIVEM_APPS } from '../../data/icons';
import { useTheme } from '../../context/ThemeContext';
import { compileSVGWithSettings } from '../../utils/engineCompiler';

import { KawaiiEngine } from '../icons/KawaiiEngine';
import { KawaiiDecoraEngine } from '../icons/KawaiiDecoraEngine';
import { IOSEngine } from '../icons/iOSEngine';
import { CyberEngine } from '../icons/CyberEngine';
import { NeoBrutalEngine } from '../icons/NeoBrutalEngine';
import { HoloGhostEngine } from '../icons/HoloGhostEngine';
import { LiquidChromeEngine } from '../icons/LiquidChromeEngine';
import { CarbonTacticalEngine } from '../icons/CarbonTacticalEngine';
import { ViceCityEngine } from '../icons/ViceCityEngine';
import { VisionDayEngine } from '../icons/VisionDayEngine';
import { EcommerceMinimalEngine } from '../icons/EcommerceMinimalEngine';

export function BatchExportButton() {
    const [isExporting, setIsExporting] = useState(false);
    const { activeTheme, customSettings } = useTheme();

    const getRawSvgStr = (appId) => {
        switch (activeTheme.id) {
            case 'kawaii': return KawaiiEngine.getRawSVG(appId);
            case 'kawaii-decora': return KawaiiDecoraEngine.getRawSVG(appId);
            case 'ios': return IOSEngine.getRawSVG(appId);
            case 'cyber': return CyberEngine.getRawSVG(appId);
            case 'neo-brutal': return NeoBrutalEngine.getRawSVG(appId);
            case 'holo-ghost': return HoloGhostEngine.getRawSVG(appId);
            case 'liquid-chrome': return LiquidChromeEngine.getRawSVG(appId);
            case 'carbon-tactical': return CarbonTacticalEngine.getRawSVG(appId);
            case 'vice-city': return ViceCityEngine.getRawSVG(appId);
            case 'vision-day': return VisionDayEngine.getRawSVG(appId);
            case 'ecommerce-minimal': return EcommerceMinimalEngine.getRawSVG(appId);
            default: return '';
        }
    }

    const handleExport = async () => {
        setIsExporting(true);
        try {
            const zip = new JSZip();
            const folderName = `${activeTheme.name.replace(/\s+/g, '_')}_Icons`;
            const folder = zip.folder(folderName);

            FIVEM_APPS.forEach(app => {
                const rawSvg = getRawSvgStr(app.id);
                // Compile the SVG with current custom settings so the user's color mods are burned into the download
                const finalSvg = compileSVGWithSettings(rawSvg, activeTheme, customSettings);
                folder.file(`${app.id}.svg`, finalSvg);
            });

            const content = await zip.generateAsync({ type: 'blob' });
            saveAs(content, `FiveM_Studio_${folderName}.zip`);
        } catch (error) {
            console.error("Export failed", error);
        } finally {
            setIsExporting(false);
        }
    };

    return (
        <button
            onClick={handleExport}
            disabled={isExporting}
            className="flex flex-col items-center justify-center gap-1.5 w-full py-4 px-6 bg-transparent hover:bg-white/[0.02] text-white rounded-[24px] transition-all duration-500 border border-transparent hover:border-white/[0.05] mt-2 group relative overflow-hidden"
        >
            <div className="flex items-center gap-2 mb-0.5 relative z-10">
                {isExporting ? (
                    <Loader2 size={16} className="animate-spin text-white/50" />
                ) : (
                    <Download size={16} className="text-white/40 group-hover:text-white/80 transition-colors duration-500" />
                )}
                <span className="font-semibold text-[13px] tracking-wide text-white/60 group-hover:text-white/90 transition-colors duration-500">
                    {isExporting ? 'Zipping Assets...' : 'Export Theme'}
                </span>
            </div>

            {!isExporting && (
                <span className="text-[10px] text-white/30 font-semibold tracking-wider uppercase relative z-10">
                    {activeTheme.name}
                </span>
            )}

            {/* Subtle glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </button>
    );
}
