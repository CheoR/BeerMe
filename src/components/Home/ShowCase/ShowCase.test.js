import React from 'react';

import { shallow } from '../../../enzyme';

import ShowCase from './ShowCase';

describe('<ShowCase />', () => {
  const wrapper = shallow(<ShowCase />);

  it('should have a section with class name top-container', () => {
    expect(wrapper.find('section').hasClass('top-container')).toBe(true);
  });

  it('should have three buttons', () => {
    expect(wrapper.find('.btn')).toHaveLength(3);
  });

  it('should have two buttons with top-box class', () => {
    expect(wrapper.find('.top-box')).toHaveLength(2);
  });

  it('should have h4 headers for [Pro] membership', () => {
    expect(wrapper.find('h4')).toHaveLength(2);
  });

  it('should have a title of beer and some text', () => {
    const children = wrapper.find('header');
    expect(children.find('h1').text()).toBe('Beer');
    expect(children.find('p').text()).toMatch(/\w*/);
  });

});