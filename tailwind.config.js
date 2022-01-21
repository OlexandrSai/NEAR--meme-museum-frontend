module.exports = {
  purge: [`./index.html`, `./src/**/*.{vue,js,ts,jsx,tsx}`],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        pink: {
          500: "#FC00FF",
        },
        blue: {
          400: "#00DBDE",
          500: "#56CCF2",
          600: "#2F80ED",
        }
      },
      width: {
        '251': '251px',
        '374': '374px',
      },
      height: {
        '244': '244px',
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      backgroundImage: ['hover', 'focus', 'active'],
      scale: ['active'],
    },
  },
  plugins: [],
}
