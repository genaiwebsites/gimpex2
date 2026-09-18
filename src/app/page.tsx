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
      {/* 1. Hero — who we are, CTA */}
      <Hero />

      {/* 2. Client logos — social proof immediately after hero */}
      <ClientMarquee />

      {/* 3. Featured Machines — products visible immediately above the fold */}
      <FeaturedMachines />

      {/* 4. About tabs — deeper company story */}
      <AboutTabs />

      {/* 5. Bento grid — numbers + estate photos */}
      <BentoGrid />

      <div style={{ height: "clamp(48px, 6vw, 80px)" }} />

      {/* 6. Tea line stages — educates buyer on what they need */}
      <ProcessGrid />

      {/* 7. How We Supply — sourcing + commissioning model */}
      <WorkshopSection />

      {/* 8. Export routes map — global reach */}
      <ExportRoutes />

      {/* 9. Final CTA */}
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="container">
          <CtaBanner
            eyebrow="Get a quote"
            title="Planning a new line, or replacing an ageing one?"
            buttonText="Talk to our team"
            buttonHref="/contact"
          />
        </div>
      </section>
    </>
  );
}
