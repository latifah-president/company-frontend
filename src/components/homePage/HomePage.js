import React from 'react';
import Services from './services/Services';
import Mission from './mission/ourmission';
import {MainContent, } from './homepage-styles';

const HomePage = () => {
    return (
        <MainContent>
            <Services/>
            {/* <Mission/> */}
        </MainContent>
    )
};

export default HomePage;