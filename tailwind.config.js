import { nextui } from '@nextui-org/react';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        home: "#423adb",
        consumer: "#0097b2",
        producer: "#8c52ff"
       }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
