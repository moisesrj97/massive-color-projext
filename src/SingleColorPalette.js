import { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ColorBox from './ColorBox';
import { withStyles } from '@material-ui/core/styles';
import { v4 as uuid } from 'uuid';
import styles from './styles/SingleColorPaletteStyles';

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorFormat: 'hex',
    };
    this.handleSelect = this.handleSelect.bind(this);
    this.goBack = this.goBack.bind(this);
    this.generatePalette = this.generatePalette.bind(this);
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

  goBack() {
    this.props.history.goBack();
  }

  generatePalette() {
    console.log(this.props.color);
    let colorsArr = Object.entries(this.props.palette.colors);
    // eslint-disable-next-line array-callback-return
    let colorsScanned = colorsArr.map((e) => {
      for (let color of e[1]) {
        console.log(color.name.replace(/[0-9]/g, '').trim());
        if (color.name.replace(/[0-9]/g, '').trim() === this.props.color.trim()) {
          return color;
        }
      }
    });
    return colorsScanned;
  }

  render() {
    let { classes } = this.props;
    let colors = this.generatePalette();
    colors.pop();
    console.log(colors);

    return (
      <div className={classes.singleColorPalette}>
        <Navbar lightness={false} onSelect={this.handleSelect} colorFormat={this.state.colorFormat} />
        <div className={classes.boxGrid}>
          {colors.map((e) => {
            return (
              <ColorBox
                key={uuid()}
                color={this.state.colorFormat === 'hex' ? e.hex : this.state.colorFormat === 'rgb' ? e.rgb : e.rgba}
                name={e.name}
                handleClick={this.handleBoxClick}
                moreLink={false}
              />
            );
          })}
          <div className={classes.backBox} onClick={this.goBack}>
            Go back
          </div>
        </div>
        <Footer palette={this.props.palette} />
      </div>
    );
  }
}

export default withStyles(styles)(SingleColorPalette);
