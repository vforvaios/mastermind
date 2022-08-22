import { createReducer } from '@reduxjs/toolkit';
import {
  pickColorAction,
  setRow,
  checkRow,
  setCombinationUser,
} from 'models/actions';

const initialState = {
  selectedColor: {},
  currentRowPlaying: 0,
  selectedCell: 0,
  combinationUser: {},
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
  },
};
const gameReducer = createReducer(initialState, {
  [pickColorAction.type]: (state, action) => ({
    ...state,
    selectedColor: action.payload,
  }),
  [setRow.type]: (state, action) => ({
    ...state,
    rows: action.payload,
  }),
  [checkRow.type]: (state, action) => ({
    ...state,
    currentRowPlaying: state?.currentRowPlaying + 1,
  }),
  [setCombinationUser.type]: (state, action) => ({
    ...state,
    combinationUser: action.payload,
  }),
});

export default gameReducer;
