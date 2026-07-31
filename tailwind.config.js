/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        carbon: {
          950: "#0B0B0D",
          900: "#131316",
          800: "#1D1D21",
          700: "#2A2A2F",
        },
        cream: {
          50: "#FAF8F4",
          100: "#F0ECE4",
          200: "#DDD6C9",
          300: "#B8AFA0",
        },
        bronze: {
          400: "#D4A857",
          500: "#C1943D",
          600: "#A57A2E",
        },
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "radial-glow": "radial-gradient(circle at 30% 30%, var(--tw-gradient-stops))",
      },
      keyframes: {
        "glow-pulse": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "0.9" },
        },
      },
      animation: {
        "glow-pulse": "glow-pulse 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
