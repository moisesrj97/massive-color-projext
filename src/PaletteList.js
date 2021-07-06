import { Component } from 'react';
import MiniPalette from './MiniPalette';
import background from './background.jpg';
import { v4 as uuid } from 'uuid';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/PaletteListStyles';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

class PaletteList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  deletePalette = (palleteId) => {
    this.props.deletePalette(palleteId);
  };

  render() {
    let { classes } = this.props;
    return (
      <div className={classes.PaletteList} style={{ backgroundImage: { background } }}>
        <h1>colorPiker</h1>
        <div className={classes.miniPalettes}>
          {this.props.palettes.map((e) => {
            return <MiniPalette key={uuid()} {...e} handleDelete={this.deletePalette} />;
          })}
        </div>

        <Link to="palette/new">
          <Button variant="contained" color="primary" style={{ margin: '15px' }}>
            Create new Palette
          </Button>
        </Link>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
