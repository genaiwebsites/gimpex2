"use client";

import React from "react";
import { StatCounter } from "@/components/ui/StatCounter";
import { Calendar, PackageCheck, Users, Globe } from "@/components/ui/Icons";

const stats = [
  {
    value: 27,
    suffix: "",
    label: "Years of manufacturing",
    icon: <Calendar size={18} strokeWidth={1.7} />,
    delay: 0,
  },
  {
    value: 500,
    suffix: "+",
    label: "Machines installed",
    icon: <PackageCheck size={18} strokeWidth={1.7} />,
    delay: 100,
  },
  {
    value: 70,
    suffix: "+",
    label: "Tea companies served",
    icon: <Users size={18} strokeWidth={1.7} />,
    delay: 200,
  },
  {
    value: 20,
    suffix: "+",
    label: "Countries exported to",
    icon: <Globe size={18} strokeWidth={1.7} />,
    delay: 300,
  },
];

export const StatBar: React.FC = () => {
  return (
    <div className="container">
      <div className="statbar rv in">
        {stats.map((stat) => (
          <div key={stat.label}>
            <span className="stat-ic">{stat.icon}</span>
            <b>
              <StatCounter value={stat.value} suffix={stat.suffix} delay={stat.delay} />
            </b>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
