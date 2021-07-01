import { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/FooterStyles';

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
