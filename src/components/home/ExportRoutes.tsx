import React from "react";
import { MapPin } from "@/components/ui/Icons";

const regions = [
  {
    name: "East Africa",
    markets: ["Kenya", "Rwanda", "Uganda", "Tanzania"],
  },
  {
    name: "South Asia",
    markets: ["India", "Sri Lanka"],
  },
  {
    name: "South-East Asia",
    markets: ["Vietnam", "Indonesia", "Myanmar"],
  },
  {
    name: "East Asia",
    markets: ["China — Yunnan"],
  },
  {
    name: "Southern Africa",
    markets: ["Zimbabwe", "Mozambique"],
  },
  {
    name: "Oceania",
    markets: ["Australia", "Papua New Guinea"],
  },
];

export const ExportRoutes: React.FC = () => {
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
            <p className="lede rv in">
              Seventy tea companies across four continents run Gimpex equipment on their factory floors today.
            </p>
          </div>

          <div className="routes">
            {/* Vector Route Schematic */}
            <div className="routes-map-wrap rv in">
              <svg
                viewBox="0 0 600 380"
                className="routes-map-svg"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Export routes from Kolkata"
              >
                <defs>
                  <linearGradient id="arc-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#CDF564" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#CDF564" stopOpacity="0.2" />
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
                </defs>

                {/* Subtle Grid Lat/Long Lines */}
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
                  <circle cx="0" cy="0" r="18" fill="none" stroke="rgba(205,245,100,0.2)" strokeWidth="1">
                    <animate attributeName="r" values="8;28" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.8;0" dur="3s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="0" cy="0" r="8" fill="rgba(205,245,100,0.3)" />
                  <circle cx="0" cy="0" r="4.5" fill="#CDF564" />
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
                    fill="rgba(255,255,255,0.5)"
                  >
                    Works &amp; Despatch
                  </text>
                </g>

                {/* Arc Routes from Kolkata (140, 180) to Destination Points */}
                <g fill="none" stroke="url(#arc-grad)" strokeWidth="1.4" strokeDasharray="3 5" strokeLinecap="round">
                  {/* East Asia: Kunming */}
                  <path d="M 152 170 Q 320 40 480 65" markerEnd="url(#route-dot)" />
                  {/* SE Asia: Hanoi */}
                  <path d="M 154 175 Q 340 100 500 125" markerEnd="url(#route-dot)" />
                  {/* SE Asia: Jakarta */}
                  <path d="M 155 183 Q 360 180 515 200" markerEnd="url(#route-dot)" />
                  {/* Oceania: Port Moresby */}
                  <path d="M 152 188 Q 350 260 505 270" markerEnd="url(#route-dot)" />
                  {/* South Asia: Colombo */}
                  <path d="M 144 195 Q 260 300 420 310" markerEnd="url(#route-dot)" />
                  {/* East Africa: Nairobi / Kigali */}
                  <path d="M 128 190 Q 90 280 210 330" markerEnd="url(#route-dot)" />
                </g>

                {/* Destination Nodes & Labels */}
                <g fontFamily="var(--font-dm-sans), sans-serif" fontSize="10.5" fontWeight="500" letterSpacing="0.08em">
                  {/* Kunming */}
                  <circle cx="480" cy="65" r="3.5" fill="#CDF564" />
                  <text x="490" y="69" fill="rgba(255,255,255,0.85)">KUNMING (YUNNAN)</text>

                  {/* Hanoi */}
                  <circle cx="500" cy="125" r="3.5" fill="#CDF564" />
                  <text x="510" y="129" fill="rgba(255,255,255,0.85)">HANOI</text>

                  {/* Jakarta */}
                  <circle cx="515" cy="200" r="3.5" fill="#CDF564" />
                  <text x="525" y="204" fill="rgba(255,255,255,0.85)">JAKARTA</text>

                  {/* Port Moresby */}
                  <circle cx="505" cy="270" r="3.5" fill="#CDF564" />
                  <text x="515" y="274" fill="rgba(255,255,255,0.85)">PORT MORESBY</text>

                  {/* Colombo */}
                  <circle cx="420" cy="310" r="3.5" fill="#CDF564" />
                  <text x="430" y="314" fill="rgba(255,255,255,0.85)">COLOMBO</text>

                  {/* East Africa */}
                  <circle cx="210" cy="330" r="3.5" fill="#CDF564" />
                  <text x="210" y="350" textAnchor="middle" fill="rgba(255,255,255,0.85)">
                    NAIROBI · KIGALI · KAMPALA
                  </text>
                </g>
              </svg>
            </div>

            {/* Region List */}
            <div className="routes-list rv in">
              {regions.map((region) => (
                <div key={region.name} className="rrow">
                  <div className="rn">
                    <span className="rrow-pin">
                      <MapPin size={15} strokeWidth={2} />
                    </span>
                    <span className="rrow-name">{region.name}</span>
                  </div>
                  <div className="rm">
                    {region.markets.map((m) => (
                      <span key={m} className="rm-tag">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
