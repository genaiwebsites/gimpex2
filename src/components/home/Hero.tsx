import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { StatBar } from "./StatBar";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

export const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-card imgbox rv in">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&w=2400&q=80"
          alt="Tea cultivation terraces at sunrise"
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-inner">
          <div className="container">
            <div className="hero-grid">
              <div>
                <span className="badge">Tea processing technology since 1997</span>
                <h1>
                  Machinery that turns <em>green leaf</em> into finished tea.
                </h1>
                <p className="hero-sub">
                  We design, build and commission complete CTC and orthodox processing lines from our Kolkata works — installed and running in more than twenty countries.
                </p>
                <div className="hero-cta">
                  <Button variant="lime" href="/products">
                    Explore machinery
                  </Button>
                  <Button variant="ghost" pad arrow={false} href="/contact">
                    Talk to an engineer
                  </Button>
                </div>
              </div>

              <aside className="hero-note">
                <h4>Our commitment</h4>
                <p>
                  Every machine is built to your estate&apos;s leaf, throughput and altitude — then load-tested on our floor before it ships. Commissioning, training and lifetime spares included.
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
