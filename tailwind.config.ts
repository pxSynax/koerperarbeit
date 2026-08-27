import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                brown: {
                    50: '#faf8f6',
                    100: '#f5f1ed',
                    200: '#ebe3db',
                    300: '#ddc9b5',
                    400: '#c9a887',
                    500: '#b8845f',
                    600: '#a86d47',
                    700: '#8d563b',
                    800: '#724734',
                    900: '#5d3b2d',
                    950: '#3a231c',
                },
            },
        },
    },
    plugins: [],
};

export default config;
