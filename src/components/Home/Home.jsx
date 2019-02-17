import React from 'react';

import Boxes from './Boxes';
import Info from './Info';
import Portfolio from './Portfolio';
import ShowCase from './ShowCase';

const Home = () => (
    <div className="page-home">
        <ShowCase />
        <Boxes />
        <Info />
        <Portfolio />
    </div>
);

export default Home;