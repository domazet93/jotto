import { storeFactory } from '../test/testUtils';
import { guessWord } from './actions';

describe('guessedWord action dispatcher', () => {
  const secretWord = 'party';
  const unsuccessfulGuess = 'train';
  describe('no guessed words', () => {
    let store;
    const initialState = {
      secretWord
    };

    beforeEach(() => {
      store = storeFactory(initialState);
    });

    it('updates state correctly for unsuccessful guess', () => {
      store.dispatch(guessWord(unsuccessfulGuess));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        sucess: false,
        guessedWords: [
          {
            guessedWords: unsuccessfulGuess,
            letterMatchCount: 3
          }
        ]
      };
      expect(newState).toEqual(expectedState);
    });
    it('updates state correctly for successful guess', () => {

    });
  });
  describe('guessed words', () => {
    it('updates state correctly for unsuccessful guess', () => {

    });
    it('updates state correctly for successful guess', () => {

    });
  });
});