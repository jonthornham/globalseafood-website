const defaultTheme = require("tailwindcss/defaultTheme");

const config = {
  mode: "jit",
  purge: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        gse: {
          pacificBlue: "#002F3B",
          pacificBlueAccent: "#1D454F",
          pacificBlueMessage: "#009DC4",
          pacificGrey: "#909094",
          pacificGreen: "#34C759",
          pacificRed: "#FF3B30",
        },
      },
    },
  },
  plugins: [],
};

module.exports = config;
