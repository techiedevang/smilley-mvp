import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production" ? { exclude: ["error"] } : false,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
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
      {
        source: "/ai-studio/purpose-of-wow",
        destination: "/ai-studio/the-purpose-of-wow",
        permanent: false,
      },
      { source: "/ai-work", destination: "/#ai-studio", permanent: false },
      { source: "/ai-project", destination: "/#ai-studio", permanent: false },
    ];
  },
};

export default nextConfig;
