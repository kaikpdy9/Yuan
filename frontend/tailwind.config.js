module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'dark-one': '#020202',
        'dark-two': '#3F3F41',
        'dark-three': '#949699',
        'dark-four': '#BCBEC2',
        'dark-five': '#EFEFEF',
      },
      height:{
        'banner':'26rem',
        '136':'40rem',
        '160':'48rem',
      },
      fontSize:{
        'banner':'8rem'
      },
      lineHeight:{
        'banner':'8rem'
      },
      textColor:{
        'dark': '#EFEFEF',
      },
    },
  },
  plugins: [],
}
