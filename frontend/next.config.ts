import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // turbo: false, // <- you can remove or comment this
  },
  /* config options here */
  images: {
    domains: ['localhost'],
  },
};

export default nextConfig;
