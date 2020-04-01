import styled from 'styled-components';
import { tablet, tabletsm, lightGrayColor, smrtphn } from '../../Global_Styles/global-styles';
import {numberColor} from './../../Global_Styles/global-styles';

export const AboutTitle = styled.h2`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.6rem;
    font-weight: 300;
    text-align: left;
    width: 95%;
    /* border: 1px solid red; */
    @media only screen and (max-width: ${smrtphn}) {
        text-align: center;
        font-size: 1.5rem;
    }
`;

export const AboutContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: ${props => props.image ? '100%' : '70%'};

    /* border: 1px solid blue; */
    @media only screen and (max-width: ${tablet}) {
        width: 90%;
    }
    @media only screen and (max-width: ${smrtphn}) {
        width: 100%;
        /* border: ${props => props.image ? '1px solid pink' : null}; */
        flex-wrap: ${props => props.image ? 'wrap' : null};
        /* border: 1px solid blue;                                                                                                                                                                                                                                                          */
    }
`;
 
export const AboutContent = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: ${props => props.image ? '20%' : null};
    /* border: 1px solid red; */
    h4, h5  {
        margin: .5rem;
        width: 60%;
        font-weight: 300;
        padding-left: .5rem;
        /* border: 1px solid orange; */
    }
    .name {
       font-size: 1.2rem; 
       color: ${numberColor};
    }
    .position {
        margin: .5rem;
       font-size: .95rem;
    }
    @media only screen and (max-width: ${tabletsm}) {
        h4, h5 {
            width: 70%;
        }
        .name {
            font-size: 1rem;
        }
    }
    @media only screen and (max-width: ${smrtphn}) {
        text-align: center;
        .name {
            font-size: 1rem;
        }

    }
`;

export const AboutNumber = styled.h3`
    font-size: 4rem;
    color: ${numberColor};
    margin: 0;
    font-weight: 300;
    @media only screen and (max-width: ${smrtphn}) {
        font-size: 2rem;
    }
`;

export const AboutText = styled.h4`
    font-size: 1rem;
    font-weight: 300;
`;

export const AboutImage = styled.img`
    width: 60%;
    @media only screen and (max-width: ${smrtphn}) {
        width: 80%;
    }
`;

export const Position = styled.h4`

`;

export const ImageContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;

    /* border: 1px solid red; */
    @media only screen and (max-width: ${smrtphn}) {
        width: 100%;
    }
    @media only screen and (max-width: ${smrtphn}) {
        display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 20px;
    }
`;