
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Only add allowedDevOrigins if the environment variable exists
  ...(process.env.REPLIT_DOMAINS && {
    allowedDevOrigins: [process.env.REPLIT_DOMAINS.split(",")[0]]
  }),
  // Add these for better build compatibility
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'scontent-dfw5-1.xx.fbcdn.net',
      },
      {
        protocol: 'https',
        hostname: 'scontent-dfw5-3.xx.fbcdn.net',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
