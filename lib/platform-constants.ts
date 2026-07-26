/** Canonical on-chain and platform URLs — single source for docs. */

/** $JTX v2 "Jett Optics" — Token-2022, 9 dec (on-chain name updated 2026-07-26). */
export const JTX_MINT_V2 = "JTXGnx83s2QZ2MwYkRD1cBKrqQKSdG5oe8vSYW5Zjoe";
export const JTX_MINT_V1_LEGACY = "9XpJiKEYzq5yDo5pJzRfjSRMPL2yPfDQXgiN7uYtBhUj";
export const OPTX_MINT_DEVNET = "DSyauRAZwUd2BrTk3P8k2yUxxvcx5X4BBg3Gh3VbeRG3";
/** Legacy on-chain layout field mint (devnet). Not a user-facing CompuStable product. */
export const CSTB_MINT_DEVNET_LEGACY = "4waAAfTjqf5LNpj2TC5zoeiAgegVwKWoy4WiJgjdBkVL";
/** @deprecated Use CSTB_MINT_DEVNET_LEGACY — kept for import compatibility */
export const CSTB_MINT_DEVNET = CSTB_MINT_DEVNET_LEGACY;

export const DEPIN_PROGRAM_MAINNET = "85sqs4upQiPrvk1NMuyfHVQoW1EGdgk8m2cQb7uMxXTF";
/** Active PoA trust program on devnet (config PDA initialized). */
export const POA_TRUST_DEVNET = "79nQsecDspUWxvAMyJvK36EUty4yEoP5ssLvHZuNiugF";
/** Legacy DePIN program ID on devnet — superseded by POA_TRUST_DEVNET for live config. */
export const DEPIN_PROGRAM_DEVNET = "91SqqYLMi5zNsfMab6rnvipwJhDpN4FEMSLgu8F3bbGq";
export const JETT_VAULT_MAINNET = "JTX5uXTiZ1M3hJkjv5Cp5F8dr3Jc7nhJbQjCFmgEYA7";

export const PLATFORM_URLS = {
  docs: "https://jettoptx.dev",
  dojo: "https://jettoptx.chat",
  aaron: "https://aaron.jettoptics.ai",
  hedgehog: "https://hedgehog.jettoptics.ai",
  mcp: "https://mcp.jettoptics.ai",
  stdb: "https://stdb.jettoptics.ai",
  access: "https://astroknots.space",
  trade: "https://jtx.astroknots.space",
} as const;

export const GITHUB_REPOS = {
  docs: "https://github.com/jettoptx/jettoptx-docs",
  sdk: "https://github.com/jettoptx/jettoptx-sdk",
  aaronRouter: "https://github.com/jettoptx/jettoptx-aaron-router",
  aaronPublic: "https://github.com/jettoptx/jettoptx-aaron-public",
  poaDepin: "https://github.com/jettoptx/jettoptx-poa-depin",
  jettchatApp: "https://github.com/jettoptx/jettoptx-jettchat-app",
  mojo: "https://github.com/jettoptx/jettoptx-mojo",
  saas: "https://github.com/jettoptx/jettoptx-saas",
  jtxTrade: "https://github.com/jettoptx/jettoptx-jtx-trade",
  jettauth: "https://github.com/jettoptx/jettoptx-jettauth",
  hermesApi: "https://github.com/jettoptx/jettoptx-hermes-api",
} as const;
