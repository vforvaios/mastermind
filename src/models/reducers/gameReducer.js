import { createReducer } from '@reduxjs/toolkit';
import { pickColorAction } from 'models/actions';

const initialState = {
  selectedColor: {},
  currentRowPlaying: 0,
  rows: {
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
    10: [],
  },
};
const gameReducer = createReducer(initialState, {
  [pickColorAction.type]: (state, action) => ({
    ...state,
    selectedColor: action.payload,
  }),
});

export default gameReducer;
