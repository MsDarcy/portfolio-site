import { SelectedWorkCards } from "@/components/SelectedWorkCards";

const focusItems = [
  "Systems thinking",
  "Fintech and platform UX",
  "Accessibility and governance",
] as const;

export default function HomePage() {
  return (
    <div className="home">
      <header className="home__hero">
        <p className="home__eyebrow">Senior Product Designer</p>
        <h1 className="home__title">Product design for clarity and momentum.</h1>
        <p className="home__lead">
          I design product experiences that make complex systems clearer, faster,
          and easier to use. My background spans fintech, developer platform UX,
          onboarding, dashboards, governance, and accessibility. I work closely with
          engineers and product teams to untangle complexity and create experiences
          that balance user needs with business and technical constraints.
        </p>
      </header>

      <section className="home__section" aria-labelledby="selected-work-heading">
        <h2 id="selected-work-heading" className="home-section__title">
          Selected Work
        </h2>
        <SelectedWorkCards />
      </section>

      <section className="home__section" aria-labelledby="focus-heading">
        <h2 id="focus-heading" className="home-section__title">
          What I focus on
        </h2>
        <ul className="focus-list">
          {focusItems.map((label) => (
            <li key={label}>{label}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
