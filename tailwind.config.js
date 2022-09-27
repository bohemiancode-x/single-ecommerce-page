/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Kumbh Sans']
      },
      colors: {
        orange: '#ff7d1a',
        paleorange: '#ffede0',
        veryvarkblue: '#1d2025',
        darkgrayblue: '#68707d',
        grayishblue: '#b6bcc8',
        lightgrayblue: '#f7f8fd'
      }
    },
  },
  plugins: [],
}
