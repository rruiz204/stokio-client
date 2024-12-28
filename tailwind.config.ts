/** @type {import('tailwindcss').Config} */
export const content: string[] = ["./src/**/*.{html,ts}"];

export const theme = {
  extend: {
    colors: {
      dark: {
        100: "#1F242A"
      },
      light: {
        100: "#D9D9DB"
      },
      primary: {
        100: "D81C52",
        200: "D85B7F",
        300: "D89AAD",
      },
    },
  },
};

export const plugins = [];

