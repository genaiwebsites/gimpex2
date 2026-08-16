"use client";

import React from "react";
import { StatCounter } from "@/components/ui/StatCounter";

export const StatBar: React.FC = () => {
  return (
    <div className="container">
      <div className="statbar rv in">
        <div>
          <b>
            <StatCounter value={27} delay={0} />
          </b>
          <span>Years of manufacturing</span>
        </div>
        <div>
          <b>
            <StatCounter value={500} suffix="+" delay={100} />
          </b>
          <span>Machines installed</span>
        </div>
        <div>
          <b>
            <StatCounter value={70} suffix="+" delay={200} />
          </b>
          <span>Tea companies served</span>
        </div>
        <div>
          <b>
            <StatCounter value={20} suffix="+" delay={300} />
          </b>
          <span>Countries exported to</span>
        </div>
      </div>
    </div>
  );
};
