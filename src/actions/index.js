import axios from 'axios';

import { getLetterMatchCount } from '../helpers';

const WORDNIK_API_KEY = process.env.REACT_APP_WORDNIK_API_KEY;
const wordnikApiUrl = 'https://api.wordnik.com/v4';
const wordnikAxiosInstance = axios.create({
  baseURL: wordnikApiUrl
});

wordnikAxiosInstance.interceptors.request.use(config => ({
  ...config,
  params: {
    api_key: WORDNIK_API_KEY,
    ...config.params
  }
}));

export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
  SET_SECRET_WORD: 'SET_SECRET_WORD'
};

/**
 * Returns Redux Thunk function that dispatches GUESS_WORD action
 * and (conditionally) CORRECT_GUESS action
 * @function guessWord
 * @param {string} guessWord
 * @returns {function} - Redux Thunk function
 */
export const guessWord = guessedWord => {
  return function(dispatch, getState) {
    const secretWord = getState().secretWord;
    const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);

    dispatch({
      type: actionTypes.GUESS_WORD,
      payload: {
        guessedWord,
        letterMatchCount
      }
    });

    if (guessedWord === secretWord) {
      dispatch({
        type: actionTypes.CORRECT_GUESS
      });
    }
  };
};

export const getSecretWord = () => {
  return dispatch => {
    return wordnikAxiosInstance.get('/words.json/randomWord').then(response => {
      dispatch({
        type: actionTypes.SET_SECRET_WORD,
        payload: response.data.word
      });
    });
  };
};
