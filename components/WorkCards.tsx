import Link from "next/link";

type WorkCard = {
  href: string;
  title: string;
  description: string;
};

export function WorkCards({ items }: { items: readonly WorkCard[] }) {
  return (
    <div className="work-cards">
      {items.map((item) => (
        <Link key={item.href} href={item.href} className="work-card">
          <h3 className="work-card__title">{item.title}</h3>
          <p className="work-card__desc">{item.description}</p>
        </Link>
      ))}
    </div>
  );
}
