import checkPropTypes from 'check-prop-types';

import rootReducer from '../src//reducers';
import { createStore } from 'redux';

/**
 * Create a testing store with imported reducers, middleware, and initial state.
 * @function storeFactory
 * @param {object} initialState - Initial state for store.
 * @returns {Store} - Redux store
 */
export const storeFactory = initialState => {
  return createStore(rootReducer, initialState);
};

/**
 * Return node(s) with the given data-test attribute.
 * @function findByTestAttr
 * @param {ShallowWrapper} wrapper
 * @param {string} val
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

/**
 * showing erros instead of logging them
 * @function checkProps
 * @param {React.Component} component
 * @param {object} expectedProps
 */
export const checkProps = (component, expectedProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    expectedProps,
    'prop',
    component.name
  );
  expect(propError).toBeUndefined();
};
