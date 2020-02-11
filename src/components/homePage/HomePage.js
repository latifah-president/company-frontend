import React from 'react';
import Services from './services/Services';
import Advantages from './advantages/Advantages';
import FeaturedClients from './featuredClients/FeaturedClients';
import Mission from './mission/ourmission';
import {MainContent, } from './homepage-styles';

const HomePage = () => {
    return (
        <MainContent>
             <Mission/>
            <Services/>
            <Advantages/>
            <FeaturedClients/>
           
        </MainContent>
    )
};

export default HomePage;