import styled, {keyframes} from 'styled-components';

const blackColor = "#000";
const accentColor = '#B0001E';
const grayGradient = 'radial-gradient(ellipse at center,#585858 0,#232323 100%)';
const whiteColor = '#FFFFFF';
const darkColor = '#3C4858';
const lightGrayColor = '#999';
const overlayColor = '#6378cc80';

//MEDIA QUERIES SIZES
// min-width do something when the screen is greater than or equal to 375px
const smrtphn = '980px'; //iphone 6 size
const tablet = '1227px';
const laptop = '1440px';

const slideInRight = keyframes`
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  from {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
`;

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
    @media only screen and (min-width: ${smrtphn}) {
        width: 100%;
        text-align: center;
        /* border: 1px solid teal; */
        line-height: 3rem;
    }
    
`;


const Wrapper = styled.main`
    /* display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1.5rem 1rem 0 1rem; */
    /* border: 1px solid orange; */
    @media only screen and (min-width: ${smrtphn}) {
        justify-content: center;
    }
     @media only screen and (min-width: ${laptop}) {
        display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1.5rem 1rem 0 1rem;
     }
   
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
    margin-bottom:2rem;
    /* border: 1px solid black; */
    @media only screen and (max-width: ${smrtphn}) {
        margin-bottom: 1rem;
    }
`;

const LightText = styled.p`
    color: #999;
    font-size: 1.2rem;
    line-height: 1.75rem;
    margin-top: 1.8rem;
    font-family: 'Roboto';
    width: 50%;
    font-weight: 300;
    /* border: 1px solid orange; */
    @media only screen and (min-width: ${smrtphn}) {
        width: 80%;
    }
    /* border: 1px solid orange; */
`;

const ThreeByThreeSec = styled.section`
    display: flex;
    justify-content: space-around;
    width: 80%;
    margin: 2rem auto 2rem auto;
    /* border: 1px solid orange; */
    @media only screen and (min-width: ${smrtphn}) {
        flex-direction: column;
        margin: 0 auto
    }

    @media only screen and (min-width: ${laptop}) {
        /* border: 1px solid black; */

    }
`;

const Card = styled.section`
    @media only screen and (min-width: ${laptop}) {
        display: grid;
grid-template-columns: repeat(2, 1fr);
grid-column-gap: 20px;
width: 80%;

    }

    @media only screen and (min-width: ${smrtphn}) { 
   text-align: center;
 /* border: 1px solid black; */
    }
`;



export const CardImage = styled.img`
    /* width: 65%; */
    height: 15rem;
    border-radius: .5rem;
    box-shadow: 0 16px 10px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
    @media only screen and (min-width: ${smrtphn}) {
        /* border: 1px solid green; */
        margin-top: 2rem;
        /* text-align: center; */
        width: 40%;
    }

    @media only screen and (min-width: ${laptop}) {
        /* border: 1px solid green; */
        margin-top: 2rem;
        /* text-align: center; */
        /* width: 20%; */
        /* border: 1px solid brown; */
    }
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

@media only screen and (min-width: ${smrtphn}) {
    width: 80%;
}
`;

export const SmallSubTitle = styled.h4`
    color: #3C4858;
    margin-top: .625rem;
    min-height: auto;
    font-family: "Roboto", "Times New Roman", serif;
    font-weight: 700;
    margin: 1.5rem 0 0 0;
    letter-spacing: .2rem;
    @media only screen and (max-width: ${smrtphn})  {
        text-align: center;
        /* border: 1px solid red; */
    }
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

export const ImageWithSubTitle = styled.section`
@media only screen and (min-width: ${smrtphn}) {
    /* display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: 1fr;
grid-column-gap: 20px;
grid-row-gap: 20px; */
display: flex;
flex-direction: column;
    width: 100%;
    /* border: 1px solid black; */
}
@media only screen and (min-width: ${laptop}) {
    display: flex;
flex-direction: column;
width: 100%;
/* border: 1px solid orange; */
}

`;

export const ThreeColumnGrid = styled.section`


@media only screen and (min-width: ${smrtphn}) {
    display: grid;
grid-template-columns: repeat(1, 1fr);
grid-template-rows: repeat(1, 1fr);
grid-column-gap: 20px;
grid-row-gap: 20px;
width: 70%;
margin: 0 auto;
/* border: 2px solid teal; */
/* color: red; */
}

@media only screen and (min-width: ${laptop}) {
 
  justify-content: space-between;
/* border: 3px solid brown; */
display: grid;
 grid-template-columns: repeat(3, 1fr);
grid-column-gap: 20px;
grid-row-gap: 0px;  
 width: 90%;

} 
`;

export const TwoColumnGrid = styled.article`
    @media only screen and (min-width: ${laptop}) {
 margin: 0 auto;
 display: flex;
justify-content: space-between;
/* border: 3px solid brown; */
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-column-gap: 20px;
grid-row-gap: 0px;  
width: 90%;
/* border: 1px solid green; */
} 
`;

export const AboutImage = styled.img`
       
        border-radius: .5rem;
    box-shadow: 0 16px 10px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);

    @media only screen and (min-width: ${smrtphn}) {
        width: 90%;
        margin: 0 auto
        /* border: 1px solid orange; */
    }
    @media only screen and (min-width: ${laptop}) {
        /* border: 1px solid red; */
        width: 60%;
        margin: 0 auto;
        /* width: 30%; */
        border-radius: .5rem;
    box-shadow: 0 16px 10px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
    }
`;

export const PortfolioCard = styled.section`
    /* display: flex; */
    /* flex-direction: column; */
    /* align-items: center;
    justify-content: space-between;
    width: 100%;
    border: 1px solid pink; */
  
    @media only screen and (min-width: ${smrtphn}) {
        margin-top: 1rem;
        /* width: 70%; */
        /* border: 1px solid pink; */
    }
    @media only screen and (min-width:${laptop}) {
        margin-top: rem;
        animation: ${slideInRight} .7s ease-in-out forwards;

display: flex;
/* flex-direction: column; */
align-items: center;
justify-content: space-between;
/* border: 1px solid black; */
/* width: 50%; */
    }
    
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
    lightGrayColor,
    overlayColor,
    smrtphn,
    tablet,
    laptop,
}