import type { Metadata } from "next";
import { CaseStudy, CaseStudySection } from "@/components/CaseStudy";

export const metadata: Metadata = {
  title: "Performance Intelligence Dashboards",
  description:
    "Self-service dashboards that connected API telemetry to how product owners actually make decisions.",
};

export default function PerformanceDashboardPage() {
  return (
    <CaseStudy
      title="Performance Intelligence Dashboards"
      subtitle={
        <>
          <p>Internal Dashboard for Product Owners</p>
          <p>Enterprise B2B</p>
        </>
      }
    >
      <CaseStudySection heading="Situation">
        <p>
          API Product Managers were responsible for monitoring the health,
          reliability, and growth of platform APIs, but had no direct way to
          observe system performance without engineering support.
        </p>
        <p>
          To answer basic questions about usage patterns, error rates, or
          seasonal fluctuations, Product Managers relied on backend engineers to
          manually extract server logs. These exports were delivered as dense,
          unstructured datasets requiring technical interpretation.
        </p>
        <p>
          Even simple questions could take days to answer. This dependency
          created operational friction and limited the ability of Product
          Managers to proactively identify risks or opportunities.
        </p>
        <p>
          Data existed, but it was not accessible in a form aligned with product
          decision-making.
        </p>
      </CaseStudySection>
      <CaseStudySection heading="Task">
        <p>
          As the sole designer embedded with API Product Managers and backend
          engineering, my goal was to translate raw technical telemetry into
          usable, decision-oriented insights.
        </p>
        <p>
          The solution needed to provide real-time visibility into API performance
          while maintaining technical accuracy and avoiding additional reporting
          burden for engineering teams.
        </p>
        <p>
          It also needed to scale alongside the platform without creating new
          maintenance overhead.
        </p>
      </CaseStudySection>
      <CaseStudySection heading="Action">
        <p>
          I conducted interviews with Product Managers to understand how
          performance data informed roadmap decisions and operational priorities.
          A clear pattern emerged: while logs contained extensive detail, only a
          small subset of signals consistently influenced product decisions.
        </p>
        <p>
          Working closely with engineering, I mapped backend telemetry
          structures to decision-relevant metrics such as request volume, error
          frequency, and trend stability over time.
        </p>
        <p>
          Rather than exposing raw technical logs, I designed a translation layer
          that organized system signals into structured visual models aligned
          with product reasoning.
        </p>
        <p>
          I led end-to-end design of a self-service dashboard that surfaced
          time-based views across daily, weekly, monthly, and quarterly
          intervals. Hit volume and error rates were prioritized as primary
          indicators, with drill-down capability for deeper investigation when
          needed.
        </p>
        <p>
          Interactive prototypes were tested with Product Managers to refine
          labeling clarity, filtering behavior, and navigation hierarchy.
          Iterations focused on reducing cognitive load while preserving
          confidence in the underlying data.
        </p>
      </CaseStudySection>
      <CaseStudySection heading="Result">
        <p>
          Product Managers gained direct, real-time access to performance
          intelligence for the first time.
        </p>
        <p>
          Decisions that previously required engineering coordination could now
          be made immediately. Performance issues were identified earlier, and
          roadmap discussions became more evidence-driven.
        </p>
        <p>
          Engineering teams experienced a measurable reduction in ad hoc data
          requests, enabling greater focus on platform development rather than
          manual reporting.
        </p>
        <p>
          The dashboard established a scalable intelligence layer that aligned
          technical telemetry with product decision-making.
        </p>
      </CaseStudySection>
    </CaseStudy>
  );
}
