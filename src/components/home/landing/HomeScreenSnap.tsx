"use client";

import { useEffect } from "react";

export function HomeScreenSnap() {
  useEffect(() => {
    document.documentElement.classList.add("home-screen");
    return () => document.documentElement.classList.remove("home-screen");
  }, []);

  return null;
}
