import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable standalone output for deployment
  output: 'standalone',

  // Optimize images
  images: {
    formats: ['image/webp', 'image/avif'],
  },

  // Performance optimizations
  experimental: {
    scrollRestoration: true,
  },

  // SEO and crawling optimizations
  trailingSlash: false,

  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },

  // Redirects for SEO
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index',
        destination: '/',
        permanent: true,
      },
    ];
  },

  // Compression
  compress: true,

  // Bundle analysis in production
  webpack: (config, { dev }) => {
    if (!dev) {
      // Optimize bundle in production
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      };
    }
    return config;
  },
};

export default nextConfig;
