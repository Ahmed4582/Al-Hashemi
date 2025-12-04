/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#815b2d',
          light: '#c3934a',
          dark: '#755129',
        },
        secondary: {
          DEFAULT: '#fec566',
          light: '#fed990',
          dark: '#d9a343',
        },
        accent: '#c3934a',
      },
      fontFamily: {
        amiri: ['Amiri', 'serif'],
        cairo: ['Cairo', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/3617457/pexels-photo-3617457.jpeg')",
      }
    },
  },
  plugins: [],
}