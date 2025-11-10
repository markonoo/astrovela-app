/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Georgia', 'serif'],
      },
      spacing: {
        'a4-width': '210mm',
        'a4-height': '297mm',
        'page-margin': '16mm',
      },
      fontSize: {
        '9pt': '9pt',
        '11pt': '11pt',
        '12pt': '12pt',
        '13pt': '13pt',
        '14pt': '14pt',
        '24pt': '24pt',
        '26pt': '26pt',
        '30pt': '30pt',
        '32pt': '32pt',
        '36pt': '36pt',
        '38pt': '38pt',
        '40pt': '40pt',
      },
      colors: {
        'zodiac-gold': '#d9c5a0',
        'page-bg': '#efe6d7',
      },
    },
  },
  plugins: [],
}

