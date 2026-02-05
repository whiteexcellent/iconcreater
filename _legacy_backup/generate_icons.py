#!/usr/bin/env python3
"""
Generate 165 SVG icon files for pastel themes v1-v5
33 icons × 5 themes = 165 files
"""

import os

# Icon names
icons = [
    "phone", "messages", "contacts", "email", "camera", "gallery", "video", "music", "spotify", "maps", "gps",
    "calendar", "clock", "calculator", "flashlight", "weather", "settings", "notifications", "games", "casino",
    "bank", "taxi", "home", "food", "electrician", "mechanic", "market", "shop247", "business", "browser",
    "hospital", "police", "gang"
]

# Theme colors and styles
themes = {
    "v1": {
        "name": "Flat",
        "colors": ["#FFB6C1", "#E6E6FA", "#98FB98", "#FFDAB9"],
        "bg": "#FFFFFF",
        "style": "flat"
    },
    "v2": {
        "name": "Jelly",
        "colors": ["#FFB6C1", "#DDA0DD", "#98FB98", "#FFDAB9", "#87CEEB"],
        "bg": "rgba(255,255,255,0.7)",
        "style": "jelly"
    },
    "v3": {
        "name": "UwU",
        "colors": ["#FFD1DC", "#FFB6C1", "#FFE4E1"],
        "bg": "#FFF0F5",
        "style": "uwu"
    },
    "v4": {
        "name": "Soft",
        "colors": ["#B0E0E6", "#FFB6C1", "#E0FFFF", "#F0F8FF"],
        "bg": "linear-gradient(135deg, #B0E0E6 0%, #E0FFFF 100%)",
        "style": "soft"
    },
    "v5": {
        "name": "Police",
        "colors": ["#87CEEB", "#B0C4DE", "#D3D3D3", "#4682B4"],
        "bg": "#F0F8FF",
        "style": "police"
    }
}

