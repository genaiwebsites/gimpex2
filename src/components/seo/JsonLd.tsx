import React from "react";
import { siteConfig } from "@/data/siteConfig";

export const JsonLd: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://gimpexoverseas.com/#organization",
        "name": siteConfig.name,
        "url": "https://gimpexoverseas.com",
        "logo": "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&w=600&q=80",
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
        "image": "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1100&q=80",
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
