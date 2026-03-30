import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: "/team", destination: "/story", permanent: true }];
  },
};

export default nextConfig;
