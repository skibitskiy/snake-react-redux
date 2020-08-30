import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { useEffect, useMemo, useRef } from 'react';

/**
 * Хук, возвращающий экшены, обернутые в dispatch
 *
 * @param {Array} actions
 * @returns {Array}
 */
function useActions(actions) {
  const dispatch = useDispatch();

  return useMemo(
    () => actions.map((action) => bindActionCreators(action, dispatch)),
    [dispatch]
  );
}

/**
 * Хук для установки setInterval изменяемого колбэка
 *
 * @param {function} callback - первый аргумент setInterval
 * @param {number} ms - интервал между вызовами
 * @param {boolean} [condition=false] - условие остановки интервала
 */
function useInterval(callback, ms, condition = false) {
  const ref = useRef(callback);

  useEffect(() => {
    ref.current = callback;
  }, [callback]);

  useEffect(() => {
    const intervalId = condition
      ? null
      : setInterval(() => ref.current(), ms);

    return () => clearInterval(intervalId);
  }, [condition]);
}

export {
  useActions,
  useInterval
};
