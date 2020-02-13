import React from 'react';
import Services from './Services/Services.js';
import Advantages from './Advantages/Advantages.js';
import FeaturedClients from './FeaturedClients/FeaturedClients.js';
import SpecialProjects from './SpecialProjects/SpecialProjects.js';
import Mission from './Mission/Ourmission';
import {MainContent, } from './homepage-styles';

const HomePage = () => {
    return (
        <MainContent>
             <Mission/>
            <Services/>
            <Advantages/>
            <FeaturedClients/>
            <SpecialProjects/>
        </MainContent>
    )
};

export default HomePage;