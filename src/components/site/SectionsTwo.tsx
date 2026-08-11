import { useState } from "react";
import { Code2, Cpu, ClipboardCheck } from "lucide-react";
import { Reveal, Section, SectionHeading } from "./Atoms";
import deviceImage from "@/assets/device.jpg";

const HOTSPOTS = [
  {
    id: "circulation",
    label: "Gas circulation",
    x: 32,
    y: 34,
    text: "The breathing loop carries gas away from and back to the diver, keeping it inside the system instead of venting it.",
  },
  {
    id: "scrubber",
    label: "CO₂ removal",
    x: 47,
    y: 58,
    text: "A scrubber section holds material that absorbs the carbon dioxide produced by the body.",
  },
  {
    id: "oxygen",
    label: "Oxygen management",
    x: 70,
    y: 62,
    text: "Oxygen consumed during the dive is replenished so the loop stays breathable.",
  },
  {
    id: "monitoring",
    label: "Monitoring",
    x: 38,
    y: 52,
    text: "A display concept surfaces the state of the loop to the diver in a simple, readable way.",
  },
  {
    id: "sensors",
    label: "Sensors",
    x: 22,
    y: 66,
    text: "Sensing elements are the conceptual input for monitoring and alerts in our embedded-systems lens.",
  },
];

export function MeetTheSystem() {
  const [active, setActive] = useState(HOTSPOTS[0]!.id);
  const current = HOTSPOTS.find((h) => h.id === active)!;

  return (
    <Section id="system" className="bg-abyss">
      <SectionHeading index="Section 04" title="MEET THE REBREATHER" subtitle="A conceptual system view" />
      <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
        The visual below is a generic, illustrative representation created for this student project.
        It is not a real manufactured product.
      </p>

      <div className="mt-14 grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-center">
        <Reveal className="relative overflow-hidden border border-cyan/15">
          <img
            src={deviceImage}
            alt="Illustrative rendering of a generic closed-circuit rebreather system"
            width={1280}
            height={1280}
            loading="lazy"
            className="w-full object-cover"
          />
          {HOTSPOTS.map((h) => (
            <button
              key={h.id}
              type="button"
              onClick={() => setActive(h.id)}
              aria-label={h.label}
              aria-pressed={active === h.id}
              className="absolute grid size-7 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-cyan/60 bg-abyss/70 backdrop-blur transition-all hover:scale-110"
              style={{ left: `${h.x}%`, top: `${h.y}%` }}
            >
              <span
                className="size-2 rounded-full bg-cyan"
                style={{ animation: active === h.id ? "soft-pulse 2s ease-in-out infinite" : undefined }}
              />
            </button>
          ))}
        </Reveal>

        <Reveal delay={120}>
          <ul className="flex flex-wrap gap-2">
            {HOTSPOTS.map((h) => (
              <li key={h.id}>
                <button
                  type="button"
                  onClick={() => setActive(h.id)}
                  className={`border px-4 py-2 font-display text-[0.66rem] tracking-[0.18em] uppercase transition-colors ${
                    active === h.id
                      ? "border-cyan bg-cyan/10 text-cyan"
                      : "border-cyan/20 text-muted-foreground hover:text-offwhite"
                  }`}
                >
                  {h.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="glass-panel mt-6 p-7">
            <p className="label-mono">{current.label}</p>
            <p className="mt-4 text-base leading-relaxed text-offwhite/90">{current.text}</p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

const LENSES = [
  {
    n: "01",
    icon: Code2,
    title: "WEB DEVELOPMENT",
    tagline: "Our digital gateway to the project.",
    items: ["Project information", "Training booking", "Device exploration", "Educational experience"],
    accent: "var(--cyan)",
  },
  {
    n: "02",
    icon: Cpu,
    title: "EMBEDDED SYSTEMS",
    tagline: "Technology inside the system.",
    items: ["Monitoring", "Sensors", "Alerts", "System feedback"],
    accent: "var(--teal)",
  },
  {
    n: "03",
    icon: ClipboardCheck,
    title: "NO TECHNOLOGY REQUIRED",
    tagline: "Because not every problem needs technology.",
    items: ["Training procedures", "Checklists", "Safety routines", "Communication"],
    accent: "var(--coral)",
  },
];

export function ThreeLenses() {
  return (
    <Section id="lenses" className="depth-fade">
      <SectionHeading index="Section 05" title="THREE LENSES. ONE PROJECT." align="center" />
      <div className="mt-16 grid gap-6 lg:grid-cols-3">
        {LENSES.map((l, i) => (
          <Reveal
            key={l.n}
            delay={i * 120}
            as="article"
            className="group relative flex flex-col border border-cyan/15 bg-mid/30 p-8 transition-transform duration-500 hover:-translate-y-2"
          >
            <span
              aria-hidden
              className="absolute inset-x-0 top-0 h-px"
              style={{ background: l.accent }}
            />
            <div className="flex items-center justify-between">
              <l.icon className="size-6" style={{ color: l.accent }} />
              <span className="font-display text-4xl font-bold text-offwhite/10">{l.n}</span>
            </div>
            <h3 className="mt-8 font-display text-xl tracking-[0.12em] text-offwhite">{l.title}</h3>
            <p className="mt-3 text-sm italic text-muted-foreground">&ldquo;{l.tagline}&rdquo;</p>
            <ul className="mt-7 space-y-3 border-t border-cyan/10 pt-6">
              {l.items.map((it) => (
                <li key={it} className="flex items-center gap-3 text-sm text-offwhite/85">
                  <span className="size-1.5 shrink-0" style={{ background: l.accent }} />
                  {it}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
