"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Instagram, Youtube } from "lucide-react";

const COLUMNS = [
  {
    title: "Find a Boutique",
    links: ["Locator", "Authorised Salons"],
  },
  {
    title: "Client Services",
    links: ["Contact us", "Returns", "FAQ", "Sizing Guide", "Track My Order"],
  },
  {
    title: "Maison Zuve",
    links: ["About", "Sustainability", "Press", "Careers"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms", "Supply Chain"],
  },
];

function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);
  return submitted ? (
    <p className="font-serif text-h3 text-ink">You're on the list. Thank you.</p>
  ) : (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="flex flex-col gap-4"
    >
      <p className="eyebrow text-ink/80">Receive the Zuve Edit</p>
      <div className="flex items-end gap-3 border-b border-ink/20 pb-2">
        <input
          type="email"
          required
          placeholder="Email Address"
          aria-label="Email address"
          className="flex-1 bg-transparent text-small placeholder:text-mute outline-none py-1"
        />
        <button
          type="submit"
          className="text-[11px] uppercase tracking-wider2 hover:opacity-70"
        >
          Subscribe
        </button>
      </div>
      <p className="text-[10px] text-mute uppercase tracking-wider2">
        By signing up, you agree to our privacy policy.
      </p>
    </form>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: string[];
}) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        className="md:cursor-default w-full flex items-center justify-between md:pointer-events-none"
        onClick={() => setOpen(!open)}
      >
        <span className="font-serif text-h3 text-ink">{title}</span>
        <ChevronDown
          size={16}
          strokeWidth={1.5}
          className={`md:hidden transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      <ul
        className={`mt-4 md:mt-6 space-y-3 ${open ? "block" : "hidden md:block"}`}
      >
        {links.map((l) => (
          <li key={l}>
            <Link
              href="#"
              className="text-small text-ink/80 hover:text-ink transition-colors"
            >
              {l}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-cream pt-20 md:pt-24">
      {/* Pre-footer promo strip */}
      <div className="bg-cream border-y border-gold/30">
        <div className="container-1440 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gold/30">
          <div className="p-8 md:p-12">
            <p className="eyebrow-gold mb-3">On the House</p>
            <h3 className="font-serif text-h3 text-ink mb-3">New Exclusive Offer</h3>
            <p className="text-small text-ink/70 mb-4">
              Members enjoy a travel-ready Zuve makeup bag on any ₹3,000 order
              with code NEWZUVE. Explore all Zuve Beauty exclusive offers now.
            </p>
            <Link href="#" className="link-hairline link-hairline-reverse">
              Shop now
            </Link>
          </div>
          <div className="p-8 md:p-12">
            <p className="eyebrow-gold mb-3">Celebrate Her with Zuve</p>
            <h3 className="font-serif text-h3 text-ink mb-3">Mother's Day Edit</h3>
            <p className="text-small text-ink/70 mb-4">
              Enjoy complimentary 2-day shipping on orders of ₹1,500 or more, for
              gifts delivered in time for Mother's Day.
            </p>
            <Link href="/collections/soft-feminine" className="link-hairline link-hairline-reverse">
              Discover
            </Link>
          </div>
          <div className="p-8 md:p-12">
            <p className="eyebrow-gold mb-3">New Arrivals Are Here</p>
            <h3 className="font-serif text-h3 text-ink mb-3">Latest Drop</h3>
            <p className="text-small text-ink/70 mb-4">
              Elevate your look with the latest finishes from Maison Zuve.
            </p>
            <Link href="#" className="link-hairline link-hairline-reverse">
              Discover
            </Link>
          </div>
        </div>
      </div>

      {/* Columns */}
      <div className="container-1440 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          <div className="md:col-span-1">
            <NewsletterForm />
          </div>
          {COLUMNS.map((c) => (
            <FooterColumn key={c.title} title={c.title} links={c.links} />
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-ink/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-3 text-[10px] uppercase tracking-wider2 text-mute">
            <span>Accessibility: Better contrast</span>
            <span className="inline-block w-9 h-5 rounded-full bg-ink/10 relative">
              <span className="absolute left-0.5 top-0.5 w-4 h-4 bg-bone rounded-full" />
            </span>
          </div>
          <div className="flex items-center gap-6 text-mute">
            <Link href="#" aria-label="TikTok" className="hover:text-ink">
              <span className="text-[11px] uppercase tracking-wider2">TikTok</span>
            </Link>
            <Link href="#" aria-label="Instagram" className="hover:text-ink">
              <Instagram size={16} strokeWidth={1.5} />
            </Link>
            <Link href="#" aria-label="Facebook" className="hover:text-ink">
              <span className="text-[11px] uppercase tracking-wider2">Facebook</span>
            </Link>
            <Link href="#" aria-label="YouTube" className="hover:text-ink">
              <Youtube size={16} strokeWidth={1.5} />
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] uppercase tracking-wider2 text-mute">
          <p>© 2026 Zuve Beauty. India.</p>
          <div className="flex items-center gap-4">
            <span>Choose your country & language —</span>
            <span className="text-ink">India (English)</span>
          </div>
        </div>
      </div>

      <div className="bg-cream py-6 flex justify-center">
        <span className="font-serif text-[28px] tracking-wordmark text-ink/80">ZUVE</span>
      </div>
    </footer>
  );
}
