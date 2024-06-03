/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "uploads.exoticca.com",
            },
            {
                protocol: "https",
                hostname: "static-us.exoticca.com",
            },
        ],
    },

};

export default nextConfig;
