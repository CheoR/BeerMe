import React from 'react';

import Boxes from './Boxes/Boxes';
import Info from './Info/Info';
import Portfolio from './Portfolio/Portfolio';
import ShowCase from './ShowCase/ShowCase';

const Home = () => (
    <div className="page-home">
        <ShowCase />
        <Boxes />
        <Info />
        <Portfolio />
    </div>
);

export default Home;