/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  purge: [
    './components/**/*.vue',
    './layouts/**/*.vue',
    './pages/**/*.vue',
  ],
  future: {
    removeDeprecatedGapUtilities: true,
  },
  theme: {
    extend: {
      colors: {
        // 'primary': '#0a192f',
        'primary': '#f7fafc',
        'secondary': '#0d1e36',
      }
    }
  },
  variants: {
    
  },
  plugins: [require('tailwindcss-markdown')]
}
