import { NavDropdown } from "@/components/NavDropdown";

type Item = { readonly href: string; readonly label: string };

export function WorkDropdown({ items }: { items: readonly Item[] }) {
  return (
    <NavDropdown
      baseHref="/work"
      baseLabel="Work"
      baseLinkId="nav-work-work-link"
      menuId="nav-work-menu"
      triggerId="nav-work-submenu-trigger"
      triggerAriaLabel="Open project links menu"
      items={items}
    />
  );
}
