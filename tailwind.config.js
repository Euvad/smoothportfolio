module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    fontFamily: {
      primary: 'Roboto',
      secondary: 'Mulish',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1192px',
    },
    extend: {
      colors: {
        primary: '#FFFFFF',
        grey: '#484B4B',

        accent: '#EEF7F9',
      },
    },
  },
  plugins: [],
};
