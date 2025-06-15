import withPWA from 'next-pwa'
import runtimeCaching from 'next-pwa/cache.js'

const isDev = process.env.NODE_ENV === 'development'

const nextConfig = withPWA({
  dest: 'public',
  disable: isDev, // Disable service worker in dev
  register: true,
  skipWaiting: true,
  runtimeCaching,
})

export default nextConfig
