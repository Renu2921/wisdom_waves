export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#1e293b', // Primary Light ( slate-800 )
          DEFAULT: '#0B132B', // Deep Navy from the design
          dark: '#030712',   // Very Dark
        },
        accent: {
          DEFAULT: '#F4B942', // Golden Yellow
          hover: '#E2A933',
        },
        muted: '#6B7280',
        card: '#F8FAFC',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
