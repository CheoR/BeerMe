import React from 'react';
import { shallow } from '../../enzyme';

import About from '../About';

describe('<About />', () =>{
  const wrapper = shallow(<About />);
  const about = <header><h1>About</h1></header>;

  it('should render correctly with no props', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a header', () => {
    expect(wrapper.contains(about)).toEqual(true);
  });

  it('should have at least one paragraph', () => {
    expect(wrapper.find('p').exists()).toEqual(true);
  });

  it('should have at least one paragraph with text', () => {
    expect(wrapper.find('p').first().text()).toMatch(/\w*/);
  });
});
