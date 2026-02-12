# FiveM Icon Generator v3.0

🎨 **Browser-based AI Icon Generator for FiveM**

Generate beautiful SVG icons for your FiveM phone scripts using AI - directly in your browser! No server costs, 100% free, completely private.

## ✨ Features

- 🚀 **Browser AI** - Stable Diffusion runs in your browser using WebGPU
- 🎭 **5 Themes** - Kawaii, Drift, Minimal, Neon, Retro
- 🎨 **15 Icons** - Camera, Bank, Phone, Maps, and more
- 💯 **100% Free** - No API costs, no server fees
- 🔒 **Private** - Your images never leave your computer
- 📱 **Mobile Ready** - Works on phones and tablets
- 🎮 **FiveM Integration** - Ready-to-use Lua scripts

## 🚀 Quick Start

### Online (Recommended)
Visit: [https://fivem-icon-generator.vercel.app](https://fivem-icon-generator.vercel.app)

### Local Development

```bash
# 1. Clone repository
git clone https://github.com/yourusername/fivem-icon-browser-ai.git
cd fivem-icon-browser-ai

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev

# 4. Open browser
http://localhost:3000
```

### Build for Production

```bash
npm run build
```

Static files will be in `dist/` folder.

## 🎮 FiveM Installation

1. Copy `fivem-integration/` folder to your server's `resources/`
2. Rename to `fivem-icon-generator`
3. Add to `server.cfg`:
   ```cfg
   ensure fivem-icon-generator
   ```

## 🛠️ System Requirements

### Browser Support
- ✅ Chrome/Edge 113+ (WebGPU)
- ✅ Firefox (with flags)
- ❌ Safari (WebGPU coming soon)

### Hardware
- **GPU**: Any GPU with WebGPU support
- **RAM**: 4GB+ recommended
- **Storage**: 2GB free space for AI model

### First Load
- Downloads ~1.5GB AI model (one time)
- Subsequent loads are instant
- Model cached in browser storage

## 📝 How to Use

1. **Select Icon** - Choose from 15 available icons
2. **Choose Theme** - Pick your favorite style
3. **Add Custom Text** (Optional) - Add extra keywords
4. **Click Generate** - AI creates your icon in 5-10 seconds
5. **Download SVG** - Use in FiveM or anywhere!

## 🎨 Themes

| Theme | Style | Best For |
|-------|-------|----------|
| **Kawaii** | Pastel, cute, 3D | Anime servers |
| **Drift** | Neon, JDM, racing | Racing servers |
| **Minimal** | Flat, geometric | Professional RP |
| **Neon** | Cyberpunk, glow | Nightlife RP |
| **Retro** | 80s, vaporwave | Vintage aesthetic |

## 🔧 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + shadcn/ui
- **State**: Zustand
- **AI**: ONNX Runtime Web + Stable Diffusion
- **SVG**: Potrace.js
- **Deploy**: Vercel (Static)

## 📁 Project Structure

```
├── src/
│   ├── app/              # Next.js pages
│   ├── components/       # UI components
│   ├── stores/          # Zustand stores
│   ├── lib/             # Utilities
│   └── data/            # Icons & themes
├── fivem-integration/   # FiveM resource files
└── public/             # Static assets
```

## ⚠️ Important Notes

### First Time Use
- The AI model downloads on first use (~1-2 minutes)
- Progress is shown during download
- Model is cached for future visits

### WebGPU Support
- Requires modern browser (Chrome/Edge 113+)
- Check [caniuse.com/webgpu](https://caniuse.com/webgpu) for support
- May need to enable flags in some browsers

### Performance
- Generation takes 5-10 seconds on mid-range GPU
- Slower on integrated graphics
- Uses your GPU for processing

## 🐛 Troubleshooting

### "WebGPU not supported"
- Update Chrome/Edge to version 113+
- Enable WebGPU flags in browser settings

### "Model download stuck"
- Check internet connection
- Clear browser cache and retry
- May take longer on slow connections

### "Generation failed"
- Check GPU drivers are up to date
- Try refreshing the page
- Check browser console for errors

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

MIT License - feel free to use for personal or commercial projects!

## 🙏 Credits

- Stable Diffusion by Stability AI
- ONNX Runtime by Microsoft
- Next.js by Vercel
- FiveM by Cfx

---

Made with ❤️ for the FiveM community
