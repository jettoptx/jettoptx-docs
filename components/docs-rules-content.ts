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
      "Every doc page is an .mdx file in content/docs/<section>/. Each file MUST have frontmatter with three fields: title (page name), description (one-line summary), icon (Lucide icon name for sidebar). Add the slug to that section's meta.json pages array or the file stays off the sidebar. The file can still be routed without that entry.",
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
      "List every page slug in its section meta.json pages array. Order is sidebar order. Unlisted files can still be routed; they just stay out of the sidebar. New top-level sections also go in content/docs/meta.json. redirects() in next.config.mjs overrides the MDX route: delete a redirect before restoring that path. Retired URLs stay redirected (Hermes, agent-features → /docs/astrojoe/api, tiers, folded architecture, JettChat mode splits). A page that should open directly needs its own href — PATH_TO_NODE keeps the last node on a shared URL. Folded architecture nodes share /docs/reference/architecture on purpose.",
    files: ["content/docs/meta.json", "next.config.mjs", "lib/moa-registry.ts"],
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
      "EVERY shipped change MUST update content/docs/reference/changelog.mdx in the same session (Added / Changed / Fixed / Security / Process). When the public version changes, bump the Current Version line in README.md in the same change. The footer is house chrome and has no changelog — do not add one to components/footer.tsx. Within the same calendar day, extend the most recent version entry; bump (e.g. v2.2.4 → v2.2.5) when crossing into a new day OR shipping a clearly distinct release. Applies to LLMs, VLMs, and human contributors equally.",
    files: ["content/docs/reference/changelog.mdx", "README.md"],
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
      "List the slug in the section meta.json pages array so it shows in the sidebar, add a MOA_NODES entry plus at least two MOA_EDGES in lib/moa-registry.ts, and delete any next.config.mjs redirect for that path. PATH_TO_NODE, PAGE_AGT, and mobile SUB_PAGES derive from MOA_NODES. Do not hand-edit moa-visual.tsx or augment-space-btn.tsx.",
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
      "Same-session rule: update content/docs/reference/changelog.mdx when you ship. Bump the README Current Version line when the version changes. The footer has no changelog block.",
  },
];
