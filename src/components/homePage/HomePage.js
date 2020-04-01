import React from 'react';
import { Element, animateScroll as scroll } from "react-scroll";
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
            {/* <Element> */}
                <OurClients />
            {/* </Element> */}
            
            {/* <Element name='development'>
             <Development/>

            </Element> */}
            {/* <Element name='marketing'>
            <Marketing/>

            </Element> */}
            <Contact/>
        </MainContent>
    )
};

export default HomePage;