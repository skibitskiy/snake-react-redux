import * as Immutable from 'immutable';

import {
  rowsCount,
  columnsCount,
  UP,
  LEFT,
  DOWN,
  RIGHT
} from './constants.js';

/**
 * Точка на доске.
 *
 * @typedef {Immutable.Map} Point
 */

/**
 * Направление
 *
 * @typedef {'UP'|'RIGHT'|'DOWN'|'LEFT'} Direction
 */

/**
 * Возвращает точку с переданными кординатами
 *
 * @param  {number} x
 * @param  {number} y
 * @returns {Point}
 */
function createPoint(x, y) {
  return Immutable.Map({ x, y });
}

/**
 * Функция, проверяющая равенство двух точек
 *
 * @param  {Point} a
 * @param  {Point} b
 * @returns {boolean}
 */
function isIntersection(a, b) {
  return a.get('x') === b.get('x') && a.get('y') === b.get('y');
}

/**
 * Проверяет пересечение любой части змеи с целью
 *
 * @param  {Point[]} list
 * @param  {Point} point
 * @returns {boolean}
 */
function isListCrossPoint(list, point) {
  return list.some((p) => isIntersection(p, point));
}

/**
 * Возвращает случайные координаты в пределах сетки.
 *
 * @returns {Point}
 */
function getRandomCoordinates() {
  const x = Math.floor(Math.random() * rowsCount);
  const y = Math.floor(Math.random() * columnsCount);
  return createPoint(x, y);
}

/**
 * Возвращает случайные координаты в пределах сетки
 * без пересечения с объектом obj, состоящим из множества точек
 *
 * @param  {Immutable.List<Point>} list
 * @returns {Point}
 */
function getRandomCoordinatesWithoutIntersectionWith(list) {
  let coordinates;
  do {
    coordinates = getRandomCoordinates();
  } while (isListCrossPoint(list, coordinates));
  return coordinates;
}

/**
 * Возвращает координаты со смещением в сторону direction
 *
 * @param  {Direction} direction
 * @param  {Point} coordinates
 * @returns {Point}
 */
function updateCreator(direction, coordinates) {
  switch (direction) {
    case UP:
      return coordinates.set('y', coordinates.get('y') - 1);
    case RIGHT:
      return coordinates.set('x', coordinates.get('x') + 1);
    case DOWN:
      return coordinates.set('y', coordinates.get('y') + 1);
    case LEFT:
      return coordinates.set('x', coordinates.get('x') - 1);
    default:
      throw new Error('Incorrect direction');
  }
}

/**
 * Проверяет,являются ли направления противоположными
 *
 * @param  {Direction} first
 * @param  {Direction} second
 * @returns {boolean}
 */
function isOppositeDirections(first, second) {
  return (
    (first === UP && second === DOWN)
    || (first === DOWN && second === UP)
    || (first === LEFT && second === RIGHT)
    || (first === RIGHT && second === LEFT)
  );
}

/**
 * Проверяет, являются ли направления эквивалентными
 *
 * @param  {Direction} first
 * @param  {Direction} second
 * @returns {boolean}
 */
function isEqualDirections(first, second) {
  return first === second;
}

export {
  createPoint,
  isIntersection,
  isListCrossPoint,
  getRandomCoordinates,
  getRandomCoordinatesWithoutIntersectionWith,
  updateCreator,
  isOppositeDirections,
  isEqualDirections
};
