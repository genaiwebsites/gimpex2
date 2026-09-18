"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { cn } from "@/lib/utils";

type TabKey = "who" | "supply" | "how" | "reach";

interface TabContent {
  eyebrow: string;
  badge: string;
  heading: string;
  leadText: string;
  highlightStat: { number: string; label: string };
  ctaText: string;
  ctaHref: string;
  image: string;
  imageAlt: string;
}

const tabData: Record<TabKey, TabContent> = {
  who: {
    eyebrow: "Established 1997 · Kolkata",
    badge: "Government of India Star Export House",
    heading: "Twenty-seven years supplying heavy machinery for one of the oldest industries on earth.",
    leadText:
      "Gimpex Overseas is an authorised supplier, exporter and dealer of complete tea processing machinery. Certified under ISO 9001 and headquartered in Kolkata, we source top-tier processing units from trusted manufacturers worldwide and commission them to estates across Kenya, Rwanda, Sri Lanka, Vietnam, Indonesia and beyond.",
    highlightStat: { number: "27+", label: "Years of global engineering support" },
    ctaText: "Explore our story & credentials",
    ctaHref: "/about",
    image: "/images/factory/tea-machinery-commissioning.jpg",
    imageAlt: "Gimpex engineering team inspecting and commissioning industrial tea processing machinery",
  },
  supply: {
    eyebrow: "Comprehensive Inventory",
    badge: "17 Complete Machine Lines",
    heading: "Complete CTC and orthodox machinery lines from withering trough to packaged chest.",
    leadText:
      "From Rotorvanes, Terman CTC rollers and continuous fermenters to microwave dryers, optical colour sorters, and automated tea bag machines. Every single unit is sourced from proven global manufacturers, supplied with full OEM documentation, and backed by lifetime replacement parts.",
    highlightStat: { number: "17", label: "Full machinery lines available" },
    ctaText: "Browse all 17 machines",
    ctaHref: "/products",
    image: "/images/products/terman-ctc.jpg",
    imageAlt: "Terman CTC continuous tea processing cutting rollers",
  },
  how: {
    eyebrow: "Technical Sourcing & Service",
    badge: "100% On-Site Commissioned",
    heading: "Sized to your harvest data, factory-tested, and commissioned by our own engineers.",
    leadText:
      "We analyze your green leaf throughput, ambient humidity, and estate altitude to match the exact machine specifications. Every unit undergoes strict quality inspection before dispatch. Our dedicated installation engineers travel to your factory to commission the unit and train your local operators.",
    highlightStat: { number: "98%", label: "First-run commissioning success" },
    ctaText: "Get an equipment recommendation",
    ctaHref: "/contact",
    image: "/images/factory/green-leaf-withering-line.jpg",
    imageAlt: "Industrial tea withering trough lines and ventilation ducting",
  },
  reach: {
    eyebrow: "International Operations",
    badge: "20+ Producing Nations",
    heading: "Seventy tea companies across twenty countries run Gimpex-supplied equipment today.",
    leadText:
      "From KTDA in Kenya and Rwanda Mountain Tea in Central Africa to Tata Tea in Assam, Finlay in Vietnam, and PT. Melania in Indonesia. We maintain round-the-clock technical dispatch from our Kolkata headquarters to keep your factory running during peak flushing seasons.",
    highlightStat: { number: "70+", label: "Major corporate estates served" },
    ctaText: "View our worldwide clientele",
    ctaHref: "/clients",
    image: "/images/hero/tea-machinery-plant-hero.jpg",
    imageAlt: "Global tea processing machinery installation in high-capacity plant",
  },
};

export const AboutTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("who");

  const tabs: { key: TabKey; label: string }[] = [
    { key: "who", label: "Who we are" },
    { key: "supply", label: "What we supply" },
    { key: "how", label: "How we work" },
    { key: "reach", label: "Global reach" },
  ];

  const current = tabData[activeTab];

  return (
    <section className="sec" style={{ paddingTop: 0 }}>
      <div className="container">
        {/* Section Heading with subtle context */}
        <div className="sec-hd" style={{ marginBottom: "28px" }}>
          <div className="rv in">
            <span className="eyebrow">Enterprise Overview</span>
            <h2>
              The trusted link between <em>world-class machinery</em> and high-yield tea estates.
            </h2>
          </div>
          <div className="rv in">
            {/* Pill Navigation Bar */}
            <div className="about-tab-nav" role="tablist">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  role="tab"
                  aria-selected={activeTab === tab.key}
                  className={cn("about-tab-pill", activeTab === tab.key && "active")}
                  onClick={() => setActiveTab(tab.key)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Unified Premium Split Showcase Card */}
        <div className="about-showcase-card rv in">
          <div className="about-showcase-grid">
            {/* Left Content Column */}
            <div className="about-showcase-content">
              <div className="about-showcase-meta">
                <span className="about-chip-badge">{current.badge}</span>
                <span className="about-eyebrow-text">{current.eyebrow}</span>
              </div>

              <h3 className="about-showcase-heading">{current.heading}</h3>

              <p className="about-showcase-text">{current.leadText}</p>

              <div className="about-showcase-footer">
                <div className="about-stat-pill">
                  <span className="about-stat-num">{current.highlightStat.number}</span>
                  <span className="about-stat-label">{current.highlightStat.label}</span>
                </div>

                <Link className="btn btn-ink" href={current.ctaHref}>
                  <span>{current.ctaText}</span>
                  <span className="circ">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h13M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>

            {/* Right Visual Image Column */}
            <div className="about-showcase-visual">
              <ImageWithFallback
                src={current.image}
                alt={current.imageAlt}
                fill
                sizes="(max-width: 980px) 100vw, 45vw"
                className="about-showcase-img"
              />
              <div className="about-visual-overlay" aria-hidden="true" />
              <div className="about-visual-tag">
                <span>{tabs.find((t) => t.key === activeTab)?.label}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
