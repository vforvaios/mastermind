import { currentRowPlaying } from 'models/selectors';
import React from 'react';
import { useSelector } from 'react-redux';

const GameRow = ({ row, index }) => {
  const currRow = useSelector(currentRowPlaying);

  return (
    <div
      className="row-container"
      {...(currRow === index && { onClick: () => console.log('Hi') })}>
      Row {index}
    </div>
  );
};

export default GameRow;
