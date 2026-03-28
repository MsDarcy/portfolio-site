import type { Metadata } from "next";
import { CaseStudy, CaseStudySection } from "@/components/CaseStudy";

export const metadata: Metadata = {
  title: "Performance Dashboards",
  description:
    "Turning difficult technical data into dashboards for faster, more confident decisions.",
};

export default function PerformanceDashboardPage() {
  return (
    <CaseStudy title="Performance Dashboards">
      <CaseStudySection heading="Overview">
        <p>
          This work transformed difficult-to-interpret technical data into dashboards
          that supported faster and more confident decision-making.
        </p>
      </CaseStudySection>
      <CaseStudySection heading="Problem">
        <p>
          Product managers lacked easy access to key performance data and often had
          to rely on engineers to interpret logs or surface meaningful metrics.
        </p>
      </CaseStudySection>
      <CaseStudySection heading="Role">
        <p>
          I worked across design, product, and engineering to define what information
          mattered most, how it should be structured, and how to present it clearly for
          ongoing use.
        </p>
      </CaseStudySection>
      <CaseStudySection heading="Constraints">
        <p>
          The challenge was turning dense technical information into something
          accessible and useful without oversimplifying what users needed to
          understand.
        </p>
      </CaseStudySection>
      <CaseStudySection heading="Approach">
        <p>
          I focused on information hierarchy, usability, and decision support. The
          dashboards were designed to surface key signals clearly, reduce dependency
          on engineering for routine insight gathering, and help stakeholders monitor
          performance more effectively.
        </p>
      </CaseStudySection>
      <CaseStudySection heading="Outcome">
        <p>
          The resulting dashboards improved visibility, reduced ambiguity, and
          supported more self-service access to important product performance signals.
        </p>
      </CaseStudySection>
    </CaseStudy>
  );
}
