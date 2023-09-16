/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'violet': 'rgb(102, 108, 163)',
        'dark-blue': 'rgb(19, 24, 63)',
        'gray': 'rgb(131, 134, 154)',
        'pink': 'rgb(247, 71, 128)',
        'light-pink': 'rgb(255, 167, 195)',
        'orange-gradient': 'rgb(255, 167, 195)',
        'blue-gradient': 'rgb(255, 167, 195)',
      }
    },
  },
  plugins: [],
}

