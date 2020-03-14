import styled, {keyframes} from 'styled-components';
import { accentColor, whiteColor, darkColor, darkBlueColor, tablet, tabletsm, smrtphn, laptop} from '../../Global_Styles/global-styles';

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
const slideInRight = keyframes`
    {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

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
`;

export const NavWrapper = styled.header`
    display: flex;
    position: fixed;
    justify-content: space-evenly;
    width: 100%;
    margin: 0 auto;
    z-index: 1;
    color: white;
    margin-top: 1rem;
    /* border: 1px solid red; */


 .changeNav {
     display: none
 }
    @media only screen and (max-width: ${smrtphn}) and (max-width: ${tablet}) {

    }


`;

export const Logo = styled.img`
    width: 15%;
    /* border: 1px solid white; */
`;

export const NavLinks = styled.section`
    display: ${props => props.mobile ? 'none' : 'flex'};
    justify-content: space-around;
    align-items: center;
    width: 40%;
    font-family: 'Montserrat' sans-serif;
    /* border: 1px solid orange; */
    /* .close {
        display: none;
    }
    .open {
        display: block;
    } */
    .activeRoute {
    border-bottom: 1.5px solid ${accentColor};
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
    border: none;
    display: none;
    .icon {
        color: ${darkBlueColor};
    }
    @media only screen and (max-width: ${smrtphn}) {
        display: block;
        margin-right: 2rem;
    }
`;

export const MobileLinks = styled.section`
   display: none;
   
@media only screen and (max-width:  ${smrtphn} ) and (max-width: ${tabletsm}){
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

    @media only screen and (max-width: ${tablet}) {
        display: none;
    }


    .mobilelink {
        font-size: 1.3rem;
        text-decoration: none;
        color: ${darkColor};
        padding: 1rem;
        /* border: 1px solid orange; */
        &:hover {
            z-index: 1050;
            /* background-color: ${darkBlueColor};
            color: ${whiteColor}; */
            box-shadow: 0 16px 10px -12px rgba(38, 148, 232, 0.056), 0 4px 25px 0px  rgba(38, 148, 232, 0.12), 0 8px 10px -5px  rgba(38, 148, 232, 0.2);

        }
        /* border: 1px solid white; */
    }

    
    .close {
        display: none;
    }
`;

export const CloseMenu = styled.button`
    color: pink;
    background: none;
    position: absolute;
    right: 2rem;
    color: ${darkColor};
    font-size: 1.5rem; 
    z-index: 5;
    /* border: 2px solid green; */
`;

export const MobileLogo = styled.img`
    width: 30%;
    padding-top: 1rem;
    /* border: 1px solid red; */
`;

/*INNER NAV */

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
    /* border: 1px solid red; */
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
 
 @media only screen and (max-width: ${tabletsm}) {
     border: 2px solid green;
 }
`;

export const TempLogo = styled.h2`
    color: ${darkColor};
    margin-left: 2rem;
`;