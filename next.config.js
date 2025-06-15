/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // valid Next.js option

  // next-pwa config:
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    // you can add more options here per next-pwa docs
  },

  // other Next.js config options if needed...
};

module.exports = nextConfig;
