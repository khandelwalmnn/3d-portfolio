import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  webpack: (config) => {
    return config
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
      },
    ],
  },
  // Ensure proper static generation for Vercel
  output: 'standalone',
}

export default nextConfig
