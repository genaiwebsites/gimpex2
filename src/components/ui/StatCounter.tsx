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

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedRef.current) {
            animatedRef.current = true;

            const startAnimation = () => {
              let startTimestamp: number | null = null;

              const step = (timestamp: number) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const elapsed = timestamp - startTimestamp;
                const progress = Math.min(elapsed / duration, 1);
                
                // Quartic deceleration curve: 1 - (1 - progress)^4
                const eased = 1 - Math.pow(1 - progress, 4);
                const current = Math.round(value * eased);
                
                setDisplayValue(current.toLocaleString() + suffix);

                if (progress < 1) {
                  requestAnimationFrame(step);
                } else {
                  setDisplayValue(value.toLocaleString() + suffix);
                }
              };

              requestAnimationFrame(step);
            };

            if (delay > 0) {
              const timer = setTimeout(startAnimation, delay);
              return () => clearTimeout(timer);
            } else {
              startAnimation();
            }

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
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
