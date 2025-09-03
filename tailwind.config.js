// tailwind.config.js
module.exports = {
  content: [
    "./src/app/**/*.{ts,tsx,js,jsx}",
    "./src/components/**/*.{ts,tsx,js,jsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Body
        "b4-bold": ["10px", { lineHeight: "14px", fontWeight: "700" }],
        "b4-reg": ["10px", { lineHeight: "14px", fontWeight: "400" }],
        "b3-bold": ["12px", { lineHeight: "16px", fontWeight: "700" }],
        "b3-reg": ["12px", { lineHeight: "16px", fontWeight: "400" }],
        "b2-bold": ["14px", { lineHeight: "20px", fontWeight: "700" }],
        "b2-reg": ["14px", { lineHeight: "20px", fontWeight: "400" }],
        "b1-bold": ["16px", { lineHeight: "24px", fontWeight: "700" }],
        "b1-reg": ["16px", { lineHeight: "24px", fontWeight: "400" }],

        // Titles
        "t3-bold": ["18px", { lineHeight: "24px", fontWeight: "700" }],
        "t2-bold": ["20px", { lineHeight: "28px", fontWeight: "700" }],
        "t2-reg": ["20px", { lineHeight: "28px", fontWeight: "400" }],
        "t1-bold": ["24px", { lineHeight: "32px", fontWeight: "700" }],
        "t1-lite": ["24px", { lineHeight: "32px", fontWeight: "300" }],

        // Headings
        "h4-bold": ["36px", { lineHeight: "48px", fontWeight: "700" }],
        "h4-lite": ["36px", { lineHeight: "48px", fontWeight: "300" }],
        "h3-bold": ["48px", { lineHeight: "56px", fontWeight: "700" }],
        "h3-lite": ["48px", { lineHeight: "56px", fontWeight: "300" }],
        "h2-bold": ["64px", { lineHeight: "72px", fontWeight: "700" }],
        "h2-lite": ["64px", { lineHeight: "72px", fontWeight: "300" }],
        "h1-bold": ["72px", { lineHeight: "80px", fontWeight: "700" }],
        "h1-lite": ["72px", { lineHeight: "80px", fontWeight: "300" }],
      },
      colors: {
        primary: "#7C3AED", // purple (SoftDef theme)
        success: "#22C55E",
        danger: "#EF4444",
        warning: "#F59E0B",
        dark: {
          bg: "#111827",
          card: "#1F2937",
        },
      },
      boxShadow: {
        "shadow-xs": "0 1px 2px rgba(0,0,0,0.05)",
        "shadow-sm": "0 2px 4px rgba(0,0,0,0.1)",
        "shadow-md": "0 4px 6px rgba(0,0,0,0.1)",
        "shadow-lg": "0 10px 15px rgba(0,0,0,0.15)",
        "shadow-xl": "0 20px 25px rgba(0,0,0,0.2)",

        "primary-shadow-sm": "0px 2px 4px rgba(124,58,237,0.25)",
        "primary-shadow-md": "0px 4px 6px rgba(124,58,237,0.25)",
        "primary-shadow-lg": "0px 10px 15px rgba(124,58,237,0.25)",

        "success-shadow-sm": "0px 2px 4px rgba(34,197,94,0.25)",
        "success-shadow-md": "0px 4px 6px rgba(34,197,94,0.25)",
        "success-shadow-lg": "0px 10px 15px rgba(34,197,94,0.25)",

        "warning-shadow-sm": "0px 2px 4px rgba(245,158,11,0.25)",
        "warning-shadow-md": "0px 4px 6px rgba(245,158,11,0.25)",
        "warning-shadow-lg": "0px 10px 15px rgba(245,158,11,0.25)",
      },
    },
  },
  plugins: [],
}
