/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        light: "white", // Background color for light mode
        dark: "green", // Background color for dark mode
      },
      textColor: {
        light: "#00a86b", // Text color for light mode
        dark: "white", // Text color for dark mode
      },
    },
    colors: {
      green: "#00a86b", // custom pink
    },
  },
  variants: {
    extend: {
      backgroundColor: ["dark"],
      textColor: ["dark"],
    },
  },
  plugins: [],
};
