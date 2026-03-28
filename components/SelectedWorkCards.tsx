import Link from "next/link";
import { selectedWorkCards } from "@/lib/selected-work";

export function SelectedWorkCards() {
  return (
    <div className="work-cards">
      {selectedWorkCards.map((item) => (
        <Link key={item.href} href={item.href} className="work-card">
          <h3 className="work-card__title">{item.title}</h3>
          <p className="work-card__desc">{item.description}</p>
        </Link>
      ))}
    </div>
  );
}
