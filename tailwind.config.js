/** @type {import('tailwindcss').Config} */
import animations from "@midudev/tailwind-animations";
export default {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#083C74",
        secondary: "#59f1d0",
      },
    },
  },
  plugins: [animations],
};
