import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/docs/authentication/jett-auth", destination: "/docs/authentication/optx-auth", permanent: true },
      { source: "/docs/token/tiers", destination: "/docs/token", permanent: true },
      { source: "/docs/token/subscriptions", destination: "/docs/token", permanent: true },
      { source: "/docs/architecture", destination: "/docs/reference/architecture", permanent: true },
      { source: "/docs/architecture/:path*", destination: "/docs/reference/architecture", permanent: true },
      { source: "/docs/getting-started/architecture", destination: "/docs/reference/architecture", permanent: true },
      { source: "/docs/protocol/architecture", destination: "/docs/reference/architecture", permanent: true },
      { source: "/docs/jettchat/xchat-native", destination: "/docs/jettchat", permanent: true },
      { source: "/docs/jettchat/phantom-mode", destination: "/docs/jettchat", permanent: true },
      { source: "/docs/jettchat/messaging", destination: "/docs/jettchat", permanent: true },
      { source: "/docs/astrojoe/hermes-features", destination: "/docs/astrojoe/hedgehog", permanent: true },
      { source: "/docs/astrojoe/agent-features", destination: "/docs/astrojoe/api", permanent: true },
    ];
  },
};

export default withMDX(config);
