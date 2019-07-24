import React from 'react';
import PropTypes from 'prop-types';

/**
 * Functional component for guessed words table.
 * @function GuessedWords
 * @param {object} props - React props
 * @returns {JSX.Element}
 */
const GuessedWords = props => {
  let contents;
  if (!props.guessedWords.length) {
    contents = (
      <span data-test="guess-instructions">Try to guess the secret word!</span>
    );
  } else {
    const guessedWords = props.guessedWords.map((word, index) => (
      <tr data-test="guessed-word" key={index}>
        <td>{word.guessedWord}</td>
        <td>{word.letterMatchCount}</td>
      </tr>
    ));
    contents = (
      <div data-test="guessed-words">
        <h3>Guessed Words</h3>
        <table>
          <thead>
            <tr>
              <th>Guess</th>
            </tr>
            <tr>
              <th>Matching Letters</th>
            </tr>
          </thead>
          <tbody>{guessedWords}</tbody>
        </table>
      </div>
    );
  }
  return <div data-test="component-guessed-words">{contents}</div>;
};

export default GuessedWords;

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  ).isRequired
};
