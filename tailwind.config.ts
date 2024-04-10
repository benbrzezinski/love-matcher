import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textColor: {
        primary: "var(--cl-primary)",
        accent: "var(--cl-accent)",
      },
      backgroundImage: {
        linear:
          "linear-gradient(0deg, var(--cl-accent) 40%, var(--bg-primary) 80%)",
      },
      backgroundColor: {
        primary: "var(--bg-primary)",
        "primary-hover": "var(--bg-primary-hover)",
      },
      transitionDuration: {
        primary: "var(--duration)",
      },
    },
  },
  plugins: [],
};

export default config;
