import React from 'react';
import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import 'animate.css/animate.min.css';
import {Wrapper, Container, ImageCard, DarkTitle, LightText } from '../../../Global_Styles/global-styles';
import {ServiceLink, } from './../homepage-styles';

const OurMission = () => {
    return (
        <Wrapper column>
            <ServiceLink>
                <li style={{listStyle: 'none'}}>
                    <Link
                         to='development' 
                         spy={true} 
                         smooth={true} 
                         duration={500}
                         offset={-55}
                         className='link'
                    >
                        Development
                    </Link>
                </li>
                <li>
                    <Link 
                         to='marketing' 
                         spy={true} 
                         smooth={true} 
                         duration={500}
                         offset={-55}
                         className='link'
                    >
                             Marketing
                    </Link>
                </li>
                <li>
                    <Link
                         to='marketing' 
                         spy={true} 
                         smooth={true} 
                         duration={500}
                         offset={-55}
                         className='link'
                    >
                        Design
                    </Link>
                </li>
                <li>
                    <Link
                         to='marketing' 
                         offset={-55}
                         spy={true} 
                         smooth={true} 
                         duration={500}
                         className='link'
                    >
                        Business Development
                    </Link>
                </li>
            </ServiceLink>
            <DarkTitle>We're a Full-Service Digital Agency</DarkTitle>
            <LightText small>
            Whether you're looking to set up your web presence, or a marketing strategy to bring your business to the next level, 
            here at Cloud5 we help you get everything done in one place. <a href='/about' style={{color: '#76A5AF'}}>Learn more</a>
            </LightText>
            <Container>
                <ImageCard mobile src={require('./../../../assets/Mission/nesa-by-makers-IgUR1iX0mqM-unsplash.jpg')} alt='co-workers'/>
                <ImageCard mobile src={require('./../../../assets/Mission/ashley.png')} alt='team building'/>
                <ImageCard mobile src={require('./../../../assets/Mission/bantersnaps-PTRzqc_h1r4-unsplash.jpg')} alt='working together' style={{width: '35%'}}/>
            </Container>
        </Wrapper>
        
    )
}

export default OurMission;