import { SortableContainer } from 'react-sortable-hoc';
import DraggableColorBox from './DraggableColorBox';
import { v4 as uuid } from 'uuid';

const DraggableColorList = SortableContainer(({ colors, handleDelete }) => {
  const deleteSquare = (name) => {
    handleDelete(name);
  };
  return (
    <div style={{ height: '100%', width: '100%', display: 'flex', flexWrap: 'wrap' }}>
      {colors.map((e, i) => {
        return <DraggableColorBox color={e.stateColor} name={e.colorName} key={uuid()} handleDelete={deleteSquare} index={i} />;
      })}
    </div>
  );
});

export default DraggableColorList;
