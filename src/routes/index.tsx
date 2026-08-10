import { createFileRoute } from "@tanstack/react-router";
import { Scissors, Palette, Waves, Wind } from "lucide-react";
import { PillLink } from "@/components/site/PillLink";
import heroHome from "@/assets/hero-home.jpg";
import editorialCap from "@/assets/editorial-cap.jpg";
import graffiti from "@/assets/graffiti.jpg";
import ctaDark from "@/assets/cta-dark.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Boulevard Hair Salon — Meet Me at Boulevard" },
      {
        name: "description",
        content:
          "Great hair days start here. Cuts, colour, extensions and styling in Sherwood Park — book your seat at Boulevard Hair Salon.",
      },
      { property: "og:title", content: "Boulevard Hair Salon — Meet Me at Boulevard" },
      {
        property: "og:description",
        content: "Cuts, colour, extensions and styling in Sherwood Park.",
      },
    ],
  }),
  component: Index,
});

const services = [
  {
    icon: Scissors,
    title: "Haircuts",
    copy: "Gender-neutral pricing, always. Whether it's a sleek bob, textured pixie, or long layers, we cut to fit your style. Add a deep conditioning mask to any cut for just $25 — because healthy hair is happy hair.",
  },
  {
    icon: Palette,
    title: "Colouring",
    copy: "Your hair, your canvas. From rich brunettes to icy blondes, vibrant fashion colours, and sun-kissed balayage, we bring artistry to every shade.",
  },
  {
    icon: Waves,
    title: "Extensions",
    copy: "If the dream is longer and fuller hair, then take a seat. From subtle volume to mermaid-length locks, our stylists create a custom extension plan just for you.",
  },
  {
    icon: Wind,
    title: "Styling",
    copy: "Freshly washed and flawlessly styled, because sometimes, you just need that extra oomph.",
  },
];

function Index() {
  return (
    <>
      <section className="relative">
        <img
          src={heroHome}
          alt="Woman with long golden hair and round sunglasses in warm sunlight"
          width={1600}
          height={1008}
          className="h-[78vh] min-h-[520px] w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-forest/25" />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="max-w-2xl text-center text-forest-foreground">
            <h1 className="script-title text-5xl md:text-6xl">Meet me at Boulevard</h1>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed opacity-95">
              Boulevard is where great hair days start and confidence takes centre stage. It's 'your
              hair, your vibe' and our stylists are here to help you find it. Want a subtle glow-up
              or a full-on reinvention? Let's make magic happen. We don't just do hair; we create
              looks that slay. Ready to feel unstoppable?
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <PillLink to="/book">Book Now</PillLink>
              <PillLink to="/gift-cards">Gift Cards</PillLink>
            </div>
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-2">
        <div className="flex flex-col justify-center bg-forest px-8 py-16 text-forest-foreground md:px-14">
          <p className="script-title text-3xl text-forest-foreground/90">Yes Please,</p>
          <h2 className="deco-title -mt-4 text-4xl uppercase text-gold md:text-5xl">
            Margaritas,
            <br />
            Romance Novels
            <br />& Dry Shampoo
          </h2>
          <p className="mt-8 max-w-md text-sm leading-relaxed opacity-90">
            Let's be real, life's way more fun when you're absolutely slaying your hair game.
          </p>
        </div>
        <div className="grid grid-cols-2">
          <img
            src={graffiti}
            alt="Red spray paint marks on a pale wall"
            width={800}
            height={1000}
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <img
            src={editorialCap}
            alt="Woman in a tan cap and round glasses in front of a graffiti wall"
            width={1008}
            height={1008}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="bg-background px-6 py-20">
        <h2 className="deco-title text-center text-4xl uppercase tracking-[0.12em] text-gold">
          Services
        </h2>
        <div className="mx-auto mt-12 grid max-w-[1300px] gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <article
              key={s.title}
              className="border border-border bg-card p-8 text-center transition-colors hover:border-gold"
            >
              <s.icon className="mx-auto h-12 w-12 text-gold" strokeWidth={1} />
              <h3 className="mt-6 text-base">{s.title}</h3>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{s.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-sand px-6 py-20">
        <div className="mx-auto max-w-3xl bg-background px-8 py-14 text-center">
          <span className="deco-title text-2xl text-gold">”</span>
          <h2 className="script-title mt-2 text-3xl">Testimonials</h2>
          <p className="mt-6 text-xs italic leading-relaxed text-muted-foreground">
            "Shaylynne really brought what I had in my head to reality! I had hair below my butt
            that was boring and bland. She truly made cutting off 12 inches of hair feel better,
            lot the receptionist (wish I remembered her name) was also very personable and helpful
            throughout."
          </p>
          <p className="mt-4 text-xs tracking-wide">—Cheyanne Fransen</p>
        </div>
      </section>

      <section className="relative">
        <img
          src={ctaDark}
          alt="Dark moody portrait of a woman with hair across her face"
          width={1600}
          height={800}
          loading="lazy"
          className="h-[420px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-forest/45" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-forest-foreground">
          <h2 className="script-title text-4xl">See you soon</h2>
          <p className="mt-4 max-w-lg text-sm opacity-95">
            Let's meet again, and again and again — and keep you feeling fab.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <PillLink to="/book">Book Now</PillLink>
            <PillLink to="/gift-cards">Gift Cards</PillLink>
          </div>
        </div>
      </section>
    </>
  );
}
