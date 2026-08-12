/** Single source of truth for Map of Augments (MOA) doc graph nodes and edges. */

export type AgtKey = "COG" | "EMO" | "ENV";

export interface MoaNode {
  id: string;
  label: string;
  group: string;
  agt: AgtKey;
  radius: number;
  href: string;
  description: string;
  subLabels: string[];
  emo: number;
  env: number;
  cog: number;
  /** Mobile nav label override (defaults to label) */
  navLabel?: string;
}

export interface MoaEdge {
  source: string;
  target: string;
}

export const GROUP_LABELS: Record<string, string> = {
  root: "OPTX Docs",
  "getting-started": "Getting Started",
  sdk: "SDK Reference",
  jettchat: "JettChat",
  authentication: "Authentication",
  token: "Token",
  protocol: "AARON Protocol",
  astrojoe: "JOE — Jett Optics Engine",
  architecture: "Architecture Flows",
  infrastructure: "Infrastructure",
  "on-chain-bridge": "On-Chain Bridge",
  reference: "Reference",
  dojo: "DOJO Platform",
};

export const GROUP_ORDER: Record<string, number> = {
  "getting-started": 0,
  sdk: 1,
  authentication: 2,
  protocol: 3,
  "on-chain-bridge": 4,
  jettchat: 5,
  token: 6,
  dojo: 7,
  astrojoe: 8,
  architecture: 9,
  infrastructure: 10,
  reference: 11,
  root: -1,
};

