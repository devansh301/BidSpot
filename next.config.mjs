/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "bidspot-bucket.s3.us-east-1.amazonaws.com",
        protocol: "https",
        port: "",
      },
    ],
  },
};

export default nextConfig;
