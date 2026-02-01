/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "rgb(var(--bg))",
        panel: "rgb(var(--panel))",
        ink: "rgb(var(--ink))",
        muted: "rgb(var(--muted))",
        line: "rgb(var(--line))",
        wash: "rgb(var(--wash))",
        brand: "rgb(var(--brand))",
        brand2: "rgb(var(--brand2))",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(2, 6, 23, 0.08)",
        lift: "0 18px 50px rgba(2, 6, 23, 0.14)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.5rem",
      },
      letterSpacing: {
        tightish: "-0.02em",
      },
    },
  },
  plugins: [],
};

