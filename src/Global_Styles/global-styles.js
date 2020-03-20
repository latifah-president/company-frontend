import styled, {keyframes} from 'styled-components';

const blackColor = "#000";
// const accentColor = '#B0001E';
const grayGradient = 'radial-gradient(ellipse at center,#585858 0,#232323 100%)';
const whiteColor = '#FFFFFF';
const darkColor = '#3C4858';
const lightGrayColor = '#808080';
const overlayColor = '#6378cc80';
const paraFont = 'Robot'


//NEW SITE

const darkBlueColor = '#002ACC';
// const accentColor = '#EDBD4C';
const orangeColor = '#ff691e';
const lightBackgroundColor ='#F0F6FB';
const serviceColor = '#f5a623f2'; //THIS COLOR IS TRANSPARRENT
const accentColor = '#F5A623';
//MEDIA QUERIES SIZES
// min-width do something when the screen is greater than or equal to 375px
//max-width do something when the screen is less than or equal to 375px
/*
    Galaxy s5:  360px
    Pixel2: 411
    iPhone5: 320
    iphone 678: 375
    iphone 6/7/8 plus: 414 smrtphn
    iphone 10: 375
    iPad: 768 tabletsm
    iPad Pro: 1024 tablet

    
*/
const tablet = '1024px';
const tabletmd = '975px';
const tabletsm = '768px'
const smrtphn = '414px'; 
const smrtphnsm = '375px'; 
const smrtphnxs = '320px'; 
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

 const fly = keyframes`
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
 
`;




export const Wrapper = styled.section`
    display: flex;
    flex-direction: ${props => props.column ? 'column' : null};
    align-items: center;
    justify-content: center;
    width: 100%;
    overflow: hidden;
    background-color: ${props => props.blue ? `${lightBackgroundColor}` : null};
    .box {
        position: absolute;
        height: 2250px;
        width: 390px;
        background-color: ${lightBackgroundColor};
        top: 40px;
        transform: rotate(80deg);
        right: 480px;
}

 

@media only screen and (max-width: ${tabletsm}) {
    .box {
        top: 1450px;
        transform: rotate(70deg);
    }
}
`;


/* TODO: MAKE SERVICES ICON MEDIA CAPEABLE */
export const Container = styled.article`
    display: flex;
    flex-direction: ${props => props.column ? 'column' : null};
    align-items: ${props => props.top ? 'flex-start' : 'center'};
    justify-content: ${props => props.around ? 'space-around': 'space-between'};
    margin: ${props => props.margin ? '2rem 0 4rem 0' : '2rem 0'};
    width: ${props => props.small ? '60%' : '90%'};
    flex-wrap: ${props => props.icon ? 'nowrap' : 'wrap'};
    /* border: 1px solid red; */
    height: ${props => props.large ? '650px' : null};
    .link {
        text-decoration: none;
    }
    .small {
        width: 10%
    }
    .grow {
        width: 65%;
        /* border: 1px solid orange; */
    }
    @media only screen and (max-width: ${tablet}) {
        width: ${props => props.small || props.icon ? '90%' : null};
        justify-content: ${props => props.icon ? 'center' : null};
    }

    @media only screen and (max-width: ${tabletmd}) {
        width: 95%;
        flex-direction: ${props => props.contact ? 'column' : null};
        justify-content: ${props => props.icon ? 'center' : null};
        .small {
            width: 20%
        }
    }

    @media only screen and (max-width: ${tabletsm}) {
        flex-direction: column;
        justify-content: center;
        .small {
            width: 100%;
        }
        .grow {
            width: 100%;
        }
    }

    @media only screen and (max-width: ${tabletsm})   {
        flex-direction: ${props => props.mobile ? 'column' : null};
        flex-wrap: wrap;
        height: ${props => props.brands ? '300px' : null};
        display: ${props => props.brands ? 'grid' : null};
        grid-template-columns: ${props => props.brands ? 'repeat(3, 1fr)' : null};
        grid-template-rows: ${props => props.brands ? 'grid-template-rows: repeat(3, 1fr)' : null};
        justify-items: ${props => props.brands ? 'center' : null};
        align-items: ${props => props.brands ? 'center' : null};
        grid-row-gap: ${props => props.brands ? '5px' : null};
        display: ${props => props.icon ? 'flex' : null};
        flex-direction: ${props => props.icon ? 'row' : null};
    }
    @media only screen and (max-width: ${smrtphn})   {
        flex-direction: ${props => props.mobile ? 'column' : null};
        flex-wrap: wrap;
        height: ${props => props.brands ? '300px' : null};
        display: ${props => props.brands ? 'grid' : null};
        grid-template-columns: ${props => props.brands ? 'repeat(3, 1fr)' : null};
        grid-template-rows: ${props => props.brands ? 'grid-template-rows: repeat(3, 1fr)' : null};
        justify-items: ${props => props.brands ? 'center' : null};
        align-items: ${props => props.brands ? 'center' : null};
        grid-row-gap: ${props => props.brands ? '5px' : null};
        display: ${props => props.radio ? 'flex' : null};
        
    }
 
`;

