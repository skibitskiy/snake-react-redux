import * as Immutable from 'immutable';

import {
  matrix
} from './constants.js';

/**
 * Точка на доске.
 *
 * @typedef {Immutable.Map} Point
 */

/**
 * Доска
 *
 * @typedef {Immutable.List<Immutable.List<Point>>} Board
 */

/**
 * Тип клетки
 *
 * @typedef {'EMPTY'|'SNAKE'|'GOAL'|'SNAKEHEAD'} cellType
 */

/**
 * Переносит obj на доску со значением в матрице value
 *
 * @param  {Board} board
 * @param  {Snake|Goal|Immutable.List<Point>|Point} obj
 * @param  {cellType} value
 */
function imageObjectAtBoard(board, obj, value) {
  let _obj = obj;
  if (!Immutable.List.isList(obj)) {
    _obj = [obj];
  }
  return _obj.reduce((res, point) => {
    const y = point.get('y');
    const x = point.get('x');
    return res.setIn([y, x], value);
  }, board);
}

/**
 * Возвращет доску с изображенными переданными элементами
 *
 * @param {...Immutable.List<Point>} objects
 * @returns {Board}
 */
function getBoardWithObjects(objects, board = matrix) {
  return objects.reduce((res, obj) => {
    const [point, type] = obj;
    return imageObjectAtBoard(res, point, type);
  }, board);
}

export {
  getBoardWithObjects
};
