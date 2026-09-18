import React from "react";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { CheckCircle2, Truck, Handshake } from "@/components/ui/Icons";

export const WorkshopSection: React.FC = () => {
  return (
    <section className="sec" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="split">
          <div className="split-fig imgbox rv in relative">
            <ImageWithFallback
              src="/images/factory/tea-machinery-commissioning.jpg"
              alt="Tea processing machinery inspection and commissioning by expert technicians"
              fill
              unoptimized
              sizes="(max-width: 980px) 100vw, 50vw"
            />
            <span className="cap">Commissioning & Technical Inspection</span>
          </div>

          <div className="split-bd rv in">
            <span className="eyebrow">How we supply</span>
            <h2 style={{ marginTop: "16px" }}>
              Sourced from the best.{" "}
              <em style={{ fontStyle: "normal", color: "var(--grey)" }}>
                Delivered to your door.
              </em>
            </h2>
            <p className="lede" style={{ marginTop: "18px" }}>
              Gimpex Overseas works with trusted global manufacturers to bring you
              proven, high-performance tea processing machinery — sized to your needs,
              factory-tested, and commissioned at your estate by our own team.
            </p>

            <div className="fcards">
              <div className="fcard">
                <span className="ic">
                  <CheckCircle2 size={22} strokeWidth={1.7} />
                </span>
                <div>
                  <h4>Sourced from proven global manufacturers</h4>
                  <p>Every machine we supply comes from trusted manufacturers with established track records in tea processing — no compromises on quality or reliability.</p>
                </div>
              </div>

              <div className="fcard">
                <span className="ic">
                  <Truck size={22} strokeWidth={1.7} />
                </span>
                <div>
                  <h4>Factory-tested before despatch</h4>
                  <p>Each unit is tested at the manufacturer&apos;s facility before it ships. What arrives at your estate is a proven machine, not an untested one.</p>
                </div>
              </div>

              <div className="fcard">
                <span className="ic">
                  <Handshake size={22} strokeWidth={1.7} />
                </span>
                <div>
                  <h4>Commissioned on-site, spares for life</h4>
                  <p>Our team installs and hands over at your factory, trains your operators, and keeps pattern-matched spares available for every machine we have ever supplied.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
