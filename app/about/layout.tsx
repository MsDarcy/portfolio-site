import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={`about-layout ${inter.className}`}>{children}</div>;
}
