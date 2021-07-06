import { ChromePicker } from 'react-color';
import { Component } from 'react';
import { Button, TextField } from '@material-ui/core';
import { getLuminance } from './colorHelpers';

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stateColor: '',
      colorName: '',
    };
  }

  handleInputChange = (e) => {
    this.setState({ colorName: e.target.value });
  };

  handleColorChange = (color) => {
    this.setState({ stateColor: color });
  };

  handleClick = () => {
    if (this.state.stateColor !== '') {
      this.props.handleSubmit(this.state);
    } else {
      alert('Select a color');
    }
  };

  handleClear = () => {
    this.props.clearPalette();
  };

  render() {
    let bgColor, textColor;

    if (this.state.stateColor === '') {
      bgColor = '#3f51b5';
      textColor = 'white';
    } else {
      bgColor = this.state.stateColor.hex;
      textColor = getLuminance(bgColor) < 0.3 ? 'white' : 'black';
    }

    return (
      <div>
        <Button variant="contained" style={{ margin: '15px' }} color="secondary" onClick={this.handleClear}>
          Clear palette
        </Button>
        <ChromePicker color={this.state.stateColor !== '' ? this.state.stateColor.hsl : 'purple'} onChange={this.handleColorChange} />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" style={{ margin: '15px' }} onChange={this.handleInputChange} />
        {this.props.fullPalette ? (
          <Button variant="contained" color="primary" style={{ backgroundColor: 'gray', color: 'white' }} disabled>
            Full Palette
          </Button>
        ) : (
          <Button variant="contained" color="primary" style={{ backgroundColor: bgColor, color: textColor }} onClick={this.handleClick}>
            Add Color
          </Button>
        )}
      </div>
    );
  }
}

export default ColorPicker;