# SVG templates for each icon type
def get_icon_paths(icon_name):
    """Get SVG paths for each icon type"""
    paths = {
        "phone": """<path d="M24 20c-2 4-2 10 2 16 4 6 10 10 16 10l-2 6c-8-2-16-8-20-16-4-8-4-16 0-22l4 6z" fill="{color}"/>
<path d="M28 18l4 6c3-2 6-2 8 0l6-4c-4-6-12-6-18-2z" fill="{color}"/>""",
        
        "messages": """<rect x="12" y="16" width="40" height="28" rx="8" fill="{color}"/>
<path d="M16 24h32M16 32h24" stroke="white" stroke-width="2" stroke-linecap="round"/>""",
        
        "contacts": """<circle cx="32" cy="24" r="8" fill="{color}"/>
<path d="M20 48c0-8 6-12 12-12s12 4 12 12" fill="{color}"/>""",
        
        "email": """<rect x="12" y="20" width="40" height="28" rx="4" fill="{color}"/>
<path d="M12 24l20 12 20-12" stroke="white" stroke-width="2" fill="none"/>""",
        
        "camera": """<rect x="16" y="22" width="32" height="24" rx="4" fill="{color}"/>
<circle cx="32" cy="34" r="6" fill="white"/>
<circle cx="40" cy="26" r="2" fill="white"/>""",
        
        "gallery": """<rect x="14" y="18" width="20" height="16" rx="2" fill="{color1}"/>
<rect x="30" y="30" width="20" height="16" rx="2" fill="{color2}"/>
<circle cx="22" cy="26" r="3" fill="white"/>
<path d="M32 38l4-4 6 6" stroke="white" stroke-width="2" fill="none"/>""",
        
        "video": """<rect x="14" y="20" width="28" height="20" rx="4" fill="{color}"/>
<polygon points="46,26 54,20 54,44 46,38" fill="{color}"/>""",
        
        "music": """<circle cx="24" cy="44" r="6" fill="{color}"/>
<circle cx="48" cy="40" r="6" fill="{color}"/>
<path d="M24 44V20l24-6v24" stroke="{color}" stroke-width="4" fill="none"/>""",
        
        "spotify": """<circle cx="32" cy="32" r="20" fill="{color}"/>
<path d="M22 28c6-2 14-2 20 2M24 36c5-2 12-2 16 2" stroke="white" stroke-width="3" stroke-linecap="round" fill="none"/>""",
        
        "maps": """<path d="M32 12l12 8v24l-12-8-12 8V20l12-8z" fill="{color}" stroke="white" stroke-width="2"/>
<circle cx="32" cy="28" r="4" fill="white"/>""",
        
        "gps": """<circle cx="32" cy="32" r="16" fill="none" stroke="{color}" stroke-width="2"/>
<circle cx="32" cy="32" r="4" fill="{color}"/>
<path d="M32 12v6M32 46v6M12 32h6M46 32h6" stroke="{color}" stroke-width="2"/>""",
        
        "calendar": """<rect x="16" y="20" width="32" height="28" rx="4" fill="{color}"/>
<path d="M16 28h32M24 16v8M40 16v8" stroke="white" stroke-width="2"/>
<rect x="22" y="34" width="4" height="4" fill="white" rx="1"/>
<rect x="30" y="34" width="4" height="4" fill="white" rx="1"/>
<rect x="38" y="34" width="4" height="4" fill="white" rx="1"/>""",
        
        "clock": """<circle cx="32" cy="32" r="18" fill="none" stroke="{color}" stroke-width="3"/>
<path d="M32 20v14l8 8" stroke="{color}" stroke-width="3" stroke-linecap="round" fill="none"/>""",
        
        "calculator": """<rect x="18" y="14" width="28" height="38" rx="4" fill="{color}"/>
<rect x="22" y="18" width="20" height="8" rx="2" fill="white"/>
<circle cx="26" cy="34" r="2" fill="white"/>
<circle cx="32" cy="34" r="2" fill="white"/>
<circle cx="38" cy="34" r="2" fill="white"/>
<circle cx="26" cy="42" r="2" fill="white"/>
<circle cx="32" cy="42" r="2" fill="white"/>
<circle cx="38" cy="42" r="2" fill="white"/>""",
        
        "flashlight": """<path d="M28 16h8v8l-4 20-4-20z" fill="{color}"/>
<rect x="26" y="12" width="12" height="4" rx="2" fill="{color}"/>
<path d="M24 44l-4 4M32 44v6M40 44l4 4" stroke="{color}" stroke-width="2" stroke-linecap="round"/>""",
        
        "weather": """<circle cx="36" cy="28" r="8" fill="{color}"/>
<path d="M20 40c0-4 4-8 8-8h12c4 0 8 4 8 8s-4 8-8 8H28c-4 0-8-4-8-8z" fill="{color2}"/>""",
        
        "settings": """<circle cx="32" cy="32" r="6" fill="{color}"/>
<path d="M32 16v6M32 42v6M16 32h6M42 32h6M21 21l4 4M39 39l4 4M21 43l4-4M39 21l4-4" stroke="{color}" stroke-width="3" stroke-linecap="round"/>""",
        
        "notifications": """<path d="M24 20c0-4 4-8 8-8s8 4 8 8v8c0 4 4 6 4 6H20s4-2 4-6v-8z" fill="{color}"/>
<path d="M28 44c0 2 2 4 4 4s4-2 4-4" stroke="{color}" stroke-width="2" fill="none"/>""",
        
        "games": """<rect x="16" y="20" width="32" height="24" rx="4" fill="{color}"/>
<circle cx="26" cy="32" r="3" fill="white"/>
<path d="M36 28h4M38 26v4" stroke="white" stroke-width="2" stroke-linecap="round"/>""",
        
        "casino": """<rect x="18" y="18" width="28" height="28" rx="4" fill="{color}" stroke="white" stroke-width="2"/>
<circle cx="26" cy="26" r="3" fill="white"/>
<circle cx="38" cy="26" r="3" fill="white"/>
<circle cx="26" cy="38" r="3" fill="white"/>
<circle cx="38" cy="38" r="3" fill="white"/>""",
        
        "bank": """<path d="M32 12L16 24h32L32 12z" fill="{color}"/>
<rect x="20" y="26" width="6" height="14" fill="{color}"/>
<rect x="29" y="26" width="6" height="14" fill="{color}"/>
<rect x="38" y="26" width="6" height="14" fill="{color}"/>
<rect x="16" y="42" width="32" height="4" rx="2" fill="{color}"/>""",
        
        "taxi": """<rect x="16" y="28" width="32" height="14" rx="3" fill="{color}"/>
<rect x="22" y="22" width="20" height="8" rx="2" fill="{color}"/>
<rect x="24" y="18" width="6" height="4" fill="{color}"/>
<circle cx="22" cy="42" r="4" fill="{color2}"/>
<circle cx="42" cy="42" r="4" fill="{color2}"/>""",
        
        "home": """<path d="M32 14L16 28v20h12V36h8v12h12V28L32 14z" fill="{color}"/>""",
        
        "food": """<path d="M24 20c0-4 2-6 4-6s4 2 4 6v20h-8V20z" fill="{color}"/>
<path d="M36 20c0-4 2-6 4-6s4 2 4 6v20h-8V20z" fill="{color2}"/>""",
        
        "electrician": """<path d="M28 16l-8 16h8l-4 16 16-20h-8l8-12H28z" fill="{color}" stroke="white" stroke-width="1"/>""",
        
        "mechanic": """<circle cx="32" cy="32" r="14" fill="none" stroke="{color}" stroke-width="3"/>
<circle cx="32" cy="32" r="6" fill="{color}"/>
<path d="M32 12v6M32 46v6M12 32h6M46 32h6" stroke="{color}" stroke-width="2"/>""",
        
        "market": """<path d="M16 20h8l2 18H18L16 20z" fill="{color}"/>
<path d="M28 20h8l2 18H30L28 20z" fill="{color2}"/>
<path d="M40 20h8l-2 18h-8L40 20z" fill="{color}"/>
<rect x="20" y="42" width="24" height="4" rx="2" fill="{color2}"/>""",
        
        "shop247": """<circle cx="32" cy="32" r="18" fill="none" stroke="{color}" stroke-width="3"/>
<text x="32" y="38" text-anchor="middle" font-size="14" fill="{color}" font-family="Arial" font-weight="bold">24/7</text>""",
        
        "business": """<rect x="18" y="20" width="28" height="28" rx="2" fill="{color}"/>
<rect x="24" y="36" width="6" height="12" fill="white"/>
<rect x="34" y="28" width="6" height="20" fill="white"/>
<path d="M24 32l6-6 6 6" stroke="white" stroke-width="2" fill="none"/>""",
        
        "browser": """<rect x="14" y="18" width="36" height="30" rx="4" fill="{color}"/>
<rect x="14" y="18" width="36" height="6" rx="2" fill="white"/>
<circle cx="20" cy="21" r="1.5" fill="{color}"/>
<circle cx="25" cy="21" r="1.5" fill="{color}"/>
<circle cx="30" cy="21" r="1.5" fill="{color}"/>""",
        
        "hospital": """<rect x="20" y="12" width="24" height="44" rx="4" fill="{color}"/>
<rect x="28" y="24" width="8" height="20" fill="white"/>
<rect x="24" y="30" width="16" height="8" fill="white"/>""",
        
        "police": """<path d="M32 12l14 8v14c0 10-6 16-14 20-8-4-14-10-14-20V20l14-8z" fill="{color}" stroke="white" stroke-width="2"/>
<circle cx="32" cy="30" r="6" fill="white"/>
<text x="32" y="33" text-anchor="middle" font-size="8" fill="{color}" font-family="Arial" font-weight="bold">★</text>""",
        
        "gang": """<path d="M32 12L20 24v18c0 4 4 8 12 12 8-4 12-8 12-12V24L32 12z" fill="{color}" stroke="white" stroke-width="2"/>
<path d="M28 32l4 4 8-8" stroke="white" stroke-width="3" fill="none" stroke-linecap="round"/>"""
    }
    return paths.get(icon_name, paths["phone"])

