import styled from 'styled-components';
import bgimage from './assets/about_image.jpg';

const blackColor = "#000";
const accentColor = '#B0001E'
const grayGradient = 'radial-gradient(ellipse at center,#585858 0,#232323 100%)'

export const DarkTitle = styled.h2`
    color: #3B4858;
    font-size: 2.25rem;
    font-weight: 700;
    letter-spacing: .3rem;
    line-height: 1.5rem;
    /* border: 1px solid teal; */
`;


const Wrapper = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1.5rem 1rem 0 1rem;
    /* border: 1px solid orange; */
`;

const ImageHeader = styled.header`
    height: 45vh;
    min-height: 45vh;
    max-height: 650px;
    background-image: url(${bgimage});
/* background-image: url(${props => props.about ? `${bgimage}`: ''}); */

    background-attachment: absolute;
    background-position: center; 
    /* bottom: 100px; */
    -webkit-background-size: cover;
    -moz-background-size: cover;
     -o-background-size: cover;
     background-size: cover;
    /* border: 1px solid green; */
`;

const Content = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5rem;
    margin-bottom: 2rem;
    /* border: 1px solid black; */
`;

const LightText = styled.h5`
    color: #999;
    font-size: 1.2rem;
    line-height: 1.75rem;
    margin-top: 1.8rem;
    font-family: 'Roboto';
    width: 50%;
    font-weight: 300;
    /* border: 1px solid orange; */
`;

const ThreeByThreeSec = styled.section`
    display: flex;
    justify-content: space-around;
    width: 80%;
    flex-wrap: nowrap;
    margin: 2rem auto 2rem auto;
    /* border: 1px solid orange; */
`;

const Card = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    /* border: 1px solid pink; */
`;



export const CardImage = styled.img`
    width: 65%;
    height: 15rem;
    border-radius: .5rem;
    box-shadow: 0 16px 10px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
    /* max-width: 202.41px; */

    /* border: 2px solid black; */
`;

export const CardContent = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    line-height: 1.5rem;
    z-index: 1;
    width: 100%;
    /* border: 1.5px solid green; */
`;

export const CardTitle = styled.h4`
    color: #3C4858;
    font-weight: 700;
    font-size: 1.5rem;
    /* border: 1px solid orange; */
 `;

export const CardDes = styled.p`
    color: #999;
    font-weight: 550;
    font-size: 1rem;
    margin-top: 0rem;
    margin-bottom: 3rem;
    line-height: 1.9rem;
    width: 100%;
/* border: 1px solid salmon; */
`;

export const SmallSubTitle = styled.h4`
    /* font-size: 1.125rem;
    line-height: 1.5em;
    color: #3C4858; */
    /* border: 1px solid #3C4858; */

    color: #3C4858;
    margin-top: .625rem;
    min-height: auto;
    font-family: "Roboto", "Times New Roman", serif;
    font-weight: 700;
    margin: 1.5rem 0 0 0;
    letter-spacing: .2rem;
`;

export const SmallCardDes = styled.h6`
    color: #6c757d;
    display: inline-block;
    font-size: 14px;
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    width: 100%;
    text-align: center;
    margin: 0;
    /* line-height: 1.5em; */
`;


export {
    Wrapper,
    ImageHeader,
    Content,
    LightText,
    ThreeByThreeSec,
    Card,
    blackColor,
    accentColor,
    grayGradient,
}