/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'section-img': "url('/src/Assets/img/fon2.png')",
        'list-bg': "url('/src/Assets/img/fon3.png')",
      }
    }
  },
  plugins: [],
}
