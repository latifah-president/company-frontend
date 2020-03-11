import styled from 'styled-components';
import {grayGradient, smrtphn, } from '../../Global_Styles/global-styles';
import { whiteColor } from '../../global-styles';

export const FooterWrapper = styled.footer`
    background-image: ${grayGradient};
    height: 30vh;
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
     /* border: 3px solid red; */

     @media only screen and (max-width: ${smrtphn}) {
        grid-template-columns: repeat(1, 1fr);
        height: auto;
        /* border: 3px solid red; */
     }
`;

export const FooterCard = styled.section`
    height: 250px;
    /* text-align: center; */
    flex-direction: column;
    /* border: 1px solid green; */
    @media only screen and (max-width: ${smrtphn}) {
        text-align: left;
        width: 80%;
     }
`;

export const ContactUs = styled.article`
    /* border: 1px solid red; */
    display: flex;
    /* text-align: center; */
    /* justify-content: center; */
    margin-bottom: 1rem;
    .icon{
        color: ${whiteColor};
        font-size: 1.3rem;
        margin-right: 1rem;
    }

   a {
       text-decoration: none;
   }

   .envelope {
    font-size: 1rem;
     /* margin-right: .8rem; */
   }
    @media only screen and (max-width: ${smrtphn}) {
        justify-content: flex-start;
        /* .envelope  {
            font-size: 1.3rem;
        margin-right: 1.8rem;
    } */

    /* .map  {
        display: none;
    } */
     }
`;

export const AddressContent = styled.section`
    margin-left: 1rem;
    /* border: 1px solid green; */
`;

export const FooterLinks = styled.nav`
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    line-height: 1.5rem;
    /* border: 1px solid pink; */
    @media only screen and (max-width: ${smrtphn}) {
        align-items: flex-start;
        /* border: 1px solid pink; */
     }
`;

export const PhoneNumber = styled.a`
     color: #FFFFFF;
     text-decoration: none;
     margin-left: 2rem;
`;

export const NewsLetterForm = styled.form`
    width: 80%;
    display: flex;
    align-items: center;
    /* border: 1px solid teal; */

    .icon {
        color: ${whiteColor};
        font-size: 1.5rem;
     

    }

    button {
        background: none;
        margin-top: 2rem;
        border: none;
        /* width: 100%; */
    }
   
`;
export const NewsLetter = styled.input`
    padding: 1rem 0;
  font-size: .7rem;
  width: 100%;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid ${whiteColor};
  /* margin: 2rem; */
  background: none;
  color: ${whiteColor};
  ::placeholder {
      color: ${whiteColor};
  }
    @media only screen and (max-width: 600px) {
        width: 100%;
    }
`;