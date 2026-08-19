import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { milestones } from "@/data/milestones";
import { StatCounter } from "@/components/ui/StatCounter";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { SlidersHorizontal, ClipboardCheck, TrendingUp, ShieldCheck } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "About",
  description: "From a Kolkata workshop in 1997 to an ISO 9001 Star Export House supplying tea machinery to twenty countries.",
};

const qualityCards = [
  {
    code: "Q—01",
    title: "Specific, never generic",
    desc: "Machinery built to each customer's process — never a one-size build off the shelf.",
    icon: <SlidersHorizontal size={22} strokeWidth={1.6} />,
  },
  {
    code: "Q—02",
    title: "Documented at every stage",
    desc: "Material, machining, assembly and load test are each inspected and recorded.",
    icon: <ClipboardCheck size={22} strokeWidth={1.6} />,
  },
  {
    code: "Q—03",
    title: "Continual improvement",
    desc: "Identified operational areas are reviewed and improved through a disciplined QMS cycle.",
    icon: <TrendingUp size={22} strokeWidth={1.6} />,
  },
  {
    code: "Q—04",
    title: "Supported for life",
    desc: "Commissioning, operator training and pattern-matched spares for every machine we ship.",
    icon: <ShieldCheck size={22} strokeWidth={1.6} />,
  },
];

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
              <h1>
                A workshop that became a <em>global supplier.</em>
              </h1>
              <p className="lede">
                Established 1997 in Kolkata. Today an ISO 9001-certified Star Export House with machinery running in more than twenty countries.
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
                Gimpex began where serious machine-building usually begins: a small floor, a few lathes, and customers who{" "}
                <em>could not afford a machine that failed mid-season.</em>
              </p>
              <p className="small">
                The early work was for Assam and Dooars estates — rollers, troughs, repair jobs that had to hold through a full flush. The discipline that period demanded still runs the company: machine to drawing, test at load, ship nothing unproven.
              </p>
              <p className="small" style={{ marginTop: "14px" }}>
                Export began with East Africa in the 2000s. Kenyan and Rwandan factories wanted CTC lines that could be maintained locally with simple tooling — a design philosophy we already practised. From there the order book widened to Sri Lanka, Vietnam, Indonesia, Yunnan and Papua New Guinea.
              </p>
            </div>
          </div>

          <div className="statbar rv in" style={{ marginTop: "clamp(36px,4vw,52px)" }}>
            <div>
              <b><StatCounter value={27} delay={0} /></b>
              <span>Years of manufacturing</span>
            </div>
            <div>
              <b><StatCounter value={17} delay={100} /></b>
              <span>Product lines</span>
            </div>
            <div>
              <b><StatCounter value={70} suffix="+" delay={200} /></b>
              <span>Client companies</span>
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

      <section className="sec" id="quality" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="panel dark on-dark">
            <div className="sec-hd">
              <div className="rv in">
                <span className="eyebrow">Quality policy</span>
                <h2>
                  Written down, audited, <em>and kept.</em>
                </h2>
              </div>
              <p className="lede rv in">
                Our ISO 9001 quality management system commits us in writing to four things on every single order.
              </p>
            </div>

            <div
              className="pgrid6 rvg in"
              style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}
            >
              {qualityCards.map((qc) => (
                <div key={qc.code} className="pstep">
                  <div className="ic">{qc.icon}</div>
                  <span className="n">{qc.code}</span>
                  <h3>{qc.title}</h3>
                  <p>{qc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="statement rv in">
            <span className="eyebrow">Group</span>
            <div>
              <p className="big">
                Our sister company <em>Gimpex Infratade</em> handles the group&apos;s metal and scrap trading — keeping our raw material supply chain in the family.
              </p>
            </div>
          </div>

          <div style={{ marginTop: "clamp(40px,5vw,64px)" }}>
            <CtaBanner
              eyebrow="Visit the works"
              title="The Kolkata factory is open to clients by appointment."
              buttonText="Arrange a visit"
              buttonHref="/contact"
            />
          </div>
        </div>
      </section>
    </>
  );
}
