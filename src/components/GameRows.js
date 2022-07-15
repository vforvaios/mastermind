import { GameRow } from 'components';
import { rows } from 'models/selectors';
import React from 'react';
import { useSelector } from 'react-redux';

const GameRows = () => {
  const allRows = useSelector(rows);

  return (
    <div className="rows-container">
      {Object.keys(allRows).map((key) => (
        <GameRow key={Number(key)} index={Number(key)} row={allRows[key]} />
      ))}
    </div>
  );
};

export default GameRows;
