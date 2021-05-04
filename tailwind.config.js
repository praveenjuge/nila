module.exports = {
  mode: 'jit',
  darkMode: false,
  purge: ['./pages/**/*.js', './components/**/*.js', './src/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter var',
          'Inter',
          ...require('tailwindcss/defaultTheme').fontFamily.sans,
        ],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwindcss/plugin')(function({ addBase }) {
      addBase({ '.type-alt': { 'font-feature-settings': '"salt"' } });
    }),
  ],
};
