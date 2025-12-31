// tailwind.config.js
export default {
  darkMode: "class", // required for .dark toggling
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // ← ensures ALL components are scanned
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        surface: "var(--surface)",
        border: "var(--border)",

        foreground: "var(--foreground)",
        muted: "var(--muted)",

        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-fg)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-fg)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-fg)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-fg)",
        },
      },
    },
  },
  plugins: [],
};
