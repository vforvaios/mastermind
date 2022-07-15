import { selectCell, setSelectedCell } from 'models/actions';
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

        return setSelectedCell(newRows);
      },
    ),
  );

const gameEpics = combineEpics(selectCellEpic);

export { gameEpics };
