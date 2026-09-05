export interface DocsRule {
  id: string;
  title: string;
  description: string;
  files?: string[];
}

/**
 * AGENT RULES — for LLMs, AIs, and agents editing OPTX docs.
 * When adding or editing a page, agents MUST follow every rule in this list.
 * This ensures the MOA knowledge graph, AGT classification, and navigation
 * stay consistent across the entire documentation system.
 */
export const AGENT_RULES: DocsRule[] = [
  {
    id: "mdx-structure",
    title: "1. MDX Page Structure",
    description:
      "Every doc page is an .mdx file in content/docs/<section>/. Each file MUST have frontmatter with three fields: title (page name), description (one-line summary), icon (Lucide icon name for sidebar). Fumadocs auto-discovers pages from the file tree — no manual route config.",
    files: ["content/docs/"],
  },
  {
    id: "agt-classification",
    title: "2. AGT Tensor Classification",
    description:
      "Every page MUST be classified with a primary AGT tensor. COG (#eab308, yellow) = analytical, logic, architecture, protocol internals. EMO (#f43f5e, pink) = identity, personality, agent interaction, human-facing. ENV (#60a5fa, blue) = infrastructure, networks, addresses, topology. Assign emo/env/cog scores that sum to 100. The highest score determines the primary tensor.",
  },
  {
    id: "moa-node",
    title: "3. Add MOA Graph Node",
    description:
      "Add a node to MOA_NODES in lib/moa-registry.ts. Required fields: id (kebab-case unique), label, group (section key matching GROUP_LABELS), agt ('COG'|'EMO'|'ENV'), radius (11-22), href (doc path), description, subLabels (3-4 tags), emo/env/cog (sum to 100). PATH_TO_NODE and PAGE_AGT are derived automatically.",
    files: ["lib/moa-registry.ts"],
  },
  {
    id: "moa-edges",
    title: "4. Add MOA Graph Edges",
    description:
      "Add edges to MOA_EDGES in lib/moa-registry.ts for every meaningful cross-reference. Format: { source: 'node-id', target: 'node-id' }. Every new page needs at least 2 edges. MOBILE_SUB_PAGES is derived from MOA_NODES by group.",
    files: ["lib/moa-registry.ts"],
  },
  {
    id: "mobile-sidebar",
    title: "5. Mobile Sidebar",
    description:
      "MOBILE_SUB_PAGES in lib/moa-registry.ts is auto-derived from MOA_NODES by group. If adding a NEW top-level section, add its landing href key to MOBILE_SUB_PAGES and update NAV_SECTIONS in components/mobile-sidebar.tsx.",
    files: ["lib/moa-registry.ts", "components/mobile-sidebar.tsx"],
  },
  {
    id: "path-mapping",
    title: "6. PATH_TO_NODE Mapping",
    description:
      "PATH_TO_NODE is auto-derived from MOA_NODES in lib/moa-registry.ts. augment-space-btn.tsx and mdx-link.tsx import it — no manual duplicate needed.",
    files: ["lib/moa-registry.ts"],
  },
  {
    id: "meta-json",
    title: "7. Navigation Ordering",
    description:
      "Sub-pages are auto-discovered. If adding a NEW top-level section, add its folder name to the pages array in content/docs/meta.json. Order in the array determines sidebar ordering.",
    files: ["content/docs/meta.json"],
  },
  {
    id: "style-system",
    title: "8. Style & Naming Conventions",
    description:
      "Fonts: D-DIN Expanded Regular for the OPTX DOCS wordmark; IBM Plex Sans for UI, sidebar titles (all caps, 500), and article body; IBM Plex Mono for code snippets and embedded charts only. OPTX Auth lockup is It's you (apostrophe) — never Its you. Colors: var(--color-orange-500) for accents (neon #FF6900 in dark mode, burnt brick rgb(220,78,31) in light mode — never hardcode the rgb literal), AGT tensor colors for classification. Use Lucide icons. Keep descriptions concise — one sentence per concept.",
  },
  {
    id: "changelog-currency",
    title: "9. Changelog Currency (NON-NEGOTIABLE)",
    description:
      "EVERY shipped change MUST be reflected in BOTH surfaces in the same session: (a) the footer changelog block in components/footer.tsx (the v2.x.y <li> entries inside the <details><summary>Changelog</summary>) AND (b) the long-form changelog at content/docs/reference/changelog.mdx. Either in the same commit as the work or as an immediate follow-up commit — never leave the visible changelog stale relative to the deployed app. Also update the 'Last updated: <date> — v<version>' line in components/footer.tsx. Within the same calendar day, extend the most recent version entry with new bullets; bump (e.g. v2.0.2 → v2.0.3) when crossing into a new day OR shipping a clearly distinct release. This rule applies to LLMs, VLMs, and human contributors equally.",
    files: ["components/footer.tsx", "content/docs/reference/changelog.mdx"],
  },
];

/**
 * HUMAN RULES — for developers and contributors editing docs.
 * Simplified checklist for humans adding or updating content.
 */
export const HUMAN_RULES: DocsRule[] = [
  {
    id: "h-create",
    title: "1. Create Your Page",
    description:
      "Create an .mdx file in content/docs/<section>/. Add frontmatter at the top: title, description, and icon (pick a Lucide icon name). Write your content in Markdown with optional JSX components.",
  },
  {
    id: "h-classify",
    title: "2. Choose AGT Tensor",
    description:
      "Pick the dominant cognitive dimension: COG (technical/analytical — architecture, protocols, APIs), EMO (relational — identity, agents, human interaction), ENV (spatial — infrastructure, networks, topology). This colors the page across the whole system.",
  },
  {
    id: "h-register",
    title: "3. Register the Page",
    description:
      "Update lib/moa-registry.ts: add MOA_NODES entry + MOA_EDGES. PATH_TO_NODE, PAGE_AGT, and mobile SUB_PAGES derive automatically.",
  },
  {
    id: "h-template",
    title: "4. Use as a Template",
    description:
      "jettoptx-docs is designed to be forked. Replace MDX files in content/docs/, customize MOA_NODES in lib/moa-registry.ts, update lib/source.ts for your nav structure, and deploy to Vercel.",
  },
  {
    id: "h-changelog",
    title: "5. Always Update the Changelog",
    description:
      "Same-session rule: every shipped change must land in BOTH the footer changelog block (components/footer.tsx) AND the long-form page (content/docs/reference/changelog.mdx). Also bump the 'Last updated: <date> — v<version>' line in the footer. No orphaned releases — if you ship it, document it the same day.",
  },
];
