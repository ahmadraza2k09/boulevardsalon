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

function brandInitials(name: string) {
  const words = name.replace(/[.&]/g, " ").split(/[\s-]+/).filter(Boolean);
  return words
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function BrandLogo({ name }: { name: string }) {
  return (
    <svg viewBox="0 0 64 64" className="h-16 w-16 text-foreground/70" aria-hidden="true">
      <circle cx="32" cy="32" r="30" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="32" cy="32" r="25.5" fill="none" stroke="currentColor" strokeWidth="0.5" />
      <text
        x="32"
        y="33"
        textAnchor="middle"
        dominantBaseline="central"
        fill="currentColor"
        fontSize="17"
        fontFamily="'Cormorant Garamond', serif"
        letterSpacing="1.5"
      >
        {brandInitials(name)}
      </text>
    </svg>
  );
}

function ProductImage({ name, variant }: { name: string; variant: number }) {
  const initial = (name[0] ?? "B").toUpperCase();
  const shapes = [
    // dropper bottle
    <g key="dropper">
      <rect x="26" y="10" width="12" height="8" rx="1.5" fill="currentColor" opacity="0.75" />
      <path d="M30 18h4l1.5 8h-7L30 18Z" fill="currentColor" opacity="0.35" />
      <rect x="22" y="26" width="20" height="30" rx="4" fill="currentColor" opacity="0.18" />
      <rect x="22" y="26" width="20" height="30" rx="4" fill="none" stroke="currentColor" strokeWidth="1" />
    </g>,
    // pump bottle
    <g key="pump">
      <rect x="30" y="8" width="10" height="4" rx="1" fill="currentColor" opacity="0.75" />
      <rect x="29" y="12" width="6" height="8" fill="currentColor" opacity="0.75" />
      <rect x="23" y="20" width="18" height="36" rx="3" fill="currentColor" opacity="0.18" />
      <rect x="23" y="20" width="18" height="36" rx="3" fill="none" stroke="currentColor" strokeWidth="1" />
    </g>,
    // shampoo bottle
    <g key="shampoo">
      <rect x="28" y="9" width="8" height="6" rx="1" fill="currentColor" opacity="0.75" />
      <path
        d="M26 15h12c2 3 4 6 4 12v24a5 5 0 0 1-5 5H27a5 5 0 0 1-5-5V27c0-6 2-9 4-12Z"
        fill="currentColor"
        opacity="0.18"
      />
      <path
        d="M26 15h12c2 3 4 6 4 12v24a5 5 0 0 1-5 5H27a5 5 0 0 1-5-5V27c0-6 2-9 4-12Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />
    </g>,
    // jar
    <g key="jar">
      <rect x="20" y="24" width="24" height="8" rx="2" fill="currentColor" opacity="0.75" />
      <rect x="21" y="32" width="22" height="24" rx="3" fill="currentColor" opacity="0.18" />
      <rect x="21" y="32" width="22" height="24" rx="3" fill="none" stroke="currentColor" strokeWidth="1" />
    </g>,
  ];
  return (
    <div className="mb-5 flex aspect-square items-center justify-center bg-secondary">
      <svg viewBox="0 0 64 64" className="h-36 w-36 text-forest" aria-hidden="true">
        {shapes[variant % shapes.length]}
        <text
          x="32"
          y="43"
          textAnchor="middle"
          fill="currentColor"
          fontSize="9"
          fontFamily="'Cormorant Garamond', serif"
        >
          {initial}
        </text>
      </svg>
    </div>
  );
}

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
      <section className="bg-forest px-4 py-2.5 text-center text-[0.6rem] uppercase tracking-[0.12em] text-forest-foreground sm:px-6 sm:py-3 sm:text-[0.65rem] sm:tracking-[0.2em]">
        Free standard delivery on orders over $99 within Canada
      </section>

      <section className="relative">
        <img
          src={lounge}
          alt="Boulevard salon retail shelves"
          width={1408}
          height={1104}
          className="h-[260px] w-full object-cover sm:h-[320px]"
        />
        <div className="absolute inset-0 bg-forest/45" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-forest-foreground sm:px-6">
          <p className="font-display text-lg italic tracking-wide opacity-95 sm:text-xl">
            Have you met AXIS-Y yet?
          </p>
          <h1 className="mt-3 deco-title text-2xl leading-snug sm:text-3xl md:text-4xl">
            Conquer Dark Spots
            <br />
            and Hyperpigmentation
          </h1>
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
            <li key={b} className="flex flex-col items-center gap-3 py-3 tracking-wide">
              <BrandLogo name={b} />
              {b}
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-sand px-6 py-16">
        <div className="mx-auto grid max-w-[1200px] gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => (
            <article key={p.name} className="bg-background p-6">
              <ProductImage name={p.name} variant={i} />
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
