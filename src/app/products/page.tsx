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
            src="https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=1100&q=80"
            alt="Tea factory processing floor"
            fill
            priority
            sizes="100vw"
          />
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
