// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Navbar: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '5vh',
    width: '100vw',
  },

  logo: {
    color: 'black',
    textDecoration: 'none',
    fontSize: '1.2',
    fontWeight: 'bold',
    letterSpacing: '1px',
    width: '20%',
  },

  slider: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '50%',
    '& p': {
      textAlign: 'end',
      paddingRight: '10px',
      width: '40%',
    },
  },

  sliderObject: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },

  select: {
    width: '20%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  rcSliderRail: {
    backgroundColor: 'transparent',
  },

  rcSliderTrack: {
    backgroundColor: 'gray !important',
  },

  rcSliderHandle: {
    backgroundColor: 'black !important',
    border: '1px solid black !important',
    outline: 'none',
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: 'black !important',
      border: '1px solid black !important',
      outline: 'none',
      boxShadow: 'none',
    },
    '&:active': {
      backgroundColor: 'black !important',
      border: '1px solid black !important',
      outline: 'none',
      boxShadow: 'none',
    },
    '&:focus': {
      backgroundColor: 'black !important',
      border: '1px solid black !important',
      outline: 'none',
      boxShadow: 'none',
    },
  },
  '@media (max-width: 500px)': {
    Navbar: {
      height: 'auto',
      flexDirection: 'column',
      padding: '5px 0',
      '& .logo': {
        textAlign: 'center',
      },
    },
    slider: {
      height: 'auto',
      flexDirection: 'column',
      padding: '5px 0',
      width: '100%',
    },

    sliderObject: {
      width: '90%',
      '& p': {
        fontSize: '0.7rem',
        fontWeight: 'bold',
      },
    },
  },
};
