import React from 'react';
import { shallow } from 'enzyme';
import GuessedWords from './GuessedWords';
import { checkProps } from '../../../test/testUtils';

const defaultProps = {
  guessedWords: [
    {
      guessedWord: 'train',
      letterMatchCount: 3
    }
  ]
};

/**
 * Functional component for GuessedWords component.
 * @function setup
 * @param {object} props - React props specific for this setup.
 * @returns {JSX.Element}
 */
const setup = (props = {}) => {
  const setUpProp = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setUpProp} />);
};

it('does not throw warning with expected props', () => {
  checkProps(GuessedWords, defaultProps);
});
