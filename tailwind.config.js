/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#8EC1D6",
          secondary: "#3D4B5F",
          mid: "#CBD5E1",
          light: "#F8FAFC",
          "base-100": "#ffffff",
        },
      },
      false
    ],
  },
};
