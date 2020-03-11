import React from 'react';
import FeaturedClients from './FeaturedClients/FeaturedClients.js';
import SpecialProjects from './SpecialProjects/SpecialProjects.js';
import Mission from './Mission/ourmission';
import Different from './Different/Different';
import Services from './Services/Services';
import {MainContent, } from './homepage-styles';

const HomePage = () => {
    return (
        <MainContent>
             <Mission/>
            <Services/>
            <Different/>
            <FeaturedClients/>
            <SpecialProjects/>
        </MainContent>
    )
};

export default HomePage;