import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#080a0f",
        paper: "#f2f4ef",
        lime: "#c8f36a",
        aqua: "#7ce9d6",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)"],
        sans: ["var(--font-manrope)"],
      },
      boxShadow: {
        glow: "0 0 36px rgba(200, 243, 106, 0.16)",
      },
    },
  },
  plugins: [],
};

export default config;
