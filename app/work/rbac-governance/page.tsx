import type { Metadata } from "next";
import { CaseStudy, CaseStudySection } from "@/components/CaseStudy";
import { CaseStudyFigure } from "@/components/CaseStudyFigure";

export const metadata: Metadata = {
  title: "Enterprise Governance & RBAC",
  description:
    "A tiered permissions model with built-in safeguards for an Open Banking developer platform.",
};

export default function RbacGovernancePage() {
  return (
    <CaseStudy
      className="case-study--wide"
      sectionsClassName="case-study__sections--artifacts"
      title="Enterprise Governance & Role-Based Access Control (RBAC)"
      summary="Established a scalable role-based access framework with guardrails that clarified ownership boundaries, reduced access risk, and supported secure platform growth."
      subtitle={
        <>
          <p>Banking API for Developer Ecosystem</p>
          <p>Enterprise B2B</p>
        </>
      }
      belowIntro={
        <CaseStudyFigure
          src="/images/rbac-governance/c1_permission_architecture.svg"
          alt="Permission architecture aligned to least-privilege governance"
          caption="Governance architecture aligned to least-privilege principles"
        />
      }
    >
      <CaseStudySection heading="Situation">
        <p>
          As the Open Banking platform expanded, access management workflows had
          not evolved alongside system complexity and security risk.
        </p>
        <p>
          Role hierarchy lacked structural safeguards to ensure continuity of
          ownership. When administrators left projects or roles changed, access
          permissions could become misaligned or orphaned, creating operational
          delays and requiring manual recovery through platform support.
        </p>
        <p>
          The system relied heavily on users remembering governance best practices
          rather than embedding safeguards directly into the product experience.
        </p>
        <p>
          This created risk exposure and introduced unnecessary friction for
          teams managing secure API projects.
        </p>
      </CaseStudySection>
      <CaseStudyFigure
        src="/images/rbac-governance/c5_decision_tradeoffs.svg"
        alt="Tradeoffs between team autonomy and security continuity in governance"
        caption="Governance tradeoffs required balancing autonomy with security continuity"
      />
      <CaseStudySection heading="Task">
        <p>
          As the embedded product designer working with platform engineering,
          security stakeholders, and product leadership, I was responsible for
          designing a scalable permissions model aligned with least-privilege
          principles.
        </p>
        <p>
          The system needed to prevent administrative lockouts, maintain
          continuity of ownership, and enable teams to manage access
          independently without increasing operational risk.
        </p>
        <p>
          The design also needed to communicate governance logic clearly so users
          could confidently manage permissions without external support.
        </p>
      </CaseStudySection>
      <CaseStudyFigure
        src="/images/rbac-governance/c2_role_matrix.svg"
        alt="Role matrix defining authority boundaries and ownership continuity"
        caption="Role matrix clarified authority boundaries and ownership continuity"
      />
      <CaseStudySection heading="Action">
        <p>
          I began by auditing existing permission workflows and reviewing support
          escalation patterns related to access management issues. Analysis
          revealed that the core problem was structural rather than visual:
          governance logic had not been encoded directly into the product
          experience.
        </p>
        <p>
          I reframed the problem from interface design to security architecture
          expressed through interaction design.
        </p>
        <CaseStudyFigure
          src="/images/rbac-governance/c3_edge_case_logic_flow.svg"
          alt="Logic flow for access continuity across role transitions"
          caption="Edge case logic ensured continuity of access across role transitions"
        />
        <p>
          Working closely with engineering and security partners, I designed a
          tiered RBAC model with clearly scoped authority levels:
        </p>
        <ul>
          <li>Owners maintained full governance responsibility.</li>
          <li>
            Admins managed operational configuration with constrained authority.
          </li>
          <li>
            Developers received limited or read-only permissions aligned with
            implementation needs.
          </li>
        </ul>
        <CaseStudyFigure
          src="/images/rbac-governance/c4_component_patterns.svg"
          alt="UI component patterns for permission scope and governance"
          caption="Component patterns communicated permission scope and governance responsibility"
        />
        <p>
          To reduce single points of failure, I introduced guardrails requiring
          at least two administrators per project. If a project approached an
          administrative risk threshold, the system surfaced proactive prompts
          encouraging assignment of backup administrators.
        </p>
        <p>
          Interaction patterns were tested through task-based usability studies
          to ensure users could confidently assign, modify, and audit permissions
          without external guidance.
        </p>
        <p>
          Design documentation included role definitions, escalation logic, and
          edge cases to ensure long-term governance continuity.
        </p>
      </CaseStudySection>
      <CaseStudySection heading="Result">
        <p>
          The RBAC system eliminated orphaned project scenarios by embedding
          administrative redundancy directly into the product logic.
        </p>
        <p>
          Support escalations related to access continuity decreased as teams
          were able to manage permissions independently and safely.
        </p>
        <p>
          The platform achieved stronger least-privilege enforcement while
          maintaining operational flexibility for growing teams.
        </p>
        <p>
          Most importantly, governance became preventative rather than reactive,
          enabling the platform to scale securely without increasing coordination
          overhead.
        </p>
        <CaseStudyFigure
          src="/images/rbac-governance/c6_impact_summary.svg"
          alt="Summary of governance impact on support and platform resilience"
          caption="Preventative governance reduced support escalations and strengthened platform resilience"
        />
      </CaseStudySection>
    </CaseStudy>
  );
}
