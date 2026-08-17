import { NavDropdown } from "@/components/NavDropdown";

type Item = { readonly href: string; readonly label: string };

export function AboutDropdown({ items }: { items: readonly Item[] }) {
  return (
    <NavDropdown
      baseHref="/about"
      baseLabel="About"
      baseLinkId="nav-about-about-link"
      menuId="nav-about-menu"
      triggerId="nav-about-submenu-trigger"
      triggerAriaLabel="Open about page sections menu"
      items={items}
    />
  );
}
