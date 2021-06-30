import { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

const styles = {
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
};

class MiniPalette extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Link to={'/palette/' + this.props.id}>
        <div className={classes.main}>
          <div className={classes.grid}>
            {this.props.colors.map((e) => {
              return <div key={uuid()} className={classes.miniBox} style={{ backgroundColor: e.color }}></div>;
            })}
          </div>
          <div className={classes.info}>
            <span>{this.props.paletteName}</span>
            <span>{this.props.emoji}</span>
          </div>
        </div>
      </Link>
    );
  }
}

export default withStyles(styles)(MiniPalette);
