/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {

        domains: [
            'tourbuckettest.s3.amazonaws.com',
            'drive.google.com',
            'drive.usercontent.google.com',
            'lh3.googleusercontent.com',
        ],
        unoptimized: true,
    },
};
// req access
export default nextConfig;
