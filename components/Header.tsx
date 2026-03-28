import Link from "next/link";
import { HeaderNav } from "./HeaderNav";

export function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="site-logo">
          Darcy McCabe
        </Link>
        <HeaderNav />
      </div>
    </header>
  );
}
