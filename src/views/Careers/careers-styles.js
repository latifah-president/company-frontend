import styled from 'styled-components';


const whiteColor = '#FFFFFF';
const darkColor = '#3C4858';
const lightGrayColor = '#999';

const paraFont = 'Robot'

//MEDIA QUERIES SIZES
// min-width do something when the screen is greater than or equal to 375px
//max-width do something when the screen is less than or equal to 375px
const smrtphn = '375px'; //iphone 6 size
const tablet = '1227px';
const laptop = '1440px';

export const Wrapper = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* border: 1px solid red; */

    /* @media only screen and (min-width: ${smrtphn}) {
        border: 1px solid pink;
    } */
`;

export const Header = styled.header`
    
    height: 45vh;
    min-height: 45vh;
    max-height: 650px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    /* border: 1px solid green; */

`;

export const LightOverlay = styled.div `
    position: absolute;
    width: 100%;
    height: 928px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5); /* Black see-through */
`;

export const HeaderImage = styled.img`
    width: 100%;
    height: 65vh;
    min-height: 65vh;
    max-height: 650px;
    background-attachment: absolute;
    /* background-position: center;  */
    -webkit-background-size: cover;
    -moz-background-size: cover;
     -o-background-size: cover;
     background-size: cover;
`;

export const ContentArea = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5rem;
    margin-bottom: 2rem;
    /* border: 1px solid green; */

    /* @media only screen and (min-width: ${smrtphn}) {
        width: 100%;
        border: 1px solid black;
    } */
   
`;

export const DarkTitle = styled.h2`

    color: ${darkColor};
    font-size: 2.25rem;
    font-weight: 700;
    letter-spacing: .3rem;
    line-height: 1.5rem;
    text-align: center;
    /* @media only screen and (max-width: ${smrtphn}) {
        width: 100%;
        line-height: 3rem;
        border: 1px solid green;
    } */
`;

export const LightText = styled.p`
    color: ${lightGrayColor};
    font-size: 1.2rem;
    line-height: 1.75rem;
    margin-top: 1.8rem;
    /* font-family: 'Robot'; */
    width: 50%;
`;
export const JobsContainer = styled.article`
    width: 50%;
    margin-bottom: 3rem;
    /* border: 2px solid teal; */
`;
export const JobsLinks = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style-type: none;
    text-decoration: none;
    height: 50px;
    /* border: 1px solid orange; */
   
    .jobTitle {
       
        font-size: 1.2rem;
        font-family: 'Montserrat', 'san-serif';
    }

    .icon {
        margin-left: 2.5rem;
    }
`;

export const JobsLink = styled.li`
    /* border: 4px solid black; */

    a {
        color: ${lightGrayColor};
        /* border: 1px solid pink; */
        text-decoration: none;    }
`;

export const DarkSubtitle = styled.h4`
    color: ${darkColor};
    margin-top: .625rem;
    min-height: auto;
    font-family: "Roboto", "Times New Roman", serif;
    font-weight: 700;
    margin: 1.5rem 0 0 0;
    letter-spacing: .2rem;

  
`;

export const JobDescArea = styled.section`
    margin-top: 2rem;
    width: 50%;
    line-height: 1px;
    /* border: 1px solid pink; */

    /* @media only screen and (min-width: ${smrtphn}) {
        width: 100%;
        margin-left: 2rem;
    } */
`; 



export {
    darkColor,
    paraFont,
    lightGrayColor,
    whiteColor,
    smrtphn,
    laptop,
    tablet,
}
