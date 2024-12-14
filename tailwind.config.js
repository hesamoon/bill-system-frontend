/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        outline: "#BCBFC2",
        primary: "#176FCF",
        tx_primary: "#292D32",
        low_important: "#BCBFC2",
        unselected: "#D9D9D9",
      },
    },
  },
  plugins: [],
};
