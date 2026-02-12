/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove 'output: export' to enable API routes
  // This runs on Vercel's serverless functions
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
