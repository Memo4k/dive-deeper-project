import { useState, type ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const SESSIONS = [
  "Session 01 — Introduction",
  "Session 02 — Preparation",
  "Session 03 — Practice",
  "Session 04 — Readiness",
];

export function BookingDialog({
  children,
  defaultSession,
}: {
  children: ReactNode;
  defaultSession?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="glass-panel max-w-lg rounded-none">
        <DialogHeader>
          <p className="label-mono">Prototype form</p>
          <DialogTitle className="font-display text-2xl tracking-wide">
            BOOK A TRAINING SESSION
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            A demonstration booking flow for the SCUBA DIVER REBREATHER student project. No payment
            is processed and no booking is confirmed.
          </DialogDescription>
        </DialogHeader>

        <form
          className="mt-2 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            setOpen(false);
            toast.success("Request recorded in this prototype", {
              description: "No real booking was created — this is a student project demo.",
            });
          }}
        >
          <div className="space-y-2">
            <Label htmlFor="bk-name">Name</Label>
            <Input id="bk-name" required placeholder="Your full name" className="rounded-none" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="bk-email">Email</Label>
            <Input
              id="bk-email"
              type="email"
              required
              placeholder="you@example.com"
              className="rounded-none"
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="bk-session">Preferred session</Label>
              <select
                id="bk-session"
                defaultValue={defaultSession ?? SESSIONS[0]}
                className="border-input bg-mid/50 h-10 w-full border px-3 text-sm outline-none focus:border-cyan"
              >
                {SESSIONS.map((s) => (
                  <option key={s} value={s} className="bg-deep">
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="bk-date">Preferred date</Label>
              <Input id="bk-date" type="date" required className="rounded-none" />
            </div>
          </div>

          <p className="border-l-2 border-coral/70 pl-3 text-xs leading-relaxed text-muted-foreground">
            Note: rebreather diving is a specialised discipline. It requires appropriate
            certification, professional instruction and qualified supervision. This site is
            educational only.
          </p>

          <Button type="submit" variant="dive" className="w-full">
            SUBMIT REQUEST
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
