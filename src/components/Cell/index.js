import './index.css';

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { cellTypes } from '../../helpers/constants';

/**
 * Компонент клетки игрового поля
 */
class Cell extends React.Component {
  render() {
    const { type } = this.props;

    return (
      <div className={`cell cell_type_${cellTypes[type].toLowerCase()}`} />
    );
  }
}

Cell.propTypes = {
  type: PropTypes.oneOf(Object.values(cellTypes)).isRequired
};

function mapStateToProps(state, ownProps) {
  const { x, y } = ownProps;
  const board = state.get('board');
  const type = board.getIn([y, x]);
  return {
    type
  };
}

Cell.propTypes = {
  type: PropTypes.oneOf([Object.values(cellTypes)]).isRequired
};

export default connect(mapStateToProps, null)(Cell);
