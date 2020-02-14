import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt, faPhone, } from '@fortawesome/free-solid-svg-icons';
import { ThreeByThreeSec, SmallWhiteTitle, SmallWhiteText, } from './../../global-styles';
import { FooterWrapper, FooterCard, ContactUs, AddressContent, FooterLinks, PhoneNumber, } from './footer-styles';

const Footer = () => {
    return(
            <FooterWrapper>
                <ThreeByThreeSec >
                    <FooterCard>
                        <SmallWhiteTitle style={{paddingBottom: '0 .4rem'}}>About</SmallWhiteTitle>
                        <SmallWhiteText style={{textAlign: 'left', lineHeight: '1.5rem', width: '90%'}}>
                            Cloud5 was created with the idea that innovative and creative thinkers will change the game. <br/>
                            We wanted to integrate the freelance market with the reach and capabilities of a corporation. <br/>
                            The success of our company is shown with the success of the clients we serve, and we don’t stop until its perfect!
                        </SmallWhiteText>
                    </FooterCard>

                    <FooterCard style={{marginTop: '1.5rem'}}>
                        {/* <SmallWhiteTitle>Contact Us</SmallWhiteTitle> */}

                        <ContactUs>
                            <FontAwesomeIcon icon={faMapMarkerAlt} className='map'/>                
                        <AddressContent>
                            <SmallWhiteText style={{textAlign: 'left', marginBottom: '.5rem', fontWeight: '550'}}>Visit Us At The Office</SmallWhiteText>
                            <SmallWhiteText style={{lineHeight: '1.5rem', textAlign: 'left'}}>
                                <address style={{fontStyle: 'normal'}}>
                                9005 Alderman Dr. <br/> Austin, TX 78747 <br/>
                                </address>
                                Mon-Fri, 9:30-4:00
                            </SmallWhiteText>
                        </AddressContent>
                        </ContactUs>      

                          <ContactUs style={{width: '73%', marginTop: '1rem'}}>
                            <FontAwesomeIcon icon={faPhone} className='map'/>                
                        <AddressContent>
                            <SmallWhiteText style={{textAlign: 'left', marginBottom: '.5rem', fontWeight: '550'}}>Give Us A Ring</SmallWhiteText>
                            <SmallWhiteText style={{lineHeight: '1.5rem', textAlign: 'left'}}>
                                <PhoneNumber href='tel:+1512-588-5554'>(512) 588-5554</PhoneNumber>
                            </SmallWhiteText>
                        </AddressContent>
                        </ContactUs>               
                    </FooterCard>

                    <FooterCard>
                        <SmallWhiteTitle>Navigation</SmallWhiteTitle>
                        <FooterLinks>

                        <NavLink className='link' activeClassName='activeRoute' exact to='/'>
                            <SmallWhiteText>Home</SmallWhiteText>
                        </NavLink>
                        <NavLink className='link' activeClassName='activeRoute' to='/services'>
                            <SmallWhiteText>Services</SmallWhiteText>
                        </NavLink>
                        <NavLink className='link' activeClassName='activeRoute' to='/specialproject'>
                            <SmallWhiteText>Special Projects</SmallWhiteText>
                        </NavLink>
                        <NavLink className='link' activeClassName='activeRoute' to='/portfolio'>
                            <SmallWhiteText>Portfolio</SmallWhiteText>
                        </NavLink>
                        <NavLink className='link' activeClassName='activeRoute' to='/careers'>
                            <SmallWhiteText>Careers</SmallWhiteText>
                        </NavLink>
                        </FooterLinks>
                    </FooterCard>
                </ThreeByThreeSec>
            </FooterWrapper>
    )
};

export default Footer;