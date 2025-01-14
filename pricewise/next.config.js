/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      serverActions: {}, // Ensure it's an object
      serverComponentsExternalPackages: ['mongoose'],
    },
    images: {
      domains: ['m.media-amazon.com'], // Add any domains you want to allow for images
    },
  };

  module.exports = nextConfig;

