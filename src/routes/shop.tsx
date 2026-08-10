import { createFileRoute } from "@tanstack/react-router";
import lounge from "@/assets/salon-lounge.jpg";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop — Haircare & Beauty | Boulevard Hair Salon" },
      {
        name: "description",
        content:
          "Shop salon-tested haircare and skincare from the brands we use daily at Boulevard Hair Salon.",
      },
      { property: "og:title", content: "Shop — Haircare & Beauty" },
      {
        property: "og:description",
        content: "Salon-tested haircare and skincare, shipped across Canada.",
      },
    ],
  }),
  component: Shop,
});

const brands = [
  "Anua",
  "AXIS-Y",
  "Beauty of Joseon",
  "Bephor",
  "Biodance",
  "Biolage",
  "Dr. Althea",
  "ETUDE",
  "haruharu wonder",
  "KEVIN.MURPHY",
  "MARY & MAY",
  "medicube",
  "MIZON",
  "SKINFOOD",
  "SOME BY MI",
  "TOCOBO",
  "Village 11 Factory",
  "VT Cosmetics",
];

const products = [
  {
    name: "AXIS-Y Vegan Collagen Eye Serum 10 mL",
    price: "$24.99",
    copy: "A lightweight eye serum that targets fine lines, puffiness and dark circles. Formulated with vegan collagen and peptides to firm and smooth the delicate under-eye area.",
    status: "Sold out",
  },
  {
    name: "Medicube PDRN Pink Exosome Shot Serum 7500 30 mL",
    price: "$36.99",
    copy: "A high-potency serum combining 7,500 ppm exosomes and salmon-derived PDRN for firmness, hydration and a radiant glass-skin finish.",
    status: "Add to cart",
  },
  {
    name: "KEVIN.MURPHY Repair-Me.Wash 250 mL",
    price: "$42.00",
    copy: "A reconstructing shampoo with bamboo and papaya extract that rebuilds strength in over-processed, colour-treated hair.",
    status: "Add to cart",
  },
  {
    name: "Biolage Hydra Source Deep Treatment Pack 100 mL",
    price: "$19.50",
    copy: "An intensive weekly mask for dry hair, delivering long-lasting moisture and softness without weighing strands down.",
    status: "Add to cart",
  },
];

function Shop() {
  return (
    <>
      <section className="bg-forest px-6 py-3 text-center text-[0.65rem] uppercase tracking-[0.2em] text-forest-foreground">
        Free standard delivery on orders over $99 within Canada
      </section>

      <section className="relative">
        <img
          src={lounge}
          alt="Boulevard salon retail shelves"
          width={1408}
          height={1104}
          className="h-[320px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-forest/45" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-forest-foreground">
          <p className="text-xs uppercase tracking-[0.3em] opacity-90">Have you met AXIS-Y yet?</p>
          <h1 className="mt-3 deco-title text-4xl">Conquer Dark Spots and Hyperpigmentation</h1>
        </div>
      </section>

      <section className="px-6 py-16 text-center">
        <h2 className="text-2xl">
          Your Trusted Source for <span className="underline decoration-gold">Korean Beauty</span>
        </h2>
        <p className="mt-2 text-xs text-muted-foreground">Proudly shipping from Canada</p>
      </section>

      <section className="px-6 pb-16">
        <h2 className="deco-title text-center text-2xl">Featured Brands</h2>
        <ul className="mx-auto mt-8 grid max-w-[1100px] grid-cols-2 gap-6 text-center text-sm text-muted-foreground sm:grid-cols-3 lg:grid-cols-5">
          {brands.map((b) => (
            <li key={b} className="py-3 tracking-wide">
              {b}
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-sand px-6 py-16">
        <div className="mx-auto grid max-w-[1200px] gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <article key={p.name} className="bg-background p-6">
              <div className="mb-5 aspect-square bg-secondary" />
              <h3 className="text-sm leading-snug">{p.name}</h3>
              <p className="mt-1 text-sm text-gold">{p.price}</p>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{p.copy}</p>
              <button
                disabled={p.status === "Sold out"}
                className="mt-5 w-full rounded-full border border-border py-2.5 text-xs tracking-wide transition-colors hover:border-gold disabled:opacity-50"
              >
                {p.status}
              </button>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
