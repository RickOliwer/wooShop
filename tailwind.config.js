module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins-light': ['Poppins light', 'Helvetica', 'Verdana', 'Tahoma', 'sans-serif'],
        'poppins': ['Poppins', 'Helvetica', 'Verdana', 'Tahoma', 'sans-serif'],
        'poppins-semibold': ['Poppins semibold', 'Helvetica', 'Verdana', 'Tahoma', 'sans-serif'],
        'poppins-bold': ['Poppins bold', 'Helvetica', 'Verdana', 'Tahoma', 'sans-serif'],
        'poppins-extrabold': ['Poppins extrabold', 'Helvetica', 'Verdana', 'Tahoma', 'sans-serif'],
        'poppins-semiheavy': ['Poppins semiheavy', 'Helvetica', 'Verdana', 'Tahoma', 'sans-serif'],
        'poppins-heavy': ['Poppins heavy', 'Helvetica', 'Verdana', 'Tahoma', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
