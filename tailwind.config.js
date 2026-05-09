/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        astra: {
          dark: 'var(--color-astra-dark)',
          purple: 'var(--color-astra-purple)',
          blue: 'var(--color-astra-blue)',
          pink: 'var(--color-astra-pink)',
          gray: 'var(--color-astra-gray)',
          light: 'var(--color-astra-light)',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}