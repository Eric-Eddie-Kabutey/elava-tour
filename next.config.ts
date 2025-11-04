import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '', // Leave empty for default port (443 for https)
        pathname: '/**', // This allows any path under the hostname
      },
    ],
  },
};

export default nextConfig;
