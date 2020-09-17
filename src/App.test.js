import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from './App';

describe('renders App component', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
});
