import './index.css';

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setPause, resetGame } from '../../redux/actions';

/**
 * Компонент кнопки старта/рестарта игры
 */
class PlayButton extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { isGameOver, isPause, setPause, resetGame } = this.props;

    if (isGameOver) {
      resetGame();
    } else {
      setPause(!isPause);
    }
  }

  getSelector() {
    const { isGameOver, isPause } = this.props;

    let selector = 'play-button_start';
    if (isPause) {
      selector = 'play-button_continue';
    }
    if (isGameOver) {
      selector = 'play-button_restart';
    }
    return selector;
  }

  getText() {
    const { isGameOver, isPause } = this.props;

    let text = 'СТАРТ';
    if (isPause) {
      text = 'ПРОДОЛЖИТЬ';
    }
    if (isGameOver) {
      text = 'РЕСТАРТ';
    }
    return text;
  }

  render() {
    const selector = this.getSelector();
    const text = this.getText();

    return (
      <div className={`control-element play-button ${selector}`} onClick={this.onClick}>
        { text }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isGameOver: state.get('isGameOver'),
    isPause: state.get('isPause')
  };
}

const mapDispatchToProps = {
  setPause,
  resetGame
};

PlayButton.propTypes = {
  isGameOver: PropTypes.bool.isRequired,
  isPause: PropTypes.bool.isRequired,
  setPause: PropTypes.func.isRequired,
  resetGame: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayButton);
