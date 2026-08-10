import { createFileRoute } from "@tanstack/react-router";
import rollers from "@/assets/rollers-magazine.jpg";
import lounge from "@/assets/salon-lounge.jpg";
import chairs from "@/assets/salon-chairs.jpg";
import wash from "@/assets/salon-wash.jpg";
import blonde from "@/assets/blonde-trench.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Boulevard Hair Salon" },
      {
        name: "description",
        content:
          "Woman-owned, family-friendly and a little rebellious. Meet the Boulevard Hair Salon team in Sherwood Park.",
      },
      { property: "og:title", content: "About Us — Boulevard Hair Salon" },
      {
        property: "og:description",
        content: "Woman-owned, family-friendly and a little rebellious. This is Boulevard.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="grid items-stretch md:grid-cols-2">
        <img
          src={rollers}
          alt="Woman with pink hair rollers holding a magazine"
          width={1008}
          height={912}
          className="h-full max-h-[420px] w-full object-cover"
        />
        <div className="flex flex-col justify-center bg-sand px-8 py-14 md:px-16">
          <h1 className="deco-title text-4xl text-gold">Your Hair, Your Vibe</h1>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            We're all about making you look <em>and</em> feel amazing. Our stylists stay ahead of
            the trends, mixing creativity with serious skills. From effortless waves, a sleek chop,
            or bold, head-turning colour, we customize every service to <em>your</em> vibe. Come in
            as you are, walk out as your most confident self.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <h2 className="deco-title text-center text-4xl uppercase tracking-[0.1em] text-gold">
          Our Shop
        </h2>
        <div className="mx-auto mt-12 grid max-w-[1300px] gap-4 md:grid-cols-3">
          <img
            src={lounge}
            alt="Salon lounge with cream sofa and product shelves"
            width={1408}
            height={1104}
            loading="lazy"
            className="h-full w-full object-cover md:col-span-2"
          />
          <div className="grid gap-4">
            <img
              src={chairs}
              alt="Styling chairs and mirrors in the salon"
              width={1000}
              height={700}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <img
              src={wash}
              alt="Shampoo wash stations"
              width={1000}
              height={700}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1300px] items-stretch gap-0 px-6 pb-24 md:grid-cols-2">
        <img
          src={blonde}
          alt="Model with long platinum blonde hair in a grey trench coat"
          width={912}
          height={1200}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="flex flex-col justify-center bg-sand px-8 py-14 md:px-14">
          <h2 className="deco-title text-4xl uppercase text-gold">Who We Are</h2>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              Boulevard is more than just a salon — it's a whole vibe. We live for bold
              transformations — from dreamy pastels to edgy, modern cuts — and we legit celebrate
              every unique spark you bring.
            </p>
            <p>Let's be real: life's way more fun when you're absolutely slaying your hair game.</p>
            <p>
              We're woman-owned, family-friendly, and deeply committed to giving back — and yes,
              we've even snagged awards for our philanthropy. Our team is all about good energy:
              drama-free, inclusive, and always down for a laugh. We're a touch rebellious,
              all-creative and down for good times and good vibes.
            </p>
            <p>
              And if you're all about options, our online store has your favourite products on
              standby 24/7. We've never been just about a haircut; we celebrate you. So drop in for
              a killer cut, stay for the good vibes, and let's make some serious hair magic happen
              together.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
