import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../App';

import { shallow } from '../../enzyme';

it('renders without crashing', () => {
  shallow(<App />);
});

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
// So my rule of thumb for when you use these are to default to shallow.

// Shallow is going to accommodate the majority of the test cases that we

// wanna test against.

// If you have a staple component and you wanna test life cycle events, use mount.

// If you need to test a component that gets rendered on the server, or

// you have a component that just returns HTML, or, meaning,

// there's no nested components in it, you can use the render function.
