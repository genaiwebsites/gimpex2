import React from "react";
import { Hero } from "@/components/home/Hero";
import { ClientMarquee } from "@/components/home/ClientMarquee";
import { FeaturedMachines } from "@/components/home/FeaturedMachines";
import { AboutTabs } from "@/components/home/AboutTabs";
import { BentoGrid } from "@/components/home/BentoGrid";
import { ProcessGrid } from "@/components/home/ProcessGrid";
import { WorkshopSection } from "@/components/home/WorkshopSection";
import { ExportRoutes } from "@/components/home/ExportRoutes";
import { CtaBanner } from "@/components/ui/CtaBanner";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero — Who we are, primary value proposition, direct CTAs */}
      <Hero />

      {/* 2. Client Marquee — Immediate authority and enterprise trust proofs */}
      <ClientMarquee />

      {/* 3. Featured Machines — Immediate catalog visibility above the fold */}
      <FeaturedMachines />

      {/* 4. Complete Tea Line Stages — Educates buyers on equipment per production phase */}
      <ProcessGrid />

      {/* 5. Enterprise Overview Showcase — Deep-dive tabs into Gimpex credentials, supply model & reach */}
      <AboutTabs />

      {/* 6. Technical Sourcing & Commissioning — How Gimpex validates, delivers & supports machinery */}
      <WorkshopSection />

      {/* 7. Numbers & Key Milestones Bento Grid — Visual proof of scale and reliability */}
      <BentoGrid />

      <div style={{ height: "clamp(48px, 6vw, 80px)" }} />

      {/* 8. Global Export Network Map — Worldwide logistics and hub reach */}
      <ExportRoutes />

      {/* 9. Final Action-Oriented Consultation CTA */}
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="container">
          <CtaBanner
            eyebrow="Get an Equipment Quote"
            title="Planning a new processing line or upgrading an existing estate?"
            buttonText="Speak with our engineering desk"
            buttonHref="/contact"
          />
        </div>
      </section>
    </>
  );
}
