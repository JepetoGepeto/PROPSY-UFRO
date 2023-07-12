/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          primary: "#30C089",
          secondary: "#DD4E3B",
        },
      },
    },
    plugins: [],
  };