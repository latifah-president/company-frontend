import React from 'react';
import Services from './services/Services';
import Advantages from './advantages/Advantages';
import FeaturedClients from './featuredClients/FeaturedClients';
import Mission from './mission/ourmission';
import {MainContent, } from './homepage-styles';

const HomePage = () => {
    return (
        <MainContent>
            <Services/>
            <Advantages/>
            <FeaturedClients/>
            {/* <Mission/> */}
        </MainContent>
    )
};

export default HomePage;