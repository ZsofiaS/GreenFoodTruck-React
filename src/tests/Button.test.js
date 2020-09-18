import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Button from '../components/Button';

describe('renders Button component', () => {
  it('renders without crashing', () => {
    shallow(<Button />);
  });
  it('receives text prop', () => {
    const button = shallow(<Button text="Cancel" />);
    const cancel = 'Cancel';
    expect(button.contains(cancel)).toEqual(true);
  });
});
