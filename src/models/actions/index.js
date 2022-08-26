import { createAction } from '@reduxjs/toolkit';

const pickColorAction = createAction('mastermind/pickColor');
const selectCell = createAction('mastermind/selectCell');
const removeCell = createAction('mastermind/removeCell');
const setRow = createAction('mastermind/setRow');
const checkRow = createAction('mastermind/checkRow');
const getCombinationUser = createAction('mastermind/getCombinationUser');
const setCombinationUser = createAction('mastermind/setCombinationUser');
const removeCurrentUser = createAction('mastermind/removeCurrentUser');
const removeCombinationUser = createAction('mastermind/removeCombinationUser');
const checkRowResults = createAction('mastermind/checkRowResults');
const setResults = createAction('mastermind/setResults');

export {
  pickColorAction,
  selectCell,
  setRow,
  removeCell,
  checkRow,
  getCombinationUser,
  setCombinationUser,
  removeCurrentUser,
  removeCombinationUser,
  checkRowResults,
  setResults,
};
