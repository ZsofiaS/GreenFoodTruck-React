import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import Home from './Home';
import store from './store/store';

describe('renders Home component', () => {
  it('renders without crashing', () => {
    shallow(
      <Provider store={store}>
        <Home />
      </Provider>
    ).dive();
  });
});
