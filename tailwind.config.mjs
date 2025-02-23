/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5A67D8",
        secondary: "#48BB78",
        background: "#F7FAFC",
        textDark: "#2D3748",
        textLight: "#718096",
      },
    },
  },
  plugins: [],
};
