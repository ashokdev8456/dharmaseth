const standardEase = "cubic-bezier(0.2, 0, 0, 1)";
const exitEase = "cubic-bezier(0.4, 0, 1, 1)";

export const motion = {
  duration: {
    instant: 100,
    fast: 150,
    standard: 280,
    emphasis: 400,
    reveal: 800,
    cinematic: 1200,
  },
  easing: {
    standard: standardEase,
    exit: exitEase,
  },
  distance: {
    small: 8,
    medium: 12,
    large: 24,
  },
} as const;

export function enterSx(delayMs = 0) {
  return {
    "@keyframes enter-rise": {
      from: { opacity: 0, transform: `translateY(${motion.distance.large}px)` },
      to: { opacity: 1, transform: "none" },
    },
    "@media (prefers-reduced-motion: no-preference)": {
      animation: `enter-rise ${motion.duration.reveal}ms ${motion.easing.standard} ${delayMs}ms both`,
    },
  };
}

export function visualEnterSx(delayMs = 0) {
  return {
    "@keyframes image-reveal": {
      from: { clipPath: "inset(0 100% 0 0)" },
      to: { clipPath: "inset(0 0 0 0)" },
    },
    "@keyframes image-settle": {
      from: { transform: "scale(1.05)" },
      to: { transform: "none" },
    },
    "@media (prefers-reduced-motion: no-preference)": {
      animation: `image-reveal ${motion.duration.cinematic}ms ${motion.easing.standard} ${delayMs}ms backwards`,
      "& img": {
        animation: `image-settle ${motion.duration.cinematic}ms ${motion.easing.standard} ${delayMs}ms both`,
      },
    },
  };
}

/** Slow vertical drift for a large photograph. Still on small screens. */
export function parallaxSx() {
  return {
    "@keyframes image-parallax": {
      from: { transform: "translateY(3%)" },
      to: { transform: "translateY(-3%)" },
    },
    "@media (prefers-reduced-motion: no-preference) and (min-width: 900px)": {
      animation: "image-parallax linear both",
      animationTimeline: "view()",
      animationRange: "entry 0% exit 100%",
    },
  };
}
