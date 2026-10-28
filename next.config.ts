import type { NextConfig } from "next";

// Live demos are separate Vercel projects, each built with a matching
// basePath, served here under /play/<name> so visitors stay on one domain.
const demos: Record<string, string> = {
  extractly: "https://extractly-vert.vercel.app",
  docuchat: "https://docuchat-phi.vercel.app",
};

const nextConfig: NextConfig = {
  async rewrites() {
    return Object.entries(demos).flatMap(([name, origin]) => [
      { source: `/play/${name}`, destination: `${origin}/play/${name}` },
      { source: `/play/${name}/:path*`, destination: `${origin}/play/${name}/:path*` },
    ]);
  },
};

export default nextConfig;
