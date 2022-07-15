import { createReducer } from '@reduxjs/toolkit';
import { pickColorAction, selectCell } from 'models/actions';

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
  [selectCell.type]: (state, action) => ({
    ...state,
    rows: {
      ...state?.rows,
      [state.currentRowPlaying]: state?.rows?.[
        state?.currentRowPlaying
      ]?.map((cell, index) =>
        index !== action.payload ? { ...cell } : { ...state.selectedColor },
      ),
    },
  }),
});

export default gameReducer;
