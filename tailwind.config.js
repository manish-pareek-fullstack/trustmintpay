/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}', './app/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0B3B91',
          blue: '#1E6FD9',
          sky: '#4FA3F7',
          green: '#2FA84F',
          lime: '#7ED957',
          light: '#F5F9FF',
          mint: '#F2FBF5',
        },
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(30,111,217,0.20), 0 25px 60px rgba(13,59,142,0.18)',
        soft: '0 18px 45px rgba(11,59,145,0.10)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, rgba(30,111,217,0.16), rgba(126,217,87,0.14))',
      },
    },
  },
  plugins: [],
};
