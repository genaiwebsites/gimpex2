import React from "react";
import { galleryItems } from "@/data/gallery";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { cn } from "@/lib/utils";

export const GalleryGrid: React.FC = () => {
  return (
    <div className="container">
      <div className="gal rvg in">
        {galleryItems.map((item) => (
          <figure
            key={item.id}
            className={cn("gitem imgbox relative", item.wide && "w2")}
            style={{ margin: 0 }}
          >
            <ImageWithFallback
              src={item.src}
              alt={item.alt}
              fill
              sizes={item.wide ? "(max-width: 900px) 100vw, 50vw" : "(max-width: 900px) 50vw, 25vw"}
            />
            <span className="cap">{item.caption}</span>
          </figure>
        ))}
      </div>
    </div>
  );
};
