import { Component } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

import { getLuminance } from './colorHelpers';

class DraggableColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleDelete = () => {
    this.props.handleDelete(this.props.name);
  };

  render() {
    let textColor = getLuminance(this.props.color.hex) < 0.3 ? 'white' : 'black';
    let { r, g, b, a } = this.props.color.rgb;

    return (
      <div
        className="DraggableColorBox"
        style={{
          width: '20%',
          height: '25%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          padding: '10px',
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
          '& p': {
            margin: 0,
          },
          backgroundColor: `rgba(${r},${g},${b},${a})`,
          color: textColor,
        }}
      >
        <p style={{ margin: 0 }}>{this.props.name}</p>
        <DeleteIcon style={{ color: 'white' }} onClick={this.handleDelete} />
      </div>
    );
  }
}

export default DraggableColorBox;
