import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "adm.netcontroll.com.br",
      },
      {
        protocol: "https",
        hostname: "xmenu.com.br",
      },
    ],
  },
};

export default nextConfig;
