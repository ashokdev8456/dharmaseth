"use client";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Box from "@mui/material/Box";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "@/theme/motion";

type BeforeAfterProps = {
  beforeSrc: string;
  afterSrc: string;
  alt: string;
  active: boolean;
  minHeight?: { xs: number; sm: number; md: number };
};

export function BeforeAfter({
  beforeSrc,
  afterSrc,
  alt,
  active,
  minHeight = { xs: 240, sm: 320, md: 440 },
}: BeforeAfterProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const dragged = useRef(false);
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    if (!active || dragged.current) {
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    setDragging(true);
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      if (dragged.current) {
        setDragging(false);
        return;
      }
      const t = Math.min(1, (now - start) / 1400);
      const wave = Math.sin(t * Math.PI);
      setPosition(50 - wave * 28);
      if (t < 1) {
        frame = window.requestAnimationFrame(tick);
      } else {
        setDragging(false);
      }
    };
    frame = window.requestAnimationFrame(tick);
    return () => {
      window.cancelAnimationFrame(frame);
      setDragging(false);
    };
  }, [active]);

  const setFromClientX = (clientX: number) => {
    const frame = frameRef.current;
    if (!frame) {
      return;
    }
    const rect = frame.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, next)));
  };

  return (
    <Box
      ref={frameRef}
      sx={{
        position: "relative",
        height: "100%",
        minHeight,
        overflow: "hidden",
        touchAction: "none",
        cursor: "ew-resize",
        userSelect: "none",
      }}
      onPointerDown={(event) => {
        if (event.button !== 0) {
          return;
        }
        dragged.current = true;
        setDragging(true);
        event.currentTarget.setPointerCapture(event.pointerId);
        setFromClientX(event.clientX);
      }}
      onPointerMove={(event) => {
        if (!event.currentTarget.hasPointerCapture(event.pointerId)) {
          return;
        }
        setFromClientX(event.clientX);
      }}
      onPointerUp={(event) => {
        if (event.currentTarget.hasPointerCapture(event.pointerId)) {
          event.currentTarget.releasePointerCapture(event.pointerId);
        }
        setDragging(false);
      }}
    >
      <Image
        src={afterSrc}
        alt={active ? alt : ""}
        fill
        sizes="(min-width: 900px) 56vw, 100vw"
        draggable={false}
        style={{ objectFit: "cover" }}
      />
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          clipPath: `inset(0 ${100 - position}% 0 0)`,
          transition: dragging ? "none" : `clip-path ${motion.duration.standard}ms ${motion.easing.standard}`,
          "@media (prefers-reduced-motion: reduce)": {
            transition: "none",
          },
        }}
      >
        <Image
          src={beforeSrc}
          alt=""
          fill
          sizes="(min-width: 900px) 56vw, 100vw"
          draggable={false}
          style={{ objectFit: "cover" }}
        />
      </Box>
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          top: 12,
          left: 12,
          zIndex: 2,
          px: 1.25,
          py: 0.5,
          borderRadius: 99,
          bgcolor: "rgba(23,23,23,0.72)",
          color: "#FFFFFF",
          fontSize: 12,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          pointerEvents: "none",
        }}
      >
        Before
      </Box>
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          top: 12,
          right: 12,
          zIndex: 2,
          px: 1.25,
          py: 0.5,
          borderRadius: 99,
          bgcolor: "rgba(255,255,255,0.92)",
          color: "#171717",
          fontSize: 12,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          pointerEvents: "none",
        }}
      >
        After
      </Box>
      <Box
        role="slider"
        tabIndex={active ? 0 : -1}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(100 - position)}
        aria-valuetext={`${Math.round(100 - position)} percent cared for`}
        aria-label="Move the line. Left opens the cared-for side. Right opens the worn side."
        onKeyDown={(event) => {
          event.stopPropagation();
          if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            dragged.current = true;
            const step = event.key === "ArrowLeft" ? -5 : 5;
            setPosition((current) => Math.min(100, Math.max(0, current + step)));
          }
        }}
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: `${position}%`,
          zIndex: 3,
          width: 44,
          transform: "translateX(-50%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "ew-resize",
          transition: dragging ? "none" : `left ${motion.duration.standard}ms ${motion.easing.standard}`,
          "&:focus-visible": {
            outline: "2px solid #FFFFFF",
            outlineOffset: 2,
          },
          "@media (prefers-reduced-motion: reduce)": {
            transition: "none",
          },
        }}
      >
        <Box aria-hidden sx={{ position: "absolute", top: 0, bottom: 0, width: 2, bgcolor: "#FFFFFF" }} />
        <Box
          aria-hidden
          sx={{
            width: 44,
            height: 44,
            borderRadius: "50%",
            bgcolor: "#FFFFFF",
            border: "2px solid",
            borderColor: "primary.main",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#171717",
            boxShadow: 2,
          }}
        >
          <ChevronLeftIcon sx={{ fontSize: 18, ml: -0.5 }} />
          <ChevronRightIcon sx={{ fontSize: 18, ml: -1 }} />
        </Box>
      </Box>
    </Box>
  );
}
