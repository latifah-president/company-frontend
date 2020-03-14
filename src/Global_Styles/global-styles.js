import styled, {keyframes} from 'styled-components';

const blackColor = "#000";
// const accentColor = '#B0001E';
const grayGradient = 'radial-gradient(ellipse at center,#585858 0,#232323 100%)';
const whiteColor = '#FFFFFF';
const darkColor = '#3C4858';
const lightGrayColor = '#999';
const overlayColor = '#6378cc80';
const paraFont = 'Robot'


//NEW SITE

const darkBlueColor = '#002ACC';
const accentColor = '#EDBD4C';
const orangeColor = '#ff691e';

//MEDIA QUERIES SIZES
// min-width do something when the screen is greater than or equal to 375px
//max-width do something when the screen is less than or equal to 375px
const tablet = '1024px';
const tabletsm = '675px'
const smrtphn = '450px'; 
const laptop = '1440px';

const pulse = keyframes`
  0% {
	color: ${accentColor};
	}
	20% {
		color: ${accentColor};
	}
	40% {
		color: ${accentColor};
	}
	60% {
		color: ${accentColor};
	}
	80% {
		color: ${accentColor};
	}
	100% {
		color: ${accentColor};
	}
`;

const spin = keyframes`
 0% { 
  content: 'DREAMS'; 
}
/* 20% {
  content: 'BUSINESSES';
} */
40% {
  content: 'BUSINESSES';
}
60% {
  content: ' GROWTH';
}
80% {
  content: 'PROFITS';
}
100% {
  content: 'LONGEVITY';
}
`;

export const fly = keyframes`
  0% {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
  
  }

  50% {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate3d(-20, -20, 0 -45deg);
    transform: rotate3d(-20, -20, 0  -45deg);
   
  }
  100%{
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate3d(-500, -500, 0 -45deg);
    transform: rotate3d(-50, -50, 0  -45deg);
  }
 /* 0% {
      bottom: -600px;   */
      /* -moz-transform:rotate(-1200deg);
    -ms-transform:rotate(-120deg);
    -o-transform:rotate(-120deg);
    -webkit-transform:rotate(-120deg); */
    /* transform-origin:left top; */
    /* } */
    /* 100% {
      bottom: 100%;
    } */
`;


export const Wrapper = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
    /* border: 1px solid red; */
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
    -webkit-background-size: cover;
    -moz-background-size: cover;
     -o-background-size: cover;
     background-size: cover;
`;

// TODO: CHANGE AROUND PROPS. ORIGINAL STYLING IS ALREADY HORIZONTAL. 
//CHANGE NAME TO STACKED TO BE MORE DESCRIPTIVE 
export const ContentArea = styled.section`
    display: flex;
    flex-direction: ${props => props.horizontal ? null : 'column'};
    align-items: center;
    justify-content: ${props => props.horizontal ? 'space-around' : null};
    margin-top: 5rem;
    margin-bottom: 2rem;
    width: ${props => props.horizontal ? '80%' : '60%'};
    /* border: 1px solid green; */
    @media only screen and (max-width: ${tablet}) {
        border: 3px solid green;
        
        /* flex-direction: column; */
    }
    svg {
        /* width: 50%; */
        margin: 0 auto;
        border: 1px solid black;
    }
   
`;

export const ThreeColumnGrid = styled.article`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 0px;  
    width: 70%;
    @media only screen and (max-width: ${smrtphn}) {
        width: 90%;
        display: flex;
        flex-direction: ${props => props.reverse ? 'column-reverse' : 'column'};
        /* border: 1px solid black; */
    }
`;

export const DarkTitle = styled.h2`
    color: ${darkColor};
    font-size: 2.25rem;
    font-weight: 700;
    letter-spacing: .3rem;
    line-height: 1.5rem;
    text-align: center;
    /* border: 1px solid red; */
    @media only screen and (max-width: ${smrtphn}) {
        width: 100%;
        line-height: 2.5rem;
        /* border: 1px solid green; */
    }
