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
            className="flex items-center justify-center gap-2 w-full py-4 bg-white/5 hover:bg-white/10 text-white rounded-2xl transition-all duration-200 border border-white/5 hover:border-white/20 mt-4 shadow-xl mb-8 group"
        >
            {isExporting ? (
                <Loader2 size={18} className="animate-spin text-white/50" />
            ) : (
                <Download size={18} className="text-white/50 group-hover:text-white transition-colors" />
            )}
            <span className="font-semibold text-sm tracking-wide text-white/80 group-hover:text-white">
                {isExporting ? 'Zipping Assets...' : `Export ${activeTheme.name} Theme`}
            </span>
        </button>
    );
}
