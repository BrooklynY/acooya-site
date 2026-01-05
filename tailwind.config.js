module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "rgb(var(--brand-blue) / <alpha-value>)",
          green: "rgb(var(--brand-green) / <alpha-value>)",
          gold: "rgb(var(--brand-gold) / <alpha-value>)",
          rose: "rgb(var(--brand-rose) / <alpha-value>)",
        },
        neutral: {
          ink: "rgb(var(--neutral-ink) / <alpha-value>)",
          subtle: "rgb(var(--neutral-subtle) / <alpha-value>)",
          line: "rgb(var(--neutral-line) / <alpha-value>)",
          bg: "rgb(var(--neutral-bg) / <alpha-value>)",
        },
      },
      borderRadius: { xl: "14px", "2xl": "18px", "3xl": "22px" },
      boxShadow: { soft: "0 10px 30px rgba(0,0,0,0.08)", lift: "0 18px 40px rgba(0,0,0,0.12)" },
      fontFamily: { sans: ["var(--font-sans)"], display: ["var(--font-display)"] },
    },
  },
  plugins: [],
};
