/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {},
};

// eslint-disable-next-line no-undef
export const plugins = [require("@tailwindcss/typography"), require("daisyui")];

export const daisyui = {
  themes: ["light", "dark"],
};
