"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { stagger, fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { BOOKING_URL } from "@/lib/constants";

/** Home page hero — Tinder-style layout adapted for both light and dark modes. */
export function HeroHome() {
  const shouldReduce = useReducedMotion();
  const { scrollY } = useScroll();
  
  // Parallax for the content block
  const yContent = useTransform(scrollY, [0, 600], [0, 80]);
  const opacityContent = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section
      className="relative min-h-[100svh] flex flex-col items-center justify-center bg-bg-base overflow-hidden transition-colors duration-300"
      aria-label="Hero"
    >
      {/* Background Image: Diagonal Grid Collage */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/tinder-bg.png"
          alt="Dashboard collage"
          fill
          priority
          className="object-cover opacity-50 scale-105"
        />
        {/* Dynamic vignette so text pops in both light and dark modes */}
        <div className="absolute inset-0 bg-bg-base/70 transition-colors duration-300" />
        <div 
          className="absolute inset-0 transition-colors duration-300"
          style={{ background: "radial-gradient(ellipse at center, transparent 0%, var(--bg-base) 100%)" }}
        />
      </div>

      {/* Content */}
      <motion.div
        variants={shouldReduce ? {} : stagger}
        initial="hidden"
        animate="visible"
        style={shouldReduce ? {} : { y: yContent, opacity: opacityContent }}
        className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-8 pt-20 pb-32 flex flex-col items-center text-center justify-center h-full"
      >
        {/* Massive Centered Typography */}
        <motion.h1
          variants={shouldReduce ? {} : fadeUp}
          className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-bold tracking-tight leading-[1.05] text-text-primary mb-10 drop-shadow-xl"
        >
          Software built for your workflow.
        </motion.h1>

        {/* Vibrant Gradient CTA Button */}
        <motion.div
          variants={shouldReduce ? {} : fadeUp}
          className="flex justify-center w-full"
        >
          <Link
            href={BOOKING_URL}
            className={cn(
              "inline-flex items-center justify-center px-10 py-4 rounded-full text-lg font-bold tracking-wide",
              "bg-gradient-to-r from-rose-400 to-red-500 text-white",
              "hover:scale-105 shadow-[0_4px_20px_rgba(244,63,94,0.4)] transition-transform duration-200"
            )}
          >
            Book a Discovery Call
          </Link>
        </motion.div>
        
        {/* Subtle subheadline */}
        <motion.p
          variants={shouldReduce ? {} : fadeUp}
          className="text-sm md:text-base text-text-secondary max-w-lg mt-8 font-medium drop-shadow-sm"
        >
          Not adapted to it. We build custom AI-integrated software from the ground up so you own it, control it, and it actually fits how your business works.
        </motion.p>
      </motion.div>
    </section>
  );
}
