"use client";

import React, { useEffect } from "react";

export const ScrollRevealProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      document.querySelectorAll(".rv, .rvg > *").forEach((el) => {
        el.classList.add("in");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            obs.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -40px 0px",
        threshold: 0.12,
      }
    );

    const elements = document.querySelectorAll(".rv:not(.in), .rvg:not(.in) > *");
    elements.forEach((el, index) => {
      // Apply subtle stagger if element doesn't have custom delay
      const htmlEl = el as HTMLElement;
      if (!htmlEl.style.getPropertyValue("--delay")) {
        const parent = el.parentElement;
        if (parent && (parent.classList.contains("rvg") || parent.classList.contains("statbar") || parent.classList.contains("pgrid"))) {
          const siblingIndex = Array.from(parent.children).indexOf(el);
          htmlEl.style.setProperty("--delay", `${siblingIndex * 60}ms`);
        }
      }
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return <>{children}</>;
};
