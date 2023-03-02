/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'my-green': '#15965A',
        'my-green-light': '#1FC075',
        'my-blue': '#155799',
        'my-primary-green': '#159957',
        'my-red': '#FC5B5B',
        'my-red-light': '#FE7F7F',
        'my-gray': '#D9D9D9',
      },
    },
  },
  plugins: [],
};
