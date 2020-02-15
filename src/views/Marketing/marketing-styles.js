import styled from 'styled-components';
import {darlColor, darkColor, lightGrayColor, accentColor, whiteColor} from  './../../global-styles';

export const PackageArea = styled.section`
    /* display: 'flex';
    justify-content: space-around;
    flex-direction: column;  */
    /* width: 100%; */
    /* border: 1px solid red; */
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
    /* border: 1px solid black; */
`;

export const PackageDetails = styled.section`
    margin-top: 1rem;
    border-radius: .5rem;
    width: 80%;
    text-align: center;
     box-shadow: 0 16px 10px -12px rgba(0, 0, 0, 0.56), 
    0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
    /* border: 1px solid orange; */
`;

export const ExpandButton = styled.button`
    background: ${accentColor};
    color: white;
    margin-bottom: 1rem;
    height: 50px;
    width: 40%;
`;

