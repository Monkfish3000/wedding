/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        light: 'white', // Background color for light mode
        dark: 'rose-500', // Background color for dark mode
      },
      textColor: {
        light: '#ebbad2', // Text color for light mode
        dark: 'white', // Text color for dark mode
      },
    },
    colors: {
      pink: '#ebbad2', // custom pink
    },
  },
  variants: {
    extend: {
      backgroundColor: ['dark'],
      textColor: ['dark'],
    },
  },
  plugins: [],
};
