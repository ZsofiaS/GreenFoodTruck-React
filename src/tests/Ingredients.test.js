import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import Ingredients from '../components/Ingredients';
import store from '../store/store';

describe('renders Ingredients component', () => {
  it('renders without crashing', () => {
    shallow(
      <Provider store={store}>
        <Ingredients />
      </Provider>
    ).dive();
  });
});
