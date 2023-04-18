module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}', './public/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            sans: ['Montserrat', 'Montserrat']
        },
        extend: {}
    },
    plugins: [require('tailwind-scrollbar')]
}
