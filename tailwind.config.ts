import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#8A9A5B", // Sage Green
          foreground: "hsl(var(--primary-foreground))",
          50: "#F5F7F0",
          100: "#E8EDE0",
          200: "#D5DDC5",
          300: "#C2CDA9",
          400: "#A8B58C",
          500: "#8A9A5B", // Main color
          600: "#7A8A4F",
          700: "#6A7943",
          800: "#5A6837",
          900: "#4A572B",
        },
        secondary: {
          DEFAULT: "#D8BFD8", // Thistle (Malva-like)
          foreground: "hsl(var(--secondary-foreground))",
          50: "#FCF9FC",
          100: "#F7F0F7",
          200: "#EFE0EF",
          300: "#E7D0E7",
          400: "#DFC0DF",
          500: "#D8BFD8", // Main color
          600: "#C8A8C8",
          700: "#B891B8",
          800: "#A87AA8",
          900: "#986398",
        },
        accent: {
          DEFAULT: "#6B7B5C", // Darker sage for contrast
          foreground: "hsl(var(--accent-foreground))",
          50: "#F5F6F4",
          100: "#E8EAE5",
          200: "#D4D7CC",
          300: "#BFC4B2",
          400: "#AAB198",
          500: "#6B7B5C", // Main color
          600: "#5A6A4B",
          700: "#49593A",
          800: "#384829",
          900: "#273718",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config 