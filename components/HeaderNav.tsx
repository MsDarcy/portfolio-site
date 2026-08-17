"use client";

import { usePathname } from "next/navigation";
import { aboutNavItems, workNavItems } from "@/lib/nav";
import { AboutDropdown } from "./AboutDropdown";
import { WorkDropdown } from "./WorkDropdown";

export function HeaderNav() {
  const pathname = usePathname();

  return (
    <nav className="site-nav" aria-label="Primary">
      <WorkDropdown key={`work-${pathname}`} items={workNavItems} />
      <AboutDropdown key={`about-${pathname}`} items={aboutNavItems} />
    </nav>
  );
}
