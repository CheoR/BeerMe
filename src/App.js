import React, { Component } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBeer, faBars, faChartPie, faGlobe, faCog, faUsers} from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import { BrowserRouter, Switch, Route } from 'react-router-dom';


import logo from './img/logo.svg';
import './App.scss';

import About        from "./components/About/About";
import Beers        from "./components/Beers/Beers";
import Featured     from './components/Featured/Featured';
import Footer       from "./components/Footer/Footer";
import CustomForm   from './components/Form/Form';
import Header       from './components/Header/Header';
import Home         from "./components/Home/Home";
import PageNotFound from "./components/PageNotFound/PageNotFound";

import UserPage     from './components/UserPage/UserPage';
import Users        from "./components/Users/Users";

library.add(faBeer, faBars);
library.add(faChartPie, faGlobe, faCog, faUsers);
library.add(fab); {/* faFacebookSquare */}

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Header />
      <Switch>
        <Route path="/about"       component={About} />
        <Route exact path="/beers" component={Beers} />
        <Route path="/beers/:name" component={Featured} />
        <Route path="/SignUp"      component={CustomForm} />
        <Route exact path="/users" component={Users} />
        <Route path="/users/:name" component={Featured} />
        <Route path="/user/:name"  component={UserPage} />
        <Route exact path="/"      component={Home} />
        <Route                     component={PageNotFound} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
