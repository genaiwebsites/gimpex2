import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "var(--bg)",
          2: "var(--bg-2)",
        },
        white: "var(--white)",
        ink: "var(--ink)",
        green: {
          DEFAULT: "var(--green)",
          2: "var(--green-2)",
        },
        lime: "var(--lime)",
        grey: "var(--grey)",
        line: {
          DEFAULT: "var(--line)",
          w: "var(--line-w)",
        },
      },
      fontFamily: {
        display: ["var(--font-sora)", "system-ui", "sans-serif"],
        body: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      borderRadius: {
        's': '12px',
        'm': '18px',
        'l': '26px',
        'x': '34px',
      },
      boxShadow: {
        'card': '0 1px 2px rgba(12,31,22,.04), 0 12px 32px rgba(12,31,22,.06)',
        'card-hover': '0 2px 4px rgba(12,31,22,.05), 0 22px 48px rgba(12,31,22,.11)',
      },
      animation: {
        marquee: 'mq 42s linear infinite',
      },
      keyframes: {
        mq: {
          to: { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
