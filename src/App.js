import React, { Component } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBeer, faBars, faChartPie, faGlobe, faCog, faUsers} from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import { BrowserRouter, Switch, Route } from 'react-router-dom';


import logo from './img/logo.svg';
import './App.scss';

import About from "./components/About";
import Beers from "./components/Beers";
import Featured from './components/Featured';
import Footer from "./components/Footer";
import CustomForm from './components/Form';
import Header from './components/Header';
import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound";

import UserPage from './components/UserPage';
import Users from "./components/Users";





library.add(faBeer, faBars);
library.add(faChartPie, faGlobe, faCog, faUsers);
library.add(fab); {/* faFacebookSquare */}

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Header />
      <Switch>
        <Route path="/about" component={About} />
        <Route exact path="/beers" component={Beers} />
        <Route path="/beers/:name" component={Featured} />
        <Route path="/SignUp" component={CustomForm} />
        <Route exact path="/users" component={Users} />
        <Route path="/users/:name" component={Featured} />
        <Route path="/user/:name" component={UserPage} />
        <Route exact path="/" component={Home} />
        <Route component={PageNotFound} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
  );

{/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
*/}
export default App;
