import { fileURLToPath } from 'url';
import path from 'path';

const rootDir = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: rootDir,
  typedRoutes: true,
  experimental: {
    serverActions: { enabled: true }
  }
};

export default nextConfig;
