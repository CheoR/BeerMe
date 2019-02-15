import React from 'react';

import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Header = () => (
    <header className='header'>
        <div className="header__logo">
            <span>BeerMe</span>
            <FontAwesomeIcon className='beer-icon' icon={'beer'} size="5x" />
        </div>
        <nav className='header__nav'>
            <ul>
                <li><NavLink className="nav-link" exact to="/">Home</NavLink></li>
                <li><NavLink className="nav-link" to="/about">About</NavLink></li>
                <li><NavLink className="nav-link" to="/beers">Beers</NavLink></li>
                <li><NavLink className="nav-link" to="/users">Users</NavLink></li>
                <li><NavLink className="nav-link" to="/SignUp">Sign Up</NavLink></li>
            </ul>
        </nav>
    </header>
);

export default Header;
