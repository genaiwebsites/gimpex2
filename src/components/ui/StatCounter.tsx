"use client";

import React, { useEffect, useRef, useState } from "react";

interface StatCounterProps {
  value: number;
  suffix?: string;
  delay?: number;
  duration?: number;
  className?: string;
}

export const StatCounter: React.FC<StatCounterProps> = ({
  value,
  suffix = "",
  delay = 0,
  duration = 1400,
  className,
}) => {
  const [displayValue, setDisplayValue] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  const animatedRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setDisplayValue(value.toLocaleString() + suffix);
      return;
    }

    const startAnimation = () => {
      if (animatedRef.current) return;
      animatedRef.current = true;

      const run = () => {
        let startTimestamp: number | null = null;

        const step = (timestamp: number) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const elapsed = timestamp - startTimestamp;
          const progress = Math.min(elapsed / duration, 1);
          // Quartic deceleration: 1 - (1 - t)^4
          const eased = 1 - Math.pow(1 - progress, 4);
          const current = Math.round(value * eased);
          setDisplayValue(current.toLocaleString() + suffix);

          if (progress < 1) {
            rafRef.current = requestAnimationFrame(step);
          } else {
            setDisplayValue(value.toLocaleString() + suffix);
          }
        };

        rafRef.current = requestAnimationFrame(step);
      };

      if (delay > 0) {
        timerRef.current = setTimeout(run, delay);
      } else {
        run();
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startAnimation();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (timerRef.current) clearTimeout(timerRef.current);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      // Reset so StrictMode double-invoke works correctly
      animatedRef.current = false;
    };
  }, [value, suffix, delay, duration]);

  return (
    <span
      ref={ref}
      className={className}
      style={{ fontVariantNumeric: "tabular-nums" }}
    >
      {displayValue}
    </span>
  );
};
