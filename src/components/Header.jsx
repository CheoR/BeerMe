import React from 'react';

import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Header = () => (
    <header className='header'>
        <div className="logo"><FontAwesomeIcon className='beer-icon' icon={'beer'} size="5x" /><span>BeerMe</span></div>
        <nav className='main-nav'>
            <ul>
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/beers">Beers</NavLink></li>
                <li><NavLink to="/users">Users</NavLink></li>
                <li><NavLink to="/SignUp">Sign Up</NavLink></li>
            </ul>
        </nav>
    </header>
);

export default Header;
