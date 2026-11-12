import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { milestones } from "@/data/milestones";
import { StatCounter } from "@/components/ui/StatCounter";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

export const metadata: Metadata = {
  title: "About",
  description: "An enterprise that grew into a global manufacturer and supplier to all major tea producing countries worldwide.",
};

export default function AboutPage() {
  return (
    <>
      <section className="pbanner">
        <div className="pbanner-card imgbox rv in relative">
          <ImageWithFallback
            src="/images/about/about-hero-dark-misty-tea.jpg"
            alt="Misty highland tea estate slopes and deep green plantations at twilight"
            fill
            priority
            unoptimized
            sizes="(max-width: 1280px) 100vw, 1440px"
          />
          <div className="pbanner-blur-layer" aria-hidden="true" />
          <div className="pbanner-in">
            <div className="container">
              <div className="crumb">
                <Link href="/">Home</Link>
                <span>/</span>
                <span>About</span>
              </div>
              <h1 style={{ maxWidth: "24ch" }}>
                An enterprise that became a <em>global manufacturer &amp; supplier</em> to all major tea producing countries worldwide.
              </h1>
              <p className="lede">
                Established 1997 in Kolkata. Today an ISO 9001-certified Star Export House with complete CTC, Green Tea, and Orthodox machinery running in more than twenty countries.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="container">
          <div className="statement rv in">
            <span className="eyebrow">Our story</span>
            <div>
              <p className="big">
                Gimpex Overseas Pvt. Ltd. began where trust in machinery usually begins: a solid relationship with the right manufacturers, and customers who{" "}
                <em>could not afford a machine that failed mid-season.</em>
              </p>
              <p className="small">
                The early work was for Assam and Dooars estates: manufacturing, sourcing and commissioning rollers, troughs and dryers that had to hold through a full flush. The discipline that period demanded still runs the company: manufacture and source with uncompromising precision, test before despatch, commission nothing unproven.
              </p>
              <p className="small" style={{ marginTop: "14px" }}>
                Export began with East Africa in the 2000s. Kenyan and Rwandan factories wanted CTC and Orthodox lines they could maintain locally with simple tooling. From there the order book widened to Sri Lanka, Vietnam, Indonesia, Yunnan and Papua New Guinea.
              </p>
            </div>
          </div>

          <div className="statbar rv in" style={{ marginTop: "clamp(36px,4vw,52px)" }}>
            <div>
              <b><StatCounter value={27} delay={0} /></b>
              <span>Years of experience</span>
            </div>
            <div>
              <b><StatCounter value={50} suffix="+" delay={100} /></b>
              <span>Projects completed</span>
            </div>
            <div>
              <b><StatCounter value={150} suffix="+" delay={200} /></b>
              <span>Tea companies served</span>
            </div>
            <div>
              <b><StatCounter value={20} suffix="+" delay={300} /></b>
              <span>Countries served</span>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="split">
            <div className="split-bd rv in">
              <span className="eyebrow">Milestones</span>
              <h2 style={{ marginTop: "16px" }}>
                Three decades,{" "}
                <em style={{ fontStyle: "normal", color: "var(--grey)" }}>
                  in brief.
                </em>
              </h2>
              <p className="lede" style={{ marginTop: "16px" }}>
                From a single Kolkata floor to installations on four continents.
              </p>
            </div>
            <div className="split-fig imgbox rv in relative">
              <ImageWithFallback
                src="/images/about/tea-plantation-sunburst-about.jpg"
                alt="Sunburst radiating over rolling emerald green tea plantation mountain terraces"
                fill
                unoptimized
                style={{ transform: "scale(1.10)", transformOrigin: "center" }}
                sizes="(max-width: 980px) 100vw, 50vw"
              />
              <span className="cap">Leaf sorting &amp; withering · Client works</span>
            </div>
          </div>

          <div className="tl rvg in" style={{ marginTop: "22px" }}>
            {milestones.map((m) => (
              <div key={m.year} className="tlc">
                <span className="yr">{m.year}</span>
                <h3>{m.title}</h3>
                <p>{m.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="container">
          <CtaBanner
            eyebrow="Visit our office"
            title="Our Kolkata office is open to clients by appointment."
            buttonText="Arrange a meeting"
            buttonHref="/contact"
          />
        </div>
      </section>
    </>
  );
}
