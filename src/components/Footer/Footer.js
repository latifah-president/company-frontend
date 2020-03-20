import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTwitter, faLinkedinIn, faFacebookF, faInstagram} from '@fortawesome/fontawesome-free-brands';

import {
    SmallCardDes,
    Wrapper,
} from './../../Global_Styles/global-styles';
import { FooterWrapper, FooterCard, NewsLetterButton, } from './footer-styles';
import {FormInput} from './../../container/Forms/form-styles';

const Footer = () => {
    return(
        <Wrapper>
            <FooterWrapper>
                <FooterCard icons>
                    <FontAwesomeIcon icon={faLinkedinIn} className='icon'/>
                    <FontAwesomeIcon icon={faFacebookF} className='icon'/>
                    <FontAwesomeIcon icon={faTwitter} className='icon'/>
                    <FontAwesomeIcon icon={faInstagram} className='icon'/>
                </FooterCard>
                <FooterCard center>
                    <form >
                        <FormInput name='email' id='email'  type='text' placeholder='Subscribe to our newsletter'/>
                        <NewsLetterButton type='submit' value='Join' name='subscribe' className='sub'/>
                    </form>
                    
                </FooterCard>

                <FooterCard center column  >
                    {/* <div style={{display: 'flex', flexDirection: 'column', lineHeight: '.5px'}}>  */}
                    <a href='mailto:support@cloud5hub.io'>
                        <SmallCardDes >
                            support@cloud5hub.io
                        </SmallCardDes>
                    </a>
                    <address>
                        <SmallCardDes style={{fontSize: '1rem'}}>
                            701 Brazos St. <br/>
                            Austin, TX 78701
                        </SmallCardDes>
                        
                    </address>
                    {/* </div> */}
                 
                </FooterCard>
            </FooterWrapper>
            </Wrapper>
    )
};

export default Footer;