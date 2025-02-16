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
  output: "export",
  distDir: ".next",
  images: {
    unoptimized: true,
  },
  swcMinify: true,
  poweredByHeader: false,
};

export default config;
