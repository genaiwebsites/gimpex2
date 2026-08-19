import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photographs from the Gimpex workshop and client tea factories across four continents.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="pbanner">
        <div className="pbanner-card imgbox rv in relative">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1764114441123-586d13fc6ece?auto=format&fit=crop&w=1600&q=85"
            alt="Workshop fabrication and machining floor in progress"
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
          <div className="pbanner-blur-layer" aria-hidden="true" />
          <div className="pbanner-in">
            <div className="container">
              <div className="crumb">
                <Link href="/">Home</Link>
                <span>/</span>
                <span>Gallery</span>
              </div>
              <h1>
                The shop floor, <em>and the fields it feeds.</em>
              </h1>
              <p className="lede">
                From our Kolkata workshop to client factories across Africa and Asia — leaf, steel, and the machinery in between.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <GalleryGrid />
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="container">
          <CtaBanner
            eyebrow="See it in person"
            title="The Kolkata works are open to clients by appointment."
            buttonText="Arrange a visit"
            buttonHref="/contact"
          />
        </div>
      </section>
    </>
  );
}
