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
    border: 1px solid orange;
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

export {
    Wrapper,
    ImageHeader,
    Content,
    LightText,
    blackColor,
    accentColor,
    grayGradient,
}