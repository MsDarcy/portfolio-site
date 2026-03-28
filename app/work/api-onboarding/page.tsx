import type { Metadata } from "next";
import { CaseStudy, CaseStudySection } from "@/components/CaseStudy";

export const metadata: Metadata = {
  title: "API Onboarding Experience",
  description:
    "Redesigning a fragmented API onboarding flow into a structured, scalable, user-friendly experience.",
};

export default function ApiOnboardingPage() {
  return (
    <CaseStudy title="API Onboarding Experience">
      <CaseStudySection heading="Overview">
        <p>
          This project focused on redesigning a fragmented API onboarding experience
          into a more structured, scalable, and user-friendly flow.
        </p>
      </CaseStudySection>
      <CaseStudySection heading="Problem">
        <p>
          The existing onboarding process was fragmented, highly manual, and difficult
          to navigate. Users encountered unclear requirements, inconsistent
          documentation, and unnecessary friction early in the process.
        </p>
      </CaseStudySection>
      <CaseStudySection heading="Role">
        <p>
          I led product design for the experience, partnering closely with product
          managers, engineers, and business stakeholders to identify friction points
          and design a more cohesive path.
        </p>
      </CaseStudySection>
      <CaseStudySection heading="Constraints">
        <p>
          The solution had to support technical requirements, business processes, and
          governance needs while reducing manual effort and improving clarity.
        </p>
      </CaseStudySection>
      <CaseStudySection heading="Approach">
        <p>
          I mapped the existing process, identified major friction points, and helped
          define a clearer onboarding structure. The redesigned flow front-loaded the
          most important questions, improved information architecture, and supported a
          longer-term shift toward a more scalable source of truth.
        </p>
      </CaseStudySection>
      <CaseStudySection heading="Outcome">
        <p>
          The result was a more self-service-oriented onboarding experience that
          reduced confusion, improved alignment across teams, and created a stronger
          foundation for future scalability.
        </p>
      </CaseStudySection>
    </CaseStudy>
  );
}
