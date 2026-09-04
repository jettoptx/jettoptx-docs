import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/docs/token/subscriptions", destination: "/docs/token/tiers", permanent: true },
      { source: "/docs/architecture", destination: "/docs/reference/architecture", permanent: true },
      { source: "/docs/architecture/:path*", destination: "/docs/reference/architecture", permanent: true },
      { source: "/docs/getting-started/architecture", destination: "/docs/reference/architecture", permanent: true },
      { source: "/docs/protocol/architecture", destination: "/docs/reference/architecture", permanent: true },
      { source: "/docs/jettchat/xchat-native", destination: "/docs/jettchat", permanent: true },
      { source: "/docs/jettchat/phantom-mode", destination: "/docs/jettchat", permanent: true },
      { source: "/docs/jettchat/messaging", destination: "/docs/jettchat", permanent: true },
      { source: "/docs/astrojoe/skills", destination: "/docs/astrojoe/hedgehog", permanent: true },
      { source: "/docs/astrojoe/memory", destination: "/docs/astrojoe/hedgehog", permanent: true },
      { source: "/docs/astrojoe/orchestration", destination: "/docs/astrojoe/hedgehog", permanent: true },
      { source: "/docs/astrojoe/hermes-features", destination: "/docs/astrojoe/hedgehog", permanent: true },
      { source: "/docs/astrojoe/api", destination: "/docs/astrojoe/hedgehog", permanent: true },
      { source: "/docs/rules", destination: "/docs/reference", permanent: true },
    ];
  },
};

export default withMDX(config);
