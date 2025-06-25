/** @type {import('next').NextConfig} */
const nextConfig = {
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
    // Enable type checking in production
    ignoreBuildErrors: false 
  },
  
  // Linting
  eslint: {
    // Enable linting in production
    ignoreDuringBuilds: false
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