export const DarkTitle = styled.h2`
    color: ${props => props.white ? `${whiteColor}` : `${darkColor}`};
    font-size: 3rem;
    font-weight: 300;
    line-height: 5rem;
    font-family: Arial, Helvetica, sans-serif;
    text-align: ${props => props.left ? 'left' : 'center'};
    width: ${props => props.small ? '80%' : '100%'};
    @media only screen and (max-width: ${tablet}) {
        text-align: ${props => props.left ? 'center' : null};
    }
       @media only screen and (max-width: ${tabletmd}) {
        width: 100%;
        line-height: 3.5rem;
        font-size: 2.3rem;
    }
    @media only screen and (max-width: ${tabletsm}) {
        font-size: 3rem;
        line-height: 4rem;
    }
    @media only screen and (max-width: ${smrtphn}) {
        font-size: 1.178rem;
        line-height: 2rem;
    }
`;

export const LightText = styled.p`
    color: ${darkColor};
    font-size: 1.2rem;
    line-height: 1.95rem;
    text-align: ${props => props.left ? 'left' : 'center'};
    width: ${props => props.small ? '55%' : '99%'};
    @media only screen and (max-width: ${tablet}) {
       width: 100%;
       text-align: ${props => props.left ? 'center' : null};
    }
    @media only screen and (max-width: ${tabletmd}) {
       width: 95%;
    }
    @media only screen and (max-width: ${smrtphn}) {
       width: 100%;
       text-align: center;
       /* border: 1px solid red; */
    }
`;

export const SmallCardDes = styled.h4`
    color: ${darkColor};
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    line-height: 1.5rem;
    width: 100%;
    text-align: center;
    font-size: ${props => props.small ? '1rem' : null};
`;

export const ImageCard = styled.img`
/* border: 1px solid red; */
    width: ${props => props.small ? '26%' : '30%'};
    box-shadow: 0 16px 10px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
    @media only screen and (max-width: ${tabletsm}) {
       display: ${props => props.mobile ? 'none' : null};
       width: ${props => props.brand ? '40%' : null};
    }
    @media only screen and (max-width: ${tabletsm}) {
       width: ${props => props.brand ? '65%' : null};
    }
    @media only screen and (max-width: ${smrtphn}) {
       display: ${props => props.mobile ? 'none' : null};
       width: ${props => props.brand ? '90%' : null};
    }
`;

