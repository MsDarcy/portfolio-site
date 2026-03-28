import type { Metadata } from "next";
import "./globals.css";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: {
    default: "Darcy McCabe — Product Design",
    template: "%s — Darcy McCabe",
  },
  description: "Product design portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
