/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-cairo)", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          50: "#f0fdf9",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
        },
        ink: {
          950: "#04080f",
          900: "#0c1220",
          800: "#121a2e",
        },
      },
      backgroundImage: {
        "hero-mesh":
          "radial-gradient(ellipse 120% 80% at 80% -20%, rgba(20, 184, 166, 0.22), transparent 55%), radial-gradient(ellipse 90% 60% at 0% 100%, rgba(59, 130, 246, 0.12), transparent 50%), radial-gradient(ellipse 70% 50% at 50% 50%, rgba(212, 165, 116, 0.06), transparent 60%)",
        "hero-mesh-light":
          "radial-gradient(ellipse 120% 80% at 80% -20%, rgba(20, 184, 166, 0.14), transparent 55%), radial-gradient(ellipse 90% 60% at 0% 100%, rgba(59, 130, 246, 0.08), transparent 50%)",
        "card-shine":
          "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 45%, transparent 100%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.75s ease-out forwards",
        float: "float 6s ease-in-out infinite",
      },
      animationDelay: {
        100: "100ms",
        200: "200ms",
        300: "300ms",
        400: "400ms",
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
