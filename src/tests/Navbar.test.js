import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Navbar from '../components/Main';

describe('renders Navbar component', () => {
  it('renders without crashing', () => {
    shallow(<Navbar />);
  });
});
