import './index.css';

import React from 'react';
import { connect } from 'react-redux';

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

export default connect(mapStateToProps, null)(Score);
