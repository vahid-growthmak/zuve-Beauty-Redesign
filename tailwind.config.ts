import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      colors: {
        ink: "#1A1A1A",
        bone: "#FAF7F2",
        cream: "#F5EFE6",
        rose: "#E8C4C4",
        gold: "#C9A87C",
        mute: "#8B8B8B",
        success: "#5A7A5A",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        display: ["3.75rem", { lineHeight: "1.05", letterSpacing: "-0.01em" }],
        "display-sm": ["2.75rem", { lineHeight: "1.08", letterSpacing: "-0.01em" }],
        h1: ["2.5rem", { lineHeight: "1.1", letterSpacing: "-0.005em" }],
        h2: ["1.875rem", { lineHeight: "1.2" }],
        h3: ["1.25rem", { lineHeight: "1.3" }],
        body: ["1rem", { lineHeight: "1.6" }],
        small: ["0.875rem", { lineHeight: "1.5" }],
        caption: ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.08em" }],
      },
      letterSpacing: {
        wider2: "0.08em",
        wordmark: "0.15em",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        underline: {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
      },
      animation: {
        "fade-up": "fadeUp 600ms cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in": "fadeIn 600ms cubic-bezier(0.22, 1, 0.36, 1) both",
        "slide-up": "slideUp 200ms cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;
