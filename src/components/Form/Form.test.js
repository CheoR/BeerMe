import React from 'react';
import { shallow } from "../../enzyme";

import Form from './Form';

describe('<Form />', () => {
  it('renders', () => {
    // expect(true).toBe(true);
    const wrapper = shallow(<Form />);
    console.log(wrapper.debug());
    console.log('==============');
    console.log('==============');
    console.log('==============');
    expect(wrapper.exists()).toBe(true);
  }); // it
}); // describe