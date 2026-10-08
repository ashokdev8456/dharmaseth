import { motion } from "@/theme/motion";

export const liftCardSx = {
  transition: `transform ${motion.duration.standard}ms ${motion.easing.standard}, box-shadow ${motion.duration.standard}ms ${motion.easing.standard}, border-color ${motion.duration.fast}ms ${motion.easing.standard}`,
  "@media (hover: hover) and (prefers-reduced-motion: no-preference)": {
    "&:hover": {
      transform: "translateY(-6px)",
      boxShadow: "0 18px 40px rgba(38, 33, 27, 0.12)",
      borderColor: "primary.main",
    },
    "&:hover img": {
      transform: "scale(1.04)",
    },
  },
  "& img": {
    transition: `transform ${motion.duration.emphasis}ms ${motion.easing.standard}`,
  },
} as const;
