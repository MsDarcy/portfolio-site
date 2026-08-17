import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Senior product designer bridging art, empathy, and engineering—Open Banking, platforms, and craft.",
};

export default function AboutPage() {
  return (
    <main className="about-page">
      <section id="my-story" className="about-hero">
        <p className="about-section-label">Senior Product Designer</p>
        <div className="about-prose">
          <p>I've always had an eye before I had a title for it.</p>
          <p>
            In the early 2000s, I was selected for a city-funded arts project and
            helped build a DVD that premiered at the Bellevue Art Museum, recognized
            by the Mayor of Kent. I hadn&apos;t taken a single art class yet. That
            came that fall, at Green River through Running Start, in the same stretch
            of years I graduated from college one day before I graduated high school.
          </p>
          <p>
            That instinct for making things, clear, considered, worth looking at, is
            the same instinct that, years later, would click into place the moment I
            sat in on a user research study at F5 Networks. I was working as a web
            developer at the time, watching someone struggle through a task I&apos;d
            helped build. Something clicked. It wasn&apos;t just &quot;this is
            broken.&quot; It was the realization that understanding why something is
            broken is its own discipline, and it was the one I actually wanted to
            practice.
          </p>
          <p>
            But that clarity came after a fairly winding road to get there.
          </p>
          <p>
            At 25, after leading an arts co-op with international artists in Taipei, I
            took a ferry to mainland China and landed in Shanghai, where I interned at
            a government-run art museum, translating materials in the education
            department and, at one point, leading a tour for expats. I applied to grad
            school from there. The applications were rejected, not for merit, but
            because my identity was stolen and the payments never went through. I
            moved back to the U.S. dejected, into a recession-era job market that
            meant years in customer service before I found my way into tech.
          </p>
          <p>
            I started in development. It was there, building things, then later
            watching that research study at F5, that I realized art school not
            working out didn&apos;t mean design wasn&apos;t mine to have. I found my
            footing at the intersection of engineering, customer experience, and
            craft: not choosing between the analytical and the artistic, but building
            a career at the place where they overlap.
          </p>
        </div>
      </section>

      <section
        id="ways-of-working"
        className="about-section about-page__block about-page__block--ruled"
        aria-labelledby="ways-of-working-heading"
      >
        <h2 id="ways-of-working-heading" className="about-contact__title">
          Ways of Working
        </h2>
        <div className="about-prose">
          <p>I think of my background as three lenses:</p>
          <p>
            <strong className="about-strong">The art lens</strong> — Composition,
            tension, emotional resonance. I notice when something feels off by two
            pixels, and I care about the details most people won&apos;t consciously
            register but will absolutely feel.
          </p>
          <p>
            <strong className="about-strong">The empathy lens</strong> — Years in
            customer service taught me that users aren&apos;t edge cases to be
            handled; they&apos;re people having a bad day who just want something to
            work. I design for them first.
          </p>
          <p>
            <strong className="about-strong">The engineering lens</strong> — My dev
            background means I think about constraints and implementation from the
            start, not as an afterthought. I discuss technical tradeoffs early,
            optimize for clean handoffs, and speak fluently with engineers about
            what&apos;s feasible and what&apos;s worth fighting for.
          </p>
          <p>
            This means I bridge the gap between design and engineering—not by writing
            production code, but by designing with real-world constraints baked in
            from day one.
          </p>
        </div>
      </section>

      <section
        id="career-highlights"
        className="about-section about-page__block about-page__block--ruled"
        aria-labelledby="career-highlights-heading"
      >
        <h2 id="career-highlights-heading" className="about-contact__title">
          Career Highlights
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
            Doom Pile Destroyer, an AI chat companion app that helps people break down
            overwhelming clutter and task paralysis into manageable steps. I&apos;m
            using it to stay hands-on with LLM integration, prompt design, and
            shipping a real product end-to-end.
          </p>
          <p>
            It lives under BlueRose Imaginarium, my personal label for side projects.
            The name&apos;s a nod to Twin Peaks&apos; impossible cases and Terry
            Gilliam&apos;s Imaginarium felt right for work that sits at the edge of
            practical and a little strange.
          </p>
          <h3 className="about-subhead">Rewatching</h3>
          <p>
            Twin Peaks, for the third (fourth?) time. Still noticing new details.
            Still unsettled by that ceiling fan. The owls are not what they seem.
          </p>
          <h3 className="about-subhead">Watching</h3>
          <p>
            Mr Ballen and The Why Files on YouTube. Strange-but-true stories and deep
            dives into the unexplained—the perfect wind-down after a day of making
            interfaces make sense.
          </p>
          <h3 className="about-subhead">Exploring</h3>
          <p>
            The trails around Capital Forest in Olympia. Nothing resets my brain like
            a few hours in the woods where the cell signal dies and the only
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
          I&apos;m exploring senior product design roles, especially teams that value
          craft, collaboration, and a little bit of weirdness.
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
