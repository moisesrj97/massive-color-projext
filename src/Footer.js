import { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  footer: {
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: '0 25px',
    margin: '0',
  },
  footerContainer: {
    height: '5%',
  },
};

class Footer extends Component {
  render() {
    let { classes } = this.props;
    return (
      <div className={classes.footerContainer}>
        <footer className={classes.footer}>
          <span>{this.props.palette.emoji}</span>
          <p>{this.props.palette.paletteName}</p>
        </footer>
      </div>
    );
  }
}

export default withStyles(styles)(Footer);
