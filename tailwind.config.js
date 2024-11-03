/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        headerBg: "rgb(149, 56, 226)",
        footerBg: "rgb(255, 255, 255)",
      },
      backgroundImage: {
        banner: "url('./assets/banner.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
};
