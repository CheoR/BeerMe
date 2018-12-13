import React from 'react';

import { shallow } from '../../enzyme';

import Beers from '../Beers';


describe('<Beers />', () => {
  const wrapper = shallow(<Beers />);

  it('should ___', () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')  // 'https://github.com/CheoR/BeerMe/tree/frontend_tests/db.json/beers')
      .then(response => response.json())
      .then(data => {
        console.log("=============== FETCH START ====================");
        console.log(data);
        console.log("=============== FETCH END ====================");
    });

    console.log("=============== FEFILLER ====================");
    console.log("=============== FILLER ====================");

    expect(true).toBe(true);
  });
});