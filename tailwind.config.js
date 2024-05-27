/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {},
};
export const daisyui = {
  themes: ["dracula", "bumblebee"],
};
// eslint-disable-next-line no-undef
export const plugins = [require("daisyui")];
