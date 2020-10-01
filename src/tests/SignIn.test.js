import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SignIn from '../components/SignIn';

describe('renders SignIn component', () => {
  it('renders without crashing', () => {
    shallow(<SignIn />);
  });
});
