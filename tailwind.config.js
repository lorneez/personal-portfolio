/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // VSCode Dark+ inspired hyper-contrast theme
        primary: {
          50: '#e6f7ff',
          100: '#bae7ff',
          200: '#91d5ff',
          300: '#69c0ff',
          400: '#40a9ff',
          500: '#1890ff', // Bright blue - main accent
          600: '#096dd9',
          700: '#0050b3',
          800: '#003a8c',
          900: '#002766',
        },
        terminal: {
          bg: '#1e1e1e',      // VSCode dark background
          bgLight: '#252526',  // Slightly lighter panels
          bgLighter: '#2d2d30', // Hover states
          border: '#3e3e42',   // Borders
          comment: '#6a9955',  // Green for comments/muted text
          text: '#d4d4d4',     // Main text
          bright: '#ffffff',   // Bright white text
          cyan: '#4ec9b0',     // Cyan/teal accents
          blue: '#569cd6',     // Blue keywords
          yellow: '#dcdcaa',   // Yellow/gold
          orange: '#ce9178',   // Orange strings
          purple: '#c586c0',   // Purple
          red: '#f48771',      // Red/pink
          green: '#4ec9b0',    // Green
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Fira Code', 'JetBrains Mono', 'Consolas', 'monospace'], // Monospace for dev feel
        mono: ['Fira Code', 'JetBrains Mono', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [],
}
