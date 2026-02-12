/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  // Environment variables validation
  env: {
    FAL_AI_API_KEY: process.env.FAL_AI_API_KEY,
  },
};

module.exports = nextConfig;
