import React, { Component, } from 'react';
import { Route, } from 'react-router-dom';
import Nav from './components/nav/Nav';
import Layout from './components/Layout/Layout';
import LandingPage from './components/landingPage/LandingPage';
import HomePage from './components/homePage/HomePage';
import AboutPage from './views/about/About';
import './App.css';

//Contaners  folder will hold statefull data
//component are dumb component used for presentation purposes 
//children is anything passed between the opening and closing tags
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
        <Route 
          exact path='/about' 
          render={props => 
          <AboutPage 
            {...props}
            />
          }
        />
        
     </div>
  )};
}

export default App;
