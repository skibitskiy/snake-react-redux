import './index.css';

import React from 'react';
import { connect } from 'react-redux';

import {
  gameTick,
  addDirection,
  setPause
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
class Game extends React.Component {
  constructor(props) {
    super(props);
    this.arrowKeysCallback = this.arrowKeysCallback.bind(this);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  componentDidUpdate() {
    const { isPause, isGameOver, gameTick } = this.props;

    if (isPause || isGameOver) {
      clearInterval(this.intervalId);
    } else {
      this.intervalId = setInterval(gameTick, intervalBetweenSteps);
    }
  }

  arrowKeysCallback(event) {
    const { isPause, isGameOver, addDirection } = this.props;

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
  }

  render() {
    return (
      <div className="game" onKeyDown={this.arrowKeysCallback} tabIndex="0">
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
  }
}

const mapStateToProps = (state) => ({
  isGameOver: state.get('isGameOver'),
  isPause: state.get('isPause')
});

const mapDispatchToProps = {
  gameTick,
  addDirection,
  setPause
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
