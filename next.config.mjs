/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "", // Optional, if you're using the standard HTTPS port (443)
        pathname: "/**", // Catch all paths under images.pexels.com
      },
    ],
  },
};

export default nextConfig;
