import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingDialog } from "./BookingDialog";
import { Bubbles } from "./Atoms";
import heroImage from "@/assets/hero-diver.jpg";

export function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setOffset(window.scrollY));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  const clamped = Math.min(offset, 800);

  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-abyss light-rays">
      <img
        src={heroImage}
        alt="A diver descending through dark water wearing a closed-circuit rebreather system"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover opacity-70"
        style={{ transform: `translate3d(0, ${clamped * 0.18}px, 0) scale(1.08)` }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(100deg,var(--abyss)_18%,transparent_75%)]" />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-[linear-gradient(to_bottom,transparent,var(--abyss))]" />
      <Bubbles count={22} />

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-5 pt-32 pb-28 sm:px-8">
        <div
          className="max-w-2xl"
          style={{ transform: `translate3d(0, ${clamped * -0.06}px, 0)`, opacity: 1 - clamped / 900 }}
        >
          <p className="label-mono animate-fade-in">Student Innovation Project</p>
          <h1 className="mt-6 font-display text-4xl leading-[1.05] font-bold sm:text-6xl lg:text-7xl">
            SCUBA DIVER
            <br />
            <span className="text-cyan">REBREATHER</span>
          </h1>
          <p className="mt-6 font-display text-lg tracking-[0.22em] text-offwhite/90 sm:text-xl">
            GO BEYOND THE SURFACE.
          </p>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
            &ldquo;Discover a smarter perspective on underwater exploration.&rdquo;
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button variant="dive" size="xl" asChild>
              <a href="#rebreather">Explore the Rebreather</a>
            </Button>
            <BookingDialog>
              <Button variant="depth" size="xl">
                Book Training
              </Button>
            </BookingDialog>
          </div>
        </div>

        <div className="absolute inset-x-5 bottom-8 flex items-end justify-between sm:inset-x-8">
          <a
            href="#rebreather"
            className="group flex items-center gap-3 font-display text-[0.68rem] tracking-[0.3em] text-cyan"
          >
            <ChevronDown className="size-4 animate-bounce" />
            SCROLL TO DIVE
          </a>
          <div className="text-right">
            <p className="font-display text-3xl font-semibold text-offwhite/80">0M</p>
            <p className="label-mono mt-1 text-muted-foreground">Depth</p>
          </div>
        </div>
      </div>
    </section>
  );
}
