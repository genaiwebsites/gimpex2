import React from "react";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { Gauge, ShieldCheck, Wrench } from "@/components/ui/Icons";

export const WorkshopSection: React.FC = () => {
  return (
    <section className="sec" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="split">
          <div className="split-fig imgbox rv in relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1764114440403-4dd539cb582a?auto=format&fit=crop&w=1400&q=85"
              alt="Precision lathe machining and steel component fabrication in works"
              fill
              sizes="(max-width: 980px) 100vw, 50vw"
            />
            <span className="cap">Machining bay · Works</span>
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
                  <Gauge size={22} strokeWidth={1.7} />
                </span>
                <div>
                  <h4>Built to your leaf, not a brochure</h4>
                  <p>Throughput, altitude and moisture data from your estate set the final specification before steel is cut.</p>
                </div>
              </div>

              <div className="fcard">
                <span className="ic">
                  <ShieldCheck size={22} strokeWidth={1.7} />
                </span>
                <div>
                  <h4>Load-tested before despatch</h4>
                  <p>Every unit runs under load on our floor. What ships is what was proven — witnessed by the client on request.</p>
                </div>
              </div>

              <div className="fcard">
                <span className="ic">
                  <Wrench size={22} strokeWidth={1.7} />
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
