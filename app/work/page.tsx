import type { Metadata } from "next";
import { IndependentAIPracticeCards } from "@/components/IndependentAIPracticeCards";
import { SelectedWorkCards } from "@/components/SelectedWorkCards";

export const metadata: Metadata = {
  title: "Selected Work",
  description:
    "Systems-focused product design work spanning onboarding, dashboards, and governance.",
};

export default function WorkIndexPage() {
  return (
    <div className="work-index">
      <h1 className="page-title">Selected Work</h1>
      <p className="page-lead work-index__intro">
        A selection of systems-focused product design work spanning onboarding,
        dashboards, and governance.
      </p>
      <SelectedWorkCards />

      <section
        className="home__section"
        aria-labelledby="independent-ai-practice-heading"
      >
        <h2 id="independent-ai-practice-heading" className="home-section__title">
          Independent AI Practice
        </h2>
        <IndependentAIPracticeCards />
      </section>
    </div>
  );
}
