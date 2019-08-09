import moxios from 'moxios';
import { storeFactory } from '../../test/testUtils';
import { getSecretWord } from '.';

describe('getSecredWord action creator', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  it('adds response word to state', done => {
    const secretWord = 'party';
    const store = storeFactory();

    moxios.wait(() => {
      const request = moxio.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: secretWord
      });
    });

    store.dispatch(getSecretWord()).then(() => {
      const newState = store.getState();
      expect(newState.secretWord).toBe(secretWord);
    });
    done();
  });
});
