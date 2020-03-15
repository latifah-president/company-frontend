import styled from 'styled-components';
import { 
  tablet, 
  tabletmd, 
  tabletsm, 
  darkBlueColor, 
  whiteColor, 
  accentColor,
} from '../../Global_Styles/global-styles';

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
`;