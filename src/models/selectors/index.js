const selectedColor = ({ gameReducer }) => gameReducer.selectedColor;
const currentRowPlaying = ({ gameReducer }) => gameReducer.currentRowPlaying;
const rows = ({ gameReducer }) => gameReducer.rows;
const selectedCell = ({ gameReducer }) => gameReducer.selectedCell;
const submitButtonIsEnabled = (state) =>
  state.gameReducer?.rows?.[currentRowPlaying(state)]?.every((cell) => cell.id);

const combinationUserId = ({ gameReducer }) => gameReducer?.combinationUser;
const pickingColors = ({ gameReducer }) => gameReducer?.colors;
const whites = ({ gameReducer }) => gameReducer?.whites;
const blacks = ({ gameReducer }) => gameReducer?.blacks;

export {
  selectedColor,
  currentRowPlaying,
  rows,
  selectedCell,
  submitButtonIsEnabled,
  combinationUserId,
  pickingColors,
  whites,
  blacks,
};
