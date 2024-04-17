/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: [
      "vikingfest-api.onrender.com",
      "placeimg.com",
      "source.unsplash.com",
    ],
  },
};

module.exports = nextConfig;
