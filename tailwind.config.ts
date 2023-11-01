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
        'cp-dark-green':'#003831',
        'darker-gray-header':'#F8F8F7',
        'cp-dark-gold':'#B38F4F',
      }
    },
  },
  plugins: [],
}
export default config
