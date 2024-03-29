/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
const plugin = require('tailwindcss/plugin');
const rotateX = plugin(function ({ addUtilities }) {
    addUtilities({
        '.rotate-y-180': {
            transform: 'rotateY(180deg)',
        },
    });
});
// eslint-disable-next-line no-undef
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        container: {
            center: true,
            padding: '1rem',
        },
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1142px',
        },
        fontFamily: {
            mulish: ['Mulish', 'sans-serif'],
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            white: '#ffffff',
            black: '#001a23',
            primary: '#CC2936',
            secondary: '#c6ff00',
            gray: {
                DEFAULT: '#7780A1',
                dark: '#001a23',
            },
        },
        extend: {
            typography: ({ theme }) => ({
                DEFAULT: {
                    css: {
                        color: theme('colors.gray'),
                        fontSize: '1.125rem',
                    },
                },
            }),
        },
    },
    plugins: [require('@tailwindcss/line-clamp'), rotateX, require('@tailwindcss/typography')],
};
