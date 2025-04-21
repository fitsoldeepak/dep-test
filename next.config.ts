import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return {
      //  Runs before checking the file system for static files (e.g., public folder).
      beforeFiles: [
        {
          source: "/static/:path*",
          destination: process.env.CRA_BASE_PATH + "/static/:path*",
        },

        {
          source: "/manifest.json",
          destination: process.env.CRA_BASE_PATH + "/manifest.json",
        },

        {
          source: "/logo.png",
          destination: process.env.CRA_BASE_PATH + "/logo.png",
        },

        {
          source: "/logo512.png",
          destination: process.env.CRA_BASE_PATH + "/logo512.png",
        },

        {
          source: "/favicon.png",
          destination: process.env.CRA_BASE_PATH + "/favicon.png",
        },
      ],
      afterFiles: [],
      fallback: [
        {
          source: "/admin/:path*",
          destination: process.env.CRA_BASE_PATH + `/admin/:path*`,
          basePath: false,
        },
        {
          source: "/client/:path*",
          destination: process.env.CRA_BASE_PATH + `/client/:path*`,
          basePath: false,
        },
        {
          source: "/",
          destination: process.env.CRA_BASE_PATH + `/admin`,
          basePath: false,
        },
        {
          source: "/logout",
          destination: process.env.CRA_BASE_PATH + `/logout`,
          basePath: false,
        },
      ],
    };
  },
};

export default nextConfig;
