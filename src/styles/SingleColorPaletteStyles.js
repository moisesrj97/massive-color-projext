// eslint-disable-next-line import/no-anonymous-default-export
export default {
  boxGrid: {
    minHeight: '90vh',
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'hidden',
  },
  singleColorPalette: {
    minHeight: '100vh',
  },
  backBox: {
    width: '20%',
    heigth: 'width',
    backgroundColor: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    cursor: 'pointer',
    fontSize: '2rem',
    fontWeigth: 'bold',
  },
  '@media (max-width: 500px)': {
    backBox: {
      width: '100%',
    },
  },
};
