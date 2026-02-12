/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    // Handle WASM files for ONNX Runtime
    config.module.rules.push({
      test: /\.wasm$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/wasm/[name][ext]'
      }
    });

    // Handle worker files
    config.module.rules.push({
      test: /\.worker\.(ts|js)$/,
      loader: 'worker-loader',
      options: {
        filename: 'static/[hash].worker.js',
        publicPath: '/_next/',
      },
    });

    // Exclude ONNX from server bundle
    if (isServer) {
      config.externals.push('onnxruntime-web');
    }

    // Fix for onnxruntime-web
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
      crypto: false,
    };

    return config;
  },
  // Disable webpack cache for clean builds
  generateBuildId: async () => {
    return 'build-' + Date.now();
  },
};

module.exports = nextConfig;
