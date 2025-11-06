import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // Allow quality 100 (used in components) and default 75
    qualities: [100, 75],
  },
};

export default nextConfig;
