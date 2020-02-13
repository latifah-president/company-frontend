import React from 'react';
import Services from './Services/Services';
import Advantages from './Advantages/Advantages';
import FeaturedClients from './FeaturedClients/FeaturedClients';
import SpecialProjects from './SpecialProjects/SpecialProjects';
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