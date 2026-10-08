"use client";

import Box from "@mui/material/Box";
import { useRef } from "react";

type TiltProps = {
  children: React.ReactNode;
};

export function Tilt({ children }: TiltProps) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <Box
      ref={ref}
      sx={{
        height: "100%",
        transformStyle: "preserve-3d",
        "@media (prefers-reduced-motion: no-preference)": {
          transition: "transform 180ms cubic-bezier(0.2, 0, 0, 1)",
        },
      }}
      onMouseMove={(event) => {
        const node = ref.current;
        if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          return;
        }
        const rect = node.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width;
        const py = (event.clientY - rect.top) / rect.height;
        const rotateX = (0.5 - py) * 8;
        const rotateY = (px - 0.5) * 8;
        node.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
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
