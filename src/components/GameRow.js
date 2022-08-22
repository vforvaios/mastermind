import { selectCell, removeCell, checkRow } from 'models/actions';
import { currentRowPlaying, submitButtonIsEnabled } from 'models/selectors';
import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const GameRow = ({ row, index }) => {
  const currRow = useSelector(currentRowPlaying);
  const isButtonEnabled = useSelector(submitButtonIsEnabled);
  const dispatch = useDispatch();

  return (
    <>
      <div
        className={`row-container ${currRow !== index ? 'disabled-row' : ''}`}>
        {row?.map((currCellColor, index2) => (
          <Fragment key={`row-${index2}-${currCellColor?.id}`}>
            <button
              className={`curr-cell-color ${
                currRow === index ? 'clickableCell' : ''
              }`}
              type="button"
              style={{ background: currCellColor?.name }}
              {...(currRow === index && {
                onClick: () => {
                  dispatch(selectCell(index2));
                },
              })}>
              {currCellColor?.id && currRow === index && (
                <span
                  className="remove-color"
                  onClick={() => dispatch(removeCell(index2))}>
                  <i className="icon-cancel-circled" />
                </span>
              )}
              <span className="color-span" />
            </button>
          </Fragment>
        ))}
        {currRow === index && (
          <i
            className={`submitRowButton icon-ok-circle ${
              !isButtonEnabled ? 'is-disabled' : ''
            }`}
            {...(isButtonEnabled && {
              onClick: () => dispatch(checkRow(index)),
            })}
          />
        )}
        {currRow > index && <i className="submitRowButton smallCase">Done</i>}
      </div>
    </>
  );
};

export default GameRow;
