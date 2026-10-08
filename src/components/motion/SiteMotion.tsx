"use client";

import Box from "@mui/material/Box";
import { useEffect, useRef } from "react";
import Image from "next/image";

export function SiteMotion() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) {
      return;
    }

    document.documentElement.classList.add("brand-cursor");
    const node = cursorRef.current;
    const move = (event: PointerEvent) => {
      if (!node) {
        return;
      }
      node.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
      const target = event.target instanceof Element ? event.target : null;
      const active = Boolean(target?.closest("a, button, [role='button'], input, textarea, select"));
      node.dataset.active = active ? "true" : "false";
    };

    window.addEventListener("pointermove", move);
    return () => {
      document.documentElement.classList.remove("brand-cursor");
      window.removeEventListener("pointermove", move);
    };
  }, []);

  return (
    <>
      <Box
        aria-hidden
        sx={{
          position: "fixed",
          inset: 0,
          zIndex: 1600,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.default",
          pointerEvents: "none",
          animation: "brand-preloader 640ms cubic-bezier(0.2, 0, 0, 1) both",
          "@keyframes brand-preloader": {
            "0%, 45%": { opacity: 1, visibility: "visible" },
            "100%": { opacity: 0, visibility: "hidden" },
          },
          "@media (prefers-reduced-motion: reduce)": {
            display: "none",
          },
        }}
      >
        <Image
          src="/images/brand/dharmasethu-trust-logo.svg"
          alt=""
          width={753}
          height={444}
          unoptimized
          priority
          style={{ height: 88, width: "auto" }}
        />
      </Box>
      <Box
        ref={cursorRef}
        aria-hidden
        sx={{
          display: "none",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 1700,
          width: 18,
          height: 18,
          mt: "-9px",
          ml: "-9px",
          border: "1.5px solid",
          borderColor: "primary.main",
          borderRadius: "50%",
          pointerEvents: "none",
          mixBlendMode: "multiply",
          transition: "width 160ms, height 160ms, margin 160ms, background-color 160ms",
          "&[data-active='true']": {
            width: 36,
            height: 36,
            mt: "-18px",
            ml: "-18px",
            bgcolor: "rgba(255, 159, 0, 0.16)",
          },
          "@media (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)": {
            display: "block",
          },
        }}
      />
    </>
  );
}
