import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Main from '../components/Main';

describe('renders Main component', () => {
  it('renders without crashing', () => {
    shallow(<Main />);
  });
});
