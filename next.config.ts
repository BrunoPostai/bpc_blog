import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    useCache: true,
  },
  cacheLife: {
    seconds: {
      stale: 1,
      revalidate: 10,
      expire: 300,
    },
  },
};

export default nextConfig;