def create_v1_svg(icon_name, color):
    """Create Flat theme SVG"""
    paths = get_icon_paths(icon_name)
    color2 = "#98FB98" if color == "#FFB6C1" else "#FFB6C1"
    
    if "gallery" in icon_name or "weather" in icon_name or "market" in icon_name or "food" in icon_name or "taxi" in icon_name:
        content = paths.format(color=color, color1=color, color2=color2)
    else:
        content = paths.format(color=color, color2=color2)
    
    return f'''<?xml version="1.0" encoding="UTF-8"?>
<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <rect x="4" y="4" width="56" height="56" rx="16" fill="white"/>
  {content}
</svg>'''

def create_v2_svg(icon_name, color):
    """Create Jelly theme SVG with transparency"""
    paths = get_icon_paths(icon_name)
    color2 = "#87CEEB" if color == "#FFB6C1" else "#FFB6C1"
    
    if "gallery" in icon_name or "weather" in icon_name or "market" in icon_name or "food" in icon_name or "taxi" in icon_name:
        content = paths.format(color=color, color1=color, color2=color2)
    else:
        content = paths.format(color=color, color2=color2)
    
    return f'''<?xml version="1.0" encoding="UTF-8"?>
<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="2" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>
  <rect x="4" y="4" width="56" height="56" rx="16" fill="rgba(255,255,255,0.6)" stroke="{color}" stroke-width="1.5"/>
  <ellipse cx="20" cy="16" rx="8" ry="4" fill="rgba(255,255,255,0.4)"/>
  {content}
</svg>'''

