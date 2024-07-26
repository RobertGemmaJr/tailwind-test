/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        spin: "spin infinite 20s linear",
      },
      height: {
        custom: "40vmin",
      },
      fontSize: {
        c: "calc(10px + 2vmin)",
      },
    },
  },
  plugins: [],
};
