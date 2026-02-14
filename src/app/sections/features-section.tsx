'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Palette, Download, Sparkles } from 'lucide-react';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';

const features = [
  {
    icon: Zap,
    title: 'Saniyeler İçinde',
    description: 'AI sayesinde birkaç saniyede profesyonel ikonlar oluşturun.',
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-400/10'
  },
  {
    icon: Palette,
    title: '5 Farklı Tema',
    description: 'Minimal, Neon, Retro, Kawaii ve Drift temaları arasından seçim yapın.',
    color: 'text-primary-400',
    bgColor: 'bg-primary-400/10'
  },
  {
    icon: Download,
    title: 'Kolay İndirme',
    description: 'Oluşturduğunuz ikonları PNG formatında indirin.',
    color: 'text-success-500',
    bgColor: 'bg-success-500/10'
  },
  {
    icon: Sparkles,
    title: 'Tamamen Ücretsiz',
    description: 'Hiçbir ücret ödemeden sınırsız ikon oluşturun.',
    color: 'text-accent-400',
    bgColor: 'bg-accent-400/10'
  }
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-100">
            Neden <span className="text-primary-400">Bizi</span> Seçmelisiniz?
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            En gelişmiş AI teknolojisiyle en iyi ikonları oluşturun 🎯
          </p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={staggerItem}>
              <Card className="bg-slate-800/50 border-slate-700 hover:border-primary-500/50 transition-colors group h-full">
                <CardHeader>
                  <div className={`w-14 h-14 rounded-lg ${feature.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <feature.icon className={`w-7 h-7 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl text-slate-100">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
