/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        
        "bungee-shade": ["BungeeShade"],
        "dmsans": ["DMSans"],
        "sansita": ["Sansita"],
        "gravitas-one": ["GravitasOne"],
        "yeseva-one": ["YesevaOne"]
       

      },
    },
  },
  plugins: [],
}
