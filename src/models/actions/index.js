import { createAction } from '@reduxjs/toolkit';

const pickColorAction = createAction('mastermind/pickColor');
const selectCell = createAction('mastermind/selectCell');
const removeCell = createAction('mastermind/removeCell');
const setRow = createAction('mastermind/setRow');
const checkRow = createAction('mastermind/checkRow');

export { pickColorAction, selectCell, setRow, removeCell, checkRow };
