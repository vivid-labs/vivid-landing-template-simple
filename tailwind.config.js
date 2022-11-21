/** @type {import('tailwindcss').Config} */
module.exports = {
  // Control dark pseudo-selector by ancestor's "dark" class
  darkMode: "class",
  // Scan these files for Tailwind classes
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./svg/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary accent color
        primary: {
          // Tailwind blue
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        // Grayscale
        gray: {
          // Tailwind zinc
          50: "#fafafa",
          100: "#f4f4f5",
          200: "#e4e4e7",
          300: "#d4d4d8",
          400: "#a1a1aa",
          500: "#71717a",
          600: "#52525b",
          700: "#3f3f46",
          800: "#27272a",
          900: "#18181b",
        },
        // Gradient colors
        neon: {
          blue: "#3b82f6",
          pink: "#ec4899",
          purple: "#a855f7",
          teal: "#2dd4bf",
          green: "#22c55e",
          sky: "#0ea5e9",
          amber: "#f59e0b",
          red: "#ef4444",
        },
      },
      fontFamily: {
        sans: ["Avenir Next", "Helvetica Neue", "sans-serif"],
      },
    },
  },
  plugins: [],
};
