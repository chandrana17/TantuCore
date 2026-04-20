import type { Metadata } from "next";
import "./globals.css";
import { validateEnv } from "@/lib/env";

export const metadata: Metadata = {
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  validateEnv();
  return (
    <html lang="en" className="light">
      <body className="bg-background text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container">
        {children}
      </body>
    </html>
  );
}
