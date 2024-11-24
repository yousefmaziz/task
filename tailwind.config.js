/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      center:true
    },
    extend: {
      colors:{
        mycolor:"#2c3e50",
        headColor:"#1abc9c",
        color:"#1a252f"
      },
      screens:{
        "xl":"1080px"
      },

    },
  },
  plugins: [],
}

