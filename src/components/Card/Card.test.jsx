import React from 'react';
import { shallow } from '../../enzyme';

import Card from './Card';

describe("<Card />", () => {
  const obj = {
    id: 100,
    name: 'Hundreth obj'
  };

  it("returns a Card object", () => {
    const wrapper = shallow(<Card obj={obj} />);
    expect(wrapper.find('h2').contains(obj.id)).toBe(true);
  });
});