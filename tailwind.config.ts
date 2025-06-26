import type { Config } from "tailwindcss";

const flowbite = require("flowbite-react/tailwind");

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    borderRadius: {
      primary: "20px",
      lg: "20px",
      md: "18px",
      sm: "16px",
    },
    extend: {
      boxShadow: {
        "search-drop-down": "0 30px 80px rgba(33, 38, 49, 0.15)",
        "mobile-nav": "0 10px 50px rgba(1, 1, 2, 0.09);",
        "mobile-nav-button": "0px 7px 15px #0070FF3B;",
      },
      spacing: {
        container: "1300px",
      },
      colors: {
        text: { primary: "#141d26", secondary: "#757575" },
        background: {
          DEFAULT: "#F2F6FB",
          dark: "#1F2937",
        },
        foreground: {
          DEFAULT: "#191C1D",
          dark: "#FAFAFA",
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: "#191C1D",
          dark: "#1F2937",
          darkForeground: "#FAFAFA",
        },
        popover: {
          DEFAULT: "#ffffff",
          foreground: "#191C1D",
          dark: { DEFAULT: "#1F2937", foreground: "#FAFAFA" },
        },
        "gray-hover": "#6d90b9",
        "primary-700": "#2786ff",
        "primary-100": "#e8f2ff",
        primary: {
          DEFAULT: "#0070FF",
          foreground: "#FAFAFA",
          dark: {
            DEFAULT: "#FAFAFA",
            foreground: "#1B1F23",
          },
        },
        secondary: {
          DEFAULT: "#F2F6FB",
          foreground: "#1B1F23",
          dark: {
            DEFAULT: "#252A30",
            foreground: "#F2F6FB",
          },
        },
        muted: {
          DEFAULT: "#E3E5E8",
          foreground: "#6B7280",
          dark: { DEFAULT: "#252A30", foreground: "#A1A1AA" },
        },
        accent: {
          DEFAULT: "#E3E5E8",
          foreground: "#1B1F23",
          dark: {
            DEFAULT: "#252A30",
            foreground: "#FAFAFA",
          },
        },
        destructive: {
          DEFAULT: "#D32F2F",
          foreground: "#FAFAFA",
          dark: {
            DEFAULT: "#8B0000",
            foreground: "#FAFAFA",
          },
        },
        border: {
          DEFAULT: "#D1D5DB",
          dark: "#252A30",
        },
        input: {
          DEFAULT: "#D1D5DB",
          dark: "#252A30",
        },
        ring: {
          DEFAULT: "#191C1D",
          dark: "#A1A1AA",
        },
        chart: {
          1: { DEFAULT: "#E44D26", dark: "#3366FF" },
          2: { DEFAULT: "#24A19C", dark: "#33CC99" },
          3: { DEFAULT: "#174D68", dark: "#FF9900" },
          4: { DEFAULT: "#E8A317", dark: "#9933FF" },
          5: { DEFAULT: "#FF8C00", dark: "#FF3366" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), flowbite.content()],
} satisfies Config;
