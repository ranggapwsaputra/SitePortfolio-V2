const { animations } = require('framer-motion');
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans],
      },
colors: {
    dark: "#1b1b1b",
    light: "#f5f5f5",
    primary: "#B63E96", // 240,86,199
    primaryDark: "#58E6D9", // 80,230,217
},
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      typography: (theme) => ({
        invert: {
          css: {
            '--tw-prose-body': theme('colors.light'),
            '--tw-prose-headings': theme('colors.light'),
            '--tw-prose-lead': theme('colors.light'),
            '--tw-prose-bold': theme('colors.light'),
            '--tw-prose-counters': theme('colors.light'),
            '--tw-prose-bullets': theme('colors.light'),
            '--tw-prose-hr': theme('colors.gray.300'),
            '--tw-prose-quotes': theme('colors.light'),
            '--tw-prose-quote-borders': theme('colors.gray.500'),
            '--tw-prose-captions': theme('colors.light'),
            '--tw-prose-code': theme('colors.light'),
            '--tw-prose-pre-code': theme('colors.light'),
            '--tw-prose-th-borders': theme('colors.gray.500'),
            '--tw-prose-td-borders': theme('colors.gray.500'),
          },
        },
      }),
    },
    screens: {
    "2xl": { max: "1535px" },
    // => @media (max-width: 1535px) { ... }

    xl: { max: "1279px" },
    // => @media (max-width: 1279px) { ... }

    lg: { max: "1023px" },
    // => @media (max-width: 1023px) { ... }

    md: { max: "767px" },
    // => @media (max-width: 767px) { ... }

    sm: { max: "639px" },
    // => @media (max-width: 639px) { ... }

    xs: { max: "479px" },
    // => @media (max-width: 479px) { ... }
},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
