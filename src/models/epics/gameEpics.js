import {
  selectCell,
  setRow,
  removeCell,
  getCombinationUser,
  setCombinationUser,
  removeCurrentUser,
  removeCombinationUser,
  checkRowResults,
  checkRow,
} from 'models/actions';
import { currentRowPlaying } from 'models/selectors';
import { combineEpics, ofType } from 'redux-observable';
import { map, withLatestFrom, concatMap } from 'rxjs/operators';
import makeRequest from 'utils/makeRequest';

const selectCellEpic = (action$, state$) =>
  action$.pipe(
    ofType(selectCell.type),
    // filter(selectCell.match),
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
      url: 'http://127.0.0.1:8000/api/initmastermind',
      method: 'GET',
    })),
    map((payload) => setCombinationUser(payload)),
  );

const removeCurrentUserEpic = (action$) =>
  action$.pipe(
    ofType(removeCurrentUser.type),
    makeRequest(({ payload }) => ({
      url: 'http://127.0.0.1:8000/api/removemasterminduser',
      method: 'POST',
      body: JSON.stringify(payload),
    })),
    map((payload) => removeCombinationUser(payload)),
  );

const checkRowResultsEpic = (action$, state$) =>
  action$.pipe(
    ofType(checkRowResults.type),
    withLatestFrom(state$),
    map(([{ payload }, { gameReducer: { rows, combinationUser } }]) => ({
      user: combinationUser,
      colors: rows?.[payload],
    })),
    makeRequest((payload) => ({
      url: 'http://127.0.0.1:8000/api/checkmastermindresults',
      method: 'POST',
      body: JSON.stringify(payload),
    })),
    concatMap(() => [checkRow(currentRowPlaying(state$.value))]),
  );

const gameEpics = combineEpics(
  selectCellEpic,
  removeCellEpic,
  getCombinationUserEpic,
  removeCurrentUserEpic,
  checkRowResultsEpic,
);

export { gameEpics };
