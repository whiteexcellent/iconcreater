/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    // Exclude onnxruntime-node completely
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        'onnxruntime-node': false,
        'onnxruntime-web': false, // We'll load from CDN
      };
      
      config.externals.push('onnxruntime-node');
      config.externals.push('@huggingface/transformers');
    }
    
    return config;
  },
  transpilePackages: [],
  experimental: {
    esmExternals: 'loose',
  },
};

module.exports = nextConfig;