export const CardContent = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    line-height: 1.5rem;
    width: ${props => props.small ? '20%' : '20%'};
    background-color: ${props => props.white ? `${whiteColor}` : null};
    border: ${props => props.outline ? `1px solid ${lightGrayColor}` : null};
    margin-top: ${props => props.margin ? '2rem' : null};
    box-shadow: ${props => props.shadow ? '0 10px 10px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)' : null};
    height: 368px;
    text-align: center;
    z-index: 900;
    /* border: 1px solid red; */
    @media only screen and (max-width: ${tablet}) {
        width: 30%;
    }

    @media only screen and (max-width: ${tabletmd}) {
        width: ${props => props.icon ? 'auto' : '30%'};
    }

    @media only screen and (max-width: ${tabletsm}) {
        width: ${props => props.icon ? '100%' : '80%'};
        margin-top: ${props => props.margin ? '0' : null};
        margin-bottom: 3rem;
        height: 500px;
    }

    @media only screen and (max-width: ${smrtphn}) {
        width: 90%;
        margin-bottom: 1.5rem;
        justify-content: flex-start;
        height: 390px;
    }
`;

export const Button = styled.a`
    background-color: ${darkBlueColor};
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 50px;
    height: 50px;
    color: ${whiteColor};
    width: 70%;
    text-decoration: none;
    font-size: 1.3rem;
    transition: .2s;
    text-transform: uppercase;
    &:hover {
        transform: scale(1.15);
    }

    @media only screen and (max-width: ${tablet}) {
        top: 50px;
    }
    @media only screen and (max-width: ${tabletmd}) {
       
       top: 60px;
    } 

    @media only screen and (max-width: ${tabletsm}) {
       top: 20px;
       height: 70px;
       font-size: 2rem;
    } 

    @media only screen and (max-width: ${smrtphn}) {
       top: 20px;
    }
`;

export const SubmitButton = styled.button`
    background: none;
    color: ${whiteColor};
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 1.875rem;
    letter-spacing: 0.125rem;
    text-transform: uppercase;
    align-self: flex-end;
    border-radius: .5rem;
    text-decoration: none;
    background-color: ${darkBlueColor};
    height: 60px;
    width: 30%;
    @media only screen and (max-width: ${tabletmd}) {
        align-self: center;
    }
    @media only screen and (max-width: ${smrtphn}) {
        width: 90%;
        margin-bottom: 2rem;
    }
`;

export const PillButton = styled.a`
    background-color: ${accentColor};
    color: ${whiteColor};
    border-radius: 1rem;
    height: 50px;
    width: 20%;
    font-size: 1.3rem;
    border: none;
    text-decoration: none;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: ${tablet}) {
        margin: 0 auto;
        width: 40%;
    }
    @media only screen and (max-width: ${smrtphn}) {
        width: 70%;
    }
`;
export const SmallWhiteTitle = styled.h2`
    color: ${whiteColor};
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.5rem;
    font-family: 'Montserrat', sans-serif;
`;

export const AddressContainer = styled.article`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(3, 1fr);
    width: 25%;
    /* border: 1px solid red; */
    justify-items: space-around;
    .contact {
        display: flex;
        align-items: center;
        justify-content: space-between;
        text-decoration: none;
    }
    address {
        width: 100%;
        font-style: normal;
    }
    .icon {
       justify-self: flex-start;
        margin-right: 1.5rem;
        font-size: 1.5rem;
        color: ${lightGrayColor};
    }

    @media only screen and (max-width: ${tabletmd}) {
        width: 100%;
        display: flex;
        justify-content: center;
         /* border: 1px solid green; */
        .contact {
            width: 30%;
            justify-content: center;
        }
        address {
            width: 100%;
        }
        .icon {
           display: none;
        }
    }
    @media only screen and (max-width: ${tabletsm}) {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
    @media only screen and (max-width: ${smrtphn}) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        .contact {
            width: 80%;
            justify-content: center;
        }
        .icon {
           
            margin-right: 1rem;
            font-size: 1.5rem;
            color: ${lightGrayColor};
            display: block;
            align-self: center;
    }

    a {
        display: flex;
        align-items: center;
    }
    }
`;

export const SmallImageCard = styled.img`
    width: 90%;
    margin-top: 1rem;
    border-radius: .2rem;

    @media only screen and (max-width: ${smrtphn}) {
        width: 100%;
        margin-top: 0;
    }
