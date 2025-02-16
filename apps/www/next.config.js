/** @type {import('next').NextConfig} */

// Suppress the punycode warning
process.removeAllListeners("warning");

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
