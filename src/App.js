import React, { Component, } from 'react';
import { Route, Switch, } from 'react-router-dom';
import { Element, animateScroll as scroll } from "react-scroll";
import Nav from './components/nav/Nav';
import Footer from './components/Footer/Footer';
import LandingPage from './components/landingPage/LandingPage';
import AboutPage from './views/About/About';
import PortfolioPage from './views/Portfolio/Portfolio';
import SpecialProjectsPage from './views/Special Projects/SpecialProjects';
import MarketingPage from './views/Marketing/Marketing';
import ServicesPage  from './views/Services/Services';
import ContactPage from './views/Contact/Contact';
import CareersPage from './views/Careers/Careers';
import AgentPage from './views/Careers/Sections/Agent/Agent';
import SMMPage from './views/Careers/Sections/SMM/SMM';
import SeoManagerPage from './views/Careers/Sections/SEOManager/SeoManager';
import SalesRepPage from './views/Careers/Sections/SalesRep/SalesRep';
import AssistantPage from './views/Careers/Sections/Assistant/Assistant';
import GrowthPage from './views/Growth/Growth';
import PageNotFound from './views/404/404';
import './App.css';

//Contaners  folder will hold statefull data
//component are dumb component used for presentation purposes 
//children is anything passed between the opening and closing tags
class App extends Component  {
  render () {
    return (
    <div className="App">
      {/* <Switch> */}
      <Nav/>
      
      <Switch>
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
         <Route 
          exact path='/services' 
          render={props => 
          <ServicesPage 
            {...props}
            />
          }
        />
           <Route 
          exact path='/careers' 
          render={props => 
          <CareersPage 
            {...props}
            />
          }
        />
           <Route 
          exact path='/careers/agent' 
          render={props => 
          <AgentPage 
            {...props}
            />
          }
        />
           <Route 
          exact path='/careers/smm' 
          render={props => 
          <SMMPage 
            {...props}
            />
          }
        />
           <Route 
          exact path='/careers/seo' 
          render={props => 
          <SeoManagerPage 
            {...props}
            />
          }
        />
           <Route 
          exact path='/careers/salesrep' 
          render={props => 
          <SalesRepPage 
            {...props}
            />
          }
        />
          <Route 
          exact path='/careers/assistant' 
          render={props => 
          <AssistantPage 
            {...props}
            />
          }
        />
           <Route 
          exact path='/contact' 
          render={props => 
          <ContactPage 
            {...props}
            />
          }
        />
           <Route 
          exact path='/growth' 
          render={props => 
          <GrowthPage 
            {...props}
            />
          }
        />
         <Route path='*' component={PageNotFound}/>

        </Switch>
       
        
        {/* </Switch> */}
        <Footer/>
     </div>
  )};
}

export default App;
