/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {

        domains: [
            'drive.google.com',
            'drive.usercontent.google.com',
            'lh3.googleusercontent.com',
        ],
        unoptimized: false,
    },
};
// req access
export default nextConfig;
