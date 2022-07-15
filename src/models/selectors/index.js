const selectedColor = ({ gameReducer }) => gameReducer.selectedColor;
const currentRowPlaying = ({ gameReducer }) => gameReducer.currentRowPlaying;
const rows = ({ gameReducer }) => gameReducer.rows;

export { selectedColor, currentRowPlaying, rows };
