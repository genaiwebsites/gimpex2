import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { Button } from "@/components/ui/Button";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="ft">
      <div className="ft-in">
        <div className="ft-top">
          <div>
            <span className="eyebrow plain">Let&apos;s build your line</span>
            <h2>
              Engineered in Kolkata. Running <em>everywhere tea is made.</em>
            </h2>
          </div>
          <Button variant="lime" href="/contact">
            Request a quotation
          </Button>
        </div>

        <div className="ft-grid">
          <div>
            <Link className="brand" href="/">
              <span className="brand-mk">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21c5.4-1.9 8-6.6 8-13C13.4 8 8.6 9.9 6.6 15.2 6.6 18 8.7 21 12 21z" />
                  <path d="M12 21c0-5.6 2.6-9.4 8-12" />
                </svg>
              </span>
              <span>
                {siteConfig.name}
                <small>Est. {siteConfig.established}</small>
              </span>
            </Link>
            <p className="ft-about">
              ISO 9001-certified Star Export House manufacturing complete tea processing lines for estates across four continents.
            </p>
          </div>

          <div>
            <h5>Company</h5>
            <ul>
              <li><Link href="/about">About us</Link></li>
              <li><Link href="/about#quality">Quality policy</Link></li>
              <li><Link href="/clients">Clients</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h5>Machinery</h5>
            <ul>
              <li><Link href="/products/rotorvane">Rotorvane</Link></li>
              <li><Link href="/products/terman-ctc">Terman CTC</Link></li>
              <li><Link href="/products/continuous-fermenting-machine">Continuous fermenter</Link></li>
              <li><Link href="/products/microwave-dryer">Microwave dryer</Link></li>
              <li><Link href="/products/colour-sorter">Colour sorter</Link></li>
              <li><Link href="/products/tea-bag-machine">Tea bag machine</Link></li>
            </ul>
          </div>

          <div>
            <h5>Kolkata office</h5>
            <address>
              {siteConfig.address.street}
              <br />
              {siteConfig.address.city} {siteConfig.address.postalCode}, {siteConfig.address.country}
            </address>
            <ul style={{ marginTop: "14px" }}>
              <li>
                <a href={`tel:${siteConfig.contact.phoneRaw}`}>
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.contact.email}`}>
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="ft-bot">
          <span>© {currentYear} {siteConfig.name} Pvt. Ltd.</span>
          <span>ISO 9001 · Star Export House · CIN {siteConfig.cin}</span>
          <div className="ft-soc">
            <a
              href={siteConfig.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
              </svg>
            </a>
            <a href={siteConfig.socialLinks.email} aria-label="Email">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="5" width="18" height="14" rx="2.5" />
                <path d="M3.5 7.5l8.5 6 8.5-6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
