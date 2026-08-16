import React from "react";
import {
  Leaf, Wind, FlaskConical, Flame, Filter, Package,
} from "@/components/ui/Icons";

const stages = [
  {
    num: "STAGE 01",
    title: "Withering",
    desc: "Troughs and axial-flow fans bring leaf moisture down to rolling condition, evenly across the whole bed.",
    icon: <Wind size={22} strokeWidth={1.5} />,
  },
  {
    num: "STAGE 02",
    title: "Maceration",
    desc: "Rotorvane and Terman CTC rollers rupture the leaf cell structure and start oxidation.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="12" r="4.5" />
        <circle cx="16.5" cy="12" r="4.5" />
        <path d="M8 12h.01M16.5 12h.01" />
      </svg>
    ),
  },
  {
    num: "STAGE 03",
    title: "Fermentation",
    desc: "Continuous fermenting beds hold humidity and temperature to the minute, batch after batch.",
    icon: <FlaskConical size={22} strokeWidth={1.5} />,
  },
  {
    num: "STAGE 04",
    title: "Drying",
    desc: "Microwave and vibro fluid-bed dryers arrest fermentation and fix flavour at roughly 3% moisture.",
    icon: <Flame size={22} strokeWidth={1.5} />,
  },
  {
    num: "STAGE 05",
    title: "Sorting",
    desc: "Colour sorters, vibro decks and fibre extractors grade the make and remove stalk and fibre.",
    icon: <Filter size={22} strokeWidth={1.5} />,
  },
  {
    num: "STAGE 06",
    title: "Packing",
    desc: "Tea bag machines and continuous weighers take finished grades to the chest and to the bag.",
    icon: <Package size={22} strokeWidth={1.5} />,
  },
];

export const ProcessGrid: React.FC = () => {
  return (
    <section className="sec" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="panel dark on-dark">
          <div className="sec-hd">
            <div className="rv in">
              <span className="eyebrow">The tea line</span>
              <h2>
                Six stages between the field <em>and the chest.</em>
              </h2>
            </div>
            <p className="lede rv in">
              We manufacture equipment for every one of them — supplied as single machines or as a fully integrated line.
            </p>
          </div>
          <div className="pgrid6 rvg in">
            {stages.map((stage) => (
              <div key={stage.num} className="pstep">
                <div className="ic">{stage.icon}</div>
                <span className="n">{stage.num}</span>
                <h3>{stage.title}</h3>
                <p>{stage.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
