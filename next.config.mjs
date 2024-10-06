/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gordonrussell-marketing.poeta-internal.com",
      },
    ],
  },
};

export default nextConfig;
