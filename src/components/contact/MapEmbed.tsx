import React from "react";

export const MapEmbed: React.FC = () => {
  return (
    <div className="mapcard rv in">
      <iframe
        src="https://www.openstreetmap.org/export/embed.html?bbox=88.355%2C22.535%2C88.385%2C22.556&layer=mapnik&marker=22.5455%2C88.3703"
        loading="lazy"
        title="Gimpex Overseas office location, Kolkata"
      />
    </div>
  );
};
