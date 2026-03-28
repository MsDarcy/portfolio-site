import type { Metadata } from "next";
import { CaseStudy, CaseStudySection } from "@/components/CaseStudy";

export const metadata: Metadata = {
  title: "RBAC & Governance",
  description:
    "A permissions model balancing clarity, security, and operational flexibility.",
};

export default function RbacGovernancePage() {
  return (
    <CaseStudy title="RBAC & Governance">
      <CaseStudySection heading="Overview">
        <p>
          This project centered on designing a permissions model that balanced
          clarity, security, and operational flexibility.
        </p>
      </CaseStudySection>
      <CaseStudySection heading="Problem">
        <p>
          Permissions and project ownership structures were not clearly defined,
          creating confusion, support overhead, and governance risk.
        </p>
      </CaseStudySection>
      <CaseStudySection heading="Role">
        <p>
          I led the design of the role structure and supporting experience, working
          with cross-functional partners to ensure the model aligned with real user
          needs and organizational requirements.
        </p>
      </CaseStudySection>
      <CaseStudySection heading="Constraints">
        <p>
          The design needed to support least-privilege access, avoid operational dead
          ends, and account for edge cases around project ownership and
          administration.
        </p>
      </CaseStudySection>
      <CaseStudySection heading="Approach">
        <p>
          I helped define a clearer tiered role model and structured the experience to
          make responsibilities, limitations, and safeguards easier to understand.
          Special attention was given to reducing ambiguity and preventing governance
          issues such as orphaned ownership.
        </p>
      </CaseStudySection>
      <CaseStudySection heading="Outcome">
        <p>
          The final model improved clarity, supported stronger governance, and reduced
          friction for both users and internal support teams.
        </p>
      </CaseStudySection>
    </CaseStudy>
  );
}
