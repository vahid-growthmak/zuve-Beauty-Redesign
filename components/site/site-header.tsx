"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, Search, User, ShoppingBag, X } from "lucide-react";
import { useCart } from "@/lib/store/cart";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Shop", href: "/collections/soft-feminine" },
  { label: "Collections", href: "/collections/soft-feminine" },
  { label: "About", href: "#" },
  { label: "Journal", href: "#" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const open = useCart((s) => s.open);
  const items = useCart((s) => s.items);
  const count = items.reduce((s, i) => s + i.quantity, 0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
        "sticky top-0 z-40 transition-colors duration-300 ease-out-expo border-b border-gold/30",
        scrolled
          ? "bg-bone/85 backdrop-blur-md"
          : "bg-bone",
      )}
    >
      <div className="container-1440 flex items-center justify-between h-16 md:h-20">
        {/* Mobile menu */}
        <button
          aria-label="Open menu"
          className="md:hidden -ml-1 p-2"
          onClick={() => setMobileOpen(true)}
        >
          <Menu size={20} strokeWidth={1.5} />
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 flex-1">
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[11px] uppercase tracking-wider2 hover:text-mute transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Wordmark */}
        <Link
          href="/"
          className="font-serif text-[26px] md:text-[32px] tracking-wordmark leading-none"
          style={{ fontWeight: 400 }}
        >
          ZUVE
        </Link>

        {/* Right utilities */}
        <div className="flex items-center gap-4 flex-1 justify-end">
          <button aria-label="Search" className="p-2 hidden sm:block">
            <Search size={18} strokeWidth={1.5} />
          </button>
          <button aria-label="Account" className="p-2 hidden sm:block">
            <User size={18} strokeWidth={1.5} />
          </button>
          <button
            aria-label="Open cart"
            className="p-2 relative"
            onClick={open}
          >
            <ShoppingBag size={18} strokeWidth={1.5} />
            {count > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-rose text-ink text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-medium">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>

      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-bone">
          <div className="flex items-center justify-between h-16 px-6 border-b border-gold/30">
            <span className="font-serif text-[24px] tracking-wordmark">ZUVE</span>
            <button
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="p-2"
            >
              <X size={20} strokeWidth={1.5} />
            </button>
          </div>
          <nav className="flex flex-col p-6 gap-6">
            {NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="font-serif text-2xl text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
