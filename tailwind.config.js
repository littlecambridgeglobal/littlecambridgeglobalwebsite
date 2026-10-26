/** @type {import('tailwindcss').Config} */ 
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
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
      fontFamily: {
        fedorikanew: ['fedorikaregular'],
        fedorikamedium: ['Fedorikamedium'],
        outfit: ['var(--font-outfit)', 'Outfit', 'sans-serif'],
        jakarta: ['var(--font-jakarta)', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 20px 40px -15px rgba(0, 0, 0, 0.05)',
        'soft-sm': '0 10px 25px -5px rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 25px 50px -12px rgba(45, 55, 72, 0.08)',
        'soft-xl': '0 35px 60px -15px rgba(45, 55, 72, 0.10)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
      },
      colors: {
        pastel: {
          sage: {
            50: '#F4F7F5',
            100: '#E8F0EC',
            200: '#D1E0D7',
            300: '#B0C8BA',
            500: '#678E77',
            700: '#3D5E4C',
            900: '#263B30',
          },
          lavender: {
            50: '#F7F6FC',
            100: '#EDEBF7',
            200: '#DDD8F0',
            300: '#C2B9E3',
            500: '#8A7BBF',
            700: '#5A4B8F',
            900: '#3B3060',
          },
          peach: {
            50: '#FFF7F4',
            100: '#FDF2EE',
            200: '#FCE2D8',
            300: '#F8C2B0',
            500: '#E58368',
            700: '#B85036',
            900: '#752E1D',
          },
          cream: {
            50: '#FDFDFB',
            100: '#FAF8F5',
            200: '#F3EFE7',
            300: '#E8E2D5',
            400: '#DCD4C3',
            500: '#C7BCA6',
          },
          sky: {
            50: '#F2F8FB',
            100: '#E4F1F7',
            200: '#C9E3EF',
            300: '#9ECDE3',
            500: '#529EBE',
            700: '#316982',
          },
          mint: {
            50: '#F0FAF6',
            100: '#DDF4EC',
            200: '#BAE7D7',
            500: '#4FB28D',
          },
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
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
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        marquee: "marquee 25s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}