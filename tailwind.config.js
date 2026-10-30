/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0A0E1A',
        night: '#0F1424',
        mist: '#F4F5F8',
        brand: { DEFAULT: '#E11D2E', dark: '#B9111F', soft: '#FDECEE' },
      },
      fontFamily: {
        heading: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
