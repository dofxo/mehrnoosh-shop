// app/RemoveDarkClass.tsx
"use client";

// Mark this as a client component
import { useEffect } from "react";

// app/RemoveDarkClass.tsx

export default function RemoveDarkClass() {
  useEffect(() => {
    // Remove the 'dark' class from the HTML element
    document.documentElement.classList.remove("dark");
  }, []);

  return null; // This component doesn't render anything
}
