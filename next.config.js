/** @type {import('next').NextConfig} */
const path = require('path');

const isProd = process.env.NODE_ENV === 'production';
const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, './src/styles')],
  },
  assetPrefix: isProd ? repo : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
