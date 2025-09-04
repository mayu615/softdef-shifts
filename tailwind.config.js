/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        primary: "#7C3AED",
        success: "#22C55E",
        danger: "#EF4444",
        warning: "#F59E0B",
        dark: {
          bg: "#0E1420",
          card: "#161C2A",
        },
        sidebar: {
          DEFAULT: "#0b1220",
          card: "#0F1724",
          border: "#253142",
        }
      },
      boxShadow: {
        "shadow-xs": "0 1px 2px rgba(0,0,0,0.05)",
        "shadow-sm": "0 2px 4px rgba(0,0,0,0.08)",
        "primary-shadow-sm": "0px 2px 6px rgba(124,58,237,0.18)",
        "success-shadow-sm": "0px 2px 6px rgba(34,197,94,0.15)",
        "warning-shadow-sm": "0px 2px 6px rgba(245,158,11,0.15)",
      },
    },
  },
  plugins: [],
}
