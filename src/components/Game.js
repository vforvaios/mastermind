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
    if (userId) {
      dispatch(removeCurrentUser({ id: userId }));
    }
  });

  useEffect(() => {
    if (!userId) {
      dispatch(getCombinationUser());
    }
  }, [userId]);

  return (
    <div className="game">
      <div className="board">
        <Board />
      </div>
    </div>
  );
};

export default Game;
