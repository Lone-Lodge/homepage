import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/homepage",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Pin turbopack root to this folder so it doesn't pick up a parent
  // pnpm-workspace.yaml at E:\lone-lodge\ and warn about it.
  turbopack: {
    root: path.resolve(process.cwd()),
  },
};

export default nextConfig;
