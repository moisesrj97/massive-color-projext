import { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import styles from './styles/MiniPaletteStyles';
import Delete from '@material-ui/icons/Delete';

class MiniPalette extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.main}>
        <div className={classes.deleteButton}>
          <Delete onClick={() => this.props.handleDelete(this.props.id)} />
        </div>
        <div className={classes.content}>
          <Link to={'/palette/' + this.props.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div className={classes.grid}>
              {this.props.colors.map((e) => {
                return <div key={uuid()} className={classes.miniBox} style={{ backgroundColor: e.color }}></div>;
              })}
            </div>
            <div className={classes.info}>
              <span style={{ padding: 0, paddingLeft: '5px' }}>{this.props.paletteName}</span>
              <span style={{ padding: 0, paddingRight: '5px' }}>{this.props.emoji}</span>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(MiniPalette);
