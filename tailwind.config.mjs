/** @type {import('tailwindcss').Config} */

const tailwindConfig = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "400px",
      md: "768px",
      lg: "1200px",
    },

    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },

    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },

      backgroundColor: {
        "-page": "#FFFFFF",
        "-header": "#FFFFFF",
        "-heading": "#E6EEFF",
        "-button-light": "#0055FF",
        "-footer-card": "#F1F5FF",
        "-button-dark": "#0049DC",
        "-footer": "#051433",
      },

      colors: {
        "-heading-dark-blue": "#00194C",
        "-heading-dark-gray": "#2F2F2F",
        "-heading-light-blue": "#0055FF",
        "-paragraph": "#334770",
        "-light-blue": "#0055FF",
        "-dark-gray": "#2F2F2F",
        "-light-gray": "#363636",
      },

      borderColor: {
        "-dark-blue": "#00194C",
        "-light-gray": "#D7D7D7",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".custom-container": {
          maxWidth: "1236px",
          marginLeft: "auto",
          marginRight: "auto",
        },
      });
    },
  ],
};

module.exports = tailwindConfig;
