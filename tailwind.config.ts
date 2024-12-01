import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        color: {
          primary: "#D4EBF8",
          secondary:"#1F509A",
          tertiary:"#0A3981",
          last:"#E38E49",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
