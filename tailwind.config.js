/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.html"], // Include root HTML files
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        'roboto': ["Roboto", "sans-serif"],
        'sans': ['ui-sans-serif', 'system-ui', 'Helvetica', 'Arial', 'sans-serif'],
        'serif': ['ui-serif', 'Georgia'],
        'mono': ['ui-monospace', 'SFMono-Regular'],
        'display': ['Oswald'],
        'body': ['"Open Sans"'],
        'new': ["Permanent Marker", 'cursive'],
      }
    },
  },
  plugins: [],
}
