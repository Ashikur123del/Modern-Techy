/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // সব ডোমেইন এলাউ করার জন্য
      },
    ],
  },
};

export default nextConfig; // .mjs ফাইলে এটাই সঠিক