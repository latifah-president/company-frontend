import styled from 'styled-components';

const blackColor = "#000";
const accentColor = '#B0001E';
const grayGradient = 'radial-gradient(ellipse at center,#585858 0,#232323 100%)';
const whiteColor = '#FFFFFF';
const darkColor = '#3C4858';

export const OverlayDark = styled.div`
    position: absolute;
    width: 100%;
    height: 928px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #6378cc80;
/* border:1px solid black; */
    z-index: 1;
`;

export const OverlayLight = styled.div`
  position: absolute;
    width: 100%;
    height: 928px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
background: rgba(0, 0, 0, 0.5); /* Black see-through */
`;
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
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    /* border: 1px solid green; */
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
     /* border: 2px solid red; */
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
    /* flex-wrap: nowrap; */
    margin: 2rem auto 2rem auto;
    /* border: 1px solid orange; */
`;

const Card = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    /* border: 4px solid pink; */
`;



export const CardImage = styled.img`
    /* width: 65%; */
    height: 15rem;
    border-radius: .5rem;
    box-shadow: 0 16px 10px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
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
`;

export const Icons = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: .5rem;
    /* border: 1px solid red; */
    .facebook {
        text-align: center;
        background-color: #3B5998;
        font-size: 1.3rem;
        color: white;
        padding: .5rem;
        border: 1px solid #3B5998;
        
        /* border: 1px solid #0876B4; */
        border-radius: .3rem;
        
    }
    .linkedin {
        text-align: center;
        background-color: #0876B4;
        font-size: 1.3rem;
        /* position: absolute; */
        color: white;
        padding: .5rem;
        border: 1px solid #0876B4;
        border-radius: 50%;
    }
    .twitter {
        background-color: #55ACEE;
        font-size: 1.3rem;
        /* position: absolute; */
        color: white;
        padding: .5rem;
        border: 1px solid #55ACEE;
        border-radius: 50%;
    }
`;

export const WhiteTitle = styled.h2`
    color: ${whiteColor};
    font-size: 2.25rem;
    font-weight: 700;
    letter-spacing: .3rem;
    line-height: 1.5rem;
`;

export const SmallWhiteTitle = styled.h2`
    color: ${whiteColor};
    font-size: 1rem;
    font-weight: 700;
    /* letter-spacing: .3rem; */
    line-height: 1.5rem;
`;

export const SmallWhiteText = styled.h6`
    color: ${whiteColor};
    display: inline-block;
    font-size: 14px;
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    width: 100%;
    text-align: center;
    margin: 0;
`;

export const SmallDarkTitle = styled.h6`
    color: ${darkColor};
    display: inline-block;
    font-size: 14px;
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    width: 100%;
    text-align: center;
    margin: 0;
`;

export const CardDesLink = styled.a`
    color: #999;
    font-weight: 550;
    font-size: 1rem;
    margin-top: 1rem;
    margin-bottom: 3rem;
    line-height: 1.9rem;
    /* width: 100%; */
    text-align: center;
    /* border: 1px solid red; */
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
    whiteColor,
    darkColor,
}