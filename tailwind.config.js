/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      animation: {
        fadein: "fadein 2s ease-in-out forwards",
        fadeout: "fadeout 2s ease-in-out forwards",
        grow: "grow 1.5s ease-in-out forwards",
      },
    },
    keyframes: {
      fadein: {
        "0%": { opacity: 0 },
        "100%": { opacity: 1 },
      },
      fadeout: {
        "0%": { opacity: 1 },
        "100%": { opacity: 0 },
      },
      grow: {
        "0%": { transform: "scale(0)" },
        "90%": { transform: "scale(1.2)" },
        "100%": { transform: "scale(1)" },
      },
    },
  },
  plugins: [],
};
