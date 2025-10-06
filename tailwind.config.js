/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        ui: {
          bg: '#FFFFFF',
          border: '#E5E7EB',
          hero: '#6B7280',
          muted: '#F3F4F6',
        },
        ink: {
          900: '#111827',
          600: '#4B5563',
          onDark: '#F9FAFB',
        },
        brand: {
          primary: '#E11D48',
          primaryHover: '#BE123C',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

