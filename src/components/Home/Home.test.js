import React from 'react';

import { shallow, render } from '../../enzyme';

import Home from '../Home';

describe('<Home /> ', () => {
  const wrapper = shallow(<Home />);
  const componentNames = ['ShowCase', 'Boxes', 'Info', 'Portfolio'];
  const children = wrapper.children();


  it('should have container class', () => {
    expect(wrapper.find('.container').exists()).toEqual(true);
  });

  it('should have 4 components', () => {
    expect(children).toHaveLength(4);
  });

  it(`should have one of these component names: ${componentNames}`, () => {
    expect(children.everyWhere((component) => componentNames.includes(component.name()))).toEqual(true);
  });

});