export const MOA_NODES: MoaNode[] = [
  { id: "index", label: "OPTX", group: "root", agt: "COG", radius: 34, href: "/docs", description: "Documentation home — developer quickstart and system overview", subLabels: ["Augment Space", "Knowledge Graph", "All Sections"], emo: 10, env: 10, cog: 80 },

  { id: "what-is-optx", label: "What is OPTX?", group: "getting-started", agt: "COG", radius: 19, href: "/docs/getting-started/what-is-optx", description: "Core concepts and naming hierarchy for the OPTX ecosystem", subLabels: ["Naming Hierarchy", "JETT Auth", "AARON", "$JTX Token"], emo: 25, env: 20, cog: 55 },
  { id: "platform-access", label: "Platform Access", group: "getting-started", agt: "ENV", radius: 14, href: "/docs/getting-started/access", description: "Acquire JTX and enter DOJO — waitlist, staking gate, and onboarding path", subLabels: ["Buy JTX", "astroknots.space", "DOJO Entry", "Tier Gate"], emo: 30, env: 55, cog: 15 },
  { id: "architecture-overview", label: "Architecture", group: "getting-started", agt: "COG", radius: 17, href: "/docs/getting-started/architecture", description: "End-to-end system architecture from edge to chain", subLabels: ["Jetson Edge", "Dual-Mode Chat", "Solana Native"], emo: 15, env: 30, cog: 55 },
  { id: "on-chain", label: "On-Chain", group: "getting-started", agt: "ENV", radius: 15, href: "/docs/getting-started/on-chain-addresses", description: "Solana program addresses, token mints, and wallet config", subLabels: ["$JTX v2", "DePIN Mainnet", "jett_vault", "Helius RPC"], emo: 10, env: 80, cog: 10 },

  { id: "sdk", label: "SDK Overview", group: "sdk", agt: "COG", radius: 18, href: "/docs/sdk", description: "Canonical jettoptx-sdk monorepo — auth, chat, and augment registry packages", subLabels: ["@jettoptx/auth", "@jettoptx/chat", "Augment Registry", "Install Guide"], emo: 15, env: 20, cog: 65 },
  { id: "sdk-auth", label: "@jettoptx/auth", group: "sdk", agt: "EMO", radius: 15, href: "/docs/sdk/auth", description: "X OAuth PKCE + Solana signMessage + Ed25519 JWT for custom integrations", subLabels: ["Next.js Hooks", "API Routes", "JWT Claims", "xChat Native"], emo: 55, env: 15, cog: 30 },
  { id: "sdk-chat", label: "@jettoptx/chat", group: "sdk", agt: "EMO", radius: 14, href: "/docs/sdk/chat", description: "JettChat SDK — transports, channels, and E2E messaging integration", subLabels: ["WebSocket", "Matrix Bridge", "Activity Stream", "Integration"], emo: 50, env: 25, cog: 25 },
  { id: "sdk-augment-registry", label: "Augment Registry", group: "sdk", agt: "COG", radius: 14, href: "/docs/sdk/augment-registry", description: "JETT Augments 00–09 — runtime agent lobes, V/S/W hotkeys, and MOA topology", subLabels: ["Digits 00–09", "AGT Lobes", "HEAT Hotkeys", "MCP Status"], emo: 20, env: 25, cog: 55 },

  { id: "jettchat", label: "JettChat", group: "jettchat", agt: "EMO", radius: 21, href: "/docs/jettchat", description: "Encrypted AI chat — xChat Native and Phantom Mode", subLabels: ["Two Modes", "JTX Gated", "AGT Biometric", "E2EE"], emo: 55, env: 25, cog: 20 },
  { id: "xchat-native", label: "xChat Native", group: "jettchat", agt: "EMO", radius: 16, href: "/docs/jettchat/xchat-native", description: "Privy + JTX gate for DOJO; @jettoptx/auth for custom xChat integrations", subLabels: ["Privy Auth", "Ed25519 JWT", "Solana Wallet", "JTX Gate"], emo: 60, env: 20, cog: 20 },
  { id: "phantom-mode", label: "Phantom Mode", group: "jettchat", agt: "ENV", radius: 17, href: "/docs/jettchat/phantom-mode", description: "Secure-Legion stack: triple Tor .onion, post-quantum hybrid, hardware-backed keys", subLabels: ["Triple Tor", "Post-Quantum", "StrongBox/TEE", "Duress PIN"], emo: 30, env: 55, cog: 15 },
  { id: "jettchat-messaging", label: "Messaging", group: "jettchat", agt: "EMO", radius: 14, href: "/docs/jettchat/messaging", description: "E2EE messaging shared by both modes — gaze cursor, offline-first, groups", subLabels: ["Gaze Cursor", "Offline-First", "Groups", "Self-Destruct"], emo: 60, env: 25, cog: 15 },

  { id: "jett-auth", label: "JETT Auth", group: "authentication", agt: "EMO", radius: 19, href: "/docs/authentication/jett-auth", description: "Unified auth surface — Privy for DOJO, @jettoptx/auth for integrators", subLabels: ["JETT Hub Flow", "≥1 JTX Gate", "AGT Triad", "Both Modes"], emo: 55, env: 20, cog: 25 },
  { id: "gaze", label: "Gaze Auth", group: "authentication", agt: "EMO", radius: 22, href: "/docs/authentication/gaze", description: "AGT biometric authentication via iris tracking and gaze vectors", subLabels: ["MediaPipe", "COG/EMO/ENV", "Iris Tracking", "Gaze PIN"], emo: 55, env: 5, cog: 40 },
  { id: "wallet", label: "Agent Wallet", group: "authentication", agt: "EMO", radius: 17, href: "/docs/authentication/wallet", description: "ERC-8004 soulbound agent wallet (roadmap)", subLabels: ["ERC-8004 (Roadmap)", "x402 Protocol", "Soulbound NFT", "Secure Enclave"], emo: 50, env: 40, cog: 10 },

  { id: "token", label: "$JTX Token", group: "token", agt: "ENV", radius: 18, href: "/docs/token", description: "JettChat access + governance token on Solana mainnet (v2 canonical)", subLabels: ["Solana Mainnet", "Token-2022", "DePIN Earn", "Governance"], emo: 25, env: 50, cog: 25 },
  { id: "token-tiers", label: "Access Tiers", group: "token", agt: "COG", radius: 14, href: "/docs/token/tiers", description: "Tier codes and JTX balance thresholds for integrators", subLabels: ["basic/mojo/dojo", "Balance Check", "verify-session", "astroknots.space"], emo: 20, env: 30, cog: 50 },
  { id: "token-subscriptions", label: "Subscriptions", group: "token", agt: "COG", radius: 11, href: "/docs/token/subscriptions", description: "Pointer — live pricing at astroknots.space/stake", subLabels: ["astroknots.space", "Not in sidebar", "Tier codes only"], emo: 15, env: 15, cog: 70 },
  { id: "token-trading", label: "Trading & Mint", group: "token", agt: "ENV", radius: 14, href: "/docs/token/trading", description: "JTX swap, Space Cowboys NFT mint, and on-chain program constants", subLabels: ["Jupiter Swap", "Meteora DLMM", "v1→v2 Migration", "jtx-trade"], emo: 30, env: 55, cog: 15 },

  { id: "aaron-protocol", label: "AARON", group: "protocol", agt: "COG", radius: 22, href: "/docs/protocol", description: "Asynchronous Audit RAG Optical Node — gaze attestation router and Solana bridge", subLabels: ["Session Flow", "Gaze Verify", "SpacetimeDB", "Entropy Scoring"], emo: 20, env: 15, cog: 65 },
  { id: "biometric-proof", label: "Bio Proof", group: "protocol", agt: "COG", radius: 15, href: "/docs/protocol/biometric-proof", description: "Opaque gaze proof hashes for on-chain AGT attestation", subLabels: ["Proof Hash", "On-Chain PDA", "Privacy First", "AGT Regions"], emo: 30, env: 15, cog: 55 },
  { id: "how-it-works", label: "How It Works", group: "protocol", agt: "COG", radius: 14, href: "/docs/protocol/how-it-works", description: "Step-by-step AARON verification flow from gaze to chain", subLabels: ["4-6 Gaze Points", "500ms Hold", "Entropy Check"], emo: 35, env: 10, cog: 55 },
  { id: "client-integration", label: "Client SDK", group: "protocol", agt: "COG", radius: 13, href: "/docs/protocol/client-integration", description: "Integration guide for AARON session/verify REST API", subLabels: ["TypeScript SDK", "REST API", "Python Client"], emo: 25, env: 30, cog: 45 },
  { id: "aaron-arch", label: "AARON Arch", group: "protocol", agt: "COG", radius: 14, href: "/docs/protocol/architecture", description: "Internal architecture of the AARON router and validator pipeline", subLabels: ["FastAPI Router", "Edge Node", "Validator Pipeline"], emo: 15, env: 25, cog: 60 },

  { id: "astrojoe", label: "JOE", group: "astrojoe", agt: "EMO", radius: 24, href: "/docs/astrojoe", description: "Jett Optics Engine — primary intelligent agent in the OPTX agentic OS", subLabels: ["Hermes Agent", "Grok Gateway", "SpacetimeDB", "Task Orchestration"], emo: 45, env: 20, cog: 35 },
  { id: "skills", label: "Skills", group: "astrojoe", agt: "COG", radius: 15, href: "/docs/astrojoe/skills", description: "SKILL.md-based tool system — procedural knowledge for real tool execution", subLabels: ["SKILL.md Format", "Tool Registry", "Execution Engine"], emo: 20, env: 10, cog: 70 },
  { id: "memory", label: "Memory", group: "astrojoe", agt: "COG", radius: 15, href: "/docs/astrojoe/memory", description: "SpacetimeDB-backed persistent memory with importance scoring", subLabels: ["Categories", "Importance Score", "Full-Text Search", "Subscriptions"], emo: 10, env: 25, cog: 65 },
  { id: "orchestration", label: "Orchestration", group: "astrojoe", agt: "COG", radius: 15, href: "/docs/astrojoe/orchestration", description: "Task lifecycle management with DAG workflows and swarm decomposition", subLabels: ["DAG Workflows", "Swarm Agents", "State Machine", "Gaze-Gated"], emo: 15, env: 15, cog: 70 },
  { id: "hedgehog-doc", label: "HEDGEHOG", group: "astrojoe", agt: "ENV", radius: 17, href: "/docs/astrojoe/hedgehog", description: "Multi-API AI gateway — Grok primary, MCP context bridge on edge", subLabels: ["Grok Gateway", "MCP Server", "12 Tools", "Edge Proxy"], emo: 20, env: 65, cog: 15 },
  { id: "hermes-api", label: "Hermes API", group: "astrojoe", agt: "COG", radius: 14, href: "/docs/astrojoe/api", description: "jettoptx-hermes-api v0.4 bridge — SSE, tasks, Tempo billing to Hermes v0.17 gateway", subLabels: ["v0.4 Bridge", "SSE Streaming", "SpacetimeDB", "Upstream :8642"], emo: 10, env: 15, cog: 75 },
  { id: "hermes-features", label: "Hermes Integration", group: "astrojoe", agt: "COG", radius: 14, href: "/docs/astrojoe/hermes-features", description: "Hermes Agent v0.17 integration — native gateway, MCP, bridge split", subLabels: ["v0.17.0", "/v1/runs", "Skills Hub", "MCP"], emo: 10, env: 25, cog: 65 },

  { id: "arch-flows", label: "Flows", group: "architecture", agt: "COG", radius: 17, href: "/docs/architecture", description: "Architecture flow diagrams across the full OPTX stack", subLabels: ["Mermaid Diagrams", "Data Flows", "System Maps"], emo: 15, env: 20, cog: 65 },
  { id: "task-lifecycle", label: "Task Life", group: "architecture", agt: "COG", radius: 12, href: "/docs/architecture/task-lifecycle", description: "Task creation through completion with state transitions", subLabels: ["Create → Claim → Execute", "Completion Proofs"], emo: 15, env: 15, cog: 70 },
  { id: "swarm-dag", label: "Swarm DAG", group: "architecture", agt: "COG", radius: 12, href: "/docs/architecture/swarm-dag", description: "Multi-agent DAG decomposition for parallel task execution", subLabels: ["Parallel/Sequential", "Agent Pools", "Dependency Graph"], emo: 30, env: 15, cog: 55 },
  { id: "gaze-policy", label: "Gaze Policy", group: "architecture", agt: "EMO", radius: 12, href: "/docs/architecture/gaze-policy", description: "Gaze-gated authorization policies for sensitive operations", subLabels: ["Policy Rules", "Threshold Config", "AGT Requirements"], emo: 55, env: 15, cog: 30 },
  { id: "bridge-flow", label: "Bridge Flow", group: "architecture", agt: "ENV", radius: 12, href: "/docs/architecture/bridge-flow", description: "Solana-native attestation flow from AARON router to on-chain PDAs", subLabels: ["Gaze → Proof", "AARON Router", "Solana PDA", "DePIN"], emo: 35, env: 50, cog: 15 },
  { id: "agent-identity", label: "Identity", group: "architecture", agt: "EMO", radius: 13, href: "/docs/architecture/agent-identity", description: "On-chain agent identity with Metaplex NFT and ERC-8004", subLabels: ["Metaplex NFT", "DID Resolution", "Agent NFT"], emo: 65, env: 25, cog: 10 },
  { id: "task-states", label: "States", group: "architecture", agt: "COG", radius: 11, href: "/docs/architecture/task-states", description: "Finite state machine for task lifecycle management", subLabels: ["Pending → Active", "Failed/Retry", "Completed"], emo: 10, env: 10, cog: 80 },
  { id: "topology", label: "Topology", group: "architecture", agt: "ENV", radius: 13, href: "/docs/architecture/topology", description: "Network topology across Jetson edge, Tailscale mesh, and cloud", subLabels: ["NVIDIA Jetson", "Tailscale Mesh", "Vercel Edge"], emo: 15, env: 75, cog: 10 },

  { id: "edge-mcp", label: "Edge MCP", group: "infrastructure", agt: "ENV", radius: 17, href: "/docs/infrastructure/edge", description: "HEDGEHOG MCP running on Jetson validator nodes at the edge", subLabels: ["Jetson K3s", "Local Inference", "Gaze Processing"], emo: 20, env: 70, cog: 10 },
  { id: "edge-gateway", label: "Edge Gateway", group: "infrastructure", agt: "ENV", radius: 16, href: "/docs/infrastructure/edge-gateway", description: "Cloudflare edge gateway — AARON routes + HEDGEHOG MCP at mcp.jettoptics.ai", subLabels: ["aaron-public", "Token Gating", "MCP Tools", "Wrangler Deploy"], emo: 20, env: 65, cog: 15 },
  { id: "depin", label: "DePIN", group: "infrastructure", agt: "ENV", radius: 15, href: "/docs/infrastructure/depin", description: "Proof-of-Attention attestation and DePIN validator staking on Solana mainnet", subLabels: ["PoA Trust", "Validator Staking", "$OPTX Rewards"], emo: 15, env: 65, cog: 20 },

  { id: "bridge-hub", label: "Bridge Hub", group: "on-chain-bridge", agt: "EMO", radius: 19, href: "/docs/on-chain-bridge", description: "Solana-native on-chain programs — PoA DePIN and jett_vault", subLabels: ["AARON Router", "Solana-Only", "Mainnet Live"], emo: 50, env: 40, cog: 10 },
  { id: "solana-native", label: "Solana", group: "on-chain-bridge", agt: "EMO", radius: 15, href: "/docs/on-chain-bridge/solana-native", description: "Home chain — $JTX v2, $OPTX devnet, DePIN programs, Metaplex identity", subLabels: ["Token-2022", "$JTX v2", "Metaplex Core"], emo: 45, env: 45, cog: 10 },
  { id: "devnet-validation", label: "Devnet", group: "on-chain-bridge", agt: "ENV", radius: 12, href: "/docs/on-chain-bridge/devnet-validation", description: "Devnet program IDs and validation checklist for integrators", subLabels: ["Devnet Programs", "Testing", "Feature Flags"], emo: 15, env: 70, cog: 15 },

  { id: "api-ref", label: "API Ref", group: "reference", agt: "COG", radius: 16, href: "/docs/reference/api", description: "Complete API reference — WebSocket RPC and REST endpoints", subLabels: ["WebSocket RPC", "REST Endpoints", "Auth Headers"], emo: 5, env: 5, cog: 90 },
  { id: "doc-index", label: "Index", group: "reference", agt: "COG", radius: 15, href: "/docs/reference", description: "Complete documentation index — every page classified by AGT tensor", subLabels: ["55+ Pages", "AGT Classification", "MOA Graph"], emo: 10, env: 10, cog: 80 },
  { id: "ecosystem", label: "Ecosystem", group: "reference", agt: "ENV", radius: 14, href: "/docs/reference/ecosystem", description: "All 16 jettoptx repos mapped to docs sections", subLabels: ["16 Repos", "Public vs Internal", "SDK Canonical"], emo: 25, env: 60, cog: 15 },
  { id: "changelog", label: "Changelog", group: "reference", agt: "COG", radius: 12, href: "/docs/reference/changelog", description: "Version history and release notes for the OPTX platform", subLabels: ["Version History", "Breaking Changes", "Migration Notes"], emo: 10, env: 10, cog: 80 },
  { id: "docs-rules", label: "DOCS Rules", group: "reference", agt: "COG", radius: 12, href: "/docs/rules", description: "How to edit OPTX docs — MOA registration, AGT classification, changelog", subLabels: ["Agent Rules", "MOA Registry", "MDX Structure"], emo: 10, env: 10, cog: 80 },

  { id: "dojo", label: "DOJO", group: "dojo", agt: "ENV", radius: 19, href: "/docs/dojo", description: "Developer Operator Jett Optics — IDE, augment marketplace, jettoptx.chat", subLabels: ["Augment Marketplace", "Skill Composition", "JettChat Product"], emo: 25, env: 45, cog: 30 },
  { id: "mojo", label: "MOJO", group: "dojo", agt: "EMO", radius: 15, href: "/docs/dojo/mojo", description: "iOS app — first-gaze AGT attestation issuer, AARON handshake, Privy wallet", subLabels: ["ARKit Gaze", "Handoff Spec", "AGT Attestation", "Universal Links"], emo: 50, env: 35, cog: 15 },
  { id: "moa", label: "MOA", group: "dojo", agt: "COG", radius: 14, href: "/docs/dojo/moa", description: "Map of Augments — docs knowledge graph vs runtime augment registry", subLabels: ["Force Graph", "AGT Classification", "Augments 00–09"], emo: 30, env: 15, cog: 55 },
];

