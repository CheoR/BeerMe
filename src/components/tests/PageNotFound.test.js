import React from 'react';
import { shallow } from '../../enzyme';

import PageNotFound from '../PageNotFound';

describe('<PageNotFound />', () => {
  it('renders page not found message', () => {
    const component = shallow(<PageNotFound />);
    const title = <h1>Page Not Found</h1>;

    expect(component.contains(title)).toBe(true);
  });
});