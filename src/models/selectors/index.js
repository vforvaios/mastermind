const selectedColor = ({ gameReducer }) => gameReducer.selectedColor;
const currentRowPlaying = ({ gameReducer }) => gameReducer.currentRowPlaying;
const rows = ({ gameReducer }) => gameReducer.rows;
const selectedCell = ({ gameReducer }) => gameReducer.selectedCell;

export { selectedColor, currentRowPlaying, rows, selectedCell };
