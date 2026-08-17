import type { Metadata } from "next";
import { CaseStudy, CaseStudySection } from "@/components/CaseStudy";
import { CaseStudyFigure } from "@/components/CaseStudyFigure";

export const metadata: Metadata = {
  title: "PolicyGap",
  description:
    "An AI-assisted tool that reads a real insurance policy and explains it in plain language.",
};

export default function PolicyGapInsurePage() {
  return (
    <CaseStudy
      className="case-study--wide"
      sectionsClassName="case-study__sections--artifacts"
      title="PolicyGap — Plain-Language Insurance Coverage Clarity"
      summary="Designed and built an AI-assisted tool that reads an insurance policy and explains it in plain language — what it covers, what it doesn't, the deductible, how to file a claim, and whether coverage is adequate — without ever recommending a product, agent, or upsell."
      subtitle={
        <>
          <p>Personal Product · AI-Assisted Document Understanding</p>
          <p>Consumer B2C</p>
        </>
      }
    >
      <CaseStudySection heading="Situation">
        <p>
          The idea came directly out of lived experience — working as a temp in an
          insurance office while studying for my P&amp;C license. I watched how
          genuinely confusing policy documents are for the people who actually hold
          them. Coverage language is written for adjusters and agents, not the person
          paying the premium, and most consumers have no simple way to answer basic
          questions about their own policy without calling someone whose job is, at
          least partly, to sell them something.
        </p>
        <p>
          That gap — a policyholder wanting a plain answer, without a sales
          conversation attached — didn&apos;t have a neutral tool built for it.
        </p>
      </CaseStudySection>
      <CaseStudySection heading="Task">
        <p>
          Design and build, end-to-end, a tool that takes a real insurance policy
          — however messy the source — and returns a clear, honest answer to the
          five questions that actually matter to a policyholder: coverage area,
          what&apos;s covered, what&apos;s not, the deductible, and how to file a
          claim. It also needed to tell someone whether their coverage looked
          adequate, at minimum, or more than sufficient — without ever crossing
          into recommending a specific policy, product, or agent.
        </p>
      </CaseStudySection>
      <CaseStudyFigure
        src="/images/policygap/b2_five_field_output.png"
        alt="Five-field structured output with a plain-language adequacy read"
        caption="A fixed five-field structure, plus a plain-language adequacy read."
      />
      <CaseStudySection heading="Action">
        <p>
          Working solo, I owned research, information architecture, UI design, prompt
          design, and front-end build.
        </p>
        <p>
          Domain research came first. Time spent in an actual insurance office and
          studying licensing material directly shaped which fields mattered — the
          five-point structure isn&apos;t arbitrary, it&apos;s what policyholders
          actually ask about, filtered from what&apos;s mostly noise to a
          layperson.
        </p>
        <p>
          Input flexibility was a deliberate accessibility decision. Not everyone
          has a clean PDF of their policy — many people only have a photo of a
          mailed paper copy. Supporting both photo upload and pasted text meant the
          tool worked for how people actually hold their documents, not just the
          ideal case.
        </p>
        <CaseStudyFigure
          src="/images/policygap/b1_dual_input_model.png"
          alt="Two flexible input paths feeding one AI extraction step"
          caption="Two equally supported input paths feed one structured extraction step."
        />
        <p>
          Trust required a restraint principle, held firm. Because financial and
          legal understanding is high-stakes, I made an early product decision to
          never surface a recommendation, agent referral, or policy suggestion in
          the output — only an explanation of what the person already has. That
          boundary is the entire reason the tool can be trusted to give a neutral
          read rather than a sales funnel wearing a helpful mask.
        </p>
        <p>
          Trust also required saying the boundary out loud, not just building it
          in. I wrote explicit, visible language on the site stating that PolicyGap
          is an education tool, not a lead generator — it is not selling anything,
          is not affiliated with any agent or insurer, and its output should not be
          used as the basis for a financial decision. That disclosure protects the
          person using it from over-trusting an AI-generated summary, and protects
          the integrity of the tool itself from ever being mistaken for a sales
          channel.
        </p>
        <CaseStudyFigure
          src="/images/policygap/b4_trust_boundary_model.png"
          alt="Trust boundary diagram showing excluded features that build trust"
          caption="What the product deliberately excludes is what makes it trustworthy."
        />
        <p>
          AI extraction demanded transparency, not black-box confidence. Because
          the tool interprets real policy language via the Gemini API, the
          interface is designed so the output reads as an explanation grounded in
          the source document, not an authoritative verdict — each extracted field
          carries a confidence signal, encouraging the person to verify
          low-confidence fields against their actual policy rather than treat the
          summary as a replacement for it.
        </p>
        <CaseStudyFigure
          src="/images/policygap/b3_confidence_signal_model.png"
          alt="Confidence signal model showing high-confidence vs. please-verify fields"
          caption="Every field carries a confidence signal instead of implied certainty."
        />
        <p>
          Built and shipped independently, using Claude and Cursor for development
          and Vercel for deployment — full-stack ownership from concept to live
          product.
        </p>
      </CaseStudySection>
      <CaseStudySection heading="Result">
        <p>
          PolicyGap v1 is live at{" "}
          <a href="https://policygap.insure">policygap.insure</a> and gathering its
          first users and real-world feedback.
        </p>
        <p>
          Try it yourself with a real policy — a photo or pasted text is all it
          takes — and if you have feedback, I&apos;d genuinely like to hear it.
          Find me on{" "}
          <a
            href="https://www.linkedin.com/in/darcymccabe"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          .
        </p>
      </CaseStudySection>
    </CaseStudy>
  );
}
