import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS, COPYRIGHT_YEAR, CONTACT_EMAIL, SITE_TAGLINE } from "@/lib/constants";

const companyLinks = [
  { label: "About",    href: "/about"   },
  { label: "Contact",  href: "/contact" },
  { label: "Book a Call", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy",     href: "/privacy"  },
  { label: "Terms & Conditions", href: "/terms"    },
];

export function Footer() {
  return (
    <footer className="bg-bg-subtle border-t border-border-subtle" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-16">
        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" aria-label="Horizon Tech Consulting — Home">
              <Image
                src="/logo-white.png"
                alt="HORIZYN"
                width={110}
                height={34}
                className="h-7 w-auto object-contain dark:block hidden"
              />
              <Image
                src="/logo-black.png"
                alt="HORIZYN"
                width={110}
                height={34}
                className="h-7 w-auto object-contain dark:hidden block"
              />
            </Link>
            <p className="text-sm text-text-secondary leading-relaxed max-w-[220px]">
              {SITE_TAGLINE} — built from the ground up.
            </p>
          </div>

          {/* Col 2 — Pages */}
          <div>
            <h3 className="text-xs font-mono tracking-widest text-text-muted uppercase mb-4">
              Pages
            </h3>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link href="/" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                  Home
                </Link>
              </li>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Company */}
          <div>
            <h3 className="text-xs font-mono tracking-widest text-text-muted uppercase mb-4">
              Company
            </h3>
            <ul className="flex flex-col gap-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {CONTACT_EMAIL && (
                <li>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Col 4 — Legal */}
          <div>
            <h3 className="text-xs font-mono tracking-widest text-text-muted uppercase mb-4">
              Legal
            </h3>
            <ul className="flex flex-col gap-2.5">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-border-subtle pt-8 mt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="text-xs text-text-muted">
            © {COPYRIGHT_YEAR} Horizon Tech Consulting. All rights reserved.
          </p>
          <p className="text-xs font-mono text-text-muted tracking-wide">
            Built with precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
