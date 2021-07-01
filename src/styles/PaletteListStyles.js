import background from '../background.jpg';
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  PaletteList: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: '20px',
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'repeat-y',
    minHeight: '100vh',
    width: '100%',
    '& h1': {
      fontFamily: "'Dancing Script', cursive",
      fontSize: '4rem',
      color: 'white',
      textShadow: 'black 2px 2px 2px',
      backgroundColor: 'rgba(255, 255, 255, 0.308)',
      padding: '15px 20px',
      borderRadius: '10px',
      letterSpacing: '1.2px',
    },
  },

  miniPalettes: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '100%',
  },
};
