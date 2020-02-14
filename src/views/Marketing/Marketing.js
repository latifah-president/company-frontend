import React from 'react';
import LazyLoad from 'react-lazy-load';
import Aux from './../../HOC/Aux';
import {
    Wrapper, 
    ImageHeader, 
    Content, DarkTitle, 
    LightText,
    HeaderImage,
    OverlayLight,
    SmallDarkTitle,
    SmallSubTitle,
} from './../../global-styles';


const Marketing = () => {
    return (
        <Aux>
            <ImageHeader >
                <OverlayLight></OverlayLight>
                <LazyLoad  
                    debounce={false}
                    offsetVertical={500}>
                        <HeaderImage src={require('./../../assets/marketing-strategy.jpeg')} alt='Our Portfolio'/>
                </LazyLoad>
            </ImageHeader>
                <Wrapper>
                    <Content>
                        <header>
                            <DarkTitle>Marketing</DarkTitle>
                        </header> 
                        <LightText style={{width: '100%'}}>
                            We’re really good at working with our clients to increase 
                            their brand awareness and maximize their profitability and sales.
                        </LightText>                    
                    </Content>
                    
                    <Content>
                        <header>
                            <DarkTitle>Marketing Packages</DarkTitle>
                        </header> 
                        <LightText >
                           At Cloud5 we offer a variety of packages to fit any client's projects. 
                           Whether you're looking for Social Media Management, SEO and Keyword Ranking, or a Full Scale 
                           Marketing Campaign, we have it all!                       All of our packages are completely customizable; we work
                           with clients to build the best packages for their needs.
                        </LightText>
                        <SmallSubTitle style={{fontSize: '1.5rem'}}>
                            Social Media Packages
                        </SmallSubTitle>
                               
                    </Content>
                </Wrapper>
        </Aux>
    )
}

export default Marketing;

