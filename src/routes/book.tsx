import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import servicesHero from "@/assets/services-hero.jpg";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book Now — Boulevard Hair Salon" },
      {
        name: "description",
        content:
          "Book your cut, colour, extensions or styling appointment at Boulevard Hair Salon in Sherwood Park.",
      },
      { property: "og:title", content: "Book Now — Boulevard Hair Salon" },
      { property: "og:description", content: "Reserve your seat at Boulevard Hair Salon." },
    ],
  }),
  component: Book,
});

const serviceOptions = [
  "Haircut",
  "Colour",
  "Balayage",
  "Extensions",
  "Styling / Blowout",
  "Keratin Treatment",
];

function Book() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="relative">
        <img
          src={servicesHero}
          alt="Stylist working on a client's hair"
          width={1600}
          height={800}
          className="h-[300px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-forest/40" />
        <h1 className="absolute inset-0 flex items-center justify-center deco-title text-4xl uppercase text-gold">
          Book Now
        </h1>
      </section>

      <section className="mx-auto max-w-2xl px-6 py-20">
        {submitted ? (
          <div className="bg-sand px-8 py-14 text-center">
            <h2 className="script-title text-3xl">See you soon</h2>
            <p className="mt-4 text-sm text-muted-foreground">
              Thanks — we've got your request. Our front desk will confirm your time by phone.
            </p>
          </div>
        ) : (
          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="First name">
                <input required className={inputClass} placeholder="Required" />
              </Field>
              <Field label="Last name">
                <input required className={inputClass} placeholder="Required" />
              </Field>
            </div>
            <Field label="Email">
              <input required type="email" className={inputClass} placeholder="Required" />
            </Field>
            <Field label="Phone">
              <input required className={inputClass} placeholder="(587) 000-0000" />
            </Field>
            <Field label="Service">
              <select className={inputClass} defaultValue={serviceOptions[0]}>
                {serviceOptions.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </Field>
            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="Preferred date">
                <input type="date" className={inputClass} />
              </Field>
              <Field label="Preferred time">
                <input type="time" className={inputClass} />
              </Field>
            </div>
            <Field label="Notes">
              <textarea rows={4} className={inputClass} placeholder="Tell us about your hair goals" />
            </Field>
            <button
              type="submit"
              className="w-full rounded-full bg-gold py-3 text-sm tracking-wide text-accent-foreground transition-opacity hover:opacity-90"
            >
              Request Appointment
            </button>
          </form>
        )}
      </section>
    </>
  );
}

const inputClass =
  "w-full border border-border bg-card px-3 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-gold";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs tracking-wide text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}
