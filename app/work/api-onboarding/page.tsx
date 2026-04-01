import type { Metadata } from "next";
import { CaseStudy, CaseStudySection } from "@/components/CaseStudy";
import { CaseStudyFigure } from "@/components/CaseStudyFigure";

export const metadata: Metadata = {
  title: "API Partner Onboarding",
  description:
    "Restructuring Open Banking partner onboarding from fragmented intake to a progressive, two-tier system.",
};

export default function ApiOnboardingPage() {
  return (
    <CaseStudy
      className="case-study--wide"
      sectionsClassName="case-study__sections--artifacts"
      title="API Partner Onboarding"
      subtitle={
        <>
          <p>Internal and 3rd Party API Partner Platform</p>
          <p>Enterprise B2B</p>
        </>
      }
      belowIntro={
        <CaseStudyFigure
          src="/images/api-onboarding/a4_new_onboarding_flow.svg"
          alt="New onboarding flow structured by implementation stages"
          caption="Structured onboarding aligned to implementation stages"
        />
      }
    >
      <CaseStudySection heading="Situation">
        <p>
          The Open Banking platform relied on a legacy onboarding process that had
          evolved organically across multiple teams. Requirements were captured
          through static wiki pages and long intake documents that lacked
          structure, persistence, and workflow logic.
        </p>
        <p>
          Partners were presented with more than 50 technical questions upfront,
          many of which were not immediately relevant to initiating a partnership.
          Because responses were not stored in a structured system, Product
          Managers acted as intermediaries — manually collecting answers,
          re-entering data, and coordinating clarification across engineering teams.
        </p>
        <p>
          Onboarding frequently took close to 90 days. Integrations were delayed,
          operational workload increased, and partners described onboarding as one
          of the most difficult parts of working with the platform. What began as
          documentation debt had become a barrier to platform adoption and a
          source of operational risk.
        </p>
      </CaseStudySection>
      <CaseStudyFigure
        src="/images/api-onboarding/a1_legacy_complexity_map.svg"
        alt="Map of legacy onboarding complexity and disconnected requirements"
        caption="Legacy onboarding required navigating disconnected technical requirements upfront"
      />
      <CaseStudySection heading="Task">
        <p>
          As the product designer embedded with the API platform team, I was
          responsible for transforming onboarding into a scalable, structured
          system that could support both business stakeholders and technical
          implementation teams.
        </p>
        <p>
          The solution needed to reduce early friction while preserving technical
          rigor. It also needed to create continuity across onboarding phases so
          information could be gathered progressively without creating gaps in
          compliance or engineering requirements.
        </p>
      </CaseStudySection>
      <CaseStudyFigure
        src="/images/api-onboarding/a2_question_audit_framework.svg"
        alt="Framework categorizing technical questions by implementation stage"
        caption="50+ technical questions categorized by implementation stage and ownership"
      />
      <CaseStudySection heading="Action">
        <p>
          I began by mapping the end-to-end onboarding workflow across Product,
          Engineering, and Partner teams. Interviews revealed that the primary
          users initiating onboarding were Business Managers responsible for
          partnerships, not engineers. Over time, engineering requirements had
          accumulated without prioritization or sequencing, creating unnecessary
          cognitive load at the start of the process.
        </p>
        <p>
          Working with Product and Engineering leadership, I audited the full set
          of technical questions and categorized them by implementation phase.
          This enabled a progressive disclosure model that preserved data
          integrity while reducing initial friction.
        </p>
        <CaseStudyFigure
          src="/images/api-onboarding/a3_progressive_disclosure_model.svg"
          alt="Progressive disclosure model for onboarding questions"
          caption="Progressive disclosure reduced friction while preserving technical completeness"
        />
        <p>I designed a two-tier onboarding structure.</p>
        <CaseStudyFigure
          src="/images/api-onboarding/a5_annotated_wireframes.svg"
          alt="Annotated wireframes for business and technical onboarding paths"
          caption="Interface patterns supported both business and technical workflows"
        />
        <p>
          Tier 1 established a partnership profile through a fast-track intake
          of 11 essential questions. This enabled teams to initiate partnerships
          quickly while capturing key business context.
        </p>
        <p>
          Tier 2 introduced a persistent technical intake aligned with real
          implementation stages. Teams could progressively provide authentication
          details, compliance requirements, data schemas, and configuration
          settings as integration progressed.
        </p>
        <p>
          Throughout the process, I collaborated closely with platform engineers
          to ensure technical fidelity while abstracting unnecessary implementation
          complexity from business-facing users.
        </p>
        <p>
          High-fidelity prototypes were validated with Product Managers to test
          comprehension, completion time, and workflow clarity. The final
          structure was documented as a durable source of truth to prevent
          regression into fragmented manual processes.
        </p>
      </CaseStudySection>
      <CaseStudyFigure
        src="/images/api-onboarding/a6_system_persistence_model.svg"
        alt="System model for persistent onboarding data across phases"
        caption="Persistent data structure enabled continuity across onboarding phases"
      />
      <CaseStudySection heading="Result">
        <p>
          The redesigned onboarding system reduced estimated cycle time from
          roughly 90 days to approximately 3–4 weeks.
        </p>
        <p>
          Product Managers saw an estimated 65–75 percent reduction in manual
          coordination and data re-entry. Partners were able to initiate
          integrations faster with clearer expectations, while engineering teams
          received more structured and complete technical information.
        </p>
        <p>
          Most importantly, the platform gained a scalable onboarding foundation
          that could evolve without reintroducing fragmented intake patterns.
        </p>
        <CaseStudyFigure
          src="/images/api-onboarding/a7_impact_summary.svg"
          alt="Summary of onboarding cycle time and coordination impact"
          caption="Reduced onboarding cycle time and manual coordination burden"
        />
      </CaseStudySection>
    </CaseStudy>
  );
}
