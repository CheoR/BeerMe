import React from 'react';

import { shallow } from '../../../enzyme';

import Portfolio from "./Portfolio";

describe("<Portfolio />", () => {
  const wrapper = shallow(<Portfolio />);

  it('should have a portfolio class', () => {
    expect(wrapper.find('section').hasClass('portfolio')).toEqual(true);

  });

  it("should have at least one image", () => {
    expect(wrapper.find('img').some('img')).toEqual(true);

  });
});