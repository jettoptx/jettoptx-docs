/** Canonical house URLs — keep in lockstep with JTX / saas / agency footers. */
export const HOUSE = {
  JETT_OPTICS: "https://jettoptics.ai",
  AGENCY: "https://spacecowboys.agency",
  BUY_JTX: "https://jtx.astroknots.space/buy",
  SPACWBY: "https://jtx.astroknots.space/collection",
  JTX_CHAT: "https://jtx.chat",
  DOCS: "https://www.jettoptx.dev/docs",
  GITHUB: "https://github.com/jettoptx",
  AGENC_GITHUB: "https://github.com/tetsuo-ai/AgenC",
  X: "https://x.com/jettoptx",
  DISCORD: "https://discord.gg/bWtmWJM2X",
  EMAIL: "mailto:joe@jettoptics.ai",
  TERMS: "https://jettoptics.ai/terms",
  PRIVACY: "https://jettoptics.ai/privacy",
  SECURITY: "https://jettoptics.ai/security",
  GROUP_INVITE:
    "https://x.com/messages/compose?recipient_id=1980015353108344832&text=" +
    encodeURIComponent("I'd like to join the Space Cowboys group message"),
} as const

export const HOUSE_NAV = [
  { num: "01", label: "BUY $JTX", href: HOUSE.BUY_JTX },
  { num: "02", label: "AGENCY", href: HOUSE.AGENCY },
  { num: "03", label: "SPACWBY", href: HOUSE.SPACWBY },
  { num: "04", label: "APP", href: HOUSE.JTX_CHAT },
  { num: "05", label: "DOCS", href: HOUSE.DOCS },
  { num: "06", label: "JETT OPTICS", href: HOUSE.JETT_OPTICS },
] as const

export const HOUSE_BUILT_ON = [
  { name: "SOLANA", href: "https://solana.com" },
  { name: "JUPITER", href: "https://jup.ag" },
  { name: "JITO", href: "https://www.jito.network" },
  { name: "HELIUS", href: "https://www.helius.dev" },
] as const

export const HOUSE_SOCIALS = [
  { name: "X", href: HOUSE.X },
  { name: "DISCORD", href: HOUSE.DISCORD },
] as const

export const HOUSE_LEGAL = [
  { label: "TERMS", href: HOUSE.TERMS },
  { label: "PRIVACY", href: HOUSE.PRIVACY },
  { label: "VULNERABILITY REPORTING", href: HOUSE.SECURITY },
  { label: "DEVELOPER DOCS", href: HOUSE.DOCS },
] as const
