/* eslint-disable react-hooks/exhaustive-deps */
import { Board } from 'components';
import { getCombinationUser, removeCurrentUser } from 'models/actions';
import { combinationUserId } from 'models/selectors';
import React, { useEffect } from 'react';
import { useBeforeunload } from 'react-beforeunload';
import { useDispatch, useSelector } from 'react-redux';

const Game = () => {
  const dispatch = useDispatch();
  const userId = useSelector(combinationUserId);

  useBeforeunload((event) => {
    dispatch(removeCurrentUser({ id: userId }));
  });

  useEffect(() => {
    dispatch(getCombinationUser());
  }, []);

  return (
    <div className="game">
      <div className="board">
        {userId}
        <Board />
      </div>
    </div>
  );
};

export default Game;
