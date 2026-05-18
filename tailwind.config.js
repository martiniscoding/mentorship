/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#C0001D",
          redDark: "#8A0014",
          gold: "#FFD700",
          goldDark: "#C9A300",
          bg: "#0A0A0A",
          bg2: "#111111",
          card: "#161616",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "system-ui", "sans-serif"],
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(192,0,29,0.65)" },
          "50%": { boxShadow: "0 0 0 14px rgba(192,0,29,0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(30px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        pulseGlow: "pulseGlow 2s ease-out infinite",
        marquee: "marquee 35s linear infinite",
        fadeUp: "fadeUp 0.8s ease-out forwards",
        float: "float 4s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(ellipse at top left, rgba(192,0,29,0.35), transparent 55%), radial-gradient(ellipse at bottom right, rgba(192,0,29,0.25), transparent 60%)",
        "diagonal-red":
          "linear-gradient(135deg, #0A0A0A 0%, #1a0306 40%, #0A0A0A 100%)",
      },
    },
  },
  plugins: [],
}
