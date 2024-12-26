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
        "-header": "#E8EFF9",
        "-footer": "#53418B",
        "-button": "#53418B",
      },

      colors: {
        "-light-purple": "#53418B",
        "-dark-purple": "#54428E",
        "-blue": "#2892D7",
        "-orange": "#FE8100",
        "-dark": "#2F2F2F",
        "-light-white": "#DEDEDE",
        "-green": "#7FBB86",
        "-yellow": "#FFC348",
        "-silver-50": "#F0F8FF80",
        "-light-dark": "#747474",
      },

      borderColor: {
        "-dark": "#2F2F2F",
        "-light": "#D7D7D7",
        "-ring": "#DDDDDD",
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
