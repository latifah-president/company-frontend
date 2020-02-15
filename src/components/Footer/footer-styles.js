import styled from 'styled-components';
import {grayGradient, } from '../../global-styles';

export const FooterWrapper = styled.footer`
    background-image: ${grayGradient};
    bottom: 0;
    right: 0;
    height: 30vh;
    z-index: 3;
    width: 100%;
    /* border: 3px solid red; */
`;

export const FooterCard = styled.section`
    display: flex;
    align-items: center;
    width: 30%;
    flex-direction: column;
    /* border: 1px solid pink; */
`;

export const ContactUs = styled.article`
    /* border: 1px solid red; */
    display: flex;
    text-align: center;
    margin: 0;
    .map{
        color: #FFFFFF;
        font-size: 1.5rem;
    }
`;

export const AddressContent = styled.section`
    margin-left: 1rem;
    /* border: 1px solid green; */
`;

export const FooterLinks = styled.nav`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    line-height: 1.5rem;
    /* border: 1px solid pink; */
`;

export const PhoneNumber = styled.a`
     color: #FFFFFF;
     text-decoration: none;
`;