import React from 'react';
import Aux from '../../HOC/Aux';
import './../../App.css';

import {
    Header, 
    ColoredHeader,
    WhiteTitle,
    HeaderText,
    HeaderTextMobile, 
    Wrapper, 
    HeaderImage, 
    Container, 
    DarkTitle, 
    LightText, 
} from '../../Global_Styles/global-styles';
import {AboutTitle, AboutContainer, AboutContent, AboutNumber, AboutText, AboutImage, ImageContainer} from './about-styles';

const About = () => {
    return (
        <Aux>
            <Header >
                <HeaderImage src={require('./../../assets/Views/About/group-of-people-near-wall-2422290.jpg')} alt='About Us'/>
                <div className='box' style={{backgroundColor: '#4BBF6B', opacity: '98%'}}>
                    <ColoredHeader>
                    <WhiteTitle>ABOUT US</WhiteTitle>
                    <HeaderText>
                        Cloud5 was created with the idea that innovative and creative thinkers will change the game. 
                        We have helped clients build businesses and the experiences that power them.
                    </HeaderText>
                    <HeaderTextMobile>
                        Cloud5 was created with the idea that innovative and creative thinkers will change the game.  
                        We have helped clients build businesses and the experiences that power them.
                    </HeaderTextMobile>
                    </ColoredHeader>
                </div>
            </Header>
                <Wrapper column>
                   <Container column>
                   <header>
                            <DarkTitle>OUR MANIFESTO</DarkTitle>
                        </header>
                        <LightText left>
                            Since the beginning we have been focused on finding the answer to every client’s question, 
                            “How can I turn my great idea into a business that makes money?” Cloud5 is no ordinary development agency. 
                            We threw the blue print out the window to create a company that brings the passion and motivation back into building a business. 
                            We have helped over 300 clients build their dreams into a reality, so the only question left is, how can we help you create your future?                       
                        </LightText>
                   </Container>

                    <Container column style={{backgroundColor: '#F0FFF4', width: '100%', padding: '3rem'}}>
                        <AboutTitle>A FEW CONTRIBUTING FACTORS TO OUR SUCCESS</AboutTitle>
                        <AboutContainer>
                            <AboutContent column>
                                <AboutNumber>32</AboutNumber>
                                <AboutText>
                                     Group Outings
                                </AboutText>
                            </AboutContent>
                    
                            <AboutContent column>
                                <AboutNumber>108</AboutNumber>
                                <AboutText>
                                    Cups of Coffee Consumed
                                </AboutText>
                            </AboutContent>

                            <AboutContent column>
                                <AboutNumber>593</AboutNumber>
                                <AboutText>
                                    Team High-Fives
                                </AboutText>
                            </AboutContent>

                            <AboutContent column>
                                <AboutNumber>71</AboutNumber>
                                <AboutText>
                                    Goals Met
                                </AboutText>
                            </AboutContent>
                            </AboutContainer>
                    </Container>
                    <Container column>
                        <AboutTitle left>MEET OUR INNOVATIVE THINKERS</AboutTitle>
                        <ImageContainer >

                            <AboutContent >
                                <AboutImage src={require('./../../assets/Views/About/Dailan-Cooper-img.jpg')} alt='dailan cooper ceo'/>
                                <h4 className='name'>Dailan Cooper</h4>
                                <h5 className='position'>Chief Executive Officer</h5>
                            </AboutContent>

                            <AboutContent >
                                <AboutImage src={require('./../../assets/Views/About/Latifah.jpg')} alt='latifah president cto'/>
                                <h4 className='name'>Latifah President</h4>
                                <h5 className='position'>Chief Technology Officer</h5>
                            </AboutContent>

                            <AboutContent >
                                <AboutImage src={require('./../../assets/Views/About/PicOfMe-1.jpg')} alt='gary white cso'/>
                                <h4 className='name'>Gary White</h4>
                                <h5 className='position'>Chief Sales Officer</h5>
                            </AboutContent>

                            <AboutContent >
                                <AboutImage src={require('./../../assets/Views/About/Jo_Anne_Gibson.jpg')} alt='Jo Anne Gibson image'/>
                                <h4 className='name'>Jo Anne Gibson</h4>
                                <h5 className='position'>Director of Corporate Relations</h5>
                            </AboutContent>

                            <AboutContent>
                                <AboutImage src={require('./../../assets/Views/About/jodi.jpg')} alt='Jodi Mixon '/>
                                <h4 className='name'>Jodi Mixon</h4>
                                <h5 className='position'>Director of Marketing</h5>
                            </AboutContent>

                        </ImageContainer>
                    </Container>                  
                </Wrapper>
        </Aux>
    )
}

export default About;

