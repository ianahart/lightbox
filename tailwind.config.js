module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: [
    'src/**/*.js',
    'src/**/*.jsx',
    'src/**/*.ts',
    'src/**/*.tsx',
    'public/**/*.html',
  ],
  theme: {
    extend: {
      inset: {
        '1/2': '50%',
      },
      animation: {
        slidein: 'slidein 1s linear',
        showimage: 'showimage 0.7s linear',
      },
      keyframes: {
        slidein: {
          '0%': { transform: 'translateX(12rem)', opacity: 0 },
          '100%': { transform: 'translateX(0rem)', opacity: 1 },
        },
        showimage: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
