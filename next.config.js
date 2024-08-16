const createNextIntlPlugin = require("next-intl/plugin");
/** @type {import('next').NextConfig} */
const withNextIntl = createNextIntlPlugin();
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
      { protocol: "https", hostname: "github.com" },
      { protocol: "https", hostname: "aceternity.com" },
      { protocol: "https", hostname: "authjs.dev" },
      { protocol: "https", hostname: "shadcn.dev" },
      { protocol: "https", hostname: "cdn.dribbble.com" },
    ],
  },
};

module.exports = withNextIntl(nextConfig);
