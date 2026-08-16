import React from "react";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

export const WorkshopSection: React.FC = () => {
  return (
    <section className="sec" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="split">
          <div className="split-fig imgbox rv in relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1100&q=80"
              alt="Machining bay in the Kolkata works"
              fill
              sizes="(max-width: 980px) 100vw, 50vw"
            />
            <span className="cap">Machining bay · Kolkata</span>
          </div>

          <div className="split-bd rv in">
            <span className="eyebrow">The workshop</span>
            <h2 style={{ marginTop: "16px" }}>
              One floor. Every machine{" "}
              <em style={{ fontStyle: "normal", color: "var(--grey)" }}>
                starts here.
              </em>
            </h2>
            <p className="lede" style={{ marginTop: "18px" }}>
              Fabrication, machining, assembly and test-running all happen under one roof in Kolkata — which is why our lead times hold and our tolerances don&apos;t drift.
            </p>

            <div className="fcards">
              <div className="fcard">
                <span className="ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3.2" />
                    <path d="M12 2.8v2.6M12 18.6v2.6M4.6 7.4l2.2 1.3M17.2 15.3l2.2 1.3M4.6 16.6l2.2-1.3M17.2 8.7l2.2-1.3" />
                  </svg>
                </span>
                <div>
                  <h4>Built to your leaf, not a brochure</h4>
                  <p>Throughput, altitude and moisture data from your estate set the final specification before steel is cut.</p>
                </div>
              </div>

              <div className="fcard">
                <span className="ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3l7.5 3v5.6c0 4.6-3.1 8.1-7.5 9.4-4.4-1.3-7.5-4.8-7.5-9.4V6z" />
                    <path d="M9 12l2.2 2.2L15.5 10" />
                  </svg>
                </span>
                <div>
                  <h4>Load-tested before despatch</h4>
                  <p>Every unit runs under load on our floor. What ships is what was proven — witnessed by the client on request.</p>
                </div>
              </div>

              <div className="fcard">
                <span className="ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.5 5.5a4.5 4.5 0 016 5.6l-9 9-3.6-3.6 9-9a4.5 4.5 0 01-2.4-2z" />
                    <path d="M7.9 16.5L4 20.4" />
                  </svg>
                </span>
                <div>
                  <h4>Commissioned on site, spares for life</h4>
                  <p>Our engineers install and hand over in your factory, and pattern-matched spares stay available for every machine we&apos;ve sold.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
