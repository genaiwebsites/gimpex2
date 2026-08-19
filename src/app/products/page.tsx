import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ProductCatalogue } from "@/components/products/ProductCatalogue";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

export const metadata: Metadata = {
  title: "Products",
  description: "Nineteen tea machinery lines: withering, maceration, fermentation, drying, sorting and packing.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="pbanner">
        <div className="pbanner-card imgbox rv in relative">
          <ImageWithFallback
            src="/images/factory/tea-processing-machinery.jpg"
            alt="Continuous industrial tea processing and drying machinery in factory"
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
                <span>Products</span>
              </div>
              <h1>
                Nineteen machines. <em>One complete line.</em>
              </h1>
              <p className="lede">
                Every unit is drawn, machined and load-tested at our Kolkata works. Filter by processing stage, or browse the full catalogue.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <ProductCatalogue />
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="container">
          <CtaBanner
            eyebrow="Not sure which unit?"
            title="Send us your throughput and leaf data — we'll size the line."
            buttonText="Get a recommendation"
            buttonHref="/contact"
          />
        </div>
      </section>
    </>
  );
}
