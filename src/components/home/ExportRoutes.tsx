"use client";

import React, { useState } from "react";
import { MapPin } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

interface RegionData {
  id: string;
  name: string;
  markets: string[];
  destX: number;
  destY: number;
  pathD: string;
  label: string;
  hubDetail: string;
}

const regions: RegionData[] = [
  {
    id: "east-africa",
    name: "East Africa",
    markets: ["Kenya", "Rwanda", "Uganda", "Tanzania"],
    destX: 210,
    destY: 330,
    pathD: "M 128 190 Q 90 280 210 330",
    label: "NAIROBI · KIGALI · KAMPALA",
    hubDetail: "Direct via Port of Kolkata → Mombasa / Dar es Salaam",
  },
  {
    id: "south-asia",
    name: "South Asia",
    markets: ["India", "Sri Lanka"],
    destX: 420,
    destY: 310,
    pathD: "M 144 195 Q 260 300 420 310",
    label: "COLOMBO",
    hubDetail: "Estates in Assam, Dooars, Nilgiris & Central Highlands",
  },
  {
    id: "se-asia",
    name: "South-East Asia",
    markets: ["Vietnam", "Indonesia", "Myanmar"],
    destX: 515,
    destY: 200,
    pathD: "M 155 183 Q 360 180 515 200",
    label: "JAKARTA · HANOI",
    hubDetail: "Supplying Lam Dong, West Java & Northern Vietnam",
  },
  {
    id: "east-asia",
    name: "East Asia",
    markets: ["China — Yunnan"],
    destX: 480,
    destY: 65,
    pathD: "M 152 170 Q 320 40 480 65",
    label: "KUNMING (YUNNAN)",
    hubDetail: "CTC lines for high-altitude Pu'erh & black tea estates",
  },
  {
    id: "southern-africa",
    name: "Southern Africa",
    markets: ["Zimbabwe", "Mozambique"],
    destX: 180,
    destY: 355,
    pathD: "M 130 195 Q 70 310 180 355",
    label: "HARARE · MAPUTO",
    hubDetail: "Eastern Highlands & Zambezia tea processing lines",
  },
  {
    id: "oceania",
    name: "Oceania",
    markets: ["Australia", "Papua New Guinea"],
    destX: 505,
    destY: 270,
    pathD: "M 152 188 Q 350 260 505 270",
    label: "PORT MORESBY · CAIRNS",
    hubDetail: "Waghi Valley & Queensland tea plantations",
  },
];

