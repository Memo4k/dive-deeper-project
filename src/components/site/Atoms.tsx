import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Fade + slide reveal on scroll. */
export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article" | "header";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Component = Tag as React.ElementType;

  return (
    <Component
      ref={ref as never}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", shown && "reveal-in", className)}
    >
      {children}
    </Component>
  );
}


/** Slow rising bubbles / suspended particles. */
export function Bubbles({ count = 18, className }: { count?: number; className?: string }) {
  const bubbles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: (i * 97) % 100,
        size: 2 + ((i * 13) % 7),
        duration: 18 + ((i * 7) % 22),
        delay: -((i * 5) % 30),
        drift: ((i % 5) - 2) * 18,
      })),
    [count],
  );

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      {bubbles.map((b) => (
        <span
          key={b.id}
          className="absolute bottom-0 rounded-full bg-cyan/30"
          style={{
            left: `${b.left}%`,
            width: b.size,
            height: b.size,
            ["--drift" as string]: `${b.drift}px`,
            animation: `rise ${b.duration}s linear ${b.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

export function SectionHeading({
  index,
  title,
  subtitle,
  align = "left",
}: {
  index?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {index && <p className="label-mono mb-4">{index}</p>}
      <h2 className="text-3xl leading-[1.1] font-semibold sm:text-4xl lg:text-5xl">{title}</h2>
      {subtitle && (
        <p className="text-teal mt-4 font-display text-sm tracking-[0.28em] uppercase">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}

export function Section({
  id,
  children,
  className,
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("relative px-5 py-24 sm:px-8 lg:py-32", className)}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}
