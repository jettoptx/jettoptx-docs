import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ExternalLink,
  Github,
} from "lucide-react";
import {
  HOUSE,
  HOUSE_BUILT_ON,
  HOUSE_LEGAL,
  HOUSE_NAV,
  HOUSE_SOCIALS,
} from "@/lib/house-links";

const titleClass =
  "mb-4 font-[family-name:var(--font-orbitron)] text-sm font-semibold tracking-widest uppercase text-fd-foreground";
const ghClass =
  "group inline-flex items-center gap-2.5 text-[11px] font-mono uppercase tracking-widest text-fd-muted-foreground transition-colors hover:text-orange-400";

export function SiteFooter() {
  return (
    <footer className="border-t border-fd-border bg-fd-card">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
          <div className="flex flex-col lg:col-span-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/techforce_OPTX.png"
                alt="OPTX · Jett Optics"
                width={56}
                height={56}
                className="h-14 w-14 rounded-md object-contain"
              />
              <span className="font-[family-name:var(--font-orbitron)] text-xl font-bold tracking-wider">
                <span style={{ color: "var(--color-orange-500)" }}>OPTX</span>
                {" "}Docs
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-fd-muted-foreground">
              Developer docs for the Jett Optics agentic protocol on Solana.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-fd-muted-foreground">
              <Check size={12} className="text-orange-500" />
              Built on Solana
            </div>
            <div className="mt-5 flex flex-col gap-2.5">
              <a href={HOUSE.GITHUB} target="_blank" rel="noopener noreferrer" className={ghClass}>
                <Github size={16} />
                JETT OPTICS
                <ExternalLink size={12} />
              </a>
              <a href={HOUSE.AGENC_GITHUB} target="_blank" rel="noopener noreferrer" className={ghClass}>
                <Github size={16} />
                AGENC
                <ExternalLink size={12} />
              </a>
            </div>
            <p className="mt-8 text-xs text-fd-muted-foreground/60">
              &copy; {new Date().getFullYear()} JETT OPTICS
            </p>
          </div>

          <div className="lg:col-span-3">
            <h4 className={titleClass}>Navigate</h4>
            <nav className="flex flex-col">
              {HOUSE_NAV.map((item) => (
                <a
                  key={item.num}
                  href={item.href}
                  className="group flex items-center gap-3 py-1.5 text-sm"
                >
                  <span className="font-mono text-xs text-fd-muted-foreground group-hover:text-orange-400">
                    {item.num}
                  </span>
                  <span className="font-[family-name:var(--font-orbitron)] text-sm tracking-wider text-fd-muted-foreground group-hover:text-fd-foreground">
                    {item.label}
                  </span>
                </a>
              ))}
            </nav>
          </div>

          <div className="lg:col-span-2">
            <h4 className={titleClass}>Built on</h4>
            <ul className="flex flex-col gap-1">
              {HOUSE_BUILT_ON.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/built inline-flex items-center gap-2.5 py-1 text-sm uppercase tracking-widest text-fd-muted-foreground hover:text-fd-foreground"
                  >
                    <span className="h-1.5 w-1.5 bg-orange-500" />
                    {item.name}
                    <ArrowRight size={12} className="text-orange-500 opacity-0 group-hover/built:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
            <h4 className={`${titleClass} mt-8`}>Socials</h4>
            <ul className="flex flex-col gap-1">
              {HOUSE_SOCIALS.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/built inline-flex items-center gap-2.5 py-1 text-sm uppercase tracking-widest text-fd-muted-foreground hover:text-fd-foreground"
                  >
                    <span className="h-1.5 w-1.5 bg-orange-500" />
                    {item.name}
                    <ArrowRight size={12} className="text-orange-500 opacity-0 group-hover/built:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className={titleClass}>Get started</h4>
            <a
              href={HOUSE.JTX_CHAT}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-md border border-fd-border px-5 py-4 text-sm font-semibold text-fd-foreground hover:border-orange-500/60"
            >
              <span className="font-[family-name:var(--font-orbitron)] tracking-wider">
                OPEN JTX.CHAT
              </span>
              <ArrowUpRight size={16} />
            </a>
            <p className="mt-3 text-[11px] font-mono uppercase tracking-widest text-fd-muted-foreground/70">
              XDX · DMs · talk to JOE
            </p>
            <a
              href={HOUSE.GROUP_INVITE}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-widest text-fd-muted-foreground hover:text-orange-400"
            >
              Join the Space Cowboys group
              <ArrowUpRight size={12} />
            </a>
            <a
              href={HOUSE.EMAIL}
              className="mt-5 inline-flex items-center gap-1.5 text-[11px] font-mono text-fd-muted-foreground hover:text-orange-400"
            >
              <Check size={12} className="text-orange-500" />
              joe@jettoptics.ai
            </a>
            <div className="mt-6 flex flex-col gap-2.5 border-t border-fd-border pt-5">
              {HOUSE_LEGAL.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-widest text-fd-muted-foreground hover:text-orange-400"
                >
                  {link.label}
                  <ArrowUpRight size={12} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
