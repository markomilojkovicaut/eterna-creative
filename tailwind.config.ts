import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          base: "#000000",
          card: "#0a0a0a",
          surface: "#ffffff",
          muted: "#F7F8F8",
        },
        brand: {
          "purple-dark": "#1F1145",
          purple: "#8585ff",
          pink: "#cb80ff",
          "purple-light": "#b8b8ff",
          "pink-light": "#dcb8ff",
          danger: "#e85353",
        },
        text: {
          heading: "#ffffff",
          sub: "#d1d1eb",
          body: "#8585a0",
          muted: "#555570",
          ink: "#000000",
          "ink-sub": "#3d3d4d",
          "ink-muted": "#6b6b80",
        },
        border: {
          DEFAULT: "rgba(133, 133, 255, 0.15)",
          default: "rgba(133, 133, 255, 0.15)",
          strong: "rgba(133, 133, 255, 0.35)",
          /** Subtle purple-light border for dark sections (Eterna system, timeline rails). */
          dark: "rgba(184, 184, 255, 0.14)",
          light: "rgba(0, 0, 0, 0.08)",
          muted: "#DEE1E2",
        },
      },
      fontFamily: {
        heading: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        body: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["4rem", { lineHeight: "1.05", fontWeight: "800" }],
        "display-lg": ["3rem", { lineHeight: "1.1", fontWeight: "700" }],
        "display-md": ["2.25rem", { lineHeight: "1.15", fontWeight: "700" }],
        "heading-lg": ["1.5rem", { lineHeight: "1.3", fontWeight: "600" }],
        "heading-md": ["1.25rem", { lineHeight: "1.4", fontWeight: "600" }],
        "heading-sm": ["1.125rem", { lineHeight: "1.4", fontWeight: "600" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7", fontWeight: "400" }],
        "body-md": ["1rem", { lineHeight: "1.7", fontWeight: "400" }],
        "body-sm": ["0.875rem", { lineHeight: "1.6", fontWeight: "400" }],
        label: [
          "0.75rem",
          { lineHeight: "1.4", fontWeight: "600", letterSpacing: "0.08em" },
        ],
        editorial: [
          "2.5rem",
          { lineHeight: "1.35", fontWeight: "400", letterSpacing: "-0.02em" },
        ],
        "stat-value": [
          "2.5rem",
          { lineHeight: "1", fontWeight: "800" },
        ],
      },
      spacing: {
        section: "120px",
        "section-sm": "4rem",
      },
      maxWidth: {
        container: "1280px",
        content: "1216px",
      },
      borderRadius: {
        sharp: "0px",
        soft: "8px",
        full: "9999px",
      },
      boxShadow: {
        card: "0 1px 0 rgba(133, 133, 255, 0.1), 0 0 0 1px rgba(133, 133, 255, 0.08)",
        "card-hover":
          "0 0 0 1px rgba(133, 133, 255, 0.3), 0 4px 24px rgba(133, 133, 255, 0.15)",
        "glow-purple": "0 0 40px rgba(133, 133, 255, 0.2)",
        "glow-pink": "0 0 40px rgba(203, 128, 255, 0.2)",
      },
      keyframes: {
        "approach-border-fill": {
          from: { transform: "scaleY(0)" },
          to: { transform: "scaleY(1)" },
        },
        "partner-marquee": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "approach-border-fill":
          "approach-border-fill 9s linear forwards",
        "partner-marquee":
          "partner-marquee 90s linear infinite",
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(90deg, #b8b8ff 0%, #8585ff 45%, #cb80ff 100%)",
        "partners-panel":
          "linear-gradient(135deg, #0a0a12 0%, #1F1145 55%, #12082a 100%)",
        "engine-hover":
          "linear-gradient(135deg, #1F1145 0%, #0a0a0a 55%, #000000 100%)",
        scanlines:
          "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(133, 133, 255, 0.03) 2px, rgba(133, 133, 255, 0.03) 4px)",
      },
    },
  },
  plugins: [],
};

export default config;
