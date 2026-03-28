import type { Metadata } from "next";
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
    </div>
  );
}
