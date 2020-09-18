import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import OrderItem from '../components/OrderItem';

describe('renders OrderItem component', () => {
  it('renders without crashing', () => {
    shallow(<OrderItem />);
  });
  it('receives props', () => {
    const orderItem1 = shallow(
      <OrderItem quantity={2} name="Coffee" sum={6} />
    );
    const coffee = <p>2x Coffee £6</p>;
    expect(orderItem1.contains(coffee)).toEqual(true);
  });
});
