import { Component } from 'react';
import MiniPalette from './MiniPalette';
import background from './background.jpg';
import { v4 as uuid } from 'uuid';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/PaletteListStyles';
import { Link } from 'react-router-dom';

class PaletteList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { classes } = this.props;
    return (
      <div className={classes.PaletteList} style={{ backgroundImage: { background } }}>
        <h1>colorPiker</h1>
        <div className={classes.miniPalettes}>
          {this.props.palettes.map((e) => {
            return <MiniPalette key={uuid()} {...e} />;
          })}
        </div>
        <Link to="palette/new">Create new Palette</Link>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
