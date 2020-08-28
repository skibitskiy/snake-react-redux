import { AUTO, cellTypes } from '../helpers/constants';

import {
  SET_MOVES,
  SET_GAME,
  SET_PAUSE,
  RESET_GAME
} from './actionTypes';

import {
  isEqualDirections,
  isOppositeDirections,
  getRandomCoordinatesWithoutIntersectionWith
} from '../helpers/common';

import {
  getUpdatedSnake,
  getAppendedSnake,
  isSnakeBeyondTheBoard,
  isSnakeCrossItselft,
  isSnakeAteGoal
} from '../helpers/snake';

import { getBoardWithObjects } from '../helpers/board';

function setGame(game) {
  return {
    type: SET_GAME,
    game
  };
}

function setMoves(moves) {
  return {
    type: SET_MOVES,
    moves
  };
}

function addDirection(direction) {
  return (dispatch, getState) => {
    const moves = [...getState().get('moves')];
    moves.push(direction);
    dispatch(setMoves(moves));
  };
}

function setPause(value) {
  return {
    type: SET_PAUSE,
    value
  };
}

function resetGame() {
  return {
    type: RESET_GAME
  };
}

/**
 * Вовзращает следующее направление поворота змеи
 *
 * @param  {Direction} currentDirection
 * @param  {Immutable.List} moves
 * @returns {Direction} nextDirection
 */
function getNextDirection(currentDirection, moves) {
  let nextDirection;

  do {
    nextDirection = moves.shift();
  } while (
    isEqualDirections(nextDirection, currentDirection)
    || isOppositeDirections(nextDirection, currentDirection)
  );

  nextDirection = [AUTO, undefined].includes(nextDirection)
    ? currentDirection
    : nextDirection;

  return nextDirection;
}
/**
 * Action creator игрового процесса
 */
function gameTick() {
  return (dispatch, getState) => {
    let state = getState();
    let snake = state.get('snake');
    let board = state.get('board');
    let goal = state.get('goal');
    const currentDirection = state.get('currentDirection');
    const score = state.get('score');
    const moves = state.get('moves').slice(0, 4);

    const nextDirection = getNextDirection(currentDirection, moves);
    state = state.set('moves', moves);
    snake = getUpdatedSnake(snake, nextDirection);

    if (isSnakeBeyondTheBoard(snake)) {
      state = state.set('isGameOver', true);
    } else {
      if (isSnakeCrossItselft(snake)) {
        state = state.set('isGameOver', true);
      }
      state = state
        .set('snake', snake)
        .set('currentDirection', nextDirection);

      if (isSnakeAteGoal(snake, goal)) {
        snake = getAppendedSnake(snake);
        goal = getRandomCoordinatesWithoutIntersectionWith(snake);
        state = state
          .set('snake', snake)
          .set('goal', goal)
          .set('score', score + 1);
      }
    }

    board = getBoardWithObjects([
      [snake.slice(0, -1), cellTypes.SNAKE],
      [snake.last(), cellTypes.SNAKEHEAD],
      [goal, cellTypes.GOAL]
    ]);

    state = state.set('board', board);
    dispatch(setGame(state));
  };
}

export {
  gameTick,
  addDirection,
  setPause,
  resetGame
};
