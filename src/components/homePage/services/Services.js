import React from 'react';
import {NavLink } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import Slider from 'react-slick';
import WebIcon from './../../Icons/Web';
import MobileIcon from './../../Icons/Mobile';
import SpecialProjectsIcon from './../../Icons/SpecialProjects';
import MarketingIcon from './../../Icons/Marketing';
import BusinessDevIcon from './../../Icons/BussinessDev';
import {Wrapper, Container, ThreeColumnGrid, LightText, ContentArea, DarkTitle, SmallImageCard, CardArea, CardContent, SmallCardDes, CardImage} from './../../../Global_Styles/global-styles';

const Services = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
   
    return (
        <Wrapper column blue>
                <header>
                     <DarkTitle style={{width: '100%'}}>Our Services</DarkTitle>
                </header>
                 <LightText small>
                      We’re a one stop shop for all your creation needs.  
                      Explore how our innovative approach results in meaningful experiences for our clients. 
                      We cater our services to your needs because you’re a big deal and know it. 
                      Click below and explore what we can do for you.
                </LightText>
                <Container icon>
                  <CardContent icon shrink>
                  {/* <ScrollAnimation animateIn='slideInUp'> */}
                  <WebIcon/>
                      <NavLink to='/services' className='link' >
                          Web <br/> Development
                    </NavLink>
                  {/* </ScrollAnimation> */}
                  </CardContent>

                    <CardContent icon shrink>
                        <MobileIcon/>
                        <NavLink to='/services' className='link' >
                          App <br/> Development
                      </NavLink>
                    </CardContent>
                 
                 <CardContent icon shrink>
                    <MarketingIcon/>
                    <NavLink to='/services' className='link' >
                      Digital <br/> Marketing
                    </NavLink>
                 </CardContent>
                    
                    <CardContent icon shrink>
                    <BusinessDevIcon/>

                    <NavLink to='/services' className='link' >
                    Business Development
                    </NavLink>
                    </CardContent>
                    </Container>
            
      </Wrapper>        
    )
};

export default Services