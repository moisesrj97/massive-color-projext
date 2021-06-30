import Navbar from './Navbar';
import Footer from './Footer';
import { Component } from 'react';
import ColorBox from './ColorBox';
import { v4 as uuid } from 'uuid';
import { withStyles } from '@material-ui/core/styles';

let styles = {
  Palette: {
    height: '100vh',
  },
  colors: {
    display: 'flex',
    height: '90%',
    flexWrap: 'wrap',
    overflow: 'hidden',
  },

  '@media (max-width: 500px)': {
    Palette: {
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
    },

    colors: {
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
    },

    ColorBox: {
      width: '100%',
      height: '100px',
    },
  },
};

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      darkness: 300,
      colorFormat: 'hex',
    };
    this.handleSlider = this.handleSlider.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleBoxClick = this.handleBoxClick.bind(this);
  }

  handleSlider(e) {
    this.setState({ darkness: e });
  }

  handleSelect(e) {
    console.log(e.target.value);
    switch (e.target.value) {
      case 'rgb':
        this.setState({ colorFormat: 'rgb' });
        break;
      case 'rgba':
        this.setState({ colorFormat: 'rgba' });
        break;
      default:
        this.setState({ colorFormat: 'hex' });
    }
  }

  handleBoxClick(id) {
    this.props.history.push(`/palette/${this.props.palette.id}/${id}`);
  }

  render() {
    let { classes } = this.props;

    return (
      <div className={classes.Palette}>
        <Navbar
          onChange={this.handleSlider}
          default={this.state.darkness}
          onSelect={this.handleSelect}
          colorFormat={this.state.colorFormat}
          lightness={true}
        />
        <div className={classes.colors}>
          {this.props.palette.colors[this.state.darkness].map((e) => {
            return (
              <ColorBox
                key={uuid()}
                color={this.state.colorFormat === 'hex' ? e.hex : this.state.colorFormat === 'rgb' ? e.rgb : e.rgba}
                name={e.name}
                handleClick={this.handleBoxClick}
                moreLink={true}
                paletteId={this.props.palette.id}
              />
            );
          })}
          {this.props.palette.colors[100].length < 20 ? <div style={{ width: '20%', height: 'width', backgroundColor: 'black' }}></div> : null}
        </div>
        <Footer palette={this.props.palette} />
      </div>
    );
  }
}

export default withStyles(styles)(Palette);
