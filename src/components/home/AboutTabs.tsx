"use client";

import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type TabKey = "who" | "build" | "how" | "reach";

export const AboutTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("who");

  const tabs: { key: TabKey; label: string }[] = [
    { key: "who", label: "Who we are" },
    { key: "build", label: "What we build" },
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
                    Twenty-seven years building machinery for one of the oldest industries on earth —{" "}
                    <em>and standing behind every installation.</em>
                  </p>
                  <p className="small">
                    What began as a Kolkata workshop in 1997 now supplies complete processing lines to estates in Kenya, Rwanda, Sri Lanka, Vietnam, Indonesia and beyond. ISO 9001 certified, recognised by the Government of India as a Star Export House.
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

          {activeTab === "build" && (
            <div className="on">
              <div className="statement">
                <span className="eyebrow">The catalogue</span>
                <div>
                  <p className="big">
                    Seventeen product lines covering{" "}
                    <em>every stage from withering trough to tea bag.</em>
                  </p>
                  <p className="small">
                    Rotorvanes, Terman CTC units, continuous fermenting machines, microwave and vibro fluid-bed dryers, colour sorters, fibre extractors, tea bag machines, continuous weighers — plus the toolroom equipment that keeps them serviced.
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
                    Sized to your leaf data, load-tested before despatch,{" "}
                    <em>commissioned by our own engineers.</em>
                  </p>
                  <p className="small">
                    We start from your throughput, moisture and altitude figures rather than a catalogue spec. Every unit runs at load on our floor — clients are welcome to witness it — and our team installs and hands over on site.
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
                    <em>run Gimpex equipment today.</em>
                  </p>
                  <p className="small">
                    From KTDA in Kenya and Rwanda Mountain Tea to Tata Tea in Assam, Finlay in Vietnam and PT. Melania in Indonesia — with spares and service support shipped worldwide.
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
