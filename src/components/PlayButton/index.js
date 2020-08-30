import './index.css';

import React, { useCallback } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import { setPause, resetGame } from '../../redux/actions';

/**
 * Компонент кнопки старта/рестарта игры
 */
const PlayButton = () => {
  const dispatch = useDispatch();

  const { isGameOver, isPause } = useSelector(
    (state) => ({ isGameOver: state.get('isGameOver'), isPause: state.get('isPause') }),
    shallowEqual
  );

  const onClick = useCallback(
    () => dispatch(isGameOver ? resetGame() : setPause(!isPause)),
    [isGameOver, isPause]
  );

  let text;
  let selector;
  if (isGameOver) {
    selector = 'play-button_restart';
    text = 'РЕСТАРТ';
  } else if (isPause) {
    selector = 'play-button_start';
    text = 'ИГРАТЬ';
  } else {
    selector = 'play-button_pause';
    text = 'ПАУЗА';
  }

  return (
    <div className={`control-element play-button ${selector}`} onClick={onClick}>
      { text }
    </div>
  );
};

export default PlayButton;
