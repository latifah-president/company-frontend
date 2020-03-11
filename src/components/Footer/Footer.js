import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt, faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {
    SmallWhiteTitle, 
    SmallWhiteText,
    Wrapper,
} from './../../Global_Styles/global-styles';
import { FooterWrapper, FooterCard, ContactUs, AddressContent, FooterLinks, PhoneNumber, NewsLetterForm, NewsLetter, } from './footer-styles';
import {ContactFormLabel, } from './../../container/Forms/form-styles';

const Footer = () => {
    return(
        <Wrapper>
            <FooterWrapper>
                    <FooterCard contact >
                    <SmallWhiteTitle>Contact Us</SmallWhiteTitle>
                    <ContactUs>
                        <AddressContent>
                            <a href="mailto:support@cloud5hub.io">
                            <SmallWhiteText  style={{lineHeight: '1.3rem', textAlign: 'left'}}>                            
                             <FontAwesomeIcon  icon={faEnvelope} className='icon'/>                
                             support@cloud5hub.io                           
                              </SmallWhiteText>
                            </a>
                        </AddressContent>
                        </ContactUs>  
                    
                        <ContactUs>
                        <AddressContent>
                            <SmallWhiteText  style={{lineHeight: '1.5rem', textAlign: 'left'}}>                            
                             <FontAwesomeIcon icon={faMapMarkerAlt} className='icon'/>                
                                Visit Us At The Office
                            </SmallWhiteText>
                                <address style={{fontStyle: 'normal', marginLeft: '2rem'}}>
                                <SmallWhiteText style={{lineHeight: '1.5rem', textAlign: 'left'}}>

                                701 Brazos St. <br/> Austin, TX 78701 <br/>
                                </SmallWhiteText>
                                </address>
                           
                            <SmallWhiteText style={{lineHeight: '1.5rem', textAlign: 'left',  marginLeft: '1.7rem'}}> Mon-Fri, 9:30-4:00</SmallWhiteText>
                        </AddressContent>
                        </ContactUs>      

                        <ContactUs>
                        <AddressContent>
                        <SmallWhiteText  style={{lineHeight: '1.5rem', textAlign: 'left'}}>                            
                             <FontAwesomeIcon icon={faPhone} className='icon' style={{fontSize: '1.2rem'}}/>                
                             Give Us A Ring
                        </SmallWhiteText>
                            <SmallWhiteText style={{lineHeight: '1.5rem', textAlign: 'left'}}>
                            <PhoneNumber href='tel:+1512-588-5554'>(512) 588-5554</PhoneNumber>
                            </SmallWhiteText>
                        </AddressContent>
                        </ContactUs>  
                    </FooterCard>

                    <FooterCard>
                        <SmallWhiteTitle>About</SmallWhiteTitle>
                        <FooterLinks>

                        <NavLink className='link' activeClassName='activeRoute' exact to='/'>
                            <SmallWhiteText>Home</SmallWhiteText>
                        </NavLink>
                        
                        <NavLink className='link' activeClassName='activeRoute' to='/portfolio'>
                            <SmallWhiteText>Portfolio</SmallWhiteText>
                        </NavLink>
                        <NavLink className='link' activeClassName='activeRoute' to='/careers'>
                            <SmallWhiteText>Careers</SmallWhiteText>
                        </NavLink>
                        <NavLink className='link' activeClassName='activeRoute' to='/about'>
                            <SmallWhiteText>About Us</SmallWhiteText>
                        </NavLink>
                        </FooterLinks>
                    </FooterCard>

                    <FooterCard>
                        <SmallWhiteTitle>Services</SmallWhiteTitle>
                        <FooterLinks>
                        <NavLink className='link' activeClassName='activeRoute' to='/marketing'>
                            <SmallWhiteText>Marketing</SmallWhiteText>
                        </NavLink>
                        <NavLink className='link' activeClassName='activeRoute' to='/development'>
                            <SmallWhiteText>Development</SmallWhiteText>
                        </NavLink>
                        <NavLink className='link' activeClassName='activeRoute' to='/specialprojects'>
                            <SmallWhiteText>Special Projects</SmallWhiteText>
                        </NavLink>
                        </FooterLinks>
                    </FooterCard>
                    <FooterCard>
                        <SmallWhiteTitle>Subscribe to Newsletter</SmallWhiteTitle>
                        <SmallWhiteText small>
                            Join our newsletter to receive monthly updates about Cloud5 and to get 
                            special deals and promotions on all Cloud5 services.
                        </SmallWhiteText>
                        <NewsLetterForm>
              <ContactFormLabel htmlFor='email' style={{color: 'white'}}></ContactFormLabel>
                  <NewsLetter name='email' id='email'  type='email' placeholder='Your Email'  />
                  <button type='submit'>
                    <FontAwesomeIcon icon={faEnvelope} className='icon'/>
                  </button>
                        </NewsLetterForm>
                    </FooterCard>
            </FooterWrapper>
            </Wrapper>
    )
};

export default Footer;