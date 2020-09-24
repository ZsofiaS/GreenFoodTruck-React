import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import Sales from '../components/Sales';
import store from '../store/store';

describe('renders Sales component', () => {
  it('renders without crashing', () => {
    shallow(
      <Provider store={store}>
        <Sales />
      </Provider>
    ).dive();
  });
});
