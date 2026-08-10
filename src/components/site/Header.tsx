import { Link } from "@tanstack/react-router";
import { Search, User, ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/book", label: "Book Now" },
  { to: "/gift-cards", label: "Gift Cards" },
  { to: "/shop", label: "Shop" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5">
        <Link to="/" className="shrink-0 text-center leading-none">
          <span className="block deco-title text-lg tracking-[0.28em]">BOULEVARD</span>
          <span className="block text-[0.55rem] tracking-[0.42em] text-muted-foreground">
            HAIR SALON
          </span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="nav-link text-foreground/80 transition-colors hover:text-foreground"
              activeProps={{ className: "nav-link text-foreground font-medium" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <button aria-label="Search" className="hidden text-foreground/70 hover:text-foreground sm:block">
            <Search className="h-[18px] w-[18px]" strokeWidth={1.3} />
          </button>
          <button aria-label="Account" className="hidden text-foreground/70 hover:text-foreground sm:block">
            <User className="h-[18px] w-[18px]" strokeWidth={1.3} />
          </button>
          <button aria-label="Cart" className="text-foreground/70 hover:text-foreground">
            <ShoppingBag className="h-[18px] w-[18px]" strokeWidth={1.3} />
          </button>
          <button
            aria-label="Menu"
            className="text-foreground/80 lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-border/60 bg-cream px-5 py-4 lg:hidden">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="py-2 text-sm tracking-wide text-foreground/80"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
