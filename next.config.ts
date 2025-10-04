import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { hostname: "*.public.blob.vercel-storage.com" },
      { hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
