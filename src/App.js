import React, { Component, } from 'react';
import { Route, } from 'react-router-dom';
import Nav from './components/nav/Nav';
import Footer from './components/Footer/Footer';
import LandingPage from './components/landingPage/LandingPage';
import AboutPage from './views/about/About';
import PortfolioPage from './views/Portfolio/Portfolio';
import SpecialProjectsPage from './views/Special Projects/SpecialProjects';
import MarketingPage from './views/Marketing/Marketing';
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
         <Route 
          exact path='/portfolio' 
          render={props => 
          <PortfolioPage 
            {...props}
            />
          }
        />
         <Route 
          exact path='/specialprojects' 
          render={props => 
          <SpecialProjectsPage 
            {...props}
            />
          }
        />
          <Route 
          exact path='/marketing' 
          render={props => 
          <MarketingPage 
            {...props}
            />
          }
        />
        <Footer/>
     </div>
  )};
}

export default App;
