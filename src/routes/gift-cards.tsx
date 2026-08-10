import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Gift, Heart } from "lucide-react";

export const Route = createFileRoute("/gift-cards")({
  head: () => ({
    meta: [
      { title: "Gift Cards — Boulevard Hair Salon" },
      {
        name: "description",
        content:
          "Feeling spoiled? Buy a Boulevard Hair Salon gift card for someone else or yourself. Redeemable in-salon.",
      },
      { property: "og:title", content: "Gift Cards — Boulevard Hair Salon" },
      { property: "og:description", content: "Give the gift of a great hair day." },
    ],
  }),
  component: GiftCards,
});

const inputClass =
  "w-full border border-border bg-card px-3 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-gold";

function GiftCards() {
  const [recipient, setRecipient] = useState<"other" | "self">("other");
  const [when, setWhen] = useState<"now" | "later">("now");

  return (
    <div className="mx-auto max-w-md px-6 py-14">
      <div className="bg-[oklch(0.87_0.06_30)] px-6 py-10 text-center">
        <h1 className="deco-title text-5xl uppercase leading-[0.95] text-[oklch(0.55_0.11_60)]">
          Feeling
          <br />
          Spoiled
        </h1>
        <p className="mt-4 text-[0.6rem] uppercase tracking-[0.15em] text-[oklch(0.55_0.11_60)]">
          Gift cards can be used in-salon only
          <br />
          not valid for online purchases.
        </p>
      </div>

      <form className="mt-10 space-y-7" onSubmit={(e) => e.preventDefault()}>
        <div>
          <p className="mb-3 text-center text-sm font-medium">Purchase for:</p>
          <div className="grid grid-cols-2 border border-border">
            <Toggle active={recipient === "other"} onClick={() => setRecipient("other")}>
              <Gift className="h-4 w-4" strokeWidth={1.3} /> Someone else
            </Toggle>
            <Toggle active={recipient === "self"} onClick={() => setRecipient("self")}>
              <Heart className="h-4 w-4" strokeWidth={1.3} /> Yourself
            </Toggle>
          </div>
        </div>

        <label className="block">
          <span className="mb-1.5 block text-xs text-muted-foreground">Amount</span>
          <input className={inputClass} placeholder="Enter amount ($25 - $1000)" />
        </label>

        <section>
          <h2 className="mb-4 text-sm font-medium">Your details</h2>
          <div className="grid grid-cols-2 gap-3">
            <Field label="First name">
              <input className={inputClass} placeholder="Required" />
            </Field>
            <Field label="Last name">
              <input className={inputClass} placeholder="Required" />
            </Field>
          </div>
          <div className="mt-3">
            <Field label="Your email (for the receipt)">
              <input type="email" className={inputClass} placeholder="Required" />
            </Field>
          </div>
        </section>

        {recipient === "other" && (
          <section>
            <h2 className="mb-4 text-sm font-medium">Recipient details</h2>
            <div className="grid grid-cols-2 gap-3">
              <Field label="First name">
                <input className={inputClass} placeholder="Required" />
              </Field>
              <Field label="Last name">
                <input className={inputClass} placeholder="Required" />
              </Field>
            </div>
            <div className="mt-3">
              <Field label="Gift message">
                <textarea rows={2} className={inputClass} placeholder="Enter an optional gift message" />
              </Field>
            </div>
          </section>
        )}

        <section>
          <h2 className="mb-4 text-sm font-medium">Send to</h2>
          <Field label="What email address should we send this gift card to?">
            <input type="email" className={inputClass} placeholder="Required" />
          </Field>
          <p className="mb-3 mt-6 text-center text-xs">When should we send it?</p>
          <div className="grid grid-cols-2 border border-border">
            <Toggle active={when === "now"} onClick={() => setWhen("now")}>
              Now
            </Toggle>
            <Toggle active={when === "later"} onClick={() => setWhen("later")}>
              Later
            </Toggle>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Gift card will be sent immediately after successful payment.
          </p>
        </section>

        <button
          type="submit"
          className="w-full bg-gold py-3 text-sm tracking-wide text-accent-foreground transition-opacity hover:opacity-90"
        >
          Continue
        </button>
      </form>
    </div>
  );
}

function Toggle({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center justify-center gap-2 py-2.5 text-sm transition-colors ${
        active ? "bg-secondary text-foreground" : "bg-card text-muted-foreground"
      }`}
    >
      {children}
    </button>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}
