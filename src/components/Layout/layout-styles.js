import styled from 'styled-components';
import bgimage from './../../assets/about_image.jpg';

export const LayoutHeader = styled.header`
    height: 45vh;
    min-height: 45vh;
    max-height: 650px;
    background-image: url(${bgimage});
    background-attachment: absolute;
    background-position: center; 
    /* bottom: 100px; */
    -webkit-background-size: cover;
    -moz-background-size: cover;
     -o-background-size: cover;
     background-size: cover;
    /* border: 1px solid green; */
`;

export const LayoutWrapper = styled.main`
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    /* height: 40vh; */
`;

export const LayoutTitle = styled.header`
    color: #3B4858;
    border: 1px solid orange;
    /* height: 50vh; */
`;

// const pageStyle = {
//     small: {
//         height: 65vh;
//         // // min-height: 65vh;
//         // max-height: 650px;
//     }
// }