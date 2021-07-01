import { getLuminance } from '../colorHelpers';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  ColorBox: {
    height: 'width',
    width: '20%',
    margin: '0 auto',
    textAlign: 'center',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    position: 'relative',
    textTransform: 'uppercase',
    '& button': {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'rgba(255, 255, 255, 0.445)',
      border: 'none',
      cursor: 'pointer',
      textTransform: 'uppercase',
      opacity: '0',
      padding: '20px',
      '&:hover': {
        opacity: '1',
        transition: 'all 0.3s linear',
      },
    },
    '& p': {
      padding: '10px',
      margin: '0',
      letterSpacing: '1px',
      color: (props) => (getLuminance(props.color) < 0.2 ? 'white' : 'black'),
    },
  },
  moreLink: {
    padding: '10px',
    backgroundColor: 'rgba(255, 255, 255, 0.445)',
    border: 'none',
    cursor: 'pointer',
    textTransform: 'uppercase',
    '&:hover': {
      opacity: '1',
      transition: 'all 0.3s linear',
    },
  },

  copyOverlay: {
    opacity: '0',
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  active: {
    opacity: '1',
    zIndex: '6',
    transform: 'scale(50)',
    transition: 'transform 0.8s',
  },
  copyOverlayText: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%) scale(0.1)',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    opacity: '0',
    zIndex: '-1',
    color: 'white',
    '& h1': {
      width: '100%',
      padding: '5px',
      fontSize: '4rem',
      textShadow: 'black 3px 3px',
      backgroundColor: 'rgba(255, 255, 255, 0.205)',
    },
  },

  show: {
    opacity: '1',
    zIndex: '15',
    transform: 'translate(-50%, -50%) scale(1)',
    transformOrigin: 'center center',
    transition: 'all 0.6s linear 0.2s',
  },

  '@media (max-width: 500px)': {
    ColorBox: {
      width: '100%',
      height: '100px',
    },
  },
};
