import styled, {keyframes} from 'styled-components';
import { blackColor, } from '../../global-styles';
import { smrtphn, } from './../../Global_Styles/global-styles';



const pulse = keyframes`
  0% {
	color: #051E3E;
	}
	10% {
		color: #051E3E;
	}
	30% {
		color: white;
	}
	50% {
		color: #051E3E;
	}
	60% {
		color: #051E3E;
	}
	80% {
		color: white;
	}
	100% {
		color: #051E3E;
	}
`;

const spin = keyframes`
 0% { 
  content:"DREAMS"; 
}
20% {
  content: 'BUSINESSES'
}
40% {
  content: 'BRANDS'
}
60% {
  content: ' GROWTH'
}
80% {
  content: 'PROFITS'
}
100% {
  content: 'LONGEVITY'
}
`;




export const HomeWrapper = styled.section`
    height: 100vh;
    display: flex;
    flex-direction: column;
    /* border: 1px solid red; */
/* 
    @media only screen and (max-width: ${smrtphn}) {
      color: blue;
    } */
`;

export const Tag = styled.section`
   display: flex;
    flex-direction: column;
    align-items: center;
    animation: ${props => props.bottom ? 'spin 5s linear' : null};
    #hi:after {
	content: "";
	animation:${spin} 5s linear;
}
`;
// export const Tag = styled.header`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     animation: ${props => props.bottom ? 'spin 5s linear' : null};
//     #hi:after {
// 	content: "";
// 	animation:${spin} 5s linear;
// }
// `;

export const TagLineContent = styled.h1`
   letter-spacing: .3rem;
    text-transform: uppercase;
    display: inline;
    margin:0px;
    line-height:30px;
    font-size: 5rem; 
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