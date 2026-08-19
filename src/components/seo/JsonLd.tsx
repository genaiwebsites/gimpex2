import React from "react";
import { siteConfig } from "@/data/siteConfig";

export const JsonLd: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://gimpexoverseas.com/#organization",
        "name": siteConfig.fullName || siteConfig.name,
        "url": "https://gimpexoverseas.com",
        "logo": "https://gimpexoverseas.com/images/brand/gimpex-overseas-logo-dark.png",
        "description": siteConfig.description,
        "foundingDate": "1997",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": siteConfig.address.street,
          "addressLocality": siteConfig.address.city,
          "postalCode": siteConfig.address.postalCode,
          "addressRegion": siteConfig.address.state,
          "addressCountry": "IN"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": siteConfig.contact.phoneRaw,
          "contactType": "customer support",
          "areaServed": "Worldwide",
          "availableLanguage": ["English", "Hindi", "Bengali"]
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://gimpexoverseas.com/#localbusiness",
        "name": siteConfig.name,
        "image": "https://images.unsplash.com/photo-1764114441123-586d13fc6ece?auto=format&fit=crop&w=1200&q=85",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": siteConfig.address.street,
          "addressLocality": siteConfig.address.city,
          "postalCode": siteConfig.address.postalCode,
          "addressRegion": siteConfig.address.state,
          "addressCountry": "IN"
        },
        "telephone": siteConfig.contact.phoneRaw,
        "openingHours": "Mo-Sa 08:00-17:30",
        "priceRange": "$$$$"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
