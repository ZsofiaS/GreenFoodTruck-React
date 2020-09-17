import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Product from '../components/Product';

describe('renders Product component', () => {
  it('renders without crashing', () => {
    shallow(<Product />);
  });
});
