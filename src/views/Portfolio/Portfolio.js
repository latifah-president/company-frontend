import React from 'react';
import LazyLoad from 'react-lazy-load';
import Aux from './../../HOC/Aux';
import TabComponent from './../../container/Portfolio/PortfolioTabs';
import {
    Wrapper, 
    ImageHeader, 
    Content, DarkTitle, 
    ThreeByThreeSec, 
    Card, 
    CardImage,
    CardContent,
    SmallSubTitle,
    SmallCardDes,
    LightText,
    HeaderImage,
    OverlayLight,
} from './../../global-styles';


const Portfolio = () => {
    return (
        <Aux>
            <ImageHeader >
                <OverlayLight></OverlayLight>
                <LazyLoad  
                    debounce={false}
                    offsetVertical={500}>
                        <HeaderImage src={require('./../../assets/portfolio_header.jpg')} alt='Our Portfolio'/>
                </LazyLoad>
            </ImageHeader>
                <Wrapper>
                    <Content>
                        <header>
                            <DarkTitle>Portfolio</DarkTitle>
                        </header> 
                        <LightText >
                            Cloud5 take pride in the products that we build. 
                            We offer unlimited revisions in most cases because we value 
                            our client’s dreams and we want to make sure the quality of 
                            our work is presented successfully across the board.
                        </LightText>                    
                    </Content>

                    <Content>
                        <header>
                            <DarkTitle>Web Development</DarkTitle>
                        </header>
                        <LightText>
                        At some Digital agencies, website development is a second thought. At Cloud5, we take pride in building websites that look good and perform even better. We turn your ideas and vision into reality. Our job is to insure the highest quality product, and a seamless design that will showcase your company brand the way it deserves to be showcased.
                        </LightText>
                    
                    </Content>
                    <TabComponent/>
                </Wrapper>
        </Aux>
    )
}

export default Portfolio;

