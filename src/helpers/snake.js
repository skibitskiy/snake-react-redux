import * as Immutable from 'immutable';

import {
  rowsCount,
  columnsCount,
  startSnakeLength
} from './constants.js';

import {
  isIntersection,
  isListCrossPoint,
  updateCreator
} from './common.js';

/**
 * Точка на доске.
 *
 * @typedef {Immutable.Map} Point
 */

/**
 * Змея
 *
 * @typedef {snake} Snake
 */

/**
 * Цель
 *
 * @typedef {Point} Goal
 */

/**
 * Направление
 *
 * @typedef {'UP'|'RIGHT'|'DOWN'|'LEFT'} Direction
 */

/**
 * Функция, возвращающая тело змеи.
 *
 * @returns {Immutable.List<Point>}
 */
function getSnakeStartBody() {
  return Immutable.fromJS(Array.from(Array(startSnakeLength), (_, x) => ({ y: 0, x })));
}

/**
 * Проверяет пересечение головы змеи с цулью
 *
 * @param  {Snake} snake
 * @param  {Goal} goal
 * @returns {boolean}
 */
function isSnakeAteGoal(snake, goal) {
  const head = snake.last();
  return isIntersection(head, goal);
}

/**
 * Проверяет пересечение змеи со своим телом
 *
 * @param  {Snake} snake
 * @returns {boolean}
 */
function isSnakeCrossItselft(snake) {
  const head = snake.last();
  return isListCrossPoint(snake.slice(0, -1), head);
}

/**
 * Проверяет, что змея находится внутри игровой сетки
 *
 * @param  {Snake} snake
 * @returns {boolean}
 */
function isSnakeBeyondTheBoard(snake) {
  return !snake.every((point) => {
    const y = point.get('y');
    const x = point.get('x');
    return (
      x >= 0 && x < rowsCount
      && y >= 0 && y < columnsCount
    );
  });
}

/**
 * Добавляет новый блок в змею
 *
 * @param  {Snake} snake
 * @returns {Snake}
 */
function getAppendedSnake(snake) {
  return snake.unshift(snake.first());
}

/**
 * Добавляет к змее блок в зависимости от направления
 *
 * @param  {Snake} snake
 * @param  {Direction} direction
 * @returns {Snake}
 */
function getUpdatedSnake(snake, direction) {
  const head = snake.last();
  const newHead = updateCreator(direction, head);
  return snake.slice(1).push(newHead);
}

export {
  getSnakeStartBody,
  isSnakeAteGoal,
  isSnakeCrossItselft,
  isSnakeBeyondTheBoard,
  getAppendedSnake,
  getUpdatedSnake
};
