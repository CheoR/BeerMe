import React from 'react';

import { shallow } from '../../enzyme';

import Info from '../Info';
import drunkImg from "../../img/drunk.jpeg";

describe("<Info />", () => {
  const wrapper = shallow(<Info />);

  it('renders an image', () => {
    expect(wrapper.find('img').prop("src")).toEqual(drunkImg);
  });
  
  it('should have at least one paragraph', () => {
    expect(wrapper.find('p').exists()).toEqual(true);
  });

  it('should have a link with className "btn" ', () => {
    expect(wrapper.find('a').hasClass('btn')).toEqual(true);
  });
});