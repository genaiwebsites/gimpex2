import React from "react";
import { Hero } from "@/components/home/Hero";
import { ClientMarquee } from "@/components/home/ClientMarquee";
import { AboutTabs } from "@/components/home/AboutTabs";
import { BentoGrid } from "@/components/home/BentoGrid";
import { ProcessGrid } from "@/components/home/ProcessGrid";
import { FeaturedMachines } from "@/components/home/FeaturedMachines";
import { WorkshopSection } from "@/components/home/WorkshopSection";
import { ExportRoutes } from "@/components/home/ExportRoutes";
import { CtaBanner } from "@/components/ui/CtaBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientMarquee />
      <AboutTabs />
      <BentoGrid />
      <div style={{ height: "clamp(48px, 6vw, 80px)" }} />
      <ProcessGrid />
      <FeaturedMachines />
      <WorkshopSection />
      <ExportRoutes />
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="container">
          <CtaBanner
            eyebrow="Start a project"
            title="Planning a new line, or replacing an ageing one?"
            buttonText="Talk to our engineering desk"
            buttonHref="/contact"
          />
        </div>
      </section>
    </>
  );
}
