import styled from 'styled-components';
import {smrtphn, accentColor, lightGrayColor, tablet, tabletmd, tabletsm} from '../../Global_Styles/global-styles';
import { whiteColor } from '../../global-styles';

export const FooterWrapper = styled.footer`
    height: 25vh;
    width: 100%;
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border-top: 1px solid ${lightGrayColor};

     @media only screen and (max-width: ${tabletmd}) {
        align-content: center;
    }
  
     @media only screen and (max-width: ${smrtphn}) {
         padding: 1rem;
        grid-template-columns: repeat(1, 1fr);
        height: auto;
        /* border: 1px solid red; */
     }
`;

export const FooterCard = styled.div`
display: flex;
justify-content: ${props => props.center ? 'center' : 'space-around'};
align-items: center;
flex-direction: ${props => props.column ? 'column' : null};
height: ${props => props.small ? '90px' : null};
.icon {
    font-size: 1.5rem;
}

a {
    text-decoration: none;
    height: 45px;
}
address {
    font-style: normal;
}

    form {
        width: 70%;
        margin: 0 auto;
    }

    @media only screen and (max-width: ${tabletsm}) {
        width: ${props => props.icons ? '85%' : null};
        form {
        width: 100%;
        margin: 2rem auto;
    }
    }
    @media only screen and (max-width: ${smrtphn}) {
        form {
        width: 100%;
        margin: 2rem auto;
    }

    /* border: 1px solid red; */

a {
    text-decoration: none;
    height: auto;
}
    }
`;

export const NewsLetterButton = styled.input`
    border-radius: 20px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border: 1px solid ${accentColor};
    padding: 0.6875rem 0.9375rem 1.95rem;
    cursor: pointer;
    color: ${whiteColor};
    font-size: 1rem;
    height: 2.7rem;
    width: 30%;
    background-color: ${accentColor};

    @media only screen and (max-width: ${tablet}) {
        width: 24%;
    }
    @media only screen and (max-width: ${tabletsm}) {
        width: 25%;
    }
   
`;
