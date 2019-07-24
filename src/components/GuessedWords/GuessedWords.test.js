import React from 'react';
import { shallow } from 'enzyme';
import GuessedWords from './GuessedWords';
import { checkProps, findByTestAttr } from '../../../test/testUtils';

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

describe('if there are no words guessed', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });
  it('renders without errors', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words');
    expect(component.length).toBe(1);
  });
  it('renders instructions to guess a word', () => {
    const instructions = findByTestAttr(wrapper, 'guess-instructions');
    expect(instructions.text().length).not.toBe(0);
  });
});
describe('if there are words guessed', () => {
  let wrapper;
  const guessedWords = [
    {
      guessedWord: 'train',
      letterMatchCount: 3
    },
    {
      guessedWord: 'party',
      letterMatchCount: 5
    },
    {
      guessedWord: 'agile',
      letterMatchCount: 1
    }
  ];
  beforeEach(() => {
    wrapper = setup({ guessedWords });
  });
  it('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words');
    expect(component.length).toBe(1);
  });
  it('renders `guessed words` section', () => {
    const guessedWordsNode = findByTestAttr(wrapper, 'guessed-words');
    expect(guessedWordsNode.length).toBe(1);
  });
  it('correct number of guessed words', () => {
    const guessedWordsNode = findByTestAttr(wrapper, 'guessed-word');
    expect(guessedWordsNode.length).toBe(guessedWords.length);
  });
});
