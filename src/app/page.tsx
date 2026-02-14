import { HeroSection } from './sections/hero-section';
import { FeaturesSection } from './sections/features-section';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      
      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary-500/10 to-accent-500/10 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-100">
            Hazır mısınız? 🚀
          </h2>
          <p className="text-xl text-slate-400 mb-8">
            Hemen ilk ikonunuzu oluşturun, tamamen ücretsiz!
          </p>
          <a 
            href="/generate"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl hover:from-primary-600 hover:to-accent-600 transition-all hover:scale-105 transform"
          >
            🎨 İkon Oluştur
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center text-slate-500">
          <p className="mb-2">FiveM Icon Generator v4.0 🎮</p>
          <p className="text-sm">Made with 💙 and AI</p>
        </div>
      </footer>
    </main>
  );
}
