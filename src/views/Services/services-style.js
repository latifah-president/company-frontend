import styled from 'styled-components';
import { tablet, tabletsm, lightGrayColor, smrtphn, smrtphnxs, darkColor, tabletmd } from '../../Global_Styles/global-styles';

export const ServicesLinks = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 50%;
    list-style: none;
    line-height: 1.8rem;
    margin: 2rem 0;
    span {
        margin: 0 .5rem;
    }
    @media only screen and (max-width: ${tablet}) {
        width: 100%;
        span {
            margin: .2rem;
        }
    }
    /* @media only screen and (max-width: ${smrtphn}) {
        width: 100%;
        span {
            margin: .2rem;
        }
    } */
    @media only screen and (max-width: ${smrtphn}) {
        width: 100%;
        margin: 2rem 2rem 2rem 0;
        span {
            margin: .02rem;
        }
    }
`;

export const ServiceContainer = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 2rem;
    margin: 0 2rem 6rem 2rem;
    border-bottom: ${props => props.none ? 'none' : `1px solid ${lightGrayColor}`};
    padding-bottom: 4rem;
    width: 90%;
    @media only screen and (max-width: ${tabletsm}) {
        flex-direction: ${props => props.reverse ? 'column-reverse' : 'column'}; 
        justify-content: center;
        align-items: center;
    }
    @media only screen and (max-width: ${smrtphn}) {
        width: 95%;
    }
    
`;

export const ServiceContent = styled.article`
    width: 50%;
    display: flex;
    /* border: 1px solid green; */
    flex-direction: ${props => props.reverse ? 'column-reverse' : 'column'};
    justify-content: ${props => props.image ? 'center' : null};
    align-items: ${props => props.image ? 'center' : null};
    @media only screen and (max-width: ${tablet}) {
        width: 45%;
       
    }
    @media only screen and (max-width: ${tabletsm}) {
        width: 100%;
    }
    @media only screen and (max-width: ${smrtphn}) {
        align-items: center;
    }
  
`;

export const Image = styled.img`
    width: 70%;
    @media only screen and (max-width: ${tablet}) {
        width: 100%;
    }
`;

export const ServicesText = styled.p`
       color: ${darkColor};
    font-size: 1.2rem;
    line-height: 1.95rem;
    /* text-align: ${props => props.left ? 'left' : 'center'}; */
    text-align: justify;
    width: 90%;
    @media only screen and (max-width: ${tablet}) {
       width: 100%;
       text-align: ${props => props.left ? 'center' : null};
    }
    @media only screen and (max-width: ${tabletmd}) {
       width: 95%;
    }
    @media only screen and (max-width: ${smrtphn}) {
       width: 90%;
       text-align: justify;
       /* border: 1px solid red; */
    }
`;