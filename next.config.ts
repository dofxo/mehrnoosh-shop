import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rbjblexkzjklgsmerogn.supabase.co",
        pathname: "/**",
        port: "",
        search: "",
      },
    ],
  },
};

export default nextConfig;
