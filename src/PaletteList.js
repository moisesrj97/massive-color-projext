import { Component } from 'react';
import './PaletteList.css';
import MiniPalette from './MiniPalette';
import background from './background.jpg';
import { v4 as uuid } from 'uuid';

class PaletteList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="PaletteList" style={{ backgroundImage: { background } }}>
        <h1>colorPiker</h1>
        <div className="miniPalettes">
          {this.props.palettes.map((e) => {
            return <MiniPalette key={uuid()} {...e} />;
          })}
        </div>
      </div>
    );
  }
}

export default PaletteList;
