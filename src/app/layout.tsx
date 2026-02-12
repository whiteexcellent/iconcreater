import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://iconcreater.vercel.app'),
  title: 'FiveM Icon Generator - Browser AI',
  description: 'Generate beautiful SVG icons for FiveM using AI in your browser. No server costs, 100% free.',
  keywords: ['FiveM', 'icon generator', 'AI', 'browser AI', 'SVG', 'GTA5', 'game mods'],
  authors: [{ name: 'FiveM Icon Generator' }],
  icons: {
    icon: '/icon.svg',
  },
  openGraph: {
    title: 'FiveM Icon Generator',
    description: 'AI-powered icon generation in your browser',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="dark" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
