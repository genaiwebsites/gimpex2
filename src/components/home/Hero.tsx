"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { StatBar } from "./StatBar";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

export const Hero: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);
  const heroCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (heroCardRef.current) {
            const rect = heroCardRef.current.getBoundingClientRect();
            // Calculate parallax only when hero section is in view
            if (rect.bottom > 0 && rect.top < window.innerHeight) {
              const scrolled = Math.max(0, -rect.top);
              setOffsetY(scrolled * 0.22);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="hero">
      <div ref={heroCardRef} className="hero-card imgbox rv in">
        {/* Parallax Layer */}
        <div
          className="hero-parallax-layer"
          style={{
            transform: `translate3d(0, ${offsetY}px, 0)`,
          }}
        >
          {/* Ken Burns Animated Image Wrapper */}
          <div className="hero-kenburns-wrap">
            <ImageWithFallback
              src="/images/hero/tea-machinery-plant-hero.jpg"
              alt="High-capacity modern industrial tea processing plant floor with CTC machinery, sorting decks, and automated conveyors"
              fill
              priority
              unoptimized
              className="hero-bg-img"
              sizes="100vw"
            />
          </div>
        </div>

        {/* Top Navbar Blur & Gradual Diffusion Layer */}
        <div className="hero-blur-layer" aria-hidden="true" />

        <div className="hero-inner">
          <div className="container">
            <div className="hero-grid">
              <div>
                <span
                  className="eyebrow hero-eyebrow"
                  style={{
                    color: "rgba(255, 255, 255, 0.92)",
                    textShadow: "0 2px 10px rgba(0, 0, 0, 0.85)",
                    marginBottom: "12px",
                    display: "inline-flex",
                    letterSpacing: "0.12em",
                  }}
                >
                  The Tea Machinery People · Tea Leaf to Tea
                </span>
                <h1>
                  Quality tea machinery:{" "}
                  <em>manufactured, supplied and commissioned.</em>
                </h1>
                <p className="hero-sub">
                  Gimpex Overseas Pvt. Ltd. is a Kolkata-based manufacturer and authorised supplier of complete CTC, Green Tea, and Orthodox tea processing machinery, trusted by estates in more than twenty countries.
                </p>
                <div className="hero-cta">
                  <Button variant="lime" href="/products">
                    Explore our machines
                  </Button>
                  <Button variant="ghost" pad arrow={false} href="/contact">
                    Talk to our team
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <StatBar />
    </section>
  );
};
