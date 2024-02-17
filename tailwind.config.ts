import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          900: "#2C5C5C",
          800: "#3a6767",
          700: "#587f7f",
          600: "#6d908f",
          500: "#83a2a1",
          400: "#97b2b1",
          300: "#a7bebd",
          200: "#c6d7d6",
          100: "#F0F7F6",
        },
      },
    },
  },
  plugins: [],
};
export default config;
