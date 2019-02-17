import React from 'react'

import { shallow } from '../../../enzyme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Boxes from './Boxes';

describe('<Boxes />', () => {
  const wrapper = shallow(<Boxes />);
  const icons = ['chart-pie', 'globe', 'cog', 'users'];

  it('should have 4 sections', () => {
    expect(wrapper.containsAllMatchingElements([
      <h3>Analytics</h3>,
      <h3>Marketing</h3>,
      <h3>Development</h3>,
      <h3>Support</h3>])).toEqual(true);
  });

  // it('should have 4 icons', () => {
  //   expect(wrapper.find(FontAwesomeIcon)).toHaveLength(4);
  // });

  it('should have 4 different icons', () => {
    const iconsFound = wrapper.find(FontAwesomeIcon)
      .filterWhere(node => icons.includes(node.prop('icon')));
    expect(iconsFound).toHaveLength(4);
  }); 
});