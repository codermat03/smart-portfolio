import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "angular.envytheme.com",
      "clipart-library.com",
      "img.freepik.com",
      "i.postimg.cc", // ✅ Add this line
    ],
  },
};

export default nextConfig;
