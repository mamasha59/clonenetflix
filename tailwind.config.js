/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        default: '#141414',
        defaultOpacity: 'rgba(0,0,0,0.7)',
      },
   
      keyframes: {
        preloader: {
          '0%, 100%': { opacity: '.8' },
          '50%': { opacity: '.3' },
        }
      }
    },
    screens:{
      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px)
  
      'lg': {'max': '1126px'},
      // => @media (max-width: 1126px)
  
      'md': {'max': '900px'},
      // => @media (max-width: 900px)
  
      'sm': {'max': '780px'},
      // => @media (max-width: 746px)
      'lit':{'max': '456px'}
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
