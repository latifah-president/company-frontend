import React, { Component, } from 'react';
import { Route, } from 'react-router-dom';
import Nav from './components/nav/Nav';
import LandingPage from './components/landingPage/LandingPage';
import HomePage from './components/homePage/HomePage';
import './App.css';

class App extends Component  {
  render () {
    return (
    <div className="App">
      <Nav/>
      <Route 
        exact path='/' 
        render={props => 
        <LandingPage 
          {...props}
          />
        }
      />
     </div>
  )};
}

export default App;
