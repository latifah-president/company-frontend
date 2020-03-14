import React from 'react';
import Aux from './../../HOC/Aux';
import SocialMediaIcon from './../../components/Icons/SocialMedia';
import SEO from './../../components/Icons/SocialMedia';
import {
    Header,
    HeaderImage,
    ContentArea,
    LightText, 
    DarkTitle,
    ThreeColumnGrid,
    LightOverlay
} from './../../Global_Styles/global-styles';

const Growth = () => {
    return (
        <Aux>
             <Header >
                <LightOverlay></LightOverlay>
                        <HeaderImage src={require('./../../assets/Views/Growth/PlantGrowthSmall.jpg')} alt='About Us'/>
            </Header>
            <DarkTitle>
                    How We Can Help You Grow
                </DarkTitle>
            <ThreeColumnGrid style={{margin: '0 auto'}}>
            
                <ContentArea style={{ textAlign:'center', }}>
                <SocialMediaIcon/>
                    <LightText>Social Media Marketing</LightText>
                </ContentArea>
                <ContentArea style={{textAlign:'center'}}>
                    <SEO/>
                    <LightText>Search Engine Optomization</LightText>
                </ContentArea>
            </ThreeColumnGrid>
        </Aux>
    )
};

export default Growth