/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'mainbg': '#292D39',
      'mainblue': '#68A4FF',
      'mainwhite': '#f7f7f7',
      'active': '#A8B6DE',
      'notactive': '#717B99',
      'yellow': '#f6ff00'
    },
    extend: {
      backgroundImage: {
        'imac': "url('/imac.svg')",
        'rocket': "url('/rocket.svg')",
      },
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
        SourceCodePro: ['Source Code Pro', 'monospace']
      }
    },
  },
  plugins: [],
}
