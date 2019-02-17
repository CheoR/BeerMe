import React from 'react';

import { shallow } from '../../enzyme';

import UserPage from './UserPage';

describe('<UserPage />', () => {
  const user = "BuddyBeer";
  const title = <h1>Hello { user }</h1>;
  const wrapper = shallow(<UserPage match={{params: {name: user}}} />);

  it('should have the user name in the title', () => {
    expect(wrapper.containsMatchingElement(title)).toEqual(true);
  });
    
  it('should have at least one paragraph with text', () => {
    expect(wrapper.find('p').first().text()).toMatch(/\w*/);
  });
});