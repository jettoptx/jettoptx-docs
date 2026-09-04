import "./globals.css";
import "./house-type.css";
import { RootProvider } from "fumadocs-ui/provider/next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-mono",
});

export const metadata: Metadata = {
  title: {
    default: "OPTX Documentation",
    template: "%s | OPTX Docs",
  },
  description:
    "We build Augments — digital extensions of yourself. OPTX Auth, SDK, AARON attestation, and surfaces for builders.",
  metadataBase: new URL("https://jettoptx.dev"),
  keywords: [
    "OPTX docs",
    "Augment",
    "OPTX Auth",
    "gaze biometrics",
    "AARON protocol",
    "JTX",
    "jettoptx SDK",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jettoptx.dev/docs",
    siteName: "OPTX Docs",
    title: "OPTX Documentation",
    description:
      "We build Augments. OPTX Auth feels like you — Email, X, or wallet. Integrate with the SDK and prove with AARON.",
  },
  twitter: {
    card: "summary",
    site: "@jettoptx",
    creator: "@jettoptx",
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/favicon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#b55200",
  width: "device-width",
  initialScale: 1,
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${ibmPlexSans.variable} ${ibmPlexMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-[family-name:var(--font-ibm-plex-sans)] antialiased house-body">
        <RootProvider
          theme={{
            defaultTheme: "dark",
            attribute: "class",
          }}
          search={{
            links: [
              ["What we build", "/docs/getting-started/what-is-optx"],
              ["Quickstart", "/docs/getting-started/access"],
              ["Doors", "/docs/getting-started/doors"],
              ["SDK", "/docs/sdk"],
              ["OPTX Auth", "/docs/sdk/auth"],
              ["AARON", "/docs/protocol"],
              ["API Reference", "/docs/reference/api"],
            ],
            options: {
              api: "/api/search",
            },
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
