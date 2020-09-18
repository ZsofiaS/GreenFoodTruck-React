import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import App from './App';
import store from './store/store';

describe('renders App component', () => {
  it('renders without crashing', () => {
    shallow(
      <Provider store={store}>
        <App />
      </Provider>
    ).dive();
  });
});
