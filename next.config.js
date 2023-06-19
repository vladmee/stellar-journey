/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  NEXT_PUBLIC_HOSTNAME: process.env.NEXT_PUBLIC_HOSTNAME,
  sassOptions: {
    includePaths: [path.join(__dirname, './src/styles')],
  },
};

module.exports = nextConfig;