`;

export const Header = styled.header`
    height: 100vh;
    position: relative;
    display: flex;
    align-items: flex-end;
    overflow: hidden;
    /* border: 1px solid green; */
    .box {
        position: absolute;
        width: 100%;
        height: 89%;
        display: flex;
        background-color: ${serviceColor};
        clip-path: polygon(0 100%, 100% 100%, 0 0);

}
   
`;

export const ColoredHeader = styled.header`
     width: 40%;
     margin: 21rem auto 0 5rem;
     align-self: flex-start;
     height: 350px;
     text-align: center;
     @media only screen and (max-width: ${tablet}) {
         width: 60%;
        margin: 38rem auto 0 3rem; 
     }
     @media only screen and (max-width: ${tabletmd}) {
        width: 65%;
        margin: 24rem auto 0 .5rem;
    }
     @media only screen and (max-width: ${smrtphn}) {
        margin: 20rem auto 0 1rem;
        width: 80%;
    }
    @media only screen and (max-width: ${smrtphnsm}) {
        margin: 16.6rem auto 0 .2rem;
        width: 70%;
        /* border: 1px solid red; */
    }
    @media only screen and (max-width: ${smrtphnxs}) {
        margin: 15rem auto 0 .4rem;
    }
`;

export const WhiteTitle = styled.h2`
     font-family: Arial, Helvetica, sans-serif;
    font-size: 4rem;
    color: ${whiteColor};
    font-weight: 100;
    text-align: left;
    @media only screen and (max-width: ${smrtphn}) {
        font-size: 1.5rem;
    }
   
`;

export const HeaderText = styled.p`
    color: ${whiteColor};
    font-size: 1.2rem;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 2rem;
    text-align: left;
   
    @media only screen and (max-width: ${tablet}) {
        display: none
    }
    
`;

export const HeaderTextMobile = styled.p`
    display: none;
    @media only screen and (max-width: ${tablet}) {
        display: block;
        font-size: 1.8rem;
     line-height: 2.4rem;
        text-align: center;
        color: ${whiteColor};
        font-family: Arial, Helvetica, sans-serif;
        text-align: left;
        /* border: 1px solid red; */
        width: 100%;
    }
    @media only screen and (max-width: ${smrtphn}) {
        font-size: 1rem;
        line-height: 1.5rem;
        width: 60%;
    }
    @media only screen and (max-width: ${smrtphnsm}) {
        width: 73.5%;
       
    }
    @media only screen and (max-width: ${smrtphnxs}) {
        width: 80%;
        font-size: .9rem;
    }
`;


export const HeaderImage = styled.img`
    width: 100%;
    min-height: 100vh;
    max-height: 100vh;
    background-attachment: absolute;
    -webkit-background-size: cover;
    -moz-background-size: cover;
     -o-background-size: cover;
     background-size: cover;
`;

// TODO: CHANGE AROUND PROPS. ORIGINAL STYLING IS ALREADY HORIZONTAL. 
//CHANGE NAME TO STACKED TO BE MORE DESCRIPTIVE 
export const ContentArea = styled.article`
    display: flex;
    flex-direction: ${props => props.column ? 'column' : null};
    align-items: center;
    justify-content: space-between;
    margin-top: 5rem;
    margin-bottom: 2rem;
    width: 100%;
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



// export const SmallCardDes = styled.h6`
//     color: #6c757d;
//     display: inline-block;
//     font-size: 14px;
//     font-family: "Roboto", sans-serif;
//     font-weight: 300;
//     width: 100%;
//     text-align: center;
//     margin: 0;
// `;



export const SmallWhiteText = styled.p`
    color: ${whiteColor};
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
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
    smrtphnsm,
    smrtphnxs,
    laptop,
    tablet,
    tabletsm,
    tabletmd,
    accentColor,
    grayGradient,
    overlayColor,
    blackColor,
    darkBlueColor,
    orangeColor
}
