import type { Metadata } from "next";
import { CaseStudy, CaseStudySection } from "@/components/CaseStudy";
import { CaseStudyFigure } from "@/components/CaseStudyFigure";

export const metadata: Metadata = {
  title: "Performance Intelligence Dashboards",
  description:
    "Self-service dashboards that connected API telemetry to how product owners actually make decisions.",
};

export default function PerformanceDashboardPage() {
  return (
    <CaseStudy
      className="case-study--wide"
      sectionsClassName="case-study__sections--artifacts"
      title="Performance Intelligence Dashboards"
      summary="Translated backend telemetry into decision-ready dashboards that enabled product managers to independently monitor API health, improving visibility into adoption, reliability, and performance trends."
      subtitle={
        <>
          <p>Internal Dashboard for Product Owners</p>
          <p>Enterprise B2B</p>
        </>
      }
      belowIntro={
        <CaseStudyFigure
          src="/images/performance-dashboard/b5_final_dashboard.svg"
          alt="Final dashboard showing API performance signals for product decisions"
          caption="Decision-oriented visibility into API performance signals"
        />
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
      <CaseStudyFigure
        src="/images/performance-dashboard/b1_raw_data_reality.svg"
        alt="Raw telemetry and logs requiring engineering interpretation"
        caption="Raw telemetry required engineering interpretation"
      />
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
      <CaseStudyFigure
        src="/images/performance-dashboard/b2_metric_prioritization.svg"
        alt="Prioritized metrics aligned with product decisions"
        caption="Identified signals most relevant to product decision-making"
      />
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
        <CaseStudyFigure
          src="/images/performance-dashboard/b3_data_transformation.svg"
          alt="Transformation from backend telemetry to structured product signals"
          caption="Translated backend telemetry into structured product signals"
        />
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
        <CaseStudyFigure
          src="/images/performance-dashboard/b4_wireframe_evolution.svg"
          alt="Evolution of dashboard wireframes for clearer performance signals"
          caption="Iterated dashboard structure to improve signal clarity"
        />
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
        <CaseStudyFigure
          src="/images/performance-dashboard/b6_impact_narrative.svg"
          alt="Impact of dashboards on insight speed and engineering reporting"
          caption="Enabled faster insight and reduced engineering reporting burden"
        />
      </CaseStudySection>
    </CaseStudy>
  );
}
