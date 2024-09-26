/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
        domains: [
            'drive.google.com',
            'drive.usercontent.google.com',
            'lh3.googleusercontent.com',
        ],
    },
};
// req access
export default nextConfig;
