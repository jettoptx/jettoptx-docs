import { source } from "@/lib/source";
import {
    DocsPage,
    DocsBody,
    DocsDescription,
    DocsTitle,
} from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { Pre } from "@/components/mdx-components";
import { MdxLink, mdxHeadings } from "@/components/mdx-link";
import { AgtBadge } from "@/components/agt-badge";
import { PAGE_AGT } from "@/lib/moa-registry";
import type { Metadata } from "next";

export default async function Page(props: {
    params: Promise<{ slug?: string[] }>;
}) {
    const params = await props.params;
    const page = source.getPage(params.slug);
    if (!page) notFound();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data = page.data as any;
    const MDX = data.body;
    const slugPath = params.slug?.join("/") ?? "";
    const agt = PAGE_AGT[slugPath];

  return (
    <DocsPage
      toc={data.toc}
      full={data.full}
    >
      <DocsTitle>{data.title}</DocsTitle>
      {agt && <AgtBadge tensor={agt.tensor} node={agt.node} emo={agt.emo} env={agt.env} cog={agt.cog} />}
      <DocsDescription>{data.description}</DocsDescription>
      <DocsBody>
        <MDX components={{ ...defaultMdxComponents, pre: Pre, a: MdxLink, ...mdxHeadings }} />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
    return source.generateParams();
}

export async function generateMetadata(props: {
    params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
    const params = await props.params;
    const page = source.getPage(params.slug);
    if (!page) notFound();
  
    return {
          title: page.data.title,
          description: page.data.description,
    };
}
