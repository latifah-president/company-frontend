import styled from 'styled-components';
import {darkColor, lightGrayColor, accentColor, } from  './../../global-styles';
import {smrtphn,  } from './../../Global_Styles/global-styles'

export const PackageArea = styled.section`
  
margin-top: 1.5rem;
    display: grid;
grid-template-columns: ${props => props.seo ? 'repeat(3, 1fr)' : 'repeat(4, 1fr)'};
    grid-template-rows: repeat(2);
    grid-gap: 50px;
    padding: 0 1rem;
     ul {
         list-style-type: none;
         text-transform: capitalize;
         /* margin: 0 auto; */
         text-align: center;
         padding: 0 1rem;
     }

    

     li {
         margin-top: 1rem;
         padding: .5rem .5rem .5rem 0;
         color: #583C56;
         border-bottom: 1px solid ${lightGrayColor};
         font-family: 'Roboto', sans-serif;

         b{
             color: black;
         }

         .hidden {
             display: none;
         }
     }
 

      
     @media only screen and (max-width: ${smrtphn})  {
         /* display in a column */
        display: grid;
grid-template-columns: 1fr;
grid-column-gap: 0px;
grid-row-gap: 20px;
/* grid-auto-columns: auto; */
}
`;

export const PriceCard = styled.section`
    width: 100%;
    border-radius: .5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* box-shadow: 0 16px 10px -12px rgba(0, 0, 0, 0.56), 
    0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2); */
`;
export const PackageAmount = styled.h1`
    margin-top: 30px;
    font-weight: 700;
    color: ${darkColor};
    /* border: 1px solid teal; */
     text-align: center;
     
    small {
        bottom: 35px;
    position: relative;
    font-size: 26px;
    
    /* border: 1px solid green; */
    }
`;

export const AmountContent = styled.section`
background-color: #583C56;
color: white;
/* width: 50%; */
width: 60%;
border-radius: 1rem;
margin-top: 1.5rem;
padding: 1rem;
height: 120px;
    /* border: 1px solid black; */
    /* @media only screen and (max-width: ${smrtphn})  {
        height: 120px;
    } */
`;

export const PackageDetails = styled.section`
    margin-top: 1rem;
    border-radius: .5rem;
    width: 80%;
    text-align: center;
     box-shadow: 0 16px 10px -12px rgba(0, 0, 0, 0.56), 
    0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
    /* border: 1px solid orange; */
    @media only screen and (max-width: ${smrtphn})  {
        width: ${props => props.seo ? '100%' : '75%'};
        /* border: 1px solid orange; */

    }
`;

export const ExpandButton = styled.button`
    background: ${accentColor};
    color: white;
    margin-bottom: 1rem;
    height: 50px;
    width: 40%;

    @media only screen and (max-width: ${smrtphn})  {
        font-size: 1rem;
    }
`;

