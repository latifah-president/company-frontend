import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
// import './animate.css';
import 'animate.css/animate.min.css';
import {Wrapper, ContentArea, DarkTitle, LightText, Graphic, fly } from '../../../Global_Styles/global-styles';

const OurMission = () => {
    return (
        <Wrapper>
            <ContentArea horizontal>
                <ContentArea >
                    <header>
                        <DarkTitle>Our Mission</DarkTitle>
                    </header>
                    <LightText>
                        We strive to insure that we deliver the best service possible to our clients. 
                        We are a one stop shop for everything you need to conceptualize, build, market, and launch your ideas into the market place. 
                        Offering a first class experience to anyone that chooses to work with us.
                    </LightText>
                </ContentArea>
                
                <ContentArea>
                <ScrollAnimation animateIn='slideInUp'>
                    <Graphic src={'https://cdn4.iconfinder.com/data/icons/whsr-january-flaticon-set/512/rocket.png'} alt='Rocket Launch'/>

                    </ScrollAnimation>
                </ContentArea>
            
            </ContentArea>
           
        </Wrapper>
        
    )
}

export default OurMission;