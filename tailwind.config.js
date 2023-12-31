/** @type {import('tailwindcss').Config} */


export default {
  content: [

    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   
    extend: { 
      colors:{
      'test1': '#10112F',
      'test2': '#0E041B',
      'test3': '#1E061C',
    },
    fontFamily:{
      signature:["Monoton"],
      signature1:["Fascinate Inline"],
    },
      
    spacing:{
      '45':'63rem',
      '17':'2rem'
    },
    width: {
      '100': '48rem',
    },

  }
    
  },
  plugins: [],
}

