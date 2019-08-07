import checkPropTypes from 'check-prop-types';

import rootReducer from '../src/reducers/index';
import { createStore, applyMiddleware } from 'redux';
import { middlewares } from '../src/configureStore';
/**
 * Create a testing store with imported reducers, middleware, and initial state.
 * @function storeFactory
 * @param {object} initialState - Initial state for store.
 * @returns {Store} - Redux store
 */
export const storeFactory = initialState => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMiddleware(rootReducer, initialState);
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
