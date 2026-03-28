import Link from "next/link";

function headingId(heading: string) {
  return `case-study-${heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")}`;
}

export function CaseStudy({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="case-study">
      <Link href="/work" className="case-study__back">
        ← Selected Work
      </Link>
      <h1 className="case-study__title">{title}</h1>
      <div className="case-study__sections">{children}</div>
    </article>
  );
}

export function CaseStudySection({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  const id = headingId(heading);
  return (
    <section className="case-study__section" aria-labelledby={id}>
      <h2 className="case-study__heading" id={id}>
        {heading}
      </h2>
      <div className="case-study__prose">{children}</div>
    </section>
  );
}
