# jettoptx-docs

Official developer documentation for the **Jett Optics / OPTX ecosystem** — [Next.js](https://nextjs.org) + [Fumadocs](https://fumadocs.vercel.app) + MDX.

Live at **[jettoptx.dev/docs](https://jettoptx.dev/docs)**

## Project Structure

```
jettoptx-docs/
├── app/                    # Next.js App Router
│   ├── docs/               # /docs catch-all MDX renderer
│   └── api/search/         # Full-text search
├── components/             # MOA graph, sidebar, footer
├── content/docs/           # MDX content (sections + meta.json)
├── lib/
│   ├── moa-registry.ts     # Single source: MOA nodes, edges, PATH_TO_NODE, PAGE_AGT
│   ├── platform-constants.ts
│   └── source.ts           # Fumadocs loader + Lucide icons
├── public/diagrams/        # D2 → SVG architecture diagrams
└── source.config.ts
```

## Adding a Doc Page

1. Create `content/docs/<section>/<page>.mdx` with frontmatter (`title`, `description`, `icon`)
2. Register in section `meta.json` and root `content/docs/meta.json` if new section
3. Add node + edges to `lib/moa-registry.ts` (PATH_TO_NODE and PAGE_AGT derive automatically)
4. Update changelog in `components/footer.tsx` and `content/docs/reference/changelog.mdx`

See [/docs/rules](https://jettoptx.dev/docs/rules) for the full agent/human walkthrough.

## Ecosystem Repos

| Repo | Docs Section |
|------|--------------|
| [jettoptx-sdk](https://github.com/jettoptx/jettoptx-sdk) | `/docs/sdk` |
| [jettoptx-aaron-router](https://github.com/jettoptx/jettoptx-aaron-router) | `/docs/protocol` |
| [jettoptx-poa-depin](https://github.com/jettoptx/jettoptx-poa-depin) | `/docs/on-chain-bridge` |
| [jettoptx-aaron-public](https://github.com/jettoptx/jettoptx-aaron-public) | `/docs/infrastructure/edge-gateway` |

Full map: [Ecosystem Repos](https://jettoptx.dev/docs/reference/ecosystem)

## Canonical On-Chain

| Token | Address |
|-------|---------|
| $JTX v2 | `JTXGnx83s2QZ2MwYkRD1cBKrqQKSdG5oe8vSYW5Zjoe` |
| DePIN mainnet | `85sqs4upQiPrvk1NMuyfHVQoW1EGdgk8m2cQb7uMxXTF` |

## Scripts

```bash
npm install
npm run dev       # localhost:3000
npm run build
```

## Current Version

**v2.2.2** — PoA trust audit package: docs align to `jtx_optx_devnet_poa_trustjoe` + `jett_vault` in `jettoptx-poa-depin`; CompuStable/$CSTB stubbed (legacy `cstb_mint` only); audit brief linked.

MIT — use it, fork it, ship it.
