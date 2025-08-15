/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', 
  images: {
    unoptimized: true, 
  },
  basePath: '/Portfolio-v2', // Nama repo GitHub lo
  assetPrefix: '/Portfolio-v2/',
};

module.exports = nextConfig;
