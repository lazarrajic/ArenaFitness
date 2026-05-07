module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        orange: { DEFAULT: '#7AB204', hover: '#6B9F03' },
        navy: { DEFAULT: '#0D0D1A', dark: '#12121F', mid: '#1A1A2E', border: '#2A2A40' },
      },
      fontFamily: {
        heading: ['"Barlow Condensed"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
