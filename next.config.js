/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ["vikingfestserver.fly.dev", "placeimg.com", "source.unsplash.com"],
  },
};

module.exports = nextConfig;
