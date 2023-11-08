/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sx: "330px",
      // => @media (min-width: 330px) { ... }

      xs: "360px",
      // => @media (min-width: 360px) { ... }

      ms: "480px",
      // => @media (min-width: 480px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    fontFamily: {
      montserrat: ["Montserrat Alternates", "sans-serif"],
    },
    extend: {
      colors: {
        "body-bg": "#F5F5F5",
        "txt-color": "#6D6D6D",
        "txt-white": "#FFF",
        "calc-res-color": "#2F2D2F",
        "calc-btn-color": "#D400FF",
        "calc-bg": "#FFF",
      },
    },
  },
  plugins: [],
};
