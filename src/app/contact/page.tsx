import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { ContactForm } from "@/components/contact/ContactForm";
import { MapEmbed } from "@/components/contact/MapEmbed";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Gimpex Overseas in Kolkata for tea machinery quotations, spares and engineering support.",
};

export default function ContactPage() {
  return (
    <>
      <section className="pbanner">
        <div className="pbanner-card imgbox rv in relative">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1100&q=80"
            alt="Despatch warehouse and export packing"
            fill
            priority
            sizes="100vw"
          />
          <div className="pbanner-in">
            <div className="container">
              <div className="crumb">
                <Link href="/">Home</Link>
                <span>/</span>
                <span>Contact</span>
              </div>
              <h1>
                Talk to the <em>engineering desk.</em>
              </h1>
              <p className="lede">
                A complete new line, an upgrade, or a single spare — one enquiry reaches the person who can help.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="container">
          <div className="cwrap">
            <ContactForm />

            <div className="cside rv in">
              <div className="cbox green">
                <div className="iline">
                  <span className="ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 21s7-5.2 7-11a7 7 0 10-14 0c0 5.8 7 11 7 11z" />
                      <circle cx="12" cy="10" r="2.6" />
                    </svg>
                  </span>
                  <div>
                    <div className="lb">Office &amp; works</div>
                    <div className="vl">
                      {siteConfig.address.street}
                      <br />
                      {siteConfig.address.city} {siteConfig.address.postalCode}, {siteConfig.address.country}
                    </div>
                  </div>
                </div>

                <div className="iline">
                  <span className="ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 4h4l2 5-2.5 1.5a12 12 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
                    </svg>
                  </span>
                  <div>
                    <div className="lb">Phone</div>
                    <div className="vl">
                      <a href={`tel:${siteConfig.contact.phoneRaw}`}>
                        {siteConfig.contact.phone}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="iline">
                  <span className="ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="5" width="18" height="14" rx="2.5" />
                      <path d="M3.5 7.5l8.5 6 8.5-6" />
                    </svg>
                  </span>
                  <div>
                    <div className="lb">Email</div>
                    <div className="vl">
                      <a href={`mailto:${siteConfig.contact.email}`}>
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="iline">
                  <span className="ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7.2V12l3.2 3.2" />
                    </svg>
                  </span>
                  <div>
                    <div className="lb">Hours</div>
                    <div className="vl">{siteConfig.contact.hours}</div>
                  </div>
                </div>
              </div>

              <div className="cbox">
                <span className="eyebrow">Export enquiries</span>
                <p className="small" style={{ marginTop: "12px" }}>
                  We ship worldwide and handle documentation, container stuffing and on-site commissioning. Tell us your port and we&apos;ll quote delivered.
                </p>
                <div className="iline" style={{ marginTop: "18px" }}>
                  <span className="ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M3.2 9.6h17.6M3.2 14.4h17.6M12 3a15 15 0 010 18 15 15 0 010-18z" />
                    </svg>
                  </span>
                  <div>
                    <div className="lb">Currently serving</div>
                    <div className="vl">20+ countries across four continents</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: "18px" }}>
            <MapEmbed />
          </div>
        </div>
      </section>
    </>
  );
}
