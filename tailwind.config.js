/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['portfolio.html'],
  theme: {
    container :{
      center: true,
      paddin: '16px',
    },
    extend: {
      colors: {
        color: '#855E42',
        hitam: '#111827',
        Ntebal: '#6B7280',
        gelap: '#5B21B6'
      },
      screens:{
        'laptop': '1024px',
        // '2xl' : '1320px'
      },
    },
  },
  plugins: [],
}

