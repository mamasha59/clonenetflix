/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        default: '#141414',
      },
      backgroundImage: {
        'gradient': 'linear-gradient(180deg,rgba(0,0,0,.7) 10%,transparent)',
      }
    },

  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
