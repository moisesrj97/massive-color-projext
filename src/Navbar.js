import { Component } from 'react';
import { Select, MenuItem } from '@material-ui/core';
import { Link } from 'react-router-dom';

import Slider from 'rc-slider';

import 'rc-slider/assets/index.css';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <Link className="logo" to="/">
          colorPiker
        </Link>
        <div className="slider">
          {this.props.lightness ? (
            <div className="slider-object">
              <p>Lightness: {this.props.default}</p>
              <Slider defaultValue={this.props.default} min={100} max={900} onChange={this.props.onChange} step={100} />
            </div>
          ) : null}
        </div>
        <div className="select">
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

export default Navbar;
