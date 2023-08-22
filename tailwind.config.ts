import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
     colors: {
      primary: '#090909',
      primaryDark: '#FEFEFE',
      secundaryDark: "#F8F8F8",
      specialBlue: "#00C9A5",
      ligthGray: "#434343",
      darkGray: "#303030",
     },
     fontFamily: {
      poppins: ['var(--font-poppins)'],
      special: ['var(--font-merriweather)'],
    },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: "class"
}
export default config
