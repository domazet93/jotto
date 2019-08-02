/**
 * @method getLetterMatchCount
 * @param {string} guessedWords
 * @param {string} secretWord
 * @returns {number} - Number of letters matched between guessed words and secret word
 */
export function getLetterMatchCount(guessedWords, secretWord) {
  const guessedLetterSet = new Set(guessedWords.split(''));
  const secretLetterSet = new Set(secretWord.split(''));

  return [...secretLetterSet].filter(letter => guessedLetterSet.has(letter))
    .length;
}
