/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: { unoptimized: true },
  async redirects() {
    return [
      {
        source: '/pflegegeld-2025',
        destination: '/pflegegeld',
        permanent: true,
      },
      {
        source: '/pflegegeld-2025/',
        destination: '/pflegegeld/',
        permanent: true,
      },
      {
        source: '/kostenrechner',
        destination: 'https://kostenrechner.primundus.de',
        permanent: false,
      },
      {
        source: '/kostenrechner/',
        destination: 'https://kostenrechner.primundus.de',
        permanent: false,
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Strict-Transport-Security', value: 'max-age=31536000' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'geolocation=(), camera=(), microphone=()' },
        ],
      },
    ]
  },
};

module.exports = nextConfig;
