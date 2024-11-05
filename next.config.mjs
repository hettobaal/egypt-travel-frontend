/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
         remotePatterns: [
            {
              protocol: "https",
              hostname: "**",
            },
        ]
        // unoptimized: true,
    },
};
// req access3
export default nextConfig;
