# GROK BUILD HANDOFF PROMPT — Jett Optics Neuromorphic Interface

**Project**: Jett Optics (OPTX) — Neuromorphic Gaze Interface + Adaptive Gaze Tensor (AGT) + Dual Token Economy
**Date**: 2026-05-20
**Strict Constraint**: Use **ONLY existing repositories** in the jettoptx GitHub org. No new repos. Only refine, upgrade, conform, or modulate **current skills and connectors**.

## Core Principle
Everything new must conform to and route through the existing **HEDGEHOG** gateway. HEDGEHOG is the single source of truth for skill discovery and secure delegation.

## Exact HEDGEHOG Definition (Conform to this exactly)
**HEDGEHOG = HANDSHAKE Encrypted DELEGATED GESTURE ENVELOPE HANDLER OPTX GATEWAY**

HEDGEHOG is the mandatory central MCP (Model Context Protocol) gateway. All gaze vectors, Adaptive Gaze Tensors (AGT), gesture envelopes, batch training data, biometrics correlation, token operations, and agent harness calls must pass through HEDGEHOG for encryption, delegation, validation, and uniform skill registration.

## Repos to Refine / Upgrade (No New Repos)
- `jettoptx-aaron-router` — Refine AARON with Adaptive Gaze Tensor (AGT) processing, Jet Cursor logic, and HEDGEHOG-compliant connectors.
- `jettoptx-core` — Upgrade JOE Agentic Core. Make Joe the central orchestrator that consumes HEDGEHOG-registered skills.
- `jettoptx-context` — Refine existing skills in `.agents/skills/`, update CLAUDE.md / AGENTS.md with new conformed modules, add HEDGEHOG MCP skill definitions.
- `jettoptx-docs` — Update architecture docs and this prompt.
- `jettoptx-mojo` — Refine mobile app with ARKit/ARCore bootstrap + home-screen widget for quick emoji tagging.
- `jettoptx-jettauth` — Extend auth for gaze + token gating via HEDGEHOG.
- `jettoptx-hermes-api` — Modulate for agent spawning harness that routes through HEDGEHOG.
- `jettoptx-cstb-depin` — Upgrade on-chain logic for OPTX utility + JTX premium tokens and biofeedback rewards.

## Refined Architecture (All Modules Modulated to HEDGEHOG)

### 1. Adaptive Gaze Tensor (AGT) — Core Processing Layer
- Project 3D gaze vectors (from JEO-adapted tracker in aaron-router) onto visual 2D simplex.
- User deliberately looks at divided screen zones via **Jet Cursor**:
  - Bottom-left zone → Emotional
  - Bottom-right zone → Environmental
  - Top zone → Cognitive
- Supports hold-and-swipe gesture for explicit instant classification (overrides spatial inference).
- Timestamp every capture (initial 2.22s window, later shrink to 1.11s after sufficient training data). Use timestamps for resonance in JetOptimal Encryption.

### 2. PIN-Triggered Batching + SpaceTimeDB
- 6-digit PIN entry triggers batch capture: gaze vectors + gaze-centered screenshot/frame + biometric snapshot.
- Store via Rust reducers in SpaceTimeDB.
- Later correlate batches with EEG / Whoop HRV for P-value weighting (environmental, cognitive, emotional states).

### 3. HEDGEHOG MCP Server Connector (Central Upgrade)
- Expose every module above as discoverable MCP skills.
- Joe (on DGX) discovers and calls them uniformly through HEDGEHOG.
- All gesture envelopes are encrypted and delegated via HEDGEHOG.

### 4. Dual Token Economy (OPTX + JTX)
- **OPTX** (utility): High circulation. Used for subscriptions, agent spin-up, daily operations, biofeedback rewards (mint on successful training/login, monthly caps).
- **JTX** (premium/governance): Fixed 4.4M supply. Holding unlocks higher tiers, priority, or revenue share.
- Subscription tiers: Free (earn limited OPTX via training), ~$8.88/mo, $28/mo Dojo (unlimited OPTX + custom emoji augmentations).
- Widget: Quick emoji tagging (brain=cognitive, heart=emotional, clover=environmental) writes directly to SpaceTimeDB.

### 5. Joe Orchestrator on DGX
- Pulls batches from SpaceTimeDB via HEDGEHOG.
- Runs VLM (Grok vision base) on gaze-centered screenshots when needed.
- Updates AGT model and P-value weights.
- Handles token minting/rewards and agent spawning.

### 6. Mobile Bootstrap + Fallback
- Start with ARKit (iOS) / ARCore (Android) in jettoptx-mojo for high-fidelity training data.
- Once enough labeled batches exist, fall back to webcam + trained AGT model.

## Skills & Connectors to Refine/Upgrade in Current Structure

Refine existing patterns in `jettoptx-context/.agents/skills/` and `jettoptx-core`:

- Add/Modulate: `adaptive-gaze-tensor` skill (3D→2D projection + zone classification + swipe override)
- Add/Modulate: `jet-cursor-visual-feedback` module
- Add/Modulate: `pin-swipe-batch-capture` skill (with timestamp resonance for encryption)
- Add/Modulate: `hedgehog-mcp-connector` (central registration point)
- Add/Modulate: `biometrics-fusion-pvalue` skill
- Add/Modulate: `dual-token-economy` + subscription engine (in core + on-chain)
- Add/Modulate: `biofeedback-reward-mint` connector
- Add/Modulate: `agent-spawning-harness` (routes through HEDGEHOG + Hermes)
- Add/Modulate: `mobile-widget-emoji-tagger`

All new or refined skills **must register with HEDGEHOG** and be discoverable via MCP.

## Data Flow (HEDGEHOG Compliant)
Mobile (ARKit/ARCore) or Browser → JEO-adapted tracker (aaron-router) → Adaptive Gaze Tensor + Jet Cursor → User-directed classification or swipe → PIN trigger → Batch (vectors + screenshot + biometrics) → HEDGEHOG gateway → SpaceTimeDB → Joe (core) pulls via HEDGEHOG → VLM analysis + training update → Token reward + agent orchestration.

## Tokenomics Implementation Rules
- Training earns capped OPTX (biofeedback reward).
- Paying subscribers receive higher/unlimited OPTX allocation.
- OPTX used to spin up or discount agent containers.
- JTX for premium access/governance.

## Output Expected
- Updated code across the listed existing repos only.
- Refined skills registered in HEDGEHOG MCP.
- Joe fully functional as HEDGEHOG-aware orchestrator on DGX.
- Clear deployment notes for SpaceTimeDB + DGX Joe.
- Updated docs in jettoptx-docs and jettoptx-context.

**Start immediately. Conform everything to HEDGEHOG. Use only current repos and modulate existing skills/connectors.**

This is the complete, self-contained prompt for a fresh Grok Build session.