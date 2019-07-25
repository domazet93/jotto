import successReducer from './successReducer';
import { actionTypes } from '../actions/';

it('returns default initial state of `false` when no action', () => {
  const newState = successReducer(undefined, {});
  expect(newState).toBe(false);
});
it('returns state of `true` upon receiving an action of type `CORRECT_GUESS`', () => {
  const newState = successReducer(undefined, {
    type: actionTypes.CORRECT_GUESS
  });
  expect(newState).toBe(true);
});
