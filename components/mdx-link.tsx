"use client";

import type { AnchorHTMLAttributes, HTMLAttributes } from "react";
import { usePathname } from "next/navigation";
import { PATH_TO_NODE } from "@/lib/moa-registry";

/**
 * Custom MDX <a> component.
 * Internal doc links open the MOA overlay with the target node selected.
 * Anchor links (#) and external links behave normally.
 */
export function MdxLink(props: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const { href, children, ...rest } = props;
  const pathname = usePathname();

  if (!href) return <a {...props} />;

  // Anchor links (heading permalinks) — open MOA with current page's node
  if (href.startsWith("#")) {
    const currentNode = PATH_TO_NODE[pathname];
    if (currentNode) {
      return (
        <a
          {...rest}
          href={href}
          onClick={(e) => {
            e.preventDefault();
            window.dispatchEvent(
              new CustomEvent("augment-space-open", { detail: currentNode })
            );
          }}
          className="text-[var(--color-orange-500)] hover:text-[rgb(255,140,50)] transition-colors cursor-pointer"
          title={`View in MOA: ${currentNode}`}
        >
          {children}
        </a>
      );
    }
    return <a {...props} />;
  }

  // External links — pass through
  if (href.startsWith("http://") || href.startsWith("https://")) {
    return <a target="_blank" rel="noopener noreferrer" {...props} />;
  }

  // Strip anchor fragment for node lookup
  const basePath = href.split("#")[0];
  const nodeId = PATH_TO_NODE[basePath];

  if (nodeId) {
    return (
      <a
        {...rest}
        href={href}
        onClick={(e) => {
          e.preventDefault();
          window.dispatchEvent(
            new CustomEvent("augment-space-open", { detail: nodeId })
          );
        }}
        className="text-[var(--color-orange-500)] hover:text-[rgb(255,140,50)] transition-colors cursor-pointer"
        title={`View in MOA: ${nodeId}`}
      >
        {children}
      </a>
    );
  }

  // Internal non-docs links — pass through
  return <a {...props} />;
}

/**
 * Plain heading components — headings render as static text with scroll-margin.
 * Hover-orange affordance is in globals.css. No anchor link, no click handler.
 */
function PlainHeading({
  as,
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement> & { as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" }) {
  const As = as;
  return <As className={`scroll-m-28 ${className ?? ""}`} {...props} />;
}

export const mdxHeadings = {
  h1: (props: HTMLAttributes<HTMLHeadingElement>) => <PlainHeading as="h1" {...props} />,
  h2: (props: HTMLAttributes<HTMLHeadingElement>) => <PlainHeading as="h2" {...props} />,
  h3: (props: HTMLAttributes<HTMLHeadingElement>) => <PlainHeading as="h3" {...props} />,
  h4: (props: HTMLAttributes<HTMLHeadingElement>) => <PlainHeading as="h4" {...props} />,
  h5: (props: HTMLAttributes<HTMLHeadingElement>) => <PlainHeading as="h5" {...props} />,
  h6: (props: HTMLAttributes<HTMLHeadingElement>) => <PlainHeading as="h6" {...props} />,
};
