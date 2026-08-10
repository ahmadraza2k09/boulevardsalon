import { Link } from "@tanstack/react-router";

const policies = [
  { label: "About Us", to: "/about" },
  { label: "Contact Us", to: "/about" },
  { label: "FAQ", to: "/services" },
  { label: "Shipping Policy", to: "/shop" },
  { label: "Return Policy", to: "/shop" },
  { label: "Privacy Policy", to: "/shop" },
] as const;

export function Footer() {
  return (
    <footer className="bg-forest text-forest-foreground">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-6 py-16 md:grid-cols-4">
        <div>
          <span className="block deco-title text-xl tracking-[0.28em]">BOULEVARD</span>
          <span className="mt-1 block text-[0.6rem] tracking-[0.45em] opacity-80">HAIR SALON</span>
        </div>

        <ul className="space-y-2 text-sm">
          {policies.map((p) => (
            <li key={p.label}>
              <Link to={p.to} className="opacity-85 transition-opacity hover:opacity-100">
                {p.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="space-y-4 text-sm">
          <p className="opacity-85">
            800 Broadmoor Blvd #310,
            <br />
            Sherwood Park, AB T8A 4Y6
          </p>
          <p className="opacity-85">(587) 599-2583</p>
          <p className="opacity-85">
            <span className="font-medium">Tues–Thurs:</span> 9AM – 9PM
            <br />
            <span className="font-medium">Fri–Sat:</span> 9AM–4PM
          </p>
        </div>

        <div className="flex md:justify-center">
          <svg viewBox="0 0 64 72" className="h-20 w-20 text-gold" aria-hidden="true">
            <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
              <path d="M32 12v50" />
              <path d="M32 30C22 30 14 38 12 50c12 2 20-6 20-20Z" />
              <path d="M32 30c10 0 18 8 20 20-12 2-20-6-20-20Z" />
              <path d="M24 22c0 6 4 10 8 10 4 0 8-4 8-10s-4-10-8-10-8 4-8 10Z" />
              <path d="M14 62c6-4 12-6 18-6s12 2 18 6" />
            </g>
          </svg>
        </div>
      </div>

      <div className="border-t border-forest-foreground/15">
        <div className="mx-auto max-w-[1400px] px-6 py-5 text-center text-xs opacity-75">
          © 2026, Boulevard Hair Salon.
        </div>
      </div>
    </footer>
  );
}