export const ExportRoutes: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const activeRegion = regions.find((r) => r.id === activeId);

  return (
    <section className="sec" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="panel dark on-dark">
          <div className="sec-hd">
            <div className="rv in">
              <span className="eyebrow plain">Global reach</span>
              <h2>
                Shipping from Kolkata <em>to every tea belt.</em>
              </h2>
            </div>
            <div className="rv in">
              <p className="lede">
                Seventy tea companies across four continents run Gimpex equipment on their factory floors today.
              </p>
              {activeRegion && (
                <div
                  style={{
                    marginTop: "12px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "12.5px",
                    color: "var(--lime)",
                    background: "rgba(205,245,100,0.1)",
                    padding: "4px 12px",
                    borderRadius: "6px",
                    border: "1px solid rgba(205,245,100,0.25)",
                    animation: "fadeup 0.25s ease-out",
                  }}
                >
                  <MapPin size={12} strokeWidth={2.2} />
                  <span>
                    <strong>{activeRegion.name}:</strong> {activeRegion.hubDetail}
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="routes">
            {/* Interactive Vector Route Schematic */}
            <div className="routes-map-wrap rv in">
              <svg
                viewBox="0 0 600 380"
                className="routes-map-svg"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Export routes from Kolkata"
              >
                <defs>
                  <linearGradient id="arc-default" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#CDF564" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#CDF564" stopOpacity="0.15" />
                  </linearGradient>
                  <linearGradient id="arc-active" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#CDF564" stopOpacity="1" />
                    <stop offset="100%" stopColor="#CDF564" stopOpacity="0.9" />
                  </linearGradient>
                  <marker
                    id="route-dot"
                    viewBox="0 0 8 8"
                    refX="4"
                    refY="4"
                    markerWidth="4"
                    markerHeight="4"
                  >
                    <circle cx="4" cy="4" r="3" fill="#CDF564" />
                  </marker>
                  <marker
                    id="route-dot-active"
                    viewBox="0 0 10 10"
                    refX="5"
                    refY="5"
                    markerWidth="6"
                    markerHeight="6"
                  >
                    <circle cx="5" cy="5" r="4.5" fill="#CDF564" />
                  </marker>
                </defs>

                {/* Grid Lat/Long Lines */}
                <g stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="3 6">
                  <line x1="40" y1="90" x2="560" y2="90" />
                  <line x1="40" y1="190" x2="560" y2="190" />
                  <line x1="40" y1="290" x2="560" y2="290" />
                  <line x1="120" y1="30" x2="120" y2="350" />
                  <line x1="300" y1="30" x2="300" y2="350" />
                  <line x1="480" y1="30" x2="480" y2="350" />
                </g>

                {/* Kolkata HQ Hub */}
                <g transform="translate(140, 180)">
                  <circle cx="0" cy="0" r="22" fill="none" stroke="rgba(205,245,100,0.25)" strokeWidth="1">
                    <animate attributeName="r" values="8;32" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.8;0" dur="3s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="0" cy="0" r="9" fill="rgba(205,245,100,0.3)" />
                  <circle cx="0" cy="0" r="5" fill="#CDF564" />
                  <text
                    x="0"
                    y="24"
                    textAnchor="middle"
                    fontFamily="var(--font-sora), sans-serif"
                    fontSize="11"
                    fontWeight="600"
                    fill="#CDF564"
                    letterSpacing="0.1em"
                  >
                    KOLKATA HQ
                  </text>
                  <text
                    x="0"
                    y="36"
                    textAnchor="middle"
                    fontFamily="var(--font-dm-sans), sans-serif"
                    fontSize="9.5"
                    fill="rgba(255,255,255,0.6)"
                  >
                    Works &amp; Despatch
                  </text>
                </g>

                {/* Arc Routes from Kolkata to Destination Points */}
                <g>
                  {regions.map((region) => {
                    const isSelected = activeId === region.id;
                    const isDimmed = activeId !== null && !isSelected;

                    return (
                      <path
                        key={region.id}
                        d={region.pathD}
                        fill="none"
                        stroke={isSelected ? "url(#arc-active)" : "url(#arc-default)"}
                        strokeWidth={isSelected ? 2.6 : 1.4}
                        strokeDasharray={isSelected ? "none" : "3 5"}
                        strokeLinecap="round"
                        opacity={isDimmed ? 0.25 : 1}
                        markerEnd={isSelected ? "url(#route-dot-active)" : "url(#route-dot)"}
                        style={{
                          transition: "all 0.3s ease",
                          cursor: "pointer",
                        }}
                        onMouseEnter={() => setActiveId(region.id)}
                        onMouseLeave={() => setActiveId(null)}
                      />
                    );
                  })}
                </g>

                {/* Destination Nodes & Labels */}
                <g fontFamily="var(--font-dm-sans), sans-serif" fontSize="10.5" fontWeight="500" letterSpacing="0.08em">
                  {regions.map((region) => {
                    const isSelected = activeId === region.id;
                    const isDimmed = activeId !== null && !isSelected;

                    return (
                      <g
                        key={region.id}
                        opacity={isDimmed ? 0.35 : 1}
                        style={{
                          transition: "all 0.3s ease",
                          cursor: "pointer",
                        }}
                        onMouseEnter={() => setActiveId(region.id)}
                        onMouseLeave={() => setActiveId(null)}
                      >
                        {isSelected && (
                          <circle
                            cx={region.destX}
                            cy={region.destY}
                            r={12}
                            fill="none"
                            stroke="#CDF564"
                            strokeWidth={1.5}
                            opacity={0.6}
                          >
                            <animate attributeName="r" values="6;16" dur="1.8s" repeatCount="indefinite" />
                            <animate attributeName="opacity" values="0.8;0" dur="1.8s" repeatCount="indefinite" />
                          </circle>
                        )}
                        <circle
                          cx={region.destX}
                          cy={region.destY}
                          r={isSelected ? 5.5 : 3.5}
                          fill="#CDF564"
                        />
                        <text
                          x={region.destX + (region.destX > 300 ? 10 : 0)}
                          y={region.destX > 300 ? region.destY + 4 : region.destY + 18}
                          textAnchor={region.destX <= 300 ? "middle" : "start"}
                          fill={isSelected ? "#CDF564" : "rgba(255,255,255,0.85)"}
                          fontWeight={isSelected ? "600" : "500"}
                        >
                          {region.label}
                        </text>
                      </g>
                    );
                  })}
                </g>
              </svg>
            </div>

            {/* Interactive Region List */}
            <div className="routes-list rv in">
              {regions.map((region) => {
                const isSelected = activeId === region.id;

                return (
                  <div
                    key={region.name}
                    className={cn("rrow", isSelected && "rrow-active")}
                    onMouseEnter={() => setActiveId(region.id)}
                    onMouseLeave={() => setActiveId(null)}
                    style={{
                      cursor: "pointer",
                      background: isSelected ? "rgba(205,245,100,0.06)" : "transparent",
                    }}
                  >
                    <div className="rn">
                      <span
                        className="rrow-pin"
                        style={{
                          transform: isSelected ? "translateY(-2px) scale(1.15)" : "none",
                          transition: "transform 0.2s ease",
                        }}
                      >
                        <MapPin size={15} strokeWidth={isSelected ? 2.5 : 2} />
                      </span>
                      <span
                        className="rrow-name"
                        style={{
                          color: isSelected ? "var(--lime)" : "#fff",
                          transition: "color 0.2s ease",
                        }}
                      >
                        {region.name}
                      </span>
                    </div>
                    <div className="rm">
                      {region.markets.map((m) => (
                        <span
                          key={m}
                          className="rm-tag"
                          style={{
                            background: isSelected ? "rgba(205,245,100,0.18)" : "rgba(255,255,255,0.06)",
                            color: isSelected ? "#fff" : "rgba(255,255,255,0.65)",
                            borderColor: isSelected ? "rgba(205,245,100,0.4)" : "transparent",
                          }}
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
