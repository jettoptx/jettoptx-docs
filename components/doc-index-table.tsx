import {
  MOA_NODES,
  MOA_EDGES,
  GROUP_LABELS,
  GROUP_ORDER,
  type AgtKey,
} from "@/lib/moa-registry";

const AGT_COLORS: Record<AgtKey, string> = {
  COG: "#eab308",
  EMO: "#f43f5e",
  ENV: "#60a5fa",
};

const SECTION_COLORS: Record<string, string> = {
  "getting-started": AGT_COLORS.COG,
  sdk: AGT_COLORS.COG,
  authentication: AGT_COLORS.EMO,
  protocol: AGT_COLORS.COG,
  "on-chain-bridge": AGT_COLORS.EMO,
  jettchat: AGT_COLORS.EMO,
  token: AGT_COLORS.ENV,
  dojo: AGT_COLORS.ENV,
  astrojoe: AGT_COLORS.EMO,
  architecture: AGT_COLORS.COG,
  infrastructure: AGT_COLORS.ENV,
  reference: AGT_COLORS.COG,
};

const nodeById = Object.fromEntries(MOA_NODES.map((n) => [n.id, n]));

function getConnectedLabels(nodeId: string): string {
  const labels = new Set<string>();
  for (const e of MOA_EDGES) {
    if (e.source === nodeId) {
      const target = nodeById[e.target];
      if (target) labels.add(target.label);
    }
    if (e.target === nodeId) {
      const source = nodeById[e.source];
      if (source) labels.add(source.label);
    }
  }
  return Array.from(labels).sort().join(", ");
}

function AgtBadge({ agt }: { agt: AgtKey }) {
  const color = AGT_COLORS[agt];
  return (
    <span style={{ color }}>
      <strong>{agt}</strong>
    </span>
  );
}


export function DocIndexTable() {
  const docNodes = MOA_NODES.filter((n) => n.group !== "root");
  const groups = [...new Set(docNodes.map((n) => n.group))].sort(
    (a, b) => (GROUP_ORDER[a] ?? 99) - (GROUP_ORDER[b] ?? 99)
  );

  const counts = { COG: 0, EMO: 0, ENV: 0 } as Record<AgtKey, number>;
  for (const n of docNodes) counts[n.agt]++;

  const connectionCounts = docNodes
    .map((n) => {
      const count = MOA_EDGES.filter(
        (e) => e.source === n.id || e.target === n.id
      ).length;
      return { label: n.label, count, role: n.description.split("—")[0]?.trim() ?? n.label };
    })
    .sort((a, b) => b.count - a.count)
    .slice(0, 8);

  return (
    <>
      {groups.map((group) => {
        const nodes = docNodes.filter((n) => n.group === group);
        const sectionColor = SECTION_COLORS[group] ?? AGT_COLORS.COG;
        return (
          <section key={group}>
            <h2>
              <span style={{ color: sectionColor }}>{GROUP_LABELS[group] ?? group}</span>
            </h2>
            <table>
              <thead>
                <tr>
                  <th>Page</th>
                  <th>AGT</th>
                  <th>EMO</th>
                  <th>ENV</th>
                  <th>COG</th>
                  <th>Connected</th>
                </tr>
              </thead>
              <tbody>
                {nodes.map((node) => (
                  <tr key={node.id}>
                    <td>
                      <a href={node.href}>{node.label}</a>
                    </td>
                    <td>
                      <AgtBadge agt={node.agt} />
                    </td>
                    <td>{node.emo}</td>
                    <td>{node.env}</td>
                    <td>
                      <strong>{node.cog}</strong>
                    </td>
                    <td>{getConnectedLabels(node.id)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        );
      })}

      <h2>AGT Distribution</h2>
      <p>
        Updated for v2.1.0 — {docNodes.length} pages registered in{" "}
        <code>lib/moa-registry.ts</code> (SDK section, Platform Access, Edge Gateway,
        Trading &amp; Mint, Devnet Validation, DOCS Rules).
      </p>
      <table>
        <thead>
          <tr>
            <th>Tensor</th>
            <th>Count</th>
            <th>Coverage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <AgtBadge agt="COG" />
            </td>
            <td>{counts.COG}</td>
            <td>Protocol specs, SDK, architecture flows, APIs, token</td>
          </tr>
          <tr>
            <td>
              <AgtBadge agt="EMO" />
            </td>
            <td>{counts.EMO}</td>
            <td>Identity, JettChat, bridges, auth, agent connections</td>
          </tr>
          <tr>
            <td>
              <AgtBadge agt="ENV" />
            </td>
            <td>{counts.ENV}</td>
            <td>Edge hardware, DePIN, on-chain addresses, DOJO, Phantom Mode</td>
          </tr>
        </tbody>
      </table>

      <h2>Connection Density</h2>
      <table>
        <thead>
          <tr>
            <th>Node</th>
            <th>Connections</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {connectionCounts.map((row) => (
            <tr key={row.label}>
              <td>
                <strong>{row.label}</strong>
              </td>
              <td>{row.count}</td>
              <td>{row.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
