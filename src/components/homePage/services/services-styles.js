import styled from 'styled-components';
import {smrtphn, laptop, } from './../../../global-styles';

export const ServicesWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background: radial-gradient(ellipse at center,#585858 0,#232323 100%); */
    /* border: 1px solid red; */
`;

export const ServicesContent = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5rem;
    margin-bottom: 5em;
    /* border: 1px solid black; */

    @media only screen and (min-width: ${smrtphn}) {
        justify-content: center;
    }
`;

export const ServicesTitle = styled.h2`
    color: #3B4858;
    font-size: 2.25rem;
    font-weight: 700;
    letter-spacing: .3rem;
    line-height: 1.5rem;
    /* border: 1px solid teal; */
    @media only screen and (min-width: ${smrtphn}) {
        width: 80%;
        align-self: center;
        /* border: 1px solid teal; */

    }
`;

export const ServicesText = styled.h5`
    color: #999;
    font-size: 1.2rem;
    line-height: 1.75rem;
    margin-top: 1.8rem;
    font-family: 'Roboto';
    width: 50%;
    font-weight: 300;
    /* border: 1px solid orange; */
`;

export const ServiceBox = styled.article`
    display: flex; 
    justify-content: center;
    align-items: center;
    /* width: 80%; 
    /* flex-wrap: nowrap;
    margin: 2rem auto 2rem auto; */
    /* border: 1px solid orange; */
/* margin: 0 auto;
    display: grid;
grid-template-columns: repeat(3, 1fr); */
/* grid-template-rows: repeat(5, 1fr); */
/* grid-column-gap: 20px;
grid-row-gap: 0px; */

    @media only screen and (min-width: ${smrtphn}) {
        /* border: 2px solid hotpink; */
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        /* width: 100%; */
      /* height: 2000px; */
        /* display: flex;
       flex-direction: column;
       flex-wrap: wrap;
       justify-content: center;
       align-items: center; */
       
       /* display: grid;
grid-template-columns: repeat(1, 1fr); */
/* grid-column-gap: 0px; */
/* grid-row-gap: 20px; */

    }
    @media only screen and (min-width: ${laptop}) {
        /* width: 70%; */
        /* display: flex;
    justify-content: space-around; */
    /* width: 30%; */
    /* flex-wrap: nowrap; */
    /* margin: 2rem auto 2rem auto; */
 
/* grid-template-rows: repeat(5, 1fr); */




/* display: grid;
grid-template-columns: repeat(3, 1fr);
grid-column-gap: 20px; */
/* grid-row-gap: 0px; */
    /* border: 1px solid purple; */

    display: grid;
grid-template-columns: repeat(3, 1fr);
/* grid-template-rows: 1fr; */
grid-column-gap: 50px;
/* grid-row-gap: 20px; */
    }
`;

export const Service = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* width: 30%;  */
    /* border: 1px solid black; */
    @media only screen and (min-width: ${smrtphn}) {
        
        /* margin-bottom: 1.5rem; */
        border: 1px solid black;
    }

    @media only screen and (min-width: ${laptop}) {
        /* display: flex; */
    /* flex-direction: column; */
    /* align-items: center;
    width: 30%; */
    /* border: 4px solid orange; */
    padding: 0;
    margin: 0;
    } 
`;

export const ServiceLink = styled.a`
    cursor: pointer;
`;
export const ServiceBoxBgImage = styled.img`
    text-align: center;
    width: 99.9%;
    height: 15rem;
    border-radius: .5rem;
    box-shadow: 0 16px 10px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);

    @media only screen and (min-width: ${smrtphn}) {
        width: 90%;
    }

    @media only screen and (min-width: ${laptop}) {
        /* border: 1px solid orange; */
        text-align: center;
    width: 99.9%;
    height: 15rem;
    border-radius: .5rem;
    box-shadow: 0 16px 10px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
        /* width: 100%; */
    }

`;

export const ServiceBoxContent = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    line-height: 1.5rem;
    z-index: 1;
    /* border: 1.5px solid green; */
   
`;

export const BottomCtnIcon = styled.div`
    /* border: 1px solid black; */
`;

export const ServiceBoxTitle = styled.h4`
    color: #3C4858;
    font-weight: 700;
    font-size: 1.5rem;
    margin-top: 1.5rem;
    /* border: 1px solid orange; */
 `;

export const ServiceBoxDes = styled.p`
   color: #999;
   font-weight: 550;
   font-size: 1rem;
   margin-top: 0rem;
   margin-bottom: 3rem;
   line-height: 1.9rem;
   width: 90%;
   /* border: 1px solid salmon; */
`;