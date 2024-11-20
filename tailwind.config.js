/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--typeface)'],
      },
      colors: {
        'forground': 'var(--color-forground)',
        'danger': 'var(--color-danger)',
        'warning': 'var(--color-warning)',
        'success': 'var(--color-success)',
        'information': 'var(--color-information)',
        'grayscale-1': 'var(--color-grayscale-1)',
        'grayscale-2': 'var(--color-grayscale-2)',
        'grayscale-3': 'var(--color-grayscale-3)',
        'grayscale-4': 'var(--color-grayscale-4)',
        'label-primary': 'var(--color-label-primary)',
        'label-secondary': 'var(--color-label-secondary)',
        'label-tertiary': 'var(--color-label-tertiary)',
        'label-quaternary': 'var(--color-label-quaternary)',
      },
      spacing: {
        1: 'var(--spacing-1)',
        2: 'var(--spacing-2)',
        3: 'var(--spacing-3)',
        4: 'var(--spacing-4)',
        5: 'var(--spacing-5)',
        6: 'var(--spacing-6)',
        7: 'var(--spacing-7)',
        8: 'var(--spacing-8)',
      },
      borderRadius: {
        'xs': 'var(--cornder-radius-xs)',
        's': 'var(--cornder-radius-s)',
        'm': 'var(--cornder-radius-m)',
        'lg': 'var(--cornder-radius-l)',
        'xl': 'var(--cornder-radius-xl)',
      },
      lineHeight: {
        'xs': 'var(--line-height-xs)',
        's': 'var(--line-height-s)',
        'm': 'var(--line-height-m)',
        'lg': 'var(--line-height-l)',
        'xl': 'var(--line-height-xl)',
      },
      fontSize: {
        'xs': 'var(--font-size-xs)',
        's': 'var(--font-size-s)',
        'm': 'var(--font-size-m)',
        'lg': 'var(--font-size-l)',
        'xl': 'var(--font-size-xl)',
      },
      fontWeight: {
        'regular': 'var(--font-weight-regular)',
        'medium': 'var(--font-weight-medium)',
        'bold': 'var(--font-weight-bold)',
      },
    },
  },
  plugins: [],
};
