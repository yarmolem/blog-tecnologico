const defaultTheme = require('tailwindcss/defaultTheme')

const themeColors = {
  primary: {
    50: '#f2f2f2',
    100: '#d9d9d9',
    200: '#bfbfbf',
    300: '#a6a6a6',
    400: '#8c8c8c',
    500: '#737373',
    600: '#595959',
    700: '#404040',
    800: '#262626',
    900: '#0d0d0d'
  },
  secondary:
  {
    50: '#ffe1e1',
    100: '#ffb1b1',
    200: '#ff7f7f',
    300: '#ff4c4c',
    400: '#ff1a1a',
    500: '#e60000',
    600: '#b40000',
    700: '#810000',
    800: '#500000',
    900: '#210000'
  }
}

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  important: true,
  theme: {
    extend: {
      colors: { ...themeColors },
      fontFamily: {
        sans: `"RobotoCondensed", ${defaultTheme.fontFamily.sans.join(',')}`,
        mono: `"Roboto", ${defaultTheme.fontFamily.mono.join(',')}`
      },
      fontSize: {
        xs: '0.625rem',
        sm: '0.75rem',
        md: '0.8125rem',
        base: '0.875rem',
        lg: '1rem',
        xl: '1.125rem',
        '2xl': '1.25rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '2.25rem',
        '6xl': '2.5rem',
        '7xl': '3rem',
        '8xl': '4rem',
        '9xl': '6rem',
        '10xl': '8rem'
      },
      opacity: {
        12: '0.12',
        38: '0.38',
        87: '0.87'
      },
      rotate: {
        '-270': '270deg',
        15: '15deg',
        30: '30deg',
        60: '60deg',
        270: '270deg'
      },
      scale: {
        '-1': '-1'
      },
      zIndex: {
        '-1': -1,
        49: 49,
        60: 60,
        70: 70,
        80: 80,
        90: 90,
        99: 99,
        999: 999,
        9999: 9999,
        99999: 99999
      },
      spacing: {
        13: '3.25rem',
        15: '3.75rem',
        18: '4.5rem',
        22: '5.5rem',
        26: '6.5rem',
        30: '7.5rem',
        50: '12.5rem',
        90: '22.5rem'
      },
      /**
       * Extended spacing values for width and height utilities.
       * This way, we won't be adding these to other utilities
       * that use 'spacing' config to keep the file size
       * smaller by not generating useless utilities such as
       * p-1/4 or m-480.
       */
      extendedSpacing: {
        // Fractional values
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '9/10': '90%',

        // Bigger values
        100: '25rem',
        120: '30rem',
        128: '32rem',
        140: '35rem',
        160: '40rem',
        180: '45rem',
        192: '48rem',
        200: '50rem',
        240: '60rem',
        256: '64rem',
        280: '70rem',
        320: '80rem',
        360: '90rem',
        400: '100rem',
        480: '120rem'
      },
      height: (theme) => ({
        ...theme('extendedSpacing')
      }),
      minHeight: (theme) => ({
        ...theme('spacing'),
        ...theme('extendedSpacing')
      }),
      maxHeight: (theme) => ({
        ...theme('extendedSpacing'),
        none: 'none'
      }),
      width: (theme) => ({
        ...theme('extendedSpacing')
      }),
      minWidth: (theme) => ({
        ...theme('spacing'),
        ...theme('extendedSpacing'),
        screen: '100vw'
      }),
      maxWidth: (theme) => ({
        ...theme('spacing'),
        ...theme('extendedSpacing'),
        screen: '100vw'
      })
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
