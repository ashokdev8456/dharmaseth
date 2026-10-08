import Box from "@mui/material/Box";
import { motion } from "@/theme/motion";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
};

export function Reveal({ children, delay = 0 }: RevealProps) {
  return (
    <Box
      sx={{
        "@keyframes reveal-up": {
          from: { opacity: 0, transform: `translateY(${motion.distance.medium}px)` },
          to: { opacity: 1, transform: "none" },
        },
        "@keyframes reveal-up-wide": {
          from: { opacity: 0, transform: `translateY(${motion.distance.large}px)` },
          to: { opacity: 1, transform: "none" },
        },
        "@media (prefers-reduced-motion: no-preference)": {
          animation: `reveal-up ${motion.duration.reveal}ms ${motion.easing.standard} ${delay}ms both`,
        },
        "@media (prefers-reduced-motion: no-preference) and (min-width: 900px)": {
          animationName: "reveal-up-wide",
        },
        "@media (prefers-reduced-motion: reduce)": {
          animation: "none",
          opacity: 1,
          transform: "none",
        },
      }}
    >
      {children}
    </Box>
  );
}
