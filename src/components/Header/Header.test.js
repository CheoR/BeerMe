import React from 'react';

import { shallow } from '../../enzyme';

import Header from './Header';

describe('<Header />', () => {
  const wrapper = shallow(<Header />);
  const iconName = "beer";

  it('should have class name of header', () => {
    expect(wrapper.find('header').hasClass('header')).toBe(true);
  });

  it('should have a beer icon', () => {
    expect(wrapper.find('FontAwesomeIcon').prop('icon')).toEqual(iconName);
  });

  it('should have a nav item with class name header__nav', () => {
    expect(wrapper.find('nav').hasClass('header__nav')).toBe(true);
  });
  it('should have a ul with some links', () => {
    expect(wrapper.find('ul').children()).toHaveLength(5);
  });
});