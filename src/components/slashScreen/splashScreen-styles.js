import styled from 'styled-components';
import { 
  tablet, 
  tabletmd, 
  tabletsm, 
  darkBlueColor, 
  whiteColor, 
  accentColor,
  smrtphn,
} from '../../Global_Styles/global-styles';
import ripples from './../../assets/ripples.jpg' ;

export const HomeWrapper = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url(${ripples});
  /* -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover; */
  /* background-color: ${darkBlueColor}; */
  justify-content: center;
  align-items: center;
  /* overflow: hidden; */
    /* border: 1px solid red; */
`;

export const Tag = styled.header`
   display: flex;
    flex-direction: column;
    width: 96%;
    line-height: 1rem;
   /* border: 1px solid white; */
  @media only screen and (max-width: ${tablet}) {
        width: 100%;
    }
`;

export const TagLineContent = styled.h1`
   letter-spacing: .2rem;
    text-transform: uppercase;
    color: ${whiteColor};
    text-align: center;
    line-height:30px;
    font-size: 6rem;
    font-weight: 400;
    font-family: Arial, Helvetica, sans-serif;
    /* border: 1px solid red; */
    display: ${props => props.mobile ? 'none' : null};
    span {
      color: ${accentColor};
    }
    @media only screen and (max-width: ${tablet}) {
        font-size: 5rem;
    }
    @media only screen and (max-width: ${tabletmd}) {
        font-size: 5.5rem;
        display: ${props => props.mobile ? 'block' : 'none'};
    }
    @media only screen and (max-width: ${tabletsm}) {
      font-size: 4rem;
    }
    @media only screen and (max-width: ${smrtphn}) {
      font-size: 3rem;
      /* border: 1px solid green; */
      /* width: 80%; */
    }
`;