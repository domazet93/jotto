import { actionTypes } from '../actions';

/**
 * @function secretWordReducer
 * @param {array} state
 * @param {object} action
 * @returns {array}
 */
export default (state = null, action) => {
  switch (action.type) {
    case actionTypes.SET_SECRET_WORD:
      return action.payload;
    default:
      return state;
  }
};
