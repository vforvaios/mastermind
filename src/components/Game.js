/* eslint-disable react-hooks/exhaustive-deps */
import { Board } from 'components';
import { getCombinationUser } from 'models/actions';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Game = () => {
  const dispatch = useDispatch();

  // const getCombinationUser = async () => {
  //   const tempUser = await fetch('http://localhost:8000/api/initmastermind');
  // };

  useEffect(() => {
    dispatch(getCombinationUser());
  }, []);

  return (
    <div className="game">
      <div className="board">
        <Board />
      </div>
    </div>
  );
};

export default Game;
