"use client";

import Box from "@mui/material/Box";
import { useRef } from "react";

type MagneticProps = {
  children: React.ReactNode;
};

export function Magnetic({ children }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <Box
      ref={ref}
      sx={{
        display: "flex",
        justifyContent: "center",
        width: { xs: "100%", sm: "auto" },
        maxWidth: "100%",
        "@media (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)": {
          transition: "transform 280ms cubic-bezier(0.2, 0, 0, 1)",
        },
      }}
      onMouseMove={(event) => {
        const node = ref.current;
        const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
        if (!node || !fine || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          return;
        }
        const rect = node.getBoundingClientRect();
        const dx = Math.max(-4, Math.min(4, (event.clientX - (rect.left + rect.width / 2)) * 0.12));
        const dy = Math.max(-4, Math.min(4, (event.clientY - (rect.top + rect.height / 2)) * 0.12));
        node.style.transform = `translate(${dx}px, ${dy}px)`;
      }}
      onMouseLeave={() => {
        if (ref.current) {
          ref.current.style.transform = "none";
        }
      }}
    >
      {children}
    </Box>
  );
}
