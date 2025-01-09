/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust the paths according to your project structure
  ],
  theme: {
    extend: {
      colors: {
        'white': {
          DEFAULT: '#FFFFFF',
          '50': '#FAFAFA',
          '100': '#F5F5F5',
          '200': '#E5E5E5',
          '300': '#D4D4D4',
        },
        'blue': {
          '50': '#EBF8FF',
          '100': '#DBF0FF',
          '200': '#BEE3F8',
          '300': '#90CDF4',
          '400': '#63B3ED',
          '500': '#4299E1',
          '600': '#3182CE',
          '700': '#2B6CB0',
          '800': '#2C5282',
          '900': '#2A4365',
        },
        'gray': {
          '50': '#F9FAFB',
          '100': '#F3F4F6',
          '200': '#E5E7EB',
          '300': '#D1D5DB',
          '400': '#9CA3AF',
          '500': '#6B7280',
          '600': '#4B5563',
          '700': '#374151',
          '800': '#1F2937',
          '900': '#111827',
        },
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        serif: ['Merriweather', ...defaultTheme.fontFamily.serif],
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/hero-pattern.svg')", // Ensure this path matches your project structure
        'footer-texture': "url('/src/assets/footer-texture.png')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};


