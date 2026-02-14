/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  output: 'export',
  distDir: 'dist',
  experimental: {
    // Disable build trace to fix the micromatch error
    turbotrace: {
      logLevel: 'error'
    }
  },
  // Skip static optimization for problematic pages
  skipTrailingSlashRedirect: true,
  skipMiddlewareUrlNormalize: true,
};

module.exports = nextConfig;
