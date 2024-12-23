import type { Config } from "tailwindcss";
import twAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // neutral 900
        black: "hsl(0, 0%, 9%)",
        // neutral 100
        white: "hsl(0, 0%, 96.1%)"
      }
    }
  },
  plugins: [twAnimate]
} satisfies Config;
