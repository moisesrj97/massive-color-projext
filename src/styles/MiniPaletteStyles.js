// eslint-disable-next-line import/no-anonymous-default-export
export default {
  main: {
    borderRadius: '15px',
    width: '250px',
    height: '175px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    boxShadow: '3px 3px 5px gray',
    margin: '15px',
    position: 'relative',
    '&:hover $deleteButton': {
      opacity: 1,
      transition: 'all 0.3s',
    },
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
  },
  grid: {
    width: '225px',
    height: '125px',
    display: 'flex',
    marginTop: '10px',
    flexWrap: 'wrap',
  },
  miniBox: {
    width: '20%',
    height: '25%',
  },
  info: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingBottom: '10px',
    '& span': {
      padding: '0px 15px',
      textDecoration: 'underline white',
      color: 'black',
      fontWeight: 'bold',
    },
  },
  deleteButton: {
    position: 'absolute',
    right: 0,
    padding: '3px',
    borderRadius: '0 15px 0 0',
    backgroundColor: 'red',
    opacity: 0,
  },
};
