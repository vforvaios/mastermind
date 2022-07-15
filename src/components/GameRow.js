import { selectCell } from 'models/actions';
import { currentRowPlaying } from 'models/selectors';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const GameRow = ({ row, index }) => {
  const currRow = useSelector(currentRowPlaying);
  const dispatch = useDispatch();

  return (
    <>
      <div className="row-container">
        {row?.map((currCellColor, index2) => (
          <span
            className={`curr-cell-color ${
              currRow === index ? 'clickableCell' : ''
            }`}
            key={`row-${index2}-${currCellColor?.id}`}
            style={{ backgroundColor: currCellColor?.name }}
            {...(currRow === index && {
              onClick: () => dispatch(selectCell(index2)),
            })}
          />
        ))}
        {currRow === index && (
          <button type="button" className="submitRowButton">
            Submit
          </button>
        )}
      </div>
    </>
  );
};

export default GameRow;
