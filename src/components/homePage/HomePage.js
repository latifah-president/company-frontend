import React from 'react';
import Marketing from './Marketing/Marketing';
import Contact from './Contact/Contact';
import Mission from './Mission/OurMission';
import Development from './Development/Development';
import Services from './Services/Services';
import OurClients from './OurClients/OurClients';
import {MainContent, } from './homepage-styles';

const HomePage = () => {
    return (
        <MainContent>
             <Mission/>
            <Services/>
            <OurClients/>
            <Development/>
            <Marketing/>
            <Contact/>
        </MainContent>
    )
};

export default HomePage;