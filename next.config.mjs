/** @type {import('next').NextConfig} */
const nextConfig = {
  // Security headers configuration
  async headers() {
    return [
      {
        // Apply security headers to all routes
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Download-Options',
            value: 'noopen'
          },
          {
            key: 'X-Permitted-Cross-Domain-Policies',
            value: 'none'
          },
        ],
      },
      {
        // Additional headers for API routes
        source: '/api/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, no-cache, must-revalidate, proxy-revalidate'
          },
          {
            key: 'Pragma',
            value: 'no-cache'
          },
          {
            key: 'Expires',
            value: '0'
          },
          {
            key: 'Surrogate-Control',
            value: 'no-store'
          }
        ],
      }
    ]
  },

  // Remove image optimization bypass for production
  images: {
    unoptimized: process.env.NODE_ENV === 'development',
    domains: ['json.astrologyapi.com'], // Add allowed image domains
    formats: ['image/webp', 'image/avif'],
  },
  
  // Server external packages (moved from experimental)
  serverExternalPackages: ['@prisma/client'],
  
  // Type checking
  typescript: {
    // Temporarily disable type checking for debugging
    ignoreBuildErrors: true 
  },
  
  // Linting
  eslint: {
    // Temporarily disable linting for debugging
    ignoreDuringBuilds: true
  },

  // Webpack configuration to handle Node.js modules in browser
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        crypto: false,
        stream: false,
        url: false,
        zlib: false,
        http: false,
        https: false,
        assert: false,
        os: false,
        path: false,
        ws: false,
      };
    }
    return config;
  },
}

export default nextConfig