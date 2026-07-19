"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollRevealInit() {
  const pathname = usePathname();

  useEffect(() => {
    // Select all reveal elements in the document
    const revealElements = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right, .reveal-scale"
    );

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.04,
        rootMargin: "0px 0px 100px 0px", // Trigger 100px before entering the viewport
      }
    );

    revealElements.forEach((el) => {
      // Remove visible class first to allow animate on route load
      el.classList.remove("visible");
      revealObserver.observe(el);
    });

    return () => {
      revealObserver.disconnect();
    };
  }, [pathname]); // Re-run whenever pathname changes

  return null; // Side-effect only component
}
