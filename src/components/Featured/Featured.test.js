import React from 'react';

import { shallow } from '../../enzyme';

import Featured from './Featured';

describe('<Featured />', () => {
  const featured = "BuddyBeer";
  const title = <h1>{ featured }</h1>;
  const wrapper = shallow(<Featured match={{params: {name: featured}}} />);

  it('should have the featured name in the title', () => {
    expect(wrapper.containsMatchingElement(title)).toEqual(true);
  });
    
  it('should have at least one paragraph with text', () => {
    expect(wrapper.find('p').first().text()).toMatch(/\w*/);
  });
});