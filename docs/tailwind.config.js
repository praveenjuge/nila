module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    '../src/*.tsx',
  ],
  darkMode: false,
  theme: {
    extend: {},
  },
  plugins: [],
};
