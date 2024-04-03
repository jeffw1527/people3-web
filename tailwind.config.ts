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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "product": "url('/product_bg.png')",
        "rlhf": "url('/rlhf_bg.png')",
        "datacuration": "url('/data_curation_bg.png')",
      },
      colors: {
        product1: '#A2F464',
        product2: '#4AE1C6',
        product3: '#90AFFF',
        product4: '#DFDFDF'
      }
    },
  },
  plugins: [],
};
export default config;
