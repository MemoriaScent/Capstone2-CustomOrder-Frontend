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
        "25": "25px",
        "90": "90px",
        "121": "121px",
        "150": "150px",
        "200": "200px",
        "369": "369px",
        "400": "400px",
        "500": "500px",
        "570": "570px",
        "800": "800px",

        "170": "170px",
        "244": "244px",
        "155": "155px",
        "194": "194px",
        "218": "218px",
        "1136": "1136px",
      },
      height: {
        "250": "250px",
        "50": "50px",
      },
      colors: {
        "custom-gray": "#F7F7F7",
        "custom-orange": "#FF7A00",
      },
      padding: {
        "100": "100px",
        "200": "200px",
      },
      margin: {
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
