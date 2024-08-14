/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        black: '#111111',
        gray: {
          1: '#AFC0AA',
          2: '#D3E2CE',
          3: '#F6FBF4',
        },
        green: {
          0: '#154805',
          1: '#E3FFD8',
          2: '#F5FFF1',
        },
        blue: {
          0: '#0E3674',
          1: '#D8F1FF',
        },
        system: {
          green: {
            DEFAULT: '#4AB518',
            light: '#E5FFD9',
          },
          red: {medium: '#CA1D1D', light: '#FFE0E0'},
          orange: {medium: '#D8F1FF', light: '#FFF2DE'},
        },
      },
      fontFamily: {
        'os-r': 'open-sans-r',
        'os-b': 'open-sans-sb',
        'os-sb': 'open-sans-sb',
        ars: 'arsenal',
      },
      fontSize: {
        '2xs': '10px', // 10px
        xs: '12px', // 12px
        sm: '14px', // 14px
        base: '16px', // 16px
        lg: '17px', // 17px
        xl: '18px', // 18px
        '2xl': '20px', // 20px
        '3xl': '24px', // 24px
        '4xl': '28px', // 28px
        '5xl': '60px', // 60px
      },
      leading: {
        none: 1,
        tight: 1.25,
        snug: 1.375,
        normal: 1.5,
        relaxed: 1.625,
        loose: 2,
      },

      borderRadius: {
        none: '0',
        sm: '2px',
        default: '3px',
        lg: '5px',
        full: '9999px',
      },
    },
  },

  plugins: [],
};
