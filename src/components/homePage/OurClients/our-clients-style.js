import styled from 'styled-components';
import {whiteColor, darkColor, tablet, tabletmd, tabletsm, smrtphn } from './../../../Global_Styles/global-styles';
export const BrandsContainer = styled.article`
        display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    align-items: center;
  justify-items: center;
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 34px;                                                                                                                                                                                                                                                                                                                                                                                                                          
    margin: 2rem auto 2rem auto;
    width: 70%;
    /* border: 1px solid red; */
    @media only screen and (max-width: ${tabletmd}) {
      grid-column-gap: 20px;
      grid-row-gap: 44px; 
       
    }
`;

export const ClientsTitle = styled.h2`
    color: ${props => props.white ? `${whiteColor}` : `${darkColor}`};
    font-size: 2rem;
    font-weight: 300;
    margin-top: 5rem;
    /* line-height: 5rem; */
    font-family: Arial, Helvetica, sans-serif;
    text-align: ${props => props.left ? 'left' : 'center'};
    width: 45%;
    /* border: 1px solid red; */
    @media only screen and (max-width: ${tablet}) {
        text-align: ${props => props.left ? 'center' : null};
        width: 70%;
       
    }
       @media only screen and (max-width: ${tabletmd}) {
        width: 100%;
        line-height: 3.5rem;
        font-size: 2.3rem;
       
    }
    @media only screen and (max-width: ${tabletsm}) {
        font-size: 2rem;
        line-height: 4rem;
        padding: 1rem;
    }
    @media only screen and (max-width: ${smrtphn}) {
        font-size: 1.15rem;
        line-height: 2rem;
        width: 90%;
        /* border: 1px solid blue; */
    }
`;