def create_v3_svg(icon_name, color):
    """Create UwU kawaii theme SVG"""
    paths = get_icon_paths(icon_name)
    color2 = "#FFB6C1" if color == "#FFD1DC" else "#FFD1DC"
    
    if "gallery" in icon_name or "weather" in icon_name or "market" in icon_name or "food" in icon_name or "taxi" in icon_name:
        content = paths.format(color=color, color1=color, color2=color2)
    else:
        content = paths.format(color=color, color2=color2)
    
    return f'''<?xml version="1.0" encoding="UTF-8"?>
<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#FFF0F5"/>
      <stop offset="100%" style="stop-color:#FFE4E1"/>
    </linearGradient>
  </defs>
  <rect x="4" y="4" width="56" height="56" rx="20" fill="url(#bgGrad)"/>
  <text x="50" y="16" font-size="10" fill="#FF69B4">♥</text>
  <text x="10" y="56" font-size="8" fill="#FF69B4">✦</text>
  {content}
</svg>'''

def create_v4_svg(icon_name, color):
    """Create Soft cloud-like theme SVG"""
    paths = get_icon_paths(icon_name)
    color2 = "#FFB6C1" if color == "#B0E0E6" else "#B0E0E6"
    
    if "gallery" in icon_name or "weather" in icon_name or "market" in icon_name or "food" in icon_name or "taxi" in icon_name:
        content = paths.format(color=color, color1=color, color2=color2)
    else:
        content = paths.format(color=color, color2=color2)
    
    return f'''<?xml version="1.0" encoding="UTF-8"?>
<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="softGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#B0E0E6"/>
      <stop offset="50%" style="stop-color:#E0FFFF"/>
      <stop offset="100%" style="stop-color:#FFB6C1"/>
    </linearGradient>
  </defs>
  <rect x="4" y="4" width="56" height="56" rx="24" fill="url(#softGrad)"/>
  {content}
</svg>'''

def create_v5_svg(icon_name, color):
    """Create Police professional theme SVG"""
    paths = get_icon_paths(icon_name)
    color2 = "#B0C4DE" if color == "#87CEEB" else "#87CEEB"
    
    if "gallery" in icon_name or "weather" in icon_name or "market" in icon_name or "food" in icon_name or "taxi" in icon_name:
        content = paths.format(color=color, color1=color, color2=color2)
    else:
        content = paths.format(color=color, color2=color2)
    
    return f'''<?xml version="1.0" encoding="UTF-8"?>
<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <rect x="4" y="4" width="56" height="56" rx="12" fill="#F0F8FF" stroke="{color}" stroke-width="2"/>
  <rect x="4" y="4" width="56" height="8" rx="4" fill="{color}"/>
  {content}
</svg>'''

def generate_icons():
    """Generate all 165 icon files"""
    base_path = "icons"
    total = 0
    
    for theme_version, theme in themes.items():
        theme_path = os.path.join(base_path, theme_version)
        os.makedirs(theme_path, exist_ok=True)
        
        for i, icon_name in enumerate(icons):
            color = theme["colors"][i % len(theme["colors"])]
            
            if theme_version == "v1":
                svg_content = create_v1_svg(icon_name, color)
            elif theme_version == "v2":
                svg_content = create_v2_svg(icon_name, color)
            elif theme_version == "v3":
                svg_content = create_v3_svg(icon_name, color)
            elif theme_version == "v4":
                svg_content = create_v4_svg(icon_name, color)
            else:  # v5
                svg_content = create_v5_svg(icon_name, color)
            
            file_path = os.path.join(theme_path, f"{icon_name}.svg")
            with open(file_path, "w", encoding="utf-8") as f:
                f.write(svg_content)
            total += 1
            
    print(f"Generated {total} icon files successfully!")
    return total

if __name__ == "__main__":
    generate_icons()
