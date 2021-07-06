import { Component } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';

import { getLuminance } from './colorHelpers';

const DraggableColorBox = SortableElement((props) => {
  let textColor = getLuminance(props.color.hex) < 0.3 ? 'white' : 'black';
  let { r, g, b, a } = props.color.rgb;

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
      <p style={{ margin: 0 }}>{props.name}</p>
      <DeleteIcon style={{ color: 'white', cursor: 'pointer' }} onClick={() => props.handleDelete(props.name)} />
    </div>
  );
});

export default DraggableColorBox;
