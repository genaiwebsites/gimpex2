"use client";

import React, { useState } from "react";
import Image from "next/image";
import { clients } from "@/data/clients";
import { cn } from "@/lib/utils";

// Map countryCode → ISO-2 for the tab filter buttons
const tabIso2: Record<string, string> = {
  india:     "in",
  kenya:     "ke",
  rwanda:    "rw",
  tanzania:  "tz",
  uganda:    "ug",
  srilanka:  "lk",
  vietnam:   "vn",
  indonesia: "id",
  china:     "cn",
};

const clientTabs = [
  { key: "all",       label: "All" },
  { key: "india",     label: "India" },
  { key: "kenya",     label: "Kenya" },
  { key: "rwanda",    label: "Rwanda" },
  { key: "tanzania",  label: "Tanzania" },
  { key: "uganda",    label: "Uganda" },
  { key: "srilanka",  label: "Sri Lanka" },
  { key: "vietnam",   label: "Vietnam" },
  { key: "indonesia", label: "Indonesia" },
  { key: "china",     label: "China" },
  { key: "other",     label: "Other" },
];

/** Builds a flagcdn.com URL for a given ISO 3166-1 alpha-2 code */
function flagUrl(iso2: string, size: 20 | 24 | 32 | 40 | 48 | 64 = 24) {
  return `https://flagcdn.com/w${size}/${iso2.toLowerCase()}.png`;
}

export const ClientDirectory: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState("all");

  const filteredClients = clients.filter((client) => {
    if (selectedCountry === "all") return true;
    return client.countryCode === selectedCountry;
  });

  return (
    <div className="container">
      {/* Filter tabs with flag icons */}
      <div className="tabs rv in">
        {clientTabs.map((tab) => {
          const iso = tabIso2[tab.key];
          return (
            <button
              key={tab.key}
              className={cn("tab", selectedCountry === tab.key && "on")}
              onClick={() => setSelectedCountry(tab.key)}
            >
              {iso && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={flagUrl(iso, 24)}
                  alt={`${tab.label} flag`}
                  className="tab-flag"
                  width={18}
                  height={13}
                  loading="lazy"
                />
              )}
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Client rows with flag icons */}
      <div className="clist rv in">
        {filteredClients.map((client) => (
          <div
            key={client.id}
            className="crow"
            data-cats={client.countryCode}
          >
            {/* Flag column */}
            <Image
              src={flagUrl(client.iso2, 32)}
              alt={`${client.country} flag`}
              className="cflag"
              width={24}
              height={18}
              unoptimized
            />
            {/* Company name */}
            <span className="cn">{client.name}</span>
            {/* Country badge */}
            <span className="cc">
              <Image
                src={flagUrl(client.iso2, 24)}
                alt=""
                aria-hidden
                className="cflag"
                style={{ width: 14, height: 10, borderRadius: 2 }}
                width={14}
                height={10}
                unoptimized
              />
              {client.country}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
