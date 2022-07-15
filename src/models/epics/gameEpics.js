import { selectCell, setRow, removeCell } from 'models/actions';
import { combineEpics, ofType } from 'redux-observable';
import { map, withLatestFrom } from 'rxjs/operators';

const selectCellEpic = (action$, state$) =>
  action$.pipe(
    ofType(selectCell.type),
    withLatestFrom(state$),
    map(
      ([
        { payload },
        {
          gameReducer: { rows, currentRowPlaying, selectedColor },
        },
      ]) => {
        const newRows = {
          ...rows,
          [currentRowPlaying]: rows?.[currentRowPlaying]?.map((cell, index) =>
            index !== payload ? { ...cell } : { ...selectedColor },
          ),
        };

        return setRow(newRows);
      },
    ),
  );

const removeCellEpic = (action$, state$) =>
  action$.pipe(
    ofType(removeCell.type),
    withLatestFrom(state$),
    map(
      ([
        { payload },
        {
          gameReducer: { rows, currentRowPlaying, selectedColor },
        },
      ]) => {
        const newRows = {
          ...rows,
          [currentRowPlaying]: rows?.[currentRowPlaying]?.map((cell, index) =>
            index !== payload ? { ...cell } : {},
          ),
        };

        return setRow(newRows);
      },
    ),
  );

const gameEpics = combineEpics(selectCellEpic, removeCellEpic);

export { gameEpics };
