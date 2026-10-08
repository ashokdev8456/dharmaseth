"use client";

import Typography from "@mui/material/Typography";
import { useEffect, useRef, useState } from "react";

const DURATION_MS = 1600;

type CountUpProps = {
  value: number | string;
};

export function CountUp({ value }: CountUpProps) {
  const target = typeof value === "number" ? value : Number(value);
  const countable = Number.isFinite(target);
  const [display, setDisplay] = useState(0);
  const nodeRef = useRef<HTMLParagraphElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node || !countable) {
      return;
    }

    const finish = (next: number) => {
      started.current = true;
      setDisplay(next);
    };

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      finish(target);
      return;
    }

    const run = () => {
      if (started.current) {
        return;
      }
      started.current = true;
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min(1, (now - start) / DURATION_MS);
        const eased = 1 - (1 - progress) ** 3;
        setDisplay(Math.round(eased * target));
        if (progress < 1) {
          window.requestAnimationFrame(tick);
        }
      };
      window.requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          run();
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [countable, target]);

  return (
    <Typography
      ref={nodeRef}
      variant="h2"
      component="p"
      aria-label={String(countable ? target : value)}
      sx={{
        color: "primary.dark",
        fontSize: { xs: "2rem", md: "2.5rem" },
        fontVariantNumeric: "tabular-nums",
        position: "relative",
      }}
    >
      <span aria-hidden="true">{countable ? display : value}</span>
    </Typography>
  );
}
