"use client";

import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import Link from "next/link";
import {
  GROUP_LABELS,
  GROUP_ORDER,
  MOA_EDGES,
  MOA_NODES,
  type AgtKey,
  type MoaNode,
} from "@/lib/moa-registry";

export const AGT_COLORS: Record<AgtKey, { color: string; label: string; dim: string }> = {
  COG: { color: "#eab308", label: "Cognitive", dim: "rgba(234,179,8,0.12)" },
  EMO: { color: "#f43f5e", label: "Emotional", dim: "rgba(244,63,94,0.12)" },
  ENV: { color: "#60a5fa", label: "Environmental", dim: "rgba(96,165,250,0.12)" },
};

const DOC_NODES = MOA_NODES.filter((n) => n.group !== "root");
const DOC_EDGES = MOA_EDGES;

function getConnections(nodeId: string): string[] {
  const ids = new Set<string>();
  for (const e of DOC_EDGES) {
    if (e.source === nodeId) ids.add(e.target);
    if (e.target === nodeId) ids.add(e.source);
  }
  return Array.from(ids);
}

export function MoaGraph() {
  const [activeAgt, setActiveAgt] = useState<AgtKey | null>(null);
  const [activeGroup, setActiveGroup] = useState<string | null>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveAgt(null);
        setActiveGroup(null);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    const handler = (e: Event) => {
      const nodeId = (e as CustomEvent<string>).detail;
      if (nodeId) {
        setSelectedNodeId(nodeId);
        setTimeout(() => {
          document.getElementById(`moa-node-${nodeId}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 120);
      }
    };
    window.addEventListener("moa-search-select", handler);
    return () => window.removeEventListener("moa-search-select", handler);
  }, []);

  const grouped = useMemo(() => {
    const map: Record<string, MoaNode[]> = {};
    for (const n of DOC_NODES) {
      if (!map[n.group]) map[n.group] = [];
      map[n.group].push(n);
    }
    return Object.entries(map).sort(
      ([a], [b]) => (GROUP_ORDER[a] ?? 99) - (GROUP_ORDER[b] ?? 99)
    );
  }, []);

  const filtered = useMemo(() => {
    return grouped
      .map(([group, nodes]) => {
        const filteredNodes = nodes.filter((n) => {
          if (activeAgt && n.agt !== activeAgt) return false;
          if (activeGroup && n.group !== activeGroup) return false;
          return true;
        });
        return [group, filteredNodes] as [string, MoaNode[]];
      })
      .filter(([, nodes]) => nodes.length > 0);
  }, [grouped, activeAgt, activeGroup]);

  const totalFiltered = useMemo(() => filtered.reduce((s, [, n]) => s + n.length, 0), [filtered]);

  const connectedTo = useMemo(() => {
    if (!hoveredNode) return new Set<string>();
    return new Set(getConnections(hoveredNode));
  }, [hoveredNode]);

  const scrollToGroup = useCallback((group: string) => {
    setActiveGroup(null);
    sectionRefs.current[group]?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const groupCounts = useMemo(() => {
    const c: Record<string, number> = {};
    for (const n of DOC_NODES) c[n.group] = (c[n.group] || 0) + 1;
    return c;
  }, []);

  return (
    <div id="moa-knowledge-graph" className="flex w-full min-h-[600px] font-[family-name:var(--font-geist-mono)] text-sm border border-fd-border rounded-lg overflow-hidden bg-fd-background">
      {sidebarOpen && (
        <aside className="w-[220px] min-w-[220px] border-r border-fd-border flex flex-col bg-fd-card/50">
          <div className="px-3 pt-3 pb-2 border-b border-fd-border/50">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] uppercase tracking-[0.12em] text-fd-muted-foreground/60 font-semibold">
                Knowledge Map
              </span>
              <button
                onClick={() => setSidebarOpen(false)}
                className="text-fd-muted-foreground/40 hover:text-fd-muted-foreground text-xs transition-colors p-0.5"
                aria-label="Collapse sidebar"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 17l-5-5 5-5M18 17l-5-5 5-5" /></svg>
              </button>
            </div>
            <div className="flex gap-1">
              {(["COG", "EMO", "ENV"] as AgtKey[]).map((agt) => {
                const isActive = activeAgt === agt;
                const c = AGT_COLORS[agt];
                return (
                  <button
                    key={agt}
                    onClick={() => setActiveAgt(isActive ? null : agt)}
                    className="flex-1 flex items-center justify-center gap-1.5 px-1.5 py-1.5 rounded text-[10px] font-bold uppercase tracking-wider transition-all border"
                    style={{
                      backgroundColor: isActive ? c.dim : "transparent",
                      borderColor: isActive ? c.color + "44" : "rgba(255,255,255,0.06)",
                      color: isActive ? c.color : undefined,
                      opacity: isActive ? 1 : 0.5,
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: c.color }} />
                    /{agt.toLowerCase()}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-3 py-2">
            <span className="text-[10px] uppercase tracking-[0.1em] text-fd-muted-foreground/40 block mb-1.5">Sections</span>
            <nav className="flex flex-col gap-0.5">
              {grouped.map(([group]) => (
                <button
                  key={group}
                  onClick={() => scrollToGroup(group)}
                  className="flex items-center justify-between px-1.5 py-1 rounded text-left text-[11px] text-fd-muted-foreground hover:text-fd-foreground hover:bg-fd-accent/30 transition-colors"
                >
                  <span className="truncate">{GROUP_LABELS[group] ?? group}</span>
                  <span className="text-[10px] text-fd-muted-foreground/30 tabular-nums">{groupCounts[group]}</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="px-3 py-2 border-t border-fd-border/50 text-[10px] text-fd-muted-foreground/30">
            {DOC_NODES.length} nodes &middot; {DOC_EDGES.length} edges
          </div>
        </aside>
      )}

      <main className="flex-1 min-w-0 flex flex-col">
        <div className="sticky top-0 z-10 bg-fd-background/95 backdrop-blur-sm border-b border-fd-border/50 px-5 py-3 flex items-center gap-3">
          {!sidebarOpen && (
            <button
              onClick={() => setSidebarOpen(true)}
              className="text-fd-muted-foreground/40 hover:text-fd-muted-foreground transition-colors mr-1"
              aria-label="Open sidebar"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h18M3 6h18M3 18h18" /></svg>
            </button>
          )}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-fd-foreground font-semibold text-sm">jettoptx/jettoptx-docs</span>
              <span className="text-fd-muted-foreground/30">/</span>
              <span className="text-fd-muted-foreground text-xs">Map of Augments</span>
            </div>
          </div>
          <div className="flex items-center gap-3 text-[11px] text-fd-muted-foreground/40 tabular-nums">
            <span>{totalFiltered} visible</span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {filtered.length === 0 && (
            <div className="text-fd-muted-foreground/40 text-xs py-12 text-center">
              No nodes match the current filter.
            </div>
          )}

          {filtered.map(([group, nodes]) => (
            <section
              key={group}
              ref={(el) => { sectionRefs.current[group] = el; }}
              className="mb-6 last:mb-0"
            >
              <div className="flex items-baseline gap-2 mb-2 pb-1.5 border-b border-fd-border/30">
                <h3 className="text-[13px] font-semibold text-fd-foreground tracking-wide uppercase">
                  {GROUP_LABELS[group] ?? group}
                </h3>
                <span className="text-[10px] text-fd-muted-foreground/30 tabular-nums">{nodes.length}</span>
              </div>

              <div className="flex flex-col">
                {nodes.map((node) => {
                  const agt = AGT_COLORS[node.agt];
                  const isHovered = hoveredNode === node.id;
                  const isSelected = selectedNodeId === node.id;
                  const isConnected = connectedTo.has(node.id);
                  const isDimmed = hoveredNode !== null && !isHovered && !isConnected;
                  const connections = getConnections(node.id);
                  const connectedNodes = connections
                    .map((id) => DOC_NODES.find((n) => n.id === id))
                    .filter(Boolean) as MoaNode[];

                  return (
                    <div
                      key={node.id}
                      id={`moa-node-${node.id}`}
                      className="group relative"
                      onMouseEnter={() => setHoveredNode(node.id)}
                      onMouseLeave={() => setHoveredNode(null)}
                    >
                      <div
                        className={`flex items-start gap-2.5 py-2 px-2 -mx-2 rounded transition-all duration-200${isSelected ? " moa-node-selected" : ""}`}
                        style={{
                          opacity: isDimmed ? 0.25 : 1,
                          backgroundColor: isSelected ? "rgba(234,179,8,0.10)" : isHovered ? agt.dim : "transparent",
                        }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full mt-[7px] shrink-0 transition-transform duration-150"
                          style={{
                            backgroundColor: agt.color,
                            opacity: isHovered ? 1 : 0.5,
                            transform: isHovered ? "scale(1.4)" : "scale(1)",
                          }}
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-baseline gap-2 flex-wrap">
                            <Link
                              href={node.href}
                              className="text-[13px] font-medium transition-colors hover:underline underline-offset-2 decoration-1"
                              style={{
                                color: isHovered ? agt.color : undefined,
                                textDecorationColor: isHovered ? `${agt.color}44` : undefined,
                              }}
                            >
                              {node.label}
                            </Link>
                            <span
                              className="text-[9px] font-bold px-1 py-px rounded uppercase tracking-wider shrink-0"
                              style={{ color: agt.color, backgroundColor: agt.dim, opacity: isHovered ? 1 : 0.6 }}
                            >
                              {node.agt}
                            </span>
                          </div>
                          <p className="text-[11px] text-fd-muted-foreground/60 leading-relaxed mt-0.5">
                            {node.description}
                          </p>
                          {isHovered && connectedNodes.length > 0 && (
                            <div className="flex flex-wrap gap-x-2 gap-y-0.5 mt-1.5">
                              <span className="text-[9px] text-fd-muted-foreground/30 uppercase tracking-wider mr-0.5">links</span>
                              {connectedNodes.map((cn) => (
                                <Link
                                  key={cn.id}
                                  href={cn.href}
                                  className="text-[10px] text-fd-muted-foreground/50 hover:text-fd-muted-foreground transition-colors"
                                >
                                  {cn.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                        <span className="text-[10px] text-fd-muted-foreground/20 tabular-nums mt-[3px] shrink-0">
                          {connections.length}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
