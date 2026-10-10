/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Set Avenir as your default sans-serif font
        sans: ['var(--font-avenir)', 'Arial', 'sans-serif'],
        // Set Besley as your default serif font (for headings)
        serif: ['var(--font-besley)', 'Georgia', 'serif'],
        // Optional: define others if you need them specifically
        nunito: ['var(--font-nunito)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
    
//     "./components/**/*.{js,jsx}",
//     "./src/**/*.{js,jsx,ts,tsx}", // Include all files in the src folder
//     "./public/**/*.html",         // Include any static HTML files in the public directory

//   ],

//   theme: {
//     extend: {
      
//       colors: {
//         // primary:"#223A5C",2B0E82
//         primary:"#2B0F80",
//       },

//       screens: {
//         sm: '640px',
//         md: '768px',
//         lg: '1024px',
//         xl: '1280px',
//       },
//     },
//   },

//   plugins: [],
// }

