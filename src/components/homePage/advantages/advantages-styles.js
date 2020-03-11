import styled from 'styled-components';
import {smrtphn, whiteColor} from './../../../Global_Styles/global-styles';

export const AdvantagesWrapper = styled.section`
    background: radial-gradient(ellipse at center,#585858 0,#232323 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5rem;
    /* margin-bottom: 5em; */
`;

export const AdvantagesContent = styled.article`
    display: flex;
    justify-content: space-around;
    margin:2rem 0;
    width: 80%;
    /* border: 1px solid green; */
`;

export const AdvatagesTitle = styled.h2`
    color: ${whiteColor};
    font-size: 2.25rem;
    font-weight: 700;
    letter-spacing: .3rem;
    line-height: 1.5rem;
    margin-top: 1.5rem;
`;

export const AdvantagesBox = styled.section`
    /* width: 22%; */
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: nowrap;
    padding: 1rem;
    border: .8px solid  ${whiteColor};
    height: 350px;
       @media only screen and (max-width: ${smrtphn}) {
           width: 100%;
           margin: 0 auto;
           flex-wrap: wrap;
        /* border: 1px solid pink; */
    }
`;

export const AdvantagesBoxTitle = styled.h3`
    color:  ${whiteColor};
    font-weight: 300;
    font-size: 1.5rem;
`;

export const AdvantagesBoxText = styled.p`
   color:  ${whiteColor};
   font-weight: 100;
   font-size: 1rem;
   line-height: 1.5rem;
   /* width: 90%; */
`;