import React from 'react';

import { shallow, render, mount } from '../../enzyme';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import Footer from '../Footer';
library.add(fab);

describe('<Footer />', () => {
  const wrapper = mount(<Footer />);
  const icons = ['facebook-square', 'github-square', 'linkedin', 'codepen', 'free-code-camp'];

  it('should have a footer class', () => {
    expect(wrapper.find('footer').hasClass('footer')).toBe(true);
  });

  it('should have 5 different icons', () => {
    const iconsFound = wrapper.find(FontAwesomeIcon).children();
    //  .filterWhere(node => icons.includes(node.prop('data-icon')));

    expect(iconsFound.everyWhere((icon) => icons.includes(icon.prop('data-icon')))).toEqual(true);
  });
});