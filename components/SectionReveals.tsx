"use client";

import { animate, useReducedMotion } from "framer-motion";
import { useEffect } from "react";

export function SectionReveals() {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;

    const sections = Array.from(document.querySelectorAll<HTMLElement>("main > section:not(.th-hero)"));
    const controls = [] as ReturnType<typeof animate>[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const section = entry.target as HTMLElement;
          if (!entry.isIntersecting || section.dataset.revealed) return;
          section.dataset.revealed = "true";
          controls.push(animate(section, { opacity: [0, 1], y: [26, 0] }, { duration: 0.62, ease: [0.22, 1, 0.36, 1] }));
          observer.unobserve(section);
        });
      },
      { threshold: 0.12 }
    );

    sections.forEach((section) => {
      section.style.opacity = "0";
      section.style.transform = "translateY(26px)";
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
      controls.forEach((control) => control.stop());
      sections.forEach((section) => {
        section.style.opacity = "";
        section.style.transform = "";
      });
    };
  }, [reduceMotion]);

  return null;
}
