// @ts-check

/** @type {import('next').NextConfig} */
const config = {
  transpilePackages: [
    "@radix-ui/react-slot",
    "class-variance-authority",
    "clsx",
    "tailwind-merge",
    "lucide-react",
  ],
  reactStrictMode: true,
  typescript: {
    // During development you may want to set this to false
    ignoreBuildErrors: true,
  },
  eslint: {
    // During development you may want to set this to false
    ignoreDuringBuilds: true,
  },
  output: "standalone",
  swcMinify: true,
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-DNS-Prefetch-Control", value: "on" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
        ],
      },
    ];
  },
  async redirects() {
    return [];
  },
  async rewrites() {
    return [];
  },
};

export default config;
