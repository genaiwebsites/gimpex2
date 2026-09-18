"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
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
              src="/images/hero/tea-plantation-hero.jpg"
              alt="Lush tea cultivation terrace hills with workers harvesting fresh green tea leaves at sunrise"
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
                <h1>
                  Quality tea machinery —{" "}
                  <em>sourced, supplied and commissioned.</em>
                </h1>
                <p className="hero-sub">
                  Gimpex Overseas is a Kolkata-based authorised supplier of complete CTC and orthodox tea processing machinery — trusted by estates in more than twenty countries.
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

              <aside className="hero-note">
                <h4>Our promise</h4>
                <p>
                  Every machine is sourced from proven global manufacturers, sized to your estate&apos;s leaf, throughput and altitude — then commissioned on-site by our own team. Lifetime spares and after-sales support included.
                </p>
                <Link className="tlink" href="/about">
                  How we work{" "}
                  <span className="circ">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7M8 7h9v9" />
                    </svg>
                  </span>
                </Link>
              </aside>
            </div>
          </div>
        </div>
      </div>
      <StatBar />
    </section>
  );
};
