"use client";

import React, { useEffect, useRef, useState } from "react";

interface StatCounterProps {
  value: number;
  suffix?: string;
  className?: string;
}

export const StatCounter: React.FC<StatCounterProps> = ({
  value,
  suffix = "",
  className,
}) => {
  const [displayValue, setDisplayValue] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setDisplayValue(value.toLocaleString() + suffix);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedRef.current) {
            animatedRef.current = true;
            let startTimestamp: number | null = null;
            const duration = 1500;

            const step = (timestamp: number) => {
              if (!startTimestamp) startTimestamp = timestamp;
              const progress = Math.min((timestamp - startTimestamp) / duration, 1);
              // cubic ease out: 1 - Math.pow(1 - progress, 3)
              const eased = 1 - Math.pow(1 - progress, 3);
              const current = Math.round(value * eased);
              setDisplayValue(current.toLocaleString() + suffix);

              if (progress < 1) {
                requestAnimationFrame(step);
              } else {
                setDisplayValue(value.toLocaleString() + suffix);
              }
            };

            requestAnimationFrame(step);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [value, suffix]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
};
