import React from 'react';
import { shallow } from 'enzyme';
import Input from './Input';
import { storeFactory } from '../../../test/testUtils';

/**
 * @function setup
 * @param {object} props - React props specific for this setup.
 * @returns {ShallowWrapper}
 */
const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />);
  console.log(wrapper.debug());
};

setup();

describe('render', () => {
  describe('word has not been guessed', () => {
    it('renders component without an error', () => {

    });
    it('renders input bux', () => {

    });
    it('renders submit button', () => {

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
