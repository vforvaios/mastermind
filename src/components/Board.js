import { AvailablePickingColors, GameRows } from 'components';
import React from 'react';

const Board = () => {
  return (
    <div className="board-container">
      <AvailablePickingColors />
      <GameRows />
    </div>
  );
};

export default Board;
