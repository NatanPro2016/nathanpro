import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "abstract": "url('./public/background.png')",
      },
      colors: {
        "background": "var(--background)",
        "foreground": "var(--foreground)",
        "dark": "#1A1A1A",
        "light-background": "#212121",
        "text-gradiant": "#525252",
        "text-dark": "#525252",
        "radial": "#D9D9D9",
        "text-light": "#827D7D",
      },
    },
  },
  plugins: [],
};
export default config;
