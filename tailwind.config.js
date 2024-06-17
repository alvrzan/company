// tailwind.config.js

import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import tailwindcssTextshadow from "tailwindcss-textshadow";

export default {
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
            },
            colors: {
                primary_green: "#ADFF2C",
                gradient_first_dark_green: "#1D2F1A",
                gradient_first_light_green: "#4A710C",
            },
            textShadow: {
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
    ],
};
