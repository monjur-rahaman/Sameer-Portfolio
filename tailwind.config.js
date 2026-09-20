/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#FFFFFF',
        text: '#1A1A1A',
        'text-muted': '#555555',
        accent: '#8B1A1A',
        'nav-bg': '#FFFFFF',
        'nav-text': '#1A1A1A',
        'dropdown-bg': '#1A1A1A',
        'dropdown-text': '#FFFFFF',
        border: '#E0E0E0',
        placeholder: '#E0E0E0',
      },
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'],
        serif: ['Georgia', 'Times New Roman', 'serif'],
      },
      maxWidth: {
        content: '900px',
      },
      spacing: {
        navbar: '64px',
      },
    },
  },
  plugins: [],
};
