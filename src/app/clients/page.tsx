import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ClientDirectory } from "@/components/clients/ClientDirectory";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

export const metadata: Metadata = {
  title: "Clients",
  description: "Seventy tea companies across twenty countries run Gimpex machinery.",
};

export default function ClientsPage() {
  return (
    <>
      <section className="pbanner">
        <div className="pbanner-card imgbox rv in relative">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1100&q=80"
            alt="Finished tea in production"
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
          <div className="pbanner-in">
            <div className="container">
              <div className="crumb">
                <Link href="/">Home</Link>
                <span>/</span>
                <span>Clients</span>
              </div>
              <h1>
                Seventy tea companies. <em>Twenty countries.</em>
              </h1>
              <p className="lede">
                From KTDA in Kenya to Tata Tea in Assam — the estates and factories running Gimpex machinery today.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <ClientDirectory />
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="container">
          <CtaBanner
            eyebrow="Join the list"
            title="A new estate, a new factory, a new line — same engineering desk."
            buttonText="Start a conversation"
            buttonHref="/contact"
          />
        </div>
      </section>
    </>
  );
}
