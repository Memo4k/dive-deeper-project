import { ClipboardList, GraduationCap, ShieldCheck, Radio } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, Section, SectionHeading, Bubbles } from "./Atoms";
import { BookingDialog } from "./BookingDialog";
import { PurchaseDialog } from "./PurchaseDialog";
import deviceImage from "@/assets/device.jpg";

const SESSIONS = [
  { n: "SESSION 01", t: "INTRODUCTION", d: "What a rebreather is, why it exists, and how our project frames the problem." },
  { n: "SESSION 02", t: "PREPARATION", d: "Planning, checklists and the mindset that comes before any water time." },
  { n: "SESSION 03", t: "PRACTICE", d: "Guided, supervised familiarisation with procedures in a controlled setting." },
  { n: "SESSION 04", t: "READINESS", d: "Reviewing routines, communication and decision-making before a dive." },
];

export function Training() {
  return (
    <Section id="training" className="bg-abyss light-rays overflow-hidden">
      <Bubbles count={8} />
      <SectionHeading index="Section 06" title="TRAIN BEFORE YOU DIVE" subtitle="Preparation first" />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {SESSIONS.map((s, i) => (
          <Reveal
            key={s.n}
            delay={i * 90}
            className="glass-panel flex flex-col justify-between p-7 transition-colors hover:border-cyan/50"
          >
            <div>
              <p className="label-mono">{s.n}</p>
              <h3 className="mt-4 font-display text-lg tracking-[0.14em] text-offwhite">{s.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </div>
            <BookingDialog defaultSession={`${s.n.replace("SESSION ", "Session ")} — ${s.t.charAt(0)}${s.t.slice(1).toLowerCase()}`}>
              <button className="mt-8 self-start font-display text-[0.66rem] tracking-[0.24em] text-cyan hover:underline">
                RESERVE →
              </button>
            </BookingDialog>
          </Reveal>
        ))}
      </div>

      <Reveal delay={150} className="mt-12 flex flex-col items-start gap-6 border border-cyan/15 bg-mid/25 p-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
          Specialised rebreather diving requires appropriate certification, professional instruction
          and qualified supervision. These sessions are part of a student project prototype.
        </p>
        <BookingDialog>
          <Button variant="dive" size="xl">
            Book a Training Session
          </Button>
        </BookingDialog>
      </Reveal>
    </Section>
  );
}

const FEATURES = [
  { t: "GAS RECYCLING", d: "Keeps breathing gas within a closed loop instead of releasing it." },
  { t: "CO₂ REMOVAL", d: "A scrubber stage conditions the exhaled gas before it returns." },
  { t: "OXYGEN MANAGEMENT", d: "Maintains a breathable mixture as oxygen is consumed." },
  { t: "MONITORING", d: "A readable status concept so the diver understands the system at a glance." },
];

export function DeviceShowcase() {
  return (
    <Section id="device" className="depth-fade">
      <SectionHeading index="Section 07" title="EXPLORE THE DEVICE" subtitle="Conceptual showcase" />

      <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <Reveal className="relative">
          <div className="absolute inset-6 bg-cyan/10 blur-3xl" aria-hidden />
          <img
            src={deviceImage}
            alt="Conceptual rebreather device shown against deep water"
            width={1280}
            height={1280}
            loading="lazy"
            className="relative w-full border border-cyan/15 object-cover"
          />
        </Reveal>

        <div>
          <div className="grid gap-4 sm:grid-cols-2">
            {FEATURES.map((f, i) => (
              <Reveal
                key={f.t}
                delay={i * 100}
                className="border border-cyan/15 bg-mid/30 p-6 transition-colors hover:border-cyan/45"
              >
                <h3 className="font-display text-sm tracking-[0.16em] text-cyan">{f.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.d}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={220} className="mt-8">
            <PurchaseDialog>
              <Button variant="dive" size="xl">
                Buy the Device
              </Button>
            </PurchaseDialog>
            <p className="mt-4 text-xs text-muted-foreground">
              Student Project Prototype — No real payment is processed.
            </p>

          </Reveal>
        </div>
      </div>
    </Section>
  );
}

const HUMAN = [
  { icon: ClipboardList, t: "CHECKLISTS", d: "A written sequence catches what memory misses, every single time." },
  { icon: GraduationCap, t: "TRAINING", d: "Skill and judgement are built before the equipment is ever needed." },
  { icon: ShieldCheck, t: "SAFETY PROCEDURES", d: "Agreed routines turn a stressful moment into a known response." },
  { icon: Radio, t: "COMMUNICATION", d: "Clear signals between buddies remain the most reliable system underwater." },
];

export function NoTechnology() {
  return (
    <section id="no-tech" className="relative bg-offwhite px-5 py-24 text-abyss sm:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-display text-[0.7rem] tracking-[0.34em] text-teal uppercase">Section 08</p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl leading-[1.12] font-semibold sm:text-4xl lg:text-5xl">
            WHEN TECHNOLOGY STOPS,
            <br />
            PREPARATION CONTINUES.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-abyss/70">
            Part of our solution needs no electronics at all. Habits, written procedures and honest
            communication carry a team through the moments where a device cannot help — and they
            cost nothing but discipline.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-px border border-abyss/10 bg-abyss/10 sm:grid-cols-2 lg:grid-cols-4">
          {HUMAN.map((h, i) => (
            <Reveal key={h.t} delay={i * 90} className="bg-offwhite p-8">
              <h.icon className="size-6 text-teal" />
              <h3 className="mt-6 font-display text-sm tracking-[0.18em]">{h.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-abyss/65">{h.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const PROJECT_CARDS = [
  {
    t: "THE PROBLEM",
    d: "Open-circuit diving limits time underwater, wastes gas and disturbs the environment a diver came to observe.",
  },
  {
    t: "USER NEED",
    d: "Divers and students need a clearer, calmer way to understand closed-circuit breathing before they ever approach the equipment.",
  },
  {
    t: "OUR SOLUTION",
    d: "An educational experience combining a web gateway, an embedded monitoring concept, and non-technical preparation.",
  },
  {
    t: "PROJECT INSIGHTS",
    d: "Working across three lenses showed that the strongest ideas were rarely the most technical ones.",
  },
];

export function ProjectSection() {
  return (
    <Section id="project" className="bg-abyss">
      <SectionHeading index="Section 09" title="OUR PROJECT" subtitle="Summer camp innovation project" />

      <div className="mt-14 grid gap-5 sm:grid-cols-2">
        {PROJECT_CARDS.map((c, i) => (
          <Reveal key={c.t} delay={i * 90} className="glass-panel flex h-full flex-col p-8">
            <h3 className="font-display text-sm tracking-[0.2em] text-cyan">{c.t}</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function FinalCall() {
  return (
    <section className="relative overflow-hidden bg-[var(--abyss)] px-5 py-36 text-center sm:px-8 lg:py-48">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,color-mix(in_oklab,var(--cyan)_10%,transparent),transparent_60%)]"
      />
      <Bubbles count={14} />
      <div className="relative mx-auto max-w-4xl">
        <Reveal>
          <h2 className="font-display text-3xl leading-[1.15] font-semibold sm:text-5xl lg:text-6xl">
            THE SURFACE IS ONLY
            <br />
            <span className="text-cyan">THE BEGINNING.</span>
          </h2>
          <div className="mt-12">
            <Button variant="dive" size="xl" asChild>
              <a href="#rebreather">Explore SCUBA DIVER REBREATHER</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-cyan/12 bg-abyss px-5 py-12 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-center sm:text-left">
        <p className="font-display text-sm font-semibold tracking-[0.24em] text-offwhite">
          SCUBA DIVER REBREATHER
        </p>
        <p className="text-sm text-muted-foreground">Summer Camp Project</p>
        <p className="font-display text-[0.66rem] tracking-[0.22em] text-cyan uppercase">
          Web Development • Embedded Systems • No Technology Required
        </p>
        <p className="mt-2 text-xs text-muted-foreground">
          Educational student prototype. Not commercial diving equipment and not a substitute for
          professional training.
        </p>
      </div>
    </footer>
  );
}
