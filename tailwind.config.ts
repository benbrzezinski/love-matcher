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
        "linear-main":
          "linear-gradient(0deg, var(--cl-accent) 40%, var(--bg-primary) 80%)",
        "linear-progress-bar":
          "linear-gradient(90deg, var(--cl-accent) 10%, var(--bg-secondary-accent-lighter) 20%, var(--bg-secondary-accent-darker) 40%, var(--bg-secondary) 60%, var(--bg-primary) 80%, var(--bg-primary-hover) 90%)",
      },
      backgroundColor: {
        primary: "var(--bg-primary)",
        "primary-hover": "var(--bg-primary-hover)",
        secondary: "var(--bg-secondary)",
        "secondary-accent-lighter": "var(--bg-secondary-accent-lighter)",
        "secondary-accent-darker": "var(--bg-secondary-accent-darker)",
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
