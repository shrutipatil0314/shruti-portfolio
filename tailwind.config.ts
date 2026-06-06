import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        red: {
          DEFAULT: "#780000",
          dark: "#3d0000",
          light: "#a00000",
        },
        cream: "#FFF6F2",
        navy: "#1a3a6b",
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', "monospace"],
        vt: ["VT323", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
