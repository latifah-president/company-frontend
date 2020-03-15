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
                         className='link'
                    >
                             Marketing
                    </Link>
                </li>
                <li>
                    <Link
                         to='design' 
                         spy={true} 
                         smooth={true} 
                         duration={500}
                         className='link'
                    >
                        Design
                    </Link>
                </li>
                <li>
                    <Link
                         to='businessdevelopment' 
                         spy={true} 
                         smooth={true} 
                         duration={500}
                         className='link'
                    >
                        Business Development
                    </Link>
                </li>
            </ServiceLink>
            <DarkTitle>We're A Full Service Digital Agency <br/> That Builds Dreams</DarkTitle>
            <LightText small>
                Cloud5 has been successful because of our affordability, creative freethinkers, 
                youthful excitement and the drive to overachieve 
                while beating the deadline! <a href='/about' style={{color: '#76A5AF'}}>Learn more</a>
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