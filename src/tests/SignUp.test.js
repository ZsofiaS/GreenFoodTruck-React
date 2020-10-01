import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SignUp from '../components/SignUp';

describe('renders SignUp component', () => {
  it('renders without crashing', () => {
    shallow(<SignUp />);
  });
});
