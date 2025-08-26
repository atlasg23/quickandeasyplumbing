
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
};

export default nextConfig;
