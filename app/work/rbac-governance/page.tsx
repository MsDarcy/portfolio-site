import type { Metadata } from "next";
import { CaseStudy, CaseStudySection } from "@/components/CaseStudy";

export const metadata: Metadata = {
  title: "Enterprise Governance & RBAC",
  description:
    "A tiered permissions model with built-in safeguards for an Open Banking developer platform.",
};

export default function RbacGovernancePage() {
  return (
    <CaseStudy
      title="Enterprise Governance & Role-Based Access Control (RBAC)"
      subtitle={
        <>
          <p>Banking API for Developer Ecosystem</p>
          <p>Enterprise B2B</p>
        </>
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
      </CaseStudySection>
    </CaseStudy>
  );
}
