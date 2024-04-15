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
        linearMainBg:
          "linear-gradient(0deg, var(--cl-accent) 40%, var(--bg-primary) 80%)",
      },
      backgroundColor: {
        primary: "var(--bg-primary)",
        "primary-hover": "var(--bg-primary-hover)",
        secondary: "var(--bg-secondary)",
        "secondary-accent": "var(--bg-secondary-accent)",
      },
      transitionDuration: {
        primary: "var(--duration)",
      },
      borderRadius: {
        primary: "var(--br-primary)",
      },
      fontSize: {
        base: "var(--fs-primary)",
        small: "var(--fs-small)",
        big: "var(--fs-big)",
        bigger: "var(--fs-bigger)",
        biggest: "var(--fs-biggest)",
      },
      lineHeight: {
        primary: "var(--lh-primary)",
      },
    },
  },
  plugins: [],
};

export default config;
