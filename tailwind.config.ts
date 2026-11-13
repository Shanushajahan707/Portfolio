/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      animation: {
        typing: "typing 4s steps(19) infinite alternate-reverse",
        blink: "blink 1s infinite",
        "gradient-shift": "gradientShift 3s ease-in-out infinite",
        "fade-in-down": "fadeInDown 0.8s ease-out 0.2s both",
        "fade-in-right": "fadeInRight 1s ease-out 0.4s both",
      },
      keyframes: {
        typing: {
          from: { width: "0ch" },
          to: { width: "19ch" },
        },
        blink: {
          "0%, 50%": { borderColor: "#22D3EE" },
          "51%, 100%": { borderColor: "transparent" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        fadeInDown: {
          from: {
            opacity: "0",
            transform: "translateY(-30px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fadeInRight: {
          from: {
            opacity: "0",
            transform: "translateX(-30px)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
