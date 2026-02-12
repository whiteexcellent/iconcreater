/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    // ONNX WebAssembly support
    config.experiments = {
      asyncWebAssembly: true,
      layers: true,
    };

    // Exclude ONNX from server bundle
    if (isServer) {
      config.externals.push('onnxruntime-web');
    }

    // Handle worker files
    config.module.rules.push({
      test: /\.worker\.(ts|js)$/,
      loader: 'worker-loader',
      options: {
        filename: 'static/[hash].worker.js',
        publicPath: '/_next/',
      },
    });

    return config;
  },
  // Headers for COOP/COEP (required for SharedArrayBuffer)
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin',
          },
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'require-corp',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
