import type { NextConfig } from 'next';

// next.config.ts
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'cdn.jsdelivr.net' }],
  },
};

export default nextConfig;
