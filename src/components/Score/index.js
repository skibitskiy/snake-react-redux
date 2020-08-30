import './index.css';

import React from 'react';
import { useSelector } from 'react-redux';

/**
 * Компонент, отображающий количество очков
 */
const Score = () => {
  const score = useSelector((state) => state.get('score'));
  return (
    <div className="score control-element">
      { `SCORE: ${score}` }
    </div>
  );
};

export default Score;
