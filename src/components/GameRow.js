import { selectCell, removeCell } from 'models/actions';
import { currentRowPlaying, submitButtonIsEnabled } from 'models/selectors';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const GameRow = ({ row, index }) => {
  const currRow = useSelector(currentRowPlaying);
  const isButtonEnabled = useSelector(submitButtonIsEnabled);
  const dispatch = useDispatch();

  return (
    <>
      <div className="row-container">
        {row?.map((currCellColor, index2) => (
          <strong
            className={`curr-cell-color ${
              currRow === index ? 'clickableCell' : ''
            }`}
            key={`row-${index2}-${currCellColor?.id}`}>
            {currCellColor?.id && (
              <span
                className="remove-color"
                onClick={() => dispatch(removeCell(index2))}>
                <i className="icon-cancel-circled" />
              </span>
            )}
            <span
              className="color-span"
              style={{ backgroundColor: currCellColor?.name }}
              {...(currRow === index && {
                onClick: () => dispatch(selectCell(index2)),
              })}
            />
          </strong>
        ))}
        {currRow === index && (
          <button
            type="button"
            className="submitRowButton"
            disabled={!isButtonEnabled}>
            Submit
          </button>
        )}
      </div>
    </>
  );
};

export default GameRow;
