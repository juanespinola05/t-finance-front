/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        blue: '#466aea',
        lightBg: '#f7f8fb',
        customGray: '#6B6B6B'
      },
      fontFamily: {
        roboto: 'Roboto'
      }
    }
  },
  plugins: []
}
