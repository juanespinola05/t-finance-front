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
      },
      backgroundImage: {
        hero: 'url(hero.jpg)'
      },
      boxShadow: {
        home: '1px 1px 44px -12px rgba(255,255,255,0.85) inset;',
        input: '0px 2px 1px rgba(0, 0, 0, 0.12);'
      }
    }
  },
  plugins: []
}
