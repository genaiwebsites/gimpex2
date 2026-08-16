import React from "react";

interface SchematicProps {
  schematicId: string;
  className?: string;
}

export const SchematicRenderer: React.FC<SchematicProps> = ({ schematicId, className = "art" }) => {
  switch (schematicId) {
    case "wm-t":
      return (
        <svg className={className} viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M30 70 h160 v34 h-160 z" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M44 70 q4 -8 8 0" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M64 70 q4 -8 8 0" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M84 70 q4 -8 8 0" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M104 70 q4 -8 8 0" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M124 70 q4 -8 8 0" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M144 70 q4 -8 8 0" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M164 70 q4 -8 8 0" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="196" cy="52" r="13" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M191 47 l10 10 m0 -10 l-10 10" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M176 56 q-8 4 -16 2 M176 64 q-8 6 -16 6" fill="none" stroke="#A9722E" strokeWidth="1.6" strokeLinecap="round"/>
          <line x1="40" y1="104" x2="40" y2="122" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="180" y1="104" x2="180" y2="122" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="30" y1="136" x2="190" y2="136" fill="none" stroke="#A9722E" strokeWidth="1.6" strokeLinecap="round"/>
          <line x1="30" y1="133" x2="30" y2="139" fill="none" stroke="#A9722E" strokeWidth="1.6" strokeLinecap="round"/>
          <line x1="190" y1="133" x2="190" y2="139" fill="none" stroke="#A9722E" strokeWidth="1.6" strokeLinecap="round"/>
          <text x="62" y="132" fontFamily="JetBrains Mono,monospace" fontSize="7" letterSpacing="1" fill="#A9722E">TROUGH + AXIAL FAN</text>
        </svg>
      );

    case "gls-v":
      return (
        <svg className={className} viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M40 50 h140 v22 h-140 z" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="58" cy="61" r="2" fill="#0E211A"/>
          <circle cx="80" cy="61" r="2" fill="#0E211A"/>
          <circle cx="102" cy="61" r="2" fill="#0E211A"/>
          <circle cx="124" cy="61" r="2" fill="#0E211A"/>
          <circle cx="146" cy="61" r="2" fill="#0E211A"/>
          <circle cx="168" cy="61" r="2" fill="#0E211A"/>
          <path d="M52 84 q-5 7 0 14 M110 84 q-5 7 0 14 M168 84 q-5 7 0 14" fill="none" stroke="#A9722E" strokeWidth="1.6" strokeLinecap="round"/>
          <line x1="46" y1="108" x2="46" y2="122" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="174" y1="108" x2="174" y2="122" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="36" y1="122" x2="184" y2="122" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="40" y1="136" x2="180" y2="136" fill="none" stroke="#A9722E" strokeWidth="1.6" strokeLinecap="round"/>
          <line x1="40" y1="133" x2="40" y2="139" fill="none" stroke="#A9722E" strokeWidth="1.6" strokeLinecap="round"/>
          <line x1="180" y1="133" x2="180" y2="139" fill="none" stroke="#A9722E" strokeWidth="1.6" strokeLinecap="round"/>
          <text x="78" y="132" fontFamily="JetBrains Mono,monospace" fontSize="7" letterSpacing="1" fill="#A9722E">GREEN LEAF SIFT</text>
        </svg>
      );

    case "rv-15":
      return (
        <svg className={className} viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="40" y="45" width="130" height="52" rx="26" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="66" cy="71" r="15" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="66" cy="71" r="4" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M92 56 q10 15 0 30 M112 56 q10 15 0 30 M132 56 q10 15 0 30" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M170 62 h18 l8 9 -8 9 h-18" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M28 71 h12 M20 64 l8 7 -8 7" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="58" y1="97" x2="58" y2="118" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="152" y1="97" x2="152" y2="118" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="46" y1="118" x2="164" y2="118" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="40" y1="132" x2="170" y2="132" fill="none" stroke="#A9722E" strokeWidth="1.6" strokeLinecap="round"/>
          <line x1="40" y1="129" x2="40" y2="135" fill="none" stroke="#A9722E" strokeWidth="1.6" strokeLinecap="round"/>
          <line x1="170" y1="129" x2="170" y2="135" fill="none" stroke="#A9722E" strokeWidth="1.6" strokeLinecap="round"/>
          <text x="84" y="128" fontFamily="JetBrains Mono,monospace" fontSize="7" letterSpacing="1" fill="#A9722E">1500 MM</text>
        </svg>
      );

    case "ctc-3t":
      return (
        <svg className={className} viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="82" cy="70" r="30" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="140" cy="70" r="30" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="82" cy="70" r="5" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="140" cy="70" r="5" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="107.0" y1="70.0" x2="112.0" y2="70.0" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="103.65" y1="82.5" x2="107.98" y2="85.0" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="94.5" y1="91.65" x2="97.0" y2="95.98" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="82.0" y1="95.0" x2="82.0" y2="100.0" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="69.5" y1="91.65" x2="67.0" y2="95.98" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="60.35" y1="82.5" x2="56.02" y2="85.0" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="57.0" y1="70.0" x2="52.0" y2="70.0" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="60.35" y1="57.5" x2="56.02" y2="55.0" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="69.5" y1="48.35" x2="67.0" y2="44.02" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="82.0" y1="45.0" x2="82.0" y2="40.0" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="94.5" y1="48.35" x2="97.0" y2="44.02" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="103.65" y1="57.5" x2="107.98" y2="55.0" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="164.16" y1="76.43" x2="168.99" y2="77.71" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="157.71" y1="87.65" x2="161.25" y2="91.18" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="146.51" y1="94.14" x2="147.82" y2="98.96" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="133.57" y1="94.16" x2="132.29" y2="98.99" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="122.35" y1="87.71" x2="118.82" y2="91.25" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="115.86" y1="76.51" x2="111.04" y2="77.82" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="115.84" y1="63.57" x2="111.01" y2="62.29" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="122.29" y1="52.35" x2="118.75" y2="48.82" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="133.49" y1="45.86" x2="132.18" y2="41.04" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="146.43" y1="45.84" x2="147.71" y2="41.01" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="157.65" y1="52.29" x2="161.18" y2="48.75" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="164.14" y1="63.49" x2="168.96" y2="62.18" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M104 30 a12 12 0 0 1 8 -4 M118 26 l-4 -5 m4 5 l-6 2" fill="none" stroke="#A9722E" strokeWidth="1.6" strokeLinecap="round"/>
          <line x1="60" y1="112" x2="60" y2="124" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="162" y1="112" x2="162" y2="124" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="50" y1="124" x2="172" y2="124" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="52" y1="138" x2="170" y2="138" fill="none" stroke="#A9722E" strokeWidth="1.6" strokeLinecap="round"/>
          <line x1="52" y1="135" x2="52" y2="141" fill="none" stroke="#A9722E" strokeWidth="1.6" strokeLinecap="round"/>
          <line x1="170" y1="135" x2="170" y2="141" fill="none" stroke="#A9722E" strokeWidth="1.6" strokeLinecap="round"/>
          <text x="88" y="134" fontFamily="JetBrains Mono,monospace" fontSize="7" letterSpacing="1" fill="#A9722E">8–10 T/HR</text>
        </svg>
      );

    case "cfm-90":
      return (
        <svg className={className} viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M24 96 h172" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M24 60 h172" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="36" cy="78" r="17" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="184" cy="78" r="17" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="58" y1="60" x2="58" y2="96" fill="none" stroke="#0E211A" strokeWidth="1.2" strokeDasharray="3 4" strokeLinecap="round"/>
          <line x1="76" y1="60" x2="76" y2="96" fill="none" stroke="#0E211A" strokeWidth="1.2" strokeDasharray="3 4" strokeLinecap="round"/>
          <line x1="94" y1="60" x2="94" y2="96" fill="none" stroke="#0E211A" strokeWidth="1.2" strokeDasharray="3 4" strokeLinecap="round"/>
          <line x1="112" y1="60" x2="112" y2="96" fill="none" stroke="#0E211A" strokeWidth="1.2" strokeDasharray="3 4" strokeLinecap="round"/>
          <line x1="130" y1="60" x2="130" y2="96" fill="none" stroke="#0E211A" strokeWidth="1.2" strokeDasharray="3 4" strokeLinecap="round"/>
          <line x1="148" y1="60" x2="148" y2="96" fill="none" stroke="#0E211A" strokeWidth="1.2" strokeDasharray="3 4" strokeLinecap="round"/>
          <line x1="166" y1="60" x2="166" y2="96" fill="none" stroke="#0E211A" strokeWidth="1.2" strokeDasharray="3 4" strokeLinecap="round"/>
          <line x1="184" y1="60" x2="184" y2="96" fill="none" stroke="#0E211A" strokeWidth="1.2" strokeDasharray="3 4" strokeLinecap="round"/>
          <path d="M78 40 q3 -8 0 -12 M110 40 q3 -8 0 -12 M142 40 q3 -8 0 -12" fill="none" stroke="#A9722E" strokeWidth="1.6" strokeLinecap="round"/>
          <line x1="36" y1="95" x2="36" y2="122" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="184" y1="95" x2="184" y2="122" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="24" y1="122" x2="196" y2="122" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="24" y1="136" x2="196" y2="136" fill="none" stroke="#A9722E" strokeWidth="1.6" strokeLinecap="round"/>
          <line x1="24" y1="133" x2="24" y2="139" fill="none" stroke="#A9722E" strokeWidth="1.6" strokeLinecap="round"/>
          <line x1="196" y1="133" x2="196" y2="139" fill="none" stroke="#A9722E" strokeWidth="1.6" strokeLinecap="round"/>
          <text x="72" y="132" fontFamily="JetBrains Mono,monospace" fontSize="7" letterSpacing="1" fill="#A9722E">CONTINUOUS BED</text>
        </svg>
      );

    case "mwd-24":
      return (
        <svg className={className} viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M34 100 v-44 a20 20 0 0 1 20 -20 h112 a20 20 0 0 1 20 20 v44" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="24" y1="100" x2="196" y2="100" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M64 58 q8 8 0 16 q-8 8 0 16 M104 58 q8 8 0 16 q-8 8 0 16 M144 58 q8 8 0 16 q-8 8 0 16" fill="none" stroke="#A9722E" strokeWidth="1.6" strokeLinecap="round"/>
          <rect x="88" y="20" width="44" height="10" rx="3" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="34" y1="100" x2="34" y2="120" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="186" y1="100" x2="186" y2="120" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="34" y1="134" x2="186" y2="134" fill="none" stroke="#A9722E" strokeWidth="1.6" strokeLinecap="round"/>
          <line x1="34" y1="131" x2="34" y2="137" fill="none" stroke="#A9722E" strokeWidth="1.6" strokeLinecap="round"/>
          <line x1="186" y1="131" x2="186" y2="137" fill="none" stroke="#A9722E" strokeWidth="1.6" strokeLinecap="round"/>
          <text x="88" y="130" fontFamily="JetBrains Mono,monospace" fontSize="7" letterSpacing="1" fill="#A9722E">2450 MHZ</text>
        </svg>
      );

    case "vfbd-f":
      return (
        <svg className={className} viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M40 44 h140 v52 l-18 22 h-104 l-18 -22 z" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="60" cy="66" r="2.2" fill="#0E211A"/>
          <circle cx="77" cy="74" r="2.2" fill="#0E211A"/>
          <circle cx="94" cy="82" r="2.2" fill="#0E211A"/>
          <circle cx="111" cy="66" r="2.2" fill="#0E211A"/>
          <circle cx="128" cy="74" r="2.2" fill="#0E211A"/>
          <circle cx="145" cy="82" r="2.2" fill="#0E211A"/>
          <circle cx="162" cy="66" r="2.2" fill="#0E211A"/>
          <path d="M64 128 v-14 m-5 6 l5 -6 5 6 M110 128 v-14 m-5 6 l5 -6 5 6 M156 128 v-14 m-5 6 l5 -6 5 6" fill="none" stroke="#A9722E" strokeWidth="1.6" strokeLinecap="round"/>
          <line x1="40" y1="30" x2="180" y2="30" fill="none" stroke="#0E211A" strokeWidth="1.2" strokeDasharray="3 4" strokeLinecap="round"/>
          <line x1="40" y1="16" x2="180" y2="16" fill="none" stroke="#A9722E" strokeWidth="1.6" strokeLinecap="round"/>
          <line x1="40" y1="13" x2="40" y2="19" fill="none" stroke="#A9722E" strokeWidth="1.6" strokeLinecap="round"/>
          <line x1="180" y1="13" x2="180" y2="19" fill="none" stroke="#A9722E" strokeWidth="1.6" strokeLinecap="round"/>
          <text x="78" y="12" fontFamily="JetBrains Mono,monospace" fontSize="7" letterSpacing="1" fill="#A9722E">FLUIDISED BED</text>
        </svg>
      );

    case "srt-ccd":
      return (
        <svg className={className} viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M84 24 h52 l-14 34 h-24 z" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="110" y1="58" x2="110" y2="86" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="140" y="66" width="26" height="18" rx="4" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="153" cy="75" r="5" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="140" y1="75" x2="116" y2="75" fill="none" stroke="#0E211A" strokeWidth="1.2" strokeDasharray="3 4" strokeLinecap="round"/>
          <path d="M110 86 l-26 34 M110 86 l26 34" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M96 104 l-12 -6" fill="none" stroke="#A9722E" strokeWidth="1.6" strokeLinecap="round"/>
          <circle cx="80" cy="126" r="3" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="140" cy="126" r="3" fill="#0E211A" stroke="none"/>
          <line x1="70" y1="142" x2="150" y2="142" fill="none" stroke="#A9722E" strokeWidth="1.6" strokeLinecap="round"/>
          <line x1="70" y1="139" x2="70" y2="145" fill="none" stroke="#A9722E" strokeWidth="1.6" strokeLinecap="round"/>
          <line x1="150" y1="139" x2="150" y2="145" fill="none" stroke="#A9722E" strokeWidth="1.6" strokeLinecap="round"/>
          <text x="84" y="138" fontFamily="JetBrains Mono,monospace" fontSize="7" letterSpacing="1" fill="#A9722E">CCD OPTICS</text>
        </svg>
      );

    case "vds-6":
      return (
        <svg className={className} viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M36 56 L184 84" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M36 66 L184 94" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="50" y1="58.0" x2="50" y2="68.0" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="72" y1="62.2" x2="72" y2="72.2" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="94" y1="66.4" x2="94" y2="76.4" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="116" y1="70.6" x2="116" y2="80.6" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="138" y1="74.8" x2="138" y2="84.8" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="160" y1="79.0" x2="160" y2="89.0" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M60 96 q-6 8 0 16 q6 8 0 14 M150 112 q-6 8 0 16" fill="none" stroke="#A9722E" strokeWidth="1.6" strokeLinecap="round"/>
          <line x1="40" y1="128" x2="180" y2="128" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="36" y1="142" x2="184" y2="142" fill="none" stroke="#A9722E" strokeWidth="1.6" strokeLinecap="round"/>
          <line x1="36" y1="139" x2="36" y2="145" fill="none" stroke="#A9722E" strokeWidth="1.6" strokeLinecap="round"/>
          <line x1="184" y1="139" x2="184" y2="145" fill="none" stroke="#A9722E" strokeWidth="1.6" strokeLinecap="round"/>
          <text x="88" y="138" fontFamily="JetBrains Mono,monospace" fontSize="7" letterSpacing="1" fill="#A9722E">6–8° DECK</text>
        </svg>
      );

    case "trn-3":
      return (
        <svg className={className} viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="46" y="30" width="128" height="14" rx="4" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="52" y="60" width="116" height="14" rx="4" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="58" y="90" width="104" height="14" rx="4" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="60" y1="37" x2="64" y2="37" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="74" y1="37" x2="78" y2="37" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="88" y1="37" x2="92" y2="37" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="102" y1="37" x2="106" y2="37" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="116" y1="37" x2="120" y2="37" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="130" y1="37" x2="134" y2="37" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="144" y1="37" x2="148" y2="37" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="158" y1="37" x2="162" y2="37" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="66" y1="67" x2="70" y2="67" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="80" y1="67" x2="84" y2="67" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="94" y1="67" x2="98" y2="67" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="108" y1="67" x2="112" y2="67" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="122" y1="67" x2="126" y2="67" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="136" y1="67" x2="140" y2="67" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="150" y1="67" x2="154" y2="67" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M110 44 v10 m0 20 v10 m-4 -6 l4 6 4 -6" fill="none" stroke="#A9722E" strokeWidth="1.6" strokeLinecap="round"/>
          <line x1="60" y1="104" x2="60" y2="124" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="160" y1="104" x2="160" y2="124" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="50" y1="124" x2="170" y2="124" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="50" y1="138" x2="170" y2="138" fill="none" stroke="#A9722E" strokeWidth="1.6" strokeLinecap="round"/>
          <line x1="50" y1="135" x2="50" y2="141" fill="none" stroke="#A9722E" strokeWidth="1.6" strokeLinecap="round"/>
          <line x1="170" y1="135" x2="170" y2="141" fill="none" stroke="#A9722E" strokeWidth="1.6" strokeLinecap="round"/>
          <text x="82" y="134" fontFamily="JetBrains Mono,monospace" fontSize="7" letterSpacing="1" fill="#A9722E">3-STAGE MESH</text>
        </svg>
      );

    case "fex-s":
      return (
        <svg className={className} viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="52" y="40" width="116" height="30" rx="15" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="66" y1="48" x2="66" y2="62" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="80" y1="48" x2="80" y2="62" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="94" y1="48" x2="94" y2="62" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="108" y1="48" x2="108" y2="62" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="122" y1="48" x2="122" y2="62" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="136" y1="48" x2="136" y2="62" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="150" y1="48" x2="150" y2="62" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="164" y1="48" x2="164" y2="62" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M84 70 l-16 40 M136 70 l16 40" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M70 96 q-8 2 -12 -2" fill="none" stroke="#A9722E" strokeWidth="1.6" strokeLinecap="round"/>
          <circle cx="64" cy="116" r="3" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="156" cy="116" r="3" fill="#0E211A" stroke="none"/>
          <line x1="56" y1="136" x2="164" y2="136" fill="none" stroke="#A9722E" strokeWidth="1.6" strokeLinecap="round"/>
          <line x1="56" y1="133" x2="56" y2="139" fill="none" stroke="#A9722E" strokeWidth="1.6" strokeLinecap="round"/>
          <line x1="164" y1="133" x2="164" y2="139" fill="none" stroke="#A9722E" strokeWidth="1.6" strokeLinecap="round"/>
          <text x="74" y="132" fontFamily="JetBrains Mono,monospace" fontSize="7" letterSpacing="1" fill="#A9722E">STATIC FIBRE OUT</text>
        </svg>
      );

    case "tbm-120":
      return (
        <svg className={className} viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="52" cy="46" r="20" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="52" cy="46" r="4" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M72 46 h44 q14 0 14 14 v10" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M114 82 h32 l6 40 h-44 z" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="114" y1="94" x2="152" y2="94" fill="none" stroke="#0E211A" strokeWidth="1.2" strokeDasharray="3 4" strokeLinecap="round"/>
          <path d="M130 70 v-8" fill="none" stroke="#A9722E" strokeWidth="1.6" strokeLinecap="round"/>
          <circle cx="130" cy="58" r="2.4" fill="#A9722E" stroke="none"/>
          <line x1="102" y1="138" x2="160" y2="138" fill="none" stroke="#A9722E" strokeWidth="1.6" strokeLinecap="round"/>
          <line x1="102" y1="135" x2="102" y2="141" fill="none" stroke="#A9722E" strokeWidth="1.6" strokeLinecap="round"/>
          <line x1="160" y1="135" x2="160" y2="141" fill="none" stroke="#A9722E" strokeWidth="1.6" strokeLinecap="round"/>
          <text x="112" y="134" fontFamily="JetBrains Mono,monospace" fontSize="7" letterSpacing="1" fill="#A9722E">120 BPM</text>
        </svg>
      );

    case "ocw-5":
      return (
        <svg className={className} viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M30 58 h160" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="42" cy="70" r="11" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="178" cy="70" r="11" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="92" y="34" width="36" height="24" rx="4" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M100 46 h20 m-10 -6 v12" fill="none" stroke="#A9722E" strokeWidth="1.6" strokeLinecap="round"/>
          <rect x="84" y="92" width="52" height="26" rx="5" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <text x="93" y="110" fontFamily="JetBrains Mono,monospace" fontSize="10" fill="#0E211A">00.00</text>
          <line x1="110" y1="58" x2="110" y2="92" fill="none" stroke="#0E211A" strokeWidth="1.2" strokeDasharray="3 4" strokeLinecap="round"/>
          <line x1="80" y1="136" x2="140" y2="136" fill="none" stroke="#A9722E" strokeWidth="1.6" strokeLinecap="round"/>
          <line x1="80" y1="133" x2="80" y2="139" fill="none" stroke="#A9722E" strokeWidth="1.6" strokeLinecap="round"/>
          <line x1="140" y1="133" x2="140" y2="139" fill="none" stroke="#A9722E" strokeWidth="1.6" strokeLinecap="round"/>
          <text x="88" y="132" fontFamily="JetBrains Mono,monospace" fontSize="7" letterSpacing="1" fill="#A9722E">±0.5% ACC</text>
        </svg>
      );

    case "aff-a":
      return (
        <svg className={className} viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="110" cy="72" r="42" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="110" cy="72" r="7" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M110 65 q22 -18 8 -34 q-4 16 -8 34z M117 76 q28 4 32 -16 q-16 2 -32 16z M103 78 q-24 14 -12 32 q6 -16 12 -32z" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M162 60 h14 m-14 12 h20 m-20 12 h14" fill="none" stroke="#A9722E" strokeWidth="1.6" strokeLinecap="round"/>
          <line x1="68" y1="136" x2="152" y2="136" fill="none" stroke="#A9722E" strokeWidth="1.6" strokeLinecap="round"/>
          <line x1="68" y1="133" x2="68" y2="139" fill="none" stroke="#A9722E" strokeWidth="1.6" strokeLinecap="round"/>
          <line x1="152" y1="133" x2="152" y2="139" fill="none" stroke="#A9722E" strokeWidth="1.6" strokeLinecap="round"/>
          <text x="86" y="132" fontFamily="JetBrains Mono,monospace" fontSize="7" letterSpacing="1" fill="#A9722E">AXIAL FLOW</text>
        </svg>
      );

    case "ohm-r":
      return (
        <svg className={className} viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <line x1="24" y1="36" x2="196" y2="36" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="86" cy="44" r="6" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="112" cy="44" r="6" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M92 50 h14 v12 h-14 z" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="99" y1="62" x2="99" y2="76" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M83 76 h32 l6 34 h-44 z" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M140 44 h18 m-6 -5 l6 5 -6 5" fill="none" stroke="#A9722E" strokeWidth="1.6" strokeLinecap="round"/>
          <line x1="60" y1="136" x2="156" y2="136" fill="none" stroke="#A9722E" strokeWidth="1.6" strokeLinecap="round"/>
          <line x1="60" y1="133" x2="60" y2="139" fill="none" stroke="#A9722E" strokeWidth="1.6" strokeLinecap="round"/>
          <line x1="156" y1="133" x2="156" y2="139" fill="none" stroke="#A9722E" strokeWidth="1.6" strokeLinecap="round"/>
          <text x="76" y="132" fontFamily="JetBrains Mono,monospace" fontSize="7" letterSpacing="1" fill="#A9722E">OVERHEAD LINE</text>
        </svg>
      );

    case "tcg-u":
      return (
        <svg className={className} viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="80" cy="70" r="28" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="80" cy="70" r="5" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="104.0" y1="70.0" x2="108.0" y2="70.0" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="96.97" y1="86.97" x2="99.8" y2="89.8" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="80.0" y1="94.0" x2="80.0" y2="98.0" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="63.03" y1="86.97" x2="60.2" y2="89.8" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="56.0" y1="70.0" x2="52.0" y2="70.0" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="63.03" y1="53.03" x2="60.2" y2="50.2" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="80.0" y1="46.0" x2="80.0" y2="42.0" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="96.97" y1="53.03" x2="99.8" y2="50.2" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M108 62 h44 l10 8 -10 8 h-44" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M118 46 l8 8" fill="none" stroke="#A9722E" strokeWidth="1.6" strokeLinecap="round"/>
          <line x1="80" y1="98" x2="80" y2="120" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="60" y1="120" x2="100" y2="120" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="52" y1="136" x2="168" y2="136" fill="none" stroke="#A9722E" strokeWidth="1.6" strokeLinecap="round"/>
          <line x1="52" y1="133" x2="52" y2="139" fill="none" stroke="#A9722E" strokeWidth="1.6" strokeLinecap="round"/>
          <line x1="168" y1="133" x2="168" y2="139" fill="none" stroke="#A9722E" strokeWidth="1.6" strokeLinecap="round"/>
          <text x="84" y="132" fontFamily="JetBrains Mono,monospace" fontSize="7" letterSpacing="1" fill="#A9722E">TOOL & CUTTER</text>
        </svg>
      );

    case "rib-t":
      return (
        <svg className={className} viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <line x1="30" y1="86" x2="190" y2="86" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="78" cy="66" r="19" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="142" cy="66" r="19" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="78" y1="66" x2="142" y2="66" fill="none" stroke="#0E211A" strokeWidth="1.2" strokeDasharray="3 4" strokeLinecap="round"/>
          <path d="M110 40 v-10 m-4 4 l4 -4 4 4" fill="none" stroke="#A9722E" strokeWidth="1.6" strokeLinecap="round"/>
          <line x1="44" y1="86" x2="44" y2="116" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="176" y1="86" x2="176" y2="116" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="32" y1="116" x2="188" y2="116" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="32" y1="132" x2="188" y2="132" fill="none" stroke="#A9722E" strokeWidth="1.6" strokeLinecap="round"/>
          <line x1="32" y1="129" x2="32" y2="135" fill="none" stroke="#A9722E" strokeWidth="1.6" strokeLinecap="round"/>
          <line x1="188" y1="129" x2="188" y2="135" fill="none" stroke="#A9722E" strokeWidth="1.6" strokeLinecap="round"/>
          <text x="68" y="128" fontFamily="JetBrains Mono,monospace" fontSize="7" letterSpacing="1" fill="#A9722E">ROLLER TIR CHECK</text>
        </svg>
      );

    case "acm-a":
      return (
        <svg className={className} viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="110" cy="70" r="34" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="110" cy="70" r="24" fill="none" stroke="#0E211A" strokeWidth="1.2" strokeDasharray="3 4" strokeLinecap="round"/>
          <circle cx="110" cy="70" r="6" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M110 36 v-12 m-30 46 h-14 m88 0 h-14" fill="none" stroke="#A9722E" strokeWidth="1.6" strokeLinecap="round"/>
          <path d="M150 108 l14 14 m-14 0 l14 -14" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="76" y1="136" x2="144" y2="136" fill="none" stroke="#A9722E" strokeWidth="1.6" strokeLinecap="round"/>
          <line x1="76" y1="133" x2="76" y2="139" fill="none" stroke="#A9722E" strokeWidth="1.6" strokeLinecap="round"/>
          <line x1="144" y1="133" x2="144" y2="139" fill="none" stroke="#A9722E" strokeWidth="1.6" strokeLinecap="round"/>
          <text x="84" y="132" fontFamily="JetBrains Mono,monospace" fontSize="7" letterSpacing="1" fill="#A9722E">AUTO CHASING</text>
        </svg>
      );

    case "amm-a":
      return (
        <svg className={className} viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="88" y="26" width="44" height="34" rx="5" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="110" y1="60" x2="110" y2="82" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M100 82 h20 l-4 12 h-12 z" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="46" y1="106" x2="174" y2="106" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M60 106 v10 m100 -10 v10" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="48" y1="116" x2="172" y2="116" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M132 44 h16 m-6 -5 l6 5 -6 5" fill="none" stroke="#A9722E" strokeWidth="1.6" strokeLinecap="round"/>
          <line x1="48" y1="132" x2="172" y2="132" fill="none" stroke="#A9722E" strokeWidth="1.6" strokeLinecap="round"/>
          <line x1="48" y1="129" x2="48" y2="135" fill="none" stroke="#A9722E" strokeWidth="1.6" strokeLinecap="round"/>
          <line x1="172" y1="129" x2="172" y2="135" fill="none" stroke="#A9722E" strokeWidth="1.6" strokeLinecap="round"/>
          <text x="84" y="128" fontFamily="JetBrains Mono,monospace" fontSize="7" letterSpacing="1" fill="#A9722E">AUTO MILLING</text>
        </svg>
      );

    default:
      return (
        <svg className={className} viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="40" y="45" width="130" height="52" rx="26" fill="none" stroke="#0E211A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="40" y1="132" x2="170" y2="132" fill="none" stroke="#A9722E" strokeWidth="1.6" strokeLinecap="round"/>
          <text x="84" y="128" fontFamily="JetBrains Mono,monospace" fontSize="7" letterSpacing="1" fill="#A9722E">SCHEMATIC</text>
        </svg>
      );
  }
};
