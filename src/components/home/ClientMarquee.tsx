import React from "react";

const clientNames = [
  "Tata Tea",
  "McLeod Russel",
  "Kenya Tea Development Agency",
  "Rwanda Mountain Tea",
  "Eastern Produce Kenya",
  "Jay Shree Tea",
  "Finlay Vietnam",
  "PT. Melania",
  "Brooke Bond",
  "Kanan Devan Hills",
  "Uganda Tea Corporation",
  "Tanganda Tea",
  "Amalgamated Plantations",
  "Sotik Tea",
  "Pfunda Tea",
  "Dhunseri Tea",
];

export const ClientMarquee: React.FC = () => {
  const marqueeString = clientNames.join(" · ") + " · ";

  return (
    <section className="strip">
      <div className="container">
        <p className="cap">
          Trusted by tea producers across India, Africa and South-East Asia
        </p>
      </div>
      <div className="mq">
        <div className="mq-track">
          <span>{marqueeString}</span>
          <span>{marqueeString}</span>
        </div>
      </div>
    </section>
  );
};
