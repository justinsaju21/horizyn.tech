"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { NAV_LINKS, BOOKING_URL } from "@/lib/constants";
import { ThemeToggle } from "./theme-toggle";
import { useReducedMotion } from "framer-motion";
import { useTheme } from "next-themes";

export function Navbar() {
  const pathname  = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const shouldReduce            = useReducedMotion();
  const { theme }               = useTheme();
  const [mounted, setMounted]   = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else       document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const logoSrc = mounted && theme === "light" ? "/logo-black.png" : "/logo-white.png";

  return (
    <>
      <motion.header
        initial={shouldReduce ? {} : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className={cn(
          "fixed z-40 h-16 transition-all duration-300 left-1/2 -translate-x-1/2",
          scrolled 
            ? "top-4 w-[calc(100%-2rem)] max-w-5xl rounded-full bg-bg-surface border border-border shadow-lg"
            : "top-0 w-full bg-bg-base border-b border-border-subtle"
        )}
      >
        <div className={cn(
          "mx-auto h-full flex items-center justify-between transition-all duration-300",
          scrolled ? "px-6 md:px-8 w-full" : "max-w-7xl px-6 md:px-8 lg:px-12 w-full"
        )}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0" aria-label="Horizon Tech Consulting — Home">
            <Image
              src={logoSrc}
              alt="HORIZYN"
              width={120}
              height={36}
              className="h-8 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm transition-colors duration-150 relative py-1",
                    active
                      ? "text-text-primary"
                      : "text-text-secondary hover:text-text-primary"
                  )}
                >
                  {link.label}
                  {active && (
                    <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-accent rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Link
              href={BOOKING_URL}
              className={cn(
                "inline-flex items-center gap-1.5 px-4 py-2 rounded-md text-sm font-medium",
                "bg-accent text-text-inverted",
                "hover:brightness-110 transition-all duration-150",
                "shadow-[0_0_0_0_var(--accent-glow)] hover:shadow-glow"
              )}
            >
              Book a Call
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="h-9 w-9 flex items-center justify-center rounded-md border border-border bg-bg-surface text-text-secondary hover:text-text-primary transition-colors"
            >
              {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={shouldReduce ? {} : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-30 md:hidden bg-bg-base flex flex-col pt-16"
          >
            <nav
              aria-label="Mobile navigation"
              className="flex-1 flex flex-col px-6 pt-8 gap-2"
            >
              {NAV_LINKS.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "text-xl font-medium py-3 border-b border-border-subtle",
                      active ? "text-accent" : "text-text-primary"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="pt-6">
                <Link
                  href={BOOKING_URL}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "inline-flex w-full items-center justify-center gap-2 px-6 py-3 rounded-md text-base font-medium",
                    "bg-accent text-text-inverted"
                  )}
                >
                  Book a Discovery Call
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
