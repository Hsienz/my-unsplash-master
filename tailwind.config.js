/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./{pages,components}/**/*.{tsx,jsx,js,ts}'],
  theme: {
    extend: {
      colors: {
        green: '#3db46D',
        red: '#eb5757',
        light_gray: '#bdbdbd',
        normal_gray: '#4f4f4f',
        dark_gray: '#333333',
      }
    },
  },
  plugins: [],
}
