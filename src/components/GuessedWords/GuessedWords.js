import React from 'react';
import PropTypes from 'prop-types';

/**
 * Functional component for guessed words table.
 * @function GuessedWords
 * @param {object} props - React props
 * @returns {JSX.Element}
 */
const GuessedWords = props => {
  return (
  <div></div>
  );
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
