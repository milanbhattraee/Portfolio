/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', 
  distDir: 'build',
  images: {
    domains: ['scholib.com'],
    unoptimized: true,
  },
};

module.exports = nextConfig;
