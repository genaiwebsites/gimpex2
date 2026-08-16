import React from "react";

const stages = [
  {
    num: "STAGE 01",
    title: "Withering",
    desc: "Troughs and axial-flow fans bring leaf moisture down to rolling condition, evenly across the whole bed.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21c6-2 8-7 8-14-7 0-12 2-14 8 0 3 2 6 6 6z" />
        <path d="M12 21c0-6 3-10 8-13" />
      </svg>
    ),
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
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3h6M10 3v5l-5 9a2.4 2.4 0 0 0 2 4h10a2.4 2.4 0 0 0 2-4l-5-9V3" />
        <path d="M7.5 15h9" />
      </svg>
    ),
  },
  {
    num: "STAGE 04",
    title: "Drying",
    desc: "Microwave and vibro fluid-bed dryers arrest fermentation and fix flavour at roughly 3% moisture.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 4q3 4 0 8t0 8M12 4q3 4 0 8t0 8M18 4q3 4 0 8t0 8" />
      </svg>
    ),
  },
  {
    num: "STAGE 05",
    title: "Sorting",
    desc: "Colour sorters, vibro decks and fibre extractors grade the make and remove stalk and fibre.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 5h16l-6 8v6l-4-2v-4z" />
      </svg>
    ),
  },
  {
    num: "STAGE 06",
    title: "Packing",
    desc: "Tea bag machines and continuous weighers take finished grades to the chest and to the bag.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 8l8-4 8 4v9l-8 4-8-4z" />
        <path d="M4 8l8 4 8-4M12 12v9" />
      </svg>
    ),
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
