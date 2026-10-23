/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#05040A',
        panel: '#0D0A18',
        navy: '#0F172A',
        violet: { DEFAULT: '#8B5CF6', soft: '#A78BFA', deep: '#5B21B6' },
      },
      fontFamily: {
        heading: ['var(--font-space)', 'Poppins', 'system-ui', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        neon: '0 0 0 1px rgba(139,92,246,.5), 0 0 28px rgba(139,92,246,.45)',
        card: '0 18px 50px -18px rgba(0,0,0,.8)',
      },
    },
  },
  plugins: [],
};
