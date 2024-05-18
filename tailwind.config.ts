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
      },
      width: {
        "90": "90px",
        "121": "121px",
        "150": "150px",
        "369": "369px",
        "400": "400px",
        "500": "500px",
        "570": "570px",
      },
      height: {
        "250": "250px",
      },
      colors: {
        "custom-orange": "#FF7A00",
      },
      padding: {
        "100": "100px",
      },
      border: {
        "1": "1px",
      },
    },
  },
  plugins: [],
};
export default config;
