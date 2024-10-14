/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {protocol:'https',
        hostname:'images.unsplash.com'
      },
      {protocol:'https',
        hostname:'*.tmdb.org'
      },
    ],
  },
};

export default nextConfig;
