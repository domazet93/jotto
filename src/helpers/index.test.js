import { getLetterMatchCount } from '.';

describe('getLetterMatchCount', () => {
  const secredWord = 'party';
  it('returns correct count when there are no matched letters', () => {
    const letterMatchCount = getLetterMatchCount('bones', secredWord);
    expect(letterMatchCount).toBe(0);
  });
  it('returns correct count when there are 3 matching letters', () => {
    const letterMatchCount = getLetterMatchCount('train', secredWord);
    expect(letterMatchCount).toBe(3);
  });
  it('returns correct count when there are duplicate letters in the guess', () => {
    const letterMatchCount = getLetterMatchCount('parka', secredWord);
    expect(letterMatchCount).toBe(3);
  });
});
