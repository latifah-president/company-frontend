import React from 'react';
import HomePage from './../homePage/HomePage';
import SplashScreen from './../../container/slashScreen/SplashScreen';
import { LandingPageWrapper, ContentSection } from './LandingPage-Styles';
import { logo } from '../../assets/cloud5-logo.png';
// import './landingpage.css';
const LandingPage = () => {
    return (
        <LandingPageWrapper>
            <SplashScreen/>
            <ContentSection>
                <HomePage/>
            </ContentSection>
        </LandingPageWrapper>
    )
}


export default LandingPage;