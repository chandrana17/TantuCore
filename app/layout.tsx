import type { Metadata } from "next";
import "./globals.css";
import { validateEnv } from "@/lib/env";

export const metadata: Metadata = {
  metadataBase: new URL("https://tantucore.online"),
  title: {
    default: "TantuCore Studio — AI Apps & Windows Tools Built in Public",
    template: "%s — TantuCore Studio",
  },
  description: "TantuCore Studio builds free AI apps and Windows tools in public. Download TantuSpank, join the TantuMind waitlist. Solo-built by Chand Rana from Bhopal, India.",
  keywords: ["TantuCore", "TantuCore Studio", "TantuSpank", "TantuMind", "AI apps", "Windows tools", "free software", "built in public", "Chand Rana", "indie developer", "Bhopal"],
  openGraph: {
    title: "TantuCore Studio — AI Apps & Windows Tools Built in Public",
    description: "TantuCore Studio builds free AI apps and Windows tools in public. Download TantuSpank, join the TantuMind waitlist.",
    url: "https://tantucore.online",
    siteName: "TantuCore Studio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TantuCore Studio — Building AI Apps & Windows Tools in Public",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TantuCore Studio — AI Apps & Windows Tools",
    description: "TantuCore Studio builds free AI apps and Windows tools in public. Solo-built by Chand Rana.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "TantuCore Studio",
  url: "https://tantucore.online",
  logo: "https://tantucore.online/og-image.png",
  description: "We Build AI Apps & Windows Tools. Free. Built in public. Failures included.",
  founder: {
    "@type": "Person",
    name: "Chand Rana",
  },
  sameAs: [
    "https://x.com/tantucore",
    "https://youtube.com/@tantucore",
    "https://www.instagram.com/tantucore",
    "https://discord.gg/CEd2ZJw2Gx",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  validateEnv();
  return (
    <html lang="en" className="dark">
      <head>
        {/* Preconnect for faster font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#080A0F] text-[#f0f0f0] font-body antialiased">
        {children}
      </body>
    </html>
  );
}
