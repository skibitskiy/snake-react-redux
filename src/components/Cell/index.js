import './index.css';

import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { cellTypes } from '../../helpers/constants';

/**
 * Компонент клетки игрового поля
 */
const Cell = (props) => {
  const { x, y } = props;
  const type = useSelector((state) => state.getIn(['board', y, x]));

  return (
    <div className={`cell cell_type_${cellTypes[type].toLowerCase()}`} />
  );
};

Cell.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
};

export default Cell;
