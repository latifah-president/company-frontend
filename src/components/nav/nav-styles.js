import styled, {keyframes} from 'styled-components';
import { accentColor, whiteColor, darkColor, darkBlueColor, tablet, tabletsm, smrtphn} from '../../Global_Styles/global-styles';

const slideInDown = keyframes`
  
  from {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }



  from {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

`;

export const InnerNavWrapper = styled.nav`
    background-color: ${whiteColor};
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    box-shadow: 0 16px 10px -12px rgba(38, 148, 232, 0.056), 0 4px 25px 0px  rgba(38, 148, 232, 0.12), 0 8px 10px -5px  rgba(38, 148, 232, 0.2);
    width: 100%;
    z-index: 1000;
    .link {
        text-decoration: none;
        color:  ${darkColor};
        padding: 0 1rem .5rem;
    }
   .open {
       display: flex;
   }

   .close {
       display: none;
   }
`;

export const TempLogo = styled.h2`
    color: ${darkColor};
    margin-left: 2rem;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 3rem;
    font-weight: 300;
`;

export const NavLinks = styled.section`
    display: ${props => props.mobile ? 'none' : 'flex'};
    justify-content: space-around;
    align-items: center;
    width: 40%;
    font-family: 'Montserrat' sans-serif;
    .activeRoute {
    border-bottom: 1.5px solid ${accentColor};
 }

.link {
    cursor: pointer;
}
    @media only screen and (max-width: ${tablet}) {
        width: 60%;
    }

    @media only screen and (max-width: ${tabletsm}) {
        display: none;
    }
    @media only screen and (max-width: ${smrtphn})  {
        display: none;
    }
`;

export const Menu = styled.button`
    background: none;
    font-size: 1.5rem;
    cursor: pointer;
    border: none;
    display: none;
    .icon {
        color: ${darkBlueColor};
    }

    @media only screen and (max-width: ${tabletsm}) {
        display: block;
        margin-right: 2rem;
    }
    @media only screen and (max-width: ${smrtphn}) {
        display: block;
        margin-right: 2rem;
    }
`;

export const MobileLinks = styled.section`
   display: none;
   
   @media only screen and (max-width: ${tablet}) {
        display: none;
    }
    @media only screen and (max-width:  ${smrtphn} ){
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 100px;
        right: 0;
        left: 0;
        background-color: ${whiteColor};
        height: 240px;
        justify-content: space-around;
    }

    @media only screen and  (max-width: ${tabletsm}) {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 100px;
        right: 0;
        left: 0;
        background-color: ${whiteColor};
        height: 240px;
        justify-content: space-around;
    }
  
    .mobilelink {
        font-size: 1.3rem;
        text-decoration: none;
        color: ${darkColor};
        padding: 1rem;
        &:hover {
            z-index: 1050;
            box-shadow: 0 16px 10px -12px rgba(38, 148, 232, 0.056), 0 4px 25px 0px  rgba(38, 148, 232, 0.12), 0 8px 10px -5px  rgba(38, 148, 232, 0.2);

        }
    }
    .close {
        display: none;
    }
`;