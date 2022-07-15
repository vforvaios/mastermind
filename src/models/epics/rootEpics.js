import { combineEpics } from 'redux-observable';

import { gameEpics } from './gameEpics';

const rootEpics = combineEpics(gameEpics);

export default rootEpics;
