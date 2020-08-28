import { Map } from 'immutable';

import { getSnakeStartBody } from '../helpers/snake';
import { getRandomCoordinatesWithoutIntersectionWith } from '../helpers/common';
import { getBoardWithObjects } from '../helpers/board';
import { RIGHT, cellTypes } from '../helpers/constants';

const snake = getSnakeStartBody();
const snakeHead = snake.last();
const goal = getRandomCoordinatesWithoutIntersectionWith(snake);

const board = getBoardWithObjects([
  [snake.slice(0, -1), cellTypes.SNAKE],
  [snakeHead, cellTypes.SNAKEHEAD],
  [goal, cellTypes.GOAL]
]);

export default Map({
  snake,
  goal,
  board,
  currentDirection: RIGHT,
  score: 0,
  isGameOver: false,
  isPause: true,
  moves: []
});
