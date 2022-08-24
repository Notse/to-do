/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: { 
        blue: {
          google: '#4285F4'
        },
        whites: {
          wh: '#fff'
        }
      }
    },
  },
  plugins: [],
}
