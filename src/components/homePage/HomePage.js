import React from 'react';
import Services from './Services/Services';
import Advantages from './Advantages/Advantages';
import FeaturedClients from './FeaturedClients/FeaturedClients';
import Mission from './Mission/ourmission';
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