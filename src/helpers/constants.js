import * as Immutable from 'immutable';

const rowsCount = 16;
const columnsCount = 16;
const startSnakeLength = 4;

const UP = 'UP';
const RIGHT = 'RIGHT';
const DOWN = 'DOWN';
const LEFT = 'LEFT';
const AUTO = 'AUTO';

const cellTypes = {
  EMPTY: 'EMPTY',
  SNAKE: 'SNAKE',
  GOAL: 'GOAL',
  SNAKEHEAD: 'SNAKEHEAD'
};

const intervalBetweenSteps = 120;

const matrix = Immutable.fromJS(Array.from(
  Array(rowsCount),
  () => Array(columnsCount).fill(cellTypes.EMPTY)
));

export {
  rowsCount,
  columnsCount,
  startSnakeLength,
  UP,
  RIGHT,
  DOWN,
  LEFT,
  AUTO,
  cellTypes,
  intervalBetweenSteps,
  matrix
};
