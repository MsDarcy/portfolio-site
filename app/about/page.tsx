import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Senior product designer bridging art, empathy, and engineering—Open Banking, platforms, and craft.",
};

export default function AboutPage() {
  return (
    <main className="about-page">
      <header className="about-hero">
        <p className="about-section-label">Senior Product Designer</p>
        <h1 className="about-hero__title">Design shaped by art, empathy, and code.</h1>
        <div className="about-prose">
          <p>
            I&apos;m a product designer with an unusual background: fine arts,
            customer service, and frontend engineering. That combination sounds
            scattered until you realize it&apos;s exactly what product design
            demands—aesthetic judgment, deep user empathy, and the ability to
            speak engineering fluently.
          </p>
          <p>
            I&apos;ve run an arts cooperative, interned at a museum overseas,
            logged years on support calls, and shipped code as a web developer.
            Now I bring all of it to design.
          </p>
        </div>
      </header>

      <section
        className="about-section about-page__block about-page__block--ruled"
        aria-labelledby="about-background-heading"
      >
        <h2 id="about-background-heading" className="about-section-label">
          Background
        </h2>
        <div className="about-bg-grid">
          <div className="about-bg-row">
            <div className="about-bg-place">Taiwan — Arts Cooperative</div>
            <p className="about-bg-copy">
              Co-founded and ran a creative collective. Learned that good ideas
              need operational sustainability—and that leading artists is like
              herding very opinionated cats.
            </p>
          </div>
          <div className="about-bg-row">
            <div className="about-bg-place">Shanghai — Museum Education</div>
            <p className="about-bg-copy">
              Took a ferry across the strait to intern at the Shanghai Art
              Museum. Designed educational programming that made contemporary
              art feel less intimidating and more human.
            </p>
          </div>
          <div className="about-bg-row">
            <div className="about-bg-place">Home — Customer Service</div>
            <p className="about-bg-copy">
              Spent years on the front lines, fielding calls from frustrated
              users. Nothing builds empathy faster than being the person who has
              to say &quot;I understand&quot; and actually mean it.
            </p>
          </div>
          <div className="about-bg-row">
            <div className="about-bg-place">Tech — Web Dev → Design</div>
            <p className="about-bg-copy">
              Broke into tech as a frontend developer. Loved building, but kept
              gravitating toward the &quot;why&quot; behind the
              &quot;what.&quot; Pivoted to design and never looked back.
            </p>
          </div>
        </div>
      </section>

      <section
        className="about-section about-page__block about-page__block--ruled"
        aria-labelledby="about-approach-heading"
      >
        <h2 id="about-approach-heading" className="about-section-label">
          How I work
        </h2>
        <div className="about-prose">
          <p>I think of my background as three lenses:</p>
          <p>
            <strong className="about-strong">The art lens</strong> — Composition,
            tension, emotional resonance. I notice when something feels off by
            two pixels, and I care about the details most people won&apos;t
            consciously register but will absolutely feel.
          </p>
          <p>
            <strong className="about-strong">The empathy lens</strong> — Years in
            customer service taught me that users aren&apos;t edge cases to be
            handled; they&apos;re people having a bad day who just want something
            to work. I design for them first.
          </p>
          <p>
            <strong className="about-strong">The engineering lens</strong> — My
            dev background means I think about constraints and implementation from
            the start, not as an afterthought. I discuss technical tradeoffs early,
            optimize for clean handoffs, and speak fluently with engineers about
            what&apos;s feasible and what&apos;s worth fighting for.
          </p>
          <p>
            This means I bridge the gap between design and engineering—not by
            writing production code, but by designing with real-world constraints
            baked in from day one.
          </p>
        </div>
      </section>

      <section
        className="about-section about-page__block about-page__block--ruled"
        aria-labelledby="about-focus-heading"
      >
        <h2 id="about-focus-heading" className="about-section-label">
          What I focus on
        </h2>
        <ul className="about-bullets">
          <li>Systems thinking and scalable design architecture</li>
          <li>User research that actually informs decisions</li>
          <li>Early constraint mapping and implementation-aware design</li>
          <li>Visual craft and obsessive attention to detail</li>
          <li>Accessible, cross-cultural design</li>
        </ul>
      </section>

      <section
        className="about-section about-page__block about-page__block--ruled"
        aria-labelledby="about-outside-heading"
      >
        <h2 id="about-outside-heading" className="about-section-label">
          Outside of Work
        </h2>
        <div className="about-prose about-prose--tight">
          <h3 className="about-subhead">Building</h3>
          <p>
            Doom Pile Destroyer, an AI chat companion app that helps people break
            down overwhelming clutter and task paralysis into manageable steps.
            I&apos;m using it to stay hands-on with LLM integration, prompt design,
            and shipping a real product end-to-end.
          </p>
          <p>
            It lives under BlueRose Imaginarium, my personal label for side
            projects. The name&apos;s a nod to Twin Peaks&apos; impossible cases
            and Terry Gilliam&apos;s Imaginarium felt right for work that sits at
            the edge of practical and a little strange.
          </p>
          <h3 className="about-subhead">Rewatching</h3>
          <p>
            Twin Peaks, for the third (fourth?) time. Still noticing new details.
            Still unsettled by that ceiling fan. The owls are not what they seem.
          </p>
          <h3 className="about-subhead">Watching</h3>
          <p>
            Mr Ballen and The Why Files on YouTube. Strange-but-true stories and
            deep dives into the unexplained—the perfect wind-down after a day of
            making interfaces make sense.
          </p>
          <h3 className="about-subhead">Exploring</h3>
          <p>
            The trails around Capital Forest in Olympia. Nothing resets my brain
            like a few hours in the woods where the cell signal dies and the only
            decisions are &quot;left fork or right fork.&quot;
          </p>
        </div>
      </section>

      <footer
        className="about-contact about-page__block about-page__block--ruled"
        aria-labelledby="about-contact-heading"
      >
        <h2 id="about-contact-heading" className="about-contact__title">
          Let&apos;s talk
        </h2>
        <p className="about-contact__sub">
          I&apos;m exploring senior product design roles, especially teams that
          value craft, collaboration, and a little bit of weirdness.
        </p>
        <p className="about-contact__email">
          <a href="mailto:ms.darcy.mccabe@gmail.com" className="about-link">
            ms.darcy.mccabe@gmail.com
          </a>
        </p>
        <p className="about-contact__note">Based in the Pacific Northwest ✨</p>
      </footer>
    </main>
  );
}
