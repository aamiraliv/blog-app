/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background-color)',
        card: 'var(--card-color)',
        button: 'var(--button-color)',
        highlight: 'var(--icon-highlight)',
        border: 'var(--border-highlight)',
        text: 'var(--text-color)',
        muted: 'var(--muted-text)',
        lightCard:'#44486C',
      },
      fontFamily: {
        AbrilFatface:[ 'Abril Fatface', 'cursive' ],
        BebasNeue:[ 'Bebas Neue', 'sans-serif' ]
      }
    },
  },
  plugins: [],
}

