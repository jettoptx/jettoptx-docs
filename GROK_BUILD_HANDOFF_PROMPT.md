# GROK BUILD HANDOFF PROMPT

**Project**: Jett Optics / OPTX Neuromorphic Interface + Dual Token Economy (OPTX + JTX)
**Date**: 2026-05-20
**Goal**: Implement the full production system using **only existing repositories** in the jettoptx GitHub org. No new repos.

## Core Repos to Update (Do NOT create new ones)
- `jettoptx-aaron-router` — Core gaze verification, AARON router, Jett Auth with AGT/OGT, Solana bridge.
- `jettoptx-core` — JOE Agentic Core (brain.py, skills, soul). Make Joe the central orchestrator.
- `jettoptx-context` — Skills, agents, plans, Tailscale helpers. Add new skills here.
- `jettoptx-docs` — Documentation. Update with architecture.
- `jettoptx-mojo` — Mobile iOS app (Expo/React Native). Add widget and ARKit gaze.
- `jettoptx-jettauth` — Auth SDK. Extend for gaze + token gating.
- `jettoptx-hermes-api` — Hermes bridge.
- `jettoptx-cstb-depin` — On-chain DePIN / CSTB contracts. Extend for OPTX/JTX logic.
- `jettoptx-jettchat-app` and SDKs — For chat integration if needed.

## Key Concepts from Conversation
- **Objective Gaze Tensor (OGT)**: Upgrade from Adaptive Gaze Tensor (AGT). 3D gaze vector projected to 2D simplex with 3 zones:
  - Bottom-left: Emotional
  - Bottom-right: Environmental
  - Top: Cognitive
- User sees **Jet Cursor** on a divided screen (visual 2D simplex) and deliberately gazes into zones or uses hold-and-swipe gesture for explicit classification.
- **Batching**: Triggered by 6-digit PIN entry. Capture 2.22s window (later shrink to 1.11s). Includes gaze vectors, timestamped screenshot (gaze-centered), biometrics snapshot.
- **Platforms**: Start with ARKit (iOS) / ARCore (Android) in `jettoptx-mojo` for high-fidelity bootstrap. Later fallback to webcam + trained OGT model.
- **Storage**: SpaceTimeDB (Rust reducers) for real-time batches. Correlate with EEG/Whoop biometrics for P-value weighting (environmental, cognitive, emotional).
- **Joe (Orchestrator)**: Runs on DGX Spark. Pulls batches, runs VLM (Grok vision or LLaVA) on screenshots when needed, updates OGT model, handles training loop.
- **Tokens**:
  - **OPTX**: Utility token. Used for subscriptions, agent spin-ups, biofeedback rewards (mint on successful training/login). High circulation.
  - **JTX**: Premium/governance token, fixed 4.4M supply. Holding unlocks better tiers, revenue share, or priority.
- **Subscriptions**: Free (limited OPTX earn), $8.88/mo, $28/mo Dojo (unlimited + custom emojis/augmentations).
- **Widget**: Home-screen widget (iOS WidgetKit / Android) for quick emoji tagging (brain= cognitive, heart=emotional, clover=environmental) without opening app.
- **MCP Connector**: Expose all modules as discoverable skills for Joe via Model Context Protocol. HEDGEHOG gateway becomes MCP gateway.
- **Biofeedback Reward**: On successful OpenTX login + training, mint limited OPTX on Solana.
- **Agent Spawning**: Users stake/burn OPTX or hold JTX to spin up Hermes-style agents or connect augmentations to Grok harness.

## Implementation Priorities for Grok Build
1. Extend `jettoptx-aaron-router` with Objective Gaze Tensor processor and Jet Cursor projection logic.
2. Add PIN + Swipe batch capture skill in `jettoptx-core` or `jettoptx-context`.
3. Create MCP server connector in `jettoptx-core` so Joe can uniformly call skills.
4. Update mobile in `jettoptx-mojo`: Add ARKit/ARCore face tracking + widget support.
5. Token logic in `jettoptx-cstb-depin` or new Anchor programs (update existing).
6. Training pipeline + biometrics correlation in `jettoptx-core` (Joe brain).
7. Documentation in `jettoptx-docs`.

## Full Architecture Data Flow
Browser/Mobile (ARKit) → JEO-adapted eye tracker (in aaron-router) → Objective Gaze Tensor → Jet Cursor visual feedback → PIN/Swipe trigger → Batch (gaze vectors + screenshot + biometrics) → SpaceTimeDB → Joe (DGX, jettoptx-core) → VLM analysis (if needed) → P-value update → Token mint/reward → Agent orchestration via Hermes/MCP.

## Tokenomics Rules (Implement in contracts + backend)
- Users earn limited OPTX via training (capped monthly).
- Paying subscribers get higher/unlimited OPTX allocation.
- OPTX used to pay for or discount agent containers.
- JTX for premium access / governance.

## MCP Connector Spec
Create a lightweight MCP server that registers skills from:
- Gaze tensor processing
- Batch capture
- Biometrics fusion
- Token gating
- Agent spawning
Joe can discover and call them uniformly.

## Constraints
- Use ONLY existing repos listed above. Update them with new modules/files.
- Keep browser/mobile side lightweight.
- Client sends batches on PIN entry (not continuous screenshots).
- Support deliberate user classification via Jet Cursor or swipe.
- Make Joe the true swarm orchestrator using Grok as vision base.

## Output Expected from Grok Build
- Updated code in the listed repos.
- New files like `objective_gaze_tensor.py`, `jet_cursor.py`, `mcp_connector.py`, `training_pipeline.py` placed in appropriate existing repos.
- Updated READMEs and docs.
- Clear instructions for deploying Joe on DGX and connecting to SpaceTimeDB.

This prompt is self-contained. Start implementing immediately using the current codebase structure.