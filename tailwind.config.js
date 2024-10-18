/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        colors: {
          fundo: "var(--fundo-forte)",
        },
      },
      animation: {
        "fade-in": "fade-in .3s ease-out both",
      },
      keyframes: {
        "fade-in": {
          from: { transform: "translateX(-50px)", opacity: 0 },
        },
        to: { transform: "translateX(0px)", opacity: 1 },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
};
