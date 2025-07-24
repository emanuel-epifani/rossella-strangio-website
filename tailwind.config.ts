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
          DEFAULT: "#4682B4", // Steel Blue
          foreground: "hsl(var(--primary-foreground))",
          50: "#f0f4f8",
          100: "#d9e2ec",
          200: "#bcccdc",
          300: "#9fb3c8",
          400: "#829ab1",
          500: "#4682B4", // Main color
          600: "#3e73a1",
          700: "#35648e",
          800: "#2d547a",
          900: "#244566",
        },
        secondary: {
          DEFAULT: "#3CB371", // Medium Sea Green
          foreground: "hsl(var(--secondary-foreground))",
          50: "#f0f9f4",
          100: "#dcf4e6",
          200: "#bce9cf",
          300: "#87d1a5",
          400: "#4fb074",
          500: "#3CB371", // Main color
          600: "#2d9a5e",
          700: "#26824e",
          800: "#226b42",
          900: "#1f5937",
        },
        accent: {
          DEFAULT: "#e66657", // Coral
          foreground: "hsl(var(--accent-foreground))",
          50: "#fef4f3",
          100: "#fde8e6",
          200: "#fbd4d1",
          300: "#f7b3ad",
          400: "#f1847a",
          500: "#e66657", // Main color
          600: "#d4483a",
          700: "#b23b2f",
          800: "#94342b",
          900: "#7b312a",
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