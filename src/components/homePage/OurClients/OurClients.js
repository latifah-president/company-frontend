import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import {Wrapper, Container, ImageCard, LightText, DarkTitle, } from '../../../Global_Styles/global-styles';

const OurClients = () => {
    return (
            <Wrapper column>
                <DarkTitle>Our Clients</DarkTitle>
                <LightText>We let our work speak for itself! Take a look at some of the companies that trust in our process.</LightText>
                <Container large  small brands>
                    <ImageCard brand src={require('./../../../assets/Brands/precision_brand.png')}/>
                    <ImageCard brand src={require('./../../../assets/Brands/b.everly_brand.png')}/>
                    <ImageCard brand small src={require('./../../../assets/Brands/autocrit_brands.png')}/>
                    <ImageCard brand small src={require('./../../../assets/Brands/Screen Shot 2020-03-15 at 3.54.41 PM.png')}/>              
                    <ImageCard brand src={require('./../../../assets/Brands/the_quad.png')}/>
                    <ImageCard brand  src={require('./../../../assets/Brands/admiremyskin_brand.png')}/>
                    <ImageCard brand src={require('./../../../assets/Brands/ASR_brands.png')}/>
                    <ImageCard brand src={require('./../../../assets/Brands/funkmeyers_brand.png')}/>
                    <ImageCard brand src={require('./../../../assets/Brands/lb_brand.png')}/>
                </Container>
            </Wrapper>
    )
};

export default OurClients;