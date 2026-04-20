import type { Metadata } from "next";
import "./globals.css";
import { validateEnv } from "@/lib/env";

export const metadata: Metadata = {
  metadataBase: new URL("https://tantu-core.vercel.app"),
  title: "TANTUCORE",
  description: "Small apps. Real impact.",
  openGraph: {
    title: "TANTUCORE",
    description: "Small apps. Real impact.",
    url: "https://tantu-core.vercel.app",
    siteName: "TantuCore",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TantuCore",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TANTUCORE",
    description: "Small apps. Real impact.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "TantuCore",
  url: "https://tantu-core.vercel.app",
  logo: "https://tantu-core.vercel.app/og-image.png",
  description: "Small apps. Real impact. Local-first software built in public.",
  founder: {
    "@type": "Person",
    name: "Chand Rana",
  },
  sameAs: [
    "https://x.com/TantuCore",
    "https://youtube.com/@tantucore",
    "https://www.instagram.com/tantucore",
    "https://github.com/chandrana17",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  validateEnv();
  return (
    <html lang="en" className="light">
      <head>
        {/* Preconnect for faster font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container">
        {children}
      </body>
    </html>
  );
}
