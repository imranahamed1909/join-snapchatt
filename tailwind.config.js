/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  // corePlugins: {
  //   preflight: false,
  // },
  // important: "#__next",
  theme: {
    extend: {
      container: {
        center: "true",
        screens: {
          lg: "970px",
          xl: "970px",
          "2xl": "970px",
        },
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        "custom-gray": "#777777",
        "custom-gray2": "#222222",
        "custom-gray3": "#fafafa",
        "custom-gray4": "#aaaaaa",
        "custom-rose": "#990033",
        "custom-rose2": "#850b37",
        "custom-cyan": "#2ba6cb",
        "custom-cyan2": "#2285a2",
        "custom-cyan3": "#258faf",
        "custom-orange": "#dd9955",
      },
      boxShadow: {
        around: "0 0 25px 5px rgba(0, 0, 0, .1)",
        "around-sm": "0 0 5px 0 rgba(0, 0, 0, .1)",
        "inner-custom":
          "inset 0 -15px 15px -15px rgba(0, 0, 0, .4), inset 0 15px 15px -15px rgba(0, 0, 0, .4)",
      },
    },
  },
  plugins: [],
};
