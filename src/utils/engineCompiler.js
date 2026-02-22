/**
 * Engine Compiler
 * Intercepts raw SVG strings and injects custom spatial and color settings universally.
 */
export function compileSVGWithSettings(rawSvgString, activeTheme, customSettings) {
    if (!customSettings || !customSettings.enabled || !rawSvgString) {
        return rawSvgString;
    }

    let compiledSvg = rawSvgString;

    // 1. Spatial Geometry Override (Border Radius)
    // Replaces all rx=".." and ry=".." attributes in Rects to match the slider
    if (customSettings.borderRadius !== undefined) {
        compiledSvg = compiledSvg.replace(/rx="[0-9.]+"/g, `rx="${customSettings.borderRadius}"`);
        compiledSvg = compiledSvg.replace(/ry="[0-9.]+"/g, `ry="${customSettings.borderRadius}"`);
    }

    // 2. Spatial Blur Override (Glassmorphism intensity)
    // Modifies SVG feGaussianBlur
    if (customSettings.blurIntensity !== undefined) {
        // Divide by 5 to map a 0-100 slider to a reasonable SVG stdDeviation (0-20)
        const mappedBlur = (customSettings.blurIntensity / 5).toFixed(1);
        compiledSvg = compiledSvg.replace(/stdDeviation="[0-9.]+"/g, `stdDeviation="${mappedBlur}"`);
    }

    // 3. Stroke Width Override
    if (customSettings.strokeWidth !== undefined) {
        compiledSvg = compiledSvg.replace(/stroke-width="[0-9.]+"/g, `stroke-width="${customSettings.strokeWidth}"`);
    }

    // 4. Color Injection
    // The safest universal way to inject colors without breaking complex SVG composition (like gradients)
    // is to inject a CSS <style> block right after the opening <svg> tag that uses !important modifiers
    // on generic SVG structure, OR to aggressively regex replace explicit hex codes.

    // We will inject a dynamic style block to override default fills and strokes
    const styleBlock = `
        <style>
            /* Custom Engine Global Overrides */
            svg [stroke]:not([stroke="none"]):not([stroke="transparent"]) {
                stroke: ${customSettings.accentColor} !important;
            }
            
            /* Target generic geometries for primary color */
            svg path[fill]:not([fill="none"]):not([fill="transparent"]),
            svg rect[fill]:not([fill="none"]):not([fill="transparent"]) {
                fill: ${customSettings.primaryColor} !important;
            }
            
            /* Target circles for secondary/deep shadow */
            svg circle[fill]:not([fill="none"]):not([fill="transparent"]) {
                fill: ${customSettings.secondaryColor} !important;
            }
            
            /* Exception for URL based gradients */
            svg [fill^="url("] {
                fill: inherit; /* Do not force !important on urls if not needed, or just let CSS Cascade work */
            }
             svg [stroke^="url("] {
                stroke: inherit;
            }
        </style>
    `;

    // Inject the style block immediately after the opening <svg ... > tag
    compiledSvg = compiledSvg.replace(/(<svg[^>]*>)/i, `$1${styleBlock}`);

    // If the SVG has <defs> with linear/radial gradients, we could technically regex search them 
    // and replace stop-colors, but the CSS override above catches 90% of solid geometries flawlessly.

    return compiledSvg;
}