`;

export const LightText = styled.p`
    color: ${lightGrayColor};
    font-size: 1.2rem;
    line-height: 1.75rem;
    margin-top: 1.8rem;
    /* width: 50%; */
    @media only screen and (max-width: ${tablet}) {
        width: 100%;
        /* border: 1px solid green; */
    }
`;
export const JobsContainer = styled.article`
    width: 50%;
    margin-bottom: 3rem;
    /* border: 2px solid teal; */
    @media only screen and (max-width: ${smrtphn}) {
        width: 100%;
        /* border: 1px solid green; */
    }
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
        text-decoration: none;    
    }
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
    @media only screen and (max-width: ${smrtphn}) {
        width: 90%;
        /* border: 1px solid orange; */
    }
`; 

export const ImageCard = styled.img`
    width: 99.9%;
    height: 15rem;
    border-radius: .2rem;
    box-shadow: 0 16px 10px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
`;

export const SmallImageCard = styled.img`
    width: ${props => props.about ? '50%' : '30%'};
    height: 15rem;
    border-radius: .2rem;
    box-shadow: 0 16px 10px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
    @media only screen and (max-width: ${smrtphn}) {
        width: 100%;
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
        text-align: center;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              /* border: 1px solid red; */
    }
`;

export const CircleImageCard = styled.img`
    width: 100%;
    height: auto;
    box-shadow: 0 16px 10px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
`;

export const ImageContent = styled.div`
    padding: 0;
    overflow: hidden;
    max-width: 130px;
    box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
    max-height: 130px;
    border-radius: 50%;
`;

export const CardContent = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    line-height: 1.5rem;
    height: 300px;
    /* z-index: 1; */
    width: 200px;
    text-align: center;
    border: 1.5px solid green;
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

export const SmallWhiteTitle = styled.h2`
    color: ${whiteColor};
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.5rem;
`;

export const SmallWhiteText = styled.p`
    color: ${whiteColor};
    font-size: 14px;
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    width: 100%;
    text-align: left; 
    margin: 0;
    /* border: 1px solid white; */
    @media only screen and (max-width: ${smrtphn})  {
        width: ${props => props.small ? '80%' : null}; 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    /* border: 1px solid red; */
    }
`;

export const CardDesLink = styled.a`
    color: #999;
    font-weight: 550;
    font-size: 1rem;
    margin-top: 1rem;
    margin-bottom: 3rem;
    line-height: 1.9rem;
    text-align: center;
    /* border: 1px solid red; */
`;
/*TODO MOVE TAGLINE TO SPLASHSCREEN STYLES */

export const HomeWrapper = styled.section`
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: ${darkBlueColor};
    justify-content: center;
    align-items: center;
    /* border: 1px solid red; */

    @media only screen and (max-width: ${smrtphn}) {
      color: blue;
    }
`;

export const Tag = styled.header`
   display: flex;
    flex-direction: column;
#bottom {
	animation: ${pulse} 7s forwards infinite;
}
    #bottom:after {
	content: "";
    animation:${spin} 7s forwards infinite;
   
}
border: 1px solid red;
`;

export const Graphic = styled.img`
    width: 60%;
    margin-left: 2rem;
    /* position: absolute;
  bottom: -600px; */
  /* left:35%; */
  /* animation: ${fly} 3s .5s ease-in; */
`;
export const TagLineContent = styled.h1`
   letter-spacing: .3rem;
    text-transform: uppercase;
    display: inline;
    margin:0px;
    line-height:30px;
    font-size: 5rem;
`;

export const CardArea = styled.section`
    display: flex;
    justify-content: space-between;
    justify-content: center;
    align-items: center;
    border: 1px solid red;
    width: 100%;
    /* flex-direction: column; */
`;

export const CardImage = styled.div`
   border: 1px solid red;
   width: 90%;
   height: 150px;
text-align: center;
display: block;
    margin: auto;
.svg {
   
}

  
`;
export {
    darkColor,
    paraFont,
    lightGrayColor,
    whiteColor,
    smrtphn,
    laptop,
    tablet,
    tabletsm,
    accentColor,
    grayGradient,
    overlayColor,
    blackColor,
    darkBlueColor,
    orangeColor
}
