// tailwind.config.js
module.exports = {
   content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      extend: {
         colors: {
            primary: "#6C63FF",
            secondary: "#847dff",
            tertiary: "#b4b0ff",
            fourth: "#FFF9D0",
         },

         boxShadow: {
            "custom": "0px 0px 12px 24px #F8F8F8",
         },

         fontFamily: {
            playfair: ["Playfair Display", "serif"],
         }
      },
   },
   plugins: [],
};