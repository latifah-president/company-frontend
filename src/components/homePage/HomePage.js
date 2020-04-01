import React from 'react';
import Contact from './Contact/Contact';
import Mission from './Mission/ourmission';
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