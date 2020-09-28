import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Product from '../components/Product';

describe('renders Product component', () => {
  it('renders without crashing', () => {
    shallow(<Product />);
  });
  it('receives name prop', () => {
    const product1 = shallow(<Product name="Coffee" />);
    const coffee = <p>Coffee</p>;
    expect(product1.contains(coffee)).toEqual(true);
  });
  it('receives price prop', () => {
    const product2 = shallow(<Product price="2.5" />);
    const price = <p>£2.5</p>;
    expect(product2.contains(price)).toEqual(true);
  });
});
