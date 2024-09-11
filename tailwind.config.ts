import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",

  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'inter-bold': ['InterBold', 'sans-serif'],
        'inter-regular': ['InterRegular', 'sans-serif'],
        'poppins-light': ['PoppinsLight', 'sans-serif'],
        'poppins-medium': ['PoppinsMedium', 'sans-serif'],
        'poppins-semibold': ['PoppinsSemibold', 'sans-serif'],
        'poppins-regular': ['PoppinsRegular', 'sans-serif'],
        'opensans-regular': ['OpenSansRegular', 'sans-serif'],
        'opensans-semibold': ['OpenSansSemibold', 'sans-serif'],
        'opensans-light': ['OpenSansLight', 'sans-serif'],
        'montserrat-regular': ['MontserratRegular', 'sans-serif'],
        'poppins-bold': ['PoppinsBold', 'sans-serif'],
        'montserrat-semibold': ['MontserratSemibold', 'sans-serif'],
      },
      screens: {


        '320-529': { 'min': '320px', 'max': '529px' },
        // => @media (min-width: 320px) and (max-width: 529px) { ... }
        '375-424': { 'min': '375px', 'max': '424px' },
        '530-767': { 'min': '530px', 'max': '767px' },
        // => @media (min-width: 375px) and (max-width: 424px) { ... }

        '992-1199': { 'min': '992px', 'max': '1199px' },
        // => @media (min-width: 992px) and (max-width: 1199px) { ... }

        '1366-1439': { 'min': '1200px', 'max': '1439px' },
        '1301-1439': { 'min': '1301px', 'max': '1439px' },
        // => @media (min-width: 1366px) and (max-width: 1439px) { ... }
        '1368-1439': { 'min': '1366px', 'max': '1439px' },
        // => @media (min-width: 1366px) and (max-width: 1439px) { ... }

        '1260-1365': { 'min': '1200px', 'max': '1280px' },
        // => @media (min-width: 1260px) and (max-width: 1365px) { ... }

        '1440-1599': { 'min': '1440px', 'max': '1599px' },
        '1440-1500': { 'min': '1440px', 'max': '1500px' },
        '530-1100': { 'min': '530px', 'max': '1100px' },
        '530-1300': { 'min': '530px', 'max': '1300px' },
        // => @media (min-width: 1440px) and (max-width: 1599px) { ... }

        '1600-1679': { 'min': '1600px', 'max': '1679px' },
        // => @media (min-width: 1600px) and (max-width: 1900px) { ... }

        '1680-1919': { 'min': '1680px', 'max': '1919px' },
        // => @media (min-width: 1680px) and (max-width: 1919px) { ... }
        '1500-1560': { 'min': '1500px', 'max': '1560px' },
        // => @media (min-width: 1680px) and (max-width: 1919px) { ... }

        '2560': { 'min': '2560px' },
        // => @media (min-width: 2560px) { ... }
        '1920': { 'max': '3000px' },
        // => @media (min-width: 2560px) { ... }
        '1300': { 'max': '1300px' },
        // => @media (min-width: 1300px) { ... }

        '1200-1300': { 'min': '1200px', 'max': '1300px' },
        // => @media (min-width: 1200px) and (max-width: 1300px) { ... }

        '1025-1230': { 'min': '1025px', 'max': '1230px' },
        // => @media (min-width: 1025px) and (max-width: 1230px) { ... }
        '1165-1199': { 'min': '1165px', 'max': '1199px' },
        // => @media (min-width: 1025px) and (max-width: 1230px) { ... }

      },
    },
  },

  plugins: [],
};
export default config;
