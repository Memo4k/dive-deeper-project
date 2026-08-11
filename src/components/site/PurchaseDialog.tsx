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

const FEATURES = ["Gas recycling", "CO₂ removal", "Oxygen management", "Monitoring"];

export function PurchaseDialog({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<"details" | "form">("details");

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        setOpen(v);
        if (!v) setStep("details");
      }}
    >
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="glass-panel max-h-[85vh] max-w-lg overflow-y-auto rounded-none">
        <DialogHeader>
          <p className="label-mono">Prototype purchase flow</p>
          <DialogTitle className="font-display text-2xl tracking-wide">
            SCUBA DIVER REBREATHER
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Student Project Prototype
          </DialogDescription>
        </DialogHeader>

        {step === "details" ? (
          <div className="mt-2 space-y-6">
            <ul className="space-y-3 border-t border-cyan/10 pt-5">
              {FEATURES.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-offwhite/85">
                  <span className="size-1.5 shrink-0 bg-cyan" aria-hidden />
                  {f}
                </li>
              ))}
            </ul>

            <p className="border-l-2 border-coral/70 pl-3 text-xs leading-relaxed text-muted-foreground">
              Student Project Prototype — No real payment is processed.
            </p>

            <Button variant="dive" className="w-full" onClick={() => setStep("form")}>
              ADD TO CART
            </Button>
          </div>
        ) : (
          <form
            className="mt-2 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              setOpen(false);
              setStep("details");
              toast.success("Request recorded in this prototype", {
                description: "No payment was taken — this is a student project demo.",
              });
            }}
          >
            <div className="space-y-2">
              <Label htmlFor="pu-name">Full name</Label>
              <Input id="pu-name" required placeholder="Your full name" className="rounded-none" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="pu-email">Email</Label>
              <Input
                id="pu-email"
                type="email"
                required
                placeholder="you@example.com"
                className="rounded-none"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="pu-qty">Quantity</Label>
              <Input
                id="pu-qty"
                type="number"
                min={1}
                max={10}
                defaultValue={1}
                required
                className="rounded-none"
              />
            </div>

            <p className="border-l-2 border-coral/70 pl-3 text-xs leading-relaxed text-muted-foreground">
              Student Project Prototype — No real payment is processed.
            </p>

            <div className="flex gap-3">
              <Button
                type="button"
                variant="depth"
                className="flex-1"
                onClick={() => setStep("details")}
              >
                BACK
              </Button>
              <Button type="submit" variant="dive" className="flex-1">
                SUBMIT REQUEST
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
