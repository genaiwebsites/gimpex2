"use client";

import React, { useState } from "react";
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

/** Returns a high-res flagcdn.com PNG URL for the given ISO 3166-1 alpha-2 code */
function flagUrl(iso2: string) {
  // w40 gives a crisp 40px-wide PNG — enough for 2× retina at 20px display
  return `https://flagcdn.com/w40/${iso2.toLowerCase()}.png`;
}

/* Plain <img> flag — avoids next/image wrapper div that breaks tiny layouts */
// eslint-disable-next-line @next/next/no-img-element
const Flag = ({
  iso2,
  label,
  w = 24,
  h = 18,
  className = "cflag",
  style,
}: {
  iso2: string;
  label: string;
  w?: number;
  h?: number;
  className?: string;
  style?: React.CSSProperties;
}) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src={flagUrl(iso2)}
    alt={label ? `${label} flag` : ""}
    aria-hidden={!label}
    className={className}
    width={w}
    height={h}
    loading="lazy"
    decoding="async"
    style={style}
  />
);

export const ClientDirectory: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState("all");

  const filteredClients = clients.filter((client) =>
    selectedCountry === "all" ? true : client.countryCode === selectedCountry
  );

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
              {iso && <Flag iso2={iso} label={tab.label} className="tab-flag" w={18} h={13} />}
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Client rows — flag · company name · country badge */}
      <div className="clist rv in">
        {filteredClients.map((client) => (
          <div key={client.id} className="crow" data-cats={client.countryCode}>
            {/* Company name */}
            <span className="cn">{client.name}</span>
            {/* Right: mini flag + country name badge */}
            <span className="cc">
              <Flag
                iso2={client.iso2}
                label=""
                w={14}
                h={10}
                style={{ borderRadius: 2, height: 10 }}
              />
              {client.country}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
