/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        // port: '',
        // pathname: '/image/upload/**',
      },
    ],
    domains:["res.cloudinary.com","firebasestorage.googleapis.com","www.redditstatic.com",
     "www.forbes.com.au","images.pond5.com","pbs.twimg.com","external-preview.redd.it"]
  },
}

module.exports = nextConfig
