import {
  SET_GAME,
  SET_SCORE,
  SET_PAUSE,
  RESET_GAME,
  SET_MOVES
} from './actionTypes';

import initialState from './initialState';

export default function reducer(state, action) {
  switch (action.type) {
    case SET_GAME:
      return action.game;
    case SET_MOVES:
      return state.set('moves', action.moves);
    case SET_SCORE:
      return state.set('score', action.score);
    case SET_PAUSE:
      return state.set('isPause', action.value);
    case RESET_GAME:
      return initialState;
    default:
      return state;
  }
}
