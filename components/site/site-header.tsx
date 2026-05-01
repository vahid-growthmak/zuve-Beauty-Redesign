"use client";

import Image from "next/image";
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
        {/* Left side: Mobile Menu & Search OR Desktop Nav */}
        <div className="flex items-center gap-3 md:gap-8 flex-1">
          {/* Mobile menu (2 thin lines to match Dior) */}
          <button
            aria-label="Open menu"
            className="md:hidden -ml-2 p-2"
            onClick={() => setMobileOpen(true)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
              <line x1="3" y1="10" x2="21" y2="10" />
              <line x1="3" y1="14" x2="21" y2="14" />
            </svg>
          </button>

          {/* Mobile Search */}
          <button aria-label="Search" className="md:hidden p-2">
            <Search size={22} strokeWidth={1} />
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
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
        </div>

        {/* Center: Wordmark */}
        <div className="flex justify-center shrink-0">
          <Link
            href="/"
            className="block"
          >
            <Image 
              src="/images/home/zuve-logo-black.webp" 
              alt="Zuve" 
              width={100} 
              height={30} 
              className="h-6 md:h-8 w-auto"
              priority
            />
          </Link>
        </div>

        {/* Right side: Search (desktop), Account, Cart */}
        <div className="flex items-center gap-3 md:gap-4 flex-1 justify-end">
          <button aria-label="Search" className="p-2 hidden md:block">
            <Search size={22} strokeWidth={1} />
          </button>
          
          <button aria-label="Account" className="p-2 relative -mr-1">
            <User size={22} strokeWidth={1} />
            <span className="absolute top-1.5 right-1 w-2 h-2 bg-[#f26d21] rounded-full border-[1.5px] border-bone" />
          </button>
          
          <button
            aria-label="Open cart"
            className="p-2 relative -mr-2"
            onClick={open}
          >
            <ShoppingBag size={22} strokeWidth={1} />
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
            <Image 
              src="/images/home/zuve-logo-black.webp" 
              alt="Zuve" 
              width={100} 
              height={30} 
              className="h-6 w-auto"
            />
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
