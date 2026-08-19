import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { ContactForm } from "@/components/contact/ContactForm";
import { MapEmbed } from "@/components/contact/MapEmbed";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

import { MapPin, Phone, Mail, Clock } from "@/components/ui/Icons";

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
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=85"
            alt="Despatch warehouse and export packing"
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
                    <MapPin size={20} strokeWidth={1.8} />
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
                    <Phone size={20} strokeWidth={1.8} />
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
                    <Mail size={20} strokeWidth={1.8} />
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
                    <Clock size={20} strokeWidth={1.8} />
                  </span>
                  <div>
                    <div className="lb">Hours</div>
                    <div className="vl">{siteConfig.contact.hours}</div>
                  </div>
                </div>
              </div>

              <MapEmbed />
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
