module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '2px 2px 30px 10px rgba(0, 0, 0, 0.20)',
        '1xl': '0px 3px 0px 0px #3F2ABD',
      },
      colors: {
        lightgray: 'rgba(245, 245, 245, 0.50)',
        linebreakergray: 'rgba(223, 225, 228, 0.60)',
        breaker: 'rgba(255, 255, 255, 0.20)',
      },
      fontFamily: {
        gt: ['var(--font-gt)'],
      },
    },
  },
  plugins: [],
};
