import { createAction } from '@reduxjs/toolkit';

const pickColorAction = createAction('mastermind/pickColor');
const selectCell = createAction('mastermind/selectCell');
const setSelectedCell = createAction('mastermind/setSelectedCell');

export { pickColorAction, selectCell, setSelectedCell };
