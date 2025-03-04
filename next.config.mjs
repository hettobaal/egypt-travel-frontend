/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "4000",
      },
      {
        protocol: "https",
        hostname: "aegyptenmalanders.de",
      },
    ]
    // unoptimized: true,
  },
};

// req access3
export default nextConfig;
