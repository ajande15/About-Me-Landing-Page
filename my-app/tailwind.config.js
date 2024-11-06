/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#231F20',    
        secondary: '#EAEAEA',  
        accent: '#222831',
        lightaccent: '#252e3b',
        white: "F9FAFF",
        grey:"#828282",
        },
      },
    },
  plugins: [],
}


