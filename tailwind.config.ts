import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        "20": "20px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      maxWidth: {
        "540": "540px",
        "650": "650px",
      },
      maxHeight: {
        "800": "800px",
      },
      width: {
        "25": "25px",
        "90": "90px",
        "121": "121px",
        "135": "135px",
        "150": "150px",
        "320": "320px",
        "200": "200px",
        "369": "369px",
        "400": "400px",
        "500": "500px",
        "570": "570px",
        "800": "800px",
        "318": "318px",
        "163": "163px",
        "263": "263px",
        "560": "560px",
        "300": "300px",
        "170": "170px",
        "535": "535px",
        "540": "540px",
        "700": "700px",
        "244": "244px",
        "155": "155px",
        "194": "194px",
        "218": "218px",
        "1136": "1136px",
        "1300": "1300px",
        "100vw": "100vw",
        "700": "700px",
        "720": "720px",
        "710": "710px",
        "120": "120px",
        "936": "936px",
        "772": "772px",
      },
      height: {
        "250": "250px",
        "230": "230px",
        "150": "150px",
        "160": "160px",
        "100": "100px",
        "30": "30px",
        "50": "50px",
        "60": "60px",
        "200": "200px",
        "300": "300px",
        "400": "400px",

        "1400": "1400px",
        "45vw": "44.9vw",
        "66vw": "66.5vw",
        "1000": "1000px",
        "600": "600px",
        "800": "800px",
        "740": "740px",
        "190": "190px",
      },
      colors: {
        "custom-gray": "#F7F7F7",
        "custom-orange": "#FF7A00",
        "custom-lightgray": "#D9D9D9",
        "toss-gray": "#f2f4f6",
        "toss-blue": "#3282f6",
      },
      padding: {
        "100": "100px",
        "200": "200px",
        "70": "70px",
        "180": "180px",
        "25": "25px",
        "60": "60px",
      },
      margin: {
        "120": "120px",
        "100": "100px",
        "45": "45px",
        "60": "60px",
        "44vw": "44vw",
        "90": "90px",
        "110": "110px",
        "150": "150px",
        "22vw": "22vw",
        "50": "50px",
        "180": "180px",
        "30": "30px",
        "70": "70px",
        "200": "200px",
        "85" : "85px",
      },
      border: {
        "1": "1px",
      },
      left: {
        custom: "calc(50vw - 650px)",
      },
      translate: {
        "45vw": "44.9vw",
      },
      transitionDuration: {
        "3000": "3000ms",
      },
      transitionDelay: {
        "2500": "2500ms",
      },
      keyframes: {
        intro: {
          from: {
            transform: "translateY(0)",
            height: "45vw",
          },
          to: {
            transform: "translateY(45vw)",
            height: "0",
          },
        },
        introafter: {
          "0%, 50%": {
            borderBottom: "21.6vw solid transparent",
          },
          "100%": {
            borderBottom: "0vw solid transparent",
          },
        },
        introafter1: {
          "0%, 50%": {
            top: "21.6vw",
          },
          "100%": {
            top: "0vw",
          },
        },
        introafter2: {
          "0%, 50%": {
            height: "66.5vw",
          },
          "100%": {
            height: "44.9vw",
          },
        },
      },
      animation: {
        intro: "intro 2s ease-in-out",
        introafter: "introafter 4s ease-in-out",
        introafter1: "introafter1 4s ease-in-out",
        introafter2: "introafter2 4s ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;
