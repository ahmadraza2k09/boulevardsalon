import { createFileRoute } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { PillLink } from "@/components/site/PillLink";
import servicesHero from "@/assets/services-hero.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Cuts, Colour & Care | Boulevard Hair Salon" },
      {
        name: "description",
        content:
          "Styling, extensions, perms, smoothing and treatments at Boulevard Hair Salon in Sherwood Park. See the full service menu.",
      },
      { property: "og:title", content: "Services — Cuts, Colour & Care" },
      {
        property: "og:description",
        content: "Styling, extensions, perms, smoothing and treatments at Boulevard Hair Salon.",
      },
    ],
  }),
  component: Services,
});

const groups = [
  {
    title: "Styling",
    items: [
      ["Special Event Styling", "Updos, glam waves and red-carpet finishes for weddings, grads and big nights.", "From $85"],
      ["Blowout", "A wash, blow-dry and polish that lasts for days.", "From $55"],
      ["Braids", "From boho plaits to intricate crowns, built to hold.", "From $65"],
      ["Curls & Waves", "Heat styling tailored to your texture and length.", "From $60"],
    ],
  },
  {
    title: "Extensions",
    items: [
      ["Tape-In Extensions", "Lightweight, seamless length with a natural blend.", "From $250"],
      ["Weft Extensions", "Hand-tied or machine wefts for serious volume.", "From $350"],
      ["Weft Extensions Tightening", "Maintenance move-ups to keep everything sitting right.", "From $120"],
    ],
  },
  {
    title: "Perms & Texture Services",
    items: [
      ["Full Perm", "Lasting body and curl through the whole head.", "From $140"],
      ["Partial Perm", "Targeted texture where you want the lift.", "From $95"],
      ["Chemical Straightening", "Smooth, sleek and frizz-free for months.", "From $220"],
    ],
  },
  {
    title: "Smoothing & Treatments",
    items: [
      ["Keratin Treatment", "Cuts drying time and humidity frizz dramatically.", "From $180"],
      ["Express Keratin Treatment", "A quicker smoothing option between full services.", "From $110"],
      ["Deep Conditioning", "Intensive mask to restore softness and shine.", "From $45"],
      ["Scalp Detox", "A clarifying reset for a healthy, balanced scalp.", "From $50"],
    ],
  },
];

function Services() {
  return (
    <>
      <section className="relative">
        <img
          src={servicesHero}
          alt="Stylist combing and cutting a section of long hair"
          width={1600}
          height={800}
          className="h-[380px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-forest/25" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-6 text-center">
          <h1 className="deco-title text-4xl uppercase text-white md:text-5xl">
            Cuts, Colour &amp; Care
          </h1>
          <PillLink to="/book" className="text-white">
            Book Now
          </PillLink>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-6 py-20">
        {groups.map((g) => (
          <section key={g.title} className="mb-14">
            <h2 className="deco-title text-center text-3xl text-gold">{g.title}</h2>
            <div className="mt-8 border-t border-border">
              {g.items.map(([name, copy, price]) => (
                <details key={name} className="group border-b border-border">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-sm">
                    {name}
                    <span className="ml-auto flex shrink-0 items-center gap-3">
                      <span className="text-xs tracking-wide text-gold">{price}</span>
                      <ChevronDown
                        className="h-4 w-4 text-muted-foreground transition-transform group-open:rotate-180"
                        strokeWidth={1.3}
                      />
                    </span>
                  </summary>
                  <p className="pb-5 text-xs leading-relaxed text-muted-foreground">{copy}</p>
                </details>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
