/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    colors: {
      red: '#eb3434',
      yellow: '#ffde00',
      black: '#000',
      white: '#fff',
      lightBlue: '#91d4f7',
    },
    fontFamily: {
      caveat: ['Caveat', 'cursive'],
    },
    extend: {
      boxShadow: {
        btnShadow: '0px 5px 100px -10px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
}
