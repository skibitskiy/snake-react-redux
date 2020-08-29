import './index.css';

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

/**
 * Компонент, отображающий количество очков
 */
class Score extends React.Component {
  render() {
    const { score } = this.props;
    return (
      <div className="score control-element">
        { `SCORE: ${score}` }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    score: state.get('score')
  };
}

Score.propTypes = {
  score: PropTypes.number.isRequired
};

export default connect(mapStateToProps, null)(Score);
