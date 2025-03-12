"use client";

import { useEffect } from "react";

export default function RemoveDarkClass() {
  useEffect(() => {
    // Remove the 'dark' class from the HTML element
    document.documentElement.classList.remove("dark");
  }, []);

  return null;
}
