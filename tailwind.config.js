/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Poppins', 'sans-serif'], // Replace 'Your Custom Font' with the actual font name
      },      
    },
  },
  variants: {},
  plugins: [],
}
