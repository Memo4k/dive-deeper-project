import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingDialog } from "./BookingDialog";
import { cn } from "@/lib/utils";

const LINKS = [
  { label: "THE REBREATHER", href: "#rebreather" },
  { label: "HOW IT WORKS", href: "#how-it-works" },
  { label: "TRAINING", href: "#training" },
  { label: "DEVICE", href: "#device" },
  { label: "OUR LENSES", href: "#lenses" },
  { label: "PROJECT", href: "#project" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-cyan/15 bg-abyss/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8"
      >
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <span className="h-2 w-2 shrink-0 rounded-full bg-cyan shadow-[var(--shadow-glow)]" />
          <span className="truncate font-display text-sm font-semibold tracking-[0.22em] sm:text-base">
            SCUBA DIVER REBREATHER
          </span>
        </a>

        <div className="hidden items-center gap-7 xl:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-display text-[0.68rem] tracking-[0.2em] text-muted-foreground transition-colors hover:text-cyan"
            >
              {l.label}
            </a>
          ))}
          <BookingDialog>
            <Button variant="dive" size="sm">
              Book Training
            </Button>
          </BookingDialog>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 shrink-0 place-items-center border border-cyan/25 text-cyan xl:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-cyan/10 bg-abyss/95 px-5 pb-6 backdrop-blur-xl xl:hidden">
          <ul className="flex flex-col">
            {LINKS.map((l) => (
              <li key={l.href} className="border-b border-cyan/10">
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 font-display text-xs tracking-[0.22em] text-offwhite"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <BookingDialog>
            <Button variant="dive" className="mt-6 w-full">
              Book Training
            </Button>
          </BookingDialog>
        </div>
      )}
    </header>
  );
}
