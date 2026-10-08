"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";

export function RouteScroll() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const root = document.documentElement;
    if (pathname === "/") root.classList.add("home-screen");
    else root.classList.remove("home-screen");
    void root.offsetHeight;
    if (window.location.hash) return;
    window.scrollTo(0, 0);
    const frame = window.requestAnimationFrame(() => {
      if (!window.location.hash) window.scrollTo(0, 0);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}
