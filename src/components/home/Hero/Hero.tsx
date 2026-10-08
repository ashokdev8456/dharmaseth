"use client";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useEffect, useState } from "react";
import { PageContainer } from "@/components/common/PageContainer";
import { Magnetic } from "@/components/motion/Magnetic";
import { AppButton } from "@/components/ui/AppButton";
import { heroContent, heroSlides } from "@/data/home";
import { motion } from "@/theme/motion";

const SLIDE_MS = 3000;

function rise(delay: number) {
  return {
    "@keyframes hero-copy": {
      from: { opacity: 0, transform: "translateY(30px)" },
      to: { opacity: 1, transform: "none" },
    },
    "@media (prefers-reduced-motion: no-preference)": {
      animation: `hero-copy ${motion.duration.cinematic}ms ${motion.easing.standard} ${delay}ms both`,
    },
  };
}

export function Hero() {
  const [index, setIndex] = useState(0);
  const count = heroSlides.length;
  const slide = heroSlides[index];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % count);
    }, SLIDE_MS);
    return () => window.clearInterval(timer);
  }, [count]);

  const go = (next: number) => {
    setIndex((next + count) % count);
  };

  return (
    <Box
      component="section"
      aria-roledescription="carousel"
      aria-label="Home banner"
      onKeyDown={(event) => {
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
        display: "flex",
        flexDirection: "column",
        height: "100svh",
        mt: { xs: "-64px", lg: "-72px" },
        overflow: "hidden",
        bgcolor: "#17130F",
      }}
    >
      <Box sx={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden" }}>
        {heroSlides.map((item, itemIndex) => {
          const active = itemIndex === index;
          return (
            <Box
              key={item.id}
              aria-hidden={!active}
              sx={{
                position: "absolute",
                inset: 0,
                zIndex: active ? 1 : 0,
                opacity: active ? 1 : 0,
                "@media (prefers-reduced-motion: no-preference)": {
                  transition: `opacity ${motion.duration.reveal}ms ${motion.easing.standard}`,
                },
                "& img": {
                  objectFit: "cover",
                  objectPosition: "center",
                  width: "100%",
                  height: "100%",
                },
              }}
            >
              <Image
                src={item.image}
                alt={active ? item.imageAlt : ""}
                fill
                priority={itemIndex === 0}
                quality={90}
                sizes="100vw"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </Box>
          );
        })}
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            inset: 0,
            zIndex: 2,
            pointerEvents: "none",
            background: {
              xs: "linear-gradient(180deg, rgba(7,9,15,0.35) 0%, rgba(7,9,15,0.08) 36%, rgba(7,9,15,0.92) 100%)",
              md: "linear-gradient(90deg, rgba(7,9,15,0.94) 0%, rgba(10,14,23,0.72) 42%, rgba(7,9,15,0.4) 100%), linear-gradient(180deg, rgba(7,9,15,0.35) 0%, transparent 28%, rgba(7,9,15,0.88) 100%)",
            },
          }}
        />
      </Box>

      <PageContainer
        sx={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flex: 1,
          alignItems: "flex-end",
          width: "100%",
          pt: { xs: "96px", lg: "112px" },
          pb: { xs: 4, md: 7 },
        }}
      >
        <Stack spacing={2.5} sx={{ width: "100%", maxWidth: 860 }}>
          <Stack key={slide.id} spacing={2}>
            <Typography
              variant="overline"
              sx={{ color: "#E8C99A", letterSpacing: "0.18em", textShadow: "0 1px 2px rgba(0,0,0,0.45)", ...rise(0) }}
            >
              {slide.eyebrow}
            </Typography>
            <Typography
              id="hero-heading"
              component="h1"
              variant="display"
              sx={{
                maxWidth: "14ch",
                textWrap: "balance",
                color: "#FFFFFF",
                fontSize: "clamp(2.6rem, 1rem + 5.4vw, 6rem)",
                lineHeight: 0.9,
                fontWeight: 500,
                textShadow: "0 1px 2px rgba(0,0,0,0.45)",
                ...rise(140),
              }}
            >
              {slide.title}
            </Typography>
            <Typography
              variant="bodyLarge"
              sx={{ maxWidth: 560, color: "rgba(255,255,255,0.78)", textShadow: "0 1px 2px rgba(0,0,0,0.45)", ...rise(280) }}
            >
              {slide.description}
            </Typography>
          </Stack>
          <Typography
            variant="body2"
            sx={{ color: "rgba(255,255,255,0.92)", textShadow: "0 1px 2px rgba(0,0,0,0.45)" }}
            aria-live="polite"
          >
            Image {index + 1} of {count}
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ alignItems: { sm: "center" }, ...rise(420) }}>
            <Magnetic>
              <AppButton
                href={heroContent.primaryCta.href}
                variant="contained"
                trailingArrow
                sx={{ width: { xs: "100%", sm: "auto" } }}
              >
                {heroContent.primaryCta.label}
              </AppButton>
            </Magnetic>
            <AppButton
              href={heroContent.secondaryCta.href}
              variant="outlined"
              color="inherit"
              sx={{
                width: { xs: "100%", sm: "auto" },
                color: "#FFFFFF",
                borderColor: "rgba(255,255,255,0.72)",
                "&:hover": { borderColor: "#FFFFFF", bgcolor: "rgba(255,255,255,0.08)" },
              }}
            >
              {heroContent.secondaryCta.label}
            </AppButton>
          </Stack>
          <Stack direction="row" spacing={1} role="tablist" aria-label="Choose a banner image" sx={rise(560)}>
            {heroSlides.map((item, itemIndex) => {
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
                      width: selected ? 28 : 10,
                      height: 4,
                      borderRadius: 99,
                      bgcolor: selected ? "primary.main" : "rgba(255,255,255,0.85)",
                      transition: `width ${motion.duration.standard}ms ${motion.easing.standard}, background-color ${motion.duration.fast}ms ${motion.easing.standard}`,
                    },
                    "@media (prefers-reduced-motion: reduce)": {
                      "&::before": { transition: "none" },
                    },
                  }}
                />
              );
            })}
          </Stack>
          <Box
            component="a"
            href="#mission-heading"
            sx={{
              display: { xs: "none", md: "inline-flex" },
              alignItems: "center",
              gap: 1.5,
              alignSelf: "flex-start",
              minHeight: 44,
              color: "rgba(255,255,255,0.92)",
              textDecoration: "none",
              letterSpacing: "0.16em",
              fontSize: "0.72rem",
              fontWeight: 600,
              textTransform: "uppercase",
              ...rise(700),
              "& span": {
                width: "1px",
                height: 36,
                bgcolor: "currentColor",
                transformOrigin: "top",
                "@keyframes scroll-line": {
                  "0%, 100%": { transform: "scaleY(0.35)", opacity: 0.45 },
                  "50%": { transform: "scaleY(1)", opacity: 1 },
                },
                "@media (prefers-reduced-motion: no-preference)": {
                  animation: "scroll-line 2.4s cubic-bezier(0.2, 0, 0, 1) infinite",
                },
              },
            }}
          >
            <Box component="span" />
            Scroll
          </Box>
        </Stack>
      </PageContainer>
    </Box>
  );
}
