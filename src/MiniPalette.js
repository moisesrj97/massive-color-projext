import { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import styles from './styles/MiniPaletteStyles';

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
