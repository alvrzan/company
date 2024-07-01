// tailwind.config.js

const defaultTheme = require("tailwindcss/defaultTheme");
const forms = require("@tailwindcss/forms");
const typography = require("@tailwindcss/typography");
const tailwindcssTextshadow = require("tailwindcss-textshadow");

module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./vendor/laravel/jetstream/**/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.vue",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
                montserrat: ["Montserrat", "sans-serif"],
            },
            fontWeight: {
                thin: 100,
                extralight: 200,
                light: 300,
                normal: 400,
                md: 500,
                semibold: 600,
                bold: 700,
                extrabold: 800,
                black: 900,
            },
            colors: {
                primary_green: "#ADFF2C",
                gradient_first_dark_green: "#1D2F1A",
                gradient_first_light_green: "#4A710C",
            },
            textShadow: {
                default: "2px 2px 5px rgba(0, 0, 0, 0.5)",
                sm: "1px 1px 2px rgba(255, 255, 255, 0.3)",
                md: "1px 2px 20px rgba(255, 255, 255, 0.6)",
                lg: "4px 4px 6px rgba(255, 255, 255, 0.5)",
            },
        },
    },

    plugins: [
        forms,
        typography,
        tailwindcssTextshadow,
        require("@tailwindcss/aspect-ratio"),
    ],
};
