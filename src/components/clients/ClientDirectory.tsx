"use client";

import React, { useState } from "react";
import { clients } from "@/data/clients";
import { cn } from "@/lib/utils";

const clientTabs = [
  { key: "all", label: "All" },
  { key: "india", label: "India" },
  { key: "kenya", label: "Kenya" },
  { key: "rwanda", label: "Rwanda" },
  { key: "tanzania", label: "Tanzania" },
  { key: "uganda", label: "Uganda" },
  { key: "srilanka", label: "Sri Lanka" },
  { key: "vietnam", label: "Vietnam" },
  { key: "indonesia", label: "Indonesia" },
  { key: "china", label: "China" },
  { key: "other", label: "Other" },
];

export const ClientDirectory: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState("all");

  const filteredClients = clients.filter((client) => {
    if (selectedCountry === "all") return true;
    return client.countryCode === selectedCountry;
  });

  return (
    <div className="container">
      <div className="tabs rv in">
        {clientTabs.map((tab) => (
          <button
            key={tab.key}
            className={cn("tab", selectedCountry === tab.key && "on")}
            onClick={() => setSelectedCountry(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="clist rv in">
        {filteredClients.map((client) => (
          <div
            key={client.id}
            className="crow"
            data-cl
            data-cats={client.countryCode}
          >
            <span className="cn">{client.name}</span>
            <span className="cc">{client.country}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
