import type { Variants, Transition } from "framer-motion";

// Emil Skill: Strict duration limits (micro-interactions < 300ms)
export const duration = {
  instant:  0.08,
  fast:     0.15,
  normal:   0.25, // under 300ms
  slow:     0.40,
  verySlow: 0.70,
} as const;

// Emil Skill: Spring physics by default, avoiding linear bezier
export const ease = {
  // Use springs for almost everything UI-related
  spring:       { type: "spring", bounce: 0, duration: 0.4 } as Transition,
  springSnappy: { type: "spring", bounce: 0, duration: 0.25 } as Transition,
  springGentle: { type: "spring", bounce: 0.1, duration: 0.5 } as Transition,
} as const;

// Emil Skill: Only animate transform and opacity
export const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: ease.spring },
  exit:    { opacity: 0, y: 8, transition: ease.springSnappy },
};

export const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: ease.spring },
  exit:    { opacity: 0, transition: ease.springSnappy },
};

// Emil Skill: Stagger children, but reverse the order on exit
export const stagger: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.02 } },
  exit:    { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
};

export const staggerSlow: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  exit:    { transition: { staggerChildren: 0.06, staggerDirection: -1 } },
};

// Emil Skill: Modals/Cards scale from 0.96, not 0
export const scaleIn: Variants = {
  hidden:  { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: ease.spring },
  exit:    { opacity: 0, scale: 0.96, transition: ease.springSnappy },
};

// Emil Skill: Toasts/Dialogs slide from the edge they exit to
export const slideInLeft: Variants = {
  hidden:  { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: ease.springGentle },
  exit:    { opacity: 0, x: -20, transition: ease.springSnappy },
};

export const hoverCard = {
  rest:  { y: 0, scale: 1 },
  hover: { y: -4, scale: 1.01, transition: ease.springSnappy },
};

export const hoverButton = {
  rest:  { scale: 1 },
  hover: { scale: 1.03, transition: ease.springSnappy },
  tap:   { scale: 0.97, transition: { ...ease.springSnappy, duration: 0.1 } },
};
