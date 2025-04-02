/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // Remove experimental features for stability
  typescript: {
    // Enable type checking in production
    ignoreBuildErrors: false 
  },
  eslint: {
    // Enable linting in production
    ignoreDuringBuilds: false
  }
}

export default nextConfig