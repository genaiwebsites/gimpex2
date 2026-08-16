"use client";

import React from "react";
import { StatCounter } from "@/components/ui/StatCounter";

export const StatBar: React.FC = () => {
  return (
    <div className="container">
      <div className="statbar rv in">
        <div>
          <b><StatCounter value={27} /></b>
          <span>Years of manufacturing</span>
        </div>
        <div>
          <b><StatCounter value={500} suffix="+" /></b>
          <span>Machines installed</span>
        </div>
        <div>
          <b><StatCounter value={70} suffix="+" /></b>
          <span>Tea companies served</span>
        </div>
        <div>
          <b><StatCounter value={20} suffix="+" /></b>
          <span>Countries exported to</span>
        </div>
      </div>
    </div>
  );
};
