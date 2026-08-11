import { Reveal, Section, SectionHeading, Bubbles } from "./Atoms";

const CYCLE = [
  { step: "BREATHE", note: "The diver inhales from a closed loop." },
  { step: "CO₂ REMOVAL", note: "Exhaled gas passes through a scrubber material." },
  { step: "O₂ MANAGEMENT", note: "Oxygen consumed by the body is replenished." },
  { step: "RECIRCULATION", note: "The conditioned gas returns to the loop." },
  { step: "BREATHE AGAIN", note: "The cycle repeats instead of venting to the sea." },
];

export function WhyRebreather() {
  return (
    <Section id="rebreather" className="depth-fade light-rays overflow-hidden">
      <Bubbles count={10} />
      <div className="relative grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-start">
        <div>
          <SectionHeading index="Section 01" title="WHY REBREATHER?" subtitle="Breathe differently." />
          <Reveal delay={100} className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              A conventional open-circuit scuba set releases every exhaled breath into the water.
              Most of that gas is never used by the body — it simply leaves as bubbles.
            </p>
            <p>
              A rebreather takes a different approach. It keeps the breathing gas inside a closed
              loop: exhaled gas is passed through a material that removes carbon dioxide, oxygen is
              managed and topped up, and the conditioned gas is returned to the diver.
            </p>
            <p>
              The result is a quieter, more efficient way to spend time underwater. This page
              explains the concept at a high level for our project presentation — it is not an
              operating guide.
            </p>
          </Reveal>
        </div>

        <Reveal delay={200} className="glass-panel relative p-6 sm:p-10">
          <p className="label-mono">The gas cycle</p>
          <ol className="mt-8 space-y-0">
            {CYCLE.map((c, i) => (
              <li key={c.step} className="relative pl-10">
                <span className="absolute top-1.5 left-0 grid size-6 place-items-center rounded-full border border-cyan/40 font-display text-[0.6rem] text-cyan">
                  {i + 1}
                </span>
                {i < CYCLE.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute top-9 left-3 h-[calc(100%-1.5rem)] w-px border-l border-dashed border-cyan/40"
                    style={{ animation: "soft-pulse 3.5s ease-in-out infinite", animationDelay: `${i * 0.4}s` }}
                  />
                )}
                <p className="font-display text-sm tracking-[0.2em] text-offwhite">{c.step}</p>
                <p className="mt-1 pb-8 text-sm text-muted-foreground">{c.note}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </Section>
  );
}

const STAGES = [
  {
    depth: "0M",
    title: "THE PROBLEM",
    body: "Open-circuit diving wastes most of the gas a diver carries, limits time underwater, and fills the water with noise and bubbles that disturb marine life.",
  },
  {
    depth: "10M",
    title: "THE IDEA",
    body: "What if the breathing loop were closed? Reuse the gas, remove what the body doesn't want, and replace only what it actually consumes.",
  },
  {
    depth: "20M",
    title: "HOW IT WORKS",
    body: "A scrubber captures carbon dioxide, monitoring keeps track of the loop, and oxygen is added to maintain a breathable mixture — conceptually simple, carefully engineered.",
  },
  {
    depth: "30M",
    title: "OUR SOLUTION",
    body: "We approached the challenge through three lenses: a web experience, an embedded monitoring concept, and non-technical preparation such as checklists and training.",
  },
];

export function DiveJourney() {
  return (
    <Section id="journey" className="relative bg-abyss">
      <SectionHeading index="Section 02" title="THE DIVE JOURNEY" subtitle="The deeper you go, the more you discover." />
      <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
        Depth values below are storytelling markers for this presentation — they are not diving
        recommendations.
      </p>

      <ol className="relative mt-16 space-y-16 border-l border-cyan/20 pl-6 sm:pl-12">
        {STAGES.map((s, i) => (
          <Reveal as="li" key={s.depth} delay={i * 80} className="relative">
            <span
              aria-hidden
              className="absolute top-2 -left-[1.65rem] size-2 rounded-full bg-cyan sm:-left-[3.15rem]"
              style={{ animation: "soft-pulse 4s ease-in-out infinite", animationDelay: `${i * 0.5}s` }}
            />
            <div className="grid gap-4 sm:grid-cols-[7rem_1fr] sm:gap-10">
              <p className="font-display text-3xl font-semibold text-cyan/80">{s.depth}</p>
              <div
                className="border-l-2 border-cyan/20 pl-5"
                style={{ backgroundColor: `color-mix(in oklab, var(--deep) ${i * 14}%, transparent)` }}
              >
                <h3 className="font-display text-xl tracking-[0.16em] text-offwhite">{s.title}</h3>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

const STEPS = [
  { n: "01", t: "BREATHE", d: "The diver breathes from a sealed loop rather than from the open water." },
  { n: "02", t: "CO₂ REMOVAL", d: "Exhaled gas travels to a scrubber that absorbs carbon dioxide." },
  { n: "03", t: "O₂ MANAGEMENT", d: "The system maintains a breathable oxygen level in the loop." },
  { n: "04", t: "RECIRCULATION", d: "Conditioned gas flows back toward the diver through the loop." },
  { n: "05", t: "BREATHE AGAIN", d: "The cycle repeats, making far more use of the gas carried." },
];

export function HowItWorks() {
  return (
    <Section id="how-it-works" className="depth-fade light-rays overflow-hidden">
      <Bubbles count={8} />
      <SectionHeading index="Section 03" title="HOW IT WORKS" subtitle="A closed loop, conceptually" align="center" />

      <div className="relative mt-16 grid gap-4 md:grid-cols-5">
        <svg
          aria-hidden
          className="pointer-events-none absolute top-8 right-0 left-0 hidden h-px w-full md:block"
          preserveAspectRatio="none"
        >
          <line
            x1="0"
            y1="0.5"
            x2="100%"
            y2="0.5"
            stroke="var(--cyan)"
            strokeOpacity="0.4"
            strokeDasharray="6 6"
            style={{ animation: "flow-dash 1.6s linear infinite" }}
          />
        </svg>

        {STEPS.map((s, i) => (
          <Reveal
            key={s.n}
            delay={i * 90}
            className="group glass-panel relative p-6 transition-colors hover:border-cyan/50"
          >
            <span className="relative z-10 grid size-9 place-items-center rounded-full border border-cyan/40 bg-abyss font-display text-xs text-cyan transition-shadow group-hover:shadow-[var(--shadow-glow)]">
              {s.n}
            </span>
            <h3 className="mt-5 font-display text-sm tracking-[0.18em] text-offwhite">{s.t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
          </Reveal>
        ))}
      </div>
      <p className="mt-10 text-center text-xs text-muted-foreground">
        High-level educational overview only — not operating instructions.
      </p>
    </Section>
  );
}
