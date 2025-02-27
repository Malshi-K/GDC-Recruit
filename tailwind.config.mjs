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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          50: "#e6f2e4",
          100: "#cce5c9",
          200: "#b3d8ae",
          300: "#99cb93",
          400: "#80be78",
          500: "#2a9016", // Your main color
          600: "#248713",
          700: "#1f7e10",
          800: "#19750d",
          900: "#146c0a",
        },
      },
    },
  },
  plugins: [],
};
