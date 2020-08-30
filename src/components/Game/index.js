import './index.css';

import React, { useCallback } from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import { useActions, useInterval } from '../../helpers/hooks';

import {
  gameTick as _gameTick,
  addDirection as _addDirection,
  setPause as _setPause
} from '../../redux/actions';

import Board from '../Board';
import Score from '../Score';
import PlayButton from '../PlayButton';

import {
  UP,
  RIGHT,
  DOWN,
  LEFT,
  intervalBetweenSteps
} from '../../helpers/constants';

/**
 * Компонент игры
 */
const Game = () => {
  const { isGameOver, isPause } = useSelector(
    (state) => ({ isGameOver: state.get('isGameOver'), isPause: state.get('isPause') }),
    shallowEqual
  );
  const [gameTick, addDirection, setPause] = useActions([_gameTick, _addDirection, _setPause]);

  useInterval(gameTick, intervalBetweenSteps, isGameOver || isPause);

  const arrowKeysCallback = useCallback((event) => {
    if ((isPause || isGameOver) && event.keyCode !== 32) {
      return;
    }

    switch (event.keyCode) {
      case 32:
        setPause(!isPause);
        break;
      case 37:
        addDirection(LEFT);
        break;
      case 38:
        addDirection(UP);
        break;
      case 39:
        addDirection(RIGHT);
        break;
      case 40:
        addDirection(DOWN);
        break;
      default:
    }
  }, [isPause, isGameOver]);

  return (
    <div className="game" onKeyDown={arrowKeysCallback} tabIndex="0">
      <div className="game__board-wrapper">
        <Board />
      </div>
      <div className="controls game__controls">
        <div className="controls__control-element-wrapper">
          <Score />
        </div>
        <PlayButton />
      </div>
    </div>
  );
};

export default Game;
