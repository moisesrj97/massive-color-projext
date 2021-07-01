import { Component } from 'react';
import { Select, MenuItem } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/NavbarStyles';

import Slider from 'rc-slider';

import 'rc-slider/assets/index.css';
import './fixSlider.css';

class Navbar extends Component {
  render() {
    let { classes } = this.props;
    return (
      <div className={classes.Navbar}>
        <Link className={classes.logo} to="/">
          colorPiker
        </Link>
        <div className={classes.slider}>
          {this.props.lightness ? (
            <div className={classes.sliderObject}>
              <p>Lightness: {this.props.default}</p>
              <Slider defaultValue={this.props.default} min={100} max={900} onChange={this.props.onChange} step={100} />
            </div>
          ) : null}
        </div>
        <div className={classes.select}>
          <Select value={this.props.colorFormat} onChange={this.props.onSelect}>
            <MenuItem value="hex">Hex</MenuItem>
            <MenuItem value="rgb">Rgb</MenuItem>
            <MenuItem value="rgba">Rgba</MenuItem>
          </Select>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Navbar);
