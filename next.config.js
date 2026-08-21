/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', 
  images: {
    domains: ['scholib.com'],
    unoptimized: true,
  },
};

module.exports = nextConfig;
