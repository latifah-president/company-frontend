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
                     <DarkTitle>Our Services</DarkTitle>
                </header>
                 <LightText small>
                      We’re a one stop shop for all your creation needs.  
                      Explore how our innovative approach results in meaningful experiences for our clients. 
                      We cater our services to your needs because you’re a big deal and know it. 
                      Click below and explore what we can do for you.
                </LightText>
             <Container icon >

                <NavLink to='/services' className='link' >
                  <CardContent icon  className='grow'>
                  <ScrollAnimation animateIn='slideInUp' style={{height: '0 !important'}}>
                          <WebIcon />
                      <LightText>
                        Web Development
                      </LightText>
                      </ScrollAnimation>
                  </CardContent>
                </NavLink>

                <NavLink to='/services' className='link'>
                  <CardContent  icon >
                      <ScrollAnimation animateIn='slideInUp'>
                      <SpecialProjectsIcon/>
                      <LightText>
                          Special Projects
                      </LightText>
                      </ScrollAnimation>
                    
                  </CardContent>
                </NavLink>

                <NavLink to='/services' className='link'>
                  <CardContent icon >
                    <ScrollAnimation animateIn='slideInUp'>
                        <MobileIcon/>
                        <LightText>
                            Mobile Development
                        </LightText>
                    </ScrollAnimation>
                  </CardContent>
                </NavLink>

                <NavLink to='/services' className='link'>
                  <CardContent icon >
                    <ScrollAnimation animateIn='slideInUp' >
                        <MarketingIcon/>
                        <LightText>
                          Marketing
                        </LightText>
                    </ScrollAnimation>
                  </CardContent>
                </NavLink>

                <NavLink  to='/services' className='link small'>
                  <CardContent icon >
                    <ScrollAnimation animateIn='slideInUp'>
                        <BusinessDevIcon/>
                        <LightText>
                          Business Development
                        </LightText>
                    </ScrollAnimation>
                  </CardContent>
                </NavLink>

             </Container>
        {/* <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div>
        </Slider> */}
      </Wrapper>        
    )
};

export default Services