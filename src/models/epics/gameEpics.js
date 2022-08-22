import {
  selectCell,
  setRow,
  removeCell,
  getCombinationUser,
  setCombinationUser,
} from 'models/actions';
import { combineEpics, ofType } from 'redux-observable';
import { map, withLatestFrom } from 'rxjs/operators';
import makeRequest from 'utils/makeRequest';

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

const getCombinationUserEpic = (action$) =>
  action$.pipe(
    ofType(getCombinationUser.type),
    makeRequest(({ payload }) => ({
      url: 'http://localhost:8000/api/initmastermind',
      method: 'GET',
    })),
    map((payload) => setCombinationUser(payload)),
  );

const gameEpics = combineEpics(
  selectCellEpic,
  removeCellEpic,
  getCombinationUserEpic,
);

export { gameEpics };
