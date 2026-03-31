import type { Metadata } from "next";
import { CaseStudy, CaseStudySection } from "@/components/CaseStudy";

export const metadata: Metadata = {
  title: "API Partner Onboarding",
  description:
    "Restructuring Open Banking partner onboarding from fragmented intake to a progressive, two-tier system.",
};

export default function ApiOnboardingPage() {
  return (
    <CaseStudy
      title="API Partner Onboarding"
      subtitle={
        <>
          <p>Internal and 3rd Party API Partner Platform</p>
          <p>Enterprise B2B</p>
        </>
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
        <p>I designed a two-tier onboarding structure.</p>
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
      </CaseStudySection>
    </CaseStudy>
  );
}
