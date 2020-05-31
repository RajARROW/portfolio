const defaultTheme = require("tailwindcss/defaultTheme")

const purgecss = require('@fullhuman/postcss-purgecss')({

  // Specify the paths to all of the template files in your project
  content: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
    // etc.
  ],

  // This is the function used to extract class names from your templates
  defaultExtractor: content => {
    // Capture as liberally as possible, including things like `h-(screen-1.5)`
    const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []

    // Capture classes within other delimiters like .block(class="w-1/2") in Pug
    const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []

    return broadMatches.concat(innerMatches)
  }
})

module.exports = {
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "992px",
      xl: "1280px",
    },
    fill: theme => ({
      'black': theme('colors.black'),
      'neon': theme('colors.secondary'),
      'blue': theme('colors.primary')
    }),
    extend: {
      colors: {
        primary: "#214ECF",
        primary_light: "#bbd2ff",
        secondary: "#C7FF84",
        secondary_light: "#E5FEC7",
        secondary_dark: "#394726",
      },
      screens: {
        dark: { raw: "(prefers-color-scheme: dark)" },
      },
      spacing: {
        "44": "11rem",
        "60": "15rem",
      },
      letterSpacing: {
        widy: "0.010em",
      },
      fontSize: {
        "1xl": "1.35rem",
        "2_5xl": "1.65rem",
      },
      fontFamily: {
        body: ["Overpass", ...defaultTheme.fontFamily.sans],
        header: ["Work Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [],
}
