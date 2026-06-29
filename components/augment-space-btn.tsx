"use client";

import { useCallback } from "react";
import { usePathname } from "next/navigation";
import { PATH_TO_NODE } from "@/lib/moa-registry";

export function AugmentSpaceBtn() {
  const pathname = usePathname();
  const nodeId = PATH_TO_NODE[pathname];

  const toggle = useCallback(() => {
    const event = new CustomEvent("augment-space-toggle", {
      detail: { nodeId },
    });
    window.dispatchEvent(event);
  }, [nodeId]);

  return (
    <button
      onClick={toggle}
      className="augment-space-btn flex items-center justify-center gap-2 flex-1 py-2 rounded-md border border-[rgba(255,105,0,0.2)] bg-[rgba(255,105,0,0.06)] text-[rgb(255,105,0)] hover:bg-[rgba(255,105,0,0.12)] hover:border-[rgba(255,105,0,0.35)] transition-all font-[family-name:var(--font-orbitron)] text-[11px] font-semibold tracking-widest uppercase whitespace-nowrap"
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
      AUGMENT SPACE
    </button>
  );
}
