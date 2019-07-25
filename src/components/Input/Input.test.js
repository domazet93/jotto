import React from 'react';
import { shallow } from 'enzyme';
import { storeFactory, findByTestAttr } from '../../../test/testUtils';
import Input from './Input';

/**
 * @function setup
 * @param {object} props - React props specific for this setup.
 * @returns {ShallowWrapper}
 */
const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />).dive();
  return wrapper.shallow();
};

setup();

describe('render', () => {
  let wrapper;
  describe('word has not been guessed', () => {
    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setup(initialState);
    });
    it('renders component without an error', () => {
      const component = findByTestAttr(wrapper, 'component-input');
      expect(component.length).toBe(1);
    });
    it('renders input bux', () => {
      const component = findByTestAttr(wrapper, 'input-box');
      expect(component.length).toBe(1);
    });
    it('renders submit button', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      expect(submitButton.length).toBe(1);
    });
  });
  describe('word has been guessed', () => {
    it('renders component without an error', () => {

    });
    it('does not renders input bux', () => {

    });
    it('does not renders submit button', () => {

    });
  });
});
describe('update state', () => {

});
