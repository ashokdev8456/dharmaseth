"use client";

import Box from "@mui/material/Box";
import { usePathname } from "next/navigation";

type PageTransitionProps = {
  children: React.ReactNode;
};

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <Box
      key={pathname}
      sx={{
        "@keyframes page-in": {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        "@media (prefers-reduced-motion: no-preference)": {
          animation: "page-in 500ms cubic-bezier(0.2, 0, 0, 1) both",
        },
      }}
    >
      {children}
    </Box>
  );
}
