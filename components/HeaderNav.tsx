"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { workNavItems } from "@/lib/nav";
import { WorkDropdown } from "./WorkDropdown";

export function HeaderNav() {
  const pathname = usePathname();

  return (
    <nav className="site-nav" aria-label="Primary">
      <Link href="/" className="site-nav__link">
        About
      </Link>
      <WorkDropdown key={pathname} items={workNavItems} />
    </nav>
  );
}