export const MOA_EDGES: MoaEdge[] = [
  { source: "index", target: "what-is-optx" }, { source: "index", target: "sdk" },
  { source: "index", target: "astrojoe" }, { source: "index", target: "arch-flows" },
  { source: "index", target: "gaze" }, { source: "index", target: "aaron-protocol" },
  { source: "index", target: "edge-mcp" }, { source: "index", target: "api-ref" },
  { source: "index", target: "dojo" },

  { source: "what-is-optx", target: "architecture-overview" },
  { source: "what-is-optx", target: "on-chain" },
  { source: "what-is-optx", target: "platform-access" },
  { source: "platform-access", target: "token" },
  { source: "platform-access", target: "jettchat" },
  { source: "architecture-overview", target: "on-chain" },
  { source: "architecture-overview", target: "depin" },

  { source: "sdk", target: "sdk-auth" }, { source: "sdk", target: "sdk-chat" },
  { source: "sdk", target: "sdk-augment-registry" },
  { source: "sdk-auth", target: "jett-auth" }, { source: "sdk-auth", target: "xchat-native" },
  { source: "sdk-chat", target: "jettchat" }, { source: "sdk-augment-registry", target: "moa" },
  { source: "sdk-augment-registry", target: "dojo" },

  { source: "gaze", target: "aaron-protocol" }, { source: "gaze", target: "biometric-proof" },
  { source: "wallet", target: "on-chain" }, { source: "wallet", target: "agent-identity" },
  { source: "aaron-protocol", target: "biometric-proof" },
  { source: "aaron-protocol", target: "how-it-works" },
  { source: "aaron-protocol", target: "client-integration" },
  { source: "aaron-protocol", target: "aaron-arch" },
  { source: "biometric-proof", target: "gaze" },
  { source: "astrojoe", target: "skills" }, { source: "astrojoe", target: "memory" },
  { source: "astrojoe", target: "orchestration" }, { source: "astrojoe", target: "hedgehog-doc" },
  { source: "astrojoe", target: "hermes-api" }, { source: "astrojoe", target: "agent-identity" },
  { source: "skills", target: "dojo" }, { source: "memory", target: "edge-mcp" },
  { source: "orchestration", target: "task-lifecycle" },
  { source: "orchestration", target: "swarm-dag" },
  { source: "hedgehog-doc", target: "edge-mcp" }, { source: "hermes-api", target: "api-ref" },
  { source: "arch-flows", target: "task-lifecycle" },
  { source: "arch-flows", target: "swarm-dag" },
  { source: "arch-flows", target: "gaze-policy" },
  { source: "arch-flows", target: "bridge-flow" },
  { source: "arch-flows", target: "agent-identity" },
  { source: "arch-flows", target: "task-states" },
  { source: "arch-flows", target: "topology" },
  { source: "task-lifecycle", target: "task-states" },
  { source: "gaze-policy", target: "gaze" }, { source: "gaze-policy", target: "aaron-protocol" },
  { source: "agent-identity", target: "on-chain" },
  { source: "edge-mcp", target: "topology" },
  { source: "edge-gateway", target: "edge-mcp" },
  { source: "edge-gateway", target: "aaron-protocol" },
  { source: "edge-gateway", target: "sdk-augment-registry" },
  { source: "depin", target: "on-chain" },
  { source: "dojo", target: "skills" }, { source: "dojo", target: "moa" },
  { source: "dojo", target: "mojo" }, { source: "mojo", target: "astrojoe" },
  { source: "mojo", target: "hedgehog-doc" },
  { source: "bridge-hub", target: "solana-native" },
  { source: "bridge-hub", target: "aaron-protocol" },
  { source: "bridge-hub", target: "on-chain" }, { source: "solana-native", target: "on-chain" },
  { source: "solana-native", target: "depin" },
  { source: "devnet-validation", target: "solana-native" },
  { source: "devnet-validation", target: "on-chain" },
  { source: "doc-index", target: "api-ref" }, { source: "doc-index", target: "moa" },
  { source: "mojo", target: "depin" },
  { source: "mojo", target: "aaron-arch" },
  { source: "depin", target: "gaze" },
  { source: "depin", target: "agent-identity" },
  { source: "astrojoe", target: "bridge-hub" },
  { source: "what-is-optx", target: "gaze" },
  { source: "aaron-protocol", target: "on-chain" },
  { source: "aaron-arch", target: "on-chain" },
  { source: "biometric-proof", target: "edge-mcp" },
  { source: "how-it-works", target: "gaze" },
  { source: "how-it-works", target: "on-chain" },
  { source: "client-integration", target: "mojo" },
  { source: "client-integration", target: "topology" },
  { source: "aaron-arch", target: "topology" },
  { source: "skills", target: "topology" },
  { source: "orchestration", target: "topology" },
  { source: "hermes-api", target: "on-chain" },
  { source: "task-lifecycle", target: "agent-identity" },
  { source: "task-lifecycle", target: "on-chain" },
  { source: "swarm-dag", target: "astrojoe" },
  { source: "swarm-dag", target: "hedgehog-doc" },
  { source: "gaze-policy", target: "topology" },
  { source: "bridge-flow", target: "on-chain" },
  { source: "bridge-flow", target: "aaron-protocol" },
  { source: "task-states", target: "gaze" },
  { source: "task-states", target: "on-chain" },
  { source: "topology", target: "bridge-hub" },
  { source: "edge-mcp", target: "depin" },
  { source: "depin", target: "architecture-overview" },
  { source: "solana-native", target: "aaron-protocol" },
  { source: "api-ref", target: "wallet" },
  { source: "api-ref", target: "on-chain" },
  { source: "doc-index", target: "wallet" },
  { source: "doc-index", target: "topology" },
  { source: "dojo", target: "edge-mcp" },
  { source: "moa", target: "mojo" },
  { source: "moa", target: "on-chain" },
  { source: "architecture-overview", target: "hedgehog-doc" },
  { source: "wallet", target: "aaron-protocol" },
  { source: "gaze", target: "on-chain" },
  { source: "hedgehog-doc", target: "orchestration" },
  { source: "architecture-overview", target: "biometric-proof" },
  { source: "changelog", target: "doc-index" },
  { source: "changelog", target: "api-ref" },
  { source: "docs-rules", target: "moa" },
  { source: "docs-rules", target: "doc-index" },

  { source: "jettchat", target: "jett-auth" },
  { source: "jettchat", target: "gaze" },
  { source: "jettchat", target: "mojo" },
  { source: "jettchat", target: "what-is-optx" },
  { source: "jettchat", target: "token" },
  { source: "jettchat", target: "jettchat-messaging" },
  { source: "jettchat", target: "xchat-native" },
  { source: "jettchat", target: "phantom-mode" },
  { source: "xchat-native", target: "jett-auth" },
  { source: "xchat-native", target: "sdk-auth" },
  { source: "xchat-native", target: "on-chain" },
  { source: "xchat-native", target: "wallet" },
  { source: "phantom-mode", target: "jett-auth" },
  { source: "phantom-mode", target: "gaze" },
  { source: "phantom-mode", target: "edge-mcp" },
  { source: "jettchat-messaging", target: "sdk-chat" },
  { source: "jettchat-messaging", target: "xchat-native" },
  { source: "jettchat-messaging", target: "phantom-mode" },

  { source: "token", target: "on-chain" },
  { source: "token", target: "depin" },
  { source: "token", target: "jett-auth" },
  { source: "token", target: "token-tiers" },
  { source: "token", target: "token-subscriptions" },
  { source: "token", target: "token-trading" },
  { source: "token-tiers", target: "mojo" },
  { source: "token-tiers", target: "jettchat" },
  { source: "token-subscriptions", target: "token-tiers" },
  { source: "token-trading", target: "on-chain" },
  { source: "token-trading", target: "platform-access" },

  { source: "jett-auth", target: "gaze" },
  { source: "jett-auth", target: "wallet" },
  { source: "jett-auth", target: "what-is-optx" },

  { source: "hermes-features", target: "astrojoe" },
  { source: "hermes-features", target: "hermes-api" },
  { source: "hermes-features", target: "hedgehog-doc" },
  { source: "hermes-features", target: "edge-mcp" },
  { source: "hermes-features", target: "changelog" },

  { source: "ecosystem", target: "doc-index" },
  { source: "ecosystem", target: "what-is-optx" },
  { source: "ecosystem", target: "sdk" },
  { source: "ecosystem", target: "astrojoe" },
  { source: "ecosystem", target: "jettchat" },
  { source: "ecosystem", target: "jett-auth" },
];

