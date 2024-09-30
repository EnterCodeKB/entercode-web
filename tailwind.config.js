/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}", // Lägg till denna rad
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("flowbite/plugin"), // Lägg till denna rad
  ],
};
