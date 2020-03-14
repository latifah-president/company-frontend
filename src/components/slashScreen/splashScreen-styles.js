import styled, {keyframes} from 'styled-components';
import { blackColor, } from '../../global-styles';
import { tablet, tabletsm, smrtphn, darkBlueColor, whiteColor, accentColor, orangeColor} from '../../Global_Styles/global-styles';



const pulse = keyframes`
  0% {
	color: ${accentColor};
	}
	50% {
		color: ${accentColor};
	}
	100% {
		color: ${accentColor};
	}
	/* 60% {
		color: ${accentColor};
	}
	80% {
		color: ${accentColor};
	}
	100% {
		color: ${accentColor};
	} */
`;

/*TODO: FIX ANIMATION TIMING BETWEEN DREAMS AND BUSINESSES */
const spin = keyframes`
 0% { 
  content: 'DREAMERS'; 
}
50% {
  content: 'BUILDERS';
}
100% {
  content: 'LISTENERS';
}
/* 60% {
  content: ' GROWTH';
}
80% {
  content: 'PROFITS';
}
100% {
  content: 'LONGEVITY';
} */
`;




export const HomeWrapper = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${darkBlueColor};
  justify-content: center;
  align-items: center;
    /* border: 1px solid red; */

`;

export const Tag = styled.header`
   display: flex;
    flex-direction: column;
    width: 80%;
    line-height: 1rem;
    border: 1px solid red;
/* #bottom {
  -webkit-animation-name: ${pulse};
  -webkit-animation-duration: 7s;
  -webkit-animation-timing-function: infinite;
  -webkit-animation-fill-mode: forwards;
  animation: ${pulse} 7s forwards infinite;
  

}
    #bottom:after {
  content: 'Dreams';
  -webkit-animation-name: ${spin};
  -webkit-animation-duration: 7s;
  -webkit-animation-timing-function: infinite;
  -webkit-animation-fill-mode: forwards;
  animation:${spin} 7s forwards infinite;
   
} */
 
@media only screen and (max-width: ${tablet}) {
        width: 90%;
        /* border: 1px solid black; */
    }
    @media only screen and (max-width: ${smrtphn}) {
        width: 90%;
       
        /* border: 1px solid green; */
    }
`;

export const TagLineContent = styled.h1`
   letter-spacing: .3rem;
    text-transform: uppercase;
    color: ${whiteColor};
    text-align: center;
    line-height:30px;
    font-size: 6.5rem;
    margin: 0 auto;
    span {
      color: ${accentColor};
    }
  
   
    @media only screen and (max-width: ${smrtphn}) {
        font-size: 3rem;
        align-self: center;
        /* border: 1px solid green; */
    }
`;

export const Overlay = styled.div`
        &:before {
        background: ${blackColor}
      }
      &:after,&:before {
        position: absolute;
        z-index: 1;
        width: 100%;
        height: 100%;
        display: block;
        left: 0;
        top: 0;
        /* border: 2px solid orange; */
        }
`;

export const MobileHeader = styled.article`
display: none;
@media only screen and (min-width: ${smrtphn}) {
      display: block;
    }

`;