export const PATH_TO_NODE: Record<string, string> = Object.fromEntries(
  MOA_NODES.map((n) => [n.href, n.id])
);

export type PageAgtEntry = {
  tensor: AgtKey;
  node: string;
  emo: number;
  env: number;
  cog: number;
};

/** Maps Fumadocs slug path (no leading /docs/) to AGT badge data */
export const PAGE_AGT: Record<string, PageAgtEntry> = Object.fromEntries(
  MOA_NODES.filter((n) => n.href !== "/docs").map((n) => {
    const slug = n.href.replace(/^\/docs\/?/, "");
    return [slug, { tensor: n.agt, node: n.id, emo: n.emo, env: n.env, cog: n.cog }];
  })
);

/** Mobile accordion sub-pages keyed by section landing href */
export const MOBILE_SUB_PAGES: Record<string, { label: string; href: string; agt: AgtKey }[]> = {
  "/docs/getting-started/what-is-optx": MOA_NODES.filter((n) => n.group === "getting-started").map((n) => ({
    label: n.navLabel ?? n.label,
    href: n.href,
    agt: n.agt,
  })),
  "/docs/sdk": MOA_NODES.filter((n) => n.group === "sdk").map((n) => ({
    label: n.navLabel ?? n.label,
    href: n.href,
    agt: n.agt,
  })),
  "/docs/jettchat": MOA_NODES.filter((n) => n.group === "jettchat").map((n) => ({
    label: n.navLabel ?? n.label,
    href: n.href,
    agt: n.agt,
  })),
  "/docs/authentication/gaze": MOA_NODES.filter((n) => n.group === "authentication").map((n) => ({
    label: n.navLabel ?? n.label,
    href: n.href,
    agt: n.agt,
  })),
  "/docs/token": MOA_NODES.filter((n) => n.group === "token" && n.id !== "token-subscriptions").map((n) => ({
    label: n.navLabel ?? n.label,
    href: n.href,
    agt: n.agt,
  })),
  "/docs/protocol": MOA_NODES.filter((n) => n.group === "protocol").map((n) => ({
    label: n.navLabel ?? n.label,
    href: n.href,
    agt: n.agt,
  })),
  "/docs/astrojoe": MOA_NODES.filter((n) => n.group === "astrojoe").map((n) => ({
    label: n.navLabel ?? n.label,
    href: n.href,
    agt: n.agt,
  })),
  "/docs/dojo": MOA_NODES.filter((n) => n.group === "dojo").map((n) => ({
    label: n.navLabel ?? n.label,
    href: n.href,
    agt: n.agt,
  })),
  "/docs/architecture": MOA_NODES.filter((n) => n.group === "architecture").map((n) => ({
    label: n.navLabel ?? n.label,
    href: n.href,
    agt: n.agt,
  })),
  "/docs/on-chain-bridge": MOA_NODES.filter((n) => n.group === "on-chain-bridge").map((n) => ({
    label: n.navLabel ?? n.label,
    href: n.href,
    agt: n.agt,
  })),
  "/docs/infrastructure/edge": MOA_NODES.filter((n) => n.group === "infrastructure").map((n) => ({
    label: n.navLabel ?? n.label,
    href: n.href,
    agt: n.agt,
  })),
  "/docs/reference/api": MOA_NODES.filter(
    (n) => n.group === "reference" && n.id !== "docs-rules"
  ).map((n) => ({
    label: n.navLabel ?? n.label,
    href: n.href,
    agt: n.agt,
  })),
};
