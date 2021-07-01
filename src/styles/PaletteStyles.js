// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Palette: {
    height: '100vh',
  },
  colors: {
    display: 'flex',
    height: '90%',
    flexWrap: 'wrap',
    overflow: 'hidden',
  },

  '@media (max-width: 500px)': {
    Palette: {
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
    },

    colors: {
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
    },

    ColorBox: {
      width: '100%',
      height: '100px',
    },
  },
};
