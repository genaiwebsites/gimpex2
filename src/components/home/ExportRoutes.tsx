import React from "react";

const regions = [
  { name: "East Africa", markets: "Kenya · Rwanda · Uganda · Tanzania" },
  { name: "South Asia", markets: "India · Sri Lanka" },
  { name: "South-East Asia", markets: "Vietnam · Indonesia · Myanmar" },
  { name: "East Asia", markets: "China — Yunnan" },
  { name: "Southern Africa", markets: "Zimbabwe · Mozambique" },
  { name: "Oceania", markets: "Australia · Papua New Guinea" },
];

export const ExportRoutes: React.FC = () => {
  return (
    <section className="sec" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="panel dark on-dark">
          <div className="sec-hd">
            <div className="rv in">
              <span className="eyebrow">Global reach</span>
              <h2>
                Shipping from Kolkata <em>to every tea belt.</em>
              </h2>
            </div>
            <p className="lede rv in">
              Seventy tea companies across four continents run Gimpex equipment on their factory floors today.
            </p>
          </div>

          <div className="routes">
            <div className="rv in">
              <svg viewBox="0 0 560 340" xmlns="http://www.w3.org/2000/svg" aria-label="Export routes from Kolkata">
                <defs>
                  <marker id="d" viewBox="0 0 8 8" refX="4" refY="4" markerWidth="5" markerHeight="5">
                    <circle cx="4" cy="4" r="3" fill="#CDF564" />
                  </marker>
                </defs>
                <circle cx="86" cy="170" r="6.5" fill="#CDF564" />
                <circle cx="86" cy="170" r="14" fill="none" stroke="rgba(205,245,100,.4)" strokeWidth="1">
                  <animate attributeName="r" values="11;24" dur="2.6s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values=".75;0" dur="2.6s" repeatCount="indefinite" />
                </circle>
                <text x="86" y="196" textAnchor="middle" fontFamily="var(--font-sora), sans-serif" fontSize="11" fontWeight="500" fill="#fff">
                  KOLKATA
                </text>
                <g fill="none" stroke="rgba(255,255,255,.34)" strokeWidth="1.2" strokeDasharray="1 6" strokeLinecap="round">
                  <path d="M96 162 Q250 36 440 60" markerEnd="url(#d)" />
                  <path d="M98 167 Q290 100 458 118" markerEnd="url(#d)" />
                  <path d="M100 173 Q300 178 466 182" markerEnd="url(#d)" />
                  <path d="M98 179 Q290 246 450 246" markerEnd="url(#d)" />
                  <path d="M94 183 Q232 300 408 292" markerEnd="url(#d)" />
                  <path d="M88 185 Q134 284 212 304" markerEnd="url(#d)" />
                </g>
                <g fontFamily="var(--font-dm-sans), sans-serif" fontSize="10.5" letterSpacing="1" fill="rgba(255,255,255,.72)">
                  <text x="448" y="55">KUNMING</text>
                  <text x="466" y="113">HANOI</text>
                  <text x="474" y="177">JAKARTA</text>
                  <text x="458" y="241">PORT MORESBY</text>
                  <text x="416" y="287">COLOMBO</text>
                  <text x="222" y="318">NAIROBI · KIGALI · KAMPALA</text>
                </g>
              </svg>
            </div>

            <div className="rvg in">
              {regions.map((region) => (
                <div key={region.name} className="rrow">
                  <span className="rn">{region.name}</span>
                  <span className="rm">{region.markets}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
