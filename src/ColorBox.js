import { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/ColorBoxStyles';

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false,
      color: this.props.color,
    };
    this.toggleAnimation = this.toggleAnimation.bind(this);
    this.handleMoreLink = this.handleMoreLink.bind(this);
  }

  toggleAnimation() {
    setTimeout(() => {
      this.setState({ copied: false });
    }, 1500);
    this.setState({ copied: true });
  }

  handleMoreLink() {
    this.props.handleClick(this.props.color.replace('#', ''));
  }

  render() {
    let { classes } = this.props;

    return (
      <CopyToClipboard text={this.props.color}>
        <div className={classes.ColorBox} style={{ backgroundColor: this.props.color }}>
          <div
            className={this.state.copied ? `${classes.copyOverlay} ${classes.active}` : classes.copyOverlay}
            style={{ backgroundColor: this.props.color }}
          ></div>
          <div className={this.state.copied ? `${classes.copyOverlayText} ${classes.show}` : classes.copyOverlayText}>
            <h1>Copied</h1>
            <h2>{this.props.color}</h2>
          </div>
          <button onClick={this.toggleAnimation}>Copy</button>
          <p>{this.props.name}</p>
          {this.props.moreLink ? (
            <Link
              to={`/palette/${this.props.paletteId}/${this.props.name.replace(/[0-9]/g, '').replace('_', '')}`}
              style={{ zIndex: 2, color: 'black', textDecoration: 'none' }}
            >
              <p className={classes.moreLink}>More</p>
            </Link>
          ) : null}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);
