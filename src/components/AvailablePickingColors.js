import { pickColorAction } from 'models/actions';
import { selectedColor } from 'models/selectors';
import { pickingColors } from 'models/selectors';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const AvailablePickingColors = () => {
  const dispatch = useDispatch();
  const colors = useSelector(pickingColors);
  const currSelectedColor = useSelector(selectedColor);

  return (
    <div className="colors-container">
      {colors?.map((color) => (
        <div
          key={color?.id}
          className={`picking-color ${
            color?.id === currSelectedColor?.id ? 'selected' : ''
          }`}
          style={{ backgroundColor: color?.name }}
          onClick={() => dispatch(pickColorAction(color))}
        />
      ))}
    </div>
  );
};

export default AvailablePickingColors;
