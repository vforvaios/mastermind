import { createReducer } from '@reduxjs/toolkit';
import { pickColorAction, setSelectedCell } from 'models/actions';

const initialState = {
  selectedColor: {},
  currentRowPlaying: 0,
  selectedCell: 0,
  rows: {
    0: [
      { id: undefined, name: undefined },
      { id: undefined, name: undefined },
      { id: undefined, name: undefined },
      { id: undefined, name: undefined },
    ],
    1: [
      { id: undefined, name: undefined },
      { id: undefined, name: undefined },
      { id: undefined, name: undefined },
      { id: undefined, name: undefined },
    ],
    2: [
      { id: undefined, name: undefined },
      { id: undefined, name: undefined },
      { id: undefined, name: undefined },
      { id: undefined, name: undefined },
    ],
    3: [
      { id: undefined, name: undefined },
      { id: undefined, name: undefined },
      { id: undefined, name: undefined },
      { id: undefined, name: undefined },
    ],
    4: [
      { id: undefined, name: undefined },
      { id: undefined, name: undefined },
      { id: undefined, name: undefined },
      { id: undefined, name: undefined },
    ],
    5: [
      { id: undefined, name: undefined },
      { id: undefined, name: undefined },
      { id: undefined, name: undefined },
      { id: undefined, name: undefined },
    ],
    6: [
      { id: undefined, name: undefined },
      { id: undefined, name: undefined },
      { id: undefined, name: undefined },
      { id: undefined, name: undefined },
    ],
    7: [
      { id: undefined, name: undefined },
      { id: undefined, name: undefined },
      { id: undefined, name: undefined },
      { id: undefined, name: undefined },
    ],
    8: [
      { id: undefined, name: undefined },
      { id: undefined, name: undefined },
      { id: undefined, name: undefined },
      { id: undefined, name: undefined },
    ],
    9: [
      { id: undefined, name: undefined },
      { id: undefined, name: undefined },
      { id: undefined, name: undefined },
      { id: undefined, name: undefined },
    ],
    10: [
      { id: undefined, name: undefined },
      { id: undefined, name: undefined },
      { id: undefined, name: undefined },
      { id: undefined, name: undefined },
    ],
  },
};
const gameReducer = createReducer(initialState, {
  [pickColorAction.type]: (state, action) => ({
    ...state,
    selectedColor: action.payload,
  }),
  [setSelectedCell.type]: (state, action) => ({
    ...state,
    rows: action.payload,
  }),
});

export default gameReducer;
