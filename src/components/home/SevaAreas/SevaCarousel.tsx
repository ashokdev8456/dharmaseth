"use client";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BeforeAfter } from "@/components/home/SevaAreas/BeforeAfter";
import { sevaAreas } from "@/data/home";
import { motion } from "@/theme/motion";

const SLIDE_MS = 4000;

const scenes: Record<string, { image: string; before: string; imageAlt: string }> = {
  heritage: {
    image: "/images/temple-tower.jpg",
    before: "/images/before/before-temple-tower.jpg",
    imageAlt: "Overhead view of a South Indian temple tower rebuilt, with the tiers and sculptures in good shape.",
  },
  "vedic-education": {
    image: "/images/pathashala.jpg",
    before: "/images/before/before-pathashala.jpg",
    imageAlt: "A teacher in a white veshti reading a palm-leaf manuscript on a kept Indian verandah.",
  },
  "living-beings": {
    image: "/images/desi-cows.jpg",
    before: "/images/before/before-desi-cows.jpg",
    imageAlt: "Indian cows resting in the shade of a banyan beside a sound tiled shelter.",
  },
  "seva-support": {
    image: "/images/temple-service.jpg",
    before: "/images/before/before-temple-service.jpg",
    imageAlt: "A purohit carrying a brass vessel across a kept Indian temple courtyard.",
  },
  annadanam: {
    image: "/images/annadanam.jpg",
    before: "/images/before/before-annadanam.jpg",
    imageAlt: "A sattvic meal of rice and sambar served properly on a banana leaf.",
  },
  "sacred-events": {
    image: "/images/puja-homam.jpg",
    before: "/images/before/before-puja-homam.jpg",
    imageAlt: "A homam fire set properly in a brick altar, with flowers and brass vessels beside it.",
  },
};

const slides = sevaAreas.map((area) => ({
  ...area,
  ...scenes[area.id],
}));

export function SevaCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = slides.length;

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
      aria-roledescription="carousel"
      aria-label="Areas of seva"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setPaused(false);
        }
      }}
      onKeyDown={(event) => {
        if (event.target instanceof Element && event.target.closest("[role='slider']")) {
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
    >
      <Box
        sx={{
          overflow: "hidden",
          borderRadius: 2,
          border: 1,
          borderColor: "border.default",
          bgcolor: "background.paper",
        }}
      >
        <Box
          sx={{
            display: "flex",
            transform: `translateX(-${index * 100}%)`,
            "@media (prefers-reduced-motion: no-preference)": {
              transition: "transform 600ms cubic-bezier(0.2, 0, 0, 1)",
            },
          }}
        >
          {slides.map((slide, slideIndex) => {
            const active = slideIndex === index;
            return (
              <Box
                key={slide.id}
                aria-hidden={!active}
                sx={{
                  flex: "0 0 100%",
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", md: "1.15fr 0.85fr" },
                  minHeight: { md: 440 },
                }}
              >
                <BeforeAfter beforeSrc={slide.before} afterSrc={slide.image} alt={slide.imageAlt} active={active} />
                <Stack spacing={2} sx={{ justifyContent: "center", p: { xs: 2.5, md: 4 } }}>
                  <Typography
                    component="p"
                    aria-hidden
                    sx={{
                      color: "primary.dark",
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      letterSpacing: "0.16em",
                    }}
                  >
                    {String(slideIndex + 1).padStart(2, "0")}
                  </Typography>
                  <Typography variant="h3" component="h3">
                    {slide.title}
                  </Typography>
                  <Typography variant="bodyLarge" color="text.secondary">
                    {slide.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    The left side shows the place without proper upkeep: cracked stone, an empty meal, or a shelter that is not fit. Open the right side to see it rebuilt in good shape. This illustrates the kind of care. It is not a record of one finished repair.
                  </Typography>
                  {slide.href ? (
                    <Box
                      component={Link}
                      href={slide.href}
                      tabIndex={active ? 0 : -1}
                      sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 0.75,
                        minHeight: 44,
                        width: "fit-content",
                        color: "primary.dark",
                        fontWeight: 600,
                        textDecoration: "none",
                        "&:hover": { color: "secondary.main" },
                        "& svg": {
                          transition: `transform ${motion.duration.fast}ms ${motion.easing.standard}`,
                        },
                        "@media (hover: hover) and (prefers-reduced-motion: no-preference)": {
                          "&:hover svg": { transform: "translateX(4px)" },
                        },
                        "&:focus-visible": {
                          outline: "2px solid",
                          outlineColor: "primary.dark",
                          outlineOffset: 3,
                        },
                      }}
                    >
                      Explore
                      <ArrowForwardIcon aria-hidden sx={{ fontSize: 18 }} />
                    </Box>
                  ) : null}
                </Stack>
              </Box>
            );
          })}
        </Box>
      </Box>
      <Stack direction="row" spacing={1} role="tablist" aria-label="Choose an area of seva" sx={{ mt: 2 }}>
        {slides.map((slide, slideIndex) => {
          const selected = slideIndex === index;
          return (
            <IconButton
              key={slide.id}
              role="tab"
              aria-selected={selected}
              aria-label={slide.title}
              onClick={() => go(slideIndex)}
              sx={{
                width: 44,
                height: 44,
                "&::before": {
                  content: '""',
                  width: selected ? 28 : 10,
                  height: 4,
                  borderRadius: 99,
                  bgcolor: selected ? "primary.main" : "text.muted",
                  transition: `width ${motion.duration.standard}ms ${motion.easing.standard}`,
                },
                "@media (prefers-reduced-motion: reduce)": {
                  "&::before": { transition: "none" },
                },
              }}
            />
          );
        })}
      </Stack>
    </Box>
  );
}
