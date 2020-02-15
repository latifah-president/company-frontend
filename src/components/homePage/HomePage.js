import React from 'react';
import Services from './Services/Services';
import Advantages from './Advantages/Advantages.js';
import FeaturedClients from './FeaturedClients/FeaturedClients.js';
import SpecialProjects from './SpecialProjects/SpecialProjects.js';
import Mission from './Mission/ourmission';
import Different from './Different/Different';
import {MainContent, } from './homepage-styles';

const HomePage = () => {
    return (
        <MainContent>
             <Mission/>
            <Services/>
            {/* <Advantages/> */}
            <Different/>
            <FeaturedClients/>
            <SpecialProjects/>
        </MainContent>
    )
};

export default HomePage;