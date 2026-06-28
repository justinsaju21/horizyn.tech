import type { Variants, Transition } from "framer-motion";

export const duration = {
  instant:  0.08,
  fast:     0.15,
  normal:   0.25,
  slow:     0.40,
  verySlow: 0.70,
} as const;

type BezierTuple = [number, number, number, number];

export const ease = {
  out:          [0.0, 0.0, 0.2, 1.0] as BezierTuple,
  in:           [0.4, 0.0, 1.0, 1.0] as BezierTuple,
  inOut:        [0.4, 0.0, 0.2, 1.0] as BezierTuple,
  spring:       { type: "spring", stiffness: 300, damping: 30 } as Transition,
  springGentle: { type: "spring", stiffness: 120, damping: 20 } as Transition,
} as const;

export const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: duration.normal, ease: ease.out } },
};

export const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: duration.normal, ease: ease.out } },
};

export const stagger: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

export const staggerSlow: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

export const scaleIn: Variants = {
  hidden:  { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: duration.normal, ease: ease.out } },
};

export const slideInLeft: Variants = {
  hidden:  { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: duration.slow, ease: ease.out } },
};

export const hoverCard = {
  rest:  { y: 0 },
  hover: { y: -2 },
};

export const hoverButton = {
  rest:  { scale: 1 },
  hover: { scale: 1.02 },
  tap:   { scale: 0.98 },
};
