import Link from "next/link";

function headingId(heading: string) {
  return `case-study-${heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")}`;
}

export function CaseStudy({
  title,
  summary,
  subtitle,
  belowIntro,
  className,
  sectionsClassName,
  children,
}: {
  title: string;
  summary?: string;
  subtitle?: React.ReactNode;
  belowIntro?: React.ReactNode;
  className?: string;
  sectionsClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <article className={["case-study", className].filter(Boolean).join(" ")}>
      <Link href="/work" className="case-study__back">
        ← Selected Work
      </Link>
      <header className="case-study__intro">
        <h1 className="case-study__title">{title}</h1>
        {summary ? <p className="case-study__summary">{summary}</p> : null}
        {subtitle ? <div className="case-study__subtitle">{subtitle}</div> : null}
      </header>
      {belowIntro}
      <div
        className={["case-study__sections", sectionsClassName].filter(Boolean).join(" ")}
      >
        {children}
      </div>
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
