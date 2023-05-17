/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Barlow", ...defaultTheme.fontFamily.sans],
        serif: ["Vollkorn", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        jade: '#38a66b',
        inkblue: '#012537',
        royalblue: '#2a67b8',
        burgundy: '#a53258',
        canaryyellow: '#ffce34',
        bitcoin: '#ff9900',
      },
    },
  }
};
