/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  // Add any other PWA options here
});

const nextConfig = {
  reactStrictMode: true,
  // any other Next.js config...
};

module.exports = withPWA(nextConfig);
