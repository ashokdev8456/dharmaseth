"use client";

import type { ReactNode } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useEffect, useState } from "react";
import { PageContainer } from "@/components/common/PageContainer";
import { motion } from "@/theme/motion";

const SLIDE_MS = 3000;

const slides = [
  {
    id: "annadanam",
    src: "/images/home/annadanam-courtyard.jpg",
    alt: "A meal being served to people seated in a row in a temple courtyard.",
    title: "Daily Annadanam",
  },
  {
    id: "sanctum",
    src: "/images/home/sanctum-lamps.jpg",
    alt: "Oil lamps lining a carved stone temple sanctum, with people seated before the shrine.",
    title: "Lamps of the sanctum",
  },
  {
    id: "study",
    src: "/images/pathashala.jpg",
    alt: "A teacher reading a palm-leaf manuscript on an Indian verandah.",
    title: "A year of study",
  },
  {
    id: "beings",
    src: "/images/desi-cows.jpg",
    alt: "Indian cows resting in the shade beside a tiled shelter.",
    title: "Care for living beings",
  },
] as const;

type HeroBannerProps = {
  children: ReactNode;
};

export function HeroBanner({ children }: HeroBannerProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = slides.length;
  const slide = slides[index];

  useEffect(() => {
    if (paused) {
      return;
    }
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % count);
    }, SLIDE_MS);
    return () => window.clearInterval(timer);
  }, [paused, count]);

  const go = (next: number) => {
    setIndex((next + count) % count);
  };

  return (
    <Box
      component="section"
      aria-labelledby="hero-heading"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setPaused(false);
        }
      }}
      onKeyDown={(event) => {
        if (event.target instanceof Element && event.target.closest("a")) {
          return;
        }
        if (event.key === "ArrowRight") {
          event.preventDefault();
          go(index + 1);
        }
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          go(index - 1);
        }
      }}
      sx={{
        position: "relative",
        overflow: "hidden",
        boxSizing: "border-box",
        color: "#FFFDF8",
        borderBottom: "4px solid #FF9F00",
        height: { xs: "calc(100svh - 64px)", lg: "calc(100svh - 72px)" },
        scrollSnapAlign: "start",
      }}
    >
      <Box
        aria-roledescription="carousel"
        aria-label="Home banner"
        sx={{ position: "absolute", inset: 0, zIndex: 0, height: "100%" }}
      >
        <Box
          sx={{
            display: "flex",
            height: "100%",
            width: "100%",
            transform: `translateX(-${index * 100}%)`,
            "@media (prefers-reduced-motion: no-preference)": {
              transition: `transform ${motion.duration.reveal}ms ${motion.easing.standard}`,
            },
          }}
        >
          {slides.map((item, itemIndex) => {
            const active = itemIndex === index;
            return (
              <Box
                key={item.id}
                sx={{
                  position: "relative",
                  flex: "0 0 100%",
                  width: "100%",
                  height: "100%",
                  minHeight: "100%",
                  overflow: "hidden",
                  "@keyframes banner-zoom": {
                    from: { transform: "scale(1)" },
                    to: { transform: "scale(1.08)" },
                  },
                  "& img": active
                    ? {
                        "@media (prefers-reduced-motion: no-preference)": {
                          animation: `banner-zoom ${SLIDE_MS}ms linear both`,
                        },
                      }
                    : undefined,
                }}
              >
                <Image
                  src={item.src}
                  alt={active ? item.alt : ""}
                  fill
                  priority={itemIndex === 0}
                  sizes="100vw"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          pointerEvents: "none",
          background: {
            xs: "linear-gradient(180deg, rgba(18,14,10,0.78) 0%, rgba(18,14,10,0.62) 55%, rgba(18,14,10,0.72) 100%)",
            md: "linear-gradient(90deg, rgba(18,14,10,0.82) 0%, rgba(18,14,10,0.58) 46%, rgba(18,14,10,0.22) 100%)",
          },
        }}
      />
      <PageContainer
        sx={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          py: { xs: 1.5, md: 3 },
        }}
      >
        {children}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={1}
          sx={{ alignItems: { xs: "flex-start", sm: "center" }, justifyContent: "space-between", mt: 2, maxWidth: 720 }}
        >
          <Stack direction="row" spacing={0.5} role="tablist" aria-label="Choose a banner image" sx={{ alignItems: "center" }}>
            <IconButton
              aria-label="Previous banner image"
              onClick={() => go(index - 1)}
              sx={{
                width: 44,
                height: 44,
                color: "#FFFDF8",
                border: "1px solid rgba(255,253,248,0.45)",
                "&:hover": { bgcolor: "rgba(255,253,248,0.12)" },
              }}
            >
              <ChevronLeftIcon />
            </IconButton>
            {slides.map((item, itemIndex) => {
              const selected = itemIndex === index;
              return (
                <IconButton
                  key={item.id}
                  role="tab"
                  aria-selected={selected}
                  aria-label={item.title}
                  onClick={() => go(itemIndex)}
                  sx={{
                    width: 44,
                    height: 44,
                    "&::before": {
                      content: '""',
                      width: selected ? 22 : 8,
                      height: 4,
                      borderRadius: 99,
                      bgcolor: selected ? "primary.main" : "rgba(255,253,248,0.85)",
                      "@media (prefers-reduced-motion: no-preference)": {
                        transition: `width ${motion.duration.standard}ms ${motion.easing.standard}`,
                      },
                    },
                  }}
                />
              );
            })}
            <IconButton
              aria-label="Next banner image"
              onClick={() => go(index + 1)}
              sx={{
                width: 44,
                height: 44,
                color: "#FFFDF8",
                border: "1px solid rgba(255,253,248,0.45)",
                "&:hover": { bgcolor: "rgba(255,253,248,0.12)" },
              }}
            >
              <ChevronRightIcon />
            </IconButton>
          </Stack>
          <Typography aria-live="polite" sx={{ fontWeight: 700, fontSize: "0.95rem" }}>
            {slide.title}
          </Typography>
        </Stack>
      </PageContainer>
    </Box>
  );
}
