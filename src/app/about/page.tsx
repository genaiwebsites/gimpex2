import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { milestones } from "@/data/milestones";
import { StatCounter } from "@/components/ui/StatCounter";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

export const metadata: Metadata = {
  title: "About",
  description: "From a Kolkata workshop in 1997 to an ISO 9001 Star Export House supplying tea machinery to twenty countries.",
};

const qualityCards = [
  {
    code: "Q—01",
    title: "Specific, never generic",
    desc: "Machinery built to each customer's process — never a one-size build off the shelf.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3.2" />
        <path d="M12 2.8v2.6M12 18.6v2.6M4.6 7.4l2.2 1.3M17.2 15.3l2.2 1.3M4.6 16.6l2.2-1.3M17.2 8.7l2.2-1.3" />
      </svg>
    ),
  },
  {
    code: "Q—02",
    title: "Documented at every stage",
    desc: "Material, machining, assembly and load test are each inspected and recorded.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l7.5 3v5.6c0 4.6-3.1 8.1-7.5 9.4-4.4-1.3-7.5-4.8-7.5-9.4V6z" />
        <path d="M9 12l2.2 2.2L15.5 10" />
      </svg>
    ),
  },
  {
    code: "Q—03",
    title: "Continual improvement",
    desc: "Identified operational areas are reviewed and improved through a disciplined QMS cycle.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21c6-2 8.4-7 8.4-14C13.2 7 8 9 6 15c0 3 2.2 6 6 6z" />
        <path d="M12 21c0-6 2.8-10 8-13" />
      </svg>
    ),
  },
  {
    code: "Q—04",
    title: "Supported for life",
    desc: "Commissioning, operator training and pattern-matched spares for every machine we ship.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 7h11v9H3zM14 10h4l3 3v3h-7z" />
        <circle cx="7" cy="18" r="1.8" />
        <circle cx="17.5" cy="18" r="1.8" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="pbanner">
        <div className="pbanner-card imgbox rv in relative">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1582793988951-9aed5509eb97?auto=format&fit=crop&w=1400&q=80"
            alt="Tea estate hillside"
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
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
              <b><StatCounter value={27} /></b>
              <span>Years of manufacturing</span>
            </div>
            <div>
              <b><StatCounter value={17} /></b>
              <span>Product lines</span>
            </div>
            <div>
              <b><StatCounter value={70} suffix="+" /></b>
              <span>Client companies</span>
            </div>
            <div>
              <b><StatCounter value={20} suffix="+" /></b>
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
                src="https://images.unsplash.com/photo-1563822249366-3efb23b8e0c9?auto=format&fit=crop&w=1600&q=80"
                alt="Highland tea plantation"
                fill
                sizes="(max-width: 980px) 100vw, 50vw"
              />
              <span className="cap">Client estate · highlands</span>
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
