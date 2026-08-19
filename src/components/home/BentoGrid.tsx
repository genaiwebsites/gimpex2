import React from "react";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

export const BentoGrid: React.FC = () => {
  return (
    <div className="container">
      <div className="bento rvg in">
        <div className="bcell photo imgbox relative">
          <ImageWithFallback
            src="/images/home/harvest-round-tea-plantation.jpg"
            alt="Tea plantation workers harvesting fresh tea leaves in misty mountain valley at sunrise"
            fill
            unoptimized
            sizes="(max-width: 980px) 50vw, 25vw"
          />
          <span className="cap">Harvest round · Assam</span>
        </div>

        <div className="bcell card">
          <span className="circ-top">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M8 7h9v9" />
            </svg>
          </span>
          <span className="num">27</span>
          <h4>Years of tea engineering</h4>
          <p>
            Continuous manufacturing since 1997, with machines from our earliest years still in service and still supported.
          </p>
        </div>

        <div className="bcell photo imgbox relative">
          <ImageWithFallback
            src="/images/factory/tea-processing-machinery.jpg"
            alt="Continuous industrial tea processing and drying machinery in operation at factory"
            fill
            unoptimized
            sizes="(max-width: 980px) 50vw, 25vw"
          />
          <span className="cap">Machining bay · Works</span>
        </div>

        <div className="bcell card lime">
          <span className="circ-top">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M8 7h9v9" />
            </svg>
          </span>
          <span className="num">98%</span>
          <h4>On-time commissioning</h4>
          <p>
            Lines handed over within the committed window, because fabrication, machining and testing all happen under one roof.
          </p>
        </div>
      </div>
    </div>
  );
};
