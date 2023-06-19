/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  BASE_URL: process.env.BASE_URL,
  sassOptions: {
    includePaths: [path.join(__dirname, './src/styles')],
  },
};

module.exports = nextConfig;
