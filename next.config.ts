import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        pathname: '/images/**',
        search: ''
      },
    ],
    remotePatterns: [
      {
        hostname: 'images.unsplash.com',
        pathname: '/**',
      }
    ]
  },
};

export default nextConfig;
