"use client";

import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type TabKey = "who" | "supply" | "how" | "reach";

export const AboutTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("who");

  const tabs: { key: TabKey; label: string }[] = [
    { key: "who", label: "Who we are" },
    { key: "supply", label: "What we supply" },
    { key: "how", label: "How we work" },
    { key: "reach", label: "Where we reach" },
  ];

  return (
    <section className="sec">
      <div className="container">
        <div className="tabs rv in">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={cn("tab", activeTab === tab.key && "on")}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="tabpanes">
          {activeTab === "who" && (
            <div className="on">
              <div className="statement">
                <span className="eyebrow">About Gimpex</span>
                <div>
                  <p className="big">
                    Twenty-seven years supplying machinery for one of the oldest industries on earth —{" "}
                    <em>and standing behind every installation.</em>
                  </p>
                  <p className="small">
                    Gimpex Overseas is a Kolkata-based authorised supplier and dealer of complete tea processing machinery.
                    Established in 1997, ISO 9001 certified, and recognised by the Government of India as a Star Export House —
                    we source equipment from trusted global manufacturers and commission it to tea estates across Kenya, Rwanda, Sri Lanka, Vietnam, Indonesia and beyond.
                  </p>
                  <Link className="tlink" href="/about">
                    More about us{" "}
                    <span className="circ">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17L17 7M8 7h9v9" />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          )}

          {activeTab === "supply" && (
            <div className="on">
              <div className="statement">
                <span className="eyebrow">The catalogue</span>
                <div>
                  <p className="big">
                    Seventeen product lines covering{" "}
                    <em>every stage from withering trough to tea bag.</em>
                  </p>
                  <p className="small">
                    We supply rotorvanes, Terman CTC units, continuous fermenting machines, microwave and vibro fluid-bed dryers,
                    colour sorters, fibre extractors, tea bag machines, continuous weighers — plus ancillary toolroom equipment.
                    Every machine is sourced from proven manufacturers and supplied with full technical documentation, spares and after-sales support.
                  </p>
                  <Link className="tlink" href="/products">
                    See all machinery{" "}
                    <span className="circ">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17L17 7M8 7h9v9" />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          )}

          {activeTab === "how" && (
            <div className="on">
              <div className="statement">
                <span className="eyebrow">Our method</span>
                <div>
                  <p className="big">
                    Sized to your leaf data, factory-tested before despatch,{" "}
                    <em>commissioned by our own team.</em>
                  </p>
                  <p className="small">
                    We start from your throughput, moisture and altitude figures and source the right machine for your exact needs.
                    Each unit is factory-tested before despatch — our team then installs and hands over at your estate,
                    with training for your operators and pattern-matched spares available for life.
                  </p>
                  <Link className="tlink" href="/contact">
                    Start a project{" "}
                    <span className="circ">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17L17 7M8 7h9v9" />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          )}

          {activeTab === "reach" && (
            <div className="on">
              <div className="statement">
                <span className="eyebrow">Global footprint</span>
                <div>
                  <p className="big">
                    Seventy tea companies across twenty countries{" "}
                    <em>run Gimpex-supplied equipment today.</em>
                  </p>
                  <p className="small">
                    From KTDA in Kenya and Rwanda Mountain Tea to Tata Tea in Assam, Finlay in Vietnam and PT. Melania in Indonesia —
                    with spares, consumables and service support shipped worldwide from Kolkata.
                  </p>
                  <Link className="tlink" href="/clients">
                    View our clients{" "}
                    <span className="circ">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17L17 7M8 7h9v9" />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
