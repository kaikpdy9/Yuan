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
        'card':'36rem',
        '136':'40rem',
        '160':'48rem',
        'review':'60vh',
        'submit':'40vh'
      },
      weight:{
        'note':'20rem'
      },
      fontSize:{
        'banner':'7.5rem',
        'small':'.50rem'
      },
      lineHeight:{
        'banner':'7.5rem'
      },
      textColor:{
        'dark': '#EFEFEF',
      },
    },
  },
  plugins: [],
}
