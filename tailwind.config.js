/** @type {import('tailwindcss').Config} */
export default {
  content: [
    ".index.html",
    "./src/App.jsx",
    "./src/Chatscreen.jsx",
    "./src/Pricing.jsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "Rubik",
      },
      colors: {
        mainHeading: "hsl(271, 36%, 24%)",
        paragraph: "hsl(270, 7%, 64%)",
        placeHolder: "hsl(206, 6%, 79%)",
        rightText: "hsl(271, 15%, 43%)",
        leftText: "hsl(276, 55%, 52%)",
        appSubHeading: "hsl(276, 100%, 81%)",
        gdMagenta: "hsl(293, 100%, 63%)",
        gdViolet: "hsl(264, 100%, 61%)",
        appBg: "hsl(270, 20%, 96%)",
        submitBtnBg: "hsl(271, 36%, 24%)",
        radioOutline: "hsl(289, 100%, 72%)",
      },
      screens: {
        breakpoint: "850px",
      },
    },
  },
  plugins: [],
};
