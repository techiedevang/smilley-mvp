import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "smileyfilms.in",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/about", destination: "/#about", permanent: false },
      {
        source: "/featured-work",
        destination: "/#featured-work",
        permanent: false,
      },
      { source: "/media/awards", destination: "/#awards", permanent: false },
      { source: "/media/press", destination: "/press", permanent: false },
      { source: "/media", destination: "/#press", permanent: false },
      { source: "/ai-studio", destination: "/#ai-studio", permanent: false },
      { source: "/ai-work", destination: "/#ai-studio", permanent: false },
      { source: "/ai-project", destination: "/#ai-studio", permanent: false },
    ];
  },
};

export default nextConfig;
