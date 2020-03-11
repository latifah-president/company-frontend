import React from 'react';
import HomePage from './../homePage/HomePage';
import SplashScreen from './../slashScreen/SplashScreen';
import { LandingPageWrapper, ContentSection } from './LandingPage-Styles';

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