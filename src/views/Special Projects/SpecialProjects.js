import React from 'react';
import LazyLoad from 'react-lazy-load';
import Aux from './../../HOC/Aux';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faTwitter, faLinkedinIn, faGithub, faFacebookF} from '@fortawesome/fontawesome-free-brands';
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


const SpecialProjects = () => {
    return (
        <Aux>
            <ImageHeader >
                <OverlayLight></OverlayLight>
                <LazyLoad  
                    debounce={false}
                    offsetVertical={500}>
                        <HeaderImage src={require('./../../assets/about_image.jpg')} alt='Special Projects'/>
                </LazyLoad>
            </ImageHeader>
                <Wrapper>
                    <Content>
                        <header>
                            <DarkTitle>Special Projects</DarkTitle>
                        </header>
                                            
                    </Content>                   
                </Wrapper>
        </Aux>
    )
}

export default SpecialProjects;

