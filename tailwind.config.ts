/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,ts}"], // Ensure Tailwind scans all HTML & TypeScript files  
    theme: {
      extend: {
        colors: {
          primary: "#FF6363",
          secondary: {
            100: "#E2E2D5",
            200: "#888883",
          },
        },
      },
    },
    plugins: [],
  };
  